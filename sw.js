// Offline support: keeps a copy of the trip page (and fonts/photos it has loaded) on the phone,
// so it still opens in China if the VPN drops. Bump VERSION after each update to refresh the copy.
const VERSION = "trip-v40";
const CORE = ["./", "./index.html", "./shanghai.js", "./beijing.js", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png", "./apple-touch-icon.png", "./beijing-rings.jpg"];

// Save each file on its own, so one missing file (an icon, say) doesn't stop the rest from being saved.
self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(VERSION)
      .then(c => Promise.allSettled(CORE.map(u => c.add(new Request(u, { cache: "reload" })))))
      .then(() => self.skipWaiting())
  );
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

// Try the network, but give up after a few seconds (in China the site can hang instead of failing).
const fetchWithTimeout = (req, ms) => new Promise((resolve, reject) => {
  const t = setTimeout(() => reject(new Error("timeout")), ms);
  fetch(req).then(r => { clearTimeout(t); resolve(r); }, err => { clearTimeout(t); reject(err); });
});
const save = (key, res) => { if (res && res.ok) { const copy = res.clone(); caches.open(VERSION).then(c => c.put(key, copy)).catch(() => {}); } return res; };
const offline = () => new Response("", { status: 504, statusText: "Offline" });

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);

  // The page itself: network first (to pick up edits), saved copy if offline or slow.
  if (req.mode === "navigate") {
    e.respondWith(
      fetchWithTimeout(req, 4000).then(res => res.ok ? save("./index.html", res) : caches.match("./index.html").then(hit => hit || res))
        .catch(() => caches.match("./index.html").then(hit => hit || caches.match("./")).then(hit => hit || offline()))
    );
    return;
  }

  // Our own files (the wording in shanghai.js / beijing.js): network first, saved copy if offline or slow.
  if (url.origin === location.origin) {
    e.respondWith(
      fetchWithTimeout(req, 4000).then(res => res.ok ? save(req, res) : caches.match(req, { ignoreSearch: true }).then(hit => hit || res))
        .catch(() => caches.match(req, { ignoreSearch: true }).then(hit => hit || offline()))
    );
    return;
  }

  // Fonts and photos: use the saved copy if we have one, otherwise fetch and save it.
  // If it can't be fetched (photos are often blocked in China), quietly return an empty "offline" reply.
  e.respondWith(
    caches.match(req).then(hit => hit || fetch(req).then(res => {
      if (res && (res.ok || res.type === "opaque")) { const copy = res.clone(); caches.open(VERSION).then(c => c.put(req, copy)).catch(() => {}); }
      return res;
    })).catch(() => offline())
  );
});
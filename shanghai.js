// =====================================================================
//  SHANGHAI: all the wording for the Shanghai half of the trip site.
//  Edit the text inside the "quotes" and save; index.html reads this file.
//
//  Quick rules so nothing breaks:
//   • Keep the "double quotes" around text, and the commas between items.
//   • A quote inside text needs a backslash: \"like this\".
//   • \n inside text starts a new paragraph.
//   • To remove something, delete the whole { ... } block including its comma.
//   • After saving, open the site; if a card is blank, a comma or quote is off.
//   • Bump VERSION in sw.js after uploading so phones get the new text.
//
//  What the fields mean:
//   prep         Start card, in folding sections:
//     bookings       Booking checklist (when, what, links: [{ label, url }], dianping search).
//     packingStarter / shoppingStarter   Items pre-filled into everyone's list the first time.
//     apps           "Good to know" apps to download (name, why).    tips   Other good-to-know lines.
//   history      About card: short history paragraphs (photo = Wikimedia file name).
//   neighborhoods  Neighborhoods card: map from the hotel + one entry per area
//                  (name, zh, district, lat/lng for the map, getThere, vibe, plan, history, photo, source).
//   ourList      Our list card: sections of saved places (name, zh, note, address, amap search).
//   days         One block per day:
//     zh / area / title / summary / highlights   The station sign at the top of the card.
//     stops      The suggested plan, in order. Each stop:
//       time       "9:30" shows as "around 9:30"; words like "Then", "Lunch", "Dinner" are fine too.
//       type       run, see, shop, tea, coffee, food, misc, book, tbd (meals sit in the plan with their meal name).
//       label      Small word above the title (Run, See, Lunch...).
//       detail     The line under the title.     address    Shown under the detail.
//       amap       What the "Open in Amap" button searches.      dianping   What the Dianping button searches.
//       metro      The "M" directions line. 
//       order      "What to order (sharing)" dishes (en, zh).
//       options    "Where to get it" places (name, why, address, amap).
//       alsoShowNotes  Names of notes (below) to show under "About this place" for this stop.
//     food / places / shopping / sights   The notes behind "About this place" (name, text, source link).
//     explore         "Explore nearby" per part of the day: { Morning: [...], Midday, Afternoon, Evening },
//                     each place (name, zh, kind, about, amap).
//     foodIdeas       "Explore Food Choices": the food (dish, short = a few words on it) and a place to get it
//                     (name, what, why, tip, area, address, hours, amap). Already-planned ones are hidden.
//     otherOptions    The "If we have time" panel for activities (group, name, why, address, amap).
// =====================================================================

window.TRIP = window.TRIP || {};
TRIP.shanghai = {
  name: "Shanghai",
  zh: "上海",
  dates: "15–20 November",
  amapCity: "310000",
  // ---------- Start card ----------
  prep: {
    title: "Bookings & essentials",
    summary: "Six days based by Nanjing East Rd metro (Lines 2 & 10). Morning run at 6:30, coffee and light breakfast post run then back to hotel. Search in Dianping for other coffee shop options.",
    color: "#6B7785",
    ink: "#4A5563",
    bookings: [
      {
        when: "Nov 5",
        what: "Buy train tickets Shanghai → Beijing for Nov 20",
        links: [
          { label: "12306 (official)", url: "https://www.12306.cn/en/index.html" },
          { label: "Trip.com trains", url: "https://www.trip.com/trains/china/" }
        ]
      },
      {
        when: "By Nov 5",
        what: "Reserve 八EIGHT for Thu Nov 19 dinner (only 8 seats a night, so book first)",
        links: [
          {
            label: "SmartShanghai listing",
            url: "https://www.smartshanghai.com/venue/34506/eight_yongkang_lu"
          }
        ],
        dianping: "EIGHT 永康路"
      },
      {
        when: "By Nov 10",
        what: "Optional: reserve Cheng Long Hang for Mon Nov 16 crab-roe noodles. Jia Jia Tang Bao and Lao Xing Xian don't need booking",
        links: [
          {
            label: "Book on the Michelin page",
            url: "https://guide.michelin.com/us/en/shanghai-municipality/shanghai/restaurant/cheng-long-hang-huangpu"
          },
          { label: "Call +86 21 6321 2010", url: "tel:+862163212010" }
        ]
      },
      {
        when: "By Nov 10",
        what: "Message I-TATTOO for a flash tattoo on Wed Nov 18, around 2 PM",
        links: [
          {
            label: "Time Out listing",
            url: "https://www.timeoutshanghai.com/features/Things_to_Do-Things_to_Do/69567/The-best-tattoo-studios-in-Shanghai.html"
          }
        ],
        dianping: "I-TATTOO"
      },
      {
        when: "By Nov 12",
        what: "Book Shanyucaoshe tea for Wed Nov 18, around 4:45 PM",
        links: [
          { label: "Our Amap link", url: "https://surl.amap.com/dEmmPoe0qh" }
        ],
        dianping: "山余草舍"
      },
      {
        when: "By Nov 12",
        what: "Book the massage for Sun Nov 15, 5:30 PM",
        links: [
          {
            label: "Amap: 359 Weihai Rd",
            url: "https://uri.amap.com/search?keyword=%E5%A8%81%E6%B5%B7%E8%B7%AF359%E5%8F%B7&city=310000"
          }
        ],
        dianping: "威海路359号 按摩"
      },
      {
        when: "Nov 15, 5 PM",
        what: "Book the National Museum of China for Sun Nov 22 (opens 7 days ahead at 5 PM)",
        links: [
          { label: "Official booking site", url: "https://pcticket.chnmuseum.cn/museum-en/#/personal/index" }
        ]
      },
      {
        when: "Nov 15",
        what: "Reserve Tiananmen Square entry for Sun Nov 22 (free; slots open 1–7 days ahead at 12:00 noon). WeChat mini program: 天安门广场预约参观",
        links: [
          {
            label: "How to book (Trip.com guide)",
            url: "https://www.trip.com/guide/attraction/how-to-register-for-tiananmen-square.html"
          }
        ]
      },
      {
        when: "Nov 17, 8 PM",
        what: "Book the Forbidden City for Tue Nov 24 (opens 7 days ahead at 8 PM)",
        links: [
          { label: "Official: bookingticket.dpm.org.cn", url: "https://bookingticket.dpm.org.cn" },
          { label: "International portal", url: "https://intl.dpm.org.cn" }
        ]
      },
      {
        when: "Nov 18–19",
        what: "Check the Beijing forecast and book Mubus (bus + Great Wall entry) on Trip.com. Plan is Sat Nov 21; Mon Nov 23 is the backup",
        links: [
          {
            label: "Mubus on Trip.com",
            url: "https://www.trip.com/things-to-do/detail/89362507?language=EN&locale=en_xx&districtId=1&districtType=1"
          }
        ]
      }
    ],
    packingStarter: [
      "Passport",
      "Phone + charger",
      "Power bank",
      "Pocket tissues",
      "Some cash in yuan (Lan Xin and a few noodle shops are cash only)",
      "Running gear",
      "Warm layers, gloves and a hat for Beijing"
    ],
    shoppingStarter: [],
    apps: [
      {
        name: "Alipay 支付宝",
        why: "Pays for almost everything, including the metro (Transport QR code) and share bikes. Link a foreign card before flying."
      },
      {
        name: "WeChat 微信",
        why: "Messaging, plus mini programs used for bookings (e.g. 天安门广场预约参观 for Tiananmen). Some places only take WeChat Pay."
      },
      {
        name: "Amap 高德地图",
        why: "Directions and public transit (公交) routes. Every Amap button on this site opens it."
      },
      {
        name: "Dianping 大众点评",
        why: "Opening hours, reviews, queues and menus. Every Dianping button on this site opens it."
      },
      { name: "Trip.com", why: "Train tickets, the Mubus Great Wall package, and English customer service." },
      {
        name: "Didi 滴滴 (or the Didi tab inside Alipay)",
        why: "Taxis, for the times the metro doesn't work."
      },
      { name: "eSIM or VPN", why: "Google, WhatsApp and Instagram are blocked without one." },
      {
        name: "Translate app with Chinese downloaded for offline use",
        why: "Point the camera at menus and signs. Google Translate needs a VPN, so download offline Chinese in Apple Translate too."
      }
    ],
    tips: [
      "Set up Alipay or WeChat Pay with a foreign card; it also pays for the metro and bike-share.",
      "Use Amap (高德) or Apple Maps; Google Maps works poorly in China. Get an eSIM or VPN for Google and WhatsApp.",
      "Carry our passports everywhere: museums, trains and many attractions check them.",
      "Works offline: open this page once with internet (and VPN) before the trip, then it opens even if the VPN drops. Amap and Dianping buttons work in China without a VPN; photos, fonts and Wikipedia links need one.",
      "We're mostly on the metro: scan the Alipay transport QR code at the gates, and use Amap's public transit tab (公交) for live routes. Stops with an M badge say which line to take.",
      "Use Dianping (大众点评) for opening hours, reviews and queues, and Amap for directions. Food and coffee stops have a Dianping button that searches in Chinese (e.g. 精品咖啡, 小笼包) to find spots near us."
    ]
  },
  // ---------- About card ----------
  history: {
    title: "Shanghai, quickly",
    photo: "Shanghai Nanjing Road 1930s.jpg",
    paragraphs: [
      "It started as a small farming and fishing village on the Huangpu River. It became a county seat in 1292, and in the 1550s it got a city wall to keep out Japanese pirates.",
      "Everything changed in 1842, when the Treaty of Nanjing after the First Opium War forced Shanghai open as a treaty port. The British (1845), Americans (1848) and French (1849) carved out their own self-run zones, and the British and American ones merged into the International Settlement in 1863.",
      "By the 1920s and 30s it was Asia's money and party capital, called \"the Paris of the East, the New York of the West\". Japan occupied it during WWII, and the Communists took the city in 1949.",
      "From the 1990s, Pudong across the river went from farmland to the skyline we know. Today it's a city of about 25 million."
    ],
    source: "https://en.wikipedia.org/wiki/History_of_Shanghai",
    areas: [
      {
        name: "The Bund",
        zh: "外滩",
        photo: "Bund and Huangpu River, Shangahi.JPG",
        source: "https://en.wikipedia.org/wiki/The_Bund",
        text: "\"Bund\" comes from a Hindi word for an embankment. This 1.6 km riverfront was the headquarters of foreign banks and trading houses from the 1860s to the 1940s, which is why it's lined with 52 grand European-style buildings. The Chinese name, 外滩, just means \"outer bank\"."
      },
      {
        name: "Nanjing Road",
        zh: "南京路",
        photo: "2014.11.15.181414 Nanjing Road Pedestrian Zone Shanghai.jpg",
        source: "https://en.wikipedia.org/wiki/Nanjing_Road",
        text: "Started in 1845 as \"Park Lane\" and named Nanking Road in 1862. Eight big department stores opened here in the early 1900s, making it China's most famous shopping street. The east end has been pedestrian since 2000; the west end used to be called Bubbling Well Road."
      },
      {
        name: "People's Square",
        zh: "人民广场",
        photo: "People's Square of Shanghai City at night.jpg",
        source: "https://en.wikipedia.org/wiki/People's_Square_(Shanghai)",
        text: "The old International Settlement racecourse, now the city's civic center: the Shanghai Museum, Grand Theatre and People's Park. The old Race Club clubhouse with its clock tower is now the Shanghai History Museum."
      },
      {
        name: "The Old City",
        zh: "老城厢",
        photo: "Shanghai - Yu Garden - 0034.jpg",
        source: "https://en.wikipedia.org/wiki/Old_City_(Shanghai)",
        text: "The original walled Chinese town, built up in the 1550s against pirates. While the foreigners ran the concessions, foreigners called this the \"Chinese City\". The wall came down in 1912 and became Renmin Rd and Zhonghua Rd. Yu Garden and the City God Temple are its heart."
      },
      {
        name: "Former French Concession",
        zh: "法租界",
        photo: "Wukang Mansion, Shanghai, May 2016 01.JPG",
        source: "https://en.wikipedia.org/wiki/French_concession_of_Shanghai",
        text: "France's self-run zone from 1849 to 1943, expanded until it was about 15 times its original size. The French planted plane trees on Avenue Joffre (now Huaihai Rd) in 1902, and \"French planes\" now line streets all over China. Sun Yat-sen and writer Eileen Chang lived here."
      },
      {
        name: "Jing'an",
        zh: "静安",
        photo: "Jing'an Temple,Shanghai.JPG",
        source: "https://en.wikipedia.org/wiki/Jing'an,_Shanghai",
        text: "Named after Jing'an Temple (\"peace and quiet temple\"). West Nanjing Rd, the old Bubbling Well Road, is now the fancy shopping strip, with lane houses tucked behind the malls."
      },
      {
        name: "Pudong & Lujiazui",
        zh: "浦东",
        photo: "Lujiazui Skyline from Bund.jpg",
        source: "https://en.wikipedia.org/wiki/Lujiazui",
        text: "\"East of the Huangpu.\" It was mostly farmland and warehouses until the government made it a special development zone in the early 1990s. Now it's the Oriental Pearl, Jin Mao, the \"bottle opener\" and China's tallest building, the 632 m Shanghai Tower."
      },
      {
        name: "Xuhui & Longhua",
        zh: "徐汇",
        photo: "Longhua Pagoda.JPG",
        source: "https://en.wikipedia.org/wiki/Longhua_Temple",
        text: "The south side of the old French Concession and the riverside. Home to Longhua Temple, whose seven-story pagoda dates back to 977, and the West Bund, a former docks and airport area turned art district."
      }
    ]
  },
  // ---------- Neighborhoods card ----------
  neighborhoods: {
    title: "The districts around us",
    summary: "Shanghai is split into districts (区). Here's each one on our plan: what it feels like, how far it is from the hotel, and what to see there.",
    hotel: {
      name: "Our hotel",
      transit: "Nearest metro: Nanjing East Rd 南京东路 (Lines 2 & 10), a few minutes' walk. People's Square 人民广场 (Lines 1, 2 & 8) is one stop west.",
      lat: 31.237,
      lng: 121.479
    },
    note: "Sketch map: each pin is roughly the heart of the district, and distances are straight lines from the hotel. Real routes are longer, so use Amap for live directions.",
    areas: [
      {
        name: "Huangpu District",
        zh: "黄浦区",
        here: true,
        lat: 31.237,
        lng: 121.479,
        heart: "our hotel",
        photo: "Bund and Huangpu River, Shangahi.JPG",
        source: "https://en.wikipedia.org/wiki/Huangpu_District",
        getThere: "We're in it. Most of it is walkable, or one or two metro stops away.",
        days: ["d1", "d2", "d3", "d4", "d5", "d6"],
        vibe: "The old heart of the city and where we're staying. The Bund's grand 1920s banks, neon Nanjing Rd, the walled Old City around Yu Garden, and the leafy east end of the French Concession around Xintiandi and Sinan Rd. Busy, historic and a bit touristy, but everything is close.",
        places: [
          {
            name: "The Bund",
            zh: "外滩",
            note: "Riverside banks and the skyline view. Our morning runs.",
            plan: "Runs; Sun night",
            amap: "外滩"
          },
          {
            name: "Nanjing East Rd",
            zh: "南京东路",
            note: "Neon pedestrian street right outside the hotel.",
            plan: "Every day",
            amap: "南京东路步行街"
          },
          {
            name: "People's Square & People's Park",
            zh: "人民广场",
            note: "Museums, the Grand Theatre and the park.",
            plan: "Tue run",
            amap: "人民广场"
          },
          {
            name: "Yu Garden & Old Street",
            zh: "豫园 / 上海老街",
            note: "Ming-era garden, temple, bazaar and old shopfronts.",
            plan: "Sun morning",
            amap: "豫园"
          },
          {
            name: "Xintiandi & Sinan Mansion",
            zh: "新天地 / 思南公馆",
            note: "Restored lane houses, garden villas and Fuxing Park.",
            plan: "Sun afternoon, Wed run",
            amap: "新天地"
          },
          {
            name: "Tianzifang",
            zh: "田子坊",
            note: "Maze of 1930s lanes full of tiny shops.",
            plan: "Thu late afternoon",
            amap: "田子坊"
          }
        ]
      },
      {
        name: "Jing'an District",
        zh: "静安区",
        lat: 31.2235,
        lng: 121.4455,
        heart: "Jing'an Temple",
        photo: "Jing'an Temple,Shanghai.JPG",
        source: "https://en.wikipedia.org/wiki/Jing'an,_Shanghai",
        getThere: "Line 2 west to Jing'an Temple 静安寺, about 15 min.",
        days: ["d1", "d3"],
        vibe: "Polished and upmarket. A golden temple squeezed between luxury malls on West Nanjing Rd, with lane houses, cafes and small boutiques hiding on the side streets behind them.",
        places: [
          {
            name: "Jing'an Temple",
            zh: "静安寺",
            note: "Gold-roofed Buddhist temple among skyscrapers.",
            plan: "Tue",
            amap: "静安寺"
          },
          {
            name: "West Nanjing Rd",
            zh: "南京西路",
            note: "Big malls and flagship stores.",
            plan: "Tue afternoon",
            amap: "南京西路"
          },
          {
            name: "Zhangyuan",
            zh: "张园",
            note: "Restored shikumen block turned shops and pop-ups.",
            plan: "Tue",
            amap: "张园"
          },
          {
            name: "Wujiang Rd",
            zh: "吴江路",
            note: "Snack street; Yang's sheng jian.",
            plan: "Tue snack",
            amap: "吴江路"
          }
        ]
      },
      {
        name: "Xuhui District",
        zh: "徐汇区",
        lat: 31.205,
        lng: 121.438,
        heart: "Wukang Rd",
        photo: "Wukang Mansion, Shanghai, May 2016 01.JPG",
        source: "https://en.wikipedia.org/wiki/Xuhui_District",
        getThere: "Line 10 to Shanghai Library 上海图书馆 or Jiaotong University 交通大学, about 25 min. Longhua is further south on Lines 11 and 12.",
        days: ["d1", "d4", "d5"],
        vibe: "The leafy, artsy side of town. The western half of the old French Concession (plane trees, garden villas, Anfu and Wukang Rd boutiques and cafes), then further south the old Longhua Temple and the West Bund art riverfront. Calm and walkable; our favorite area to wander.",
        places: [
          {
            name: "Wukang Rd & Wukang Building",
            zh: "武康路 / 武康大楼",
            note: "The flatiron building and tree-lined villa streets.",
            plan: "Wed",
            amap: "武康大楼"
          },
          {
            name: "Anfu Rd",
            zh: "安福路",
            note: "Concept stores: Salomon, Musinsa, Deja Vu, Harmay.",
            plan: "Wed",
            amap: "安福路"
          },
          {
            name: "Shanyucaoshe at Rose Villa",
            zh: "山余草舍",
            note: "Our must-do tea house.",
            plan: "Wed",
            amap: "山余草舍"
          },
          {
            name: "Longhua Temple & Pagoda",
            zh: "龙华寺",
            note: "Shanghai's oldest pagoda (977).",
            plan: "Thu",
            amap: "龙华寺"
          },
          {
            name: "West Bund & Long Museum",
            zh: "西岸 / 龙美术馆",
            note: "Old docks turned art riverfront.",
            plan: "Thu",
            amap: "龙美术馆西岸馆"
          }
        ]
      },
      {
        name: "Pudong New Area",
        zh: "浦东新区",
        lat: 31.2395,
        lng: 121.5,
        heart: "Lujiazui",
        photo: "Lujiazui Skyline from Bund.jpg",
        source: "https://en.wikipedia.org/wiki/Pudong",
        getThere: "Line 2 east under the river: 2 stops to Lujiazui (about 10 min), more to Century Park. Qiantan is further south on Line 8.",
        days: ["d2", "d5"],
        vibe: "Everything across the river is new: farmland until the 1990s, now the skyscraper skyline, wide boulevards, big parks and malls. Shiny and spacious rather than charming, with the best view of the Bund.",
        places: [
          {
            name: "Lujiazui riverfront",
            zh: "陆家嘴",
            note: "Shanghai Tower, Oriental Pearl and the Bund view.",
            plan: "Mon sunset",
            amap: "陆家嘴滨江"
          },
          {
            name: "Shanghai Museum East",
            zh: "上海博物馆东馆",
            note: "The new home of the city's big collection.",
            plan: "Mon",
            amap: "上海博物馆东馆"
          },
          {
            name: "Century Park",
            zh: "世纪公园",
            note: "Huge lake park next to the museum.",
            plan: "Mon",
            amap: "世纪公园"
          },
          {
            name: "Qiantan riverside",
            zh: "前滩",
            note: "New parks and bike paths; Aftertaste coffee.",
            plan: "Thu bike ride",
            amap: "前滩公园"
          }
        ]
      },
      {
        name: "Putuo District",
        zh: "普陀区",
        lat: 31.251,
        lng: 121.4475,
        heart: "M50",
        source: "https://en.wikipedia.org/wiki/Putuo_District,_Shanghai",
        getThere: "Line 13 to Jiangning Rd 江宁路, about 25 min.",
        days: ["d3"],
        vibe: "Old mills and warehouses along Suzhou Creek, partly turned into galleries. Grittier and quieter than downtown, with a real art-scene feel at M50.",
        places: [
          {
            name: "M50 Creative Space",
            zh: "莫干山路50号",
            note: "Galleries and artist studios in old textile mills.",
            plan: "Tue",
            amap: "莫干山路50号"
          },
          {
            name: "Suzhou Creek walk",
            zh: "苏州河",
            note: "Creekside path past old warehouses.",
            plan: "Tue",
            amap: "苏州河步道"
          }
        ]
      },
      {
        name: "Changning District",
        zh: "长宁区",
        lat: 31.219,
        lng: 121.4155,
        heart: "Zhongshan Park",
        source: "https://en.wikipedia.org/wiki/Changning_District",
        getThere: "Line 2 to Zhongshan Park 中山公园, about 25 min.",
        days: ["d3"],
        vibe: "Residential and low-key, popular with locals and expats, with the quieter west end of Yuyuan Rd's boutiques. We mostly come here to eat.",
        places: [
          {
            name: "157 Shi Fang",
            zh: "157食坊",
            note: "Michelin Bib Gourmand Shanghainese dinner.",
            plan: "Tue dinner",
            amap: "157食坊 凯旋路"
          },
          {
            name: "Propaganda Poster Art Centre",
            zh: "杨培明宣传画艺术中心",
            note: "Mao-era poster collection in a basement.",
            plan: "Optional",
            amap: "杨培明宣传画艺术中心"
          }
        ]
      },
      {
        name: "Minhang District",
        zh: "闵行区",
        lat: 31.1945,
        lng: 121.32,
        offMap: true,
        heart: "Hongqiao Station",
        source: "https://en.wikipedia.org/wiki/Shanghai_Hongqiao_railway_station",
        getThere: "Line 2 direct to Hongqiao Railway Station 虹桥火车站, about 40 min.",
        days: ["d6"],
        vibe: "The far west edge: the Hongqiao railway station and airport hub. Suburban; we only pass through for the train.",
        places: [
          {
            name: "Hongqiao Railway Station",
            zh: "上海虹桥站",
            note: "Our high-speed train to Beijing.",
            plan: "Fri",
            amap: "上海虹桥站"
          }
        ]
      }
    ]
  },
  // ---------- Our list card ----------
  ourList: [
    {
      section: "Must-try Shanghainese dishes",
      items: [
        {
          name: "Hong shao rou",
          zh: "红烧肉",
          note: "Red-braised pork belly: thick cubes slow-braised in soy, sugar and Shaoxing wine until caramelized. Plan: Tue 157 Shi Fang, Wed Lan Xin."
        },
        {
          name: "Xiao long bao",
          zh: "小笼包",
          note: "Steamed soup dumplings: minced pork plus gelatin that melts into broth. Plan: Sun lunch, Wed lunch."
        },
        {
          name: "Sheng jian bao",
          zh: "生煎包",
          note: "Pan-fried pork buns with a crispy bottom, sesame and scallion on top, and hot soup inside. Plan: Tue snack, Fri breakfast."
        },
        {
          name: "Scallion oil noodles",
          zh: "葱油拌面",
          note: "Noodles tossed in sweet-savory soy and scallion-infused oil. Plan: Tue snack, Fri breakfast, plus on several dinner order lists."
        },
        {
          name: "Hairy crab & crab roe",
          zh: "大闸蟹 / 蟹粉面",
          note: "Autumn delicacy: steamed whole with ginger vinegar, or crab meat and roe over noodles or rice. Plan: Mon dinner, as crab-roe noodles or rice."
        },
        {
          name: "Kao fu",
          zh: "烤麸",
          note: "Braised wheat gluten with wood ear, peanuts and daylilies. Plan: Tue dinner order list."
        },
        {
          name: "Smoked fish",
          zh: "熏鱼",
          note: "Fried fish soaked in a sweet spiced soy glaze (not actually smoked). Optional, since we're going lighter on fish."
        },
        {
          name: "Yellow croaker noodle soup",
          zh: "黄鱼面",
          note: "Flaky yellow croaker in milky fish-bone broth. Optional, since we're going lighter on fish."
        },
        {
          name: "Yan du xian",
          zh: "腌笃鲜",
          note: "Fresh and salted pork, bamboo shoots and tofu skin soup. Heads up: it's a spring dish, so it may not be on menus in November."
        }
      ]
    },
    {
      section: "Food spots",
      items: [
        {
          name: "Zhangshifu Breakfast",
          zh: "张师傅",
          note: "Local mom-and-pop Shanghainese breakfast, highly recommended. Plan: Tue breakfast.",
          address: "287 Shimen 2nd Rd, Jing'an 石门二路287号",
          amap: "石门二路287号"
        },
        {
          name: "Lai Lai Xiao Long",
          zh: "莱莱小笼",
          note: "Michelin-recommended soup dumplings; crab-roe xiao long bao. Plan: Sun lunch option.",
          address: "506 / 481 Tianjin Rd, Huangpu 天津路506号",
          amap: "天津路506号"
        },
        {
          name: "Zhang Ji Niu Rou Mian Guan",
          zh: "张记牛肉面馆",
          note: "Beef noodle soup, locally run, a few steps from the hotel.",
          address: "530 Tianjin Rd, Huangpu 天津路530号",
          amap: "天津路530号"
        },
        {
          name: "Xian De Lai",
          zh: "鲜得来",
          note: "Shanghai pork chop with rice cakes (排骨年糕), 10 min from the hotel.",
          address: "290–292 Ninghai East Rd, Huangpu 宁海东路290号",
          amap: "宁海东路290号"
        },
        {
          name: "Zhen Lao Da Fang",
          zh: "真老大房",
          note: "Fresh-meat mooncakes, baked to order. Potential for a long line. Plan: Sun breakfast.",
          address: "536 Nanjing East Rd, Huangpu 南京东路536号",
          amap: "南京东路536号"
        },
        {
          name: "Shen Da Cheng",
          zh: "沈大成",
          note: "Pastry shop with ~150 years of history: glutinous rice balls (双酿团). Plan: Sun breakfast add-on.",
          address: "636 Nanjing East Rd, Huangpu 南京东路636号",
          amap: "南京东路636号"
        },
        {
          name: "Wei Xiang Zhai",
          zh: "味香斋",
          note: "\"Shanghai's best sesame noodles\" (麻酱面). Some people say it's overhyped, but it's Michelin selected. Plan: Mon other options.",
          address: "151 Hubei Rd, Huangpu 湖北路151号 (screenshot also lists a Yandang Rd branch)",
          amap: "味香斋"
        },
        {
          name: "Hu Xi Lao Nong Tang Mian Guan",
          zh: "沪西老弄堂面馆",
          note: "Pork liver noodles. (Not for us, but keeping it on the list.)",
          address: "02, 1F, World Trade Building, 500 Guangdong Rd 广东路500号",
          amap: "广东路500号"
        },
        {
          name: "Yi Gui He",
          zh: "逸桂禾",
          note: "Shoyu-style soup noodles with green onion. Our screenshot list says only get the yangchun noodles (阳春面), curry beef noodles (咖喱牛肉面) or battered pork chop (面拖大排); you can also buy raw noodles to take home.",
          amap: "逸桂禾"
        },
        {
          name: "Xiao Tao Mian Guan",
          zh: "小陶面馆",
          note: "Scallion noodles with spicy pork. It's a Michelin Bib Gourmand noodle shop.",
          amap: "小陶面馆 嘉善路",
          address: "222 Jiashan Rd, Xuhui 嘉善路222号"
        },
        {
          name: "Lao Di Fang Mian Guan",
          zh: "老地方面馆",
          note: "\"Best home-style noodles.\" Michelin Bib Gourmand, 30+ years; braised pork belly in spiced dark soy, tofu-skin-wrapped pork. Cash only.",
          address: "107 Sinan Rd, Huangpu 思南路107号",
          amap: "老地方面馆 思南路"
        },
        {
          name: "Xiao Fang's Noodles",
          note: "Soy-based soup noodles with pork belly.",
          amap: "Xiao Fang noodles"
        },
        {
          name: "Jia Jia Tang Bao",
          zh: "佳家汤包",
          note: "Soup dumplings; crab roe noodles. Plan: Sun lunch option.",
          address: "90 Huanghe Rd, Huangpu 黄河路90号",
          amap: "佳家汤包"
        },
        {
          name: "Dingxing Rd Dan Bing Tan",
          zh: "定兴路蛋饼摊",
          note: "Jianbing / egg pancakes. About \"Dingxing Rd Egg Pancake\": that's almost certainly the same stall, since 蛋饼 (dan bing) literally means egg pancake.",
          address: "No. 6 Dingxing Rd 定兴路6号",
          amap: "定兴路蛋饼"
        },
        {
          name: "YongFeng Noodles",
          zh: "永丰面馆",
          note: "Benbang noodle shop from the screenshot list.",
          amap: "永丰面馆"
        },
        {
          name: "Jingmei Wuxi Noodles (Yanping Rd)",
          note: "Michelin Bib Gourmand noodles, Wuxi style (slightly sweet).",
          address: "Yanping Rd 延平路",
          amap: "Jingmei Wuxi Noodles Yanping Road"
        },
        {
          name: "Ding Te Le Zhou Mian Guan",
          note: "Congee and noodle shop.",
          amap: "Ding Te Le congee noodles"
        },
        {
          name: "Shangda Food City (Hongji Culture Leisure Square)",
          note: "Night market.",
          amap: "Shangda Food City Hongji"
        },
        {
          name: "Yongxing Restaurant",
          note: "Home-style Chinese food in an old French Concession lane. Shanghai's government guide recommends the salted-egg-yolk duck rolls, salt and pepper spare ribs, and potherb mustard with cashews.",
          address: "No. 1, Lane 626, Middle Fuxing Rd 复兴中路626弄1号",
          amap: "复兴中路626弄1号"
        },
        {
          name: "Nanxiang Steamed Bun",
          zh: "南翔馒头店",
          note: "Founded 1900: paper-thin xiao long bao, seasonal fillings, and the oversized \"super\" bun you drink with a straw. Dining room refurbished 2018. Book a private room or be ready to queue. Plan: Sun lunch.",
          address: "85 Yuyuan Rd 豫园路85号",
          amap: "南翔馒头店豫园"
        },
        {
          name: "Wu You Xian",
          zh: "屋有鲜",
          note: "Seasonal xiao long bao (crab, shepherd's purse). Plan: Wed lunch.",
          address: "1F-103, 7 South Maoming Rd 茂名南路7号",
          amap: "屋有鲜"
        }
      ]
    },
    {
      section: "Coffee",
      items: [
        { name: "Shanlifang Coffee", note: "From our list.", amap: "Shanlifang Coffee" },
        {
          name: "Aftertaste",
          note: "Local, our pick. Plan: Thu after the bike ride.",
          address: "W3-102, Qiantan Park Lane 前滩公园巷W3-102",
          amap: "Aftertaste 前滩"
        },
        {
          name: "Marmalade (Chaoyang Rd)",
          note: "Small and cozy.",
          address: "Chaoyang Rd 朝阳路",
          amap: "Marmalade coffee"
        },
        { name: "Blacksheep Espresso", note: "They have a bathroom!", amap: "Blacksheep Espresso" },
        { name: "Chill Cool Cafe", note: "From our list.", amap: "Chill Cool Cafe" },
        {
          name: "Honky Tonk Coffee",
          note: "Near the French Concession. Plan: optional on Wed.",
          address: "262 Xiangyang South Rd 襄阳南路262号",
          amap: "襄阳南路262号"
        },
        {
          name: "313 Mento",
          note: "Gelato on LiXi Rd: minimalist vibe, flavors curated like perfume, interesting flavor profiles.",
          address: "LiXi Rd 丽西路",
          amap: "313 Mento"
        },
        { name: "SSP", note: "Cafe from our list.", amap: "SSP cafe" },
        {
          name: "Yichi Garden Cafe (Guangfu)",
          note: "Historical architecture; may be far from the center.",
          amap: "Yichi Garden Cafe"
        },
        {
          name: "1/10 Coffee Roaster",
          note: "Roasts on site, overlooks a small park. Plan: Sun afternoon.",
          address: "73–75 Changle Rd 长乐路73号",
          amap: "长乐路73号"
        },
        {
          name: "Always Coffee Roaster",
          note: "Local roaster near the hotel. Plan: Sun, Mon, Fri.",
          address: "Room 106, 501 Jiujiang Rd 九江路501号106室",
          amap: "Always Coffee Roaster 九江路"
        },
        {
          name: "Single Origin Roasters",
          note: "Single-origin, roasts in-house. Plan: Tue.",
          address: "151 Jiaozhou Rd 胶州路151号",
          amap: "胶州路151号"
        },
        {
          name: "Wunder",
          note: "One-shop roaster, closed Mondays. Plan: Wed.",
          address: "161 South Maoming Rd 茂名南路161号",
          amap: "茂名南路161号"
        }
      ]
    },
    {
      section: "Tea",
      items: [
        {
          name: "Shanyucaoshe (Shan Yu Cao She / Shanyu Grass House)",
          zh: "山余草舍",
          note: "Our must-do tea house, in Rose Villa. Plan: Wed.",
          address: "Lane 44 Fuxing West Rd, Xuhui 复兴西路44弄",
          amap: "山余草舍"
        },
        {
          name: "Mu Chun Tea House (Sinan Mansion)",
          zh: "沐春茶舍",
          note: "Plan: Sun.",
          address: "1, Lane 196 Nanchang Rd 南昌路196弄1号",
          amap: "沐春茶舍思南公馆店"
        },
        {
          name: "Chinese-medicine gelato & homemade Chinese cola",
          note: "Right next to ALOHA Coffee.",
          address: "267 Xiangyang South Rd 襄阳南路267号",
          amap: "襄阳南路267号"
        }
      ]
    },
    {
      section: "Places to see",
      items: [
        {
          name: "Shanghai Grand Theatre / Opera House",
          note: "See from outside; shows are too hard to get.",
          address: "People's Square 人民广场",
          amap: "上海大剧院"
        },
        { name: "The Bund", zh: "外滩", note: "Plan: runs and Sun night.", amap: "外滩" },
        {
          name: "Shanghai Museum East",
          zh: "上海博物馆东馆",
          note: "Plan: Mon.",
          address: "1952 Century Ave 世纪大道1952号",
          amap: "上海博物馆东馆"
        },
        {
          name: "China Art Museum",
          zh: "中华艺术宫",
          note: "Giant red Expo 2010 pavilion. Plan: Mon other options.",
          address: "205 Shangnan Rd 上南路205号",
          amap: "中华艺术宫"
        },
        {
          name: "Jing'an Temple",
          zh: "静安寺",
          note: "Plan: Tue.",
          address: "1686 Nanjing West Rd 南京西路1686号",
          amap: "静安寺"
        },
        {
          name: "Shanghai Library",
          zh: "上海图书馆",
          note: "Calm reading room. Plan: Tue other options.",
          address: "1555 Middle Huaihai Rd 淮海中路1555号",
          amap: "上海图书馆淮海路"
        },
        { name: "Nanjing Road", zh: "南京路", note: "Right by the hotel.", amap: "南京东路步行街" },
        {
          name: "Yu Garden & Yuyuan Bazaar",
          zh: "豫园",
          note: "Must go before 9am. Plan: Sun.",
          address: "218 Anren St 安仁街218号",
          amap: "豫园"
        },
        {
          name: "People's Park",
          zh: "人民公园",
          note: "Plan: Tue run.",
          address: "231 Nanjing West Rd 南京西路231号",
          amap: "人民公园"
        },
        {
          name: "Longhua Pagoda & Longhua Square underground space",
          zh: "龙华寺",
          note: "Architectural space with an underground museum and cafe beneath the pagoda, quiet from crowds. Plan: Thu.",
          address: "2853 Longhua Rd 龙华路2853号",
          amap: "龙华寺"
        },
        {
          name: "Shanghai Botanical Garden",
          zh: "上海植物园",
          note: "Dropped from the plan (far from everything).",
          address: "1111 Longwu Rd 龙吴路1111号",
          amap: "上海植物园"
        },
        { name: "French Concession", zh: "法租界", note: "Plan: Wed.", amap: "武康路" },
        {
          name: "Wukang Building",
          zh: "武康大楼",
          note: "Plan: Wed.",
          address: "Wukang Rd & Huaihai Rd 武康路淮海中路口",
          amap: "武康大楼"
        },
        {
          name: "The Roof / Street of 1000 Red Jars",
          note: "Terracotta-pot facades; architecture.",
          address: "458 Madang Rd 马当路458弄",
          amap: "马当路458弄"
        },
        {
          name: "\"Henghi xuhui World\"",
          note: "Architecture and trees, from our notes. Not sure which place this is: maybe the Hengshan Rd area in Xuhui? Check before going."
        },
        {
          name: "Fosun Foundation art center",
          zh: "复星艺术中心",
          note: "Art center on the Bund.",
          amap: "复星艺术中心"
        },
        { name: "LiXi Road", zh: "丽西路", note: "Where 313 Mento is.", amap: "丽西路" }
      ]
    },
    {
      section: "Shopping",
      items: [
        {
          name: "M50 Creative Space",
          note: "Contemporary galleries, artist studios, independent shops. Plan: Tue.",
          address: "50 Moganshan Rd, Putuo 莫干山路50号",
          amap: "莫干山路50号"
        },
        { name: "Moon Moon Home", note: "Stationery shop.", amap: "Moon Moon Home" },
        {
          name: "Deja Vu Recycle",
          note: "Bookstore and secondhand clothing. Plan: Wed (Anfu Rd).",
          address: "300 Anfu Rd 安福路300号 (bigger branch at Hongqiao Tiandi)",
          amap: "安福路300号"
        },
        { name: "Anfu Road", zh: "安福路", note: "Plan: Wed.", amap: "安福路" },
        {
          name: "Salomon \"Fu Jun\"",
          note: "Plan: Wed.",
          address: "183–187 Anfu Rd 安福路183号",
          amap: "安福路183号"
        },
        { name: "Musinsa", note: "Plan: Wed.", address: "Anfu Rd 安福路", amap: "Musinsa 安福路" },
        {
          name: "Harmay",
          zh: "话梅",
          note: "Skincare and beauty. Plan: Wed.",
          address: "55 Wukang Rd 武康路55号",
          amap: "武康路55号"
        }
      ]
    },
    {
      section: "Bars",
      items: [
        { name: "ChairClub", note: "Plan: optional Tue night.", amap: "ChairClub" },
        { name: "Cozy Music Lab", note: "Our live music bar. Plan: Wed night.", amap: "Cozy Music Lab" }
      ]
    },
    {
      section: "Other things to do",
      items: [
        { name: "Photoshoot?", note: "Idea from our notes." },
        {
          name: "Yibo Studio",
          note: "Make our own glass jewelry. Plan: Wed.",
          address: "1F, No. 13, Lane 553 Middle Fuxing Rd 复兴中路553弄13号",
          amap: "复兴中路553弄"
        },
        {
          name: "Yang Peiming Propaganda Poster Art Centre",
          zh: "杨培明宣传画艺术中心",
          note: "Communist propaganda poster collection. Plan: Wed other options.",
          address: "Bldg 7, Block K, 726 Yan'an West Rd, Changning 延安西路726号",
          amap: "杨培明宣传画艺术中心"
        },
        {
          name: "Yu Health",
          note: "Spa with cupping, from the video we saw. Plan: Sun (swap in if we find it).",
          amap: "Yu Health"
        },
        {
          name: "Sisyphus",
          zh: "西西弗斯相机商店",
          note: "Vintage digital camera store (early-2000s CCD digicams, film and instant cameras). Plan: Sun, right after 1/10 Coffee.",
          address: "1F, No. 13, 188 Shaanxi South Rd (near Changle Rd) 陕西南路188号13号",
          amap: "西西弗斯相机商店"
        }
      ]
    }
  ],
  // ---------- Day by day ----------
  days: [
    // ---------- Day 1: Sunday 15 November, Yu Garden & the old city ----------
    {
      key: "d1",
      date: "2026-11-15",
      when: "Sunday 15 November",
      tabTop: "15",
      tabSub: "Sun",
      color: "#9177B8",
      ink: "#6B4E8C",
      zh: "豫园",
      area: "Yu Garden & the old city",
      title: "Arrival, Yu Garden & spa",
      summary: "Take the metro into the city, drop our bags, grab coffee and then go to Nanjing East Rd before hitting Yu Garden early. Early lunch soup dumplings? Then walk around the Old Street for the architecture, then coffee again? lol, buy some digi cam at Sisyphus, and tea in the French Concession then walking around Fuxing Park. Break at hotel then a spa!!! then go see the Bund after",
      highlights: ["Yu Garden", "Xiao long bao", "Camera shop", "Tea house", "Spa"],
      stops: [
        {
          time: "5:10",
          type: "misc",
          label: "Arrive",
          title: "Land at Pudong Airport",
          detail: "Immigration, SIM/eSIM, check Alipay."
        },
        {
          time: "6:15",
          type: "misc",
          label: "Transit",
          title: "Metro to the hotel, drop bags",
          detail: "Easiest: Metro Line 2 direct to East Nanjing Rd (about 75 min, ¥8; follow signs if asked to change trains). Faster: first Maglev at 7:02 to Longyang Rd (8 min, ¥50), then Line 2 (about 30 min). Pay with Alipay's transit QR code.",
          metro: "Get off at East Nanjing Rd 南京东路, a few minutes' walk to the hotel.",
          amap: "南京东路地铁站"
        },
        {
          time: "7:50",
          type: "food",
          label: "Breakfast",
          title: "Zhen Lao Da Fang: one hot fresh-meat mooncake",
          detail: "鲜肉月饼. Add a glutinous rice ball from Shen Da Cheng (636 Nanjing East Rd) if still hungry.",
          address: "536 Nanjing East Rd 南京东路536号",
          amap: "南京东路536号",
          dianping: "鲜肉月饼",
          alsoShowNotes: ["Nanjing Road", "Shen Da Cheng 沈大成", "Glutinous rice treats"]
        },
        {
          time: "8:10",
          type: "coffee",
          label: "Coffee",
          title: "Always Coffee Roaster, to go",
          detail: "We need it after the flight! Local roaster a minute off Nanjing East Rd, so grab a cup with the mooncake. If it's not open yet, tap Dianping for an early cafe nearby.",
          address: "Room 106, 501 Jiujiang Rd 九江路501号106室",
          amap: "Always Coffee Roaster 九江路",
          alsoShowNotes: ["Always Coffee Roaster"]
        },
        {
          time: "8:40",
          type: "see",
          label: "See",
          title: "Yu Garden & Yuyuan Bazaar",
          detail: "Early, before the crowds.",
          address: "218 Anren St 安仁街218号",
          amap: "豫园",
          metro: "Line 10 to Yuyuan Garden 豫园, or a 20-min walk from the hotel.",
          alsoShowNotes: ["Nine-Turn Bridge"]
        },
        {
          time: "Lunch",
          type: "food",
          label: "What to eat",
          title: "Xiao long bao 小笼包",
          detail: "Classic pork soup dumplings; crab-roe 蟹粉小笼 if we want to splurge. Go early (around 10:30) before the lines.",
          order: [
            { en: "Pork xiao long bao", zh: "鲜肉小笼" },
            { en: "Crab-roe xiao long bao (1 basket to try)", zh: "蟹粉小笼" },
            { en: "Small wonton soup", zh: "小馄饨" },
            { en: "Scallion oil noodles, if on the menu", zh: "葱油拌面" }
          ],
          options: [
            {
              name: "Nanxiang Steamed Bun 南翔馒头店",
              why: "The famous one, right at Yu Garden. Sit upstairs.",
              address: "85 Yuyuan Rd 豫园路85号",
              amap: "南翔馒头店豫园"
            },
            {
              name: "Lai Lai Xiao Long 莱莱小笼",
              why: "Michelin-recommended, from our list. Near the hotel if we'd rather eat later.",
              address: "506 Tianjin Rd 天津路506号",
              amap: "天津路506号"
            },
            {
              name: "Jia Jia Tang Bao 佳家汤包",
              why: "Small, no-frills dumpling shop by People's Park.",
              address: "90 Huanghe Rd 黄河路90号",
              amap: "佳家汤包"
            }
          ],
          dianping: "小笼包",
          alsoShowNotes: ["Xiao long bao 小笼包"]
        },
        {
          time: "11:15",
          type: "see",
          label: "Walk",
          title: "Shanghai Old Street 上海老街 (Fangbang Middle Rd)",
          detail: "Walk it east to west, right next to Yu Garden: late-Qing/Republican shopfronts at the east end, then black tiles, white walls and red columns in the Ming/Qing-style west end.",
          address: "Fangbang Middle Rd 方浜中路 (Henan South Rd → Zhonghua Rd)",
          amap: "上海老街"
        },
        {
          time: "12:15",
          type: "coffee",
          label: "Afternoon coffee",
          title: "1/10 Coffee Roaster",
          detail: "Independent shop that roasts on the spot, overlooking a small park.",
          address: "73–75 Changle Rd 长乐路73-75号",
          amap: "长乐路73号",
          metro: "Line 10 from Yuyuan Garden toward Xintiandi / Shaanxi South Rd 陕西南路, then walk."
        },
        {
          time: "12:45",
          type: "shop",
          label: "Shop",
          title: "Sisyphus 西西弗斯相机商店: vintage digital cameras",
          detail: "Buy a digi cam? Apparently has a lot of early-2000s CCD digicams (Canon IXUS, Fujifilm, Sony, Olympus...) plus film and instant cameras. Use the testing area before buying, and grab a spare battery, charger and memory card while we're there. Note that it's in a narrow alley off Shaanxi South Rd",
          address: "1F, No. 13, 188 Shaanxi South Rd (near Changle Rd) 陕西南路188号13号",
          amap: "西西弗斯相机商店",
          dianping: "西西弗斯相机",
          metro: "A 2-min walk from 1/10 Coffee. Nearest station: Shaanxi South Rd 陕西南路 (Lines 1, 10, 12).",
          alsoShowNotes: ["Sisyphus 西西弗斯相机商店"]
        },
        {
          time: "13:30",
          type: "tea",
          label: "Tea",
          title: "Mu Chun 沐春茶舍 (Sinan Mansion), then Fuxing Park & around",
          detail: "410 m from Huaihai Middle Rd metro, Exit 2.",
          address: "1, Lane 196 Nanchang Rd 南昌路196弄1号",
          amap: "沐春茶舍思南公馆店",
          metro: "Line 13 to Huaihai Middle Rd 淮海中路, Exit 2, about 400 m."
        },
        {
          time: "14:15",
          type: "misc",
          label: "Rest",
          title: "Back to hotel, check in, nap",
          metro: "Line 13 to West Nanjing Rd 南京西路, change to Line 2 for East Nanjing Rd 南京东路."
        },
        {
          time: "17:00",
          type: "book",
          label: "Book now",
          title: "Book the National Museum for Nov 22 + Tiananmen Square",
          detail: "Museum tickets release at 5:00 PM, 7 days ahead. Reserve Tiananmen for the same day."
        },
        {
          time: "17:30",
          type: "misc",
          label: "Spa",
          title: "Massage / Spa",
          address: "2F, 359 Weihai Rd 威海路359号",
          amap: "威海路359号"
        },
        {
          time: "Dinner",
          type: "food",
          label: "What to eat",
          title: "Braised pork noodles 焖肉面",
          detail: "Shanghai noodle-house comfort food, plus a cold dish or two. Then the Bund lit up at night.",
          order: [
            { en: "Braised pork noodles", zh: "焖肉面" },
            { en: "Scallion oil noodles", zh: "葱油拌面" },
            { en: "Sweet & sour ribs (cold)", zh: "糖醋小排" },
            { en: "Braised gluten (cold)", zh: "烤麸" },
            { en: "Stir-fried greens", zh: "清炒时蔬" }
          ],
          options: [
            {
              name: "De Xing Guan 德兴馆",
              why: "Since 1878, Michelin Guide, on our list. 5 min from the Bund.",
              address: "471 Guangdong Rd 广东路471号",
              amap: "德兴馆 广东路"
            },
            {
              name: "Lao Di Fang Mian Guan 老地方面馆",
              why: "Michelin Bib Gourmand noodle shop from our list; braised pork belly in spiced dark soy. Cash only.",
              address: "107 Sinan Rd 思南路107号",
              amap: "老地方面馆 思南路"
            }
          ],
          dianping: "焖肉面"
        }
      ],
      explore: {
        Morning: [
          {
            name: "Huxinting Teahouse",
            zh: "湖心亭",
            kind: "Teahouse",
            about: "The pavilion on the pond outside Yu Garden, reached by a zigzag bridge (spirits are said to only travel in straight lines). The building dates from 1784.",
            amap: "湖心亭茶楼"
          },
          {
            name: "City God Temple",
            zh: "城隍庙",
            kind: "Temple",
            about: "Taoist temple right next to Yu Garden, first built in the 1400s. Locals come to burn incense for luck.",
            amap: "上海城隍庙"
          },
          {
            name: "Yuyuan Bazaar side lanes",
            zh: "豫园商城",
            kind: "Old lanes",
            about: "Step off the main loop into the smaller lanes for snack shops and tea sellers, with fewer crowds.",
            amap: "豫园商城"
          },
          {
            name: "Dajing Pavilion",
            zh: "大境阁",
            kind: "History",
            about: "The last surviving piece of the old city wall, with a small pavilion on top. A quiet five-minute detour from Old Street.",
            amap: "大境阁"
          }
        ],
        Midday: [
          {
            name: "Fuxing Park",
            zh: "复兴公园",
            kind: "Park",
            about: "Opened in 1909 as the French Park. Locals dance, play cards and mahjong, and sing; there's also a big Marx and Engels statue.",
            amap: "复兴公园"
          },
          {
            name: "Sinan Rd",
            zh: "思南路",
            kind: "Old villas",
            about: "Plane-tree street of 1920s and 30s garden villas. Zhou Enlai's former Shanghai home is along here.",
            amap: "思南路"
          },
          {
            name: "Nanchang Rd",
            zh: "南昌路",
            kind: "Street",
            about: "Quiet lane-house street with small cafes and vintage shops.",
            amap: "南昌路"
          },
          {
            name: "Xintiandi",
            zh: "新天地",
            kind: "Old lanes, now shops",
            about: "Restored shikumen lanes turned into restaurants and shops. It's also where the Communist Party held its first congress in 1921; the house is now a museum.",
            amap: "新天地"
          }
        ],
        Evening: [
          {
            name: "The Bund at night",
            zh: "外滩",
            kind: "Sight",
            about: "The old banks are lit up in the evening with the Pudong skyline glowing across the river. About 10 min on foot from the hotel.",
            amap: "外滩"
          },
          {
            name: "Nanjing East Rd at night",
            zh: "南京东路步行街",
            kind: "Street",
            about: "Neon signs on and crowds out. Walk it from the hotel to the Bund.",
            amap: "南京东路步行街"
          },
          {
            name: "Fuzhou Rd bookstores",
            zh: "福州路",
            kind: "Books",
            about: "Shanghai's old book street. Shanghai Book City is a huge multi-floor bookstore with art books and stationery.",
            amap: "上海书城 福州路"
          }
        ]
      },
      food: {
        intro: "Shanghai's home cooking is benbang cai (本帮菜), \"local-style food\": sweet, savory and glossy with soy sauce — locals call it \"thick oil, red sauce\" (浓油赤酱).",
        items: [
          {
            name: "Fresh-meat mooncakes 鲜肉月饼",
            text: "Suzhou-style: flaky, layered pastry wrapped around a juicy seasoned pork filling, baked to order.\nLocals line up for them around Mid-Autumn Festival, but the Nanjing Rd shops sell them all year. Eat it right away while it's hot, or it's just not the same."
          },
          {
            name: "Glutinous rice treats",
            text: "Shen Da Cheng's thing is sticky rice snacks. The classic to get is 双酿团 (shuang niang tuan): a chewy rice ball rolled in sesame, with red bean and black sesame filling inside.\nThey're sold by the piece, so it's easy to grab one or two and keep walking."
          },
          {
            name: "Xiao long bao 小笼包",
            text: "THE Shanghai dumpling. The trick is pork aspic (basically meat jelly) folded into the filling, which melts into soup when it's steamed.\nThey come from Nanxiang, a town on Shanghai's northwest edge, around the 1870s.\nHow to eat without burning ourselves: lift it gently by the top knot into the spoon, bite a tiny hole, sip the soup, then dip in the ginger vinegar and eat the rest.",
            source: "https://en.wikipedia.org/wiki/Xiaolongbao"
          },
          {
            name: "Crab-roe xiao long bao 蟹粉小笼",
            text: "The fancy autumn version. 蟹粉 means hairy crab meat and roe, mixed into or replacing the pork filling, so the soup comes out rich, orange and a little sweet.\nCrab season runs roughly September to December, so November is perfect timing. Expect it to cost a few times more than the regular ones. Worth it at least once.",
            source: "https://en.wikipedia.org/wiki/Xiaolongbao"
          }
        ]
      },
      shopping: [
        {
          name: "Sisyphus 西西弗斯相机商店",
          text: "A little shop devoted to early-2000s digicams, the CCD compacts that are having a big comeback for their soft, nostalgic photos. Expect hundreds of them: lots of Canon IXUS, A-series and SX models, plus Fujifilm, Sony, Panasonic, Samsung, Casio, Nikon and Olympus. They also have instant and film cameras, the odd DV camcorder, and batteries, chargers, memory cards and bags.\nMost of it is second-hand, so stock changes week to week. There's a small testing area to try a camera before buying. It's tucked down a narrow alley off Shaanxi South Rd, so look carefully.",
          source: "https://www.smartshanghai.com/wire/shopping/a-digicam-shop-and-the-aesthetics-of-nostalgia"
        }
      ],
      places: [
        {
          name: "Zhen Lao Da Fang 真老大房",
          text: "A long-running Shanghai pastry brand, and the Nanjing Rd shop is the famous one for fresh-meat mooncakes. In our notes: potential for a long line.\nThe line usually moves fast because they're baking nonstop. Order at the window, pay with Alipay"
        },
        {
          name: "Shen Da Cheng 沈大成",
          text: "A pastry shop with about 150 years of history (founded in the 1870s), known for traditional Jiangnan sticky rice snacks and cakes.\nGood for a little sweet thing after the mooncake. The glass counters show everything, so we can just point."
        },
        {
          name: "Nanxiang Steamed Bun 南翔馒头店",
          text: "Founded in 1900, and it's the name everyone links with xiao long bao. Still a constant line out the door.\nTip from our notes: go upstairs to sit down. The menu up there is different from the takeaway window downstairs, and the dining room was refurbished in 2018 so it's nice and airy.\nTry the seasonal fillings, and if we're feeling silly, the oversized \"super\" bun we drink with a straw. Going at 10:30 should beat the lunch rush.",
          source: "https://en.wikipedia.org/wiki/Nanxiang_Steamed_Bun_Restaurant"
        },
        {
          name: "1/10 Coffee Roaster",
          text: "Opened by coffee nerds who roast their beans right there in the shop, so it's about as local as it gets. They carry a wider range of beans than most places.\nIt's a chill spot overlooking a little park. Good place to sit down after the Yu Garden crowds before tea.",
          source: "https://www.smartshanghai.com/listings/cafes/?page=1"
        },
        {
          name: "Mu Chun 沐春茶舍",
          text: "Tea house for Day 1, inside Sinan Mansion's restored old villas.\nHow tea houses work here: we pick a tea (oolong, pu'er, white or green), they brew it in front of us and keep topping up hot water, and we can stay a while. Little snacks usually come with it. Ask them to recommend something local, like a Longjing green tea from nearby Hangzhou."
        },
        {
          name: "De Xing Guan 德兴馆",
          text: "One of the oldest names in Shanghai food, founded in 1878, and on our list (it's also famous for its mooncakes). The Guangdong Rd flagship is in the Michelin Guide.\nDownstairs is the classic noodle-and-rice hall; upstairs is a comfier dining room for Shanghai home-style cooking: cold dishes, hot dishes, soups, noodles and dim sum. The noodles and dim sum are made in-house, and the kitchen starts at 4 AM.\nMichelin's picks are the 两鲜面 and 三鲜面 (mixed-topping noodles, which can include seafood), so for us it's braised pork noodles 焖肉面. A 5-minute walk from the Bund.",
          source: "https://guide.michelin.com/sg/zh_CN/shanghai-municipality/shanghai/restaurant/de-xing-guan-guangdong-road"
        }
      ],
      sights: [
        {
          name: "Nanjing Road",
          text: "It started in 1845 as \"Park Lane\" and was renamed Nanking Road in 1862. By the early 1900s it had eight big department stores and was China's most famous shopping street, and a lot of those old buildings are still standing.\nThe East part right by our hotel is pedestrian-only, about 1.2 km of neon signs and crowds. It's best at night when everything's lit up.",
          source: "https://en.wikipedia.org/wiki/Nanjing_Road"
        },
        {
          name: "The Bund",
          text: "The riverside strip of grand old banks and trading houses, mostly built in the 1920s and 30s when Shanghai was Asia's money capital.\nLook for the Peace Hotel (green pyramid roof, 1929), the old HSBC building with its domed mosaic ceiling, and the Customs House clock tower.\nAcross the river is Lujiazui, which was basically farmland until the 1990s. The view is best at night, and the lights usually go off around 10–11 PM.",
          source: "https://en.wikipedia.org/wiki/The_Bund"
        },
        {
          name: "Yu Garden",
          text: "A private garden that Ming dynasty official Pan Yunduan started in 1559 for his father, Pan En, to enjoy in old age. Work stalled when Pan was posted to Sichuan, so it wasn't done until around 1577, almost 20 years later.\nLater it was the headquarters of the Small Swords Society uprising (1853–55), got badly damaged, and was restored in 1956–61.\nWhat to look for: the huge rockeries, koi ponds, the walls with dragons running along the top, and the Exquisite Jade Rock, a 3.3 m, 5-ton stone full of holes.\nIn our notes: must go before 9am. The garden itself opens around 9:00, but the bazaar streets around it are open earlier, so we can wander first and be at the gate when it opens.",
          source: "https://en.wikipedia.org/wiki/Yu_Garden"
        },
        {
          name: "Shanghai Old Street 上海老街",
          text: "The 825 m stretch of Fangbang Middle Rd running past Yu Garden, inside what used to be the walled old city. It was restored as a showcase of old Shanghai streetscapes, and the two ends look different on purpose.\nThe east end is late Qing and early Republican: checkered windows, wooden shop boards and upturned eaves. The west end is Ming and Qing style, with black tiles, whitewashed walls and red columns, plus antique and curio shops and teahouses.\nIt's touristy, but it's the easiest way to see traditional Shanghai architecture in one walk. Old-name shops to spot include Tonghanchun (traditional medicine), Wuliangcai and Old Shanghai Tea House.",
          source: "https://www.chinahighlights.com/shanghai/attraction/shanghai-old-street.htm"
        },
        {
          name: "Nine-Turn Bridge",
          text: "The zigzag bridge across Yu Garden's lake. The story is that evil spirits can only travel in straight lines, so the zigzags keep them out.\nIt gets packed fast, which is another reason to go early.",
          source: "https://en.wikipedia.org/wiki/Nine-turn_bridge"
        },
        {
          name: "Sinan Mansion",
          text: "A block of restored 1920s–30s garden villas from the French Concession days, now cafes, shops and a boutique hotel.\nThe area had famous neighbors back in the day: Zhou Enlai's old Shanghai residence and opera star Mei Lanfang's home are both on Sinan Rd. It's a really pretty stroll, especially with the trees changing color in November."
        },
        {
          name: "Fuxing Park",
          text: "Opened in 1909 as the French Park, with a formal French-style garden.\nToday it's full of locals doing their thing: dancing, tai chi, playing cards and mahjong, and singing. Just sit on a bench and people-watch. There's also a big statue of Marx and Engels in there, which is kind of random and fun to find.",
          source: "https://en.wikipedia.org/wiki/Fuxing_Park"
        }
      ],
      foodIdeas: [
        {
          meal: "Lunch",
          area: "Near the hotel",
          dish: "Xiao long bao 小笼包",
          short: "soup dumplings",
          name: "Lai Lai Xiao Long 莱莱小笼",
          what: "Steamed soup dumplings: a thin wrapper around pork and hot broth. Nibble a small hole and sip the soup first.",
          why: "Michelin-recommended, near the hotel. Good if Nanxiang's line is crazy.",
          address: "506 Tianjin Rd 天津路506号",
          amap: "天津路506号"
        },
        {
          meal: "Lunch",
          area: "People's Square",
          dish: "Xiao long bao 小笼包",
          short: "soup dumplings",
          name: "Jia Jia Tang Bao 佳家汤包",
          what: "Steamed soup dumplings: a thin wrapper around pork and hot broth. Nibble a small hole and sip the soup first.",
          why: "Small, no-frills dumpling shop by People's Park; get the pork ones.",
          address: "90 Huanghe Rd 黄河路90号",
          amap: "佳家汤包"
        },
        {
          meal: "Snack",
          area: "Near the hotel",
          dish: "Sheng jian bao 生煎",
          short: "pan-fried pork buns with soup inside",
          name: "Da Hu Chun 大壶春",
          what: "Pan-fried pork buns: fluffy on top, crispy on the bottom, with hot soup inside.",
          why: "Michelin Bib Gourmand since 1932, near the hotel, open 8 AM to 9 PM.",
          address: "136 Middle Sichuan Rd 四川中路136号",
          amap: "大壶春 四川中路",
          hours: "8:00–21:00"
        },
        {
          meal: "Dinner",
          area: "Near the hotel",
          dish: "Pork chop with rice cakes 排骨年糕",
          short: "fried pork chop with chewy rice cakes",
          name: "Xian De Lai 鲜得来",
          what: "A crispy fried pork chop with chewy rice cakes in a sweet soy sauce.",
          why: "10 min from the hotel. Crispy fried pork chop and chewy rice cakes in sweet sauce.",
          address: "290–292 Ninghai East Rd 宁海东路290号",
          amap: "宁海东路290号"
        },
        {
          meal: "Dinner",
          area: "Near the hotel",
          dish: "Beef noodle soup 牛肉面",
          short: "clear beef broth noodles",
          name: "Zhang Ji Niu Rou Mian Guan 张记牛肉面馆",
          what: "Noodles in a clear beef broth with sliced beef. A quick, cheap bowl.",
          why: "Locally run, a few steps from the hotel.",
          address: "530 Tianjin Rd 天津路530号",
          amap: "天津路530号"
        },
        {
          meal: "Lunch",
          area: "Near the hotel",
          dish: "Shanghai noodles 上海面",
          short: "soy-broth noodles with braised toppings",
          name: "Yong Feng Mian Guan 永丰面馆",
          what: "Classic benbang noodle shop: soy-broth or tossed noodles with toppings like braised pork or fried eel.",
          why: "Michelin-listed noodle shop.",
          address: "320 Hankou Rd 汉口路320号",
          hours: "7:00–21:00",
          amap: "永丰面馆 汉口路",
          dianping: "上海面馆"
        },
        {
          meal: "Lunch",
          area: "Near the hotel",
          dish: "Shanghai noodles 上海面",
          short: "soy-broth noodles with braised toppings",
          name: "Fu Xing Mian Wang 复兴面王",
          what: "Shanghai-style noodles in soup or tossed, with a choice of toppings.",
          why: "Michelin-listed noodle shop.",
          address: "Shop 101B, West Wing 1F, 355–377 Fuzhou Rd 福州路355号",
          hours: "8:00–21:00",
          amap: "复兴面王 福州路",
          dianping: "上海面馆"
        },
        {
          meal: "Lunch",
          area: "Near Xintiandi",
          dish: "Congee and noodles 粥 / 面",
          short: "rice porridge and noodle bowls, open 24 hours",
          name: "Ding Te Le 顶特勒",
          what: "Rice porridge and noodle bowls, plus simple Shanghai dishes. Open around the clock, so good for very early or very late.",
          why: "Michelin-listed noodle shop.",
          address: "22, Lane 494 Middle Huaihai Rd 淮海中路494弄22号",
          hours: "Open 24 hours",
          amap: "顶特勒 淮海中路"
        }
      ],
      otherOptions: [
        {
          group: "If it rains",
          name: "Tianzifang 田子坊",
          why: "Covered-ish shikumen lanes full of tiny shops and cafes, a short walk from Mu Chun. (It's also on Thursday.)",
          address: "Lane 210 Taikang Rd 泰康路210弄",
          amap: "田子坊"
        },
        {
          group: "If we skip the spa",
          name: "House of Blues & Jazz",
          why: "An old-school live jazz bar near the Bund, running since 1995.",
          address: "60 Fuzhou Rd 福州路60号",
          amap: "福州路60号"
        }
      ]
    },
    // ---------- Day 2: Monday 16 November, Pudong ----------
    {
      key: "d2",
      date: "2026-11-16",
      when: "Monday 16 November",
      tabTop: "16",
      tabSub: "Mon",
      color: "#6FA313",
      ink: "#4C7A0B",
      zh: "浦东",
      area: "Pudong",
      title: "Museum day + Pudong",
      summary: "Museum day! Run the Bund, breaky, coffee at Always, then most of the morning at Shanghai Museum East (open Mondays, when most museums are closed). Grab a snack somewhere then walk around Century Park, catch sunset across the river from the Bund, and end with crab-roe noodles near the hotel.",
      highlights: ["Bund run", "Shanghai Museum East", "Century Park", "Sunset"],
      stops: [
        {
          time: "6:30",
          type: "run",
          label: "Run",
          title: "Bund promenade to Waibaidu Bridge",
          detail: "Back via Jiujiang Rd to the hotel. Then coffee, breakfast and shower in whatever order works.",
          amap: "外滩"
        },
        {
          time: "Then",
          type: "coffee",
          label: "Suggested coffee",
          title: "Always Coffee Roaster",
          detail: "A minute from the hotel. Or any early cafe we spot on Dianping.",
          address: "Room 106, 501 Jiujiang Rd 九江路501号106室",
          amap: "Always Coffee Roaster 九江路"
        },
        {
          time: "Then",
          type: "food",
          label: "Suggested breakfast",
          title: "Street stall: soy milk + fried dough stick",
          detail: "豆浆 + 油条, or a sticky rice roll (粢饭团).",
          dianping: "豆浆油条",
          alsoShowNotes: ["Shanghai street breakfast"]
        },
        { time: "Then", type: "misc", label: "Hotel", title: "Shower" },
        {
          time: "9:30",
          type: "misc",
          label: "Transit",
          title: "Metro Line 2 to Shanghai Science & Technology Museum stn"
        },
        {
          time: "10:00",
          type: "see",
          label: "Museum",
          title: "Shanghai Museum East",
          detail: "Open Mondays. Walk-in with passport.",
          address: "1952 Century Ave 世纪大道1952号",
          amap: "上海博物馆东馆"
        },
        {
          time: "Lunch",
          type: "food",
          label: "What to eat",
          title: "Fried thick noodles 上海粗炒 or big wontons 荠菜大馄饨",
          detail: "Easy everyday Shanghai lunch after the museum.",
          order: [
            { en: "Shanghai fried thick noodles", zh: "上海粗炒" },
            { en: "Pork & shepherd's purse wontons", zh: "荠菜大馄饨" },
            { en: "Sheng jian, if they have it", zh: "生煎" }
          ],
          options: [
            {
              name: "Any noodle shop around Century Ave",
              why: "The malls and side streets near the museum have plenty. Tap Dianping to find one close by."
            }
          ],
          dianping: "上海粗炒"
        },
        {
          time: "15:00",
          type: "see",
          label: "Wander",
          title: "Century Park & around",
          detail: "No agenda: loop the lake, then drift through the streets and malls nearby.",
          amap: "世纪公园"
        },
        {
          time: "16:30",
          type: "see",
          label: "Sunset",
          title: "Lujiazui riverfront + Museum of Art Pudong",
          detail: "MAP is open until 21:00.",
          address: "2777 Binjiang Ave 滨江大道2777号",
          amap: "浦东美术馆",
          metro: "Line 2 to Lujiazui 陆家嘴, then walk to the river. Two stops back to the hotel after."
        },
        {
          time: "Dinner",
          type: "food",
          label: "What to eat",
          title: "Crab-roe noodles 蟹粉面 or crab-roe rice 蟹粉饭",
          detail: "Our crab night, without wrestling a whole crab: hairy crab meat and roe already picked out and spooned over noodles or rice. Peak season in November. Mix it all in, then a splash of vinegar.",
          order: [
            { en: "Crab-roe noodles", zh: "蟹粉拌面" },
            { en: "Crab-roe over rice", zh: "蟹粉捞饭" },
            { en: "Crab-roe tofu", zh: "蟹粉豆腐" },
            { en: "Wine-fried clover sprouts", zh: "酒香草头" },
            { en: "Scallion oil noodles", zh: "葱油拌面" }
          ],
          options: [
            {
              name: "Jia Jia Tang Bao 佳家汤包",
              why: "On our list for crab-roe noodles; small, no-frills, by People's Park.",
              address: "90 Huanghe Rd 黄河路90号",
              amap: "佳家汤包"
            },
            {
              name: "Cheng Long Hang 成隆行蟹王府",
              why: "One Michelin star, the hairy crab specialist, 5 min from the hotel. Ask for crab-roe noodles or rice (蟹粉面 / 蟹粉饭). Book ahead: +86 21 6321 2010.",
              address: "216 Jiujiang Rd 九江路216号",
              amap: "成隆行蟹王府 九江路"
            },
            {
              name: "Lao Xing Xian 老兴鲜",
              why: "Michelin-listed, on our list; big mall restaurant with lots of non-crab dishes. Walk-ins are realistic.",
              address: "5F Parkson, 918 Middle Huaihai Rd 淮海中路918号百盛5楼",
              amap: "老兴鲜 淮海中路918号"
            }
          ],
          dianping: "蟹粉面"
        }
      ],
      explore: {
        Morning: [
          {
            name: "Waibaidu Bridge",
            zh: "外白渡桥",
            kind: "Bridge",
            about: "The 1907 steel bridge where Suzhou Creek meets the Huangpu. The turnaround point of our run.",
            amap: "外白渡桥"
          },
          {
            name: "Yuanmingyuan Rd",
            zh: "圆明园路",
            kind: "Old buildings",
            about: "Quiet street of restored 1920s and 30s buildings just behind the north end of the Bund. Good photos without the crowds.",
            amap: "圆明园路"
          }
        ],
        Midday: [
          {
            name: "Century Ave",
            zh: "世纪大道",
            kind: "Walk",
            about: "Wide boulevard with sculptures that runs from the museum toward Lujiazui.",
            amap: "世纪大道"
          }
        ],
        Afternoon: [
          {
            name: "AP Plaza market",
            zh: "亚太新阳服饰礼品市场",
            kind: "Market",
            about: "Underground market at Science & Technology Museum station: clothes, bags, tailoring and souvenirs. Haggle hard.",
            amap: "亚太新阳服饰礼品市场"
          },
          {
            name: "Lujiazui Circular Bridge",
            zh: "陆家嘴环形天桥",
            kind: "Viewpoint",
            about: "Big round footbridge between the towers, good for photos of the Oriental Pearl Tower.",
            amap: "陆家嘴环形天桥"
          },
          {
            name: "Binjiang Ave promenade",
            zh: "滨江大道",
            kind: "Riverside walk",
            about: "Riverside path on the Pudong side with the best view back to the Bund.",
            amap: "滨江大道"
          },
          {
            name: "IFC Mall",
            zh: "国金中心",
            kind: "Mall",
            about: "Glossy mall right at Lujiazui station. Good for a warm break and clean bathrooms.",
            amap: "上海国金中心商场"
          }
        ],
        Evening: [
          {
            name: "Peace Hotel",
            zh: "和平饭店",
            kind: "Historic hotel",
            about: "The 1929 hotel with the green pyramid roof on the Bund. Walk through the art deco lobby; the Old Jazz Bar has a band most nights.",
            amap: "和平饭店"
          },
          {
            name: "The Bund at night",
            zh: "外滩",
            kind: "Sight",
            about: "If we missed it on Sunday: the banks are lit up and the Pudong skyline glows across the river.",
            amap: "外滩"
          }
        ]
      },
      food: {
        items: [
          {
            name: "Shanghai street breakfast",
            text: "Locals call the classic breakfast combo the \"four heavenly kings\" (四大金刚): sesame flatbread (大饼), a fried dough stick (油条), a sticky rice roll (粢饭团) and soy milk (豆浆).\nYou can get soy milk sweet (甜) or salty (咸). Salty comes with toppings and is very Shanghai, so it's worth trying once. Pick one or two things to keep it light."
          },
          {
            name: "Fried thick noodles 上海粗炒",
            text: "Thick, chewy wheat noodles stir-fried with dark soy, shredded pork and greens until they're glossy and a little smoky.\nA cheap, filling, very everyday Shanghai lunch. It's easy to find around the malls on Century Ave."
          },
          {
            name: "Big wontons 荠菜大馄饨",
            text: "Shanghai has two styles of wontons, and these are the big ones: plump, stuffed with pork and shepherd's purse (a wild green), and served in a light broth.\nThe small style (小馄饨) is tiny, silky and almost all skin. Fun to try both during the trip."
          },
          {
            name: "Crab-roe noodles 蟹粉面",
            text: "蟹粉 (xie fen) is hairy crab meat and roe, picked by hand and cooked down with a little lard, ginger and Shaoxing wine into a rich orange sauce. Spoon it over plain noodles (蟹粉面 / 蟹粉拌面) or rice (蟹粉饭 / 蟹粉捞饭), mix it all in, and add a splash of vinegar.\nIt's the easy way to eat hairy crab in season: all the flavor, none of the cracking. It's pricey, since it takes several crabs per bowl.",
            source: "https://en.wikipedia.org/wiki/Chinese_mitten_crab"
          }
        ]
      },
      places: [
        {
          name: "Always Coffee Roaster",
          text: "Our pick: a local roaster on Jiujiang Rd, about a minute from the East Nanjing Rd metro. Super close to the hotel, so it's an easy first stop on the way out.\nSince they roast their own beans, it's a good place to buy a bag to bring home."
        },
        {
          name: "Cheng Long Hang 成隆行蟹王府",
          text: "\"A household name among hairy crab lovers\", says Michelin, which gives it one star. It runs its own crab farm, so the supply and quality stay steady, and the shells come packed with creamy yellow roe.\nMichelin's picks: drunken crabs steeped in Shaoxing wine for a month, and a steamed meringue on a stuffed crab shell that uses the meat and roe of three crabs per serving. It's on Jiujiang Rd, about 5 minutes from the hotel. Book ahead.",
          source: "https://guide.michelin.com/us/en/shanghai-municipality/shanghai/restaurant/cheng-long-hang-huangpu"
        },
        {
          name: "Lao Xing Xian 老兴鲜",
          text: "A Michelin Guide pick on the 5th floor of the Parkson mall on Huaihai Rd, ticked on our list. It's Shanghainese with a seafood leaning plus a few Cantonese classics, so there's plenty that isn't fish.\nIt's our walk-in backup for hairy crab night: they take bookings, but as a big mall restaurant, showing up early should be fine.",
          source: "https://guide.michelin.com/sg/zh_CN/shanghai-municipality/shanghai/restaurant/lao-xing-xian"
        }
      ],
      sights: [
        {
          name: "Waibaidu Bridge",
          text: "China's first all-steel bridge, opened on 20 January 1908 where Suzhou Creek meets the Huangpu. It replaced Wills' Bridge, an 1856 wooden toll bridge.\nIt's also called the Garden Bridge, after the Public Garden next to it, and it's the only surviving camelback truss bridge in China. It's in Empire of the Sun and Lust, Caution. In 2008 they actually floated it away on boats to repair it, and it was back in April 2009.",
          source: "https://en.wikipedia.org/wiki/Waibaidu_Bridge"
        },
        {
          name: "Shanghai Museum East",
          text: "The Shanghai Museum's huge new Pudong building, fully opened in 2024. It's where the famous collection lives now: ancient bronzes, ceramics, jade, and painting and calligraphy, plus galleries on the Jiangnan region's culture.\nFree, and normally walk-in with a passport. It's one of the few museums open on Mondays. It's big, so pick a few galleries rather than trying to see everything.",
          source: "https://en.wikipedia.org/wiki/Shanghai_Museum_East"
        },
        {
          name: "Lujiazui",
          text: "Pudong's financial district. The wild part is that it was fields and warehouses until development kicked off in 1990.\nThe skyline: the pink-ball Oriental Pearl Tower (1994), Jin Mao Tower (1999), the \"bottle opener\" Shanghai World Financial Center (2008), and the twisting Shanghai Tower, China's tallest building at 632 m.",
          source: "https://en.wikipedia.org/wiki/Lujiazui"
        },
        {
          name: "Museum of Art Pudong",
          text: "An art museum right on the river facing the Bund, designed by French architect Jean Nouvel and opened in 2021. It does big international shows, often with partners like Tate in London.\nEven if the exhibition isn't our thing, some of the galleries have huge windows framing the Bund. It's open late, so it's great around sunset."
        },
        {
          name: "Century Park",
          text: "Pudong's biggest park, opened in 2000, with a huge lake, lawns and long paths. We can rent bikes or little boats if we want.\nIt's right by the museum, so it's a nice way to walk off a long museum morning."
        }
      ],
      foodIdeas: [
        {
          meal: "Breakfast",
          area: "Near the hotel",
          dish: "Pork chop with rice cakes 排骨年糕",
          short: "fried pork chop with chewy rice cakes",
          name: "Xian De Lai 鲜得来",
          what: "A crispy fried pork chop with chewy rice cakes in a sweet soy sauce.",
          why: "Classic Shanghai pork chop, 10 min from the hotel.",
          address: "290–292 Ninghai East Rd 宁海东路290号",
          amap: "宁海东路290号"
        },
        {
          meal: "Dinner",
          area: "Near the hotel",
          dish: "Sesame noodles 麻酱面",
          short: "noodles in rich sesame sauce",
          name: "Wei Xiang Zhai 味香斋",
          what: "Noodles tossed in rich sesame paste with soy and a little vinegar.",
          why: "Michelin-selected, if we skip the crab. There's also a branch on Yandang Rd.",
          address: "151 Hubei Rd 湖北路151号",
          amap: "味香斋",
          hours: "7:30–20:30"
        },
        {
          meal: "Dinner",
          area: "Near the hotel",
          dish: "Braised pork noodles 焖肉面",
          short: "noodles topped with melt-soft pork belly",
          name: "De Xing Guan 德兴馆",
          what: "Noodles in soy broth topped with a slab of slow-braised pork belly that melts in the mouth.",
          why: "Since 1878, Michelin Guide, 10 min from the hotel.",
          address: "471 Guangdong Rd 广东路471号",
          amap: "德兴馆 广东路"
        },
        {
          meal: "Dinner",
          area: "Near the hotel",
          dish: "Beef noodle soup 牛肉面",
          short: "clear beef broth noodles",
          name: "Zhang Ji Niu Rou Mian Guan 张记牛肉面馆",
          what: "Noodles in a clear beef broth with sliced beef. A quick, cheap bowl.",
          why: "Locally run, a few steps from the hotel.",
          address: "530 Tianjin Rd 天津路530号",
          amap: "天津路530号"
        }
      ],
      otherOptions: [
        {
          group: "If the museum wears us out",
          name: "Shanghai Tower observation deck",
          why: "China's tallest building (632 m) in Lujiazui; the deck is on the 118th floor. Go near sunset.",
          address: "501 Middle Yincheng Rd 银城中路501号",
          amap: "上海中心大厦"
        },
        {
          group: "If it rains",
          name: "China Art Museum 中华艺术宫",
          why: "From our list: the giant red Expo 2010 China Pavilion, free modern Chinese art. Book on WeChat; check it's open Mondays.",
          address: "205 Shangnan Rd 上南路205号",
          amap: "中华艺术宫"
        }
      ]
    },
    // ---------- Day 3: Tuesday 17 November, Jing'an ----------
    {
      key: "d3",
      date: "2026-11-17",
      when: "Tuesday 17 November",
      tabTop: "17",
      tabSub: "Tue",
      color: "#F3560F",
      ink: "#C2410C",
      zh: "静安",
      area: "Jing'an",
      title: "Artsy day + shopping (Jing'an)",
      summary: "Artsy day + shopping round 1. Run west to a proper local breakfast at Zhangshifu, then after the shower, coffee at Single Origin Roasters and the golden Jing'an Temple, buns at Wangjiasha, galleries at M50, and an afternoon on West Nanjing Rd with a sheng jian and scallion oil noodle snack. Dinner at 157 Shi Fang, a Michelin Bib Gourmand: hong shao rou, kao fu and whatever else looks good. Don't forget: book the Forbidden City at 8 PM!",
      highlights: ["Jing'an Temple", "M50", "Shopping", "157 Shi Fang"],
      stops: [
        {
          time: "6:30",
          type: "run",
          label: "Run",
          title: "People's Park loop, then west on Nanjing West Rd",
          detail: "About 4 km, finishing at Zhangshifu for breakfast. Then coffee, breakfast and shower in whatever order works.",
          amap: "人民公园"
        },
        {
          time: "Then",
          type: "coffee",
          label: "Suggested coffee",
          title: "Single Origin Roasters",
          detail: "Near Jing'an Temple. Roasts its own single-origin Ethiopian beans. Or any early cafe we spot on Dianping.",
          address: "151 Jiaozhou Rd 胶州路151号",
          amap: "胶州路151号",
          metro: "Line 2 to Jing'an Temple 静安寺, then about 10 min on foot."
        },
        {
          time: "Then",
          type: "food",
          label: "Suggested breakfast",
          title: "Zhangshifu: sticky rice roll + soy milk",
          detail: "Local mom-and-pop spot.",
          address: "287 Shimen 2nd Rd 石门二路287号",
          amap: "石门二路287号",
          dianping: "上海早餐",
          alsoShowNotes: ["Shanghai street breakfast"]
        },
        {
          time: "Then",
          type: "misc",
          label: "Hotel",
          title: "Back to hotel, shower",
          metro: "Line 2 from West Nanjing Rd 南京西路 to East Nanjing Rd 南京东路, 2 stops."
        },
        {
          time: "10:00",
          type: "see",
          label: "See",
          title: "Jing'an Temple",
          address: "1686 Nanjing West Rd 南京西路1686号",
          amap: "静安寺"
        },
        {
          time: "Lunch",
          type: "food",
          label: "What to eat",
          title: "Vegetable buns 菜馒头 + pork wontons 鲜肉馄饨",
          detail: "Light snack-lunch between Jing'an Temple and M50.",
          order: [
            { en: "Vegetable buns", zh: "菜馒头" },
            { en: "Pork wontons", zh: "鲜肉馄饨" },
            { en: "Sheng jian", zh: "生煎" }
          ],
          options: [
            {
              name: "Wangjiasha 王家沙",
              why: "A Shanghai snack institution since the 1940s, from our list. Order and pay at the counter first.",
              address: "Nanjing West Rd 南京西路 (confirm branch)",
              amap: "王家沙南京西路"
            }
          ],
          dianping: "菜馒头"
        },
        {
          time: "13:30",
          type: "see",
          label: "Art",
          title: "M50 Creative Space",
          detail: "Galleries, studios, design shops.",
          address: "50 Moganshan Rd 莫干山路50号",
          amap: "莫干山路50号",
          metro: "Line 13 to Jiangning Rd 江宁路, then about 10 min on foot."
        },
        {
          time: "15:15",
          type: "shop",
          label: "Shop",
          title: "West Nanjing Rd & around",
          detail: "Shopping round 1: the big malls, plus the lanes and side streets behind them.",
          amap: "南京西路",
          metro: "Line 13 back to West Nanjing Rd 南京西路."
        },
        {
          time: "16:30",
          type: "food",
          label: "Snack",
          title: "Sheng jian bao 生煎 + scallion oil noodles 葱油拌面",
          detail: "Afternoon pick-me-up between shopping and dinner. Bite a small hole first, the soup squirts!",
          order: [
            { en: "Pork sheng jian (4 = one order)", zh: "鲜肉生煎" },
            { en: "Scallion oil noodles", zh: "葱油拌面" },
            { en: "Small wonton soup", zh: "小馄饨" }
          ],
          options: [
            {
              name: "Yang's Dumplings 小杨生煎",
              why: "Right off West Nanjing Rd, open 6:30 AM to 11 PM. Sheng jian only, so pair with noodles elsewhere if we want.",
              address: "178 Wujiang Rd 吴江路178号",
              amap: "小杨生煎 吴江路"
            },
            {
              name: "Da Hu Chun 大壶春",
              why: "Michelin Bib Gourmand since 1932, near the hotel, 8 AM to 9 PM. Classic pork sheng jian plus mini wontons.",
              address: "136 Middle Sichuan Rd 四川中路136号",
              amap: "大壶春 四川中路"
            },
            {
              name: "Dongtaixiang 东泰祥",
              why: "Ticked on our list for both sheng jian (half-leavened) and scallion oil noodles. The flagship is open 24 hours.",
              address: "Chongqing North Rd 重庆北路 (flagship)",
              amap: "东泰祥生煎 重庆北路"
            }
          ],
          dianping: "生煎"
        },
        {
          time: "Dinner",
          type: "food",
          label: "What to eat",
          title: "Hong shao rou 红烧肉 + kao fu 烤麸",
          detail: "The benbang classics: sweet, glossy braised pork and the cold gluten dish. Go early to skip the queue.",
          order: [
            { en: "Red-braised pork belly", zh: "红烧肉" },
            { en: "Braised gluten (cold)", zh: "烤麸" },
            { en: "Sweet & sour ribs", zh: "糖醋小排" },
            { en: "Wine-fried clover sprouts", zh: "酒香草头" },
            { en: "Vegetable rice with pork", zh: "菜饭" },
            { en: "Eel claypot rice, only if we want one fish dish (157)", zh: "鳝丝煲仔饭" }
          ],
          options: [
            {
              name: "157 Shi Fang 157食坊",
              why: "Michelin Bib Gourmand, from our list. Line 2 from Jing'an Temple to Zhongshan Park. Alipay, no foreign cards. No booking needed if we go early; to hold a table, call that afternoon: +86 158 0075 5157.",
              address: "1398 Kaixuan Rd, IM Shanghai T10 凯旋路1398号长宁国际T10栋",
              amap: "157食坊 凯旋路"
            },
            {
              name: "Mao Long 茂隆",
              why: "Michelin Bib Gourmand home cooking, proud of its braised pork. Five tables, cash only. Call ahead: +86 21 6256 1167.",
              address: "134 Jinxian Rd 进贤路134号",
              amap: "茂隆餐厅 进贤路"
            }
          ],
          dianping: "本帮菜"
        },
        {
          time: "20:00",
          type: "book",
          label: "Book now",
          title: "Book the Forbidden City for Nov 24",
          detail: "Tickets release at 8:00 PM, 7 days ahead. Do it at the table!"
        },
        {
          time: "20:30",
          type: "misc",
          label: "Drinks",
          title: "Optional: ChairClub",
          detail: "Confirm location.",
          amap: "ChairClub"
        }
      ],
      explore: {
        Morning: [
          {
            name: "Jing'an Sculpture Park",
            zh: "静安雕塑公园",
            kind: "Park + art",
            about: "Free park full of big outdoor sculptures, a few minutes from our breakfast spot. The spiral-shell building at the north end is the Shanghai Natural History Museum.",
            amap: "静安雕塑公园"
          },
          {
            name: "Jing'an Park",
            zh: "静安公园",
            kind: "Park",
            about: "Right across from the temple. Huge old plane trees, a little pond, and locals doing tai chi and dancing in the morning.",
            amap: "静安公园"
          },
          {
            name: "Yuyuan Rd",
            zh: "愚园路",
            kind: "Street",
            about: "Quiet, tree-lined street a few minutes west of the temple, full of old lane houses, small boutiques and cafes. Good for a slow wander.",
            amap: "愚园路"
          },
          {
            name: "Changde Apartments",
            zh: "常德公寓",
            kind: "Literary spot",
            about: "The 1930s apartment block where the writer Eileen Chang lived in the 1940s. Usually there's a little cafe-bookshop on the ground floor.",
            amap: "常德公寓"
          }
        ],
        Midday: [
          {
            name: "Jade Buddha Temple",
            zh: "玉佛禅寺",
            kind: "Temple",
            about: "Working Buddhist temple from 1882, famous for two Buddhas carved from white Burmese jade. About a 15-minute walk from M50, so it's easy to add before or after.",
            amap: "玉佛禅寺"
          },
          {
            name: "Suzhou Creek walk",
            zh: "苏州河步道",
            kind: "Walk",
            about: "Follow the creek path past old warehouses and bridges. Runs right behind M50.",
            amap: "苏州河步道"
          },
          {
            name: "Moganshan Rd graffiti wall",
            zh: "莫干山路涂鸦墙",
            kind: "Street art",
            about: "The long painted wall along the road outside M50. It changes all the time.",
            amap: "莫干山路"
          },
          {
            name: "Sihang Warehouse",
            zh: "四行仓库",
            kind: "History",
            about: "Where Chinese soldiers held off the Japanese army in 1937 (the \"Eight Hundred Heroes\"). The west wall still has the shell holes, and there's a free museum inside; it may need a free booking on WeChat. About 30 min east along the creek.",
            amap: "四行仓库抗战纪念馆"
          }
        ],
        Afternoon: [
          {
            name: "Zhangyuan",
            zh: "张园",
            kind: "Old lanes",
            about: "A block of restored shikumen (the stone-gate lane houses Shanghai is famous for), reopened as shops and pop-ups right off the main road.",
            amap: "张园"
          },
          {
            name: "Shanghai Exhibition Centre",
            zh: "上海展览中心",
            kind: "Architecture",
            about: "The giant Soviet-style building with a gold spire, built in 1955 as the Sino-Soviet Friendship Building. Best seen from the front plaza on Yan'an Rd.",
            amap: "上海展览中心"
          },
          {
            name: "Wujiang Rd",
            zh: "吴江路",
            kind: "Snack street",
            about: "Pedestrian street of snack shops behind the malls. Yang's sheng jian is here.",
            amap: "吴江路"
          },
          {
            name: "Jing'an Kerry Centre",
            zh: "静安嘉里中心",
            kind: "Mall",
            about: "Mall with a nice open courtyard and design shops, if we want something calmer than the big flagships.",
            amap: "静安嘉里中心"
          }
        ],
        Evening: [
          {
            name: "Columbia Circle",
            zh: "上生·新所",
            kind: "Old club, now shops",
            about: "The 1920s Columbia Country Club, restored with its old pool house, cafes and shops, open into the evening. About 15 min on foot from dinner.",
            amap: "上生新所"
          },
          {
            name: "Jing'an Temple at night",
            zh: "静安寺",
            kind: "Sight",
            about: "On the way back on Line 2: the gold roofs are lit up after dark and look great from Nanjing West Rd.",
            amap: "静安寺"
          }
        ]
      },
      food: {
        items: [
          {
            name: "Vegetable buns 菜馒头",
            text: "Fluffy steamed buns filled with finely chopped greens (usually bok choy) and mushrooms, sometimes with a bit of tofu. Simple but so good.\nIn our screenshot list, Wangjiasha's 菜馒头 is the one to get."
          },
          {
            name: "Hong shao rou 红烧肉",
            text: "Red-braised pork belly: chunks slow-cooked for hours in soy sauce, rock sugar and Shaoxing wine until it's glossy, sticky and melts in our mouth.\nShanghai's version is sweeter and darker than the rest of China's, and it's the dish that defines local cooking (本帮菜). Order rice with it, it's rich.",
            source: "https://en.wikipedia.org/wiki/Red_braised_pork_belly"
          },
          {
            name: "Kao fu 烤麸",
            text: "Spongy wheat gluten cubes braised with wood ear mushrooms, peanuts and lily buds in a sweet-savory soy sauce, served cold.\nIt comes from Buddhist vegetarian cooking and is a Lunar New Year favorite. The gluten soaks up all the sauce, so it's way better than it sounds."
          }
        ]
      },
      places: [
        {
          name: "Single Origin Roasters",
          text: "Started in south Shanghai and moved downtown in 2017. True to the name, they focus on single-origin beans (lots of Ethiopian) and roast them in-house.\nA proper coffee-nerd spot, and it's on the way to Jing'an Temple. Ask what they're roasting that week.",
          source: "https://www.smartshanghai.com/listings/cafes/coffee/"
        },
        {
          name: "Zhangshifu",
          text: "In our notes: a mom-and-pop local Shanghainese breakfast spot, highly recommended.\nThere's no fancy menu here, so the move is to look at what the regulars are eating and point. Usually it's soy milk, rice rolls, fried dough sticks and maybe wontons. Cash is rare, so have Alipay ready."
        },
        {
          name: "Wangjiasha 王家沙",
          text: "A Shanghai snack institution that's been around since the 1940s, right on Nanjing West Rd. Famous for vegetable buns, shrimp wontons and their crab soup dumplings in season.\nIt's busy and a bit chaotic: order and pay at the counter first, then grab a seat."
        },
        {
          name: "157 Shi Fang 157食坊",
          text: "A Michelin Bib Gourmand (good food, good value) that's been a go-to for traditional Shanghainese for years. It moved into a bright new space in the IM Shanghai complex, but the menu is still handwritten like the old days.\nMichelin says the eel claypot rice is a must: plump, oily eel over pearl rice that gets crispy on the bottom. The oil-blanched shrimp get a shout-out too for their wok hei.\nNo foreign credit cards, so have Alipay ready. Going right at opening is our move instead of booking.",
          source: "https://guide.michelin.com/th/en/shanghai-municipality/shanghai/restaurant/157-shi-fang"
        }
      ],
      sights: [
        {
          name: "People's Park & Square",
          text: "This whole area used to be the Shanghai Race Club's racecourse, the center of colonial-era social life. The old clubhouse with the clock tower is now the Shanghai History Museum.\nOn weekends, roughly noon to 5 PM, People's Park has the famous \"marriage market\": parents and grandparents line the paths with their kids' profiles (age, height, job, income, sometimes a photo) pinned to umbrellas, trying to find them a match. The kids themselves are rarely there! We land on a Sunday, so we can actually catch it.",
          source: "https://en.wikipedia.org/wiki/People's_Square_(Shanghai)"
        },
        {
          name: "Jing'an Temple",
          text: "A Buddhist temple with roots going back to the 3rd century. It moved to this spot in 1216, and the old road out front used to be called Bubbling Well Road after the temple's well.\nThe gold-roofed halls are mostly a modern rebuild, sitting right between malls and skyscrapers, which is such a Shanghai contrast. Try tossing a coin into the top of the big incense burner in the courtyard. Landing it is supposed to be good luck. There's a small entry fee.",
          source: "https://en.wikipedia.org/wiki/Jing'an_Temple"
        },
        {
          name: "M50",
          text: "Old textile mills along Suzhou Creek that artists started taking over around 2000, which made it the original home of Shanghai's contemporary art scene.\nNow it's galleries, artist studios and indie design shops. Walk Moganshan Rd for the graffiti wall too. Many galleries close Mondays, but Tuesday is fine.",
          source: "https://en.wikipedia.org/wiki/50_Moganshan_Road"
        },
        {
          name: "West Nanjing Rd",
          text: "The fancy end of Nanjing Rd, lined with luxury malls (Plaza 66, Jing'an Kerry Centre, Taikoo Hui) and flagship stores.\nIt was once called Bubbling Well Road, after Jing'an Temple's well. Good for shopping, and for ducking into the side lanes to see the old lane houses.",
          source: "https://en.wikipedia.org/wiki/Nanjing_Road"
        }
      ],
      foodIdeas: [
        {
          meal: "Coffee",
          area: "Jing'an",
          dish: "Coffee",
          short: "specialty coffee",
          name: "Coffee Spot",
          what: "Pour-overs and espresso from a tiny specialty coffee bar.",
          why: "Hidden in an old guardhouse inside a residential compound; taste one bean three ways.",
          address: "No. 4, Lane 838 West Beijing Rd 北京西路838弄4号",
          amap: "北京西路838弄"
        },
        {
          meal: "Lunch",
          area: "Jing'an",
          dish: "Wuxi-style noodles 无锡面",
          short: "slightly sweet soy-broth noodles",
          name: "Jingmei Wuxi Noodles (Yanping Rd)",
          what: "Noodles in a slightly sweet soy broth with toppings like braised pork. Wuxi, a city near Shanghai, likes its food on the sweet side.",
          why: "Michelin Bib Gourmand, in Jing'an.",
          address: "Yanping Rd 延平路",
          amap: "Jingmei Wuxi Noodles Yanping Road"
        },
        {
          meal: "Snack",
          area: "Jing'an",
          dish: "Sheng jian bao 生煎",
          short: "pan-fried pork buns with soup inside",
          name: "Yang's Dumplings 小杨生煎",
          what: "Pan-fried pork buns: fluffy on top, crispy on the bottom, with hot soup inside.",
          why: "Right off West Nanjing Rd, open 6:30 AM to 11 PM.",
          address: "178 Wujiang Rd 吴江路178号",
          amap: "小杨生煎 吴江路"
        },
        {
          meal: "Dinner",
          area: "Near Maoming Rd",
          dish: "Braised pork 红烧肉",
          short: "sweet, glossy red-braised pork belly",
          name: "Mao Long 茂隆",
          what: "Red-braised pork belly: glossy, sweet and soy-dark, slow-cooked until soft.",
          why: "Michelin Bib Gourmand home cooking, proud of its braised pork. Five tables, cash only. Call ahead: +86 21 6256 1167.",
          address: "134 Jinxian Rd 进贤路134号",
          amap: "茂隆餐厅 进贤路"
        },
        {
          meal: "Breakfast",
          area: "People's Square",
          dish: "Jianbing 煎饼",
          short: "egg crepe with a crispy cracker",
          name: "Dingxing Rd Jianbing 定兴路蛋饼",
          what: "Chinese street crepe: a thin egg crepe folded around a crispy cracker, savory sauces, scallion and coriander.",
          why: "Viral street stall near People's Square Station, Exit 8.",
          tip: "Ask for spicy or not (要辣 / 不要辣), and with or without coriander (要香菜 / 不要香菜).",
          address: "No. 6 Dingxing Rd 定兴路6号",
          amap: "定兴路蛋饼"
        },
        {
          meal: "Lunch",
          area: "Jing'an",
          dish: "Shanghai noodles 上海面",
          short: "soy-broth noodles with braised toppings",
          name: "Ren He Mian Guan 人和面馆",
          what: "Neighborhood noodle shop: soy-broth or scallion oil noodles with toppings like braised pork or a fried pork chop.",
          why: "Michelin-listed noodle shop. At the temple end of Yuyuan Rd.",
          address: "1F, 142 Yuyuan Rd 愚园路142号",
          hours: "11:00–21:00",
          amap: "人和面馆 愚园路",
          dianping: "上海面馆"
        },
        {
          meal: "Dinner",
          area: "Changning (Tianshan Rd)",
          dish: "Xiao long bao 小笼包",
          short: "soup dumplings",
          name: "Shan Shan Xiao Long 珊珊小笼",
          what: "Steamed soup dumplings: a thin wrapper around pork and hot broth. Nibble a small hole and sip the soup first.",
          why: "Line 2 to Loushanguan Rd 娄山关路, one stop past Zhongshan Park.",
          address: "842 Loushanguan Rd 娄山关路842号",
          hours: "6:00–20:00",
          amap: "珊珊小笼 娄山关路"
        },
        {
          meal: "Snack",
          area: "Changning (Tianshan Rd)",
          dish: "Sheng jian bao 生煎",
          short: "pan-fried pork buns with soup inside",
          name: "Xu Ji Sheng Jian 许记生煎",
          what: "Pan-fried pork buns: fluffy on top, crispy on the bottom, with hot soup inside.",
          why: "Closes early.",
          address: "565-1 Zunyi Rd 遵义路565-1号",
          hours: "6:30–17:30",
          amap: "许记生煎 遵义路"
        },
        {
          meal: "Dinner",
          area: "Changning (Tianshan Rd)",
          dish: "Local snacks 小吃",
          short: "noodles, wontons and Shanghai snacks",
          name: "Yu Hua Yin Shi Dian 玉华饮食店",
          what: "Old-style neighborhood eatery for noodles, wontons and Shanghai snacks.",
          address: "298 Maotai Rd 茅台路298号",
          hours: "6:00–21:00",
          amap: "玉华饮食店 茅台路"
        },
        {
          meal: "Snack",
          area: "Changning (Tianshan Rd)",
          dish: "Sheng jian bao 生煎",
          short: "pan-fried pork buns with soup inside",
          name: "Yang's Dumplings 小杨生煎 (Tianshan Rd)",
          what: "Pan-fried pork buns: fluffy on top, crispy on the bottom, with hot soup inside.",
          why: "The Tianshan Rd branch, in a mall basement.",
          address: "B1, East Tower, Parkson U-City Plaza, Tianshan Rd 天山路百盛优客城市广场东楼B1",
          hours: "10:00–21:30",
          amap: "小杨生煎 百盛优客"
        },
        {
          meal: "Snack",
          area: "Changning (Tianshan Rd)",
          dish: "Fresh cream cake squares 鲜奶小方",
          short: "light sponge with whipped cream",
          name: "Hong Bao Shi 红宝石",
          what: "A Shanghai bakery classic: small squares of light sponge and fresh whipped cream.",
          address: "1F, Huijin Department Store, 900 Tianshan Rd 天山路900号汇金百货1楼",
          hours: "8:30–22:00",
          amap: "红宝石 天山路"
        },
        {
          meal: "Snack",
          area: "Changning (Tianshan Rd)",
          dish: "Milk tea 奶茶",
          short: "fresh-brewed tea with milk",
          name: "Ba Wang Cha Ji 霸王茶姬",
          what: "Popular Chinese tea chain: freshly brewed tea with milk, lighter than bubble tea. The jasmine milk tea (伯牙绝弦) is the famous one.",
          address: "1F, East Tower, Parkson U-City Plaza, Loushanguan Rd 娄山关路百盛优客城市广场东楼1楼",
          hours: "8:00–22:00",
          amap: "霸王茶姬 百盛优客"
        }
      ],
      otherOptions: [
        {
          group: "Quieter spot",
          name: "Shanghai Library 上海图书馆",
          why: "From our list: one of China's largest libraries, with a calm reading room. Near the French Concession.",
          address: "1555 Middle Huaihai Rd 淮海中路1555号",
          amap: "上海图书馆淮海路"
        }
      ]
    },
    // ---------- Day 4: Wednesday 18 November, French Concession ----------
    {
      key: "d4",
      date: "2026-11-18",
      when: "Wednesday 18 November",
      tabTop: "18",
      tabSub: "Wed",
      color: "#E3002B",
      ink: "#C1001F",
      zh: "武康路",
      area: "French Concession",
      title: "French Concession: shop, tattoo, tea, live music",
      summary: "Shopping round 2 in the French Concession. Coffee at Wunder to kick it off, then Salomon, Musinsa, Deja Vu and Harmay on Anfu and Wukang Rd, pork and shepherd's purse soup dumplings for lunch, then the flash tattoo and making glass jewelry. Tea at Shanyucaoshe in Rose Villa, braised pork and duck at Lan Xin, and live music at Cozy Music Lab to close it out.",
      highlights: ["Anfu Rd shopping", "Flash tattoo", "Shanyucaoshe", "Live music"],
      stops: [
        {
          time: "6:30",
          type: "run",
          label: "Run",
          title: "Hotel → People's Square → Xintiandi → back",
          detail: "About 5 km loop. Then coffee, breakfast and shower in whatever order works."
        },
        {
          time: "Then",
          type: "coffee",
          label: "Suggested coffee",
          title: "Wunder",
          detail: "First stop in the French Concession. Or any early cafe on Dianping. One-shop roaster run by a former barista who roasts in-house. Closed Mondays.",
          address: "161 South Maoming Rd 茂名南路161号",
          amap: "茂名南路161号",
          metro: "Line 2 to People's Square 人民广场, change to Line 1 for Shaanxi South Rd 陕西南路, then about 10 min on foot."
        },
        {
          time: "Then",
          type: "food",
          label: "Suggested breakfast",
          title: "Street stall: sesame flatbread + soy milk",
          detail: "大饼 + 豆浆, near the hotel.",
          dianping: "大饼油条"
        },
        { time: "Then", type: "misc", label: "Hotel", title: "Shower" },
        {
          time: "10:00",
          type: "shop",
          label: "Shop",
          title: "Anfu Rd & Wukang Rd",
          detail: "Salomon \"Fu Jun\" concept store, Musinsa Store, Deja Vu Recycle, Harmay. Bonus: Adidas Originals flagship at 322 Anfu Rd. Wukang Building photo stop.",
          address: "Salomon 183–187 Anfu Rd · Deja Vu 300 Anfu Rd · Harmay 55 Wukang Rd · Musinsa on Anfu Rd",
          amapLinks: [
            { label: "Salomon", amap: "萨洛蒙安福路" },
            { label: "Deja Vu", amap: "安福路300号" },
            { label: "Harmay", amap: "话梅武康路" },
            { label: "Musinsa", amap: "MUSINSA安福路" }
          ],
          metro: "All walkable from Wunder. Closest station for the way back: Jiaotong University 交通大学 (Lines 10, 11).",
          alsoShowNotes: [
            "Salomon \"Fu Jun\"",
            "Musinsa Store",
            "Deja Vu Recycle",
            "Harmay 话梅",
            "Wukang Building",
            "Former French Concession"
          ]
        },
        {
          time: "Lunch",
          type: "food",
          label: "What to eat",
          title: "Pork & shepherd's purse xiao long bao 荠菜鲜肉小笼",
          detail: "The seasonal green with pork. Crab-roe 蟹粉小笼 if we want to try one.",
          order: [
            { en: "Pork & shepherd's purse XLB", zh: "荠菜鲜肉小笼" },
            { en: "Crab-roe XLB (1 to try)", zh: "蟹粉小笼" },
            { en: "Small wonton soup", zh: "小馄饨" }
          ],
          options: [
            {
              name: "Wu You Xian 屋有鲜",
              why: "From our list, known for seasonal fillings. Right on the shopping route.",
              address: "1F-103, 7 South Maoming Rd 茂名南路7号",
              amap: "屋有鲜"
            }
          ],
          dianping: "荠菜小笼"
        },
        {
          time: "14:00",
          type: "misc",
          label: "Tattoo",
          title: "Flash tattoo at I-TATTOO (book ahead)",
          address: "Panyu Rd 番禺路 (confirm)",
          amap: "I-TATTOO"
        },
        {
          time: "15:30",
          type: "misc",
          label: "Make",
          title: "Glass jewelry at Yibo Studio",
          address: "1F, No. 13, Lane 553 Middle Fuxing Rd 复兴中路553弄13号",
          amap: "复兴中路553弄"
        },
        {
          time: "16:45",
          type: "tea",
          label: "Tea",
          title: "Shanyucaoshe 山余草舍 (Rose Villa) — must-do",
          detail: "Book ahead if we can. Optional coffee on the way: Honky Tonk (262 Xiangyang South Rd).",
          address: "Lane 44 Fuxing West Rd 复兴西路44弄(玫瑰别墅)",
          amap: "山余草舍玫瑰别墅店"
        },
        {
          time: "Dinner",
          type: "food",
          label: "What to eat",
          title: "Braised pork 红烧肉 + braised duck 酱鸭",
          detail: "Old-school home-style Shanghainese. No bookings at either, so get in line early (around 5:30). Cash only.",
          order: [
            { en: "Braised pork", zh: "红烧肉" },
            { en: "Braised duck in brown sauce", zh: "酱鸭" },
            { en: "Gluten puffs stuffed with pork", zh: "油面筋塞肉" },
            { en: "Wine-fried clover sprouts", zh: "酒香草头" },
            { en: "Scallion oil noodles", zh: "葱油拌面" }
          ],
          options: [
            {
              name: "Lan Xin 兰心",
              why: "Michelin Bib Gourmand, \"worth queueing for\". No bookings and cash only, so bring yuan and get in line by 5:30. Braised pork and braised duck are Michelin's picks.",
              address: "130 Jinxian Rd 进贤路130号",
              amap: "兰心餐厅 进贤路"
            },
            {
              name: "Mao Long 茂隆",
              why: "Next door, also a Bib Gourmand, especially proud of its braised pork.",
              address: "134 Jinxian Rd 进贤路134号",
              amap: "茂隆餐厅 进贤路"
            }
          ],
          dianping: "红烧肉",
          alsoShowNotes: ["Hong shao rou 红烧肉"]
        },
        {
          time: "20:30",
          type: "misc",
          label: "Music",
          title: "Live music at Cozy Music Lab",
          detail: "Confirm location.",
          amap: "Cozy Music Lab"
        }
      ],
      explore: {
        Morning: [
          {
            name: "Wukang Building",
            zh: "武康大楼",
            kind: "Architecture",
            about: "The 1924 flatiron apartment building at the end of Wukang Rd, the most photographed corner of the French Concession.",
            amap: "武康大楼"
          },
          {
            name: "Ferguson Lane",
            zh: "武康庭",
            kind: "Courtyard",
            about: "Little courtyard of cafes and shops on Wukang Rd.",
            amap: "武康庭"
          },
          {
            name: "Changle Rd",
            zh: "长乐路",
            kind: "Street",
            about: "Small boutiques and cafes in old lane houses.",
            amap: "长乐路"
          },
          {
            name: "Fumin Rd & Julu Rd",
            zh: "富民路 / 巨鹿路",
            kind: "Streets",
            about: "Short, leafy streets of cafes, indie shops and small bars.",
            amap: "富民路"
          },
          {
            name: "Xiangyang South Rd",
            zh: "襄阳南路",
            kind: "Street",
            about: "Cafes, and the Chinese-medicine gelato shop from our list.",
            amap: "襄阳南路"
          }
        ],
        Midday: [
          {
            name: "Soong Ching-ling's former residence",
            zh: "宋庆龄故居",
            kind: "History",
            about: "The calm villa and garden where Sun Yat-sen's widow lived, on Huaihai Middle Rd near Wukang Rd.",
            amap: "宋庆龄故居"
          }
        ],
        Afternoon: [
          {
            name: "Ba Jin's former residence",
            zh: "巴金故居",
            kind: "Literary spot",
            about: "Garden house of the writer Ba Jin on Wukang Rd. Small, free and very calm.",
            amap: "巴金故居"
          },
          {
            name: "Fuxing West Rd",
            zh: "复兴西路",
            kind: "Old villas",
            about: "Quiet plane-tree street of 1930s villas around our tea house.",
            amap: "复兴西路"
          },
          {
            name: "Hengshan Rd",
            zh: "衡山路",
            kind: "Street",
            about: "Tree-lined avenue of old villas and the 1925 Community Church. Maybe the \"Henghi Xuhui\" from our notes.",
            amap: "衡山路"
          }
        ],
        Evening: [
          {
            name: "Julu Rd at night",
            zh: "巨鹿路",
            kind: "Bars",
            about: "A string of small cocktail bars and wine bars, if we want one more stop after the music.",
            amap: "巨鹿路"
          }
        ]
      },
      food: {
        items: [
          {
            name: "Da bing 大饼",
            text: "A flaky sesame flatbread baked stuck to the inside wall of a hot clay oven. It comes savory with scallion or sweet.\nOne of the \"four heavenly kings\" of Shanghai breakfast. Grab it fresh and hot with a soy milk."
          },
          {
            name: "Crab-roe xiao long bao 蟹粉小笼",
            text: "The fancy autumn version. 蟹粉 means hairy crab meat and roe, mixed into or replacing the pork filling, so the soup comes out rich, orange and a little sweet.\nCrab season runs roughly September to December, so November is perfect timing. Expect it to cost a few times more than the regular ones. Worth it at least once.",
            source: "https://en.wikipedia.org/wiki/Xiaolongbao"
          },
          {
            name: "Shepherd's purse 荠菜",
            text: "A slightly peppery wild green that Shanghainese people love, especially in cooler months. It's usually chopped into dumplings and wontons with pork.\nIt tastes fresh and a bit grassy, and it's very Jiangnan."
          },
          {
            name: "Braised duck 酱鸭",
            text: "Duck braised in soy, sugar and spices until the skin goes dark and glossy, sweet-savory like most Shanghai home cooking."
          }
        ]
      },
      places: [
        {
          name: "Wunder",
          text: "A one-shop roaster run by a former barista turned roaster. The owner closes every Monday just to roast, timing each batch so it hits its best flavor.\nKnown for traditional Italian-style coffee. It's a tiny neighborhood spot and a great first stop before shopping.",
          source: "https://english.shanghai.gov.cn/en-Cafes/20250605/093287378e49409dbb1171859011ad47.html"
        },
        {
          name: "Wu You Xian 屋有鲜",
          text: "A xiao long bao specialist from our screenshot list, known for seasonal fillings: crab in autumn and shepherd's purse in the cooler months.\nIt's on South Maoming Rd, right in the French Concession, so it's perfect to slot in between shopping and the tattoo."
        },
        {
          name: "Shanyucaoshe 山余草舍",
          text: "Our must-do tea house, tucked inside Rose Villa, a lane of old garden villas off Fuxing West Rd.\nIt's the kind of tea house that's about the setting and slowing down: pick a tea, let them walk us through it, and just hang out. Book ahead if we can, since it's popular."
        },
        {
          name: "Lan Xin 兰心",
          text: "A tiny Michelin Bib Gourmand on Jinxian Rd in what used to be a private home. Michelin tags it \"worth queueing for\", and the line often goes down the street, since it doesn't take bookings.\nIt's traditional home-style Shanghainese. Michelin's picks are the braised pork, the braised duck in brown sauce, and a sweet-and-sour yellow croaker (skip that one). Cash only, so bring yuan.\nIf the line is crazy, Mao Long next door at 134 Jinxian Rd is another Bib Gourmand that's especially proud of its braised pork.",
          source: "https://guide.michelin.com/en/shanghai-municipality/shanghai/restaurant/lan-xin-jinxian-road"
        },
        {
          name: "Cozy Music Lab",
          text: "One of our non-negotiables: the live music bar for the trip.\nCheck its WeChat or Dianping the day before for who's playing and what time the music starts. Shanghai bar gigs often don't get going until 9 or 10."
        },
        {
          name: "I-TATTOO",
          text: "A big studio on Panyu Rd with lots of artists across different styles and price points. It's also a gallery and bar that's all about tattoo culture in China.\nMessage ahead to ask about flash designs, walk-ins and payment. Bring the design idea saved on our phone.",
          source: "https://www.timeoutshanghai.com/features/Things_to_Do-Things_to_Do/69567/The-best-tattoo-studios-in-Shanghai.html"
        },
        {
          name: "Yibo Studio",
          text: "From our list: a hands-on workshop where we make our own glass jewelry to take home.\nSuch a good souvenir. Check how long a session takes when booking, in case the tattoo runs long."
        }
      ],
      shopping: [
        {
          name: "Salomon \"Fu Jun\"",
          text: "Salomon's first China concept store, called \"Fu Jun\", in a century-old French-style villa. It's inspired by their store in Paris's Marais.\nThree floors, with limited drops and collabs with local artists. Open 10:00–22:00.",
          source: "https://english.shanghai.gov.cn/en-FirstStores/20250807/6eeb5fff438a46a3871c564eac0d4a77.html"
        },
        {
          name: "Musinsa Store",
          text: "Musinsa is Korea's biggest fashion platform, and this Anfu Rd store (opened December 2025) is their multi-brand concept store, in a 100-year-old three-story building.\nAround 40 Korean and Chinese brands under one roof. For basics, their Musinsa Standard flagship is about 2 km away at Parkson, 918 Middle Huaihai Rd.",
          source: "https://www.koreajoongangdaily.com/business/musinsa-enters-china-with-two-shanghai-stores-banking-on-k-fashions-global-appeal/12430525"
        },
        {
          name: "Deja Vu Recycle",
          text: "A really popular secondhand store in an old film-distribution company building. Books are downstairs, displayed in crates like a greengrocer, and 2,000+ pre-owned clothes are upstairs.\nIt's famous for its design, so it's a good photo stop too. There's a bigger branch at Hongqiao Tiandi, but this one's on our route.",
          source: "https://english.shanghai.gov.cn/en-BookstoresLibraries/20231221/2d0a9d8dc3544843a7f7faa4a7926949.html"
        },
        {
          name: "Harmay 话梅",
          text: "A warehouse-style beauty store: shelves of 100+ brands stacked like inventory, plus lots of travel sizes and discounted items.\nHeads up: the old Anfu Rd shop closed in July 2026 and moved across the road to 55 Wukang Rd. Open 10:00–22:00.",
          source: "https://www.smartshanghai.com/articles/shopping/the-address-please-9-instagram-famous-shops-in-shanghai"
        }
      ],
      sights: [
        {
          name: "Xintiandi 新天地",
          text: "Restored shikumen (\"stone gate\") lane houses, a very Shanghai style of housing, turned into a dining and shopping area. We pass through on the run.\nFun history: the Communist Party's first national congress was held in one of these houses in 1921, and there's a museum there now.",
          source: "https://en.wikipedia.org/wiki/Xintiandi"
        },
        {
          name: "Former French Concession",
          text: "The part of the city France ran from 1849 to 1943. It's why the streets are lined with plane trees, garden villas and lane houses.\nIt's now Shanghai's coolest area for cafes, boutiques and just wandering. In November the plane trees go yellow, so it's prime time.",
          source: "https://en.wikipedia.org/wiki/French_concession_of_Shanghai"
        },
        {
          name: "Wukang Building",
          text: "The flatiron-shaped apartment building at the corner of Wukang Rd and Huaihai Rd, designed by Hungarian-Slovak architect László Hudec and finished in 1924. Its original name was the Normandie Apartments.\nFilm stars lived here after 1949, and now it's probably the most photographed building in the city. Best photo spot is from across the intersection.",
          source: "https://en.wikipedia.org/wiki/Wukang_Mansion"
        },
        {
          name: "Rose Villa 玫瑰别墅",
          text: "A quiet lane of old garden villas off Fuxing West Rd, right in the heart of the French Concession, where Shanyucaoshe sits.\nIt's a nice escape from the busy shopping streets just a few blocks away."
        }
      ],
      foodIdeas: [
        {
          meal: "Lunch",
          area: "French Concession",
          dish: "Home-style Shanghainese 本帮家常菜",
          short: "everyday Shanghai home cooking to share",
          name: "Yongxing Restaurant",
          what: "Everyday Shanghai home cooking: sweet-savory braises, greens and small plates to share.",
          why: "In an old French Concession lane; salted-egg-yolk duck rolls and salt and pepper spare ribs.",
          address: "No. 1, Lane 626 Middle Fuxing Rd 复兴中路626弄1号",
          amap: "复兴中路626弄1号"
        },
        {
          meal: "Lunch",
          area: "Near Xintiandi",
          dish: "Braised pork belly noodles 焖肉面",
          short: "noodles topped with melt-soft pork belly",
          name: "Lao Di Fang Mian Guan 老地方面馆",
          what: "Noodles in soy broth topped with a slab of slow-braised pork belly that melts in the mouth.",
          why: "Michelin Bib Gourmand noodle shop. Cash only.",
          address: "107 Sinan Rd 思南路107号",
          amap: "老地方面馆 思南路",
          hours: "7:00–10:00, 11:00–14:30, 17:00–19:30 (check weekends)"
        },
        {
          meal: "Snack",
          area: "French Concession",
          dish: "Herbal gelato + homemade cola",
          short: "Chinese-herb gelato and cola",
          name: "Chinese-medicine gelato shop",
          what: "Gelato flavored with Chinese herbs, plus a homemade cola with herbal notes.",
          why: "Right next to ALOHA Coffee on Xiangyang South Rd.",
          address: "267 Xiangyang South Rd 襄阳南路267号",
          amap: "襄阳南路267号"
        },
        {
          meal: "Breakfast",
          area: "French Concession",
          dish: "Noodles with spicy pork 辣肉面",
          short: "noodles with mildly spicy minced pork",
          name: "Xiao Tao Mian Guan 小陶面馆",
          what: "Noodles topped with minced pork in a mildly spicy sauce, often with scallion oil.",
          why: "Michelin Bib Gourmand noodle shop. Breakfast and lunch only.",
          address: "222 Jiashan Rd 嘉善路222号",
          hours: "6:00–14:00",
          amap: "小陶面馆 嘉善路"
        },
        {
          meal: "Lunch",
          area: "Near Xintiandi",
          dish: "Congee and noodles 粥 / 面",
          short: "rice porridge and noodle bowls, open 24 hours",
          name: "Ding Te Le 顶特勒",
          what: "Rice porridge and noodle bowls, plus simple Shanghai dishes. Open around the clock, so good for very early or very late.",
          why: "Michelin-listed noodle shop.",
          address: "22, Lane 494 Middle Huaihai Rd 淮海中路494弄22号",
          hours: "Open 24 hours",
          amap: "顶特勒 淮海中路"
        }
      ],
      otherOptions: [
        {
          group: "More to browse",
          name: "Propaganda Poster Art Centre",
          why: "From our list: Yang Peiming's collection of Mao-era posters in a basement gallery. Quirky and memorable.",
          address: "Building 7, Block K, 726 Yan'an West Rd 延安西路726号",
          amap: "杨培明宣传画艺术中心"
        },
        {
          group: "If the tattoo runs long",
          name: "Skip Yibo Studio",
          why: "Go straight to Shanyucaoshe for tea; the glass workshop can move to Day 5's free afternoon."
        },
        {
          group: "If Cozy Music Lab is quiet",
          name: "House of Blues & Jazz",
          why: "Live jazz most nights near the Bund, walking distance from the hotel.",
          address: "60 Fuzhou Rd 福州路60号",
          amap: "福州路60号"
        }
      ]
    },
    // ---------- Day 5: Thursday 19 November, Longhua & the river ----------
    {
      key: "d5",
      date: "2026-11-19",
      when: "Thursday 19 November",
      tabTop: "19",
      tabSub: "Thu",
      color: "#007A60",
      ink: "#007A60",
      zh: "龙华",
      area: "Longhua & the river",
      title: "Riverside ride, Longhua & Eight",
      summary: "A slower, greener day down south. Short run, then bike the Qiantan riverside to coffee at Aftertaste, then Longhua Temple and the quiet underground space under the pagoda. Yellow croaker noodles, the West Bund art riverfront next door, and a wander through Tianzifang's lanes, before the big one: dinner at Eight's 8-seat chef's counter.",
      highlights: ["Bike ride", "Longhua Temple", "West Bund", "Tianzifang", "Eight 八"],
      stops: [
        {
          time: "6:30",
          type: "run",
          label: "Run",
          title: "Short Bund run",
          detail: "Easy 30 min; the bike ride later is the real outing. Then breakfast and shower; coffee comes after the bike ride.",
          amap: "外滩"
        },
        {
          time: "Then",
          type: "food",
          label: "Suggested breakfast",
          title: "Jianbing from a stall",
          detail: "煎饼, savory egg crepe.",
          dianping: "煎饼"
        },
        { time: "Then", type: "misc", label: "Hotel", title: "Shower" },
        {
          time: "8:30",
          type: "misc",
          label: "Transit",
          title: "Metro to Qiantan (Pudong)",
          detail: "About 45 min.",
          metro: "Line 2 to People's Square, change to Line 8 for Oriental Sports Center 东方体育中心, then walk or grab a share bike into Qiantan."
        },
        {
          time: "9:00",
          type: "run",
          label: "Ride",
          title: "Bike-share along the Qiantan riverside",
          detail: "Unlock via Alipay; finish at the cafe.",
          amap: "前滩公园"
        },
        {
          time: "9:45",
          type: "coffee",
          label: "Coffee",
          title: "Aftertaste",
          detail: "Our pick. Coffee break before Longhua.",
          address: "W3-102, Qiantan Park Lane 前滩公园巷W3-102",
          amap: "Aftertaste 前滩"
        },
        {
          time: "11:45",
          type: "see",
          label: "See",
          title: "Longhua Temple, Pagoda & underground space",
          address: "2853 Longhua Rd 龙华路2853号",
          amap: "龙华寺",
          metro: "Line 11 from Oriental Sports Center to Longhua 龙华."
        },
        {
          time: "Lunch",
          type: "food",
          label: "What to eat",
          title: "Vegetarian noodles 素面",
          detail: "Mushrooms, gluten, tofu skin and greens. Or braised pork noodles 焖肉面 nearby.",
          order: [
            { en: "Vegetarian noodles", zh: "素面" },
            { en: "Vegetarian 'chicken' (tofu skin)", zh: "素鸡" },
            { en: "Buddha's delight (mixed veg)", zh: "罗汉斋" }
          ],
          options: [
            {
              name: "Longhua Temple vegetarian restaurant",
              why: "Right at the temple. Confirm hours on Dianping.",
              address: "2853 Longhua Rd 龙华路2853号",
              amap: "龙华寺素斋"
            }
          ],
          dianping: "素面"
        },
        {
          time: "14:00",
          type: "see",
          label: "Art",
          title: "West Bund riverfront + Long Museum",
          detail: "Walk the old docks-turned-promenade along the Huangpu, and see the Long Museum built around an old coal-unloading bridge. Closed Mondays.",
          address: "3398 Longteng Ave 龙腾大道3398号",
          amap: "龙美术馆西岸馆",
          metro: "Line 11 one stop to Yunjin Rd 云锦路, then walk to the river."
        },
        {
          time: "16:30",
          type: "shop",
          label: "Wander",
          title: "Tianzifang 田子坊",
          detail: "Maze of 1930s shikumen lanes with tiny shops, studios and cafes. Then walk about 20 min to Yongkang Rd for dinner.",
          address: "Lane 210 Taikang Rd 泰康路210弄",
          amap: "田子坊",
          metro: "Line 11 to Xujiahui 徐家汇, change to Line 9 for Dapuqiao 打浦桥."
        },
        {
          time: "19:00",
          type: "food",
          label: "Dinner",
          title: "Eight 八EIGHT (reserve — 8 seats)",
          detail: "No menu: an eight-course chef's tasting menu mixing Basque, Spanish and East Asian flavors. About ¥888 per person.",
          address: "73 Yongkang Rd 永康路73号",
          amap: "永康路73号",
          alsoShowNotes: ["Yongkang Road"]
        },
        {
          time: "21:00",
          type: "book",
          label: "Book now",
          title: "Book the Great Wall (Mubus on Trip.com)",
          detail: "Check the Beijing forecast. Book Sat 21 if it looks clear; Mon 23 is the backup.",
          bookingUrl: "https://www.trip.com/things-to-do/detail/89362507?language=EN&locale=en_xx&districtId=1&districtType=1"
        },
        {
          time: "21:15",
          type: "misc",
          label: "Pack",
          title: "Pack for Beijing",
          detail: "It will be much colder."
        }
      ],
      explore: {
        Morning: [
          {
            name: "Qiantan Taikoo Li",
            zh: "前滩太古里",
            kind: "Mall",
            about: "Open-air mall next to the riverside park, with a rooftop running track and river views.",
            amap: "前滩太古里"
          },
          {
            name: "Houtan Park",
            zh: "后滩公园",
            kind: "Park",
            about: "Wetland park along the river, built for Expo 2010. A little north of Qiantan.",
            amap: "后滩公园"
          }
        ],
        Midday: [
          {
            name: "Longhua Martyrs' Cemetery",
            zh: "龙华烈士陵园",
            kind: "Park + history",
            about: "Big, quiet memorial park right next to the temple, with lawns and a peach orchard.",
            amap: "龙华烈士陵园"
          }
        ],
        Afternoon: [
          {
            name: "Xuhui riverside",
            zh: "徐汇滨江",
            kind: "Riverside",
            about: "Old docks and cranes turned into a long riverside park with skaters and cafes.",
            amap: "徐汇滨江"
          },
          {
            name: "Tank Shanghai",
            zh: "油罐艺术中心",
            kind: "Art",
            about: "Art center inside five old aviation fuel tanks on the West Bund.",
            amap: "油罐艺术中心"
          },
          {
            name: "Taikang Rd",
            zh: "泰康路",
            kind: "Street",
            about: "The street outside Tianzifang, with snack stalls and more shops.",
            amap: "泰康路"
          }
        ],
        Evening: [
          {
            name: "Yongkang Rd",
            zh: "永康路",
            kind: "Bars",
            about: "Short street of small bars and cafes, where Eight is. Fun for a drink before or after.",
            amap: "永康路"
          }
        ]
      },
      food: {
        items: [
          {
            name: "Jianbing 煎饼",
            text: "A street-stall crepe: batter spread thin on a hot griddle, cracked egg, scallion, cilantro, sweet bean and chili sauce, with a crispy cracker folded inside.\nIt's originally from northern China but now everywhere. Say 不要辣 (bu yao la) if we don't want it spicy.",
            source: "https://en.wikipedia.org/wiki/Jianbing"
          },
          {
            name: "Vegetarian noodles 素面",
            text: "Buddhist temples in China often run vegetarian kitchens; temple noodles come topped with mushrooms, gluten, tofu skin and greens."
          }
        ]
      },
      places: [
        {
          name: "Aftertaste",
          text: "Our pick: an independent cafe in Qiantan, Pudong's newer riverside area.\nIt's a different vibe from the old-lane cafes, more modern and open, which works for the bike ride."
        },
        {
          name: "Eight 八EIGHT",
          text: "The big dinner! A tiny chef's counter with just eight seats a night and an eight-course tasting menu, around ¥888 each.\nThere's no printed menu: dishes change daily based on what the kitchen gets, mixing Basque, Spanish and East Asian flavors, and the chef serves and explains every course across the counter.\nIt moved from Wuyi Rd and reopened on Yongkang Rd in 2026. Get the reservation locked in!",
          source: "https://www.smartshanghai.com/venue/34506/eight_yongkang_lu"
        }
      ],
      sights: [
        {
          name: "Qiantan riverside",
          text: "Pudong's newer riverside district, across the river from the old West Bund industrial waterfront. It's all new parks, bike paths and the Taikoo Li Qiantan mall.\nIt's flat and smooth, which is great for an easy morning bike ride."
        },
        {
          name: "Longhua Temple & Pagoda",
          text: "Shanghai's largest Buddhist temple, said to go back to the 3rd century. The seven-story pagoda out front is from 977 in the Song dynasty, one of the oldest things standing in the city.\nThe temple is famous for its New Year's Eve bell ringing. In our notes: the Longhua Square underground space beneath the pagoda is a quiet architectural spot with a small museum and cafe, so no crowds.",
          source: "https://en.wikipedia.org/wiki/Longhua_Temple"
        },
        {
          name: "West Bund",
          text: "The Xuhui riverfront just north of Longhua used to be industrial: docks, wharves and the old Longhua Airport. It's been turned into a long riverside promenade with art museums along it, so it's a nice slow walk right next to the temple.\nThe Long Museum West Bund was founded by collector couple Liu Yiqian and Wang Wei, and the building wraps around an old coal-unloading bridge from the docks days. Check what's showing before going in.",
          source: "https://en.wikipedia.org/wiki/Long_Museum"
        },
        {
          name: "Tianzifang 田子坊",
          text: "A maze of shikumen (\"stone gate\") lane houses off Taikang Rd. The core block dates from 1933, and artists moved in for the cheap rent. Painter Huang Yongyu named it, as a pun on Tian Zifang, often called China's earliest recorded artist.\nWhen developers wanted to tear it down in 2006, artist Chen Yifei (who had a studio here) and the residents pushed back. Unlike Xintiandi, it kept its original buildings. Now it's 200+ tiny shops, studios and cafes.",
          source: "https://en.wikipedia.org/wiki/Tianzifang"
        },
        {
          name: "Yongkang Road",
          text: "Where tonight's dinner is. It's a narrow French Concession street that used to be a wet market, then turned into a famous expat bar street around 2013.\nThere's a funny local legend about neighbors upstairs throwing water on noisy drinkers below. It's calmer now, with lots of cafes and small bars."
        }
      ],
      foodIdeas: [
        {
          meal: "Snack",
          area: "Near Xintiandi",
          dish: "Braised pork belly noodles 焖肉面",
          short: "noodles topped with melt-soft pork belly",
          name: "Lao Di Fang Mian Guan 老地方面馆",
          what: "Noodles in soy broth topped with a slab of slow-braised pork belly that melts in the mouth.",
          why: "Michelin Bib Gourmand near Tianzifang. Cash only.",
          address: "107 Sinan Rd 思南路107号",
          amap: "老地方面馆 思南路",
          hours: "7:00–10:00, 11:00–14:30, 17:00–19:30 (check weekends)"
        },
        {
          meal: "Snack",
          area: "Xuhui",
          dish: "Gelato",
          short: "unusual perfume-like flavors",
          name: "313 Mento",
          what: "Gelato in unusual, perfume-like flavor pairings.",
          why: "Minimalist gelato on LiXi Rd, flavors curated like perfume.",
          address: "LiXi Rd 丽西路",
          amap: "313 Mento"
        },
        {
          meal: "Dinner",
          area: "Near Maoming Rd",
          dish: "Braised pork 红烧肉",
          short: "sweet, glossy red-braised pork belly",
          name: "Mao Long 茂隆",
          what: "Red-braised pork belly: glossy, sweet and soy-dark, slow-cooked until soft.",
          why: "If Eight falls through: Michelin Bib Gourmand home cooking near Yongkang Rd. Call ahead: +86 21 6256 1167.",
          address: "134 Jinxian Rd 进贤路134号",
          amap: "茂隆餐厅 进贤路"
        }
      ],
      otherOptions: [
        {
          group: "Stay in Puxi instead",
          name: "Ride the Xuhui riverside",
          why: "Bike the West Bund side instead of Qiantan, then it's a short hop to Longhua.",
          address: "West Bund 徐汇滨江",
          amap: "徐汇滨江"
        },
        {
          group: "Architecture",
          name: "The Roof / Street of 1000 Red Jars",
          why: "From our list: the terracotta-pot facades at The Roof on Madang Rd.",
          address: "458 Madang Rd 马当路458弄",
          amap: "马当路458弄"
        },
        {
          group: "If we want a museum instead",
          name: "Shanghai History Museum",
          why: "Free, walk-in, in the old Race Club clubhouse at People's Square. Swap for the West Bund.",
          address: "325 Nanjing West Rd 南京西路325号",
          amap: "上海市历史博物馆"
        }
      ]
    },
    // ---------- Day 6: Friday 20 November, Hongqiao ----------
    {
      key: "d6",
      date: "2026-11-20",
      when: "Friday 20 November",
      tabTop: "20",
      tabSub: "Fri",
      color: "#871C2B",
      ink: "#871C2B",
      zh: "虹桥",
      area: "Hongqiao",
      title: "Farewell run & train to Beijing",
      summary: "Last morning! One more Bund run, then sheng jian bao and scallion oil noodles, the two must-eats we saved for the end. Pack, a last cup at Always (buy beans to take home), check out, and Line 2 straight to Hongqiao for the train to Beijing.",
      highlights: ["Bund run", "Sheng jian", "Train"],
      stops: [
        {
          time: "6:30",
          type: "run",
          label: "Run",
          title: "Farewell run on the Bund",
          detail: "Loop back to the hotel side of Nanjing East Rd. Then coffee, breakfast and shower in whatever order works.",
          amap: "外滩",
          alsoShowNotes: ["The Bund", "Waibaidu Bridge"]
        },
        {
          time: "Then",
          type: "coffee",
          label: "Suggested coffee",
          title: "Always Coffee Roaster",
          detail: "One last cup, and buy beans to take home. A minute from the hotel.",
          address: "Room 106, 501 Jiujiang Rd 九江路501号106室",
          amap: "Always Coffee Roaster 九江路"
        },
        {
          time: "Then",
          type: "food",
          label: "Suggested breakfast",
          title: "Dongtaixiang: sheng jian + scallion oil noodles",
          detail: "Two 生煎包 and a small bowl of 葱油拌面 to share. Confirm nearest branch.",
          amap: "东泰祥",
          order: [
            { en: "Pork sheng jian", zh: "鲜肉生煎" },
            { en: "Scallion oil noodles", zh: "葱油拌面" },
            { en: "Small wonton soup", zh: "小馄饨" }
          ],
          dianping: "生煎",
          alsoShowNotes: ["Small wontons 小馄饨"]
        },
        { time: "Then", type: "misc", label: "Hotel", title: "Shower, pack" },
        { time: "10:00", type: "misc", label: "Hotel", title: "Check out" },
        {
          time: "Train −1.5h",
          type: "misc",
          label: "Transit",
          title: "Metro Line 2 to Hongqiao Railway Station",
          detail: "About 40 min from East Nanjing Rd. Arrive 1 hour early with our passport.",
          address: "Shanghai Hongqiao Station 上海虹桥站",
          amap: "上海虹桥站"
        }
      ],
      explore: {
        Morning: [
          {
            name: "Shanghai Museum (People's Square)",
            zh: "上海博物馆",
            kind: "Museum",
            about: "The original museum, shaped like an ancient bronze cooking pot. Free, but it may need a reservation. Good if we have an hour before the train.",
            amap: "上海博物馆人民广场"
          },
          {
            name: "Fuzhou Rd bookstores",
            zh: "福州路",
            kind: "Books",
            about: "Last chance for art books and stationery at Shanghai Book City.",
            amap: "上海书城 福州路"
          },
          {
            name: "Hongqiao Tiandi",
            zh: "虹桥天地",
            kind: "Mall",
            about: "Mall by Hongqiao Airport T2, a stop from the station on Line 2 or 10. Has a bigger Deja Vu Recycle branch if there's time before the train.",
            amap: "虹桥天地"
          }
        ]
      },
      food: {
        items: [
          {
            name: "Sheng jian bao 生煎包",
            text: "Pan-fried pork buns: fluffy on top, crispy golden bottoms, sesame and scallion sprinkled over, and hot soup inside.\nThey came over from Suzhou in the early 1900s and have been a Shanghai breakfast since the 1920s. Traditionally they're sold in fours, a unit called a \"liang\". Careful, the soup squirts! Bite a tiny corner first and let the steam out.",
            source: "https://en.wikipedia.org/wiki/Shengjian_mantou"
          },
          {
            name: "Scallion oil noodles 葱油拌面",
            text: "Simple but so good: thin noodles tossed in oil that's been slowly fried with scallions until they're dark and crispy, plus soy sauce and a little sugar.\nEvery Shanghai noodle shop has it, and locals judge shops by it. One of our must-eats."
          },
          {
            name: "Small wontons 小馄饨",
            text: "Tiny, thin-skinned wontons in a light broth, usually with dried shrimp, seaweed and scallion.\nThey're almost all silky wrapper, a gentle little side with breakfast."
          }
        ]
      },
      places: [
        {
          name: "Always Coffee Roaster",
          text: "Our pick: a local roaster on Jiujiang Rd, about a minute from the East Nanjing Rd metro. Super close to the hotel, so it's an easy first stop on the way out.\nSince they roast their own beans, it's a good place to buy a bag to bring home."
        },
        {
          name: "Dongtaixiang 东泰祥",
          text: "A top pick on our screenshot list for sheng jian made with half-leavened dough, so they're slightly thinner and crispier than the fluffy kind.\nThe list also says the scallion oil noodles and small wontons are great here, which knocks out two must-eats on the last morning."
        }
      ],
      sights: [
        {
          name: "Hongqiao Railway Station",
          text: "One of the biggest train stations in Asia, opened in 2010 and connected to the airport and metro.\nThe Beijing–Shanghai high-speed line opened in 2011. It's about 1,300 km, and the fastest trains do it in around 4.5 hours at up to 350 km/h. Bring the same passport we booked with, since they check it at the gates.",
          source: "https://en.wikipedia.org/wiki/Shanghai_Hongqiao_railway_station"
        }
      ],
      foodIdeas: [
        {
          meal: "Breakfast",
          area: "Near the hotel",
          dish: "Sheng jian bao 生煎",
          short: "pan-fried pork buns with soup inside",
          name: "Da Hu Chun 大壶春",
          what: "Pan-fried pork buns: fluffy on top, crispy on the bottom, with hot soup inside.",
          why: "Michelin Bib Gourmand, near the hotel, opens 8 AM.",
          address: "136 Middle Sichuan Rd 四川中路136号",
          amap: "大壶春 四川中路",
          hours: "8:00–21:00"
        },
        {
          meal: "Lunch",
          area: "Near the hotel",
          dish: "Xiao long bao 小笼包",
          short: "soup dumplings",
          name: "Lai Lai Xiao Long 莱莱小笼",
          what: "Steamed soup dumplings: a thin wrapper around pork and hot broth. Nibble a small hole and sip the soup first.",
          why: "One more round of pork soup dumplings, five minutes from the hotel.",
          address: "506 Tianjin Rd 天津路506号",
          amap: "天津路506号"
        },
        {
          meal: "Snack",
          area: "Near the hotel",
          dish: "Mooncakes + sticky rice balls for the train",
          short: "warm pork mooncakes and sweet rice balls",
          name: "Zhen Lao Da Fang 真老大房 & Shen Da Cheng 沈大成",
          what: "Fresh-meat mooncakes are flaky pastry filled with savory pork, served warm. Double-filled rice balls (双酿团) are soft, chewy balls filled with red bean and black sesame.",
          why: "Grab fresh-meat mooncakes and glutinous rice balls on Nanjing East Rd before we go.",
          address: "536 & 636 Nanjing East Rd 南京东路536号",
          amap: "南京东路536号"
        },
        {
          meal: "Breakfast",
          area: "People's Square",
          dish: "Jianbing 煎饼",
          short: "egg crepe with a crispy cracker",
          name: "Dingxing Rd Jianbing 定兴路蛋饼",
          what: "Chinese street crepe: a thin egg crepe folded around a crispy cracker, savory sauces, scallion and coriander.",
          why: "Viral street stall near People's Square Station, Exit 8.",
          tip: "Ask for spicy or not (要辣 / 不要辣), and with or without coriander (要香菜 / 不要香菜).",
          address: "No. 6 Dingxing Rd 定兴路6号",
          amap: "定兴路蛋饼"
        },
        {
          meal: "Lunch",
          area: "Near the hotel",
          dish: "Shanghai noodles 上海面",
          short: "soy-broth noodles with braised toppings",
          name: "Yong Feng Mian Guan 永丰面馆",
          what: "Classic benbang noodle shop: soy-broth or tossed noodles with toppings like braised pork or fried eel.",
          why: "Michelin-listed noodle shop.",
          address: "320 Hankou Rd 汉口路320号",
          hours: "7:00–21:00",
          amap: "永丰面馆 汉口路",
          dianping: "上海面馆"
        },
        {
          meal: "Lunch",
          area: "Near the hotel",
          dish: "Shanghai noodles 上海面",
          short: "soy-broth noodles with braised toppings",
          name: "Fu Xing Mian Wang 复兴面王",
          what: "Shanghai-style noodles in soup or tossed, with a choice of toppings.",
          why: "Michelin-listed noodle shop.",
          address: "Shop 101B, West Wing 1F, 355–377 Fuzhou Rd 福州路355号",
          hours: "8:00–21:00",
          amap: "复兴面王 福州路",
          dianping: "上海面馆"
        }
      ],
      otherOptions: []
    }
  ]
};
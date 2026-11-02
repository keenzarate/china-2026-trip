// =====================================================================
//  BEIJING: all the wording for the Beijing half of the trip site.
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
//     people         Names for the packing and shopping lists (each person adds items on the page itself).
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
//       type       run, see, shop, tea, coffee, food, misc, book, tbd (food + coffee go in the Food section).
//       label      Small word above the title (Run, See, Lunch...).
//       detail     The line under the title.     address    Shown under the detail.
//       amap       What the "Open in Amap" button searches.      dianping   What the Dianping button searches.
//       metro      The "M" directions line.        wander     "Wander around" spots (name, note, amap).
//       order      "What to order (sharing)" dishes (en, zh).
//       options    "Where to get it" places (name, why, address, amap).
//       alsoShowNotes  Names of notes (below) to show under "About this place" for this stop.
//     food / places / shopping / sights   The notes behind "About this place" (name, text, source link).
//     foodIdeas       "Not feeling it? Other food ideas" backups (meal, dish, name, why, address, amap).
//     otherOptions    The "Other options" panel for activities (group, name, why, address, amap).
// =====================================================================

window.TRIP = window.TRIP || {};
TRIP.beijing = {
  name: "Beijing",
  zh: "北京",
  dates: "20–25 November",
  amapCity: "110000",
  // ---------- Start card ----------
  prep: {
    title: "Bookings & essentials",
    summary: "Nov 20–25, based by Wangfujing metro (Lines 1 & 8). The plan is still loose. Tentatively: Great Wall Sat 21, National Museum Sun 22, Forbidden City Tue 24. The rest is TO FIGURE OUT. Late November is cold, close to freezing at night, so pack layers, gloves and a hat for the Great Wall.",
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
        what: "Check the forecast and book Mubus (bus + Great Wall entry) on Trip.com. Plan is Sat Nov 21; Mon Nov 23 is the backup",
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
      "Check the phone is unlocked before flying.",
      "Forbidden City and National Museum are closed Mondays, and so are Red Brick, Nanchizi and Song Art Museum.",
      "Bring the passport we booked with; the Forbidden City, National Museum and Tiananmen check it at the gate.",
      "Dianping (大众点评) for hours and reviews, Amap for directions. Amap links on the Beijing cards search inside Beijing."
    ]
  },
  // ---------- About card ----------
  history: {
    title: "Beijing",
    photo: "Great Wall at Mutianyu.jpg",
    paragraphs: [
      "Beijing has been a city for about 3,000 years. Its earliest form, the City of Ji, dates to around 1045 BC. The name means \"Northern Capital\", as opposed to Nanjing, the \"Southern Capital\".",
      "Kublai Khan made it his capital, Dadu, in 1271, and in 1279 it became the capital of all China for the first time. The Ming renamed it Beijing in 1403, and the Yongle Emperor moved the capital here in 1421 and built the Forbidden City and Temple of Heaven.",
      "The Qing took over in 1644 and ruled from here until 1912. It was renamed Beiping when the capital moved in 1928, and became the capital again in 1949."
    ],
    source: "https://en.wikipedia.org/wiki/History_of_Beijing",
    areas: [
      {
        name: "The Forbidden City & central axis",
        zh: "故宫",
        photo: "The Forbidden City - View from Coal Hill.jpg",
        source: "https://en.wikipedia.org/wiki/Forbidden_City",
        text: "The imperial palace at the center of everything, built 1406–1420. Beijing was laid out along a north–south axis running from Qianmen through Tiananmen and the palace up to Jingshan and the Drum and Bell Towers. We walk most of it this week."
      },
      {
        name: "Tiananmen",
        zh: "天安门",
        photo: "Tiananmen or Gate of Heavenly Peace (6349930988).jpg",
        source: "https://en.wikipedia.org/wiki/Tiananmen_Square",
        text: "The \"Gate of Heavenly Peace\" was the front door of the Imperial City. The huge square in front, lined by the National Museum and Great Hall of the People, is the political heart of modern China."
      },
      {
        name: "Wangfujing",
        zh: "王府井",
        photo: "Wangfujing street, Beijing.JPG",
        source: "https://en.wikipedia.org/wiki/Wangfujing",
        text: "Our home base. Named for the princes' mansions (王府) and a sweet-water well (井), it's been a commercial street since the Ming dynasty and has been pedestrian since around 2000."
      },
      {
        name: "Qianmen & Dashilar",
        zh: "前门",
        photo: "Qianmen Gate.jpg",
        source: "https://en.wikipedia.org/wiki/Zhengyangmen",
        text: "Qianmen, the \"Front Gate\", was first built in 1419 to guard the main southern entrance to the inner city. Its 42 m gatehouse survived the demolition of the city walls in the 1960s. The lanes south of it, Dashilar, have been shopping streets for centuries."
      },
      {
        name: "The hutongs & Gulou",
        zh: "胡同",
        photo: "Hutong Jiemen (Snowyowls).jpg",
        source: "https://en.wikipedia.org/wiki/Hutong",
        text: "Narrow alleys of courtyard houses, named from a Mongolian word for \"well\" in the Yuan dynasty. The Drum and Bell Tower, Nanluoguxiang and Houhai area is where the old-Beijing feel is strongest."
      },
      {
        name: "Temple of Heaven",
        zh: "天坛",
        photo: "Hall of Prayer for Good Harvest.JPG",
        source: "https://en.wikipedia.org/wiki/Temple_of_Heaven",
        text: "Where emperors prayed for good harvests, built by the Yongle Emperor. Today it's a huge park, busiest in the early morning with tai chi, dancing and choirs."
      },
      {
        name: "Lama Temple & Guozijian",
        zh: "雍和宫",
        photo: "Beijing, Lama Temple (6169821757).jpg",
        source: "https://en.wikipedia.org/wiki/Yonghe_Temple",
        text: "A prince's mansion turned Tibetan Buddhist monastery in 1744, with the Imperial Academy and Confucius Temple on the leafy street next door."
      },
      {
        name: "Mutianyu Great Wall",
        zh: "慕田峪",
        photo: "",
        source: "https://en.wikipedia.org/wiki/Mutianyu",
        text: "About 70 km northeast of the city. A restored Ming-era stretch, rebuilt in 1569, with 22 watchtowers and battlements on both sides."
      }
    ]
  },
  // ---------- Neighborhoods card ----------
  neighborhoods: {
    title: "The districts around us",
    summary: "Beijing is split into districts (区). Old Beijing inside the 2nd Ring Road is just two of them, Dongcheng (east) and Xicheng (west), and we're staying right in the middle. Most of our Beijing days are still open, so districts we haven't planned yet show which day they could fit.",
    layout: {
      title: "How Beijing is laid out",
      paragraphs: [
        "Beijing is built like a target: a series of ring roads around the Forbidden City at the center. They're numbered outward from the 2nd Ring (there's no official 1st) to the 6th, and they're squarish rather than round. Locals describe where something is by ring: \"inside the 2nd Ring\" means the old city, \"near the East 3rd Ring\" means the business district.",
        "The 2nd Ring follows the line of the old Ming city wall, which was torn down in the 1960s. Metro Line 2 runs in a loop right underneath it, and its stations are named after the old gates: Dongzhimen, Xizhimen, Qianmen, Jianguomen. The \"-men\" (门) in a name means gate.",
        "Cutting through the middle is the central axis (中轴线), a straight north–south line from Yongdingmen Gate through Qianmen, Tiananmen, the Forbidden City and Jingshan Park up to the Drum and Bell Towers. It's a UNESCO World Heritage Site. Crossing it at Tiananmen is Chang'an Avenue, the big east–west boulevard, with Metro Line 1 underneath.",
        "Old Beijing's streets run on a compass grid, so people give directions by north, south, east and west (往北走 = go north) rather than left and right. Keep the compass on in Amap."
      ],
      rings: [
        {
          name: "Inside the 2nd Ring",
          what: "The old city: Forbidden City, Tiananmen, hutongs, Houhai, Temple of Heaven, Lama Temple. Where we're staying.",
          metro: "Line 2 loop"
        },
        {
          name: "2nd to 3rd Ring",
          what: "Embassies, Sanlitun, Ritan Park; the CBD towers sit on the East 3rd Ring."
        },
        {
          name: "3rd to 4th Ring",
          what: "Newer housing and offices; the Olympic Park (Bird's Nest) is on the North 4th Ring.",
          metro: "Line 10 loop, roughly"
        },
        { name: "4th to 5th Ring", what: "Universities, the Summer Palace, 798 Art District." },
        {
          name: "Past the 5th and 6th",
          what: "Suburbs and the airports. The Great Wall is far beyond, in the mountains."
        }
      ],
      map: {
        rings: [
          { name: "2nd", n: 39.949, s: 39.866, w: 116.354, e: 116.434 },
          { name: "3rd", n: 39.968, s: 39.853, w: 116.317, e: 116.462 },
          { name: "4th", n: 39.987, s: 39.834, w: 116.281, e: 116.488 }
        ],
        axis: { n: 39.941, s: 39.864, lng: 116.3975 },
        avenue: { lat: 39.9075, w: 116.33, e: 116.47 },
        palace: { n: 39.9225, s: 39.9135, w: 116.3915, e: 116.4035 }
      }
    },
    hotel: {
      name: "Our hotel",
      transit: "Nearest metro: Wangfujing 王府井 (Lines 1 & 8), a short walk. Line 1 runs east–west along Chang'an Ave past Tiananmen; Line 8 runs north to the hutongs and Shichahai.",
      lat: 39.917,
      lng: 116.41
    },
    note: "Sketch map: each pin is roughly the heart of the district, and distances are straight lines from the hotel. Real routes are longer, so use Amap for live directions.",
    areas: [
      {
        name: "Dongcheng District",
        zh: "东城区",
        here: true,
        lat: 39.917,
        lng: 116.41,
        heart: "our hotel",
        ring: "Inside the 2nd Ring (the old city)",
        photo: "Wangfujing street, Beijing.JPG",
        source: "https://en.wikipedia.org/wiki/Dongcheng_District,_Beijing",
        getThere: "We're in it. Wangfujing is on Lines 1 and 8, and most of the big sights are a short walk or one or two stops away.",
        days: ["d1", "d2", "d3", "d4", "d5", "d6"],
        vibe: "The eastern half of the old imperial city, and where we're staying. The Forbidden City, Tiananmen and the National Museum are a walk away, with the busy Wangfujing shopping street outside the hotel. Further north are the hutong lanes around Nanluoguxiang, the Drum and Bell Towers and the Lama Temple; south is Qianmen and the Temple of Heaven. Grand and historic, busy around the big sights, quiet in the lanes.",
        places: [
          {
            name: "Wangfujing St",
            zh: "王府井大街",
            note: "Pedestrian shopping street right outside the hotel.",
            plan: "Every day",
            amap: "王府井步行街"
          },
          {
            name: "Tiananmen Square & National Museum",
            zh: "天安门广场 / 中国国家博物馆",
            note: "The huge square and China's main history museum.",
            plan: "Sun 22",
            amap: "中国国家博物馆"
          },
          {
            name: "Forbidden City",
            zh: "故宫",
            note: "The imperial palace. Enter from the south, exit north.",
            plan: "Tue 24",
            amap: "故宫博物院"
          },
          {
            name: "Nanluoguxiang & Drum and Bell Towers",
            zh: "南锣鼓巷 / 钟鼓楼",
            note: "Hutong lanes, courtyard cafes and the old timekeeping towers.",
            plan: "Idea for Mon 23",
            amap: "钟鼓楼"
          },
          {
            name: "Lama Temple & Guozijian",
            zh: "雍和宫 / 国子监",
            note: "Busy Tibetan Buddhist temple, then the calm old imperial academy next door.",
            plan: "Idea for Mon 23",
            amap: "雍和宫"
          },
          {
            name: "Temple of Heaven",
            zh: "天坛",
            note: "Where emperors prayed for harvests; locals exercise in the park every morning.",
            plan: "Idea for Mon 23",
            amap: "天坛公园"
          },
          {
            name: "Qianmen St",
            zh: "前门大街",
            note: "Rebuilt old shopping street south of the square.",
            plan: "Idea",
            amap: "前门大街"
          }
        ]
      },
      {
        name: "Xicheng District",
        zh: "西城区",
        lat: 39.9395,
        lng: 116.386,
        heart: "Houhai",
        ring: "Inside the 2nd Ring (the old city)",
        photo: "Houhai4.jpg",
        source: "https://en.wikipedia.org/wiki/Xicheng_District",
        getThere: "Line 8 north to Shichahai 什刹海, about 15 min. Jingshan Park is a walk from the Forbidden City's north gate.",
        maybe: ["d4", "d5"],
        vibe: "The western half of the old city, built around a chain of lakes. Houhai and Qianhai are lined with willows, hutongs, bars and rickshaws; Beihai Park has the White Dagoba; Jingshan Park gives the best view over the Forbidden City's roofs. Relaxed and pretty, especially at sunset, though the lakeside bars get touristy at night.",
        places: [
          {
            name: "Jingshan Park",
            zh: "景山公园",
            note: "Small hill with the classic view over the Forbidden City.",
            plan: "Could go after the Forbidden City, Tue 24",
            amap: "景山公园"
          },
          {
            name: "Beihai Park",
            zh: "北海公园",
            note: "Imperial lake garden with the White Dagoba.",
            plan: "Idea",
            amap: "北海公园"
          },
          {
            name: "Houhai & Yinding Bridge",
            zh: "后海 / 银锭桥",
            note: "Lakeside walk through the hutongs; lively at night.",
            plan: "Idea for Mon 23",
            amap: "银锭桥"
          },
          {
            name: "Prince Gong's Mansion",
            zh: "恭王府",
            note: "Grand Qing-era courtyard mansion and garden. Book ahead.",
            plan: "Idea",
            amap: "恭王府"
          },
          {
            name: "Dashilar",
            zh: "大栅栏",
            note: "Old lanes of century-old shops west of Qianmen.",
            plan: "Idea",
            amap: "大栅栏"
          }
        ]
      },
      {
        name: "Chaoyang District",
        zh: "朝阳区",
        lat: 39.9365,
        lng: 116.4545,
        heart: "Sanlitun",
        ring: "Between the 2nd and 5th Rings, east side",
        photo: "Sanlitun.jpg",
        source: "https://en.wikipedia.org/wiki/Chaoyang_District,_Beijing",
        getThere: "Sanlitun: Line 6 to Dongdaqiao 东大桥 (change from Line 8 at Nanluoguxiang), about 25 min. 798: Line 14 to Jiangtai 将台, then a 15-min walk.",
        maybe: ["d4"],
        vibe: "Modern Beijing, east of the old city. The CBD skyscrapers and CCTV tower, the embassy area, Sanlitun's shops, restaurants and bars, and the 798 art district in old factories further out. Newer and more international; good for shopping, coffee and a change from palaces.",
        places: [
          {
            name: "Sanlitun Taikoo Li",
            zh: "三里屯太古里",
            note: "Open-air shopping area with flagship stores, cafes and bars.",
            plan: "Idea for Mon 23",
            amap: "三里屯太古里"
          },
          {
            name: "798 Art District",
            zh: "798艺术区",
            note: "Galleries and cafes in 1950s factory buildings.",
            plan: "Idea for Mon 23",
            amap: "798艺术区"
          },
          {
            name: "CBD & CCTV Headquarters",
            zh: "国贸 / 中央电视台总部大楼",
            note: "Skyscraper district and the famous loop-shaped tower.",
            plan: "Idea",
            amap: "中央电视台总部大楼"
          },
          {
            name: "Ritan Park",
            zh: "日坛公园",
            note: "Quiet park in the embassy area.",
            plan: "Idea",
            amap: "日坛公园"
          }
        ]
      },
      {
        name: "Haidian District",
        zh: "海淀区",
        lat: 39.9995,
        lng: 116.2755,
        heart: "the Summer Palace",
        ring: "Between the 4th and 5th Rings, northwest",
        source: "https://en.wikipedia.org/wiki/Haidian_District",
        getThere: "Line 1 west to Xidan 西单, then Line 4 north to Beigongmen 北宫门 for the Summer Palace, about 50 min.",
        maybe: ["d4"],
        vibe: "The university and tech district in the northwest. Big, green imperial gardens (the Summer Palace on its lake, the ruins of the Old Summer Palace) plus Peking and Tsinghua universities and the student area of Wudaokou. Far from the hotel, so it's a half-day or full-day trip.",
        places: [
          {
            name: "Summer Palace",
            zh: "颐和园",
            note: "Imperial lake garden with the Long Corridor and Longevity Hill.",
            plan: "Idea for Mon 23",
            amap: "颐和园"
          },
          {
            name: "Old Summer Palace",
            zh: "圆明园",
            note: "Ruins of the European-style palaces destroyed in 1860.",
            plan: "Idea",
            amap: "圆明园遗址公园"
          },
          {
            name: "Wudaokou",
            zh: "五道口",
            note: "Student neighborhood with cheap eats and cafes.",
            plan: "Idea",
            amap: "五道口"
          }
        ]
      },
      {
        name: "Huairou District",
        zh: "怀柔区",
        lat: 40.4319,
        lng: 116.5704,
        offMap: true,
        heart: "Mutianyu",
        ring: "Far outside the 6th Ring, in the mountains",
        photo: "Great Wall of China July 2006.JPG",
        source: "https://en.wikipedia.org/wiki/Mutianyu",
        getThere: "Our Mubus from the city, about 1.5–2 hours each way.",
        days: ["d2"],
        vibe: "Mountains and countryside about 70 km north of the city. We only come for the Great Wall at Mutianyu: restored watchtowers along a forested ridge, with a cable car up and a toboggan down. Cold and windy in late November, so dress warm.",
        places: [
          {
            name: "Mutianyu Great Wall",
            zh: "慕田峪长城",
            note: "Restored section with cable car and toboggan.",
            plan: "Sat 21",
            amap: "慕田峪长城"
          }
        ]
      },
      {
        name: "The airport",
        zh: "机场",
        lat: 40.0799,
        lng: 116.6031,
        offMap: true,
        heart: "Capital Airport",
        ring: "Out past the 5th Ring",
        source: "https://en.wikipedia.org/wiki/Beijing_Capital_International_Airport",
        getThere: "Airport Express trains from the city, about 1 hour. Check which airport is on our ticket. Capital (PEK): metro to Dongzhimen 东直门, then the Capital Airport Express. Daxing (PKX) is far south: metro to Caoqiao 草桥, then the Daxing Airport Express, about 1 hour 15 min.",
        days: ["d6"],
        vibe: "Our flight home. Beijing has two big airports: Capital in the northeast, and the new Daxing in the far south. Leave plenty of time either way.",
        places: [
          { name: "Beijing Capital Airport", zh: "北京首都国际机场", plan: "Wed 25, if PEK", amap: "北京首都国际机场" },
          { name: "Beijing Daxing Airport", zh: "北京大兴国际机场", plan: "Wed 25, if PKX", amap: "北京大兴国际机场" }
        ]
      }
    ]
  },
  // ---------- Our list card ----------
  ourList: [
    {
      section: "Must-try foods",
      items: [
        { name: "Jianbing", zh: "煎饼", note: "Classic breakfast; crepe with egg." },
        { name: "Shou juan", note: "Thin wrap rolled around meats and veggies." },
        { name: "Peking duck", zh: "北京烤鸭", note: "Of course." },
        { name: "Braised pork", zh: "红烧肉" },
        { name: "Shao rou jia bing", note: "Roast meat in a flatbread." },
        {
          name: "Chao liang fen",
          zh: "炒凉粉",
          note: "Chunks of wobbly, sticky mung bean jelly in a spicy, slightly vinegary sesame sauce."
        },
        { name: "Spicy sour noodles", zh: "酸辣粉" },
        {
          name: "Braised pork noodles",
          zh: "红烧肉面",
          note: "Thick hand-pulled noodles, rich broth, lots of fatty pork belly (~¥28)."
        },
        {
          name: "Zhajiangmian",
          zh: "炸酱面",
          note: "Beijing's most famous noodles, chunky meat sauce and crunchy veggies (~¥22); the ancestor of Korean jjajangmyeon."
        },
        {
          name: "Beijing yogurt",
          zh: "老北京酸奶",
          note: "Nice restaurants sometimes make their own; also the drinking yogurt brand."
        },
        { name: "Snow pear tea", zh: "雪梨茶" },
        {
          name: "Liang mian (crepe roll)",
          zh: "凉面",
          note: "Not cold noodles here: a thick chewy crepe rolled around spices and filling, heavy on cumin and chili."
        },
        { name: "Tang er duo", zh: "糖耳朵", note: "\"Sugar ear\", a traditional Beijing sweet (~¥3)." },
        { name: "Malatang", zh: "麻辣烫" }
      ]
    },
    {
      section: "Non-negotiables",
      items: [
        { name: "Great Wall", zh: "长城", note: "Plan: Sat 21 (tentative).", amap: "慕田峪长城" },
        { name: "Forbidden City", zh: "故宫", note: "Plan: Tue 24.", amap: "故宫博物院" },
        {
          name: "Ghost Street (Gui Jie)",
          zh: "簋街",
          note: "The most famous late-night street food street.",
          address: "Dongzhimen Inner St 东直门内大街",
          amap: "簋街"
        }
      ]
    },
    {
      section: "Places to see",
      items: [
        { name: "Tian'anmen Square", zh: "天安门广场", note: "Plan: Sun 22.", amap: "天安门广场" },
        { name: "Jingshan Park", zh: "景山公园", note: "Panoramic view of the Forbidden City.", amap: "景山公园" },
        {
          name: "Xianyukou Street",
          zh: "鲜鱼口",
          note: "Traditional food street near Qianmen.",
          amap: "鲜鱼口美食街"
        },
        { name: "Qianmen East hutongs", zh: "前门东区", note: "Calmer, lived-in streets.", amap: "前门东区胡同" },
        { name: "Lama Temple (Yonghe Gong)", zh: "雍和宫", amap: "雍和宫" },
        { name: "Longtan Park", zh: "龙潭公园", amap: "龙潭公园" },
        { name: "Shichahai lakes", zh: "什刹海", amap: "什刹海" },
        {
          name: "Red Brick Art Museum",
          zh: "红砖美术馆",
          note: "Really scenic! Closed Mondays.",
          address: "Hegezhuang Village, Shunbai Rd, Cuigezhuang, Chaoyang 朝阳区崔各庄何各庄村顺白路",
          amap: "红砖美术馆"
        },
        { name: "Hutongs", zh: "胡同", amap: "南锣鼓巷" },
        { name: "Summer Palace", zh: "颐和园", amap: "颐和园" },
        {
          name: "Nanchizi Museum",
          note: "Closed Mondays.",
          address: "21 West Alley, Pudu Temple, Dongcheng 普度寺西巷21号",
          amap: "普度寺西巷21号"
        },
        { name: "Song Art Museum", note: "Closed Mondays.", amap: "Song Art Museum" },
        { name: "Forest Library", amap: "Forest Library Beijing" },
        { name: "798 Art Zone", zh: "798艺术区", amap: "798艺术区" },
        { name: "Cycling tour?", note: "Idea from our notes." }
      ]
    },
    {
      section: "Food spots",
      items: [
        { name: "Punk Rock Noodle", amap: "Punk Rock Noodle" },
        {
          name: "Zeng Sheng Kui",
          zh: "增盛魁",
          note: "Breakfast since 1928: sugar pancake, savory silken tofu, doornail meat pie. Gets really busy.",
          amap: "增盛魁"
        },
        { name: "Hu Da", zh: "胡大", note: "Popular for crawfish, on Ghost Street.", amap: "胡大饭馆 簋街" },
        {
          name: "86 Guozijian Street",
          note: "From our list.",
          address: "86 Guozijian St 国子监街86号",
          amap: "国子监街86号"
        },
        { name: "Xihuashi Battercake", note: "Breakfast egg pancake.", amap: "西花市 煎饼" },
        {
          name: "Yin San Douzhi",
          zh: "尹三豆汁",
          note: "Breakfast; douzhi with fried dough rings. Open 5:30 to noon.",
          address: "176 Dongxiaoshi St 东晓市街176号",
          amap: "尹三豆汁"
        },
        { name: "Zengshengkui Snack Bar", zh: "增盛魁", note: "Baozi.", amap: "增盛魁" },
        {
          name: "Mingyuan Park Restaurant",
          note: "Soybean noodles.",
          address: "Beizongbu Hutong 北总布胡同",
          amap: "北总布胡同"
        },
        {
          name: "Jiangniu Dumplings (Sanyuanli)",
          note: "Dumplings.",
          address: "Sanyuanli 三源里",
          amap: "Jiangniu dumplings"
        },
        {
          name: "Donglaishun (Qianmen Street)",
          zh: "东来顺",
          note: "Lamb skewers, street food; famous for copper-pot lamb hot pot.",
          address: "Qianmen Street 前门大街",
          amap: "东来顺 前门"
        },
        { name: "Niujie street food", zh: "牛街", note: "Beijing's historic Muslim quarter.", amap: "牛街" },
        { name: "Shi Ji Xian Bing", amap: "Shi Ji Xian Bing" },
        { name: "Ma Ji Shao Bing", amap: "Ma Ji Shao Bing" },
        { name: "Bai Ji Nian Gao", zh: "白记年糕", amap: "白记年糕" },
        { name: "Xian Yun Xuan", amap: "Xian Yun Xuan" },
        { name: "Shendian Noodles", amap: "Shendian noodles" }
      ]
    },
    {
      section: "Cafes & tea",
      items: [
        {
          name: "Xicha Tea Workshop (Sanlitun Taikoo Li)",
          zh: "喜茶",
          note: "Black Gold store.",
          address: "Sanlitun Taikoo Li 三里屯太古里",
          amap: "喜茶 三里屯"
        },
        {
          name: "Brickyard Courtyard Cafe",
          note: "Seating alcoves in century-old brick kilns.",
          address: "Dongsi hutong strip, Dongcheng 东四",
          amap: "Brickyard Courtyard Cafe"
        },
        {
          name: "Wudaoying Slow Coffee",
          note: "One of Beijing's quietest hutong streets, with an ancient temple as backdrop.",
          address: "Wudaoying Hutong, near Lama Temple 五道营胡同",
          amap: "五道营胡同 咖啡"
        },
        {
          name: "Drum Tower Tea House Cafe",
          note: "Qing carved architecture; oolong-infused americano?",
          address: "Gulou East St, near the Drum Tower 鼓楼东大街",
          amap: "鼓楼 茶馆 咖啡"
        },
        { name: "Junwangfu Hotel afternoon tea", zh: "君王府", note: "Book on Dianping.", amap: "君王府" },
        { name: "Swim Cafe", address: "37 Guozijian St 国子监街37号", amap: "国子监街37号" },
        { name: "Remap Cafe", address: "86 Guozijian St, Andingmen 国子监街86号", amap: "国子监街86号" },
        { name: "CHILL Pill", note: "Donuts.", amap: "CHILL Pill" },
        { name: "Chunfen", amap: "Chunfen coffee" },
        {
          name: "Townhouse",
          note: "Scandi-style cafe on Guozijian St.",
          address: "76 Guozijian St 国子监街76号",
          amap: "国子监街76号"
        },
        { name: "Courtyard coffee space near Guozijian St", amap: "国子监街 咖啡" },
        { name: "Voyage", amap: "Voyage coffee Beijing" },
        { name: "Longfu Temple", zh: "隆福寺", amap: "隆福寺" },
        { name: "Shashasha", amap: "Shashasha cafe" },
        {
          name: "YuanGuBen Coffee (Nanluoguxiang)",
          note: "Quiet courtyard cafe.",
          address: "Nanluoguxiang 南锣鼓巷",
          amap: "南锣鼓巷 咖啡"
        },
        { name: "StillWater", note: "Minimalist cafe in the old neighborhood.", amap: "StillWater coffee" },
        {
          name: "Tangfant Coffee (Shichahai)",
          note: "Cozy cafe inside a hutong.",
          address: "Shichahai 什刹海",
          amap: "什刹海 咖啡"
        },
        { name: "Colorful Brain", amap: "Colorful Brain" },
        {
          name: "Cenchi Coffee",
          zh: "汵奇",
          note: "Has a kitty inside! Roasts in-house.",
          address: "114 Dongsi South St 东四南大街114号",
          amap: "东四南大街114号"
        },
        { name: "SWANSEEN", note: "Vintage.", amap: "SWANSEEN" },
        { name: "Jingshui Coffee", address: "69 Gulou East Ave, Dongcheng 鼓楼东大街69号", amap: "鼓楼东大街69号" }
      ]
    },
    {
      section: "Shopping",
      items: [
        {
          name: "42 Guozijian Street",
          note: "From our list.",
          address: "42 Guozijian St 国子监街42号",
          amap: "国子监街42号"
        }
      ]
    }
  ],
  // ---------- Day by day ----------
  days: [
    // ---------- Day 1: Friday 20 November, Wangfujing ----------
    {
      key: "d1",
      date: "2026-11-20",
      when: "Friday 20 November",
      tabTop: "20",
      tabSub: "Fri",
      color: "#C23A30",
      ink: "#A12A21",
      zh: "王府井",
      area: "Wangfujing",
      title: "Arrive in Beijing",
      summary: "Train up from Shanghai and check in on Wangfujing. The rest of the day is TO FIGURE OUT.",
      stops: [
        {
          time: "Afternoon",
          type: "misc",
          label: "Arrive",
          title: "Train into Beijing",
          detail: "Train time TO FIGURE OUT. Most trains from Shanghai arrive at Beijing South 北京南站: Line 4 north to Xidan 西单, then Line 1 east to Wangfujing 王府井, about 40 min. Amap will route it."
        },
        {
          time: "After",
          type: "misc",
          label: "Hotel",
          title: "Check in at the hotel",
          amap: "王府井地铁站",
          metro: "Wangfujing 王府井 station (Lines 1, 8) is right there."
        },
        { time: "Evening", type: "tbd", label: "Dinner", title: "TO FIGURE OUT" }
      ],
      food: {
        items: []
      },
      places: [],
      sights: [],
      otherOptions: []
    },
    // ---------- Day 2: Saturday 21 November, Mutianyu Great Wall ----------
    {
      key: "d2",
      date: "2026-11-21",
      when: "Saturday 21 November",
      tabTop: "21",
      tabSub: "Sat",
      color: "#653279",
      ink: "#653279",
      zh: "长城",
      area: "Mutianyu Great Wall",
      title: "The Great Wall (tentative)",
      summary: "Great Wall day if the forecast is good. We book Mubus from Shanghai on Nov 18–19; if Saturday looks bad, swap with Monday 23. Times and dinner are TO FIGURE OUT. Dress warm.",
      highlights: ["Great Wall"],
      stops: [
        { time: "Early", type: "tbd", label: "Breakfast", title: "TO FIGURE OUT" },
        {
          time: "Time TBD",
          type: "misc",
          label: "Transit",
          title: "Mubus to Mutianyu",
          detail: "Bus and Great Wall entry in one booking. Pickup point and time are on the Trip.com voucher.",
          bookingUrl: "https://www.trip.com/things-to-do/detail/89362507?language=EN&locale=en_xx&districtId=1&districtType=1"
        },
        {
          time: "Day",
          type: "see",
          label: "See",
          title: "Mutianyu Great Wall",
          detail: "Bring the passport used for the booking.",
          address: "Mutianyu, Huairou District 慕田峪长城",
          amap: "慕田峪长城"
        },
        { time: "Evening", type: "tbd", label: "Dinner", title: "TO FIGURE OUT" }
      ],
      food: {
        items: []
      },
      places: [],
      sights: [
        {
          name: "Mutianyu Great Wall",
          text: "A 2.25 km restored stretch about 70 km northeast of central Beijing, with 22 watchtowers.\nThe first wall here was built in the mid-500s (Northern Qi), and the Ming rebuilt it in 1569. Rare detail: both sides have battlements, so archers could fire either way. It opened to visitors in 1988.",
          source: "https://en.wikipedia.org/wiki/Mutianyu"
        }
      ],
      otherOptions: []
    },
    // ---------- Day 3: Sunday 22 November, Tiananmen ----------
    {
      key: "d3",
      date: "2026-11-22",
      when: "Sunday 22 November",
      tabTop: "22",
      tabSub: "Sun",
      color: "#004A9D",
      ink: "#004A9D",
      zh: "天安门",
      area: "Tiananmen",
      title: "National Museum & Tiananmen",
      summary: "National Museum and Tiananmen Square, both booked from Shanghai on Nov 15. Everything else is TO FIGURE OUT.",
      highlights: ["National Museum", "Tiananmen"],
      stops: [
        { time: "6:30", type: "tbd", label: "Run + breakfast", title: "TO FIGURE OUT" },
        {
          time: "Time TBD",
          type: "see",
          label: "See",
          title: "Tiananmen Square (reserved Nov 15)",
          detail: "Bring the passport we booked with; there's a security check.",
          amap: "天安门广场"
        },
        {
          time: "Time TBD",
          type: "see",
          label: "Museum",
          title: "National Museum of China (booked Nov 15)",
          detail: "On the east side of Tiananmen Square. Closed Mondays.",
          address: "16 East Chang'an Ave 东长安街16号",
          amap: "中国国家博物馆"
        },
        { time: "Later", type: "tbd", label: "Plan", title: "TO FIGURE OUT" },
        { time: "Evening", type: "tbd", label: "Dinner", title: "TO FIGURE OUT" }
      ],
      food: {
        items: []
      },
      places: [],
      sights: [
        {
          name: "Tiananmen Square",
          text: "One of the largest city squares in the world, between Tiananmen gate (the \"Gate of Heavenly Peace\", with Mao's portrait) and Qianmen. The National Museum, Great Hall of the People and Mao's Mausoleum line it.",
          source: "https://en.wikipedia.org/wiki/Tiananmen_Square"
        },
        {
          name: "National Museum of China",
          text: "Built in 1959 as one of the \"Ten Great Buildings\" and reopened in 2011 after a 4-year renovation. It's one of the biggest museums in the world, with over a million objects.\nMust-sees: the Houmuwu Ding, an 833 kg Shang dynasty bronze, and Han dynasty jade burial suits sewn with gold thread.",
          source: "https://en.wikipedia.org/wiki/National_Museum_of_China"
        }
      ],
      otherOptions: []
    },
    // ---------- Day 4: Monday 23 November, To figure out ----------
    {
      key: "d4",
      date: "2026-11-23",
      when: "Monday 23 November",
      tabTop: "23",
      tabSub: "Mon",
      color: "#A6217F",
      ink: "#8A1B69",
      zh: "胡同",
      area: "To figure out",
      title: "TO FIGURE OUT",
      summary: "Open day, and the Great Wall backup if Saturday's weather is bad. Heads up: the Forbidden City, National Museum and most museums are closed Mondays. Ideas are on the Beijing prep card.",
      stops: [
        { time: "6:30", type: "tbd", label: "Run + breakfast", title: "TO FIGURE OUT" },
        { time: "Midday", type: "tbd", label: "Lunch", title: "TO FIGURE OUT" },
        { time: "Later", type: "tbd", label: "Plan", title: "TO FIGURE OUT" },
        { time: "Evening", type: "tbd", label: "Dinner", title: "TO FIGURE OUT" }
      ],
      food: {
        items: []
      },
      places: [],
      sights: [],
      otherOptions: []
    },
    // ---------- Day 5: Tuesday 24 November, The Forbidden City ----------
    {
      key: "d5",
      date: "2026-11-24",
      when: "Tuesday 24 November",
      tabTop: "24",
      tabSub: "Tue",
      color: "#009B6B",
      ink: "#007A54",
      zh: "故宫",
      area: "The Forbidden City",
      title: "Forbidden City",
      summary: "Forbidden City, booked from Shanghai on Nov 17. Everything around it is TO FIGURE OUT. Jingshan Park is right across from the north exit if we want the view.",
      highlights: ["Forbidden City"],
      stops: [
        { time: "6:30", type: "tbd", label: "Run + breakfast", title: "TO FIGURE OUT" },
        {
          time: "Time TBD",
          type: "see",
          label: "See",
          title: "Forbidden City (booked Nov 17)",
          detail: "Enter at the Meridian Gate (south), exit at the north gate. Closed Mondays.",
          address: "Meridian Gate 午门 (Tiananmen East metro, Exit B)",
          amap: "故宫博物院 午门"
        },
        { time: "Later", type: "tbd", label: "Plan", title: "TO FIGURE OUT" },
        { time: "Evening", type: "tbd", label: "Dinner", title: "TO FIGURE OUT" }
      ],
      food: {
        items: []
      },
      places: [],
      sights: [
        {
          name: "Forbidden City",
          text: "Built 1406–1420 by about a million workers under the Yongle Emperor. It has 980 buildings and, legend says, \"9,999.5\" rooms.\n24 Ming and Qing emperors lived here from 1420 to 1912, and Puyi, the last emperor, stayed in the inner court until 1924. It became a museum in 1925.",
          source: "https://en.wikipedia.org/wiki/Forbidden_City"
        }
      ],
      otherOptions: []
    },
    // ---------- Day 6: Wednesday 25 November, Travel day ----------
    {
      key: "d6",
      date: "2026-11-25",
      when: "Wednesday 25 November",
      tabTop: "25",
      tabSub: "Wed",
      color: "#0092C7",
      ink: "#0077A3",
      zh: "再见",
      area: "Travel day",
      title: "Flight day",
      summary: "Last day. The morning and flight time are TO FIGURE OUT.",
      stops: [
        { time: "6:30", type: "tbd", label: "Run + breakfast", title: "TO FIGURE OUT" },
        {
          time: "Time TBD",
          type: "misc",
          label: "Transit",
          title: "Airport",
          detail: "Check which airport (Capital PEK or Daxing PKX) and leave about 3 hours before the flight."
        }
      ],
      food: {
        items: []
      },
      places: [],
      sights: [],
      otherOptions: []
    }
  ]
};
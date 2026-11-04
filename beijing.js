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
TRIP.beijing = {
  name: "Beijing",
  zh: "北京",
  dates: "20–25 November",
  amapCity: "110000",
  // ---------- Start card ----------
  prep: {
    title: "Bookings & essentials",
    summary: "Nov 20 to 25 (D's flight is around midnight Tue 24 going into Wed 25). Staying near Wangfujing metro (Lines 1 and 8). Booked: Great Wall Sat 21 (depends on weather), National Museum + Tiananmen Sun 22, Forbidden City Tue 24. It's cold in late November, almost freezing at night, so bring layers, gloves and a hat for the Great Wall.",
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
        what: "Book the National Museum of China for Sun Nov 22. Opens 7 days before at 5 PM",
        links: [
          { label: "Official booking site", url: "https://pcticket.chnmuseum.cn/museum-en/#/personal/index" }
        ]
      },
      {
        when: "Nov 15",
        what: "Reserve Tiananmen Square for Sun Nov 22. It's free, slots open 1 to 7 days before at 12 noon. WeChat mini program: 天安门广场预约参观",
        links: [
          {
            label: "How to book (Trip.com guide)",
            url: "https://www.trip.com/guide/attraction/how-to-register-for-tiananmen-square.html"
          }
        ]
      },
      {
        when: "Nov 17, 8 PM",
        what: "Book the Forbidden City for Tue Nov 24. Opens 7 days before at 8 PM",
        links: [
          { label: "Official: bookingticket.dpm.org.cn", url: "https://bookingticket.dpm.org.cn" },
          { label: "International portal", url: "https://intl.dpm.org.cn" }
        ]
      },
      {
        when: "Nov 18–19",
        what: "Check the weather and book Mubus (bus + Great Wall ticket) on Trip.com. Plan is Sat Nov 21, Mon Nov 23 if the weather's bad",
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
        why: "Pays for basically everything, even the metro (Transport QR code) and the bikes. Link a card before we fly."
      },
      {
        name: "WeChat 微信",
        why: "Messages, and some bookings are only on WeChat mini programs (like 天安门广场预约参观 for Tiananmen). Some places only take WeChat Pay."
      },
      {
        name: "Amap 高德地图",
        why: "For directions and metro/bus routes (公交). All the Amap buttons here open it."
      },
      {
        name: "Dianping 大众点评",
        why: "Hours, reviews, lines and menus. All the Dianping buttons here open it."
      },
      {
        name: "Trip.com",
        why: "Train tickets, the Mubus Great Wall thing, and customer service in English."
      },
      {
        name: "Didi 滴滴 (or the Didi tab inside Alipay)",
        why: "Taxis, for when the metro doesn't make sense."
      },
      { name: "eSIM or VPN", why: "Google, WhatsApp and Instagram don't work without one." },
      {
        name: "Translate app with Chinese downloaded for offline use",
        why: "Point the camera at menus and signs. Google Translate needs a VPN so download offline Chinese on Apple Translate too."
      }
    ],
    tips: [
      "Make sure the phone is unlocked before we fly.",
      "Forbidden City and National Museum are closed Mondays. So are Red Brick, Nanchizi and Song Art Museum.",
      "Bring the passport we booked with. The Forbidden City, National Museum and Tiananmen check it at the gate.",
      "Dianping (大众点评) for hours and reviews, Amap for directions. The Amap buttons on the Beijing cards search in Beijing."
    ]
  },
  // ---------- About card ----------
  history: {
    title: "Beijing",
    photo: "Great Wall at Mutianyu.jpg",
    paragraphs: [
      "Beijing's been a city for about 3,000 years. The first version, the City of Ji, is from around 1045 BC. The name means \"Northern Capital\", and Nanjing means \"Southern Capital\".",
      "Kublai Khan made it his capital, Dadu, in 1271, and in 1279 it became the capital of all of China for the first time. The Ming changed the name to Beijing in 1403, and the Yongle Emperor moved the capital here in 1421 and built the Forbidden City and the Temple of Heaven.",
      "The Qing took over in 1644 and ruled from here until 1912. When the capital moved in 1928 it got renamed Beiping, and it became the capital again in 1949."
    ],
    source: "https://en.wikipedia.org/wiki/History_of_Beijing",
    areas: [
      {
        name: "The Forbidden City & central axis",
        zh: "故宫",
        photo: "The Forbidden City - View from Coal Hill.jpg",
        source: "https://en.wikipedia.org/wiki/Forbidden_City",
        text: "The imperial palace right in the middle of everything, built 1406 to 1420. Beijing was planned along a straight north-south line from Qianmen through Tiananmen and the palace up to Jingshan and the Drum and Bell Towers. We'll walk most of it this week."
      },
      {
        name: "Tiananmen",
        zh: "天安门",
        photo: "Tiananmen or Gate of Heavenly Peace (6349930988).jpg",
        source: "https://en.wikipedia.org/wiki/Tiananmen_Square",
        text: "The \"Gate of Heavenly Peace\" was the front door of the Imperial City. The huge square in front, with the National Museum and the Great Hall of the People on the sides, is basically the political center of China."
      },
      {
        name: "Wangfujing",
        zh: "王府井",
        photo: "Wangfujing street, Beijing.JPG",
        source: "https://en.wikipedia.org/wiki/Wangfujing",
        text: "Where we're staying. Named after the princes' mansions (王府) and a sweet water well (井). It's been a shopping street since the Ming dynasty and walking only since around 2000."
      },
      {
        name: "Qianmen & Dashilar",
        zh: "前门",
        photo: "Qianmen Gate.jpg",
        source: "https://en.wikipedia.org/wiki/Zhengyangmen",
        text: "Qianmen means \"Front Gate\", first built in 1419 to guard the main south entrance to the city. The 42 m gate is one of the few things that survived when they tore down the city walls in the 1960s. The lanes south of it, Dashilar, have been shopping streets for hundreds of years."
      },
      {
        name: "The hutongs & Gulou",
        zh: "胡同",
        photo: "Hutong Jiemen (Snowyowls).jpg",
        source: "https://en.wikipedia.org/wiki/Hutong",
        text: "Narrow alleys with courtyard houses. The word hutong comes from a Mongolian word for \"well\". The Drum and Bell Tower, Nanluoguxiang and Houhai area is where it feels the most like old Beijing."
      },
      {
        name: "Temple of Heaven",
        zh: "天坛",
        photo: "Hall of Prayer for Good Harvest.JPG",
        source: "https://en.wikipedia.org/wiki/Temple_of_Heaven",
        text: "Where the emperors prayed for good harvests, built by the Yongle Emperor. Now it's a huge park, busiest in the early morning with tai chi, dancing and people singing."
      },
      {
        name: "Lama Temple & Guozijian",
        zh: "雍和宫",
        photo: "Beijing, Lama Temple (6169821757).jpg",
        source: "https://en.wikipedia.org/wiki/Yonghe_Temple",
        text: "It was a prince's mansion and became a Tibetan Buddhist monastery in 1744. The Imperial Academy and Confucius Temple are on the leafy street next to it."
      },
      {
        name: "Mutianyu Great Wall",
        zh: "慕田峪",
        photo: "",
        source: "https://en.wikipedia.org/wiki/Mutianyu",
        text: "About 70 km northeast of the city. A Ming section that was rebuilt in 1569, with 22 watchtowers and walls on both sides."
      }
    ]
  },
  // ---------- Neighborhoods card ----------
  neighborhoods: {
    title: "",
    summary: "Beijing is split into districts (区). Old Beijing inside the 2nd Ring Road is only two of them, Dongcheng (east) and Xicheng (west), and we're staying right in the middle. Each one shows which days we're there.",
    mapUrl: "https://i.redd.it/biu62xh6asng1.jpeg",
    mapFile: "beijing-rings.jpg",
    mapCaption: "Beijing's ring roads, from the 2nd Ring around the old city (where we stay) out to the 5th.",
    layout: {
      title: "How Beijing is laid out",
      paragraphs: [
        "Beijing is kind of like a target, with ring roads around the Forbidden City in the middle. They go from the 2nd Ring (there's no official 1st) out to the 6th, and they're more square than round. Locals say where things are by ring, so \"inside the 2nd Ring\" means the old city and \"near the East 3rd Ring\" means the business district.",
        "The 2nd Ring follows where the old Ming city wall used to be, it got torn down in the 1960s. Metro Line 2 goes in a loop right under it and the stations are named after the old gates, like Dongzhimen, Xizhimen, Qianmen, Jianguomen. \"-men\" (门) means gate.",
        "Through the middle there's the central axis (中轴线), a straight line north to south from Yongdingmen Gate through Qianmen, Tiananmen, the Forbidden City and Jingshan Park up to the Drum and Bell Towers. It's a UNESCO World Heritage Site. Chang'an Avenue crosses it at Tiananmen going east to west, with Metro Line 1 under it.",
        "The old streets are in a grid, so people give directions with north, south, east and west (往北走 = go north) instead of left and right. Keep the compass on in Amap."
      ],
      rings: [
        {
          name: "Inside the 2nd Ring",
          what: "The old city. Forbidden City, Tiananmen, hutongs, Houhai, Temple of Heaven, Lama Temple. Where we're staying.",
          metro: "Line 2 loop"
        },
        {
          name: "2nd to 3rd Ring",
          what: "Embassies, Sanlitun, Ritan Park. The business district towers are on the East 3rd Ring."
        },
        {
          name: "3rd to 4th Ring",
          what: "Newer apartments and offices. The Olympic Park (Bird's Nest) is on the North 4th Ring.",
          metro: "Line 10 loop, roughly"
        },
        { name: "4th to 5th Ring", what: "Universities, the Summer Palace, 798." },
        {
          name: "Past the 5th and 6th",
          what: "Suburbs and the airports. The Great Wall is way past that in the mountains."
        }
      ],
      map: {
        rings: [
          { name: "2nd", n: 39.949, s: 39.866, w: 116.354, e: 116.434 },
          { name: "3rd", n: 39.968, s: 39.853, w: 116.317, e: 116.462 },
          { name: "4th", n: 39.987, s: 39.834, w: 116.281, e: 116.488 },
          { name: "5th", n: 40.024, s: 39.785, w: 116.207, e: 116.552 }
        ],
        axis: { n: 39.941, s: 39.864, lng: 116.3975 },
        avenue: { lat: 39.9075, w: 116.33, e: 116.47 },
        palace: { n: 39.9225, s: 39.9135, w: 116.3915, e: 116.4035 }
      }
    },
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
        days: ["d1", "d2", "d3", "d4", "d5"],
        vibe: "The east half of the old city and where we're staying. The Forbidden City, Tiananmen and the National Museum are walking distance, and Wangfujing shopping street is right outside the hotel. Further north there's the hutongs around Nanluoguxiang, the Drum and Bell Towers and the Lama Temple, and south there's Qianmen and the Temple of Heaven. The big sights are busy but the alleys are quiet.",
        places: [
          {
            name: "Wangfujing St",
            zh: "王府井大街",
            note: "Walking street right outside the hotel.",
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
            note: "The palace. Go in from the south, come out the north.",
            plan: "Tue 24",
            amap: "故宫博物院"
          },
          {
            name: "Nanluoguxiang & Drum and Bell Towers",
            zh: "南锣鼓巷 / 钟鼓楼",
            note: "Hutongs, courtyard cafes and the old towers that used to tell the time.",
            plan: "Idea",
            amap: "钟鼓楼"
          },
          {
            name: "Lama Temple & Guozijian",
            zh: "雍和宫 / 国子监",
            note: "Busy Tibetan Buddhist temple, then the quiet old academy next door.",
            plan: "Mon 23",
            amap: "雍和宫"
          },
          {
            name: "Temple of Heaven",
            zh: "天坛",
            note: "Where emperors prayed for good harvests. Locals exercise in the park every morning.",
            plan: "Mon 23",
            amap: "天坛公园"
          },
          {
            name: "Qianmen St",
            zh: "前门大街",
            note: "Rebuilt old shopping street south of the square.",
            plan: "Sun 22",
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
        days: ["d3", "d4"],
        vibe: "The west half of the old city, built around some lakes. Houhai and Qianhai have willow trees, hutongs, bars and rickshaws. Beihai Park has the White Dagoba. Jingshan Park has the best view of the Forbidden City roofs. Chill and pretty especially at sunset, the bars by the lake get touristy at night though.",
        places: [
          {
            name: "Jingshan Park",
            zh: "景山公园",
            note: "Little hill with the famous view of the Forbidden City.",
            plan: "Tue 24",
            amap: "景山公园"
          },
          {
            name: "Beihai Park",
            zh: "北海公园",
            note: "Imperial lake park with the White Dagoba.",
            plan: "Idea",
            amap: "北海公园"
          },
          {
            name: "Houhai & Yinding Bridge",
            zh: "后海 / 银锭桥",
            note: "Walk by the lake through the hutongs, busy at night.",
            plan: "Idea",
            amap: "银锭桥"
          },
          {
            name: "Prince Gong's Mansion",
            zh: "恭王府",
            note: "Big old Qing mansion and garden. Book ahead.",
            plan: "Idea",
            amap: "恭王府"
          },
          {
            name: "Dashilar",
            zh: "大栅栏",
            note: "Old lanes with shops that are 100+ years old, west of Qianmen.",
            plan: "Sun 22",
            amap: "大栅栏"
          },
          {
            name: "Niujie & Fayuan Temple",
            zh: "牛街 / 法源寺",
            note: "Old Muslim area. Food crawl, mosque and a really old temple.",
            plan: "Mon 23",
            amap: "牛街礼拜寺"
          },
          {
            name: "Liulichang",
            zh: "琉璃厂",
            note: "Old street with brushes, ink, paper and paintings.",
            plan: "Sun 22",
            amap: "琉璃厂文化街"
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
        maybe: ["d5"],
        vibe: "Modern Beijing, east of the old city. The business district skyscrapers and the CCTV tower, the embassy area, Sanlitun's shops, restaurants and bars, and 798 in old factories further out. Newer and more international, good for shopping and coffee when we need a break from palaces.",
        places: [
          {
            name: "Sanlitun Taikoo Li",
            zh: "三里屯太古里",
            note: "Outdoor shopping area with big brand stores, cafes and bars.",
            plan: "Idea",
            amap: "三里屯太古里"
          },
          {
            name: "798 Art District",
            zh: "798艺术区",
            note: "Galleries and cafes in old 1950s factories.",
            plan: "Optional, Tue 24",
            amap: "798艺术区"
          },
          {
            name: "CBD & CCTV Headquarters",
            zh: "国贸 / 中央电视台总部大楼",
            note: "Skyscrapers and the famous loop shaped tower.",
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
        vibe: "The university and tech area in the northwest. Big imperial gardens (the Summer Palace on its lake, the Old Summer Palace ruins), Peking and Tsinghua universities, and Wudaokou where all the students hang out. It's far from the hotel so it's a half day or full day thing.",
        places: [
          {
            name: "Summer Palace",
            zh: "颐和园",
            note: "Imperial lake garden with the Long Corridor and Longevity Hill.",
            plan: "Optional, Mon 23",
            amap: "颐和园"
          },
          {
            name: "Old Summer Palace",
            zh: "圆明园",
            note: "Ruins of the European style palaces that got destroyed in 1860.",
            plan: "Idea",
            amap: "圆明园遗址公园"
          },
          {
            name: "Wudaokou",
            zh: "五道口",
            note: "Student area with cheap food and cafes.",
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
        vibe: "Mountains and countryside about 70 km north of the city. We're only here for the Great Wall at Mutianyu. Restored watchtowers along a ridge with trees, cable car up and a toboggan down. Cold and windy in late November so dress warm.",
        places: [
          {
            name: "Mutianyu Great Wall",
            zh: "慕田峪长城",
            note: "Restored part with a cable car and toboggan.",
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
        days: ["d5", "d6"],
        vibe: "Flying home. Beijing has two big airports, Capital in the northeast and the new Daxing way down south. Leave lots of time for either one.",
        places: [
          {
            name: "Beijing Capital Airport",
            zh: "北京首都国际机场",
            plan: "Tue night / Wed morning, if PEK",
            amap: "北京首都国际机场"
          },
          {
            name: "Beijing Daxing Airport",
            zh: "北京大兴国际机场",
            plan: "Tue night / Wed morning, if PKX",
            amap: "北京大兴国际机场"
          }
        ]
      }
    ]
  },
  // ---------- Our list card ----------
  ourList: [
    {
      section: "Must-try foods",
      items: [
        {
          name: "Jianbing",
          zh: "煎饼",
          note: "Classic breakfast, crepe with egg and a crispy cracker. Plan: Sat and Tue breakfast."
        },
        { name: "Shou juan", note: "Thin wrap rolled up with meat and veggies." },
        {
          name: "Peking duck",
          zh: "北京烤鸭",
          note: "Plan: Fri dinner at Siji Minfu, and a takeaway duck on Tue."
        },
        { name: "Braised pork", zh: "红烧肉" },
        { name: "Shao rou jia bing", note: "Roast meat in a flatbread." },
        {
          name: "Chao liang fen",
          zh: "炒凉粉",
          note: "Chunks of wobbly sticky mung bean jelly in a spicy sesame sauce with a little vinegar."
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
          note: "Beijing's most famous noodles, chunky meat sauce and crunchy veggies (~¥22). It's where Korean jjajangmyeon came from. Plan: Sun lunch."
        },
        {
          name: "Beijing yogurt",
          zh: "老北京酸奶",
          note: "Nice restaurants sometimes make their own, it's also a drinking yogurt brand. Plan: Sun snack."
        },
        { name: "Snow pear tea", zh: "雪梨茶" },
        {
          name: "Liang mian (crepe roll)",
          zh: "凉面",
          note: "Not actually cold noodles here, it's a thick chewy crepe rolled around spices and filling, lots of cumin and chili."
        },
        { name: "Tang er duo", zh: "糖耳朵", note: "\"Sugar ear\", a traditional Beijing sweet (~¥3)." },
        { name: "Malatang", zh: "麻辣烫", note: "Not on the plan yet." },
        { name: "Beef offal soup", zh: "牛杂汤", note: "Warm rich soup with beef offal (~¥35)." },
        {
          name: "Fried dough stick",
          zh: "油条",
          note: "Fried dough stick, goes with soy milk or douzhi (~¥3). Plan: Sun breakfast."
        },
        {
          name: "Douzhi",
          zh: "豆汁儿",
          note: "Old Beijing fermented mung bean drink. Sour and earthy, definitely an acquired taste, but very old Beijing (~¥10). Plan: Sun breakfast."
        },
        {
          name: "Braised beef noodles",
          zh: "红烧牛肉面",
          note: "Tender beef, rich soup, chewy noodles (~¥18). Plan: Sun dinner."
        },
        {
          name: "Donkey burger",
          zh: "驴肉火烧",
          note: "Crispy flatbread with donkey meat inside, very common street food here (~¥15). Plan: Sun."
        }
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
          note: "The famous late night food street.",
          address: "Dongzhimen Inner St 东直门内大街",
          amap: "簋街"
        }
      ]
    },
    {
      section: "Places to see",
      items: [
        { name: "Tian'anmen Square", zh: "天安门广场", note: "Plan: Sun 22.", amap: "天安门广场" },
        {
          name: "Jingshan Park",
          zh: "景山公园",
          note: "The view over the whole Forbidden City. Plan: Tue.",
          amap: "景山公园"
        },
        {
          name: "Xianyukou Street",
          zh: "鲜鱼口",
          note: "Old food street near Qianmen. Plan: Sun lunch.",
          amap: "鲜鱼口美食街"
        },
        {
          name: "Qianmen East hutongs",
          zh: "前门东区",
          note: "Quieter streets where people actually live. In Sun's Explore nearby.",
          amap: "前门东区胡同"
        },
        { name: "Lama Temple (Yonghe Gong)", zh: "雍和宫", amap: "雍和宫", note: "Plan: Mon afternoon." },
        {
          name: "Longtan Park",
          zh: "龙潭公园",
          amap: "龙潭公园",
          note: "Lake park by the Temple of Heaven. In Mon's Explore nearby."
        },
        { name: "Shichahai lakes", zh: "什刹海", amap: "什刹海" },
        {
          name: "Red Brick Art Museum",
          zh: "红砖美术馆",
          note: "Really pretty! Closed Mondays. In Tue's Explore nearby.",
          address: "Hegezhuang Village, Shunbai Rd, Cuigezhuang, Chaoyang 朝阳区崔各庄何各庄村顺白路",
          amap: "红砖美术馆"
        },
        { name: "Hutongs", zh: "胡同", amap: "南锣鼓巷" },
        {
          name: "Summer Palace",
          zh: "颐和园",
          amap: "颐和园",
          note: "Half day trip, about 50 min on the metro (Line 4 to Beigongmen 北宫门). Optional on Mon 23."
        },
        {
          name: "Nanchizi Museum",
          note: "Closed Mondays.",
          address: "21 West Alley, Pudu Temple, Dongcheng 普度寺西巷21号",
          amap: "普度寺西巷21号"
        },
        { name: "Song Art Museum", note: "Closed Mondays.", amap: "Song Art Museum" },
        { name: "Forest Library", amap: "Forest Library Beijing" },
        {
          name: "798 Art Zone",
          zh: "798艺术区",
          amap: "798艺术区",
          note: "Galleries, design shops, vintage and cafes in old factories. Optional on Tue."
        },
        { name: "Cycling tour?", note: "Idea from our notes." },
        {
          name: "Wudaoying Hutong",
          zh: "五道营胡同",
          note: "600 year old hutong with shops and cafes. Plan: Mon afternoon.",
          amap: "五道营胡同"
        },
        { name: "Temple of Heaven", zh: "天坛", note: "Plan: Mon morning.", amap: "天坛公园" }
      ]
    },
    {
      section: "Food spots",
      items: [
        { name: "Punk Rock Noodle", amap: "Punk Rock Noodle" },
        {
          name: "Zeng Sheng Kui",
          zh: "增盛魁",
          note: "Breakfast place since 1928. Sugar pancake, salty silken tofu, and a meat pie shaped like a door nail. Gets really busy. Plan: Sun breakfast option.",
          amap: "增盛魁"
        },
        {
          name: "Hu Da",
          zh: "胡大",
          note: "Known for crawfish, on Ghost Street. Plan: Mon dinner.",
          amap: "胡大饭馆 簋街"
        },
        {
          name: "86 Guozijian Street",
          note: "Remap Cafe and a ramen shop share this address. Plan: Mon afternoon.",
          address: "86 Guozijian St 国子监街86号",
          amap: "国子监街86号"
        },
        { name: "Xihuashi Battercake", note: "Breakfast egg pancake.", amap: "西花市 煎饼" },
        {
          name: "Yin San Douzhi",
          zh: "尹三豆汁",
          note: "Breakfast, douzhi with fried dough rings. Open 5:30 to noon. Plan: Sun breakfast option.",
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
          note: "Lamb skewers and street food, known for copper pot lamb hot pot.",
          address: "Qianmen Street 前门大街",
          amap: "东来顺 前门"
        },
        {
          name: "Niujie street food",
          zh: "牛街",
          note: "Beijing's old Muslim area. Plan: Mon lunch crawl.",
          amap: "牛街"
        },
        {
          name: "Shi Ji Xian Bing",
          zh: "牛街石记馅饼",
          note: "Meat pies on the Niujie food crawl. Plan: Mon lunch.",
          address: "50 m NE of Lingyunju's east gate, Xicheng; Niujie station Exit C",
          amap: "牛街石记馅饼",
          dianping: "馅饼"
        },
        {
          name: "Ma Ji Shao Bing",
          zh: "马记烧饼",
          note: "Sesame flatbreads on the Niujie food crawl. Plan: Mon lunch.",
          address: "Bldg 2, Zone 2, Niujie Dongli 牛街东里二区2号楼14号",
          amap: "马记烧饼 牛街",
          dianping: "烧饼"
        },
        {
          name: "Bai Ji Nian Gao",
          zh: "白记年糕",
          note: "Sticky rice cakes and hawthorn cake. The shop right next to Ma Ji is good too. Plan: Mon lunch.",
          amap: "白记年糕 牛街",
          dianping: "年糕"
        },
        {
          name: "Xiang Yun Xuan",
          zh: "祥云轩",
          note: "Snack stop by Fayuan Temple, on the Niujie food crawl. Plan: Mon lunch.",
          address: "Bldg 5, Fayuansi Xili, Jiaozi Hutong 教子胡同法源寺西里5号楼",
          amap: "祥云轩 法源寺西里",
          dianping: "牛街小吃"
        },
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
          note: "You sit in little nooks inside 100 year old brick kilns.",
          address: "Dongsi hutong strip, Dongcheng 东四",
          amap: "Brickyard Courtyard Cafe"
        },
        {
          name: "Wudaoying Slow Coffee",
          note: "One of the quietest hutong streets, with an old temple behind it.",
          address: "Wudaoying Hutong, near Lama Temple 五道营胡同",
          amap: "五道营胡同 咖啡"
        },
        {
          name: "Drum Tower Tea House Cafe",
          note: "Old carved Qing building. Oolong americano?",
          address: "Gulou East St, near the Drum Tower 鼓楼东大街",
          amap: "鼓楼 茶馆 咖啡"
        },
        { name: "Junwangfu Hotel afternoon tea", zh: "君王府", note: "Book on Dianping.", amap: "君王府" },
        {
          name: "Swim Cafe",
          address: "37 Guozijian St 国子监街37号",
          amap: "国子监街37号",
          note: "37 Guozijian St. Plan: Mon afternoon."
        },
        {
          name: "Remap Cafe (Red Maple)",
          address: "86 Guozijian St, Andingmen 国子监街86号",
          amap: "国子监街86号",
          zh: "红枫",
          note: "86 Guozijian St. Plan: Mon afternoon."
        },
        { name: "CHILL Pill", note: "Donuts.", amap: "CHILL Pill" },
        { name: "Chunfen", amap: "Chunfen coffee" },
        {
          name: "Townhouse",
          note: "Scandi style cafe on Guozijian St.",
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
        { name: "StillWater", note: "Minimal cafe in the old neighborhood.", amap: "StillWater coffee" },
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
        { name: "Jingshui Coffee", address: "69 Gulou East Ave, Dongcheng 鼓楼东大街69号", amap: "鼓楼东大街69号" },
        {
          name: "Five Flowers Small Living Room",
          note: "Tiny living-room cafe. Plan: Mon afternoon.",
          address: "Room 4, Compound 116, Andingmen Inner St 安定门内大街116号",
          amap: "安定门内大街116号"
        }
      ]
    },
    {
      section: "Shopping",
      items: [
        {
          name: "Guanxia",
          zh: "观夏",
          note: "Chinese perfume brand in a courtyard shop. Plan: Mon afternoon.",
          address: "42 Guozijian St 国子监街42号",
          amap: "观夏 国子监"
        },
        {
          name: "Peaceful East Bureau",
          zh: "和平菓局",
          note: "Retro 80s to 00s Beijing, kind of a museum and a pop-up with little shops. Plan: Fri evening.",
          address: "Wangfujing",
          amap: "和平菓局 王府井"
        },
        {
          name: "Neiliansheng",
          zh: "内联升",
          note: "Handmade cloth shoes since 1853. Plan: Sun afternoon.",
          address: "34 Dazhalan, Qianmen, Xicheng 大栅栏34号",
          amap: "内联升 大栅栏"
        },
        {
          name: "Yangmeizhu Xiejie",
          zh: "杨梅竹斜街",
          note: "Little lane with design shops, one has really nice postcards, prints and keepsakes. Plan: Sun afternoon.",
          amap: "杨梅竹斜街"
        },
        {
          name: "Liulichang Cultural Street",
          zh: "琉璃厂文化街",
          note: "Chinese art stuff, brushes, ink, paper, seals and paintings. Plan: Sun afternoon.",
          amap: "琉璃厂文化街"
        },
        {
          name: "Shengxifu",
          zh: "盛锡福",
          note: "Old Beijing hat maker. Plan: Tue afternoon.",
          address: "256 Wangfujing St, Dongcheng 王府井大街256号",
          amap: "盛锡福 王府井"
        },
        {
          name: "Dulton (798)",
          note: "Japanese homeware and design shop in 798. Optional on Tue.",
          amap: "Dulton 798"
        },
        {
          name: "Panjiayuan Market",
          zh: "潘家园旧货市场",
          note: "Antique and flea market, best on weekend mornings. Only if we have time.",
          address: "Chaoyang",
          amap: "潘家园旧货市场"
        },
        {
          name: "Beijing Antique City",
          zh: "北京古玩城",
          note: "Antique mall next to Panjiayuan.",
          address: "21 East 3rd Ring South Rd, Chaoyang",
          amap: "北京古玩城"
        },
        {
          name: "Tianya Antique City",
          zh: "天雅古玩城",
          note: "Antique mall next to Panjiayuan.",
          address: "6 Huawei South Rd, Chaoyang",
          amap: "天雅古玩城"
        },
        {
          name: "Underground City ghost market",
          zh: "地下城鬼市",
          note: "Saturday nights. Plan: optional Sat night.",
          address: "62 West Damochang St, Dongcheng 西打磨厂街62号",
          amap: "地下城鬼市 西打磨厂街"
        },
        {
          name: "DongPeng ghost market",
          zh: "东鹏鬼市",
          note: "Saturday nights.",
          address: "Corner of Taozhuang Rd & Huagong Rd, Chaoyang",
          amap: "东鹏鬼市"
        },
        {
          name: "DaLiuShu ghost market",
          zh: "大柳树鬼市",
          note: "Tuesday nights, but that's when D's flight is.",
          address: "Xiaowuji Rd, Chaoyang",
          amap: "大柳树鬼市"
        },
        {
          name: "Meihua sportswear",
          zh: "梅花",
          note: "Retro Chinese tracksuit brand. Search \"MEIHUA旗舰店\" on Taobao."
        },
        {
          name: "Peony radios",
          zh: "牡丹",
          note: "Old Chinese radios. Search \"牡丹牌收音机\" on Taobao or check Panjiayuan."
        },
        {
          name: "Flying Pigeon bikes",
          zh: "飞鸽",
          note: "The classic Chinese bike. Try secondhand markets, or Fenghuang Bike near Beijing Language and Culture University in Haidian. (Probably not fitting in the suitcase lol)"
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
      title: "Arrive, palace walls at dusk, Peking duck",
      summary: "Hello Beijing! Train up from Shanghai and check in on Wangfujing. If we get in by late afternoon, walk to the Forbidden City moat to see the corner towers at sunset, check out the retro Peaceful East Bureau, then our first Peking duck at Siji Minfu.",
      stops: [
        {
          time: "Afternoon",
          type: "misc",
          label: "Arrive",
          title: "Train into Beijing",
          detail: "Train time TBD. Most trains from Shanghai get into Beijing South 北京南站. Line 4 north to Xidan 西单, then Line 1 east to Wangfujing 王府井, about 40 min. Amap will show the route."
        },
        {
          time: "After",
          type: "misc",
          label: "Hotel",
          title: "Check in at the hotel",
          amap: "王府井地铁站",
          metro: "Wangfujing 王府井 station (Lines 1, 8) is right there."
        },
        {
          time: "16:30",
          type: "see",
          label: "See",
          title: "Forbidden City corner tower at sunset",
          detail: "Sunset is around 4:50 PM. Walk west to the moat and up to the northeast corner tower, the walls look so pretty when the lights come on. About 20 min walk.",
          amap: "故宫角楼"
        },
        {
          time: "17:30",
          type: "shop",
          label: "Explore",
          title: "Peaceful East Bureau 和平菓局 (retro Beijing)",
          detail: "Kind of a museum of 80s to 00s Beijing and kind of a huge pop-up. Old shopfronts, snacks, little shops and workshops with retro stuff. It's inside so good once it's dark and cold.",
          amap: "和平菓局 王府井"
        },
        {
          time: "Dinner",
          type: "food",
          label: "Dinner",
          title: "Peking duck 烤鸭",
          detail: "First duck! Go early or get a queue number, the dinner line gets long.",
          order: [
            { en: "Peking duck (half is plenty for two)", zh: "烤鸭（半只）" },
            { en: "Mustard cabbage (cold, sinus-clearing)", zh: "芥末墩" },
            { en: "Stir-fried seasonal greens", zh: "清炒时蔬" },
            { en: "Zhajiangmian to share", zh: "炸酱面" }
          ],
          options: [
            {
              name: "Siji Minfu 四季民福 (Forbidden City branch)",
              why: "By the palace's east gate, you can see the wall. Super popular, get a number around 4:30 or 5.",
              amap: "四季民福 故宫店"
            },
            {
              name: "Siji Minfu 四季民福 (Dengshikou)",
              why: "Closer to the hotel, same menu.",
              amap: "四季民福 灯市口店"
            }
          ],
          dianping: "烤鸭"
        }
      ],
      explore: {
        Evening: [
          {
            name: "Wangfujing Cathedral",
            zh: "王府井天主堂",
            kind: "Church",
            about: "St. Joseph's Church on Wangfujing, rebuilt in 1904. It's lit up at night.",
            amap: "王府井天主堂"
          },
          {
            name: "Shengxifu",
            zh: "盛锡福",
            kind: "Old shop",
            about: "Hat shop since 1911, at 256 Wangfujing St. Fur hats and old school caps.",
            amap: "盛锡福 王府井"
          },
          {
            name: "Wangfujing Snack Street",
            zh: "王府井小吃街",
            kind: "Food street",
            about: "Touristy alley with snack stalls off Wangfujing. Fun to walk through even if we don't eat.",
            amap: "王府井小吃街"
          },
          {
            name: "Foreign Languages Bookstore",
            zh: "外文书店",
            kind: "Books",
            about: "Big bookstore on Wangfujing, has English books and maps.",
            amap: "王府井外文书店"
          }
        ]
      },
      food: {
        items: [
          {
            name: "Peking duck 烤鸭",
            text: "Beijing's most famous dish. They dry the duck, glaze it and roast it until the skin is thin and crispy, then cut it at the table.\nWrap it in the thin pancakes with scallion, cucumber and sweet bean sauce. You can dip the crispy skin in a little sugar, that's how people used to eat it.",
            source: "https://en.wikipedia.org/wiki/Peking_duck"
          }
        ]
      },
      places: [
        {
          name: "Peaceful East Bureau",
          text: "A huge indoor retro place on Wangfujing made to look like Beijing streets from the 80s to the 2000s. Old shop signs, bikes, TVs, snacks and little stalls, plus workshops and stuff to buy.\nIt's kind of a museum of normal life back then. The Chinese name 和平菓局 is a play on an old \"fruit and grocery bureau\"."
        },
        {
          name: "Siji Minfu 四季民福",
          text: "One of the most popular duck places in Beijing, locals love it too. The duck is roasted over fruitwood and cut at the table.\nThe Forbidden City one is right by the east gate so some tables look out at the palace wall."
        }
      ],
      sights: [],
      otherOptions: [],
      foodIdeas: [
        {
          meal: "Dinner",
          area: "Near the hotel",
          dish: "Copper-pot lamb hotpot 涮羊肉",
          short: "thin lamb swished in plain broth, sesame dip",
          name: "Dong Lai Shun 东来顺",
          what: "Old Beijing hotpot. Super thin lamb you swish in plain broth in a copper pot, then dip in sesame sauce.",
          why: "Old Beijing name since 1903, there's one on Wangfujing.",
          amap: "东来顺 王府井"
        },
        {
          meal: "Snack",
          area: "Near the hotel",
          dish: "Beijing pastries 糕点",
          short: "flaky jujube, bean and nut cakes",
          name: "Daoxiangcun 稻香村",
          what: "Old Beijing cakes and cookies, flaky pastries with jujube, bean or nut inside. Good snacks and easy gifts.",
          why: "The classic Beijing pastry brand, there's shops on Wangfujing.",
          amap: "稻香村 王府井"
        }
      ],
      highlights: ["Corner tower at dusk", "Peaceful East Bureau", "Peking duck"]
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
      title: "The Great Wall at Mutianyu",
      summary: "Great Wall day, yay! (If the weather's good, if not swap with Monday.) Hot breakfast, Mubus to Mutianyu, walk the wall and take the toboggan down, lunch in the village. Back in the city, warm up with lamb hotpot. If we still have energy, there's a Saturday night ghost market near Qianmen.",
      highlights: ["Great Wall", "Toboggan", "Lamb hotpot"],
      stops: [
        {
          time: "7:00",
          type: "food",
          label: "Breakfast",
          title: "Jianbing 煎饼 or baozi 包子",
          detail: "Something hot near the hotel before the bus. Beijing jianbing is a thin egg crepe with sauce and a crispy cracker (薄脆) inside.",
          options: [
            {
              name: "Qing-Feng Baozi 庆丰包子铺",
              why: "Simple Beijing chain, steamed pork buns and millet porridge.",
              amap: "庆丰包子铺 王府井"
            }
          ],
          dianping: "煎饼"
        },
        {
          time: "Morning",
          type: "misc",
          label: "Transit",
          title: "Mubus to Mutianyu",
          detail: "Bus and Great Wall ticket in one. Pickup spot and time are on the Trip.com voucher.",
          bookingUrl: "https://www.trip.com/things-to-do/detail/89362507?language=EN&locale=en_xx&districtId=1&districtType=1"
        },
        {
          time: "10:30",
          type: "see",
          label: "See",
          title: "Mutianyu Great Wall",
          detail: "Bring the passport we booked with.",
          address: "Mutianyu, Huairou District 慕田峪长城",
          amap: "慕田峪长城"
        },
        {
          time: "Lunch",
          type: "food",
          label: "Lunch",
          title: "Farmhouse lunch in Mutianyu village 农家菜",
          detail: "Simple home style food, noodles and dumplings at the bottom of the wall.",
          dianping: "农家菜"
        },
        {
          time: "14:30",
          type: "misc",
          label: "Transit",
          title: "Mubus back to the city",
          detail: "Check the return time on the voucher. Usually back around 4 or 5."
        },
        {
          time: "Dinner",
          type: "food",
          label: "Dinner",
          title: "Copper-pot lamb hotpot 涮羊肉",
          detail: "Exactly what we'll want after being cold on the wall all day.",
          order: [
            { en: "Hand-cut lamb", zh: "手切羊肉" },
            { en: "Sesame dipping sauce", zh: "麻酱小料" },
            { en: "Napa cabbage", zh: "白菜" },
            { en: "Frozen tofu", zh: "冻豆腐" },
            { en: "Glass noodles", zh: "粉丝" },
            { en: "Sesame flatbread", zh: "烧饼" }
          ],
          options: [
            {
              name: "Dong Lai Shun 东来顺 (Wangfujing)",
              why: "Old Beijing name since 1903, near the hotel.",
              amap: "东来顺 王府井"
            },
            {
              name: "Ju Bao Yuan 聚宝源 (Niujie)",
              why: "Famous halal hotpot in the old Muslim area. Long lines so go early.",
              amap: "聚宝源 牛街"
            }
          ],
          dianping: "涮羊肉"
        },
        {
          time: "21:00",
          type: "shop",
          label: "Optional",
          title: "Underground City ghost market 地下城鬼市",
          detail: "Saturday night flea market, antiques and random old stuff. These go late, check the time on Dianping or Xiaohongshu before going.",
          address: "62 West Damochang St, Dongcheng 西打磨厂街62号",
          amap: "地下城鬼市 西打磨厂街",
          metro: "Line 2 to Qianmen 前门, then about 10 min on foot."
        }
      ],
      explore: {
        Morning: [
          {
            name: "The toboggan",
            zh: "慕田峪滑道",
            kind: "Ride",
            about: "Slide down from the wall on a metal track. Super fun. There's a cable car too.",
            amap: "慕田峪长城滑道"
          },
          {
            name: "Quieter stretches",
            zh: "慕田峪长城",
            kind: "Walk",
            about: "Walk away from where the cable car and toboggan are, it's emptier and the pics are better.",
            amap: "慕田峪长城"
          }
        ],
        Midday: [
          {
            name: "Mutianyu village",
            zh: "慕田峪村",
            kind: "Village",
            about: "Small village at the bottom with snack stalls and farmhouse restaurants.",
            amap: "慕田峪村"
          }
        ],
        Evening: [
          {
            name: "Qianmen at night",
            zh: "前门大街",
            kind: "Street",
            about: "The rebuilt old shopping street, it's lit up at night and close to the ghost market.",
            amap: "前门大街"
          }
        ]
      },
      food: {
        items: [
          {
            name: "Copper-pot hotpot 涮羊肉",
            text: "Old Beijing hotpot, it comes from Muslim and Mongolian cooking up north. There's a copper pot with plain broth in the middle and you swish super thin lamb in it for a few seconds, then dip it in sesame sauce.\nIt's not spicy like Sichuan hotpot, it's all about the lamb and the sauce. Get a sesame flatbread at the end.",
            source: "https://en.wikipedia.org/wiki/Hot_pot"
          },
          {
            name: "Jianbing 煎饼",
            text: "Thin crepe made with mung bean and wheat batter, they crack an egg on it, brush on sauces, and fold it around a crispy fried cracker with scallion and coriander.\nIt's the classic breakfast up north, street stalls make it in like two minutes.",
            source: "https://en.wikipedia.org/wiki/Jianbing"
          }
        ]
      },
      places: [],
      sights: [
        {
          name: "Mutianyu Great Wall",
          text: "A 2.25 km restored part about 70 km northeast of the city, with 22 watchtowers.\nThe first wall here was built in the mid 500s and the Ming rebuilt it in 1569. Cool thing is both sides have walls so archers could shoot either way. It opened to tourists in 1988.",
          source: "https://en.wikipedia.org/wiki/Mutianyu"
        }
      ],
      otherOptions: [
        {
          group: "Saturday night",
          name: "DongPeng ghost market 东鹏鬼市",
          why: "Another Saturday night flea market, at the corner of Taozhuang Rd and Huagong Rd in Chaoyang. Further than the Qianmen one.",
          amap: "东鹏鬼市"
        }
      ],
      foodIdeas: []
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
      title: "Tiananmen, Qianmen lanes & Liulichang",
      summary: "Big sights day, hehe. Run the palace moat, a Beijing breakfast (maybe douzhi?!), then Tiananmen and the National Museum. Zhajiangmian for lunch near Qianmen, then a slow afternoon through Dashilar, the little design shops on Yangmeizhu Xiejie and the art street of Liulichang. Old-style yogurt for a snack, comfort noodles for dinner.",
      highlights: ["National Museum", "Dashilar", "Liulichang", "Zhajiangmian"],
      stops: [
        {
          time: "6:30",
          type: "run",
          label: "Run",
          title: "Forbidden City moat loop",
          detail: "About 3.5 km around the moat, the corner towers at sunrise. Then breakfast and shower.",
          amap: "故宫筒子河"
        },
        {
          time: "Then",
          type: "food",
          label: "Breakfast",
          title: "Youtiao 油条 + soy milk 豆浆, or try douzhi 豆汁",
          detail: "Classic Beijing breakfast. Douzhi is a sour, fermented mung bean drink locals love but it's acquired taste haha we should try. Get one small cup to share. This has a recorded history of over 300 years.",
          options: [
            {
              name: "Yin San Douzhi 尹三豆汁",
              why: "Douzhi with crispy fried dough rings (焦圈). Open 5:30 AM to noon.",
              amap: "尹三豆汁"
            },
            {
              name: "Zeng Sheng Kui 增盛魁",
              why: "Breakfast since 1928. Sugar pancakes, salty silken tofu and \"doornail\" meat pies. Gets busy.",
              amap: "增盛魁"
            }
          ],
          dianping: "豆汁"
        },
        {
          time: "Morning",
          type: "see",
          label: "See",
          title: "Tiananmen Square (reserved Nov 15)",
          detail: "Bring the passport we booked with, there's a security check.",
          amap: "天安门广场"
        },
        {
          time: "Morning",
          type: "see",
          label: "Museum",
          title: "National Museum of China (booked Nov 15)",
          detail: "On the east side of Tiananmen Square. Closed Mondays.",
          address: "16 East Chang'an Ave 东长安街16号",
          amap: "中国国家博物馆"
        },
        {
          time: "Lunch",
          type: "food",
          label: "Lunch",
          title: "Zhajiangmian 炸酱面",
          detail: "THE Beijing noodle. Thick noodles, salty soybean and pork sauce, crunchy veggies. Mix it all up.",
          order: [
            { en: "Zhajiangmian", zh: "炸酱面" },
            { en: "Donkey burger (try one!)", zh: "驴肉火烧" },
            { en: "Smashed cucumber", zh: "拍黄瓜" }
          ],
          options: [
            {
              name: "Xianyukou Street 鲜鱼口",
              why: "Old food street just east of Qianmen St, lots of Beijing snack and noodle shops.",
              amap: "鲜鱼口美食街"
            }
          ],
          dianping: "炸酱面"
        },
        {
          time: "14:00",
          type: "shop",
          label: "Shop",
          title: "Dashilar & Yangmeizhu Xiejie",
          detail: "Walk the old shopping lanes west of Qianmen St. Neiliansheng 内联升 for handmade cloth shoes (since 1853, 34 Dazhalan), then the quiet little lane Yangmeizhu Xiejie for design shops, postcards and prints. Look at the old doors and shopfronts too.",
          amap: "大栅栏"
        },
        {
          time: "15:30",
          type: "shop",
          label: "Shop",
          title: "Liulichang Cultural Street 琉璃厂",
          detail: "Old street with calligraphy brushes, ink, paper, stamps and paintings. Good for souvenirs that aren't the usual stuff.",
          amap: "琉璃厂文化街",
          metro: "About 10 min on foot west of Dashilar."
        },
        {
          time: "16:30",
          type: "food",
          label: "Snack",
          title: "Old-style yogurt 老北京酸奶",
          detail: "Thick sour yogurt in a little jar, you drink it with a straw at the shop and give the jar back.",
          dianping: "老北京酸奶"
        },
        {
          time: "Dinner",
          type: "food",
          label: "Dinner",
          title: "Braised beef noodles 红烧牛肉面 + donkey burger 驴肉火烧",
          detail: "Easy comfort food after a long day. A donkey burger is shredded donkey meat in a crispy flatbread, tastes kind of like pot roast.",
          order: [
            { en: "Braised beef noodles", zh: "红烧牛肉面" },
            { en: "Donkey burger", zh: "驴肉火烧" },
            { en: "Smashed cucumber", zh: "拍黄瓜" }
          ],
          dianping: "驴肉火烧"
        }
      ],
      explore: {
        Morning: [
          {
            name: "Zhongshan Park",
            zh: "中山公园",
            kind: "Park",
            about: "Old imperial park right next to Tiananmen Gate, with the square Altar of Land and Grain. Not many tourists.",
            amap: "中山公园 北京"
          },
          {
            name: "Imperial Ancestral Temple",
            zh: "太庙",
            kind: "Temple",
            about: "On the other side of Tiananmen Gate, the huge halls where emperors honored their ancestors. Usually quiet.",
            amap: "劳动人民文化宫"
          },
          {
            name: "Zhengyangmen (Qianmen) Gate",
            zh: "正阳门",
            kind: "History",
            about: "The huge Ming gate at the south end of the square.",
            amap: "正阳门"
          }
        ],
        Afternoon: [
          {
            name: "Legation Quarter",
            zh: "东交民巷",
            kind: "Old street",
            about: "The old embassy area from the early 1900s. European looking buildings on a quiet street with trees, just east of the square.",
            amap: "东交民巷"
          },
          {
            name: "Qianmen East hutongs",
            zh: "前门东区",
            kind: "Hutongs",
            about: "Quieter lanes east of Qianmen St where people actually live, with little cafes.",
            amap: "前门东区"
          },
          {
            name: "Neiliansheng",
            zh: "内联升",
            kind: "Old shop",
            about: "Handmade cloth shoes since 1853, at 34 Dazhalan. Good gift.",
            amap: "内联升 大栅栏"
          }
        ],
        Evening: [
          {
            name: "Flag-lowering at sunset",
            zh: "天安门广场降旗",
            kind: "Ceremony",
            about: "Soldiers take the flag down at sunset, around 5 PM in late November. Get there a little early.",
            amap: "天安门广场"
          },
          {
            name: "Wangfujing at night",
            zh: "王府井步行街",
            kind: "Street",
            about: "Walk back to the hotel on the shopping street when it's all lit up.",
            amap: "王府井步行街"
          }
        ]
      },
      food: {
        items: [
          {
            name: "Zhajiangmian 炸酱面",
            text: "Means \"fried sauce noodles\". Thick wheat noodles with a dark salty sauce made of fermented soybean paste and pork, and a pile of fresh shredded veggies.\nThe veggies come on the side, dump them all in and mix a lot. Beijing's is saltier and less sweet than Korean jajangmyeon, which came from this.",
            source: "https://en.wikipedia.org/wiki/Zhajiangmian"
          },
          {
            name: "Douzhi 豆汁",
            text: "A grey-green, sour drink made from what's left after making mung bean starch, fermented and heated. Old Beijingers have it for breakfast with crispy fried dough rings and pickles."
          },
          {
            name: "Old-style yogurt 老北京酸奶",
            text: "Thick sour yogurt in little ceramic or glass jars with paper on top, you drink it with a straw. It's been a Beijing street snack forever.\nThere's a deposit on the jar so drink it there and give it back."
          }
        ]
      },
      places: [
        {
          name: "Dashilar 大栅栏",
          text: "One of Beijing's oldest shopping streets, going west from Qianmen since the Ming dynasty. A lot of the shops are really old brands, like Neiliansheng shoes (1853), Ruifuxiang silk and Tongrentang medicine.\nThe lanes around it like Yangmeizhu Xiejie got fixed up, now there's small design shops, cafes and guesthouses mixed in with people's homes.",
          source: "https://en.wikipedia.org/wiki/Dashilar"
        },
        {
          name: "Liulichang",
          text: "Named after the glazed tile kilns that used to be here in the Ming dynasty. In the Qing it was where scholars went for books, brushes, ink, paper and antiques.\nNow it's all shops with calligraphy stuff, paintings and stamps. Take your time and bargain if something's expensive.",
          source: "https://en.wikipedia.org/wiki/Liulichang"
        }
      ],
      sights: [
        {
          name: "Tiananmen Square",
          text: "One of the biggest city squares in the world, between Tiananmen gate (the \"Gate of Heavenly Peace\" with Mao's picture) and Qianmen. The National Museum, Great Hall of the People and Mao's Mausoleum are all around it.",
          source: "https://en.wikipedia.org/wiki/Tiananmen_Square"
        },
        {
          name: "National Museum of China",
          text: "Built in 1959 as one of the \"Ten Great Buildings\", and reopened in 2011 after a 4 year renovation. One of the biggest museums in the world, over a million things.\nDon't miss the Houmuwu Ding, an 833 kg bronze pot from the Shang dynasty, and the Han dynasty jade burial suits sewn with gold thread.",
          source: "https://en.wikipedia.org/wiki/National_Museum_of_China"
        }
      ],
      otherOptions: [
        {
          group: "Shopping",
          name: "Panjiayuan Market 潘家园",
          why: "Beijing's huge antique and flea market. Weekend mornings are the busiest, so Sunday morning would be perfect if we can go before Tiananmen. Beijing Antique City and Tianya Antique City are right next to it.",
          amap: "潘家园旧货市场"
        }
      ],
      foodIdeas: [
        {
          meal: "Breakfast",
          area: "Old Beijing breakfast",
          dish: "Douzhi 豆汁",
          short: "sour fermented mung bean drink",
          name: "Yin San Douzhi 尹三豆汁",
          what: "Sour fermented mung bean drink with crispy fried dough rings (焦圈) and pickles.",
          why: "Open 5:30 AM to noon.",
          amap: "尹三豆汁"
        },
        {
          meal: "Dinner",
          area: "Qianmen",
          dish: "Peking duck 烤鸭",
          short: "crispy roast duck in thin pancakes",
          name: "Quanjude 全聚德 (Qianmen)",
          what: "Crispy roast duck cut at the table, you wrap it in thin pancakes with scallion, cucumber and sweet bean sauce.",
          why: "The original Peking duck place, since 1864. The Qianmen one is the oldest.",
          amap: "全聚德 前门店"
        },
        {
          meal: "Dinner",
          area: "Near the hotel",
          dish: "Peking duck 烤鸭",
          short: "crispy roast duck in thin pancakes",
          name: "Siji Minfu 四季民福",
          what: "Crispy roast duck cut at the table, you wrap it in thin pancakes with scallion, cucumber and sweet bean sauce.",
          why: "If we want duck round two.",
          amap: "四季民福 故宫店"
        }
      ]
    },
    // ---------- Day 4: Monday 23 November, Niujie & the hutongs ----------
    {
      key: "d4",
      date: "2026-11-23",
      when: "Monday 23 November",
      tabTop: "23",
      tabSub: "Mon",
      color: "#A6217F",
      ink: "#8A1B69",
      zh: "牛街",
      area: "Niujie & the hutongs",
      title: "Temple of Heaven, Niujie food crawl, Lama Temple",
      summary: "Snack crawl day, yum. This is our free day (and the Great Wall backup if Saturday's weather is bad). Morning with the locals at the Temple of Heaven, then a snack crawl down Niujie, the old Muslim street, plus the mosque and Fayuan Temple. Afternoon at the Lama Temple and the cafes and shops on Guozijian St and Wudaoying Hutong, then spicy crayfish on Gui Jie. Most museums are closed Mondays so we're outside most of the day.",
      stops: [
        {
          time: "7:00",
          type: "food",
          label: "Breakfast",
          title: "Baozi 包子 + millet porridge 小米粥",
          detail: "Something quick and warm before the temple.",
          options: [
            {
              name: "Qing-Feng Baozi 庆丰包子铺",
              why: "Simple Beijing chain, they're everywhere.",
              amap: "庆丰包子铺"
            }
          ],
          dianping: "包子"
        },
        {
          time: "7:45",
          type: "see",
          label: "See",
          title: "Temple of Heaven, with the locals",
          detail: "Go early, the park is full of people doing tai chi, dancing, singing and playing cards. The round building with the blue roof is the Hall of Prayer for Good Harvests. Check if the halls are open on Mondays, the park is.",
          amap: "天坛公园东门",
          metro: "Line 5 from Dengshikou 灯市口 to Tiantandongmen 天坛东门, 3 stops."
        },
        {
          time: "11:00",
          type: "food",
          label: "Lunch",
          title: "Niujie food crawl 牛街",
          detail: "Beijing's old Muslim area. Share a few bites at each place instead of one big meal. It's all halal so no pork.",
          order: [
            { en: "Crispy meat pie (Shi Ji)", zh: "馅饼" },
            { en: "Sesame flatbread (Ma Ji)", zh: "烧饼" },
            { en: "Hawthorn cake (Bai Ji)", zh: "山楂糕" },
            { en: "Sticky rice cake (Bai Ji)", zh: "年糕" }
          ],
          options: [
            {
              name: "Shi Ji Xian Bing 牛街石记馅饼",
              why: "Pan-fried meat pies. About 50 m northeast of Lingyunju's east gate, 470 m walk from Niujie station Exit C.",
              address: "凌云居东门东北50米",
              amap: "牛街石记馅饼"
            },
            {
              name: "Ma Ji Shao Bing 马记烧饼",
              why: "Sesame flatbreads fresh out of the oven.",
              address: "Bldg 2, Zone 2, Niujie Dongli 牛街东里二区2号楼14号",
              amap: "马记烧饼 牛街"
            },
            {
              name: "Bai Ji Nian Gao 白记年糕",
              why: "Sticky rice cakes and hawthorn cake. The main shop is around the corner from Ma Ji, but the hawthorn cake place right next to Ma Ji is good too.",
              amap: "白记年糕 牛街"
            },
            {
              name: "Xiang Yun Xuan 祥云轩 (Fayuansi Xili)",
              why: "One more snack stop on the crawl, by Fayuan Temple.",
              address: "Bldg 5, Fayuansi Xili, Jiaozi Hutong 教子胡同法源寺西里5号楼",
              amap: "祥云轩 法源寺西里"
            }
          ],
          metro: "Line 19 to Niujie 牛街; Amap will route it from the Temple of Heaven (about 30 min).",
          dianping: "牛街小吃"
        },
        {
          time: "12:30",
          type: "see",
          label: "See",
          title: "Niujie Mosque & Fayuan Temple",
          detail: "Beijing's oldest mosque, it looks like a Chinese temple (dress modest, no shorts). Then Fayuan Temple a few minutes away, one of the oldest Buddhist temples in Beijing, quiet with lots of old trees.",
          amap: "牛街礼拜寺"
        },
        {
          time: "14:30",
          type: "see",
          label: "See",
          title: "Lama Temple 雍和宫",
          detail: "Busy Tibetan Buddhist temple with an 18 m Buddha carved out of one sandalwood tree. Last entry is mid afternoon in winter so don't be late.",
          amap: "雍和宫",
          metro: "Line 2 or 5 to Yonghegong 雍和宫."
        },
        {
          time: "15:30",
          type: "shop",
          label: "Shop + cafes",
          title: "Guozijian St 国子监街",
          detail: "Old shady street right next to the temple with small shops and cafes. The Confucius Temple here is usually closed Mondays but the shops are open. Our picks are in Explore nearby.",
          amap: "国子监街"
        },
        {
          time: "16:30",
          type: "see",
          label: "Wander",
          title: "Wudaoying Hutong 五道营胡同",
          detail: "600 year old hutong with small shops, cafes and rooftop bars, right across Andingmen Inner St from Guozijian St.",
          amap: "五道营胡同"
        },
        {
          time: "Dinner",
          type: "food",
          label: "Dinner",
          title: "Spicy crayfish 麻辣小龙虾 on Gui Jie",
          detail: "Gui Jie (Ghost Street) is a long street of restaurants open late with red lanterns everywhere, one stop from the Lama Temple. Gloves on!",
          order: [
            { en: "Spicy crayfish", zh: "麻辣小龙虾" },
            { en: "Garlic crayfish (milder)", zh: "蒜蓉小龙虾" },
            { en: "Smashed cucumber", zh: "拍黄瓜" },
            { en: "Egg fried rice", zh: "蛋炒饭" }
          ],
          options: [
            {
              name: "Hu Da 胡大饭馆 (Gui Jie)",
              why: "The most famous place on the street. Get a number by 5:30 or we'll be waiting a while.",
              amap: "胡大饭馆 簋街"
            }
          ],
          metro: "Line 5 one stop to Beixinqiao 北新桥.",
          dianping: "小龙虾"
        }
      ],
      explore: {
        Morning: [
          {
            name: "Longtan Park",
            zh: "龙潭公园",
            kind: "Park",
            about: "Lake park right east of the Temple of Heaven, locals fishing and exercising. It's on our list.",
            amap: "龙潭公园"
          },
          {
            name: "Hongqiao Pearl Market",
            zh: "红桥市场",
            kind: "Market",
            about: "Market with a bunch of floors across from the Temple of Heaven east gate. Pearls, jade, souvenirs. Haggle.",
            amap: "红桥市场"
          }
        ],
        Midday: [
          {
            name: "Niujie St",
            zh: "牛街",
            kind: "Street",
            about: "Walk the main street, halal bakeries, butchers and snack shops. The sesame and date pastries are good snacks for later.",
            amap: "牛街"
          }
        ],
        Afternoon: [
          {
            name: "Guanxia",
            zh: "观夏",
            kind: "Fragrance shop",
            about: "Chinese perfume brand, the scents are based on Chinese plants and poems, in a really pretty courtyard shop. 42 Guozijian St.",
            amap: "观夏 国子监"
          },
          {
            name: "Swim Cafe",
            zh: "",
            kind: "Cafe",
            about: "Small cafe at 37 Guozijian St.",
            amap: "国子监街37号"
          },
          {
            name: "Remap Cafe (Red Maple)",
            zh: "红枫",
            kind: "Cafe",
            about: "Cafe at 86 Guozijian St. There's a ramen place at the same address if we're hungry.",
            amap: "国子监街86号"
          },
          {
            name: "Five Flowers Small Living Room",
            zh: "",
            kind: "Cafe",
            about: "Tiny cafe that feels like someone's living room, Room 4, Compound 116, Andingmen Inner St. Short walk from Guozijian St.",
            amap: "安定门内大街116号"
          },
          {
            name: "Townhouse",
            zh: "",
            kind: "Cafe",
            about: "Scandi style cafe on Guozijian St, from our list.",
            amap: "国子监街 Townhouse"
          }
        ],
        Evening: [
          {
            name: "Gui Jie at night",
            zh: "簋街",
            kind: "Food street",
            about: "Red lanterns, crowds and chili smell everywhere. Fun to walk even after dinner.",
            amap: "簋街"
          }
        ]
      },
      food: {
        items: [
          {
            name: "Niujie snacks 牛街小吃",
            text: "Niujie is known for halal Beijing snacks. Crispy meat pies (馅饼), sesame flatbreads (烧饼), sweet rice cakes (年糕) and hawthorn cake (山楂糕), which is a sweet and sour jelly made from hawthorn fruit.\nThe shops are small and cheap so just share one thing at each."
          }
        ]
      },
      places: [],
      sights: [
        {
          name: "Temple of Heaven",
          text: "Built in 1420, same time as the Forbidden City. It's where the Ming and Qing emperors prayed for good harvests. The round hall has three blue tile roofs and no nails at all.\nThe big park around it is where locals come every morning for tai chi, dancing, singing and cards. That's half the reason to go early.",
          source: "https://en.wikipedia.org/wiki/Temple_of_Heaven"
        },
        {
          name: "Niujie Mosque",
          text: "Beijing's oldest and biggest mosque, from 996. From outside it looks like a Chinese temple, carved wood, painted beams and a six sided tower for watching the moon.\nNiujie has been Beijing's Muslim area for hundreds of years, that's why all the food here is halal.",
          source: "https://en.wikipedia.org/wiki/Niujie_Mosque"
        },
        {
          name: "Fayuan Temple",
          text: "One of the oldest Buddhist temples in Beijing, first built in 645. The Buddhist Academy of China is here now so it's quiet, monks, old trees and lilacs.",
          source: "https://en.wikipedia.org/wiki/Fayuan_Temple"
        },
        {
          name: "Lama Temple",
          text: "Built in 1694 as a prince's palace and became a Tibetan Buddhist monastery in 1744. The last hall has an 18 m tall Buddha carved from one piece of white sandalwood.\nIt's a real working temple and always busy, incense smoke everywhere. Incense comes free with the ticket.",
          source: "https://en.wikipedia.org/wiki/Yonghe_Temple"
        },
        {
          name: "Wudaoying Hutong",
          text: "A hutong that's been here about 600 years, it used to be part of the Ming guard barracks. Now it's homes mixed with small cafes, design shops and rooftop bars.\nOne of the nicest hutongs to just walk around."
        }
      ],
      otherOptions: [
        {
          group: "If the weather is bad on Saturday",
          name: "Great Wall swap",
          why: "Do the Mubus trip today instead and move this day's plan to Saturday."
        },
        {
          group: "Hutongs",
          name: "Nanluoguxiang & Drum and Bell Towers 南锣鼓巷 / 钟鼓楼",
          why: "If we have time after Wudaoying. The lantern street and the old drum and bell towers, 10 min west.",
          amap: "钟鼓楼"
        },
        {
          group: "Half-day trip",
          name: "Summer Palace 颐和园",
          why: "The emperors' huge lake garden, the Long Corridor, Longevity Hill and Kunming Lake. Takes about half a day so it would replace the Temple of Heaven and Niujie morning. Open on Mondays.",
          address: "Haidian, northwest Beijing",
          amap: "颐和园北宫门"
        }
      ],
      foodIdeas: [
        {
          meal: "Lunch",
          area: "Niujie",
          dish: "Copper-pot lamb hotpot 涮羊肉",
          short: "thin lamb swished in plain broth, sesame dip",
          name: "Ju Bao Yuan 聚宝源",
          what: "Old Beijing hotpot. Super thin lamb in plain broth, dip it in sesame sauce.",
          why: "Famous halal hotpot on Niujie. Long lines.",
          amap: "聚宝源 牛街"
        },
        {
          meal: "Lunch",
          area: "Near Nanluoguxiang",
          dish: "Zhajiangmian 炸酱面",
          short: "noodles with salty soybean-pork sauce",
          name: "Fangzhuanchang No. 69 Zhajiangmian 方砖厂69号炸酱面",
          what: "Thick noodles with a salty soybean and pork sauce, mixed with crunchy veggies.",
          why: "Famous little noodle shop, short walk from the Drum Tower.",
          amap: "方砖厂69号炸酱面"
        },
        {
          meal: "Snack",
          area: "Guozijian St",
          dish: "Coffee",
          short: "specialty coffee",
          name: "Metal Hands 金属手",
          what: "Coffee from one of Beijing's best known roasters, small cafes in the hutongs.",
          why: "There's a few, check Amap for the closest one.",
          amap: "Metal Hands 金属手咖啡"
        }
      ],
      highlights: ["Temple of Heaven", "Niujie food crawl", "Lama Temple", "Guozijian St"]
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
      title: "Last day: Forbidden City, souvenirs, quiet night in",
      summary: "Last day, wahh. D's flight is around midnight. Up early so D can pack, then the Forbidden City first thing and the view from Jingshan. Old Beijing snacks for lunch, souvenirs on Wangfujing in the afternoon, then get dinner to go and be back at the hotel by 5 to relax and eat in. D leaves for the airport around 8:30 PM.",
      highlights: ["Forbidden City", "Jingshan view", "Souvenirs", "Night in"],
      stops: [
        {
          time: "6:30",
          type: "misc",
          label: "Hotel",
          title: "Up early: D packs",
          detail: "Get D's bags packed in the morning so the night is chill. We don't need to check out today, the room is until Wednesday morning."
        },
        {
          time: "7:15",
          type: "food",
          label: "Breakfast",
          title: "Jianbing 煎饼 or baozi 包子",
          detail: "Eat well, the palace is a lot of walking.",
          options: [
            {
              name: "Qing-Feng Baozi 庆丰包子铺",
              why: "Simple Beijing chain, steamed pork buns.",
              amap: "庆丰包子铺 王府井"
            }
          ],
          dianping: "煎饼"
        },
        {
          time: "8:30",
          type: "see",
          label: "See",
          title: "Forbidden City (booked Nov 17)",
          detail: "Go in at the Meridian Gate (south), it takes about 3 hours. Come out the north gate, Jingshan Park is right across.",
          address: "Meridian Gate 午门 (Tiananmen East metro, Exit B)",
          amap: "故宫博物院 午门"
        },
        {
          time: "11:45",
          type: "see",
          label: "See",
          title: "Jingshan Park view",
          detail: "Right across from the north exit. Climb up to the top for the famous view over all the gold roofs.",
          amap: "景山公园"
        },
        {
          time: "Lunch",
          type: "food",
          label: "Lunch",
          title: "Old Beijing snacks 北京小吃",
          detail: "Get a bunch of little things to share, then head back toward the hotel.",
          order: [
            { en: "Donkey rolls (sweet sticky rice in soybean flour; no donkey!)", zh: "驴打滚" },
            { en: "Ai wo wo (sticky rice balls with sweet filling)", zh: "艾窝窝" },
            { en: "Sesame flatbread", zh: "烧饼" },
            { en: "Fried dough rings + soy milk", zh: "焦圈 + 豆浆" }
          ],
          options: [
            {
              name: "Huguosi Snacks 护国寺小吃",
              why: "Old school snack shop on Huguosi St, about 20 min west of Jingshan.",
              amap: "护国寺小吃 护国寺街"
            }
          ],
          dianping: "北京小吃"
        },
        {
          time: "14:00",
          type: "shop",
          label: "Shop",
          title: "Souvenirs on Wangfujing",
          detail: "Shengxifu 盛锡福 for an old school hat (256 Wangfujing St), Daoxiangcun 稻香村 pastries to bring home, and the Foreign Languages Bookstore. All close to the hotel.",
          amap: "盛锡福 王府井"
        },
        {
          time: "16:30",
          type: "food",
          label: "Dinner",
          title: "Pick up dinner to go: Peking duck 烤鸭",
          detail: "Get a duck to go and eat at the hotel. Siji Minfu does takeout, ask for 打包 (dǎbāo, to go). Or just order delivery to the hotel on Meituan 美团 later.",
          options: [
            {
              name: "Siji Minfu 四季民福 (Dengshikou)",
              why: "Closest one to the hotel. The takeout duck comes with pancakes, scallion and sauce.",
              amap: "四季民福 灯市口店"
            }
          ],
          dianping: "烤鸭"
        },
        {
          time: "17:00",
          type: "misc",
          label: "Hotel",
          title: "Back at the hotel: relax and eat in",
          detail: "Relax, duck in the room, double check everything for D's flight."
        },
        {
          time: "20:30",
          type: "misc",
          label: "Transit",
          title: "D heads to the airport",
          detail: "D's flight is around midnight so be at the airport by 9 (3 hours before for international). Check which airport is on the ticket. Capital (PEK): metro to Dongzhimen 东直门 then the Capital Airport Express. Daxing (PKX): metro to Caoqiao 草桥 then the Daxing Airport Express. The airport trains stop late at night so Didi is easiest.",
          amap: "北京首都国际机场"
        }
      ],
      explore: {
        Morning: [
          {
            name: "Beihai Park",
            zh: "北海公园",
            kind: "Park",
            about: "Imperial lake park with the White Dagoba, just west of Jingshan.",
            amap: "北海公园"
          },
          {
            name: "Corner towers by day",
            zh: "故宫角楼",
            kind: "Sight",
            about: "Walk part of the moat after Jingshan for corner tower pics in the daytime.",
            amap: "故宫角楼"
          }
        ],
        Afternoon: [
          {
            name: "Peaceful East Bureau",
            zh: "和平菓局",
            kind: "Retro Beijing",
            about: "If we didn't go Friday. The retro 80s to 00s Beijing place, right on Wangfujing.",
            amap: "和平菓局 王府井"
          },
          {
            name: "Wangfujing Cathedral",
            zh: "王府井天主堂",
            kind: "Church",
            about: "St. Joseph's Church on Wangfujing, rebuilt in 1904.",
            amap: "王府井天主堂"
          },
          {
            name: "Dong'an Market & Beijing APM",
            zh: "东安市场 / 北京apm",
            kind: "Mall",
            about: "The big malls on Wangfujing, for anything we forgot.",
            amap: "北京apm"
          }
        ]
      },
      food: {
        items: [
          {
            name: "Donkey rolls 驴打滚",
            text: "There's no donkey in it lol. It's sticky rice rolled around sweet red bean paste and covered in toasted soybean powder. The name is because it looks like a donkey that rolled around in the dirt."
          }
        ]
      },
      places: [],
      sights: [
        {
          name: "Forbidden City",
          text: "Built from 1406 to 1420 by about a million workers for the Yongle Emperor. It has 980 buildings and supposedly \"9,999.5\" rooms.\n24 Ming and Qing emperors lived here from 1420 to 1912, and Puyi, the last emperor, stayed in the inner part until 1924. It became a museum in 1925.",
          source: "https://en.wikipedia.org/wiki/Forbidden_City"
        },
        {
          name: "Jingshan Park",
          text: "A fake hill made from all the dirt they dug out for the Forbidden City's moat, it used to be the emperors' private garden. The pavilion on top is the highest point in old Beijing.\nIt's also where the last Ming emperor, Chongzhen, killed himself in 1644 when rebels came into the city.",
          source: "https://en.wikipedia.org/wiki/Jingshan_Park"
        },
        {
          name: "798 Art District",
          text: "A bunch of 1950s factories built with help from East Germany, in Bauhaus style. Artists moved into the empty buildings around 2000 and it turned into the most famous art area in Beijing.\nYou can still see old Mao-era slogans painted on some of the factory walls.",
          source: "https://en.wikipedia.org/wiki/798_Art_Zone"
        }
      ],
      otherOptions: [
        {
          group: "If there's time",
          name: "798 Art District 798艺术区",
          why: "Galleries, design shops (Dulton) and cafes in old factories. It's about 50 min each way so it doesn't really work if we want to be back by 5.",
          amap: "798艺术区"
        }
      ],
      foodIdeas: [
        {
          meal: "Lunch",
          area: "Near Nanluoguxiang",
          dish: "Zhajiangmian 炸酱面",
          short: "noodles with salty soybean-pork sauce",
          name: "Fangzhuanchang No. 69 Zhajiangmian 方砖厂69号炸酱面",
          what: "Thick noodles with a salty soybean and pork sauce, mixed with crunchy veggies.",
          why: "Famous little noodle shop, about 15 min north of Jingshan.",
          amap: "方砖厂69号炸酱面"
        },
        {
          meal: "Breakfast",
          area: "Near the hotel",
          dish: "Steamed buns 包子",
          short: "fluffy pork and scallion buns",
          name: "Qing-Feng Baozi 庆丰包子铺",
          what: "Soft steamed buns with pork and scallion, with millet porridge.",
          why: "Simple Beijing chain.",
          amap: "庆丰包子铺 王府井"
        }
      ]
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
      summary: "Bye bye Beijing! D's flight leaves around midnight. The other flight is at 10 AM, so check out and leave for the airport around 6.",
      stops: [
        {
          time: "0:00",
          type: "misc",
          label: "Flight",
          title: "D's flight, around midnight",
          detail: "D leaves for the airport Tuesday night (see Tue 24). Check the time and terminal on the ticket."
        },
        {
          time: "6:00",
          type: "misc",
          label: "Hotel",
          title: "Check out and head to the airport",
          detail: "For the 10 AM flight. The first airport trains start around 6, Didi is easier with bags this early. Check which airport and terminal.",
          amap: "北京首都国际机场"
        },
        {
          time: "10:00",
          type: "misc",
          label: "Flight",
          title: "Flight at 10 AM",
          detail: "Check the gate and terminal."
        }
      ],
      explore: {  },
      food: {
        items: []
      },
      places: [],
      sights: [],
      otherOptions: [],
      foodIdeas: []
    }
  ]
};
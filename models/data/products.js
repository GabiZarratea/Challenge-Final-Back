import Products from '../Product.js'
import 'dotenv/config.js'
import '../../config/db.js'

let products = [
{
    title:'Smart TV 32" HD TCL L32S65A-F',
    brand:'TCL',
    type: 'TV',
    category: 'TV, AUDIO AND VIDEO',
    description:{
    Text:"With this Android TV you will have your favorite streaming platforms and services within reach, such as YouTube, Netflix and Prime Video, as well as the Google Play Store where you will find the most popular apps and games.",
    screen: {
    Inches:'31.5"',
    Resolution:"1366 x 768 pixels",
    ScreenFormat:"Flat",
    },
    GeneralFeatures:{
    SmartTV:"Yes",
    Processor:"CA53 * 4 64bit",
    },
    Connectivity:{
    InputsHDMI: 2, 
    InputsUSB: 1, 
    InternetConnection: 'Yes', 
    NFC: 'No',
    HeadphoneJack: 'Yes'
    },
    Sound:{
    AudioFormats: 'MP3 / WMA / AC3',
    NumberoOfSpeakers: 2,
    Power: '2 x 5W'
    },
    Dimensions:{
    High: "42.5 cm",
    Width: "72.4 cm",
    Depth: "8.8 cm",
    HighBased: "47.5 cm",
    WidthWithBase: "72.4 cm",
    DepthWithBase: "18 cm",
    VESAmeasure: "100 x 100",
    Weight: "3.9 kg"
    },
    Model: "L32S65A-F",
    Origin: "Argentina",
    },
    cover_photo:[
    "https://images.fravega.com/f500/51cb68c8c88b71c282054347ebe429e2.jpg",
    "https://images.fravega.com/f300/d9a8a135637c0acd4db50fdff7a844b7.jpg.webp",
    "https://images.fravega.com/f300/abd2a4884d3f64e4ca09bdafe75be5fa.jpg.webp"
    ],
    price: 83999,
    verified: true ,
    verify_code:'',
    available: 15,
},
{
    title:'Smart TV Philips 43" FHD Android TV 43PFD6917/77',
    brand:'Philips',
    type: 'TV',
    category: 'TV, AUDIO AND VIDEO',
    description:{
    Text:"You will have at your fingertips the most popular streaming platforms and services, such as Netflix, YouTube, Disney+, Amazon Prime Video and more, so you can enjoy FHD resolution to the fullest.",
    screen:{
    Inches:'43"',
    Resolution:"920 x 1080 pixels",
    ScreenFormat:"Flat",
    },
    GeneralFeatures:{
    SmartTV:"Yes",
    },
    Connectivity:{
    InputsHDMI: 3, 
    InputsUSB: 2, 
    InternetConnection: 'Yes', 
    NFC: 'No',
    HeadphoneJack: 'Yes'
    },
    Sound:{
    NumberoOfSpeakers: 2,
    Power: '16W RMS'
    },
    Dimensions:{
    High: "568 mm",
    Width: "958 mm",
    Depth: "82 mm",
    HighBased: "587 mm",
    WidthWithBase: "958 mm",
    DepthWithBase: "227 mm",
    VESAmeasure: "100 x 200 mm",
    Weight: "7.2 kg"
    },
    Model: "43PFD6917/77",
    Origin: "Argentina"
    },
    cover_photo:[
    "https://images.fravega.com/f1000/b9c3d1121c73ded6266ec57f5b0bdd31.jpg",
    "https://images.fravega.com/f300/55ec578e88ea05ec5fcebfacc16df24d.jpg.webp",
    "https://images.fravega.com/f300/d3001894cfcacb9fde93548690e380fb.png.webp"
    ],
    price: 129999,
    verified: true ,
    verify_code:'',
    available: 3,
},
{
    title:'Smart TV 4K UHD Samsung 50" UN50AU7000',
    brand:'Samsung',
    type: 'TV',
    category: 'TV, AUDIO AND VIDEO',
    description:{
    Text:"The Samsung UN50AU7000 Smart TV has a resolution four times higher than a Full HD TV (3840 x 2160 pixels) and has a 4K Crystal Processor that guarantees optimized color expression so you can see every detail. Its LED panel also offers the High Dynamic Range (HDR) feature, which increases the bright expression of the TV so you can enjoy a huge spectrum of colors and visual details, even in the darkest scenes.",
    screen:{
    Inches:'50"',
    Resolution:"3840 x 2160 pixels",
    ScreenFormat:"Flat",
    },
    GeneralFeatures:{
    SmartTV:"Yes",
    },
    Connectivity:{
    InputsHDMI: 3, 
    InputsUSB: 1, 
    InternetConnection: 'Yes', 
    NFC: 'No',
    HeadphoneJack: 'No'
    },
    Sound:{
    NumberoOfSpeakers: 2,
    },
    Dimensions:{
    High: "64.4 cm",
    Width: "111.6 cm",
    Depth: "5.9 cm",
    HighBased: "71.9 cm",
    WidthWithBase: "111.6 cm",
    DepthWithBase: "25 cm",
    VESAmeasure: "200 x 200",
    Weight: "11.6 kg"
    },
    Model: "UN50AU7000",
    Origin: "Argentina"
    },
    cover_photo:[
    "https://images.fravega.com/f500/d7ca24bf5639a7db78c31aa9fa963be8.jpg",
    "https://images.fravega.com/f300/676b4dcf411b14af655c5c289ce72f33.jpg.webp",
    "https://images.fravega.com/f300/e819eb5a8b27a29e8684e12910627e50.jpg.webp"
    ],
    price: 184999,
    verified: true ,
    verify_code:'',
    available: 15,
},
{
    title:'Smart TV 65" 4K UHD Philips 65PUD7906/77',
    brand:'Philips',
    type: 'TV',
    category: 'TV, AUDIO AND VIDEO',
    description:{
    Text:"You can play on your TV the content (photos, music and videos) stored on external devices such as smartphones, tablets or flash drives by connecting them through their USB ports. Also, it has HDMI inputs so you can link audio and video players or game consoles.",
    screen:{
    Inches:'65"',
    Resolution:"3840 x 2160 pixels",
    ScreenFormat:"Flat",
    },
    GeneralFeatures:{
    SmartTV:"Yes",
    },
    Connectivity:{
    InputsHDMI: 4, 
    InputsUSB: 2, 
    InternetConnection: 'Yes', 
    NFC: 'No',
    HeadphoneJack: 'No'},
    Sound:{
    NumberoOfSpeakers: 2,
    },
    Dimensions:{
    High: "83.3 cm",
    Width: "145 cm",
    Depth: "8.5 cm",
    HighBased: "86 cm",
    WidthWithBase: "145 cm",
    DepthWithBase: "29.3 cm",
    Weight: "21,5 kg"
    },
    Model: "65PUD7906/77",
    Origin: "Argentina"
    },
    cover_photo:[
    "https://images.fravega.com/f300/29eff4cc658192d7484e0a59bc357a3e.jpg.webp",
    "https://images.fravega.com/f300/4714e59e43defdf07a14c86c25109ddd.jpg.webp",
    "https://images.fravega.com/f300/953259f05194123b82c2bb5c58df21a2.jpg.webp"
    ],
    price: 324999,
    verified: true ,
    verify_code:'',
    available: 15,
},
{
    title:'PORTATILE SPEAKERS JBL FLIP 6 GRAY',
    brand:'JBL',
    type: 'SPEAKERS',
    category: 'TV, AUDIO AND VIDEO',
    description:{
    Text:'Portaitl speaker. A higher and more powerful sound. Dust and water resistant according to IP67 protection. 12 Hours of battery. Daring Design PartyBoost raises the level of the party. Application JB L Portable. USB charging protection. Bluetooth wireless reproduction. New ecological packaging. Transducers: 45 x 80 mm bass speaker ( 1 75 x 3 ") 16 mm treble speaker ( 0 6" ). Output power: 20 W bass speaker 10 W RMS treble speaker. Frequency response: 63 Hz 20 kHz. Signal / noise ratio: > 80 dB. Battery type: Lithium ion polymer of 17 28 Wh ( equivalent to 3 6 V / 4800 mAh ). Battery charging time: 2 5 hours at 5 V / 3 A. Music playing time: up to 12 hours ( depending on the volume and content of the audio ). Cable type: USB-C charging cable. Cable length: 1 2 m / 47 2".Maximum operating temperature: 45 C. Wireless specifications. Bluetooth version: 5.1. Bluetooth profile: A2DP 1.3 AVRCP 1.6. Frequency range',
    EAN: 6925281993060,
    High: 6.8,
    Width: 17.8,
    Color: "GRAY",
    Guarantee: 6,
    Model: 'FLIP 6',
    Origin: 'CHINA',
    Weight: 0.55,
    Depth: 7.2,
    ESMA: 'N / A'
    },
    cover_photo: [
        "https://medias.musimundo.com/medias/00508020-178122-178122-01.png-178122-01.png-size515?context=bWFzdGVyfGltYWdlc3wyNTA2MTl8aW1hZ2UvcG5nfGg3Ni9oOWYvMTA0MDc0Njc3MTI1NDIvMDA1MDgwMjAtMTc4MTIyLTE3ODEyMl8wMS5wbmctMTc4MTIyXzAxLnBuZ19zaXplNTE1fGE4NDQ5NTFjN2Q5MjM2YjljNGQ3MTY5NWE5NTI4M2UzY2ZkZmRhNGJiZTQyMjAxOTJkNjQ2ZjQ2MjQxMzdiODg"
    ],
    price: 74799,
    verified: true ,
    verify_code:'',
    available: 2,
},
{
    title:'BLUETOOTH PHILIPS TAS1505 BLACK SPEAKERS',
    brand:'PHILIPS',
    type: 'SPEAKERS',
    category: 'TV, AUDIO AND VIDEO',
    description:{
    Text:'ROBUST AND RESISTANT TO WATER IPX7. THIS ALTAVOZ BLUETOOTH PORTÁTIL ACCOUNTS WITH IPX7 CLASSIFICATION WHAT MEANS THAT A TOTAL IMMERSION CAN BE RESISTED IN UNTIL WATER 1 METRO DEEPHUNDITY FOR UNTILE 30 MINUTES. YOU CAN FUN THE PILET OR EVEN IN THE FIGHT WITH THE PILET OR EVEN WITHIN IT. THE INALAMBRIC REACH IS 20 M. 8 HOURS OF REPRODUCTION TIME 2 5 HOURS OF LOADING TIME. THE SOUND IS MAIN INCLUSIVE WHEN MUSIC REPRODUCISES EVERY VOLUME AND A PASSIVE RADIATOR IMPULS THE SERIOUS. YOU GET 8 HOURS OF REPRODUCTION TIME AND A COMPLETE LETTER LAT 2 5 HOURS. THE BLUETOOTH CONNECTION IS STABLE AND THE EMPAREHOUSE IS SIMPLE..',
    EAN: 4895229111011,
    High: 7.8,
    Width: 6.4,
    Color: "BLACK",
    Guarantee: 12,
    Model: 'TAS1505',
    Origin: 'CHINA',
    Weight: 0.14,
    Depth: 6.4,
    ESMA: 'N / A'
    },
    cover_photo: [
        "https://medias.musimundo.com/medias/size515-178913-01.png?context=bWFzdGVyfGltYWdlc3w0MjQ4MTF8aW1hZ2UvcG5nfGgwMS9oZWYvMTA0ODIzNDQzMjkyNDYvc2l6ZTUxNV8xNzg5MTNfMDEucG5nfDk4MWZmZDM3Y2I4NWY0NzE2MTk5OTk0NDExNTAwMjgzYzJmOTMwYWRlMzFmNzViODU5MWNhYWNjMzk2ZmFiYjg"
],
    price: 11539,
    verified: true ,
    verify_code:'',
    available: 10,
},
{
    title:'BLUETOOTH DAEWOO YAND BLACK SPEAKERS',
    brand:'DAEWOO',
    type: 'SPEAKERS',
    category: 'TV, AUDIO AND VIDEO',
    description:{
    Text:'· 1400 W. PMPO. · 2 woofer of 6.5". · RGB lights. · BT / USB / SD / MIC / AUX CONNECTION. · FM Radio. · Rechargeable battery. · LED display',
    EAN: 731199781783,
    High: 'fifty',
    Width: 'twenty',
    Color: "BLACK",
    Guarantee: 12,
    Model: 'YAND',
    Origin: 'CHINA',
    Weight: 1.76,
    Depth: 'twenty',
    ESMA: 'N / A'
    },
    cover_photo: [
        "https://medias.musimundo.com/medias/size515-176753-01.jpg?context=bWFzdGVyfGltYWdlc3w0ODY5M3xpbWFnZS9qcGVnfGgwMi9oMmQvMTA0NzI2MjQ4ODE2OTQvc2l6ZTUxNV8xNzY3NTNfMDEuanBnfDU1ODVhYTkwMDMwODQ0NGEwODQyZTFkM2ZhNTJhOTBiOGI3Y2EzNzFkOTU4YTYyZGEzZmFjY2MwM2MxOTQyMGY"
    ],
    price: 31799,
    verified: true ,
    verify_code:'',
    available: 2,
},
{
    title:'PORTATILE SPEAKERS JBL FLIP 6 GRAY',
    brand:'JBL',
    type: 'SPEAKERS',
    category: 'TV, AUDIO AND VIDEO',
    description:{
    Text:'I lived the Audio 3D experience connecting them to another Twin through TWS and placing you in the center.',
    EAN: 7797026958110,
    High: 25,
    Width: 8.5,
    Color: "BLACK",
    Guarantee: 6,
    Model: 'TWIN',
    Origin: 'CHINA',
    Weight: 0.68,
    Depth: 8.5,
    ESMA: 'N / A'
    },
    cover_photo: [
        "https://medias.musimundo.com/medias/00399070-177108-177108-01.png-177108-01.png-size515?context=bWFzdGVyfGltYWdlc3wxNzE4MjF8aW1hZ2UvcG5nfGg4MS9oM2EvMTAzODE1NjExMzUxMzQvMDAzOTkwNzAtMTc3MTA4LTE3NzEwOF8wMS5wbmctMTc3MTA4XzAxLnBuZ19zaXplNTE1fDE3YzNiYmM2MmE2NTYxZWZmMjkwM2Y2ODNmMzc5MGI4Y2VlYTRjMTgyNWExM2Q5NzI2NmYzY2ExODg5ODVhMWU"
    ],
    price: 14999,
    verified: true ,
    verify_code:'',
    available: 2,
},
{
    title:'BLUETOOTH DAEWOO DW-CS3105-PNK PINK HEADPHONES',
    brand:'DAEWOO',
    type: 'HEADPHONES',
    category: 'TV, AUDIO AND VIDEO',
    description:{
    Text:"IN EAR AURICULAR WITH TECHNOLOGY TWS. MICROFON CONEXION INALAMBRICA. VOLUME CONTROL. VOLUME CONTROL. FREQUENCY RANGE 2.4HZ - 2.4 GHZ. AUTONOMY 3HS OF REPRODUCTION. 2 HS CHARGE TIME. BATTERY REMAIN BASE: LITE 300 MAH. NET MEASURES: 4X2X5 CM. BRUTE MEASURES: 9.9X9.9X3.3CM. WEIGHT NET 108G. WEIGHT 115G.",
    EAN: 7798366201423,
    Color: "PINK",
    Guarantee: 6,
    Model: 'DW-CS3105-PNK',
    Origin: 'CHINA',
    Type: 'IN EAR'
    },
    cover_photo:[
    "https://medias.musimundo.com/medias/00463001-177533-177533-01.png-177533-01.png-size515?context=bWFzdGVyfGltYWdlc3wxMjQwMDR8aW1hZ2UvcG5nfGgwNS9oMTIvMTAzODE0OTgwODk1MDIvMDA0NjMwMDEtMTc3NTMzLTE3NzUzM18wMS5wbmctMTc3NTMzXzAxLnBuZ19zaXplNTE1fDY1ODMzYWI2YWY2ODY5ZDM5OTRlOGIwNWYyZDI5ZGNjMWYxYzBjMTZjMDEzYjdiMjM2NzQ0ODA0YTE5YzRlMDU"
    ],
    price: 6999,
    verified: true ,
    verify_code:'',
    available: 2,
},
{
    title:'BLUETOOTH SOUL BT881 S600 BLACK HEADPHONES',
    brand:'SOUL',
    type: 'HEADPHONES',
    category: 'TV, AUDIO AND VIDEO',
    description:{
    Text:"AURICULAR BLUETOOTH STEREO WITH MICR VOLUME CONTROL?COURT AND READY FONUS OF MICROSD MEMORIES. CAPACITY: 50MW - IMPEDANCE: 32- SENSITIVITY: 108 DB / MW. FREQUENCY: 12-22000 HZ-CABLE LONGITUDE: 1.2M - CONECTOR: 3.5MM",
    EAN: 7798366201423,
    High: 21,
    Width: 18,
    Weight: 0.380,
    Depth: 10,
    Color: "BLACK",
    Guarantee: 6,
    Model: 'BT881 S600',
    Origin: 'CHINA',
    },
    cover_photo:[
    "https://medias.musimundo.com/medias/00210027-174973-174973-01.png-174973-01.png-size515?context=bWFzdGVyfGltYWdlc3w0MzA0NDN8aW1hZ2UvcG5nfGgwNi9oOGUvMTAzMDQ0NzAyNTM1OTgvMDAyMTAwMjctMTc0OTczLTE3NDk3M18wMS5wbmctMTc0OTczXzAxLnBuZ19zaXplNTE1fDhiMWU2YzIzYmZkYWVmNjMzNTZjMzM2ZGY5NzI1ZjJiNDk1MGFmZWNjODU0YTI1ODExMmVjODNhNmEyZThhZDY"
    ],
    price: 16999,
    verified: true ,
    verify_code:'',
    available: 12,
},
{
    title:'STROMBERG YARD BLACK HEADPHONES',
    brand:'STROMBERG',
    type: 'HEADPHONES',
    category: 'TV, AUDIO AND VIDEO',
    description:{
    Text:"AURICULAR WITH CABLE - UNID. CONTROL 40 MM - SOFT SOFT - DISE?OR PLEGABLE TO KEEP F?CILMENTY - AUX ENTRANCE. 3 5 MM - CABLE LONGITUDE 1 2 M.",
    EAN: 7797026910880,
    Color: "BLACK",
    Guarantee: 6,
    Model: 'YARD',
    Origin: 'CHINA',
    Type: 'VINCHA OVER EAR'
    },
    cover_photo:[
    "https://medias.musimundo.com/medias/00299076-175886-175886-01.png-175886-01.png-size515?context=bWFzdGVyfGltYWdlc3wzOTM4MjV8aW1hZ2UvcG5nfGg2Zi9oNzYvMTAzMjA4NzkwMjYyMDYvMDAyOTkwNzYtMTc1ODg2LTE3NTg4Nl8wMS5wbmctMTc1ODg2XzAxLnBuZ19zaXplNTE1fDljMzVlNzU0MGUzMmY5YjRlNmJmODM3MmZlNmM2YWE4MDU1NGRhMTc3ZWU4NzIxY2M5OGEzNzE3NjQzNDVlMWY"
    ],
    price: 5299,
    verified: true ,
    verify_code:'',
    available: 20,
},
{
    title:'PHILIPS TAH4105BK / 00 BLACK HEADPHONES',
    brand:'PHILIPS',
    type: 'HEADPHONES',
    category: 'TV, AUDIO AND VIDEO',
    description:{
    Text:"FEEL AS IF YOU FINISHED STOPPING THE DANCE TRACK. THESE SUPRAURAL AURICULARES GIVE YOU A CLEAR SOUND AND SERIOUS POTENTS. THE ACCOLCHED SUJECTOR BAND MAINTS THE COMFORT AND DISEIVES THEM?YOU IN COLOR KILL YOU ALLOW TO APPROPY THE M?SICA WITH A STYLE.",
    EAN: 4895229109681,
    High: '18.5',
    Width: '16.5',
    Weight: '0.153 KG',
    Depth: '4',
    Color: "BLACK",
    Guarantee: 6,
    Model: 'TAH4105BK / 00',
    Origin: 'CHINA',
    Type: 'VINCHA OVER EAR'
    },
    cover_photo:[
    "https://medias.musimundo.com/medias/00307102-176637-176637-01.png-176637-01.png-size515?context=bWFzdGVyfGltYWdlc3w2Nzc5NXxpbWFnZS9wbmd8aGM3L2g4ZS8xMDM3OTc0MTA2OTM0Mi8wMDMwNzEwMi0xNzY2MzctMTc2NjM3XzAxLnBuZy0xNzY2MzdfMDEucG5nX3NpemU1MTV8OTJmYTZkZGQ0OWVlYzYzMTZmN2RhZjAyZjU1MjU1ODE5OGMyODI0MWU4MTRlMTBhZTk5MWQ1ZjY1NzA4MDI5OQ"
    ],
    price: 12549,
    verified: true ,
    verify_code:'',
    available: 20,
},
{
    title:'Camcorder Video Handycam Sony 4K AX700 Exmor R Sensor',
    brand:'SONY',
    type: 'CAMERAS',
    category: 'TV, AUDIO AND VIDEO',
    description:{
    Text:"Capture life as you see it in 4K HDR (HLG)1 images just like in real life. The unrivaled performance of Fast Hybrid AF ensures that autofocus and AF tracking are exceptionally precise, responsive and reliable. You'll enjoy more great photo opportunities of unexpected action, and there are no limits to your filming ambitions with this Handycam®.",
    DigitalZoom: '192x16',
    Connections: 'Micro-USB, Mic jack, LANC jack 2.5mm, HDMI',
    Model: 'FDR-AX700',
    Origin: 'CHINA'
    },
    cover_photo:[
    "https://images.fravega.com/f300/73d869fd4090992e153c09a2d37bdde8.jpg.webp",
    "https://images.fravega.com/f300/7275ccca8883c8c063d85303aec0bd0c.jpg.webp",
    "https://images.fravega.com/f300/8e4a0c3a6bd760a5c6a7b342238e86af.jpg.webp"
    ],
    price: 829999,
    verified: true ,
    verify_code:'',
    available: 15,
},
{
    title:'Camera Digital Mirrorless Sony ILCE 7M3 7miii A7 iii 4K',
    brand:'SONY',
    type: 'CAMERAS',
    category: 'TV, AUDIO AND VIDEO',
    description:{
    Text:"The fully renovated sensor and processing system further enhance image quality. The overall performance of the improved automatic focus, continuous capture at high speed up to 10 fps1, 4K2 film recording capacity and significantly improved ease of use compared to a7 II allow more decisive moments to be captured.",
    DigitalZoom: '192x16',
    Connections: 'Micro-USB, Mic jack, LANC jack 2.5mm, HDMI',
    Model: 'FRR-6Y43',
    Origin: 'CHINA'
    },
    cover_photo:[
    "https://images.fravega.com/f300/096860d3ca6f6d86d4d0d97edb1a4b03.jpg.webp",
    "https://images.fravega.com/f300/f1f64f0b24259c8ed8da569b9b171a94.jpg.webp",
    "https://images.fravega.com/f300/b31cc4293f0b9c401e7fa3cd2f408277.jpg.webp"
    ],
    price: 799999,
    verified: true ,
    verify_code:'',
    available: 5,
},
{
    title:'Sony HDR-CX405 Video Camera',
    brand:'SONY',
    type: 'CAMERAS',
    category: 'TV, AUDIO AND VIDEO',
    description:{
    Text:"Capture life as you see it in 4K HDR (HLG)1 images just like in real life. The unrivaled performance of Fast Hybrid AF ensures that autofocus and AF tracking are exceptionally precise, responsive and reliable. You'll enjoy more great photo opportunities of unexpected action, and there are no limits to your filming ambitions with this Handycam®.",
    DigitalZoom: '350x',
    Connections: 'Micro-USB, Mic jack, LANC jack 2.5mm, HDMI',
    Model: 'HDR-CX405',
    Origin: 'CHINA'
    },
    cover_photo:[
    "https://images.fravega.com/f300/183a0a288ec9585ad6e3d33b19a18be8.jpg.webp",
    "https://images.fravega.com/f300/561b74d70a37b6f3394b39ef1085df44.jpg.webp",
    "https://images.fravega.com/f300/183a0a288ec9585ad6e3d33b19a18be8.jpg.webp"
    ],
    price: 269999,
    verified: true ,
    verify_code:'',
    available: 15,
},
{
    title:'GoPro HERO9 Black CHDHX901RWB Camera',
    brand:'GoPro',
    type: 'CAMERAS',
    category: 'TV, AUDIO AND VIDEO',
    description:{
    Text:"HERO9 Black delivers incredible 5K video and 20MP photos. Add HyperSmooth 3.0 stabilization and powerful features, plus a rugged, waterproof design, and you have more of everything you love. It features a stunning front screen for selfies and rear touchscreen for intuitive control.",
    Connections: 'Micro-USB, Mic jack, LANC jack 2.5mm, HDMI',
    Model: 'HERO9',
    Origin: 'CHINA'
    },
    cover_photo:[
    "https://images.fravega.com/f300/0a8d6d6022e5591e9824aaf000870910.jpg.webp",
    "https://images.fravega.com/f300/a61b9354106bf0727809a80b737989ed.jpg.webp",
    "https://images.fravega.com/f300/1b8055ba2e62c8cd58b4c95e5edafa94.jpg.webp"
    ],
    price: 264999,
    verified: true ,
    verify_code:'',
    available: 3,
},
{
    title:'HyperX QuadCast S Multi-pattern Condenser Microphone black',
    brand:'HyperX',
    type: 'MICROPHONE',
    category: 'TV, AUDIO AND VIDEO',
    description:{
    Text:"Being a condenser, it will enable a clear and fine result. It is ideal for percussion, guitars, pianos, among others. Due to its very defined response to the voice, it is the most chosen by professionals.",
    Model: "HMIQ1S-XX-RG/G",
    Color: "Black",
    Gamer: "Yes",
    CableLength: "3 m",
    BuiltInSpeakers: "Yes",
    Bluetooth: "No",
    Input: "USB",
    Output: "USB",
    LedLight: "Yes",
    Sensitivity: "-36 dB",
    CompatibleDevices: "PC, Mac, PlayStation, Headphones",
    Weight: "254 g"
    },
    cover_photo:[
    "https://http2.mlstatic.com/D_NQ_NP_739446-MLA44207269367_112020-O.webp",
    "https://http2.mlstatic.com/D_NQ_NP_954411-MLA51739377995_092022-O.webp",
    "https://http2.mlstatic.com/D_NQ_NP_913813-MLA51739471157_092022-O.webp"
    ],
    price: 109719,
    verified: true ,
    verify_code:'',
    available: 15,
},
{
    title:'Noga Mic-st02s Black Streaming Microphone W/ Filter And Tripod',
    brand:'Noga',
    type: 'MICROPHONE',
    category: 'TV, AUDIO AND VIDEO',
    description:{
    Text:"High-end microphone ideal for singing, recording and streaming. Omnidirectional, capable of picking up sounds from any direction. Excellent audio processing circuit that guarantees High Fidelity and low distortion. Extended frequency response that improves the resolution of complex acoustic details.",
    Model: "MIC-STO2S",
    Color: "Black",
    Gamer: "Yes",
    CableLength: "1.8 m",
    BuiltInSpeakers: "No",
    Bluetooth: "No",
    Input: "Conector miniplug 3.5mm",
    Output: "Conector miniplug 3.5mm",
    LedLight: "No",
    Sensitivity: "-36 dB",
    CompatibleDevices: "Windows 7 or higher",
    },
    cover_photo:[
    "https://http2.mlstatic.com/D_NQ_NP_622441-MLA52178101523_102022-O.webp",
    "https://http2.mlstatic.com/D_NQ_NP_982431-MLU70020195357_062023-O.webp",
    "https://http2.mlstatic.com/D_NQ_NP_764367-MLU70020195359_062023-O.webp"
    ],
    price: 6590,
    verified: true ,
    verify_code:'',
    available: 15,
},
{
    title:'Razer Seiren Emote Hypercardioid Condenser Microphone Black',
    brand:'Razer',
    type: 'MICROPHONE',
    category: 'TV, AUDIO AND VIDEO',
    description:{
    Text:"With the Razer microphone you will discover a new way of capturing and emitting audio. Ideal for various activities. It will give you quality sound and you will get the clarity of the voices.",
    Model: "Seiren Emote",
    Color: "Black",
    Gamer: "Yes",
    BuiltInSpeakers: "Yes",
    Bluetooth: "No",
    Input: "USB",
    Output: "USB",
    LedLight: "Yes",
    Sensitivity: "-20 dB",
    CompatibleDevices: "PC",
    },
    cover_photo:[
    "https://http2.mlstatic.com/D_NQ_NP_913446-MLA50865697007_072022-O.webp",
    "https://http2.mlstatic.com/D_NQ_NP_895807-MLU70065262575_062023-O.webp",
    "https://http2.mlstatic.com/D_NQ_NP_765617-MLU70065322575_062023-O.webp"
    ],
    price: 118153,
    verified: true ,
    verify_code:'',
    available: 4,
},
{
    title:'Blue Yeti - Blackout',
    brand:'Blue',
    type: 'MICROPHONE',
    category: 'TV, AUDIO AND VIDEO',
    description:{
    Text:"The Blue Yeti multi-pattern blackout condenser microphone is the perfect solution for your recording and communication needs in Argentina. With its sleek and versatile design, this high-quality condenser microphone offers four different polar patterns—omnidirectional, cardioid, bidirectional, and stereo—that let you adapt to any situation, from podcasts and vocal recordings to instruments and interviews.",
    Model: "Yeti",
    Color: "Blackout",
    Gamer: "Yes",
    CableLength: "2 m",
    BuiltInSpeakers: "No",
    Bluetooth: "No",
    Input: "Jack 3.5 mm, USB",
    Output: "Jack 3.5 mm, USB",
    LedLight: "No",
    CompatibleDevices: "PC",
    Weight: "0.55 kg"
    },
    cover_photo:[
    "https://http2.mlstatic.com/D_NQ_NP_739446-MLA44207269367_112020-O.webp",
    "https://http2.mlstatic.com/D_NQ_NP_954411-MLA51739377995_092022-O.webp",
    "https://http2.mlstatic.com/D_NQ_NP_913813-MLA51739471157_092022-O.webp"
    ],
    price: 102434,
    verified: true ,
    verify_code:'',
    available: 10,
},
{
    title: 'Notebook HP Pavilion 15.6" ',
    brand: 'HP',
    type: 'NOTEBOOK',
    category: 'NOTEBOOKS AND DESKTOPS',
    description:{
        Text:'Stay connected and productive with the amazing HP Pavilion laptop! Incredible performance so you can do more and enjoy entertainment wherever you go. Exceptional entertainment brought to you by its micro-edge display and B&O audio. Modern standby connected so you are up to date with your email, calendar notifications and more, even when you are not using your computer. Long battery life and HP Fast Charge technology let you work, watch, and stay connected all day. Find yours here!',
        Screen:' HD (1366 x 768), de 15,6" (39,6 cm), BrightView, 250 nits y 45 % of NTSC',
        Processor:'Intel® Core™ i5-1135G7 (4,2 GHz with technology Intel® Turbo Boost, 8 MB caché L3 y 4 core)',
        OperatingSystem:'Windows 11 Home Single Language',
        Storage:'Unit PCIe® NVMe™ M.2 de 256GB',
        Ram:'8GB DDR4-3200 MHz (2 x 4GB)'
    },
    cover_photo:[
     'https://www.alkosto.com/computador-portatil-hp-pavilion-156-pulgadas-eg0500la-intel-core-i5-ram-8gb-disco-ssd-256-gb-plateado/p/196786419003',
     'https://media.aws.alkomprar.com/ymarketingcolcomercio/Alkosto/informatica/contenido/HP/196786419003/img2/04_galeria/04.png',
     'https://media.aws.alkomprar.com/ymarketingcolcomercio/Alkosto/informatica/contenido/HP/196786419003/img2/04_galeria/05.png'
    ],
    price: 509999,
    verified: true ,
    verify_code:'',
    available: 10,
},
{
    title: 'LENOVO 14" IdeaPad 3 ',
    brand: 'LENOVO',
    type: 'NOTEBOOK',
    category: 'NOTEBOOKS AND DESKTOPS',
    cover_photo:[
     'https://www.alkosto.com/medias/196378007380-001-1400Wx1400H?context=bWFzdGVyfGltYWdlc3wyNDI2NzZ8aW1hZ2UvanBlZ3xhRGRrTDJnek55OHhNek0yTlRreU5qZzFORFk0Tmk4eE9UWXpOemd3TURjek9EQmZNREF4WHpFME1EQlhlREUwTURCSXxkN2NhNTAyNjNkMGJkZWU3YzFmZDk4NjhlMWI1ZTc5MmE5ZDc4ZDQ0NTE3YTBmZmNjMTZmZmU0MjE4NDFiYmMx',
     'https://www.alkosto.com/medias/196378007380-006-1400Wx1400H?context=bWFzdGVyfGltYWdlc3wyNzY1MDF8aW1hZ2UvanBlZ3xhR0ZpTDJnNFlpOHhNek0yTlRreU9UZ3dNemd3Tmk4eE9UWXpOemd3TURjek9EQmZNREEyWHpFME1EQlhlREUwTURCSXwyMzg1ZjJkOTkwMjEwOWRjM2NjOTE4ODYyZWQyNmQyOWFkZmUwZjk4YWEwYjcyNjBjZWZkYjIyYjgyOTNiOTcy',
     'https://www.alkosto.com/medias/196378007380-009-1400Wx1400H?context=bWFzdGVyfGltYWdlc3wxMDM4NTF8aW1hZ2UvanBlZ3xhRE5pTDJobFl5OHhNek0yTlRrek1UVTNNekkzT0M4eE9UWXpOemd3TURjek9EQmZNREE1WHpFME1EQlhlREUwTURCSXxjNThiMDZlYzRhYmFlODk3NmYyNjg0MDU3NzNjODI3MWFiZTRkMDY1ZGFjNzEyYWE3YTUwYThmYzZjY2ZmMThk'
    ],
    description:{
        Text:'In the blue LENOVO IdeaPad 3 laptop, find all the performance you need, an affordable laptop that meets your needs, its generous combination of Ram memory and solid-state storage is perfect for your daily tasks, hand in hand with an extraordinary design, this equipment will exceed your expectations. Likewise, it will provide you with superior entertainment thanks to its Dolby Audio sound, and you will feel safe thanks to its privacy shutter on your camera, when you finish your meetings or video calls you just have to close it. Take advantage, take yours now!',
        Screen:'FHD 14"',
        Processor:'Intel® Core™ i3-1115G4',
        OperatingSystem:'Windows 11 Home Single Language',
        Storage:'256GB SSD',
        Ram:'8GB DDR4-3200 MHz (2 x 4GB)'
    } ,
    price: 484999,
    verified: true ,
    verify_code:'',
    available: 5,
},
{
    title: 'ACER 15.6" Pulgadas 35MS ',
    brand: 'ACER',
    type: 'NOTEBOOK',
    category: 'NOTEBOOKS AND DESKTOPS',
    cover_photo:[
     'https://www.alkosto.com/medias/1400Wx1400H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-4711121378164-002.jpg?context=bWFzdGVyfGltYWdlc3wyODk2MzV8aW1hZ2UvanBlZ3xhRGRoTDJoalpDOHhNelkyTVRZeE9EQTNOemN5Tmk4eE5EQXdWM2d4TkRBd1NGOXRZWE4wWlhJdmFHOTBabTlzWkdWeUwzUnlZVzV6Wm1WeUwybHVZMjl0YVc1bkwyUmxjRzl6YVhRdmFIbGljbWx6TFdsdWRHVnlabUZqWlhNdlNVNHZiV1ZrYVdFdmNISnZaSFZqZEM4ME56RXhNVEl4TXpjNE1UWTBYekF3TWk1cWNHY3xkNTdjNmUxZjY5MWNiNjE4N2ZhMTYxYzViMDQ0NjIwMTIyYjdjZGNmMTkzNTBlMzQzMmEzMTZjZWExMWFhMTM4','https://www.alkosto.com/medias/1400Wx1400H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-4711121378164-008.jpg?context=bWFzdGVyfGltYWdlc3wyMTI5NTZ8aW1hZ2UvanBlZ3xhRGRtTDJoalpTOHhNelkyTVRZeU1UWXhOalkzTUM4eE5EQXdWM2d4TkRBd1NGOXRZWE4wWlhJdmFHOTBabTlzWkdWeUwzUnlZVzV6Wm1WeUwybHVZMjl0YVc1bkwyUmxjRzl6YVhRdmFIbGljbWx6TFdsdWRHVnlabUZqWlhNdlNVNHZiV1ZrYVdFdmNISnZaSFZqZEM4ME56RXhNVEl4TXpjNE1UWTBYekF3T0M1cWNHY3wyMWI5OTRjNmE5ODBiMDY5YTNhMGZhNTFkYzZlY2FkYjJhYzAyYjRhNDAxODFlNzg2ZGIzYWU1YTU3OTYyZDMx','https://www.alkosto.com/medias/1400Wx1400H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-4711121378164-005.jpg?context=bWFzdGVyfGltYWdlc3wxNDU5NDd8aW1hZ2UvanBlZ3xhR0kxTDJnME9DOHhNelkyTVRZeE9UZzBOekU1T0M4eE5EQXdWM2d4TkRBd1NGOXRZWE4wWlhJdmFHOTBabTlzWkdWeUwzUnlZVzV6Wm1WeUwybHVZMjl0YVc1bkwyUmxjRzl6YVhRdmFIbGljbWx6TFdsdWRHVnlabUZqWlhNdlNVNHZiV1ZrYVdFdmNISnZaSFZqZEM4ME56RXhNVEl4TXpjNE1UWTBYekF3TlM1cWNHY3w2ZDYzNTZkNWVlYTZhNzk3ZTdhMzQ1MDEyOGM1Yjc3NGNlZGU5NjE2YTI1YTZlZDEwMjBhNDZiNGMyOTdlYzM4'
    ],
    description:{
        Text:'ACER brings you its line of Aspire 3 laptops, a practical design computer that seeks to offer users a device that can be easily transported. It also includes an ergonomic hinge that allows additional airflow from the bottom of the laptop. It also offers you a useful range of ports, where three USB ports stand out, including two USB 3.2 Gen 1 and one USB 2.0. You can also connect to an external display via the HDMI port when the occasion calls for a larger screen. Get it here.',
        Screen:'FHD 15.6"',
        Processor:'Intel® Core™ i3-1115G4',
        OperatingSystem:'Windows 11 Home Single Language',
        Storage:'256GB SSD',
        Ram:'8GB DDR4'
    } ,
    price: 429999,
    verified: true ,
    verify_code:'',
    available: 12,
},
{
    title: 'HP 15,6" Ef2524la ',
    brand: 'HP',
    type: 'NOTEBOOK',
    category: 'NOTEBOOKS AND DESKTOPS',
    cover_photo:[
     'https://www.alkosto.com/medias/1400Wx1400H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-197497269369-002.jpg?context=bWFzdGVyfGltYWdlc3wyNjg2OTB8aW1hZ2UvanBlZ3xhRGcwTDJnM05pOHhNemM1TVRRME56RXlNVGsxTUM4eE5EQXdWM2d4TkRBd1NGOXRZWE4wWlhJdmFHOTBabTlzWkdWeUwzUnlZVzV6Wm1WeUwybHVZMjl0YVc1bkwyUmxjRzl6YVhRdmFIbGljbWx6TFdsdWRHVnlabUZqWlhNdlNVNHZiV1ZrYVdFdmNISnZaSFZqZEM4eE9UYzBPVGN5Tmprek5qbGZNREF5TG1wd1p3fDhiOGU0ZGRlYTk3ZDNiZWFjNmUzN2FlNDZlZGFmZjUzOWE3ZWQ2YjQwMDZjYWNmNWY5ZmE1YmQ3ZGVlYmZjZjY','https://www.alkosto.com/medias/1400Wx1400H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-197497269369-004.jpg?context=bWFzdGVyfGltYWdlc3wxMTk1NTF8aW1hZ2UvanBlZ3xhR1ZqTDJobE5pOHhNemM1TVRRME9ETXdNVFU1T0M4eE5EQXdWM2d4TkRBd1NGOXRZWE4wWlhJdmFHOTBabTlzWkdWeUwzUnlZVzV6Wm1WeUwybHVZMjl0YVc1bkwyUmxjRzl6YVhRdmFIbGljbWx6TFdsdWRHVnlabUZqWlhNdlNVNHZiV1ZrYVdFdmNISnZaSFZqZEM4eE9UYzBPVGN5Tmprek5qbGZNREEwTG1wd1p3fGI5OTE0MTE0MDQ0N2M4MDhmN2VmNjExODRlNTY0OTBlMzBjY2EzNzk2YTg1YzQzNGQ1N2Q2MDYyYWE5ZDQ5OGI','https://www.alkosto.com/medias/1400Wx1400H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-197497269369-005.jpg?context=bWFzdGVyfGltYWdlc3w0NjEzNXxpbWFnZS9qcGVnfGFHWmhMMmhtT0M4eE16YzVNVFEwT0RnNU1UUXlNaTh4TkRBd1YzZ3hOREF3U0Y5dFlYTjBaWEl2YUc5MFptOXNaR1Z5TDNSeVlXNXpabVZ5TDJsdVkyOXRhVzVuTDJSbGNHOXphWFF2YUhsaWNtbHpMV2x1ZEdWeVptRmpaWE12U1U0dmJXVmthV0V2Y0hKdlpIVmpkQzh4T1RjME9UY3lOamt6TmpsZk1EQTFMbXB3Wnd8ODk5YzIyNTE2OTFmOThkZjY2ZmQxZDgyNWY5NzI3NjhiMjQ1OTA2NzVkNTVmYTZjYzk3N2NhNjNkYmEyZGI3ZQ'
    ],
    description:{
        Text:'The power you need every day. Built to keep you productive and connected! Stay connected to what matters most with long-lasting battery life and a slim micro-edge bezel design. Designed to stay productive and entertained on the go, this HP laptop features reliable performance and a large screen, so you can stream, browse and complete tasks quickly! Buy yours now!',
        Screen:'FHD 15.6"',
        Processor:'AMD R5',
        OperatingSystem:'Windows 11 Home Single Language',
        Storage:'512GB SSD',
        Ram:'8GB DDR4'
    } ,
    price: 519999,
    verified: true ,
    verify_code:'',
    available: 2,
},
{
    title: 'ASUS TUF Dash 15,6" FX517ZC ',
    brand: 'ASUS',
    type: 'NOTEBOOK',
    category: 'NOTEBOOKS AND DESKTOPS',
    cover_photo:[
     'https://www.alkosto.com/medias/4711081724360-002-1400Wx1400H?context=bWFzdGVyfGltYWdlc3wzNjc2NTl8aW1hZ2UvanBlZ3xhVzFoWjJWekwyZzRZUzlvTUdVdk1USTBNRFU1TVRRek16Y3pNVEF1YW5CbnwzOGExYTI5ZDkyZWExOWEzMzIxNDhiYzhkMzc5YzBlZjMyYmQzNzExMjFkNjgzNDFmNTE1ZDI5N2VhZDI5Yzlj','https://www.alkosto.com/medias/4711081724360-005-1400Wx1400H?context=bWFzdGVyfGltYWdlc3w2NjQwNnxpbWFnZS9qcGVnfGFXMWhaMlZ6TDJnNU5DOW9aVEV2TVRJME1EVTVNVEkxTmpjNE16Z3VhbkJufDE0MTI5YWU4NTY1NTMxNzRlNTEyZWZiOTAwYjQwZTI4NzBiMWZmZDJmZTc0OTA3MGFlNjM4ZjE4YWQ0YWE3OGU','https://www.alkosto.com/medias/4711081724360-004-1400Wx1400H?context=bWFzdGVyfGltYWdlc3wyODU0ODh8aW1hZ2UvanBlZ3xhVzFoWjJWekwyaG1PQzlvTnpFdk1USTBNRFU1TVRVMU1UWTVOVGd1YW5Cbnw2MDY0ODU2MTQ0NDAxM2JiMDY5YTM1OTU5YWM2YmQ1Y2I0MTg1YzgxODkzZjMwOTdmMGViYTRjZjUxNDlhZDlh'
    ],
    description:{
        Text:'With the black ASUS TUF Dash F15 enjoy an advanced gaming experience in a super slim chassis. It has an Intel Core i5 CPU, GeForce RTX 3050 GPU and a 144 Hz screen with excellent graphic fluidity. Its TUF MIL-STD chassis is built to withstand everyday knocks. Its battery of up to 16.6 hours allows you to do more tasks. The two speakers with four cutouts produce loud and immersive audio. In addition, its anti-dust system, n-Blade fans, heatsinks remove heat from the main components and dissipate it so that they work at full capacity. Take it now!',
        Screen:'FHD 15.6" 144Hz',
        Processor:'Intel Core i5-12450H',
        OperatingSystem:'Windows 11 ',
        Storage:'512GB SSD',
        Ram:'16GB DDR4'
    } ,
    price: 1149999,
    verified: true ,
    verify_code:'',
    available: 12,
},
{
    title: 'ASUS 14" X415EA',
    brand: 'ASUS',
    type: 'NOTEBOOK',
    category: 'NOTEBOOKS AND DESKTOPS',
    cover_photo:[
     'https://www.alkosto.com/medias/4711081811893-002-1400Wx1400H?context=bWFzdGVyfGltYWdlc3wzODI1NTN8aW1hZ2UvanBlZ3xhR0psTDJneE5TOHhNek0wTkRFNU1EZ3lORFEzT0M4ME56RXhNRGd4T0RFeE9Ea3pYekF3TWw4eE5EQXdWM2d4TkRBd1NBfDA4MjU1N2ZkMWM2MGZiN2ExYWRjOWRiNDJhNGY0YTljOTRmZjRhYjIyOWMxNGQzZTg0ZGIxOWQ5ZGE0YjM4NmM','https://www.alkosto.com/medias/4711081811893-006-1400Wx1400H?context=bWFzdGVyfGltYWdlc3w1MTk1N3xpbWFnZS9qcGVnfGFEazBMMmhsWmk4eE16TTBOREU1TXpFNE16YzNOQzgwTnpFeE1EZ3hPREV4T0Rrelh6QXdObDh4TkRBd1YzZ3hOREF3U0F8MmIyOTEyMjYwNzZiMDcxMjY3ZjlhZTJlOGIzZjA1NTA1MGVhMTUzNmUwNjJkNjAwMmQzZDI1MDNjY2JhNDQ3YQ','https://www.alkosto.com/medias/4711081811893-005-1400Wx1400H?context=bWFzdGVyfGltYWdlc3w2Mzc5NXxpbWFnZS9qcGVnfGFEWXlMMmhpTkM4eE16TTBOREU1TWpVNU16azFNQzgwTnpFeE1EZ3hPREV4T0Rrelh6QXdOVjh4TkRBd1YzZ3hOREF3U0F8MTJhYjFkZDZlNzVkMjExNTA0MDFlYzUzNTg4NjNhMTZhYjczYTEyODI1MGU4MDhiODgxMWQwYjYzNzM1Y2I1Yw'],
    description:{
        Text:'Whether for work or play, ASUS X415 is the laptop that delivers great performance and immersive visuals. Its NanoEdge display features wide 178° viewing angles and an anti-glare coating for a truly engaging experience. With a total weight of only 1.6 kg, the ASUS X415 is extremely portable, so light that it adapts to your lifestyle. ASUS X415 is equipped with the reversible USB-C® 3.2 port, designed to make connecting devices as easy as possible. Take it now!',
        Screen:'FHD 14"',
        Processor:'Intel Pentium Gold 7505',
        OperatingSystem:'Windows 11 ',
        Storage:'256GB SSD',
        Ram:'8GB DDR4'
    } ,
    price: 349999,
    verified: true ,
    verify_code:'',
    available: 12,
},
{
    title: 'Gamer ACER 15.6" 53E7',
    brand: 'ACER',
    type: 'NOTEBOOK',
    category: 'NOTEBOOKS AND DESKTOPS',
    cover_photo:[
     'https://www.alkosto.com/medias/1400Wx1400H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-4711121320873-002.jpg?context=bWFzdGVyfGltYWdlc3w1MTY4NTJ8aW1hZ2UvanBlZ3xhREkzTDJoaE15OHhNelV5T1Rjek9EZ3dOVEkzT0M4eE5EQXdWM2d4TkRBd1NGOXRZWE4wWlhJdmFHOTBabTlzWkdWeUwzUnlZVzV6Wm1WeUwybHVZMjl0YVc1bkwyUmxjRzl6YVhRdmFIbGljbWx6TFdsdWRHVnlabUZqWlhNdlNVNHZiV1ZrYVdFdmNISnZaSFZqZEM4ME56RXhNVEl4TXpJd09EY3pYekF3TWk1cWNHY3w2NmFmYTEzMWJiNGJhYjVkN2M5MDA0NmMwMWIwMDNhZjQ1Y2U1NDY2MDZlNmI4NWRmYjRiOTQ2MGQxYjhlZDBk','https://www.alkosto.com/medias/1400Wx1400H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-4711121320873-007.jpg?context=bWFzdGVyfGltYWdlc3wzOTAyMTl8aW1hZ2UvanBlZ3xhRGMwTDJnNFlpOHhNelV5T1RjME1UYzFORE01T0M4eE5EQXdWM2d4TkRBd1NGOXRZWE4wWlhJdmFHOTBabTlzWkdWeUwzUnlZVzV6Wm1WeUwybHVZMjl0YVc1bkwyUmxjRzl6YVhRdmFIbGljbWx6TFdsdWRHVnlabUZqWlhNdlNVNHZiV1ZrYVdFdmNISnZaSFZqZEM4ME56RXhNVEl4TXpJd09EY3pYekF3Tnk1cWNHY3wxOWU2NzgwN2RmZDNmZjE4ZDdmNzRhNjM4N2E4YTE1MjJmMDA0OWE3NTMzY2MzM2ZiYjlmOTcwNjlkYWZmYTIw','https://www.alkosto.com/medias/60Wx60H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-4711121320873-006.jpg?context=bWFzdGVyfGltYWdlc3wxNjMxfGltYWdlL2pwZWd8YUdJMUwyZzROeTh4TXpVeU9UYzBNVFl5TXpNeU5pODJNRmQ0TmpCSVgyMWhjM1JsY2k5b2IzUm1iMnhrWlhJdmRISmhibk5tWlhJdmFXNWpiMjFwYm1jdlpHVndiM05wZEM5b2VXSnlhWE10YVc1MFpYSm1ZV05sY3k5SlRpOXRaV1JwWVM5d2NtOWtkV04wTHpRM01URXhNakV6TWpBNE56TmZNREEyTG1wd1p3fDZlMTE2ZTJhNDllMmJlMjk1NmMzNDg5MTQwODI2Njg5MjJjMWFhMThlN2IwNDcyMDQzMTc1YzY1MDQzODMwODM'],
    description:{
        Text:'Acer invites you to enjoy the unique Nitro 5 which has clearer sound thanks to its double 2W speakers. With DTS:X® Ultra, which can emit a 3D spatial sound environment, allowing you to hear from wherever your opponents come with excellent precision. You can also count on an abundant range of ports, such as HDMI and the latest USB 3.1 standard with compatibility for the 1st and 2nd generations. In the same way you will have an FHD screen- IPS technology, more vibrant colors and high quality video. buy it here',
        Screen:'FHD 15.6" 144Hz',
        Processor:'Intel Core i5 11400H',
        OperatingSystem:'Windows 11 ',
        Storage:'512GB SSD',
        Ram:'8GB DDR4'
    } ,
    price: 929999,
    verified: true ,
    verify_code:'',
    available: 12,
},
{
    title: 'LENOVO 14" IdeaPad 1',
    brand: 'LENOVO',
    type: 'NOTEBOOK',
    category: 'NOTEBOOKS AND DESKTOPS',
    cover_photo:[
     'https://www.alkosto.com/medias/196800798978-002-1400Wx1400H?context=bWFzdGVyfGltYWdlc3w0NjE5NTl8aW1hZ2UvanBlZ3xhR00wTDJnNVl5OHhNelEyTlRJMk9UVXdNVGs0TWk4eE9UWTRNREEzT1RnNU56aGZNREF5WHpFME1EQlhlREUwTURCSXxjNzY4NDdiZDJjNThkNjc3OTg1OWEwYWE5NWNiMjZlNGIzNTRiNzc2YzY5ZDdlNjE1ZTBmNTQwMzc2MDdjNjAy','https://www.alkosto.com/medias/196800798978-009-1400Wx1400H?context=bWFzdGVyfGltYWdlc3wxNDgxMzR8aW1hZ2UvanBlZ3xhRGM1TDJobU5TOHhNelEyTlRJM016WXpNRGMxTUM4eE9UWTRNREEzT1RnNU56aGZNREE1WHpFME1EQlhlREUwTURCSXxhMmE0N2Y5NTFiY2U5NTJiZTAyNzk0NDY5ZjRlOWRlOTNmZTAzODBjN2IxZGVkMTEwMDFjYmUyZmY4M2NlZTI3','https://www.alkosto.com/medias/196800798978-007-1400Wx1400H?context=bWFzdGVyfGltYWdlc3w1MDU5N3xpbWFnZS9qcGVnfGFERXlMMmc0TlM4eE16UTJOVEkzTWpRMU1URXdNaTh4T1RZNE1EQTNPVGc1TnpoZk1EQTNYekUwTURCWGVERTBNREJJfGRhZGJmYWUyMjBhOGIzN2FjMTY3MDQ1OGFlNDI1YmM0NzMwZTU3YjA1NjU4NDc1Yzg5ZTBlOTgxZWNiOGE4Y2M'],
    description:{
        Text:'The LENOVO IdeaPad 1 laptop in gray color is an accessible laptop but with everything you need, perfect for your daily tasks, hand in hand with an extraordinary design, this device will exceed your expectations. Likewise, it will provide you with superior entertainment thanks to its high-definition resolution and sound, additionally you will feel safe thanks to its privacy shutter on your camera, use it in your meetings or video calls, you just have to close the shutter and control who is watching you, not let it pass Take advantage and take yours now!',
        Screen:'FHD 14" ',
        Processor:'AMD Athlon',
        OperatingSystem:'Windows 11 ',
        Storage:'256GB SSD',
        Ram:'8GB DDR4'
    } ,
    price: 359999,
    verified: true ,
    verify_code:'',
    available: 9,
},
{
    title: 'MacBook Air 13" MLXW3E/A',
    brand: 'APPLE',
    type: 'NOTEBOOK',
    category: 'NOTEBOOKS AND DESKTOPS',
    cover_photo:[
     'https://www.alkosto.com/medias/194253190936-003-1400Wx1400H?context=bWFzdGVyfGltYWdlc3wxNDkxNzN8aW1hZ2UvanBlZ3xhVzFoWjJWekwyZ3hZUzlvTlRJdk1USTNNamt5T1RrMk5qUTVNall1YW5CbnxiZTNkNmU1YTBhNDVjN2RlMDBhNmMzYzdkNGNkY2I4OWFmMzg1Y2YyY2FhMzJhM2I0Yzk3OTRmODNhNDhhM2Nh','https://www.alkosto.com/medias/194253190936-004-1400Wx1400H?context=bWFzdGVyfGltYWdlc3wxNTMyNjd8aW1hZ2UvanBlZ3xhVzFoWjJWekwyZzBZaTlvTmpndk1USTNNamt6TURBeU5UUTNOVEF1YW5CbnxkM2JmOTEyMzlhMmVjMzc1NGY5M2IwOWRhMjU1MmM3Y2IwY2E4NjIyZjBmNDZmMWFlN2EzOGQ4ZmYyZjAyZjI3','https://www.alkosto.com/medias/194253190936-006-1400Wx1400H?context=bWFzdGVyfGltYWdlc3w4NTI3NnxpbWFnZS9qcGVnfGFXMWhaMlZ6TDJobE9DOW9ZVGd2TVRJM01qa3pNREUwTXpRek9UZ3VhbkJufGZmMjU3ZTkxMGFkZWJmYTU3OTljMGI0YTUyZjY3Y2EzMjZhMGNhOGQ5NGRjOTg4YTQ2ZDVlZDI3N2Y0ODg3OTY'],
    description:{
        Text:'MacBook Air, redesigned to harness the full power of the M2 chip, thin and light, with MagSafe charger, Magic Keyboard, works seamlessly with iPhone, 1080p HD camera, 4 speakers with spatial audio, and up to 18 hours of battery life on a Incredibly slim, strong aluminum casing.',
        Screen:'13.6"',
        Processor:'Chip M2',
        OperatingSystem:'MacOS Monterrey',
        Storage:'256GB SSD',
        Ram:'8GB'
    } ,
    price: 1759999,
    verified: true ,
    verify_code:'',
    available: 12,
},
{
    title: 'MacBook Pro 14" MPHE3E/A',
    brand: 'APPLE',
    type: 'NOTEBOOK',
    category: 'NOTEBOOKS AND DESKTOPS',
    cover_photo:[
     'https://www.alkosto.com/medias/1400Wx1400H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-194253317876-001.jpg?context=bWFzdGVyfGltYWdlc3wxODQzODJ8aW1hZ2UvanBlZ3xhRFUxTDJoa1pTOHhNell6TVRjMk16RXlNREUxT0M4eE5EQXdWM2d4TkRBd1NGOXRZWE4wWlhJdmFHOTBabTlzWkdWeUwzUnlZVzV6Wm1WeUwybHVZMjl0YVc1bkwyUmxjRzl6YVhRdmFIbGljbWx6TFdsdWRHVnlabUZqWlhNdlNVNHZiV1ZrYVdFdmNISnZaSFZqZEM4eE9UUXlOVE16TVRjNE56WmZNREF4TG1wd1p3fGMyNTMxZDk2YWE1ZjY0ZDA4MjA1ODg3Yjc5NDIwYTBhZWI4NTcyMmU3YTE3NTE5Zjg2OTcwMWI1MDE5MTY1ZDk','https://www.alkosto.com/medias/1400Wx1400H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-194253317876-006.jpg?context=bWFzdGVyfGltYWdlc3wxOTExMzd8aW1hZ2UvanBlZ3xhR05oTDJneE9DOHhNell6TVRjMk5qQTJPVEkzT0M4eE5EQXdWM2d4TkRBd1NGOXRZWE4wWlhJdmFHOTBabTlzWkdWeUwzUnlZVzV6Wm1WeUwybHVZMjl0YVc1bkwyUmxjRzl6YVhRdmFIbGljbWx6TFdsdWRHVnlabUZqWlhNdlNVNHZiV1ZrYVdFdmNISnZaSFZqZEM4eE9UUXlOVE16TVRjNE56WmZNREEyTG1wd1p3fDhhZTlhOTE3ZDQ1NDQyNTIyMGEwODZhOWM1NDVlZGZkYWE3NjkzMTQyZWE2OGI3ZDExNjUzNGRiOWRkZWQ4MjE','https://www.alkosto.com/medias/1400Wx1400H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-194253317876-008.jpg?context=bWFzdGVyfGltYWdlc3wyOTgxMTJ8aW1hZ2UvanBlZ3xhRE13TDJnNE9TOHhNell6TVRjMk56STBPRGt5Tmk4eE5EQXdWM2d4TkRBd1NGOXRZWE4wWlhJdmFHOTBabTlzWkdWeUwzUnlZVzV6Wm1WeUwybHVZMjl0YVc1bkwyUmxjRzl6YVhRdmFIbGljbWx6TFdsdWRHVnlabUZqWlhNdlNVNHZiV1ZrYVdFdmNISnZaSFZqZEM4eE9UUXlOVE16TVRjNE56WmZNREE0TG1wd1p3fGVlNzEwOGIxNmY5MDkzZTcwYmVlZjVkODBmNGZmNWU2MjkxN2Y2ZGNjZWMxMGQ1YTEyOTU4ZDg4YWYwNzRlOTk'],
    description:{
        Text:'MacBook Pro Gray debuts unprecedented power and efficiency with M2 Pro chips, the most powerful and efficient chip ever in a professional notebook. It has outstanding performance, even when not connected to the current. A battery that accompanies you for longer. A spectacular Liquid Retina XDR screen and all the ports you need for your daily tasks. Take the ideal MacBook for you here!',
        Screen:'14"',
        Processor:'Chip M2 Pro',
        OperatingSystem:'MacOS Ventura',
        Storage:'512GB SSD',
        Ram:'16GB'
    } ,
    price: 3059999,
    verified: true ,
    verify_code:'',
    available: 26,
},
{
    title: 'All In One LENOVO 21,5" AIO 3',
    brand: 'LENOVO',
    type: 'DESKTOP',
    category: 'NOTEBOOKS AND DESKTOPS',
    cover_photo:[
     'https://www.alkosto.com/medias/1400Wx1400H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-196804873718-002.jpg?context=bWFzdGVyfGltYWdlc3wzMDk2MDh8aW1hZ2UvanBlZ3xhR0kyTDJnNU15OHhNemMwTlRVMk16SXpPRFF6TUM4eE5EQXdWM2d4TkRBd1NGOXRZWE4wWlhJdmFHOTBabTlzWkdWeUwzUnlZVzV6Wm1WeUwybHVZMjl0YVc1bkwyUmxjRzl6YVhRdmFIbGljbWx6TFdsdWRHVnlabUZqWlhNdlNVNHZiV1ZrYVdFdmNISnZaSFZqZEM4eE9UWTRNRFE0TnpNM01UaGZNREF5TG1wd1p3fGM1YzBlZmE1MjVhYmZmNjkyMzY1Mzg5YTllMWZmZjA2MzNkYmRjZGVlZDljNzQ0NzVlODM2NTEzMjYzYTJjMmY','https://www.alkosto.com/medias/1400Wx1400H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-196804873718-008.jpg?context=bWFzdGVyfGltYWdlc3w3MDU5OXxpbWFnZS9qcGVnfGFESmxMMmhpWWk4eE16YzBOVFUyTmpjM056TTNOQzh4TkRBd1YzZ3hOREF3U0Y5dFlYTjBaWEl2YUc5MFptOXNaR1Z5TDNSeVlXNXpabVZ5TDJsdVkyOXRhVzVuTDJSbGNHOXphWFF2YUhsaWNtbHpMV2x1ZEdWeVptRmpaWE12U1U0dmJXVmthV0V2Y0hKdlpIVmpkQzh4T1RZNE1EUTROek0zTVRoZk1EQTRMbXB3Wnd8ZTUxZDU3ZDY1YmQyMWY0OTU1NmNmMjAyOGRlMzQ1OThiOWM3NjZiM2QzZmFhNDNlMmViOGI5MzgzMjljZmQyMg','https://www.alkosto.com/medias/1400Wx1400H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-196804873718-006.jpg?context=bWFzdGVyfGltYWdlc3wzNDI2NHxpbWFnZS9qcGVnfGFHTTNMMmcwWVM4eE16YzBOVFUyTlRVNU56Y3lOaTh4TkRBd1YzZ3hOREF3U0Y5dFlYTjBaWEl2YUc5MFptOXNaR1Z5TDNSeVlXNXpabVZ5TDJsdVkyOXRhVzVuTDJSbGNHOXphWFF2YUhsaWNtbHpMV2x1ZEdWeVptRmpaWE12U1U0dmJXVmthV0V2Y0hKdlpIVmpkQzh4T1RZNE1EUTROek0zTVRoZk1EQTJMbXB3Wnd8YTY2ZGIyMmE4YjVlNGJlZjQ4YmU2NTRhZTYyNzNkOGM3NTdhYjhmZDllZGMzNmMyYmYyNDlmMGQ2NzZhZGNmYg'],
    description:{
        Text:"The white Lenovo all-in-one AIO 3 features an AMD processor and integrated graphics for optimal performance for everyday tasks. Its FHD screen design and minimalist edges make it ideal for work and videos that require detail, its matte finish prevents external light from reflecting, which generates less fatigue and takes care of your eyes. Its HD audio system allows you to enjoy your music and calls clearly, additionally with its 720p camera you will achieve high quality video calls. Don't forget to bring yours.",
        Screen:'FHD 21.5"',
        Processor:'AMD Ryzen 3 3250U',
        OperatingSystem:'Windows Home 11',
        Storage:'256GB SSD',
        Ram:'8GB'
    } ,
    price: 494999,
    verified: true ,
    verify_code:'',
    available: 12,
},
{
    title: 'All In One LENOVO 23,8" AIO 3',
    brand: 'LENOVO',
    type: 'DESKTOP',
    category: 'NOTEBOOKS AND DESKTOPS',
    cover_photo:[
     'https://www.alkosto.com/medias/1400Wx1400H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-196803449921-002.jpg?context=bWFzdGVyfGltYWdlc3wzNjE0NTd8aW1hZ2UvanBlZ3xhRGcxTDJnMlpDOHhNelkxTURFNE1qTXdOemczTUM4eE5EQXdWM2d4TkRBd1NGOXRZWE4wWlhJdmFHOTBabTlzWkdWeUwzUnlZVzV6Wm1WeUwybHVZMjl0YVc1bkwyUmxjRzl6YVhRdmFIbGljbWx6TFdsdWRHVnlabUZqWlhNdlNVNHZiV1ZrYVdFdmNISnZaSFZqZEM4eE9UWTRNRE0wTkRrNU1qRmZNREF5TG1wd1p3fGU1ZDczY2NmNzk4MTE5M2M3MDU4ZjYxNmRkYWNkYTFlMDNhMjllYzJjMDBjNTM5ZTE1ZmQ4ZGFjZjg5OGJkMGE','https://www.alkosto.com/medias/1400Wx1400H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-196803449921-008.jpg?context=bWFzdGVyfGltYWdlc3w2ODY1MnxpbWFnZS9qcGVnfGFEVm1MMmhsTVM4eE16WTFNREU0TlRnME5qZ3hOQzh4TkRBd1YzZ3hOREF3U0Y5dFlYTjBaWEl2YUc5MFptOXNaR1Z5TDNSeVlXNXpabVZ5TDJsdVkyOXRhVzVuTDJSbGNHOXphWFF2YUhsaWNtbHpMV2x1ZEdWeVptRmpaWE12U1U0dmJXVmthV0V2Y0hKdlpIVmpkQzh4T1RZNE1ETTBORGs1TWpGZk1EQTRMbXB3Wnd8MTU1M2Q2YmJjNGRhM2NhN2ZhY2FjMjY2NjIxZGQ5ZTk0YjBmOTRiNTk3YWFkNjBhNzQ1ZDVmZDM3ZTA4NGRkMw','https://www.alkosto.com/medias/1400Wx1400H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-196803449921-009.jpg?context=bWFzdGVyfGltYWdlc3w4NTg3MXxpbWFnZS9qcGVnfGFEazJMMmhqTWk4eE16WTFNREU0TmpRek5qWXpPQzh4TkRBd1YzZ3hOREF3U0Y5dFlYTjBaWEl2YUc5MFptOXNaR1Z5TDNSeVlXNXpabVZ5TDJsdVkyOXRhVzVuTDJSbGNHOXphWFF2YUhsaWNtbHpMV2x1ZEdWeVptRmpaWE12U1U0dmJXVmthV0V2Y0hKdlpIVmpkQzh4T1RZNE1ETTBORGs1TWpGZk1EQTVMbXB3Wnd8NDg5M2YzYTRmNDg1N2QyNDU0MmVlMTkwM2M3NDgyMjFiNDQ5MzgyOGUzNTYyNmFlYmM4MDA5OWU0NzRkNGI4NQ'],
    description:{
        Text:"The Aio LENOVO Idea Center AIO 3, was created for efficient performance and truly elegant engineering. Just the right balance of processor, memory, and plenty of solid-state storage, so it can handle a variety of tasks. With its modern support you will save space on the desk, its almost borderless screen, Full HD resolution and multi-touch panel combine so that you do not lose detail in your projects and take advantage of your creativity. Do not miss this opportunity, take yours.",
        Screen:'FHD 23.8"',
        Processor:'AMD Ryzen 5 5500U',
        OperatingSystem:'Windows Home 11',
        Storage:'512GB SSD',
        Ram:'8GB'
    } ,
    price: 764999,
    verified: true ,
    verify_code:'',
    available: 12,
},
{
    title: 'All in One HP 23.8" cb0003la',
    brand: 'HP',
    type: 'DESKTOP',
    category: 'NOTEBOOKS AND DESKTOPS',
    cover_photo:[
     'https://www.alkosto.com/medias/1400Wx1400H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-196548561384-002.jpg?context=bWFzdGVyfGltYWdlc3wzNTg1OTR8aW1hZ2UvanBlZ3xhRGt4TDJobVpTOHhNelV3TURBNU5qTTRNRGsxT0M4eE5EQXdWM2d4TkRBd1NGOXRZWE4wWlhJdmFHOTBabTlzWkdWeUwzUnlZVzV6Wm1WeUwybHVZMjl0YVc1bkwyUmxjRzl6YVhRdmFIbGljbWx6TFdsdWRHVnlabUZqWlhNdlNVNHZiV1ZrYVdFdmNISnZaSFZqZEM4eE9UWTFORGcxTmpFek9EUmZNREF5TG1wd1p3fDc5YjE4NzVkNzExNzcxMDQ2NmY5MzE4ZGY4ZGZiNzY0NWVhYzJjZDllZWY2NDBjOTY3ZjU0M2QwNTlkOGJkZTk','https://www.alkosto.com/medias/1400Wx1400H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-196548561384-004.jpg?context=bWFzdGVyfGltYWdlc3wyNjE1OTZ8aW1hZ2UvanBlZ3xhREpoTDJnNFpTOHhNelV3TURBNU56VTJNRFl3Tmk4eE5EQXdWM2d4TkRBd1NGOXRZWE4wWlhJdmFHOTBabTlzWkdWeUwzUnlZVzV6Wm1WeUwybHVZMjl0YVc1bkwyUmxjRzl6YVhRdmFIbGljbWx6TFdsdWRHVnlabUZqWlhNdlNVNHZiV1ZrYVdFdmNISnZaSFZqZEM4eE9UWTFORGcxTmpFek9EUmZNREEwTG1wd1p3fDNkMDY1MmNlNWVmN2JiMDBhMmZkOTUyNjExOWY1OTM4ZTE5OGZlNTQ3ZGNhYzk0OTFiMTQ2OTQwNzA0ZTkzYzM','https://www.alkosto.com/medias/1400Wx1400H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-196548561384-005.jpg?context=bWFzdGVyfGltYWdlc3wzODEwOTN8aW1hZ2UvanBlZ3xhREl3TDJnek1pOHhNelV3TURBNU9ERTFNRFF6TUM4eE5EQXdWM2d4TkRBd1NGOXRZWE4wWlhJdmFHOTBabTlzWkdWeUwzUnlZVzV6Wm1WeUwybHVZMjl0YVc1bkwyUmxjRzl6YVhRdmFIbGljbWx6TFdsdWRHVnlabUZqWlhNdlNVNHZiV1ZrYVdFdmNISnZaSFZqZEM4eE9UWTFORGcxTmpFek9EUmZNREExTG1wd1p3fDJjMDZlNzU0MzMwZTJkMDMxNzg1ZTA2YzhhMmI3MTRkNjEzZWMxYTZmYTVkM2Q1MGM5MjJiMjViNjk5YjcyZmM'],
    description:{
        Text:"Attractive design. For intense work. The All in One HP combines the power of a desktop computer with the beauty of a modern screen. With its powerful processor, you can enjoy a cinematic experience on the three-sided micro-edge FHD display with dual speakers. It was designed to keep your space tidy through careful placement of the ports, and its compact design with aluminum support includes sustainable materials such as ocean-sourced plastic and post-consumer recycled plastics. Don't wait any longer, get yours here!",
        Screen:'FHD 23.8"',
        Processor:'AMD Ryzen 3 5300U',
        OperatingSystem:'Windows Home 11',
        Storage:'256GB SSD',
        Ram:'8GB'
    } ,
    price: 489999,
    verified: true ,
    verify_code:'',
    available: 6,
},
{
    title: 'All in One HP 21.5" dd2019la',
    brand: 'HP',
    type: 'DESKTOP',
    category: 'NOTEBOOKS AND DESKTOPS',
    cover_photo:[
     'https://www.alkosto.com/medias/1400Wx1400H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-197192055137-002.jpg?context=bWFzdGVyfGltYWdlc3wzOTgzNTR8aW1hZ2UvanBlZ3xhREl6TDJnd01DOHhNelkwT1RBeU9EQTFOVEEzTUM4eE5EQXdWM2d4TkRBd1NGOXRZWE4wWlhJdmFHOTBabTlzWkdWeUwzUnlZVzV6Wm1WeUwybHVZMjl0YVc1bkwyUmxjRzl6YVhRdmFIbGljbWx6TFdsdWRHVnlabUZqWlhNdlNVNHZiV1ZrYVdFdmNISnZaSFZqZEM4eE9UY3hPVEl3TlRVeE16ZGZNREF5TG1wd1p3fDdmOWY0YTM5MzdlYzY5NDRiOTA1YTUxZjc1ZDc2MmY1MDIyZGEzMDkxZmE2NTI5ZjU1YjU1ZTYzNjM1MDQ2N2M','https://www.alkosto.com/medias/1400Wx1400H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-197192055137-004.jpg?context=bWFzdGVyfGltYWdlc3wyOTQ5Njh8aW1hZ2UvanBlZ3xhRFF5TDJnM01DOHhNelkwT1RBeU9USXpORGN4T0M4eE5EQXdWM2d4TkRBd1NGOXRZWE4wWlhJdmFHOTBabTlzWkdWeUwzUnlZVzV6Wm1WeUwybHVZMjl0YVc1bkwyUmxjRzl6YVhRdmFIbGljbWx6TFdsdWRHVnlabUZqWlhNdlNVNHZiV1ZrYVdFdmNISnZaSFZqZEM4eE9UY3hPVEl3TlRVeE16ZGZNREEwTG1wd1p3fGNjNjVmYjY1ZGIzNjllMTkzYzBlZjllY2Q3N2ZlMzAyNzMyMTRlMDA3NjNiZjUyNTRmZjE5NTAzMWM0N2MzMTE','https://www.alkosto.com/medias/1400Wx1400H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-197192055137-003.jpg?context=bWFzdGVyfGltYWdlc3wyODYyOTB8aW1hZ2UvanBlZ3xhRE01TDJneE5DOHhNelkwT1RBeU9EWTBORGc1TkM4eE5EQXdWM2d4TkRBd1NGOXRZWE4wWlhJdmFHOTBabTlzWkdWeUwzUnlZVzV6Wm1WeUwybHVZMjl0YVc1bkwyUmxjRzl6YVhRdmFIbGljbWx6TFdsdWRHVnlabUZqWlhNdlNVNHZiV1ZrYVdFdmNISnZaSFZqZEM4eE9UY3hPVEl3TlRVeE16ZGZNREF6TG1wd1p3fGY5ZjBhNzZjMzMxYTU0Y2U0YThjOGExMGJhODg3MTY4YjhhN2FmNDY3NWYzMTJmNmI0MGRkYWIxNGJlMDVlOTE'],
    description:{
        Text:"Think long term. The HP All in One 22-dd2019la combines the power of a desktop with the beauty of a slim, modern display in a reliable device that's designed to grow with you. Get more done with a reliable processor, and keep your PC up to date with an easy-to-remove back panel. Proven, rugged design built to last, effective and trusted by millions of people, this powerful AIO from HP undergoes more than 230 individual quality tests. Don't wait any longer, buy yours here!",
        Screen:'FHD 21.5"',
        Processor:'Intel Core i3 1215U',
        OperatingSystem:'Windows Home 11',
        Storage:'256GB SSD',
        Ram:'8GB'
    } ,
    price: 414999,
    verified: true ,
    verify_code:'',
    available: 1,
},
{
    title: 'Mac mini MMFK3LZ/A',
    brand: 'APPLE',
    type: 'DESKTOP',
    category: 'NOTEBOOKS AND DESKTOPS',
    cover_photo:[
     'https://www.alkosto.com/medias/1400Wx1400H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-194253142546-001.jpg?context=bWFzdGVyfGltYWdlc3wxNDMyNDl8aW1hZ2UvanBlZ3xhR00xTDJoaFppOHhNell6TVRjME16WTFOVGsyTmk4eE5EQXdWM2d4TkRBd1NGOXRZWE4wWlhJdmFHOTBabTlzWkdWeUwzUnlZVzV6Wm1WeUwybHVZMjl0YVc1bkwyUmxjRzl6YVhRdmFIbGljbWx6TFdsdWRHVnlabUZqWlhNdlNVNHZiV1ZrYVdFdmNISnZaSFZqZEM4eE9UUXlOVE14TkRJMU5EWmZNREF4TG1wd1p3fDVhNTdlYmZmMDgyYzhiNmEyNmY4OGZhYWVkN2IwN2IwMGI5ZmQ3MjdjYzE0MzcxZThmNmQwYWYzOTgwNDM5ZTE','https://www.alkosto.com/medias/1400Wx1400H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-194253142546-003.jpg?context=bWFzdGVyfGltYWdlc3wxMzE1OTV8aW1hZ2UvanBlZ3xhRFZrTDJnelppOHhNell6TVRjME5EZ3pOVFl4TkM4eE5EQXdWM2d4TkRBd1NGOXRZWE4wWlhJdmFHOTBabTlzWkdWeUwzUnlZVzV6Wm1WeUwybHVZMjl0YVc1bkwyUmxjRzl6YVhRdmFIbGljbWx6TFdsdWRHVnlabUZqWlhNdlNVNHZiV1ZrYVdFdmNISnZaSFZqZEM4eE9UUXlOVE14TkRJMU5EWmZNREF6TG1wd1p3fGRhZTdjNTNjY2VlM2Q3MTY1MzRlNmU0NjEzNGM1ZjZjMGI3NzAyYzM5NzY0ZDAyZDA0NzA0OTVmZGU2YjMyNGE','https://www.alkosto.com/medias/1400Wx1400H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-194253142546-005.jpg?context=bWFzdGVyfGltYWdlc3wzNTc1NDd8aW1hZ2UvanBlZ3xhR0kwTDJnM09DOHhNell6TVRjME5qQXhOVEkyTWk4eE5EQXdWM2d4TkRBd1NGOXRZWE4wWlhJdmFHOTBabTlzWkdWeUwzUnlZVzV6Wm1WeUwybHVZMjl0YVc1bkwyUmxjRzl6YVhRdmFIbGljbWx6TFdsdWRHVnlabUZqWlhNdlNVNHZiV1ZrYVdFdmNISnZaSFZqZEM4eE9UUXlOVE14TkRJMU5EWmZNREExTG1wd1p3fGZiYTdkOTgxNjJkMzU1OTcyYzY1NWUwYTFmYjZmYWFlMmUyNjc2ZjIxNmVkYTk3MjI0MGQ3MDI1NjljYjA0M2I'],
    description:{
        Text:"Mac mini lets you multitask at breakneck speed. The M2 chip seems to fly when you're playing immersive games or preparing complex presentations. And its wide variety of ports gives you the versatility to connect whatever you need. Mac mini is ready for whatever you throw at it.",
        Screen:'Retina 24"',
        Processor:'Chip M2',
        OperatingSystem:'macOS Ventura',
        Storage:'512GB SSD',
        Ram:'8GB'
    } ,
    price: 1054999,
    verified: true ,
    verify_code:'',
    available: 18,
},
{
    title: 'Mac mini MNH73LZ/A',
    brand: 'APPLE',
    type: 'DESKTOP',
    category: 'NOTEBOOKS AND DESKTOPS',
    cover_photo:[
     'https://www.alkosto.com/medias/1400Wx1400H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-194253330103-003.jpg?context=bWFzdGVyfGltYWdlc3wxMzQyMDN8aW1hZ2UvanBlZ3xhREZqTDJoaVl5OHhNell6TVRjNE1ESXlOVEExTkM4eE5EQXdWM2d4TkRBd1NGOXRZWE4wWlhJdmFHOTBabTlzWkdWeUwzUnlZVzV6Wm1WeUwybHVZMjl0YVc1bkwyUmxjRzl6YVhRdmFIbGljbWx6TFdsdWRHVnlabUZqWlhNdlNVNHZiV1ZrYVdFdmNISnZaSFZqZEM4eE9UUXlOVE16TXpBeE1ETmZNREF6TG1wd1p3fDkzOTZhZjMxYWJkYmRiN2QwZmY4ZTYxOWE3N2JlNGJlYTIxYjE1YzBmNDllM2Y5YWQ5ODExYWI0NzMxYzg4NGI','https://www.alkosto.com/medias/1400Wx1400H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-194253330103-004.jpg?context=bWFzdGVyfGltYWdlc3wzMjIxMDJ8aW1hZ2UvanBlZ3xhR0ptTDJoaE55OHhNell6TVRjNE1EZ3hORGczT0M4eE5EQXdWM2d4TkRBd1NGOXRZWE4wWlhJdmFHOTBabTlzWkdWeUwzUnlZVzV6Wm1WeUwybHVZMjl0YVc1bkwyUmxjRzl6YVhRdmFIbGljbWx6TFdsdWRHVnlabUZqWlhNdlNVNHZiV1ZrYVdFdmNISnZaSFZqZEM4eE9UUXlOVE16TXpBeE1ETmZNREEwTG1wd1p3fDYwNTNlOGQ4NDRmYmNiZWYyZDQzOTI2MjM3YmY0NzYwNWFkZjZiNWQ4ZjM4YzNlOGE4ZWQ1ZDQyZGIxZGU3OGY','https://www.alkosto.com/medias/1400Wx1400H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-194253330103-005.jpg?context=bWFzdGVyfGltYWdlc3wzNTc1NDd8aW1hZ2UvanBlZ3xhR0kyTDJnMFlpOHhNell6TVRjNE1UUXdORGN3TWk4eE5EQXdWM2d4TkRBd1NGOXRZWE4wWlhJdmFHOTBabTlzWkdWeUwzUnlZVzV6Wm1WeUwybHVZMjl0YVc1bkwyUmxjRzl6YVhRdmFIbGljbWx6TFdsdWRHVnlabUZqWlhNdlNVNHZiV1ZrYVdFdmNISnZaSFZqZEM4eE9UUXlOVE16TXpBeE1ETmZNREExTG1wd1p3fGU3MTUwMGVhMDcxZTEwZTgxNTE0OTUwYzM4NzVhYWM4MzQwYzU2YTA3ZmM3MzA0YWM2NDMzYzg5YzdmZjNmYmI'],
    description:{
        Text:"Mac mini lets you multitask at breakneck speed. The M2 Pro chip tackles monumental workloads like 8K ProRes video and large image editing. In addition, its wide variety of ports gives it the versatility to connect whatever you need. Mac mini is ready for whatever you throw at it.",
        Screen:'Retina 24"',
        Processor:'Chip M2 Pro',
        OperatingSystem:'macOS Ventura',
        Storage:'512GB SSD',
        Ram:'16GB'
    } ,
    price: 2179999,
    verified: true ,
    verify_code:'',
    available: 12,
},
{
    title: 'All in One Pavilion HP 31.5" b0001la',
    brand: 'HP',
    type: 'DESKTOP',
    category: 'NOTEBOOKS AND DESKTOPS',
    cover_photo:[
     'https://www.alkosto.com/medias/196548730490-002-1400Wx1400H?context=bWFzdGVyfGltYWdlc3wzMDEyNDV8aW1hZ2UvanBlZ3xhREF4TDJnMllTOHhNek01TXpZeU9UTXhOVEV3TWk4eE9UWTFORGczTXpBME9UQmZNREF5WHpFME1EQlhlREUwTURCSXwyODdhYzlhMjJmNzUzZDhkYjNkOTliY2EwODEyYTY1NjJhNmJkOWQxYmRhZjNkNDE2Y2VjNTI4Zjg2YzhmYmE3','https://www.alkosto.com/medias/196548730490-004-1400Wx1400H?context=bWFzdGVyfGltYWdlc3w3MzYxN3xpbWFnZS9qcGVnfGFHUmhMMmhpTVM4eE16TTVNell6TURRNU5EYzFNQzh4T1RZMU5EZzNNekEwT1RCZk1EQTBYekUwTURCWGVERTBNREJJfGJhZmFiMjE1OGFmNDFkMWQ3NjZmMzllOTVmYjUxODI2MDcxZGVhMDY2ZDUxMDNmYjk3MTIwZjRjOWU0OGEzMTQ','https://www.alkosto.com/medias/196548730490-008-1400Wx1400H?context=bWFzdGVyfGltYWdlc3w1MjkzNzh8aW1hZ2UvanBlZ3xhRFUyTDJnMlpDOHhNek01TXpZek1qZzFOREEwTmk4eE9UWTFORGczTXpBME9UQmZNREE0WHpFME1EQlhlREUwTURCSXwyMGE2ZDFmNmEwNDg2NDU2Njg3YmU5MzI1ZmUwM2NkMTc0N2Y0YzQ1MzY0ZDIwZmUzZWYwYjAzOTVmNmQ3YThi'],
    description:{
        Text:"Elegance and power. ,All ,in ,One ,Pavilion by HP. Unleash your creativity with its 4K UHD display with DCI-P3 color gamut, stunning cinema-quality images, with stunning NVIDIA RTX 3050 graphics and a powerful processor that gives you superior performance for multitasking. Enjoy fantastic audio thanks to its integrated sound bar with 6 speakers calibrated by experts from B&O. Connect a streaming device or game console to kick back and enjoy the entertainment you love at the click of a button. Don't wait any longer, get yours now!",
        Screen:'4K UHD 31.5"',
        Processor:'Intel Core i7 12700T',
        OperatingSystem:'Windows Home 11',
        Storage:'512GB SSD',
        Ram:'16GB'
    } ,
    price: 2114999,
    verified: true ,
    verify_code:'',
    available: 4,
},
{
    title: 'All in One HP 23.8" cb009la',
    brand: 'HP',
    type: 'DESKTOP',
    category: 'NOTEBOOKS AND DESKTOPS',
    cover_photo:[
     'https://www.alkosto.com/medias/1400Wx1400H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-196548561445-002.jpg?context=bWFzdGVyfGltYWdlc3wzMzcxMjh8aW1hZ2UvanBlZ3xhREl4TDJnd1l5OHhNemM1TURBNU1qUXlOekk1TkM4eE5EQXdWM2d4TkRBd1NGOXRZWE4wWlhJdmFHOTBabTlzWkdWeUwzUnlZVzV6Wm1WeUwybHVZMjl0YVc1bkwyUmxjRzl6YVhRdmFIbGljbWx6TFdsdWRHVnlabUZqWlhNdlNVNHZiV1ZrYVdFdmNISnZaSFZqZEM4eE9UWTFORGcxTmpFME5EVmZNREF5TG1wd1p3fGEzOGM0ZDM4NjZlNjU3ZTdmODZmOGQyNDg5YWNiZTZjMzBhZmNmMTlkNDY4MmNiMjMwZjJiYzc1NjEzOWZjNWM','https://www.alkosto.com/medias/1400Wx1400H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-196548561445-006.jpg?context=bWFzdGVyfGltYWdlc3wyODE1MzN8aW1hZ2UvanBlZ3xhRFZqTDJoa01pOHhNemM1TURBNU5EYzROalU1TUM4eE5EQXdWM2d4TkRBd1NGOXRZWE4wWlhJdmFHOTBabTlzWkdWeUwzUnlZVzV6Wm1WeUwybHVZMjl0YVc1bkwyUmxjRzl6YVhRdmFIbGljbWx6TFdsdWRHVnlabUZqWlhNdlNVNHZiV1ZrYVdFdmNISnZaSFZqZEM4eE9UWTFORGcxTmpFME5EVmZNREEyTG1wd1p3fDUzODJhMzBjMzA5NDUxNWIyY2Q5OTFiMThkODA2MTgxMmIzN2YyOWZhOTY1MTRiMWFmZWI5NjU3MWUwYzg2Yjk','https://www.alkosto.com/medias/1400Wx1400H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-196548561445-007.jpg?context=bWFzdGVyfGltYWdlc3w0OTI5NDl8aW1hZ2UvanBlZ3xhRGs1TDJoa01TOHhNemM1TURBNU5UTTNOalF4TkM4eE5EQXdWM2d4TkRBd1NGOXRZWE4wWlhJdmFHOTBabTlzWkdWeUwzUnlZVzV6Wm1WeUwybHVZMjl0YVc1bkwyUmxjRzl6YVhRdmFIbGljbWx6TFdsdWRHVnlabUZqWlhNdlNVNHZiV1ZrYVdFdmNISnZaSFZqZEM4eE9UWTFORGcxTmpFME5EVmZNREEzTG1wd1p3fDI1MzFkMTA4ODY4OTVkOGU0NDM4YmY1MTRiMWU1ODk3MTdhNTNmNWI2ZWJlNmE4NGI4Mzg4NmQzNzE2NzYzOWE'],
    description:{
        Text:"Think long term. The HP All-in-One combines the power of a PC with the beauty of a slim, modern display in one reliable device. Built to last, Life can be unpredictable, but your HP desktop shouldn't be. Backed by more than 230 individual tests, our desktops go above and beyond to give you durability you can count on and reliability you can count on. Boot up at full speed in seconds with up to 256GB PCIe SSD storage.",
        Screen:'FHD 23.8"',
        Processor:'AMD Ryzen 5 5500U',
        OperatingSystem:'Windows Home 11',
        Storage:'256GB SSD',
        Ram:'8GB'
    } ,
    price: 749999,
    verified: true ,
    verify_code:'',
    available: 12,
},
{
    title: 'All In One LENOVO 27" AIO 3',
    brand: 'LENOVO',
    type: 'DESKTOP',
    category: 'NOTEBOOKS AND DESKTOPS',
    cover_photo:[
     'https://www.alkosto.com/medias/1400Wx1400H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-197529451595-002.jpg?context=bWFzdGVyfGltYWdlc3wyNzM2MTd8aW1hZ2UvanBlZ3xhRFJqTDJoaU9TOHhNemMzTlRZME5USTNPREl6T0M4eE5EQXdWM2d4TkRBd1NGOXRZWE4wWlhJdmFHOTBabTlzWkdWeUwzUnlZVzV6Wm1WeUwybHVZMjl0YVc1bkwyUmxjRzl6YVhRdmFIbGljbWx6TFdsdWRHVnlabUZqWlhNdlNVNHZiV1ZrYVdFdmNISnZaSFZqZEM4eE9UYzFNamswTlRFMU9UVmZNREF5TG1wd1p3fGYyNzliZmRjMGM4ZGRmNGMwOTQ5MTA0MzE2NDM3MjhjMTViYzgxNWI3NTVkMzhiNGY4YzFkYmQwY2VhMDRmM2I','https://www.alkosto.com/medias/1400Wx1400H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-197529451595-008.jpg?context=bWFzdGVyfGltYWdlc3w1NTM4MXxpbWFnZS9qcGVnfGFHVTRMMmc1Tnk4eE16YzNOVFkwT0RneE56RTRNaTh4TkRBd1YzZ3hOREF3U0Y5dFlYTjBaWEl2YUc5MFptOXNaR1Z5TDNSeVlXNXpabVZ5TDJsdVkyOXRhVzVuTDJSbGNHOXphWFF2YUhsaWNtbHpMV2x1ZEdWeVptRmpaWE12U1U0dmJXVmthV0V2Y0hKdlpIVmpkQzh4T1RjMU1qazBOVEUxT1RWZk1EQTRMbXB3Wnd8MjQ5MjExMzlkYmQ4Mzk5MzU0NDE4NDQ4ZjgwMjg2MmRjNTU2NWU5OGY0Y2YwYTU5ZWFhM2M1ZWY4NmQ5NDMwYg','https://www.alkosto.com/medias/1400Wx1400H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-197529451595-003.jpg?context=bWFzdGVyfGltYWdlc3wzMTExMzl8aW1hZ2UvanBlZ3xhR1ZsTDJoaE5DOHhNemMzTlRZME5UZzJPREEyTWk4eE5EQXdWM2d4TkRBd1NGOXRZWE4wWlhJdmFHOTBabTlzWkdWeUwzUnlZVzV6Wm1WeUwybHVZMjl0YVc1bkwyUmxjRzl6YVhRdmFIbGljbWx6TFdsdWRHVnlabUZqWlhNdlNVNHZiV1ZrYVdFdmNISnZaSFZqZEM4eE9UYzFNamswTlRFMU9UVmZNREF6TG1wd1p3fDZlMmRiNTVkYjcyY2M0Zjg3MjhjM2NmMGJhYzdhZmQ0MzVlNzZjMDdkOTZiMzcwMmM3NjI3NTZhZTQ1YTViMDY'],
    description:{
        Text:"The LENOVO AIO 3 all-in-one desktop computer gives you excellent performance and speed for your study, work and multimedia tasks, thanks to a powerful processor in a fair balance of Ram and solid state storage. Its 27 inch FHD screen with minimalist edges allow fluidity and detail that you will enjoy. It has Wifi 6 which improves speed and data transfer. Its HD sound and its 5 mpx camera allow you to make clear and quality video calls. run out of yours!",
        Screen:'FHD 27"',
        Processor:'AMD Ryzen 5 7530U',
        OperatingSystem:'Windows Home 11',
        Storage:'1TB SSD',
        Ram:'16GB'
    } ,
    price: 1059999,
    verified: true ,
    verify_code:'',
    available: 12,
},
{
    title: 'All In One LENOVO 31,5" YOGA AIO 9',
    brand: 'LENOVO',
    type: 'DESKTOP',
    category: 'NOTEBOOKS AND DESKTOPS',
    cover_photo:[
     'https://www.alkosto.com/medias/1400Wx1400H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-196804697543-002.jpg?context=bWFzdGVyfGltYWdlc3wyMTk3MzZ8aW1hZ2UvanBlZ3xhREUwTDJobE1DOHhNemczT1RZM09UYzNPRGcwTmk4eE5EQXdWM2d4TkRBd1NGOXRZWE4wWlhJdmFHOTBabTlzWkdWeUwzUnlZVzV6Wm1WeUwybHVZMjl0YVc1bkwyUmxjRzl6YVhRdmFIbGljbWx6TFdsdWRHVnlabUZqWlhNdlNVNHZiV1ZrYVdFdmNISnZaSFZqZEM4eE9UWTRNRFEyT1RjMU5ETmZNREF5TG1wd1p3fGIxNjI1ZDRlZmNlZmZlMDBlNTEzOTg5ZGVkYzMyY2RmYWI2YTY5M2VhMGQyMjRkMmE3YmVlYWQxMjc5M2NlMDQ','https://www.alkosto.com/medias/1400Wx1400H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-196804697543-007.jpg?context=bWFzdGVyfGltYWdlc3w3Nzc0NXxpbWFnZS9qcGVnfGFEYzNMMmhtTlM4eE16ZzNPVFk0TWpjeU56azJOaTh4TkRBd1YzZ3hOREF3U0Y5dFlYTjBaWEl2YUc5MFptOXNaR1Z5TDNSeVlXNXpabVZ5TDJsdVkyOXRhVzVuTDJSbGNHOXphWFF2YUhsaWNtbHpMV2x1ZEdWeVptRmpaWE12U1U0dmJXVmthV0V2Y0hKdlpIVmpkQzh4T1RZNE1EUTJPVGMxTkROZk1EQTNMbXB3Wnd8NTU3ZDBiNDU3YjBmMDU1YTAwOGEyNDVkNmRkZDBjNTg3NzRiY2Y0ZWE1YzI2YTIwNWYzNWViZjBlYjc1Y2ExOQ','https://www.alkosto.com/medias/1400Wx1400H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-196804697543-006.jpg?context=bWFzdGVyfGltYWdlc3w5OTkyN3xpbWFnZS9qcGVnfGFESmlMMmhtTmk4eE16ZzNPVFk0TWpFek9ERTBNaTh4TkRBd1YzZ3hOREF3U0Y5dFlYTjBaWEl2YUc5MFptOXNaR1Z5TDNSeVlXNXpabVZ5TDJsdVkyOXRhVzVuTDJSbGNHOXphWFF2YUhsaWNtbHpMV2x1ZEdWeVptRmpaWE12U1U0dmJXVmthV0V2Y0hKdlpIVmpkQzh4T1RZNE1EUTJPVGMxTkROZk1EQTJMbXB3Wnd8M2IzOWUwOWI1ZTY5NmViYTM5NjJjZDAxYjYxYTI0OTNmNGE2OGEzYTNiODQyOWJiMjFhOWRlOTFkYjUwZmE3Yg'],
    description:{
        Text:"Let your creativity run wild with the LENOVO Yoga 9 desktop, the ideal tool for you, built with high standards of performance and truly efficient engineering. thanks to its set of processor, memory and solid state storage capacity. Its sustainable and minimalist architecture presents an ultra-thin design with its huge 32 ips almost borderless screen that integrates into your environments and surprises you with its 4K image quality that together with its Harman Kardon speakers with Dolby Atmos will motivate your senses. don't let it go take it now!",
        Screen:' 4k UHD 31.5"',
        Processor:'Intel Core I9 13900H',
        OperatingSystem:'Windows Home 11',
        Storage:'1TB SSD',
        Ram:'16GB'
    } ,
    price: 4489999,
    verified: true ,
    verify_code:'',
    available: 16,
},
{
    title:'Samsung Galaxy A23',
    brand:'Samsung',
    type: 'Phones',
    category: 'CELLPHONES AND TABLETS',
    description:{
    Text:["High-Resolution Camera: A wide-lens camera captures the finest details, making it easy to capture every family gathering; Plus, Advanced Portrait Mode ups your photo game by automatically focusing on people and blurring the background.",
    "Long-lasting battery: Whether you're taking a video call on your commute, catching up on your favorite show, or connecting with friends and family, your super-fast-charging, long-lasting battery",
    "Powerful performance: Galaxy A23 5G's powerful processor keeps your day running smoothly; load your favorite apps at blazing speeds for non-stop fun and unlock new levels of gaming with 5G with virtually no lag",
    "Modern Design: A slim and beautiful design, with a compact camera, eliminates unnecessary bulk, plus a Gorilla Glass 5 display gives this sleek phone an extra level of toughness"
],
    Screen:"6.6-inch",
    Processor:"Snapdragon 695",
    OperatingSystem:"Android 12 OneUI 4.1",
    Storage:"RAM: 4GB / Internal storage: 128GB / SD: 1TB(Expandable)",
    Camera:"Rear: 50 Mpx / front: 8 Mpx ",
    Connectivity:"5G / Bluetoh / Wi-Fi",
    NFC:"NO",
    Batery:"5,000 mAh",
    Color:"Black"
    }, 
    cover_photo:[
    "https://images.samsung.com/is/image/samsung/p6pim/ar/sm-a235mzkearo/gallery/ar-galaxy-a23-sm-a235-sm-a235mzkearo-532206874?$1300_1038_PNG$",
    "https://images.samsung.com/is/image/samsung/p6pim/ar/sm-a235mzkearo/gallery/ar-galaxy-a23-sm-a235-sm-a235mzkearo-532206858?$684_547_PNG$",
    "https://images.samsung.com/is/image/samsung/p6pim/ar/sm-a235mzkearo/gallery/ar-galaxy-a23-sm-a235-sm-a235mzkearo-532206859?$684_547_PNG$"
],
    price: 279999,
    verified: true ,
    verify_code:'',
    available: 4,
},
{
    title:'Samsung Galaxy A04',
    brand:'Samsung',
    type: 'Phones',
    category: 'CELLPHONES AND TABLETS',
    description:{
    Text:["Long-lasting batteries: The Galaxy A04s smartphone has the power of 5,000 mAh that you can trust, you will be ready for any moment; and 7.75W charging gives you the power to shoot whenever you need it",
    "Reliable performance: The Galaxy A04s was designed with processing speed and reliable processing power in mind for easy downloading, streaming and sharing.",
    "Versatile camera experience: From photos of your culinary masterpieces and everyday adventures to family movies, the Galaxy A04s gives you a multi-lens camera to capture those impressive moments in life.",
    "Modern design: As one of our most affordable A-series phones, the Galaxy A04s is simple and durable; and its finger sensor on one side adds a personal touch to security"
], //Aca podrias acceder por keys [0],[1] para mostrar una descripcion por lista como por ejemplo puntos o numeros.
    Screen:"6,5-inch",
    Processor:"Snapdragon 695",
    OperatingSystem:"Android 12 One UI Core 4.1",
    Storage:"RAM:4GB  / Internal storage:64GB  / SD: 1TB(Expandable)",
    Camera:"Rear:50Mpx  / front:5Mpx",
    Connectivity:"5G / Bluetoh / Wi-Fi",
    NFC:"NO",
    Batery:" 5,000mAh",
    Color:"Deep green"
    }, 
    cover_photo:[
    "https://images.samsung.com/is/image/samsung/p6pim/ar/sm-a045mzgearo/gallery/ar-galaxy-a04-sm-a045-sm-a045mzgearo-534153841?$2052_1641_PNG$",
    "https://images.samsung.com/is/image/samsung/p6pim/ar/sm-a235mzkearo/gallery/ar-galaxy-a23-sm-a235-sm-a235mzkearo-532206858?$684_547_PNG$",
    "https://images.samsung.com/is/image/samsung/p6pim/ar/sm-a045mzgearo/gallery/ar-galaxy-a04-sm-a045-sm-a045mzgearo-534153827?$684_547_PNG$"
],
    price: 169999,
    verified: true ,
    verify_code:'',
    available: 3,
},
{
    title:'Samsung Galaxy S22',
    brand:'Samsung',
    type: 'Phones',
    category: 'CELLPHONES AND TABLETS',
    description:{
    Text:["Super Steady 8K Video: Record videos that rival how epic your life is with stunning 8K recording, the highest recording resolution available on a smartphone; Video capture is effortless thanks to autofocus video stabilization on the Galaxy S22",
    "Night Photography + Handheld Mode: Capture the night with bright, clear images and video, no matter the lighting with Night Mode; Portrait mode automatically detects and snaps to whatever you want front and center, making all your photos frame-worthy",
    "High-quality design and craftsmanship: With a sleek and eye-catching metal and glass glass design, we're setting a standard for smartphones; Featuring our strongest aluminum frame and the latest in Gorilla Glass, this phone is lightweight and durable to help withstand scratches and dings.",
    "Adaptive Color Contrast: Streaming on the go, working from your backyard, or binge-watching late into the night? Galaxy S22 adaptive display automatically optimizes color and brightness, outdoors and indoors"
], 
    Screen:"6,1-inch",
    Processor:"Samsung Exynos 2200 8 cores",
    OperatingSystem:"Android 12 One UI 4.1",
    Storage:"RAM: 8 GB / Internal storage:160GB  / SD: 1TB(Expandable)",
    Camera:"Rear:50Mpx  / front:10Mpx",
    Connectivity:"5G / Bluetoh / Wi-Fi",
    NFC:"YES",
    Batery:" 3590mAh",
    Color:"Pink"
    }, 
    cover_photo:[
    "https://m.media-amazon.com/images/I/61jAwWf6GYL._AC_SX679_.jpg",
    "https://m.media-amazon.com/images/I/41qPcTaKIwL._AC_SX679_.jpg",
    "https://m.media-amazon.com/images/I/51bpy9qzM9L._AC_SX679_.jpg"
],
    price: 329999 ,
    verified: true ,
    verify_code:'',
    available: 16,
},
{
    title:'Samsung Galaxy S20',
    brand:'Samsung',
    type: 'Phones',
    category: 'CELLPHONES AND TABLETS',
    description:{
    Text:["Professional Camera: The new Samsung Galaxy S20 FE mobile phone features high-powered professional lenses for beautiful portraits, stunning landscapes and sharp close-ups in any light with its 3x optical zoom",
    "5g power: Get next-level power for everything you love to do with Samsung Galaxy 5G; more sharing, more games, more experiences and never miss a beat",
    "Zoom de espacio de 30 aumentos: si quieres que tu teléfono celular se acerque desde lejos o aumente los detalles de algo cercano, el zoom de 30 x te da la potencia para acercarte",
    "Modo noche: captura imágenes nítidas y vídeo vibrante con modo nocturno y crea contenido de alta calidad en poca luz, no requiere flash con este smartphone"
], 
    Screen:"6,5-inch",
    Processor:"Exynos 990 Octa-Core",
    OperatingSystem:"Android 10.0",
    Storage:"RAM:8GB  / Internal storage: 256GB  / SD: 1TB(Expandable)",
    Camera:"Rear:64Mpx  / front:40Mpx",
    Connectivity:"5G / Bluetoh / Wi-Fi",
    NFC:"YES",
    Batery:" 3880mAh",
    Color:"Cloud red"
    }, 
    cover_photo:[
    "https://m.media-amazon.com/images/I/81Yz+3Qqq5L._AC_SX679_.jpg",
    "https://m.media-amazon.com/images/I/61XZl0Wi7hL._AC_SX679_.jpg",
    "https://m.media-amazon.com/images/I/61Jv7HNgcnL._AC_SX679_.jpg"
],
    price: 649999,
    verified: true ,
    verify_code:'',
    available: 2,
},
{
    title:'Samsung Galaxy Z Flip 3',
    brand:'Samsung',
    type: 'Phones',
    category: 'CELLPHONES AND TABLETS',
    description:{
    Text:["Flex Your Best Angle: With Flex mode, simply unfold your cell phone screen to your best angle for hands-free photos and video calls; choose what you want to capture, set it up, go back and take your best shot.",
    "A camera that stays put: Thanks to Samsung Galaxy Z Flip3's Super Steady feature, you can simply set it up and strike a pose for perfect selfies.",
    "Ultra compact, ultra awesome: Show off your style without compromise; With a compact design that folds out, you don't have to resize your screen for your favorite outfit.",
    "All your notifications, from head to toe: Control your cell phone, even when it's folded shut; Galaxy Z Flip3 notifies you on the screen on the outer cover, so you can see notifications and check the weather."
], 
    Screen:"6,7-inch",
    Processor:"Snapdragon 888",
    OperatingSystem:"Android 11.0",
    Storage:"RAM:8GB  / Internal storage:256 GB  / SD: 1TB(Expandable)",
    Camera:"Rear:12Mpx  / front:10Mpx",
    Connectivity:"5G / Bluetoh / Wi-Fi",
    NFC:"YES",
    Batery:" 3.300mAh",
    Color:"Black"
    }, 
    cover_photo:[
    "https://m.media-amazon.com/images/I/61bfdXk7nfL._AC_SX466_.jpg",
    "https://m.media-amazon.com/images/I/61Zw97IYF2L._AC_SY879_.jpg",
    "https://m.media-amazon.com/images/I/41CYpzvgDFL._AC_SY879_.jpg"
],
    price: 844999,
    verified: true ,
    verify_code:'',
    available: 3,
},
{
    title:'Samsung Galaxy Z Flip 4',
    brand:'Samsung',
    type: 'Phones',
    category: 'CELLPHONES AND TABLETS',
    description:{
    Text:["Capture on one screen, text on the other: Catch up with friends at the top and find the perfect image to post at the bottom; flexible mode makes doing two things at once a breeze",
    "Never miss a notification: Galaxy Z Flip4's customizable cover display lets you see just what you need while keeping your entire screen private; respond to texts, skip songs and change settings, all while keeping your cell phone comfortably compact",
    "POCKET-PERFECT SIZE: Ditch the bag and travel light; The compact, foldable design lets you say goodbye to bulk without sacrificing a big screen. slide your smartphone easily even in your front pocket",
    "Mantente sincronizado: mantente al día de las notificaciones o rastrea tu entrenamiento directamente en tu muñeca; el Galaxy Z Flip4 se sincroniza fácilmente con tu Galaxy Watch, y con una variedad de opciones de color, puedes obtener uno para que coincida con tu vibración"
], 
    Screen:"6,7-inch",
    Processor:"Snapdragon 8+ Gen 1",
    OperatingSystem:"Android 12.0",
    Storage:"RAM: 8GB / Internal storage: 256GB / SD: 1TB(Expandable)",
    Camera:"Rear: 12Mpx  / front: 12Mpx",
    Connectivity:"5G / Bluetoh / Wi-Fi",
    NFC:"YES",
    Batery:" 3.700mAh",
    Color:"Bora purple"
    }, 
    cover_photo:[
    "https://m.media-amazon.com/images/I/517PxzJ-fUL._AC_SX466_.jpg",
    "https://m.media-amazon.com/images/I/61jqaN-jq7L._AC_SX466_.jpg",
    "https://m.media-amazon.com/images/I/71tkKd28TfL._AC_SX466_.jpg"
],
    price: 99999 ,
        verified: true ,
    verify_code:'',
    available: 16,
},
{
    title:'Iphone 11',
    brand:'Apple',
    type: 'Phones',
    category: 'CELLPHONES AND TABLETS',
    description:{
    Text:["Enjoy true colors in photos, videos and games with the 6.1-inch Liquid Retina display",
    "Harness unprecedented performance in gaming, augmented reality, and photography with the A13 Bionic chip. Do much more without having to recharge your phone thanks to its long-lasting battery.",
    "Shoot 4K video and capture stunning portraits and stunning landscapes with the dual-camera system. Take great photos in low light thanks to Night mode.",
    "Don't worry if it gets wet, iPhone 11 is water resistant for up to 30 minutes to a maximum depth of 2 meters."
], 
    Screen:"6,06-inch",
    Processor:"A13 Bionic",
    OperatingSystem:"iOS 13",
    Storage:"RAM: 4GB  / Internal storage: 128GB",
    Camera:"Rear:12Mpx  / front:12Mpx",
    Connectivity:"5G / Bluetoh / Wi-Fi",
    NFC:"YES",
    Batery:" 3.110mAh",
    Color:"Space gray"
    }, 
    cover_photo:[
    "https://m.media-amazon.com/images/I/81LmL94PUvS._AC_SX679_.jpg",
    "https://m.media-amazon.com/images/I/41cBBax9BkS._AC_SX679_.jpg",
    "https://m.media-amazon.com/images/I/714B1PaGorL._AC_SX679_.jpg"
],
    price: 649999,
    verified: true ,
    verify_code:'',
    available: 12,
},
{
    title:'Iphone 13 PRO',
    brand:'Apple',
    type: 'Phones',
    category: 'CELLPHONES AND TABLETS',
    description:{
    Text:["Super Retina XDR display with ProMotion for faster, smoother response.",
    "New 12MP Pro camera system (telephoto, wide and ultra-wide), LiDAR scanner, 6x optical zoom range, macro photography, Photo Styles, ProRes2 video, Smart HDR 4, Night mode, Apple ProRAW and video recording 4K HDR video in Dolby Vision",
    "Cinema mode with shallow depth of field and automatic focus changes in your videos",
    "Don't worry if it gets wet, iPhone 13 PRO is water resistant for up to 30 minutes to a maximum depth of 2 meters."
], 
    Screen:"5,4-inch",
    Processor:"A15 Bionic",
    OperatingSystem:"iOS 15",
    Storage:"RAM: 6GB  / Internal storage: 512 GB",
    Camera:"Rear: 12Mpx  / front: 12Mpx",
    Connectivity:"5G / Bluetoh / Wi-Fi",
    NFC:"YES",
    Batery:" 3240mAh",
    Color:"Gold"
    }, 
    cover_photo:[
    "https://m.media-amazon.com/images/I/71k0zz+8paL._AC_SX679_.jpg",
    "https://m.media-amazon.com/images/I/61sDyXAepuL._AC_SX679_.jpg",
    "https://m.media-amazon.com/images/I/7161nwSVX9L._AC_SX679_.jpg"
],
    price: 1399999,
    verified: true ,
    verify_code:'',
    available: 4,
},
{
    title:'Iphone 14',
    brand:'Apple',
    type: 'Phones',
    category: 'CELLPHONES AND TABLETS',
    description:{
    Text:["6.1-inch Super Retina XDR always-on display with ProMotion technology",
    "Action mode for steady video, even handheld.",
    "Cinema mode now in 4K Dolby Vision at up to 30fps, Action mode for steady video, even handheld, and Crash Detection, a safety feature that calls for help when you can't.",
    "Don't worry if it gets wet, iPhone 14 is water resistant for up to 30 minutes to a maximum depth of 2 meters."
], 
    Screen:"6,1-inch",
    Processor:"A15 Bionic",
    OperatingSystem:"iOS 16",
    Storage:"RAM: 6GB / Internal storage: 128GB ",
    Camera:"Rear: 12Mpx  / front: 12Mpx",
    Connectivity:"5G / Bluetoh / Wi-Fi",
    NFC:"YES",
    Batery:" 3.279mAh",
    Color:"Space purple"
    }, 
    cover_photo:[
    "https://http2.mlstatic.com/D_NQ_NP_726811-MLM51559388195_092022-O.webp",
    "https://http2.mlstatic.com/D_NQ_NP_924351-MLM51559388197_092022-O.webp",
    "https://http2.mlstatic.com/D_NQ_NP_908818-MLM51559388192_092022-O.webp"
],
    price: 899999,
    verified: true ,
    verify_code:'',
    available: 1,
},
{
    title:'Xiaomi 12T Pro',
    brand:'Xiaomi',
    type: 'Phones',
    category: 'CELLPHONES AND TABLETS',
    description:{
    Text:["The Xiaomi 12 Pro is the true flagship of the Xiaomi 12 series. With a 6.73-inch LTPO AMOLED screen at 1440p resolution and 120Hz refresh rate, the Xiaomi 12 Pro is powered by a Qualcomm Snapdragon 8 Gen 1 processor",
    "On the back of the Xiaomi 12 Pro we find a set of three 50MP cameras, wide, ultrawide and telephoto, respectively, while the selfie camera is 32MP.",
    "A 4600 mAh battery with 120W fast charging and compatible with wireless charging powers the Xiaomi 12 Pro, which completes its features with stereo speakers optimized by Harman Kardon",
], 
    Screen:"6,67-inch",
    Processor:"Qualcomm Snapdragon 8+ Gen 1",
    OperatingSystem:"MIUI 13 based on Android 12",
    Storage:"RAM: 8 GB  / Internal storage: 256GB",
    Camera:"Rear: 50Mpx  / front: 32Mpx",
    Connectivity:"5G / Bluetoh / Wi-Fi",
    NFC:"YES",
    Batery:" 5.000mAh",
    Color:"Blue marine"
    }, 
    cover_photo:[
    "https://m.media-amazon.com/images/I/61nw70YJQhL._AC_SX679_.jpg",
    "https://m.media-amazon.com/images/I/41UNlRcdiaL._AC_SX679_.jpg",
    "https://m.media-amazon.com/images/I/51bXZXdQlgL._AC_SX679_.jpg"
],
    price: 499999,
    verified: true ,
    verify_code:'',
    available: 6,
},
{
    title:'Xiaomi Redmi Note 11',
    brand:'Xiaomi',
    type: 'Phones',
    category: 'CELLPHONES AND TABLETS',
    description:{
    Text:["Professional photography in your pocket Discover endless possibilities for your photos with the 4 main cameras of your team. Put your creativity to the test and play with lighting, different planes and effects to get great results.",
    "Amazing viewing experience Watch your favorite series and movies in the best definition through its 6.43 inch AMOLED screen.Enjoy brilliant colors and precise details in all your content.",
    "Higher performance Its 4 GB RAM memory allows your smartphone to work smoothly and without delays when performing different tasks, playing games or browsing",
    "Superior battery life Unplug! With the 5000 mAh super battery you will have energy for much longer to play, watch series or work without the need to recharge."
], 
    Screen:"6.43-inch",
    Processor:" Snapdragon 680 Octa-Core",
    OperatingSystem:"Android 11",
    Storage:"RAM: 4GB / Internal storage: 128 GB ",
    Camera:"Rear: 50Mpx  / front: 13Mpx",
    Connectivity:"4G / Bluetoh / Wi-Fi",
    NFC:"NO",
    Batery:" 5000mAh",
    Color:"Gray"
    }, 
    cover_photo:[
    "https://m.media-amazon.com/images/I/61mHMiZyW2L._AC_SX679_.jpg",
    "https://m.media-amazon.com/images/I/41F0O3dOn+L._AC_SX679_.jpg",
    "https://m.media-amazon.com/images/I/413Eb+YF-UL._AC_SX679_.jpg"
],
    price: 179999,
    verified: true ,
    verify_code:'',
    available: 12,
},
{
    title:'Xiaomi POCO F4',
    brand:'Xiaomi',
    type: 'Phones',
    category: 'CELLPHONES AND TABLETS',
    description:{
    Text:["Professional photography in your pocket Discover endless possibilities for your photos with the 3 main cameras of your team. Put your creativity to the test and play with lighting, different planes and effects to get great results.",
    "Incredible visual experience Watch your favorite series and movies in the best definition through its 6.67 inch AMOLED screen. Enjoy brilliant colors and precise details in all your content.",
    "capacity and efficiency With its powerful processor and 8 GB RAM, your device will achieve high performance with high speed content transmission and will run multiple applications at the same time without delays.",
    "Superior battery life Unplug! With the 4500 mAh super battery you will have energy for much longer to play, watch series or work without the need to recharge."
], 
    Screen:"6,67-inch",
    Processor:"Snapdragon 870 5G Octa-Core",
    OperatingSystem:"MIUI 13 + POCO Launcher Android 12",
    Storage:"RAM: 8GB / Internal storage: 256GB / SD: 1TB(Expandable)",
    Camera:"Rear: 64Mpx  / front: 20Mpx",
    Connectivity:"5G / Bluetoh / Wi-Fi",
    NFC:"NO",
    Batery:" 4500mAh",
    Color:"Nebula green"
    }, 
    cover_photo:[
    "https://m.media-amazon.com/images/I/61bs38Hj6uL._AC_SX679_.jpg",
    "https://m.media-amazon.com/images/I/519RSDhDQPL._AC_SX679_.jpg",
    "https://m.media-amazon.com/images/I/41wl4buY7ML._AC_SX679_.jpg"
],
    price: 399999,
    verified: true ,
    verify_code:'',
    available: 12,
},
{
    title:'Samsung Galaxy Tab A8',
    brand:'Samsung',
    type: 'Tabs',
    category: 'CELLPHONES AND TABLETS',
    description:{
    Text:["Enjoy an incredible multimedia experience with the 10.5-inch Samsung Galaxy Tab A A8 Tablet with 64GB of storage in elegant dark gray color. With its powerful 2GHz Octa-Core processor and 4GB of RAM, you'll be able to browse, watch movies and play games without interruption. The high-resolution multi-touch screen (1920x1200 px) gives you sharp images and vibrant colors, while the Android operating system gives you access to thousands of applications and features.",
    "Capture your favorite moments with the 8MP rear camera and make video calls with the 5MP front camera. Face unlock gives you security and convenience when accessing your tablet. And if you need more space, you can expand the memory up to 1TB with a microSD card.",
    "With sensors such as accelerometer, gyroscope, geomagnetic sensor, hall sensor and ambient light sensor, the Samsung Galaxy Tab A A8 adapts to your needs and offers you a complete user experience. Don't wait any longer to enjoy everything this tablet has to offer you.",
    "Wi-Fi, Bluetooth 5 and USB 2.0 connectivity let you easily share files and connect to other devices. In addition, it has GPS so you can use map and navigation applications. The 7040 mAh battery guarantees hours of use without worrying about recharging."
], 
    Screen:"10,5-inch",
    Processor:"Octa core 8",
    OperatingSystem:"Android One UI 3.1",
    Storage:"RAM: 4GB  / Internal storage: 64GB / MicroSD: 1TB(Expandable)",
    Camera:"Rear: 8Mpx  / front: 5Mpx",
    Connectivity:"Bluetoh / Wi-Fi",
    NFC:"NO",
    Batery:" 7040mAh",
    Color:"Dark gray"
    }, 
    cover_photo:[
    "https://http2.mlstatic.com/D_NQ_NP_769517-MLU69480556546_052023-O.webp",
    "https://http2.mlstatic.com/D_NQ_NP_715518-MLA52231136904_112022-O.webp",
    "https://http2.mlstatic.com/D_NQ_NP_975447-MLA52231136906_112022-O.webp",
    
],
    price: 229999,
    verified: true ,
    verify_code:'',
    available: 16,
},
{
    title:'Samsung Galaxy Tab S6',
    brand:'Samsung',
    type: 'Tabs',
    category: 'CELLPHONES AND TABLETS',
    description:{
    Text:["Enjoy an unbeatable experience with the Samsung Galaxy Tab S S6 Lite Tablet, perfect for your entertainment and productivity needs. Its elegant design in oxford gray color and 10.4-inch screen allow you to enjoy your favorite movies, series and games with amazing image quality. Thanks to its Android 12.0 operating system and its powerful Octa-Core Qualcomm Kyro 465 processor, you can run multiple applications smoothly and quickly.",
    "With 4GB of RAM and 64GB of capacity, you'll have enough space to store your files, photos, and videos. Also, you can expand its capacity up to 1TB with a memory card. Wi-Fi, Bluetooth and GPS connectivity will keep you always connected and located at all times",
    "Capture your best moments with its 8 Mpx rear camera and make clear video calls with its 5 Mpx front camera. Face unlock gives you security and convenience when accessing your device. The 7040 mAh battery guarantees up to 14-15 hours of continuous use, so you can enjoy your activities without worrying about charging.",
    "The Samsung Galaxy Tab S S6 Lite is the ideal companion for your daily tasks, studies or moments of leisure. Do not wait any longer and take with you this incredible tablet that offers you the best in technology and performance."
], 
    Screen:"10,4-inch",
    Processor:"Qualcomm Adreno 618",
    OperatingSystem:"Android 12",
    Storage:"RAM: 4GB / Internal storage: 64GB / SD: 1TB(Expandable)",
    Camera:"Rear: 8Mpx  / front: 5Mpx",
    Connectivity:"Bluetoh / Wi-Fi",
    NFC:"NO",
    Batery:" 7040mAh",
    Color:"Oxford gray"
    }, 
    cover_photo:[
    "https://http2.mlstatic.com/D_NQ_NP_792285-MLA53362598654_012023-O.webp",
    "https://http2.mlstatic.com/D_NQ_NP_854451-MLA53362598656_012023-O.webp",
    "https://http2.mlstatic.com/D_NQ_NP_935715-MLA53362587943_012023-O.webp"
],
    price: 249999,
    verified: true ,
    verify_code:'',
    available: 5,
},
{
    title:'Samsung Galaxy Tab A7 Lite',
    brand:'Samsung',
    type: 'Tabs',
    category: 'CELLPHONES AND TABLETS',
    description:{
    Text:["This Samsung tablet is the ideal companion, with plenty of capacity for each of your activities. The slim, compact and portable design, easy to hold in one hand, makes it a perfect combination of performance and versatility.",
    "Transferring, synchronizing and accessing your devices as many times as you want is now possible. Its wi-fi, wi-fi direct, bluetooth, usb-c connections allow you to maximize its functions.",
    "Capture all your moments instantly Thanks to its cameras, with 8 Mpx and 2 Mpx resolutions, you can make video calls or take photos anytime, anywhere, with excellent image quality. Sharpness, brightness and vibrant colors will make your experiences optimally reflected.",
    ], 
    Screen:"8,7-inch",
    Processor:"Octa-Core Cortex-A53",
    OperatingSystem:"Android 11",
    Storage:"RAM: 3GB  / Internal storage: 32GB / SD: 1TB(Expandable)",
    Camera:"Rear: 8Mpx  / front: 5Mpx",
    Connectivity:"5G / Bluetoh / Wi-Fi",
    NFC:"NO",
    Batery:" 5100mAh",
    Color:"Silver"
    }, 
    cover_photo:[
    "https://http2.mlstatic.com/D_NQ_NP_639004-MLU69482268920_052023-O.webp",
    "https://http2.mlstatic.com/D_NQ_NP_781852-MLU69482229834_052023-O.webp",
    "https://http2.mlstatic.com/D_NQ_NP_785045-MLU69762392813_062023-O.webp"
],
    price: 219999,
    verified: true ,
    verify_code:'',
    available: 16,
},
{
    title:'iPad mini (6ª generación)',
    brand:'Apple',
    type: 'Tabs',
    category: 'CELLPHONES AND TABLETS',
    description:{
    Text:["The new iPad mini features an 8.3-inch Liquid Retina display with an edge-to-edge design and the powerful A15 Bionic chip with Neural Engine. In addition, it has a 12 MP ultra-wide-angle front camera with Center Framing and USB-C connectivity.",
    "Take notes, annotate documents, and bring your best ideas to life with Apple Pencil (2nd generation), which attaches magnetically to iPad mini and charges wirelessly.",
    ], 
    Screen:"8,3-inch",
    Processor:"A15 Bionic",
    OperatingSystem:"iPadOS 15",
    Storage:"RAM: 4GB  / Internal storage: 64GB",
    Camera:"Rear: 12Mpx  / front: 10Mpx",
    Connectivity:"Bluetoh / Wi-Fi",
    NFC:"NO",
    Batery:" 6000mAh",
    Color:"Space gray"
    }, 
    cover_photo:[
    "https://http2.mlstatic.com/D_NQ_NP_972576-MLU69482475786_052023-O.webp",
    "https://http2.mlstatic.com/D_NQ_NP_874989-MLU69494751787_052023-O.webp",
    "https://http2.mlstatic.com/D_NQ_NP_752447-MLU69482273876_052023-O.webp"
],
    price: 431999,
    verified: true ,
    verify_code:'',
    available: 5,
},
{
    title:' iPad Air (5ª generación)',
    brand:'Apple',
    type: 'Tabs',
    category: 'CELLPHONES AND TABLETS',
    description:{
    Text:["iPad Air has a stunning 10.9-inch Liquid Retina display and Apple's super-powerful M1 chip so you can unleash your creativity and play without limits wherever you go. It comes with Touch ID, advanced cameras, USB-C and Wi-Fi 6 connections. In addition, it is compatible with the Magic Keyboard and Apple Pencil (2nd generation).",
    ], 
    Screen:"10,9-inch",
    Processor:"Octa-Core",
    OperatingSystem:"iPadOS 15",
    Storage:"RAM: 8GB / Internal storage: 256GB",
    Camera:"Rear: 12Mpx  / front: 12Mpx",
    Connectivity:"Bluetoh / Wi-Fi",
    NFC:"NO",
    Batery:" 7729mAh",
    Color:"Blue"
    }, 
    cover_photo:[
    "https://http2.mlstatic.com/D_NQ_NP_707342-MLA52222796949_102022-O.webp",
    "https://http2.mlstatic.com/D_NQ_NP_981611-MLA52222798940_102022-O.webp",
    "https://http2.mlstatic.com/D_NQ_NP_883535-MLA52222798941_102022-O.webp"
],
    price: 519999,
    verified: true ,
    verify_code:'',
    available: 11,
},
{
    title:' iPad 10 Gen 10.9',
    brand:'Apple',
    type: 'Tabs',
    category: 'CELLPHONES AND TABLETS',
    description:{
    Text:["This product combines the power and capability of a computer with the versatility and ease of use that only an iPad can provide. Multitasking, such as editing documents while searching for information on the Internet or taking a selfie, is extremely easy. As if this were not enough, it also offers the possibility of downloading from the App Store hundreds of applications created for painting, drawing, listening to music and much more!",
], 
    Screen:"10,9-inch",
    Processor:"A14 Bionic",
    OperatingSystem:"Ipad OS15",
    Storage:"RAM: 6GB/ Internal storage: 64GB",
    Camera:"Rear: 12Mpx  / front: 12Mpx",
    Connectivity:"Bluetoh / Wi-Fi",
    NFC:"NO",
    Batery:" 7730mAh",
    Color:"Silver"
    }, 
    cover_photo:[
    "https://http2.mlstatic.com/D_NQ_NP_618299-MLA52880503434_122022-O.webp",
    "https://http2.mlstatic.com/D_NQ_NP_944048-MLA52622269475_112022-O.webp",
    "https://http2.mlstatic.com/D_NQ_NP_992503-MLA52178284465_102022-O.webp"
],
    price: 449999,
    verified: true ,
    verify_code:'',
    available: 13,
},
{
    title:'Lenovo Tab P11 ',
    brand:'Lenovo',
    type: 'Tabs',
    category: 'CELLPHONES AND TABLETS',
    description:{
    Text:["This tablet is the perfect combination of performance and versatility, ideal to accompany each of your activities.",
    "Transferring, synchronizing and accessing your devices as many times as you want is now possible. Its pogo pin, usb-c, wi-fi, wi-fi direct, wi-fi display, bluetooth, otg connections allow you to maximize its functions.",
    "Capture all your moments instantly Thanks to its cameras, with 13 Mpx and 8 Mpx resolutions, you can make video calls or take photos anytime, anywhere, with excellent image quality. Sharpness, brightness and vibrant colors will make your experiences optimally reflected.",
    ], 
    Screen:"11-inch",
    Processor:"Octa-Core Qualcomm Kryo 260",
    OperatingSystem:"Android 10",
    Storage:"RAM: 4GB / Internal storage: 64GB / SD: 1TB(Expandable)",
    Camera:"Rear: 13Mpx  / front: 5Mpx",
    Connectivity:"Bluetoh / Wi-Fi",
    NFC:"NO",
    Batery:"7500mAh",
    Color:"Gray"
    }, 
    cover_photo:[
    "https://http2.mlstatic.com/D_NQ_NP_856313-MLU69494750749_052023-O.webp",
    "https://http2.mlstatic.com/D_NQ_NP_648185-MLU69494750753_052023-O.webp",
    "https://http2.mlstatic.com/D_NQ_NP_669544-MLU69494909745_052023-O.webp"
],
    price: 209999,
    verified: true ,
    verify_code:'',
    available: 15,
},
{
    title:'Xiaomi Redmi Pad',
    brand:'Xiaomi',
    type: 'Tabs',
    category: 'CELLPHONES AND TABLETS',
    description:{
    Text:["This tablet is the perfect combination of performance and versatility, ideal to accompany each of your activities.",
    "Transferring, synchronizing and accessing your devices as many times as you want is now possible. Its bluetooth, wi-fi, usb-c, and wi-fi direct connections allow you to maximize its functions.",
    "Capture all your moments instantly Thanks to its cameras, with 8 Mpx and 8 Mpx resolutions, you can make video calls or take photos anytime, anywhere, with excellent image quality. Sharpness, brightness and vibrant colors will make your experiences optimally reflected.",
    ], 
    Screen:"10,61-inch",
    Processor:"Dual-Core Cortex-A76",
    OperatingSystem:"Android 12",
    Storage:"RAM: 6GB / Internal storage: 128GB / SD: 1TB(Expandable)",
    Camera:"Rear: 8Mpx  / front: 8Mpx",
    Connectivity:"Bluetoh / Wi-Fi",
    NFC:"NO",
    Batery:" 8000mAh",
    Color:"Graphite gray"
    }, 
    cover_photo:[
    "https://http2.mlstatic.com/D_NQ_NP_970963-MLA52579617825_112022-O.webp",
    "https://http2.mlstatic.com/D_NQ_NP_993286-MLA52579644086_112022-O.webp",
    "https://http2.mlstatic.com/D_NQ_NP_857769-MLA52579644081_112022-O.webp"
],
    price: 207999,
    verified: true ,
    verify_code:'',
    available: 5,
},
]

Products.insertMany(products)
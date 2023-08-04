import Gamers from "../Gamers.js"
import 'dotenv/config.js'
import '../../config/db.js'

let gamers = [{
    title: "PC Core i3-10100F E670 8|256|19|GT210",
    cover_photo: "",
    description: {
        main: `Ensamblados con componentes de las mejores marcas para ofrecer unas computadoras de primera calidad y garantizar el máximo rendimiento en el desarrollo de todos tus proyectos.`,
        features: {
            case: "Antryx elegant 670",
            monitor: `19" Samsung LS19A330NHLXPE HD HDMi/VGA`,
            processor: "Intel Core i3-10100F",
            motherboard: "Gigabite H510M H VSR LGA1200 mATX",
            graphics_card: "Nvidia Geforce GT 210 1GB MSI 64-bit GDDR3",
            peripherals: "Keyboard + Mouse Logitech MK120 USB",
            power_supply: "350W Power",
            storage: "SSD de 256GB",
            ram: "8GB de RAM",
            stabilizer: "900VA Forza FVR-902 8-Tomas",
        },
        price: "350",
        verified: "",
        verify_code: "",
        available: "",
    }
}, {
    title: "PC Core i5-10400F MX360 16|500|21.5|1660",
    cover_photo: "",
    description: {
        main: `Ensamblados con componentes de las mejores marcas para ofrecer unas computadoras de primera calidad y garantizar el máximo rendimiento en el desarrollo de todos tus proyectos.`,
        features: {
            case: "Cougar MX360 RGB",
            monitor: `Asus VP228HE 21.5" FHD HDMi/VGA`,
            processor: "Intel Core i5-10400F",
            motherboard: "MSI B560M-PRO-E",
            graphics_card: "Geforce GTX 1660 6GB",
            peripherals: "Keyboard + Mouse MSI Adventure USB",
            storage: "SSD M.2 PCLE 500GB",
            ram: "DDR4 16GB 3200MHZ de RAM",
            power_supply: "550W 80Plus Bronze",
            stabilizer: "900VA Forza FVR-902 8-Tomas",
        },
        price: "480",
        verified: "",
        verify_code: "",
        available: "",
    }
}, {
    title: "PC Core i7-11700F CMP320 16|1|24|3060",
    cover_photo: "",
    description: {
        main: `Ensamblados con componentes de las mejores marcas para ofrecer unas computadoras de primera calidad y garantizar el máximo rendimiento en el desarrollo de todos tus proyectos.`,
        features: {
            case: "Cooler Master CMP 320",
            monitor: `LG 24" 24Gn60R-B FHD HDMi/VGA`,
            processor: "Intel Core i7-11700F",
            motherboard: "Gigabyte Z590I Aorus Ultra",
            graphics_card: "Geforce RTX 3060 8GB",
            peripherals: "Keyboard + Mouse Cooler Master MS111",
            storage: "SSD M.2 PCLE 1TB",
            ram: "DDR4 16GB 3200MHZ de RAM",
            power_supply: "550W 80Plus Bronze",
            stabilizer: "1000VA Forza FVR-1002 8-Tomas",
        },
        price: "800",
        verified: "",
        verify_code: "",
        available: "",
    }
}, {
    title: "PC Core i9-11900KF AC300G 16|1|27|3070",
    cover_photo: "",
    description: {
        main: `Ensamblados con componentes de las mejores marcas para ofrecer unas computadoras de primera calidad y garantizar el máximo rendimiento en el desarrollo de todos tus proyectos.`,
        features: {
            case: "Gigabyte Aorus AC300G",
            monitor: `G27QC 2K 27" QHB CURVO HDMi/VGA`,
            processor: "Intel Core i9-11900KF",
            motherboard: "Gigabyte Z590 Aorus Ultra",
            graphics_card: "Geforce RTX3070 8GB",
            peripherals: "Keyboard + Mouse Corsair K55 RGB ",
            storage: "SSD M.2 PCLE 1TB",
            ram: "DDR4 16GB 3200MHZ de RAM",
            power_supply: "650W 80Plus Glod",
            stabilizer: "1000VA Forza FVR-1002 8-Tomas",
        },
        price: "1300",
        verified: "",
        verify_code: "",
        available: "",
    }
}, {
    title: "PC Ryzen 3 4100 GEMINE M 16|500|24|1630",
    cover_photo: "",
    description: {
        main: `Ensamblados con componentes de las mejores marcas para ofrecer unas computadoras de primera calidad y garantizar el máximo rendimiento en el desarrollo de todos tus proyectos.`,
        features: {
            case: "Cougar Gemini M",
            monitor: `Samsung C360 FHD Curvo HDMi/VGA`,
            processor: "AMD Ryzen 3 4100",
            motherboard: "MSI A520M-A PRO",
            graphics_card: "Geforce GTX1630 4GB",
            peripherals: "Keyboard + Mouse Genius GX USB",
            storage: "SSD M.2 PCLE 500TB",
            ram: "DDR4 16GB 3200MHZ de RAM",
            power_supply: "550W Certificado",
            stabilizer: "900VA Forza FVR-1002 8-Tomas",
        },
        price: "300",
        verified: "",
        verify_code: "",
        available: "",
    }
}, {
    title: "PC Ryzen 5 3600 MK RINO DESTROYER 16|500|22|1650",
    cover_photo: "",
    description: {
        main: `Ensamblados con componentes de las mejores marcas para ofrecer unas computadoras de primera calidad y garantizar el máximo rendimiento en el desarrollo de todos tus proyectos.`,
        features: {
            case: "Destroyer MESH",
            monitor: `Samsung LS22A336 22" FHD HDMi/VGA`,
            processor: "AMD Ryzen 5 3600",
            motherboard: "ASUS Prime A520M-a II",
            graphics_card: "Geforce GTX 1650 4GB",
            peripherals: "Keyboard + Mouse Gaming Antryx GC-2500 USB",
            storage: "SSD M.2 PCLE 500TB",
            ram: "DDR4 16GB de RAM",
            power_supply: "500W Certificado",
            stabilizer: "1000VA Forza FVR-1002 8-Tomas",
        },
        price: "700",
        verified: "",
        verify_code: "",
        available: "",
    }
}, {
    title: "PC WS Ryzen 7 5800X B600L 32|1|26|W6400",
    cover_photo: "",
    description: {
        main: `Ensamblados con componentes de las mejores marcas para ofrecer unas computadoras de primera calidad y garantizar el máximo rendimiento en el desarrollo de todos tus proyectos.`,
        features: {
            case: "Case BOX MB600L V2",
            monitor: `LG 26" FHD HDMi/VGA`,
            processor: "AMD Ryzen 7 5800X 3.8GHZ/32MB 8C AM4",
            motherboard: "ASUS ROG STRIX B550-A",
            graphics_card: "AMD Radeon Pro W6400 4Gb GDDR6",
            peripherals: "Keyboard + Mouse Logitech MK345 USB",
            storage: "SSD M.2 PCLE 1TB",
            ram: "DDR4 32GB de RAM",
            power_supply: "550W 80Plus Bronze",
            stabilizer: "1000VA Forza FVR-1002 8-Tomas",
        },
        price: "950",
        verified: "",
        verify_code: "",
        available: "",
    }
}, {
    title: "PC Ryzen 9 5900X  MK RINO G111R 32|S1T|27|3080Ti",
    cover_photo: "",
    description: {
        main: `Ensamblados con componentes de las mejores marcas para ofrecer unas computadoras de primera calidad y garantizar el máximo rendimiento en el desarrollo de todos tus proyectos.`,
        features: {
            case: "MSI MPG Gungnir 111R",
            monitor: `MSI OPTIX MAG270VC2  27" FHD HDMi/VGA`,
            processor: "AMD Ryzen 9 5900x",
            motherboard: "MSI MPG B550 Gaming Plus",
            graphics_card: "Geforce RTX 3080 Ti 12GB",
            peripherals: "Keyboard + Mouse Gaming MSI Clutch GM08 USB",
            storage: "SSD M.2 PCLE 1TB",
            ram: "DDR4 32GB 3200 DUAL",
            power_supply: "850W 80Plus Glod",
            stabilizer: "1000VA Forza FVR-1002 8-Tomas",
        },
        price: "1500",
        verified: "",
        verify_code: "",
        available: "",
    }
}, {
    title: "Silla Gamer QTE GC03 Purple",
    cover_photo: "",
    description: `Almohadillas superior desmontables. Base de acero cromado de 5 estrellas con ruedas. apoyabrazos elevados. Rotación-giro de 360 grados. Diseño ergonomico.  Acabado de cuero sintético completo. Materiales: Cuero Pu / Pvc / Metal / Nylon`,
    price: "80",
    verified: "",
    verify_code: "",
    available: "",
}, {
    title: "Silla Gamer con Masajeador",
    cover_photo: "",
    description: `Almohadillas superior e inferior desmontables con masajeador usb. Base de acero cromado de 5 estrellas con ruedas. Altura ajustable y apoyabrazos elevados. Mecanismo de bloqueo de inclinacion 90-150 grados. Rotación-giro de 360 grados. Diseño ergonomico.  Acabado de cuero sintético completo. Materiales: Cuero Pu / Pvc / Metal / Nylon.`,
    price: "140",
    verified: "",
    verify_code: "",
    available: "",
}, {
    title: "Silla Gamer Reclinable Ergonómica Constrictor Monensis SIC-2001",
    cover_photo: "",
    description: `Ensamblados con componentes de las mejores marcas para ofrecer unas computadoras de primera calidad y garantizar el máximo rendimiento en el desarrollo de todos tus proyectos.`,
    price: "130",
    verified: "",
    verify_code: "",
    available: "",
}, {
    title: "Silla gamer Apolo",
    cover_photo: "",
    description: `Almohadillas superior e inferior desmontables. Base de acero cromado de 5 estrellas con ruedas. apoyabrazos elevados, apoyapies, reclina 90°, ajuste de altura. Rotación-giro de 360 grados. Diseño ergonomico.  Acabado de cuero sintético completo.`,
    price: "140",
    verified: "",
    verify_code: "",
    available: "",
}, {
    title: "MOUSE Gaming BT|Wireless RAZER NAGA PRO RGB 20K",
    cover_photo: "",
    description: `
    Este mouse modular inalámbrico para juegos viene con 3 tipos de placas laterales que encajan magnéticamente: diseños de 12, 6 y 2 botones especialmente diseñados para ayudarlo a adaptarse a diferentes géneros de juegos. Optimice su juego con estas configuraciones de botones recomendadas para cada placa lateral.`,
    price: "80",
    verified: "",
    verify_code: "",
    available: "",
}, {
    title: "MOUSE BT|Wireless LOGITECH MX ERGO TRACKBALL",
    cover_photo: "",
    description: `
	El trackball más avanzado de Logitech para fieles entusiastas y usuarios que busquen alternativas a ratones y touchpads. Requiere un 20% menos de esfuerzo muscular que un ratón estándar.`,
    price: "120",
    verified: "",
    verify_code: "",
    available: "",
}]

Gamers.insertMany(gamers)
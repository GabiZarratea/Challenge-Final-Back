import General from '../General.js'
import 'dotenv/config.js'
import '../../config/db.js'

let general = [{
    title: "CELULARES/TABLETS",
},{
    title: "NOTEBOOKS/DESKTOP",
},{
    title: "TV, AUDIO Y VIDEO",
},{
    title: "ELECTRODOMESTICOS",
},{
    title: "GAMERS",
}]

General.insertMany(general)

import { Schema, model } from 'mongoose'

let collection = 'gamers'

let schema = new Schema(
    {
        title: { type: String, required: true },
        description: { 
            main: { type: String, required: true },
            features: {
                case: String,
                monitor: String,
                processor: String,
                motherboard: String,
                graphics_card: String,
                peripherals: String,
                power_supply: String,
                storage: String,
                ram: String,
                stabilizer: String,
            },
        },
        price: { type: String, required: true },
        verified: { type: String, required: true },
        verify_code: { type: String, required: true },
        available: { type: String, required: true },
        cover_photo: { type: String, required: true },
    },
    {
        timestamps: true,
    }
)

let Gamers = model(collection, schema)
export default Gamers
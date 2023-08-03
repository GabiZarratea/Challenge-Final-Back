import { Schema,model } from 'mongoose'

let collection = 'general'
let schema = new Schema({
    title: { type: String, required: true }
},{
    timestamps: true
})

let General = model(collection,schema)
export default General
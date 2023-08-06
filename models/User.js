import { Schema,model } from 'mongoose'

let collection = 'users'
let schema = new Schema({
    email: { type:String, required:true },
    password: { type:String, required:true },
    photo: { type:String, required:true },
    location: { type: String, required: true },
    role: { type:Number, required:true, default: 0 },
    online: { type:Boolean },
    verified: { type:Boolean, required:true },
    verify_code: { type:String, required:true }
},{
    timestamps:true
})

let User = model(collection, schema)
export default User
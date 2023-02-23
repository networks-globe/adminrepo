const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        default:""
    },
    email: {
        type: String,
        default:""
    },
    phone: {
        type: String,
        default:""
    },
    password: {
        type: String,
        default:""
    },
    role: {
        type: String,
        default: "User"
    },
    otp: {
        type: Number,
        default: 8765434578987654
    },
    ability: [],
    createDate:{
        type:String,
        default:""
    },
    updateDate:{
        type:String,
        defaul:""
    },
    status:{
        type:String,
        default:"Active"
    }
})
const User = new mongoose.model("User", UserSchema)
module.exports = User
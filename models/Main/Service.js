const mongoose = require("mongoose")

const ServiceSchema = new mongoose.Schema({
    name:{
        type:String
    },
    image: {
        type: String
    },
    description: {
        type: String,
        default: ""
    },
    sortOrder: {
        type: Number,
        default: 0
    },
    addByName: {
        type: String,
        default:""
    },
    addByRole: {
        type: String,
        default:""
    },
    addById: {
        type: String,
        default:""
    },
    createDate: {
        type: String,
        default:""
    },
    updateByName: {
        type: String,
        default:""
    },
    updateByRole: {
        type: String,
        default:""
    },
    updateById: {
        type: String,
        default:""
    },
    updateDate: {
        type: String,
        default:""
    },
    status: {
        type: String,
        default: "Active"
    },
    remark: {
        type: String,
        default: ""
    }
})
const Service = new mongoose.model("Service", ServiceSchema)
module.exports = Service
const mongoose = require("mongoose")

const ConfigrationSchema = new mongoose.Schema({
    mailHr: {
        type: String,
        default:""
    },
    mailMain:{
        type:String,
        default:""
    },
    mailCertificate: {
        type: String,
        default:""
    },
    mailEnquiry: {
        type: String,
        default:""
    },
    mailPlacement: {
        type: String,
        default:""
    },
    mailSchedule: {
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
    }
})
const Configration = new mongoose.model("Configration", ConfigrationSchema)
module.exports = Configration
const mongoose = require("mongoose")

const UpcominBatchSchema = new mongoose.Schema({
    course: {
        type: String
    },
    center: {
        type: String
    },
    trainer: {
        type: String
    },
    startDate: {
        type: String
    },
    startTime: {
        type: String
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
const UpcominBatch = new mongoose.model("UpcomingBatch", UpcominBatchSchema)
module.exports = UpcominBatch
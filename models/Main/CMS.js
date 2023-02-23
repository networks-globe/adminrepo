const mongoose = require("mongoose")

const CMSSchema = new mongoose.Schema({
    seourl: {
        type: String,
        default:""
    },
    logo:{
        type:String,
        defalut:""
    },
    content: {
        type: String,
        default:""
    },
    seotitle: {
        type: String,
        default:""
    },
    metakeywords: {
        type: String,
        default:""
    },
    metadescription: {
        type: String,
        default:""
    },
    metasection: {
        type: String,
        default:""
    },
    headcss: {
        type: String,
        default:""
    },
    headjs: {
        type: String,
        default:""
    },
    footercss: {
        type: String,
        default:""
    },
    footerjs: {
        type: String,
        default:""
    },
    createDate:{
        type:String,
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
const CMS = new mongoose.model("CMS", CMSSchema)
module.exports = CMS
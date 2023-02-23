const express = require("express")
const mongoose = require("mongoose")

const TechnologySchema = new mongoose.Schema({
    name: {
        type: String
    },
    logo: {
        type: String
    },
    sortOrder:{ 
        type: Number
    },
    seourl: {
        type: String,
        default:""
    },
    metatitle: {
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
    footercss: {
        type: String,
        default:""
    },
    headjs: {
        type: String,
        default:""
    },
    footerjs: {
        type: String,
        default:""
    },
    addByName: {
        type: String
    },
    addByRole: {
        type: String
    },
    addById: {
        type: String
    },
    createdate: {
        type: String
    },
    updateByName: {
        type: String
    },
    updateByRole: {
        type: String
    },
    updateById: {
        type: String
    },
    updatedate: {
        type: String
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
const Technology = new mongoose.model("Technology", TechnologySchema)
module.exports = Technology
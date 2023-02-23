const express = require("express")
const mongoose = require("mongoose")

const TutorialDataSchema = new mongoose.Schema({
    technology: {
        type: String
    },
    topic: {
        type: String
    },
    content:{ 
        type: String
    },
    sortOrder:{ 
        type: String
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
    createDate: {
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
    updateDate: {
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
const TutorialData = new mongoose.model("TutorialData", TutorialDataSchema)
module.exports = TutorialData
const mongoose = require("mongoose")

const NewsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    }
})

const NewsModel = mongoose.model("news", NewsSchema)
module.exports = NewsModel
const mongoose = require("mongoose")

const OvcakSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: {
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

const OvcakModel = mongoose.model("ovcak", OvcakSchema)
module.exports = OvcakModel
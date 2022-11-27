const mongoose = require("mongoose")

const BoxerSchema = new mongoose.Schema({
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

const BoxerModel = mongoose.model("boxer", BoxerSchema)
module.exports = BoxerModel
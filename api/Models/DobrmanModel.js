const mongoose = require("mongoose")

const DobrmanSchema = new mongoose.Schema({
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

const DobrmanModel = mongoose.model("dobrman", DobrmanSchema)
module.exports = DobrmanModel
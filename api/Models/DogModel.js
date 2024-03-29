const mongoose = require("mongoose")

const DogSchema = new mongoose.Schema({
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

const DogModel = mongoose.model("dogs", DogSchema)
module.exports = DogModel
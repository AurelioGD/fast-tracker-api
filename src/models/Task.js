const mongoose = require("mongoose")

const schema = { 
    description: String,
    timeTask: Number,
    timeCreated: Number
}

const Task = mongoose.model('Task', schema);

module.exports = Task
const mongoose = require("mongoose")

const Task = mongoose.model('Task', { name: String });

module.exports = Task
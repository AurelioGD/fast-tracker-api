const express = require("express")
const mongoose = require("mongoose")
const SERVER_CONSTS = require("./config/db")

const { MONGO_URI } = SERVER_CONSTS

const app = express()

const taskRoutes = require("./endpoints/task/taskRoutes")
console.log({MONGO_URI})
mongoose.connect(MONGO_URI)

app.use(taskRoutes)

module.exports = app
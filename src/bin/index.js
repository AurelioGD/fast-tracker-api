require('dotenv').config()

const app = require("../app")
const SERVER_CONSTS = require("../config/server")

const {PORT} = SERVER_CONSTS

const server = app.listen(PORT,() =>{
    console.log(`Fast tracker api running on port ${PORT}`)
})

module.exports = server
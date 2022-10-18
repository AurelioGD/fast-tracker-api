const app = require("../app")
const SERVER_CONSTS = require("../consts/server")

const {PORT} = SERVER_CONSTS

const server = app.listen(PORT,() =>{
    console.log(`Fast tracker api running on port ${PORT}`)
})

module.exports = server
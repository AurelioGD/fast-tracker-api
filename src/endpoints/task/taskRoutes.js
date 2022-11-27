const { Router } = require("express")
const { taskIncrementController, taskStopController, taskCreateController } = require("./taskController")

const router = Router()

router.post("/task/increment", taskIncrementController)
router.post("/task/create", taskCreateController)
router.post("/task/stop", taskStopController)

module.exports = router
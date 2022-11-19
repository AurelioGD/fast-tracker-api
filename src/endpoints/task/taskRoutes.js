const { Router } = require("express")
const { taskController, tasksController } = require("./taskController")

const router = Router()

router.get("/task", taskController)
router.get("/task", taskController)
router.get("/tasks", tasksController)

module.exports = router
const { OneSecond } = require("../../consts/times")
const { createTask, incrementTimeTask } = require("./taskRepository")

let timeOut = null
let taskId = null

const incrementingTask = () => {
    timeOut = setInterval(() => {
        incrementTimeTask(taskId)
    }, OneSecond)
}

const stopIncrementingTask = ()=> {
    clearInterval(timeOut)
}

const taskIncrementController = async(req, res) => {
    const { id } = req.body
    taskId = id
    const response = {error: false}
    try {
        incrementingTask()
    } catch (error) {
        console.log("Error al incrementar task:", error)
        response.error = true
    }   
    const status = response.error ? 400 : 200
    res.status(status).json(response)
}

const taskStopController = (req, res) => {
    const response = {error: false}
    try {
        stopIncrementingTask()
    } catch (error) {
        console.log("Error al parar incrementado de task: ",error)
        response.error = true
    }   
    const status = response.error ? 400 : 200
    res.status(status).json(response)
} 

const taskCreateController = async(req, res) => {
    const { description } = req.body
    
    const dataTaskToSave = {
        description,
        timeTask: 0,
        timeCreated: Date.now()
    }
    
    const result = await createTask(dataTaskToSave)

    const status = result.error ? 400 : 200

    res.status(status).json(result)
}

module.exports = {
    taskIncrementController,
    taskStopController,
    taskCreateController
}
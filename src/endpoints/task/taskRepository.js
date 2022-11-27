const Task = require("../../models/Task")
const { defaultResponse } = require("../../consts/repositoryResponses")
const { OneSecond } = require("../../consts/times")

const incrementTimeTask = async(taskId) => {
    const response = {...defaultResponse}
    try {
        const task = await Task.findById(taskId)
        const newTime = task.timeTask + OneSecond
        task.timeTask = newTime
        const dbResponse = await task.save()
        const {description, timeTask, timeCreated, _id} = dbResponse
        response.dbResponse = { description, timeTask, timeCreated, _id}
    } catch (error) {
        console.log("Error al incrementar task:",error)
        response.error = true
    }
    return response
}

const createTask = async(taskData) => {
    const task = new Task(taskData)
    const response = {...defaultResponse}
    try {
        const {description, timeTask, timeCreated, _id} = await task.save()
        response.dbResponse = { description, timeTask, timeCreated, _id}
    } catch (error) {
        console.log("Error al crear task:",error)
        response.error = true
    }
    return response
}

module.exports = {incrementTimeTask, createTask}
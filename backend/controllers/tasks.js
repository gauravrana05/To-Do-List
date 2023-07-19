const Task = require("../models/task")

const getAllTasks = async (req, res) => {
  const tasks = await Task.find({})
  res.status(200).json(tasks)
}
const getTask = async (req, res) => {

  console.log(req.params)

  const { id: taskID } = req.params
  const task = await Task.findOne({ _id: taskID })
  if (!task) {
    throw new Error(`No task with id : ${taskID}`)
  }

  res.status(200).json({ task })
}

const createTask = async (req, res) => {
  console.log(req.body);
  const task = await Task.create(req.body)
  res.status(201).json({ task })
}

const updateTask = async (req, res) => {
  const { id: taskID } = req.params

  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  })

  if (!task) {
    throw new Error(`No task with the given Id${taskID}`)
  }
  res.status(200).json({ task })
}

const deleteTask = async (req, res, next) => {
  const { id: taskID } = req.params
  const task = await Task.findOneAndDelete({ _id: taskID })
  if (!task) {
    throw new Error(`No task with id : ${taskID}`)
  }
  res.status(200).json({ task })
}
module.exports = {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
}

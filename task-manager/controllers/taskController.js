const taskService = require('../services/taskService');
const { taskSchema } = require('../validators/taskValidator');
const getAllTasks = (req, res) => {
  const tasks = taskService.getTasks();
  res.json(tasks);
};

const addTask = (req, res) => {
  const { error } = taskSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });
  const task = taskService.createTask(req.body);
  res.status(201).json(task);
};

module.exports = { getAllTasks, addTask };

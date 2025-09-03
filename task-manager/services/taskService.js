const TaskModel = require('../models/taskModel');

const getTasks = () => {
  return TaskModel.getAllTasks();
};

const createTask = (taskData) => {
  const newTask = {
    id: Date.now().toString(),
    title: taskData.title,
    completed: false
  };
  TaskModel.addTask(newTask);
  return newTask;
};

module.exports = { getTasks, createTask };

let tasks = []; 

module.exports = {
  getAllTasks: () => tasks,
  addTask: (task) => tasks.push(task)
};

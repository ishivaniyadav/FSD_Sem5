const Joi = require('joi');

const taskSchema = Joi.object({
  title: Joi.string().min(3).required()
});

module.exports = { taskSchema };

const express = require('express');

const routes = express.Router();

const IndexController = require('./controllers/IndexController');
const CoursesController = require('./controllers/CoursesController');

routes.get('/', IndexController.index);

routes.post ('/courses', CoursesController.create);

module.exports = routes;

// lessons
//courses
//instructors
const express = require('express');
const routes = express.Router();

const IndexController = require('./controllers/indexControllers');
const AuthorController = require('./controllers/AuhorController');
const BookController = require('./controllers/booksControllers');

// Routes index
routes.get('/', IndexController.index);

// Routes Authors
routes.get('/authors', AuthorController.findAll);
routes.post('/authors', AuthorController.create);

routes.get('/authors/:id', AuthorController.getById);
routes.delete('/authors/:id', AuthorController.deleteById);
routes.put('/authors/:id', AuthorController.put);

// Routes Books
routes.get('/books', BookController.findAll);
routes.post('/books', BookController.create);

routes.get('/books/:id', BookController.getById);
routes.delete('/books/:id', BookController.deleteById);
routes.put('/books/:id', BookController.put);

module.exports = routes;
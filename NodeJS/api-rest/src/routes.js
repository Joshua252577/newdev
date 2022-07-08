const express = require('express');
const routes = express.Router();

const indexControllers = require('./controllers/IndexControllers');
const authorControllers = require('./controllers/AuhorController');
const booksControllers = require('./controllers/booksControllers');

//Routes index
routes.get('/', indexControllers.index);

//Routes authors: metodos sem parametros
routes.get('/authors',authorControllers.findAll);
routes.post('/authors', authorControllers.create);

 //Routes authorsId: metodos com parametros
routes.get('/authors/:id', authorControllers.getById);
routes.delete('/authors/:id', authorControllers.deleteById);
routes.put('/authors/:id', authorControllers.put);
routes.patch('/authors/:id', authorControllers.patch);

//Routes books
routes.get('/books', booksControllers.findAll);
routes.post('/books', booksControllers.create);

routes.get('/books', booksControllers.getById);
routes.delete('/books', booksControllers.deleteById);
routes.put('/books', booksControllers.put);
routes.patch('/books', booksControllers.patch);

module.exports = routes;
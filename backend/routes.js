const express = require('express');
const route = express.Router();
const HomeController = require('./src/controllers/homeController.js');
const ContatoController = require('./src/controllers/contatoController.js')

// Rota da Home
route.get('/', HomeController.index)

// Rota de contato
route.get('/contato/index', ContatoController.index);
route.get('/contatos', ContatoController.findAll);
route.post('/contato/add', ContatoController.create);
route.get('/contato/:id', ContatoController.findOne);
route.post('/contato/update/:id', ContatoController.update);
route.get('/contato/delete/:id', ContatoController.delete);

module.exports = route;
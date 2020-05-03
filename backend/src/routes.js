/**
 * Importação das bibliotecas necessárias 
*/

const express = require('express');
const routes = express.Router();
const ong = require('./controllers/ongController');
const incident = require('./controllers/incidentController');
const profile = require('./controllers/profileController');
const session = require('./controllers/sessionController');

/**
 * Manipulação básica das ongs
*/

routes.get('/ongs', ong.list);

routes.post('/ongs', ong.create);

/**
 * Manipulação básica dos casos 
*/

routes.post('/incidents', incident.create);

routes.get('/incidents', incident.list);

routes.delete('/incidents/:id', incident.delete);

/**
 * Manipulação específica entre casos e ong
*/

routes.get('/profile', profile.list);

/**
 * Manipulação das sessões dentro de um sistema
*/

routes.post('/sessions', session.create);

/**
 * Exportação das rotas para torná-las acessíveis em
 * outras partes do código
*/

module.exports = routes;
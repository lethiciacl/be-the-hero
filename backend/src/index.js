const express = require('express'); 
const cors = require('cors');
const routes = require('./routes.js');
const app = express();

/**
 * É importante que a ordem dos ficheiros abaixo seja essa, dada a natureza do ficheiro routes.js
*/
app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * 
 * Query Params: Parâmetros nomeados enviados na ropa após "?" (Filtros, paginação)
 * Router Params: Parâmetros utilizados para identificar recursos
 * Requests Body: Corpo da requisição, utilizado para criar ou alterar recursos
 *  
 */


app.listen(3333);
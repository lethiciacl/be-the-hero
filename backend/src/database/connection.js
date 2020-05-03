/** 
 * importa os ficheiros necessários para fazer
 * a ligação à base de dados
*/
const knex = require('knex');
const config = require('../../knexfile');

/**
 * seleciona qual o status da connection
*/
const connection = knex(config.development);

/**
 * exporta a conecção
*/
module.exports = connection;
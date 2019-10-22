const swaggerJsDoc = require('swagger-jsdoc');

const dotenv = require('dotenv');
dotenv.config();

const swaggerDefinition = {
  info: {
    title: 'Tools swagger API',
    version: '1.0.0',
    description: 'Documentação da API para tools'
  },
  host: process.env.HOST
};

const options = {
  swaggerDefinition,
  apis: ['./src/modules/tool/routes.js']
};

module.exports = swaggerJsDoc(options);

const swaggerJsDoc = require('swagger-jsdoc');

const swaggerDefinition = {
  info: {
    title: 'Tools swagger API',
    version: '1.0.0',
    description: 'Documentação da API para tools'
  },
  host: 'localhost:5000',
  basePath: '/'
};

const options = {
  swaggerDefinition,
  apis: ['./src/modules/tool/routes.js']
};

module.exports = swaggerJsDoc(options);

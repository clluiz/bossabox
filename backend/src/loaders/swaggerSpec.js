const swaggerJsDoc = require('swagger-jsdoc');

const dotenv = require('dotenv');
dotenv.config();

const swaggerDefinition = {
  info: {
    title: 'Tools swagger API',
    version: '1.0.0',
    description: 'Documentação da API para tools'
  },
  host: process.env.BASE_URI,
  securityDefinitions: {
    tool_auth: {
      type: 'oauth2',
      flow: 'authorizationCode',
      authorizationUrl: `https://${process.env.AUTH0_DOMAIN}/authorize`,
      tokenUrl: `https://${process.env.AUTH0_DOMAIN}/token`,
      audience: process.env.AUTH0_AUDIENCE,
      in : 'header'
    }
  }
};

const options = {
  swaggerDefinition,
  apis: ['./src/modules/tool/routes.js']
};

module.exports = swaggerJsDoc(options);

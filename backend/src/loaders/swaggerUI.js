const koaSwagger = require('koa2-swagger-ui');
const dotenv = require('dotenv');

dotenv.config();

module.exports = koaSwagger({
  title: 'Tools',
  routePrefix: '/',
  swaggerOptions: {
    url: '/swagger.json',
    oauth2RedirectUrl: process.env.BASE_URI
  },
  oauthOptions: {
    clientId: process.env.AUTH0_CLIENT_ID
  }
});

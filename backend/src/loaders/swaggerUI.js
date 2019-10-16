const koaSwagger = require('koa2-swagger-ui');

module.exports = koaSwagger({
  title: 'Tools',
  routePrefix: '/',
  swaggerOptions: {
    url: 'http://localhost:5000/swagger.json'
  }
});

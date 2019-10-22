const koaSwagger = require('koa2-swagger-ui');

module.exports = koaSwagger({
  title: 'Tools',
  routePrefix: '/',
  swaggerOptions: {
    url: '/swagger.json'
  }
});

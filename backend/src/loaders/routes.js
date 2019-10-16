const Router = require('koa-router');
const toolRoutes = require('../modules/tool/routes');
const swaggerSpec = require('./swaggerSpec');

const appRoutes = new Router();

appRoutes.get('/swagger.json', ctx => {
  ctx.body = swaggerSpec;
});

appRoutes.use(toolRoutes);

module.exports = appRoutes.routes();

const Router = require('koa-router');
const toolRoutes = require('../modules/tool/routes');
const authRoutes = require('../modules/auth/routes');
const swaggerSpec = require('./swaggerSpec');

const appRoutes = new Router();

appRoutes.get('/swagger.json', ctx => {
  ctx.body = swaggerSpec;
});

appRoutes.use(authRoutes);
appRoutes.use(toolRoutes);

module.exports = appRoutes.routes();

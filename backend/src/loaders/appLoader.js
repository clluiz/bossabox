const cors = require('@koa/cors');
const routes = require('./routes');
const swaggerUI = require('./swaggerUI');

module.exports = async app => {
  app.use(cors({ origin: '*' }));
  app.use(routes);
  app.use(swaggerUI);
};

const cors = require('@koa/cors');
const routes = require('./routes');
const swaggerUI = require('./swaggerUI');
const auth0 = require('./auth0');
const session = require('./session');
const authorized = require('./authorization');

module.exports = app => {
  app.use(cors({ origin: '*' }));
  app.use(swaggerUI);
  session(app);
  auth0(app);
  app.use(routes);
  app.use(authorized);
};

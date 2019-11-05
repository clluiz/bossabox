const cors = require('@koa/cors');
const routes = require('./routes');
const swaggerUI = require('./swaggerUI');
const auth0 = require('./auth0');
const jwt = require('./jwt');
const session = require('./session');

module.exports = app => {
  app.use(cors({ origin: '*' }));
  app.use(swaggerUI);
  session(app);
  //auth0(app);
  if(process.env.ENV !== 'test') {
    jwt(app);
  }
  app.use(routes);
};

const koaSession = require('koa-session');

module.exports = app => {
  app.keys = ['super-secret-key'];
  app.use(koaSession(app));
};

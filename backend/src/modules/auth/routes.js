const Router = require('koa-router');
const passport = require('koa-passport');
const controller = require('./controller');

const authRoutes = new Router({});

authRoutes.get('/login', passport.authenticate('auth0', {}), controller.login);

authRoutes.get(
  '/callback',
  passport.authenticate('auth0', { failureRedirect: '/' }),
  controller.callback
);

authRoutes.get('/logout', controller.logout);

module.exports = authRoutes.routes();

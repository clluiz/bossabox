const novalidate = ['/login', '/callback', '/logout', '/swagger.json', '/'];

module.exports = (ctx, next) => {
  const { path } = ctx.request;
  if(!novalidate.includes(path) && !ctx.isAuthenticated()) ctx.throw(401,'Unauthorized');
  next();
}
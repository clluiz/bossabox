module.exports = (ctx, next) => {
  //if (!ctx.isAuthenticated()) ctx.throw(401, 'Unauthorized');
  return next();
};

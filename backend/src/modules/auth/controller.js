exports.login = async ctx => {
  try {
    ctx.redirect('/');
  } catch (error) {}
};

exports.callback = async ctx => {
  try {
    if (!ctx.state.user) {
      throw new Error('user null');
    }
    ctx.redirect('/');
  } catch (error) {
    console.log(error);
  }
};

exports.logout = async ctx => {
  ctx.logout();
  ctx.session = null;
  ctx.redirect('/');
};

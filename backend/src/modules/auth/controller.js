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
  } catch (error) {
    console.log(error);
  }
};

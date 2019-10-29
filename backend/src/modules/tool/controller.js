const services = require('./service');

exports.save = async ctx => {
  try {
    if (!ctx.request.body) throw (400, 'Empty body');
    const createdTool = await services.save(ctx.request.body);
    ctx.status = 201;
    ctx.body = createdTool;
  } catch (error) {
    console.log(error);
  }
};

exports.list = async ctx => {
  try {
    const { tag, $search } = ctx.request.query;
    let query = {};
    if (tag) {
      regex = tag.map(t => new RegExp(t, 'i'));
      query = { tags: { $in: regex } };
    } else if ($search) {
      query = { $or : [ 
        { title : { $regex : $search, $options : 'i' } },
        { link : { $regex : $search, $options : 'i' } },
        { description : { $regex : $search, $options : 'i' } },
        { tags : { $elemMatch : { $regex : $search, $options : 'i' } } }
      ] }
    }

    const tools = await services.list(query);
    ctx.status = 200;
    ctx.body = tools;
  } catch (error) {
    console.log(error);
  }
};

exports.remove = async ctx => {
  try {
    if (!ctx.params.id) throw 400;
    await services.remove(ctx.params.id);
    ctx.status = 204;
  } catch (error) {
    console.log(error);
  }
};

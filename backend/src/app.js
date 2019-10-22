const koa = require('koa');
const dotenv = require('dotenv');
const loaders = require('./loaders');

exports.start = async () => {
  dotenv.config();
  const app = new koa();
  await loaders.init(app);
  return app.listen(process.env.PORT, () => console.log('Listening on port 5000'));
};

exports.toTest = async () => {
  dotenv.config();
  const app = new koa();
  await loaders.init(app);
  return app;
};

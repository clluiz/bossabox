const mongooseLoader = require('./mongoose');
const appLoader = require('./appLoader');

exports.init = async app => {
  if (process.env.ENV !== 'test') {
    await mongooseLoader();
  }
  console.log(`Connected Mongo on ${process.env.MONGO_URI}`);
  appLoader(app);
};

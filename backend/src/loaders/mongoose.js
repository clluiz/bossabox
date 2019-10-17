const mongoose = require('mongoose');

module.exports = async () => {
  const connection = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  return connection.connection.db;
};

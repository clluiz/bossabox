const mongoose = require('mongoose');

module.exports = async () => {
  console.log(process.env.MONGO_URI);
  const connection = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  return connection.connection.db;
};

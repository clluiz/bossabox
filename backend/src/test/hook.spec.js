'use strict';
/* globals before, after */
const dotenv = require('dotenv');
const mongoose = require('mongoose');

before(async () => {
  dotenv.config();
  await mongoose.connect(process.env.MONGO_URI_TEST, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
});

after(async () => {
  await mongoose.connection.close();
});

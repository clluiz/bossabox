const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema(
  {
    title: {
      required: true,
      type: String
    },
    link: {
      required: true,
      type: String
    },
    description: {
      required: true,
      type: String
    },
    tags: {
      type: [String],
      required: true
    }
  },
  {
    collection: 'tools'
  }
);

schema.index({ '$**' : 'text' });

module.exports = mongoose.model('Tool', schema);

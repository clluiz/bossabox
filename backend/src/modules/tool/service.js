const Tool = require('./model');

const list = async query => {
  try {
    return await Tool.find(query).select('title description link tags');
  } catch (error) {
    throw error;
  }
};

const save = async tool => {
  try {
    const createdTool = new Tool(tool);
    return await createdTool.save();
  } catch (error) {
    throw error;
  }
};

const remove = async toolId => {
  try {
    const removedTool = await Tool.deleteOne({ _id: toolId });
    return removedTool;
  } catch (error) {
    throw error;
  }
};

exports.list = list;
exports.save = save;
exports.remove = remove;

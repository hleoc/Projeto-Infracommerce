const model = require("../Models/Book");

const create = async (title, author, category, userId) => {
  if (!title || !author || !category) {
    return {
      error: true,
      code: "invalid_data",
      message: "Invalid entries. Try again.",
      statusCode: 400,
    };
  }

  return model.create(title, author, category, userId);
};

module.exports = {
  create,
};

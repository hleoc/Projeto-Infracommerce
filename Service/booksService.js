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

const update = async (id, title, author, category, registrationDate, userId) => {
  const book = await model.getById(id);
  if (!book) {
    return {
      error: true,
      code: 'invalid_data',
      message: 'Algo deu errado',
      statusCode: 401,
    };
  }
  return model.update(id, { title, author, category, registrationDate }, userId);
};

module.exports = {
  create,
  update,
};

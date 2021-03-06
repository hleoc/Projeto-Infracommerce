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
      code: "invalid_data",
      message: "Invalid entries. Try again.",
      statusCode: 401,
    };
  }
  return model.update(id, { title, author, category, registrationDate }, userId);
};

const remove = async (id) => {
  const book = await model.exclude(id);
  if (!book) {
    return {
      error: true,
      code: "invalid_data",
      message: "Invalid entries. Try again.",
      statusCode: 500,
    };
  }
  return book;
};

const getAllDetails = async (title, author, category, registrationDate, dateOfChange) => {
  const books = {};
  if (title) {
    books.title = title;
  }
  if (author) {
    books.author = author;
  }
  if (category) {
    books.category = category;
  }
  if (registrationDate) {
    books.registrationDate = registrationDate;
  }
  if (dateOfChange) {
    books.dateOfChange = dateOfChange;
  }
  
  return model.getAllDetails(books)
}

module.exports = {
  create,
  update,
  remove,
  getAllDetails,
};

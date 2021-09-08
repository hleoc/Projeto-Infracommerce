const { ObjectId } = require("mongodb");

const getCollection = require("./get-connection");

const create = async (title, author, category, userId) =>
  getCollection("books")
    .then((book) =>
      book.insertOne({ title, author, category, userId }),
    )
    .then((result) => ({
      _id: result.insertedId,
      title,
      author,
      category,
      registrationDate: new Date(),
      dateOfChange :new Date(),
      userId,
    }));

module.exports = {
  create,
};

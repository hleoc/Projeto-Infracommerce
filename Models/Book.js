const { ObjectId } = require("mongodb");

const getCollection = require("./get-connection");

const create = async (title, author, category, userId) =>
  getCollection("books")
    .then((book) => book.insertOne({ title, author, category, userId }))
    .then((result) => ({
      _id: result.insertedId,
      title,
      author,
      category,
      registrationDate: new Date(),
      dateOfChange: new Date(),
      userId,
    }));

const getById = async (id) => {
  if (!ObjectId.isValid(id)) return null;
  return getCollection("books").then((book) => book.findOne({ _id: ObjectId(id) }));
};

const update = async (id, { title, author, category, registrationDate }, userId) => {
  if (!ObjectId.isValid(id)) return null;
  getCollection("books").then((book) =>
    book.updateOne(
      { _id: ObjectId(id) },
      { $set: { title, author, category, registrationDate, userId } },
    ),
  );
  return { _id: id, title, author, category, registrationDate, dateOfChange: new Date(), userId };
};

const exclude = async (id) => {
  if (!ObjectId.isValid(id)) return null;
  return getCollection("books").then((book) => book.deleteOne({ _id: ObjectId(id) }));
};

module.exports = {
  create,
  getById,
  update,
  exclude,
};

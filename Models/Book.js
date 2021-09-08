const { ObjectId } = require("mongodb");

const getCollection = require("./get-connection");

const formatDate = require("../Middlewares/formatDate");

const create = async (title, author, category, userId) =>
  getCollection("books")
    .then((book) =>
      book.insertOne({
        title,
        author,
        category,
        registrationDate: formatDate.dataAtualFormatada(),
        dateOfChange: formatDate.dataAtualFormatada(),
        userId,
      }),
    )
    .then((result) => ({
      _id: result.insertedId,
      title,
      author,
      category,
      registrationDate: formatDate.dataAtualFormatada(),
      dateOfChange: formatDate.dataAtualFormatada(),
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
  return {
    _id: id,
    title,
    author,
    category,
    registrationDate,
    dateOfChange: formatDate.dataAtualFormatada(),
    userId,
  };
};

const exclude = async (id) => {
  if (!ObjectId.isValid(id)) return null;
  return getCollection("books").then((book) => book.deleteOne({ _id: ObjectId(id) }));
};

const getAllDetails = async (books) => {
  if (!books.registrationDate || !books.dateOfChange) {
    return await getCollection("books").then((book) => book.find({ ...books }).toArray());
  } else if (books.registrationDate || books.dateOfChange) {
    return await getCollection("books").then((book) =>
      book
        .find({
          $or: [
            { registrationDate: { $gte: books.registrationDate } },
            { dateOfChange: { $lte: books.dateOfChange } },
          ],
        })
        .toArray(),
    );
  }
};

module.exports = {
  create,
  getById,
  update,
  exclude,
  getAllDetails,
};

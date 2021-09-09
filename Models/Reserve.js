const { ObjectId } = require("mongodb");

const getCollection = require("./get-connection");

const formatDate = require("../Middlewares/formatDate");

const formatReturnDate = require("../Middlewares/formatReturnDate");

const create = async (bookName, userName, bookingStatus) =>
  getCollection("reserve")
    .then((book) =>
      book.insertOne({
        bookName,
        userName,
        bookingStatus,
        bookingDate: formatDate.dataAtualFormatada(),
        returnDate: formatReturnDate.dataAtualFormatada(),
      }),
    )
    .then((result) => ({
      _id: result.insertedId,
      bookName,
      userName,
      bookingStatus,
      bookingDate: formatDate.dataAtualFormatada(),
      returnDate: formatReturnDate.dataAtualFormatada(),
    }));

const getAllDetails = async (reserves) => {
  if (!reserves.bookingDate || !reserves.returnDate) {
    return await getCollection("reserve").then((reserv) => reserv.find({ ...reserves }).toArray());
  } else if (reserves.bookingDate || reserves.returnDate) {
    return await getCollection("reserve").then((reserv) =>
      reserv
        .find({
          $or: [
            { bookingDate: { $gte: reserves.bookingDate } },
            { returnDate: { $lte: reserves.returnDate } },
          ],
        })
        .toArray(),
    );
  }
};

const exclude = async (id) => {
  if (!ObjectId.isValid(id)) return null;
  return getCollection("reserve").then((reserv) => reserv.deleteOne({ _id: ObjectId(id) }));
};

module.exports = {
  create,
  getAllDetails,
  exclude,
};

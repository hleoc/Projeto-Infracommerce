const getCollection = require("./get-connection");

const formatDate = require("../Middlewares/formatDate");

const formatDateOfChange = require("../Middlewares/formatDateOfChange");

const create = async (bookName, userName, bookingStatus) =>
  getCollection("reserve")
    .then((book) =>
      book.insertOne({
        bookName,
        userName,
        bookingStatus,
        registrationDate: formatDate.dataAtualFormatada(),
        dateOfChange: formatDateOfChange.dataAtualFormatada(),
      }),
    )
    .then((result) => ({
      _id: result.insertedId,
      bookName,
      userName,
      bookingStatus,
      registrationDate: formatDate.dataAtualFormatada(),
      dateOfChange: formatDateOfChange.dataAtualFormatada(),
    }));

module.exports = {
  create,
};

const model = require("../Models/Reserve");

const create = async (bookName, userName, bookingStatus) => {
  if (!bookName || !userName || !bookingStatus) {
    return {
      error: true,
      code: "invalid_data",
      message: "Invalid entries. Try again.",
      statusCode: 400,
    };
  }
  return model.create(bookName, userName, bookingStatus);
};

const getAllDetails = async (bookName, userName, bookingStatus,  bookingDate, returnDate) => {
  const reserves = {};
  if (bookName) {
    reserves.bookName = bookName;
  }
  if (userName) {
    reserves.userName = userName;
  }
  if (bookingStatus) {
    reserves.bookingStatus = bookingStatus;
  }
  if (bookingDate) {
    reserves.bookingDate = bookingDate;
  }
  if (returnDate) {
    reserves.returnDate = returnDate;
  }
  
  return model.getAllDetails(reserves)
}

const remove = async (id) => {
  const reserve = await model.exclude(id);
  if (!reserve) {
    return {
      error: true,
      code: 'invalid_data',
      message: "Invalid entries. Try again.",
      statusCode: 500,
    };
  }
  return reserve;
};

module.exports = {
  create,
  getAllDetails,
  remove,
};

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
  //console.log("dados =====>", bookName, userName, bookingStatus);
  return model.create(bookName, userName, bookingStatus);
};

module.exports = {
  create,
};

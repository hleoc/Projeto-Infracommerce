const resservekResultSchema = {
  type: "object",
  properties: {
    id: {
      type: "string",
    },
    bookName: {
      type: "string",
      length: "80",
    },
    userName: {
      type: "string",
      length: "80",
    },
    bookingStatus: {
      type: "string",
      length: "80",
    },
    bookingDate: {
      type: "string",
      length: "80",
    },
    returnDate: {
      type: "string",
      length: "80",
    },
  },
  example: {
    _id: "613abc583ecb6839a9a2c023",
    bookName: "Seguração da Informação",
    userName: "Maria Julia",
    bookingStatus: "reserved",
    bookingDate: "09/09/2021",
    returnDate: "12/09/2021",
  },
  required: ["id", "bookName", "userName", "bookingStatus", "bookingDate", "returnDate"],
};

module.exports = resservekResultSchema;

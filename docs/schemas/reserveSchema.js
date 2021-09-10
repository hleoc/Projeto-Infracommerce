const reserveSchema = {
  type: "object",
  properties: {
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
  },
  example: {
    "bookName": "Segurança da Informação",
    "userName": "Maria Julia",
    "bookingStatus": "reserved"
  },
};

module.exports = reserveSchema;

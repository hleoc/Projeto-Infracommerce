const reserveResultAllSchema = {
  type: "array",
  items: {
    $ref: "#/schemas/reserveResultAll",
  },
  example: {
    reserves: [
      {
        _id: "6139526bd44e15338c8c0dc5",
        bookName: "Teste 1",
        userName: "Hérica",
        bookingStatus: "reserved",
        registrationDate: "08/09/2021",
        dateOfChange: "11/09/2021",
      },
      {
        _id: "6139e402f55e8ca8b3b98ebd",
        bookName: "Teste 2",
        userName: "Maria Julia",
        bookingStatus: "reserved",
        bookingDate: "09/09/2021",
        returnDate: "12/09/2021",
      },
    ],
  },
};

module.exports = reserveResultAllSchema;

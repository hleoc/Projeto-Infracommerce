const bookResultAllSchema = {
  type: "array",
  items: {
    $ref: "#/schemas/bookResultAll",
  },
  example: {
    books: [
      {
        _id: "6138b8531fb44df4983c2538",
        title: "Teste 7",
        author: "Natalia",
        category: "IT",
        registrationDate: "08/09/2021",
        dateOfChange: "08/09/2021",
        userId: "6137d7b3b6aac3ebee045cc1",
      },
      {
        _id: "6138c4780e1c5a62e3186ce2",
        title: "Teste 2",
        author: "Herica",
        category: "IT",
        registrationDate: "08/09/2021",
        dateOfChange: "08/09/2021",
        userId: "6137d7b3b6aac3ebee045cc1",
      },
      {
        _id: "6138c4900e1c5a62e3186ce3",
        title: "Teste 3",
        author: "Maria Julia",
        category: "IT",
        registrationDate: "08/09/2021",
        dateOfChange: "08/09/2021",
        userId: "6137d7b3b6aac3ebee045cc1",
      },
    ],
  },
};

module.exports = bookResultAllSchema;

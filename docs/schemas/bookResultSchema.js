const bookResultSchema = {
  type: "object",
  properties: {
    id: {
      type: "string",
    },
    title: {
      type: "string",
      length: "80",
    },
    author: {
      type: "string",
      length: "80",
    },
    category: {
      type: "string",
      length: "80",
    },
    registrationDate: {
      type: "string",
      length: "80",
    },
    dateOfChange: {
      type: "string",
      length: "80",
    },
    userId: {
      type: "string",
      length: "80",
    },
  },
  example: {
    id: "613abc333ecb6839a9a2c022",
    title: "Teste 4",
    author: "Maria Julia",
    category: "IT",
    registrationDate: "09/09/2021",
    dateOfChange: "09/09/2021",
    userId: "6137d7b3b6aac3ebee045cc1",
  },
  required: ["id", "title", "author", "category", "registrationDate", "dateOfChange", "userId"],
};

module.exports = bookResultSchema;

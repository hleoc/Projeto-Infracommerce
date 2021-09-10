const bookSchema = {
  type: "object",
  properties: {
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
  },
  example: {
    title: "Teste 4",
    author: "Maria Julia",
    category: "IT",
  },
};

module.exports = bookSchema;

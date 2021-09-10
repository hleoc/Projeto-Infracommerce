const notFound = {
  description: "Não encontrado.",
  content: {
    "application/json": {
      schema: {
        $ref: "#/schemas/error",
      },
    },
  },
};

module.exports = notFound;

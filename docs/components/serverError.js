const serverError = {
  description: "Erro no Servidor",
  content: {
    "application/json": {
      schema: {
        $ref: "#/schemas/error",
      },
    },
  },
};

module.exports = serverError;

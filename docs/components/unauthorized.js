const unauthorized = {
  description: "Usuario não está autenticado ou os dados de autenticação são inválidos.",
  content: {
    "application/json": {
      schema: {
        $ref: "#/schemas/error",
      },
    },
  },
};

module.exports = unauthorized;

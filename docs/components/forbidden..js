const forbidden = {
  description: "Usuario não autorizado a acessar este recurso",
  content: {
    "application/json": {
      schema: {
        $ref: "#/schemas/error",
      },
    },
  },
};

module.exports = forbidden;

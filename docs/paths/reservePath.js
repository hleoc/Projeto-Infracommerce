const reservePath = {
  post: {
    tags: ["Reserve"],
    summary: "Esta rota permite criar uma nova reserva, entre livro e usuário comum",
    description: "Essa rota só pode ser executada por um **usuário autenticado**",
    requestBody: {
      required: true,
      content: {
        "application/json": {
          schema: {
            $ref: "#/schemas/reserveRequest",
          },
        },
      },
    },
    responses: {
      200: {
        description: "Success: true",
        content: {
          "application/json": {
            schema: {
              $ref: "#/schemas/reserveResponse",
            },
          },
        },
      },
      400: {
        $ref: "#/components/badRequest",
      },
      500: {
        $ref: "#/components/serverError",
      },
    },
  },
  get: {
    security: [
      {
        bearerAuth: [],
      },
    ],
    tags: ["Reserve"],
    summary: "Esta rota pesquisa todas as reservas, podendo filtrar por cada detalhe",
    description: "Essa rota só pode ser executada por um **usuário autenticado**",
    responses: {
      200: {
        description: "Success: true",
        content: {
          "application/json": {
            schema: {
              $ref: "#/schemas/reserveResultAll",
            },
          },
        },
      },
      500: {
        $ref: "#/components/serverError",
      },
    },
  },
};

module.exports = reservePath;

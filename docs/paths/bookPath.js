const bookPath = {
  post: {
    tags: ["Books"],
    summary: "Esta rota permite cadastrar livros",
    description: "Essa rota só pode ser executada por um **usuário autenticado**",
    requestBody: {
      required: true,
      content: {
        "application/json": {
          schema: {
            $ref: "#/schemas/bookRequest",
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
              $ref: "#/schemas/bookResponse",
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
    tags: ["Books"],
    summary: "Esta rota pesquisa todos os livros, podendo filtrar por cada detalhe",
    description: "Essa rota só pode ser executada por um **usuário autenticado**",
    responses: {
      200: {
        description: "Success: true",
        content: {
          "application/json": {
            schema: {
              $ref: "#/schemas/bookResultAll",
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

module.exports = bookPath;

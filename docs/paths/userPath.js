const userPath = {
  post: {
    tags: ["Users"],
    summary: "Esta rota permite criar um usuário",
    description: "Essa rota só pode ser executada por um **usuário autenticado**",
    requestBody: {
      required: true,
      content: {
        "application/json": {
          schema: {
            $ref: "#/schemas/userRequest",
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
              $ref: "#/schemas/userResponse",
            },
          },
        },
      },
      401: {
        $ref: "#/components/unauthorized",
      },
      500: {
        $ref: "#/components/serverError",
      },
    },
  },
};

module.exports = userPath;
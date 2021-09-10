const sessionsPath = {
  post: {
    tags: ["Sessions"],
    summary: "Esta permite fazer o login",
    description: "Essa rota gera um token",
    requestBody: {
      required: true,
      content: {
        "application/json": {
          schema: {
            $ref: "#/schemas/sessionsRequest",
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
              $ref: "#/schemas/sessionsResponse",
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

module.exports = sessionsPath;
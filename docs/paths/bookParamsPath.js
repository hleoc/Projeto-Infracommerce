const bookParamsPath = {
  put: {
    security: [
      {
        bearerAuth: [],
      },
    ],
    tags: ['Books'],
    summary: 'Esta rota permite atualizar um livro',
    description: 'Essa rota só pode ser executada por um **usuário autenticado**.',
    parameters: [
      {
        in: 'path',
        name: 'id',
        description: 'ID do Livro',
        required: true,
        schema: {
          type: 'string',
        },
      },
    ],
    requestBody: {
      required: true,
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/bookUpdateRequest',
          },
        },
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/bookUpdateResponse',
            },
          },
        },
      },
      401: {
        $ref: '#/components/unauthorized',
      },
      404: {
        $ref: '#/components/notFound',
      },
      500: {
        $ref: '#/components/serverError',
      },
    },
  },
  delete: {
    security: [
      {
        bearerAuth: [],
      },
    ],
    tags: ['Books'],
    summary: 'Esta rota permite deletar um livro',
    description: 'Essa rota só pode ser executada por um **usuário autenticado**',
    parameters: [
      {
        in: 'path',
        name: 'id',
        description: 'ID do Livro',
        required: true,
        schema: {
          type: 'string',
        },
      },
    ],
    responses: {
      204: {
        description: 'no content',
      },
      404: {
        $ref: '#/components/notFound',
      },
      401: {
        $ref: '#/components/unauthorized',
      },
      500: {
        $ref: '#/components/serverError',
      },
    },
  },
};

module.exports = bookParamsPath;

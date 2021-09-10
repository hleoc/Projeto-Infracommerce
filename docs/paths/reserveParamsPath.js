const reserveParamsPath = {
  delete: {
    security: [
      {
        bearerAuth: [],
      },
    ],
    tags: ['Reserve'],
    summary: 'Esta rota permite remover uma reserva',
    description: 'Essa rota só pode ser executada por um **usuário autenticado**',
    parameters: [
      {
        in: 'path',
        name: 'id',
        description: 'ID da Reserva',
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

module.exports = reserveParamsPath;

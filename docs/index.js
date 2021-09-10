const paths = require("./paths");
const components = require("./components");
const schemas = require("./schemas");

module.exports = {
  openapi: '3.0.0',
  info: {
    title: 'INFRACOMMERCE API',
    version: '1.0.0',
  },
  servers: [
    {
      url: '/',
      description: 'Servidor Principal',
    },
  ],
  tags: [
    {
      name: 'Users',
      description: 'Módulo relacionado a usuários',
    },
    {
      name: 'Sessions',
      description: 'Módulo relacionado ao login',
    },
    {
      name: 'Books',
      description: 'Módulo relacionado a livros',
    },
    {
      name: 'Reserve',
      description: 'Módulo relacionado a reserva de livros',
    },
  ],
  paths,
  schemas,
  components,
};
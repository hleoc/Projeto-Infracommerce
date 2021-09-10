const {
  badRequest,
  serverError,
  unauthorized,
  notFound,
  forbidden,
} = require('./components/index')

module.exports = {
  badRequest: badRequest,
  serverError: serverError,
  unauthorized: unauthorized,
  notFound: notFound,
  forbidden: forbidden,
}
const badRequest = require("./badRequest");
const serverError = require("./serverError");
const notFound = require("./notFound");
const unauthorized = require("./unauthorized");
const forbidden = require("./forbidden.");

module.exports = {
  badRequest,
  serverError,
  notFound,
  unauthorized,
  forbidden,
}
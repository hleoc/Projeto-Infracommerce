const { userPath } = require("./paths/index");
const { sessionsPath } = require("./paths/index");
const { bookPath } = require("./paths/index");
const { bookParamsPath } = require("./paths/index");
const { reservePath } = require("./paths/index");
const { reserveParamsPath } = require("./paths/index");

module.exports = {
  "/users": userPath,
  "/sessions": sessionsPath,
  "/books": bookPath,
  "/books/{id}": bookParamsPath,
  "/reserve": reservePath,
  "/reserve/{id}": reserveParamsPath
};

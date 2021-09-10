const {
  userSchema,
  userResultSchema,
  errorSchema,
  sessionsSchema,
  sessionsResultSchema,
  bookSchema,
  bookResultSchema,
  bookResultAllSchema,
  bookResultUpdateSchema,
  reserveSchema,
  reserveResultSchema,
  reserveResultAllSchema,
} = require("./schemas/index");

module.exports = {
  userRequest: userSchema,
  userResponse: userResultSchema,
  error: errorSchema,
  sessionsRequest: sessionsSchema,
  sessionsResponse: sessionsResultSchema,
  bookRequest: bookSchema,
  bookResponse: bookResultSchema,
  bookResultAll: bookResultAllSchema,
  bookUpdateRequest: bookSchema,
  bookUpdateResponse: bookResultUpdateSchema,
  reserveRequest: reserveSchema,
  reserveResponse: reserveResultSchema,
  reserveResultAll: reserveResultAllSchema
};

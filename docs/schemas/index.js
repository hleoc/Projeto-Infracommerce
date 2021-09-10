const userSchema = require("./userSchema");
const userResultSchema = require("./userResultSchema");
const errorSchema = require("./errorSchema");
const sessionsSchema = require("./sessionsSchema");
const sessionsResultSchema = require("./sessionsResultSchema");
const bookSchema = require("./bookSchema");
const bookResultSchema = require("./bookResultSchema");
const bookResultAllSchema = require("./bookResultAllSchema");
const bookResultUpdateSchema = require("./bookResultUpdateSchema");
const reserveSchema = require("./reserveSchema");
const reserveResultSchema = require("./reserveResultSchema");
const reserveResultAllSchema = require("./reserveResultAllSchema");

module.exports = {
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
};

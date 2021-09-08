const getCollection = require("./get-connection");

const getByEmail = async ({ email }) =>
  getCollection("users").then((emai) => emai.findOne({ email }));

const getById = async ({ userId }) =>
  getCollection("users").then((id) => id.findOne( id ));

const create = async (name, roles, email, password) =>
  getCollection("users")
    .then((user) => user.insertOne({ name, roles, email, password }))
    .then((result) => ({ _id: result.insertedId, name, email }));

module.exports = {
  getByEmail,
  create,
  getById,
};

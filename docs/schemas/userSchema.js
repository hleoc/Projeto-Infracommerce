const userSchema = {
  type: "object",
  properties: {
    name: {
      type: "string",
      length: "80",
    },
    roles: {
      type: "string",
      length: "20",
    },
    email: {
      type: "string",
      length: "80",
    },
    password: {
      type: "number",
      length: "30",
    },
  },
  example: {
    name: "Hérica Garcia Costa",
    roles: "Admin",
    email: "email2@email2",
    password: 123456,
  },
};

module.exports = userSchema;

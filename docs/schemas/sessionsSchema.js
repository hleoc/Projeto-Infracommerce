const sessionsSchema = {
  type: "object",
  properties: {
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
    email: "email2@email2",
    password: 123456,
  },
};

module.exports = sessionsSchema;

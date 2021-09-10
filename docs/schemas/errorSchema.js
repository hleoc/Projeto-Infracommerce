const errorSchema = {
  type: "object",
  properties: {
    err: {
      type: "string",
    },
  },
  required: ["err"],
};

module.exports = errorSchema;

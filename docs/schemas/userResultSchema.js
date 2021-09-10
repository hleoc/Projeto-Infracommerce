const userResultSchema = {
  type: "object",
  properties: {
    id: {
      type: "string",
    },
    name: {
      type: "string",
      length: "80",
    },
    email: {
      type: "string",
      length: "80",
    },
  },
  example: {
    _id: "613a5b868a38da83f9145082",
    name: "Hérica Garcia Costa",
    email: "email3@email3",
  },
  required: ["id", "name", "email"],
};

module.exports = userResultSchema;

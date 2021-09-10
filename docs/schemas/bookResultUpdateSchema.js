const bookResultUpdateSchema = {
  type: "object",
  properties: {
    id: {
      type: "string",
    },
    title: {
      type: "string",
      length: "80",
    },
    author: {
      type: "string",
      length: "80",
    },
    category: {
      type: "string",
      length: "80",
    },
    registrationDate: {
      type: "string",
    },
    dateOfChange: {
      type: "string",
    },
    user_id: {
      type: "string",
    },
  },
  example: {
    book: {
      _id: "613abc333ecb6839a9a2c022",
      title: "Cyber War 2",
      author: "Robert Knake",
      category: "Information tecnology",
      registrationDate: "2021-09-08T00:37:27.729Z",
      dateOfChange: "09/09/2021",
      userId: "61380702cd20a030b0d14d2e",
    },
  },
  required: [
    "id",
    "title",
    "author",
    "category",
    "registrationDate",
    "dateOfChange",
    "userId",
  ],
};

module.exports = bookResultUpdateSchema;

const sessionsResultSchema = {
  type: "object",
  properties: {
    token: {
      type: "string",
    },
  },
  example: {
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJwb3N0X2FwaSIsImF1ZCI6ImlkZW50aWZ5IiwidXNlckRhdGEiOnsiX2lkIjoiNjEzYWJjMmMzZWNiNjgzOWE5YTJjMDIxIiwibmFtZSI6ImVtYWlsNUBlbWFpbDUifSwiaWF0IjoxNjMxMjM5MjEyLCJleHAiOjE2MzI1MzUyMTJ9.hJ0wdbm9rwnqKQmwUOvXFtKzNax_teZR4im3km_xRaw",
  },
  required: ["token"],
};

module.exports = sessionsResultSchema;

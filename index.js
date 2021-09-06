const express = require("express");
const APP_PORT = require("dotenv/config");

const usersController = require("./Controllers/usersController");

const app = express();
app.use(express.json());

app.use("/users", usersController);

const port = process.env.APP_PORT;

app.get("/", (_req, res) => res.send("Hello Infracommerce"));

app.listen(port, () => {
  console.log(`Back-end started on localhost:${port}! 🚀`);
});

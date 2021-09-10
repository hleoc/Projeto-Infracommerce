const express = require("express");
const APP_PORT = require("dotenv/config");
const routes = require("./routes/index");

const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./docs/index.js");

const app = express();
app.use(express.json());
app.use(routes);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

const port = process.env.APP_PORT;

app.get("/", (_req, res) => res.send("Hello Infracommerce"));

app.listen(port, () => console.log(`Back-end started on localhost:${port}! 🚀`));

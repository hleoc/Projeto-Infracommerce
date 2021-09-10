const Router = require("express");

const usersController = require("../Controllers/usersController");
const sessionsController = require("../Controllers/sessionsController");
const booksController = require("../Controllers/booksController");
const reserveController = require("../Controllers/reserveController");


const routes = Router();

routes.use("/users", usersController);
routes.use("/sessions", sessionsController);
routes.use('/books', booksController);
routes.use("/reserve", reserveController);

module.exports = routes;
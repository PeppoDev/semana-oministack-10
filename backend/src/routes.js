const { Router } = require("express");

const UserController = require("./controllers/UserController");
const SearchController = require("./controllers/SearchController");

routes = Router();

//users functions
routes.get("/users", UserController.index);
routes.post("/users", UserController.store);

//search functions
routes.get("/search", SearchController.index);

module.exports = routes;

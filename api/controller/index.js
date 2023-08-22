const express = require("express");
const { users, products, orders } = require("../model");
const { verifyAToken } = require("../middleware/AuthenticateUser");
const routes = express.Router();
const bodyParser = require("body-parser");

routes.get("/users", (req, res) => {
  users.fetchUsers(req, res);
});
routes.get("/user/:id", (req, res) => {
  users.fetchUser(req, res);
});
routes.post("/login", bodyParser.json(), (req, res) => {
  users.login(req, res);
});
routes.post("/register", bodyParser.json(), (req, res) => {
  users.registerUser(req, res);
});
routes.patch("/user/:id", bodyParser.json(), (req, res) => {
  users.updateUser(req, res);
});
routes.delete("/user/:id", bodyParser.json(), (req, res) => {
  users.removeUser(req, res);
});
// =======
//import all model's objects

routes.get("/Products", (req, res) => {
  products.fetchProducts(req, res);
});
routes.get("/Products/:prodID", (req, res) => {
  products.fetchProduct(req, res);
});
routes.post("/Products", bodyParser.json(), (req, res) => {
  products.addProduct(req, res);
});
routes.patch("/Products", bodyParser.json(), (req, res) => {
  products.updateProduct(req, res);
});
routes.delete("/Products/:prodID", (req, res) => {
  products.removeProduct(req, res);
});

// =======
routes.get("/Users/:id", (req, res) => {
  users.fetchUsers(req, res);
});

routes.post("/register", bodyParser.json(), (req, res) => {
  users.registerUser(req, res);
});

routes.put("/Users/:id", bodyParser.json(), (req, res) => {
  users.updateUser(req, res);
});

routes.patch("/Users/:id", bodyParser.json(), (req, res) => {
  users.updateUser(req, res);
});

routes.delete("/Users/:id", (req, res) => {
  users.deleteUser(req, res);
});

routes.post("/login", bodyParser.json(), (req, res) => {
  users.login(req, res);
});

module.exports = {
  express,
  routes,
};
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
routes.get("/Products/:ProductID", (req, res) => {
  products.fetchProduct(req, res);
});
routes.post("/Products", bodyParser.json(), (req, res) => {
  products.addProduct(req, res);
});
routes.patch("/Products", bodyParser.json(), (req, res) => {
  products.updateProduct(req, res);
});
routes.delete("/Products/:ProductID", (req, res) => {
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

routes.get("/Products", (req, res) => {
  Products.fetchProducts(req, res);
});
routes.get("/Products/:id", (req, res) => {
  Products.fetchProducts(req, res);
});
routes.post("/Products", bodyParser.json(), (req, res) => {
  Products.addProduct(req, res);
});
routes.patch("/Products/:id", bodyParser.json(), (req, res) => {
  Products.updateProduct(req, res);
});
routes.delete("/Products/:id", (req, res) => {
  Products.removeProduct(req, res);
});

// ============ Orders' router ==============
routes.get("/orders", (req, res) => {
  orders.fetchOrders(req, res);
});
routes.get("/order/:id", (req, res) => {
  orders.fetchOrder(req, res);
});
routes.post(
  "/addOrder/:orderID//:userID/:bookID",
  bodyParser.json(),
  (req, res) => {
    orders.insertOrder(req, res);
  }
);
routes.put("/order/:orderID", bodyParser.json(), (req, res) => {
  orders.updateOrder(req, res);
});
routes.delete("/order/:orderID", (req, res) => {
  orders.removeOrder(req, res);
});

module.exports = {
  express,
  routes,
};
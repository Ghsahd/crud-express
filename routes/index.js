const express = require("express");
const app = express.Router();
// const register = require("../controllers/auth/registerAuth");

app.get("/", function (req, res) {
  const data = {
    message: "api is running",
  };

  res.json(data);
});
// app.post("/register", register.registerAuth);

module.exports = app;

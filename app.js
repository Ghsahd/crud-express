const express = require("express");
const app = express();
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const db = require("./models/model");
app.use(express.json);
app.use(express.urlencoded({ extended: true }));
const port = 3500;

app.use("/", indexRouter);
app.use("/users", usersRouter);

db.sequelize
  .sync()
  .then(() => {
    console.log("Behasil Connect Db");
  })
  .catch((err) => {
    console.log("Gagal Koneksi ke database", err);
  });

app.listen(function (err) {
  if (err) console.log(err);
  console.log(`Starting Program: ${port}`);
});
module.exports = app;

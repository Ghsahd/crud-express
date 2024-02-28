const db = require("../../models/model");
const bcrypt = require("bcrypt");

exports.registerAuth = async (req, res) => {
  try {
    await db.create({
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8),
    });
    res.status(200).send({
      auth: true,
      id: req.body.id,
      message: "Berhasil Registrasi",
      errors: err,
    });
  } catch (error) {
    res.status(401).send({
      auth: false,
      id: req.body.id,
      message: "Gagal Registrasi",
      errors: err,
    });
  }
};

module.exports = {
  HOST: "localhost",
  USER: "root",
  PASS: "root",
  DB: "db-be",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 3000,
    idle: 1000,
  },
};

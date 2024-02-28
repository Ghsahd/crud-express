const db = require("../config/config.js");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(db.DB, db.USER, db.PASS, {
  host: db.HOST,
  dialect: db.dialect,
  operatorsAlls: false,

  pool: {
    max: db.pool.max,
    min: db.pool.min,
    aquire: db.pool.aquire,
    idle: db.pool.idle,
  },
});

const dbConfig = {};

dbConfig.sequelize = sequelize;
dbConfig.Sequelize = Sequelize;

db.user = require("./user.js")(sequelize, Sequelize);

module.exports = dbConfig;

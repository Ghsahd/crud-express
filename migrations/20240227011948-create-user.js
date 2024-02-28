"use strict";

const { QueryInterface } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("user", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      // role: {
      //   type: Sequelize.INTEGER,
      //   allowNull: false,
      // },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    });
    // const User = queryInterface.sequelize.define("User", {
    //   password: Sequelize.STRING,
    // });
    // User.beforeCreate(async (user) => {
    //   const hashedPassword = await bcrypt.hash(user.password, 10);
    //   user.password = hashedPassword;
    // });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("user");
  },
};

const db = require("../index");
const Sequelize = require("sequelize");

const User = db.define("user", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = User;

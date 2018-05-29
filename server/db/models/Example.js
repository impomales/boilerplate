const db = require("../index");
const Sequelize = require("sequelize");

const Example = db.define("example", {
  desc: {
    type: Sequelize.TEXT
  }
});

module.exports = Example;

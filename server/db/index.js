const Sequelize = require("sequelize");

const DATABASE_URL =
  process.env.DATABASE_URL || `postgres://localhost:5432/boilerdb`;

const db = new Sequelize(DATABASE_URL, {
  logging: false
});

module.exports = db;

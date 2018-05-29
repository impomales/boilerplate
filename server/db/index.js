const Sequelize = require("sequelize");

const port = process.env.PORT || 8080;
const dbName = process.env.DATABASE_NAME || "boilerdb";

const db = new Sequelize(`postgres://localhost:${port}/${dbName}`, {
  logging: false
});

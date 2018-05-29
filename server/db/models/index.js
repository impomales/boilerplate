const db = require("../index");
const User = require("./User");
const Example = require("./Example");

// associations here.
User.hasMany(Example, { onDelete: "cascade" });
Example.belongsTo(User);

module.exports = { db, User };

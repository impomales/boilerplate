const express = require("express");
const path = require("path");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const session = require("express-session");
const passport = require("./auth/passport");
const app = express();
const { db, User } = require("./db/models");

const SequelizeStore = require("connect-session-sequelize")(session.Store);
const dbStore = new SequelizeStore({ db });

// session middleware.
app.use(
  session({
    secret: process.env.SESSION_SECRET || "a really insecure secret",
    store: dbStore,
    resave: false,
    saveUninitialized: false
  })
);

// passport initialization.
app.use(passport.initialize());
app.use(passport.session());

// logging middleware.
app.use(morgan("dev"));

// parsing middleware.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// serve static files.
app.use(express.static(path.join(__dirname, "../public")));

// route middleware.
app.use("/auth", require("./auth"));
app.use("/api", require("./api"));

app.get("*", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// error handler.
app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).json(err.message || "Internal Server Error.");
});

module.exports = app;

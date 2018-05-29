const express = require("express");
const path = require("path");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const app = express();

// load environment variables.
require("dotenv").config();

// logging middleware.
app.use(morgan("dev"));

// parsing middleware.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// serve static files.
app.use(express.static(path.join(__dirname, "../public")));

// route middleware.
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

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`app is listening on port ${port}.`);
});

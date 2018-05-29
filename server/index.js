const express = require("express");
const path = require("path");
const app = express();

require("dotenv").config();

app.use(express.static(path.join(__dirname, "../public")));

app.get("*", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.listen(8080, () => {
  console.log("app is listening on port 8080.");
});

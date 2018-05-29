const router = require("express").Router();

router.use("/example", require("./example"));

router.get("/", (req, res, next) => {
  res.json({ msg: "api routes here." });
});

router.use((req, res, next) => {
  const err = new Error("Not found.");
  err.status = 404;
  next(err);
});

module.exports = router;

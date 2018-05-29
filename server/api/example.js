const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json({ msg: "this is an example" });
});

module.exports = router;

const router = require("express").Router();
const { User } = require("../db/models");
const passport = require("./passport");

router.get("/me", (req, res, next) => {
  res.json(req.user);
});

router.get("/google", passport.authenticate("google", { scope: "email" }));

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "/",
    failureRedirect: "/login"
  })
);

router.post("/login", (req, res, next) => {
  console.log(req.body);
  User.findOne({ where: { email: req.body.email } })
    .then(user => {
      if (!user) res.status(401).send("User not found");
      else if (!user.correctPassword(req.body.password))
        res.status(401).send("Incorrect password.");
      else {
        req.login(user, err => {
          if (err) next(err);
          else res.json(user);
        });
      }
    })
    .catch(next);
});

router.post("/signup", (req, res, next) => {
  User.create(req.body)
    .then(user => {
      req.login(user, err => {
        if (err) next(err);
        else res.json(user);
      });
    })
    .catch(next);
});

router.post("/logout", (req, res, next) => {
  req.logout();
  res.status(200).send("session ended.");
});

module.exports = router;

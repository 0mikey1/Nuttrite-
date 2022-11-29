const passport = require("passport");
const mongoose = require("mongoose");
const User = require("../models/user");
const router = require("express").Router();

router.post("/register", function (req, res) {
  User.register(
    new User({ email: req.body.email, username: req.body.username }),
    req.body.password,
    function (err, account) {
      if (err) {
        return res.send(err);
      }

      return res.send(account);
    }
  );
});

router.post("/login", passport.authenticate("local"), function (req, res) {
  res.send(req.user);
});

router.post("/logout", (req, res, next) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});

router.get("/current_user", (req, res) => {
  res.send(req.user);
});

module.exports = router;

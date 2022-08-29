const passport = require("passport");
const mongoose = require("mongoose");
const User = require("../models/user");

module.exports = app => {
  app.post("/register", function (req, res) {
    User.register(new User({ username: req.body.username, email: req.body.email }), req.body.password, function (err, account) {

      if (err) {
        return res.send(err);
      }

      return res.send(account);
    });
  });

  app.post("/login", passport.authenticate("local"), function(req, res) {
    res.send(req.user);
  });

  app.post("/logout", (req, res, next) => {
    req.logout(function(err) {
      if (err) { return next(err); }
      res.redirect("/");
    });
  });

  app.get("/current_user", (req, res) => {
    res.send(req.user);
  });
}

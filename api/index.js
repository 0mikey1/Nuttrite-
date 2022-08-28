const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
require("./models/user");
require("./services/passport");

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
    useUnifiedTopology: true,
  }).catch((err) => console.log(err));

const app = express();

app.use(express.json());
app.use(session({
  secret: 'nuttrite',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));
app.use(passport.initialize());
app.use(passport.session());

require("./routes/auth")(app);

app.get('/', function (req, res) {
  res.send(req.user);
});

const PORT = process.env.PORT || 8000;
app.listen(PORT);

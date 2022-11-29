const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
app.use(express.json());
const passport = require("passport");
const session = require("express-session");
const cors = require("cors");
const contactUsInquiryRoute = require("./routes/contactUsInquiry");
const userSurveyRoute = require("./routes/userSurveyData");
const userRegisterRoute = require("./routes/auth");
const User = require("./models/user");
const LocalStrategy = require("passport-local").Strategy;

require("./models/user");
require("./services/passport");
require("./routes/auth");

dotenv.config();

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

mongoose
  .connect(process.env.MONGO_URL, {
    useUnifiedTopology: true,
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.use(
  session({
    secret: "nuttrite",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
  })
);
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
passport.use(new LocalStrategy(User.authenticate()));

app.get("/", function (req, res) {
  res.send(req.user);
});

app.use("/api/contactUsInquiry", contactUsInquiryRoute);
app.use("/api/userSurveyData", userSurveyRoute);
app.use("/api/newUser", userRegisterRoute);
const PORT = 8000;

app.listen(PORT);

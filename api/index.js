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

require("./models/user");
require("./services/passport");

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

require("./routes/auth")(app);
app.get("/", function (req, res) {
  res.send(req.user);
});

app.use("/api/contactUsInquiry", contactUsInquiryRoute);
app.use("/api/userSurveyData", userSurveyRoute);

const PORT = 8000;

app.listen(PORT);

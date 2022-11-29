const router = require("express").Router();
const mongoose = require("mongoose");
const UserSurveyData = require("../models/userSurveyData");

router.post("/send", async (req, res) => {
  try {
    const userSurveyDataObj = new UserSurveyData(req.body);

    const userSurveyDataObject = await userSurveyDataObj.save();
    res.status(200).json(userSurveyDataObject);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

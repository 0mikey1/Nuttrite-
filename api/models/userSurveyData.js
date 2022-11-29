const mongoose = require("mongoose");

const userSurveyDataSchema = new mongoose.Schema(
  {
    sex: {
      type: String,
    },
    age: {
      type: String,
    },
    heightInFeet: {
      type: String,
    },
    heightRemainderInches: {
      type: String,
    },
    weight: {
      type: String,
    },
    activityLevel: {
      type: String,
    },
    fitnessGoal: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("UserSurveyData", userSurveyDataSchema);

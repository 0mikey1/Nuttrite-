const mongoose = require("mongoose");

const contactUsInquirySchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    message: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("contactUsInquiry", contactUsInquirySchema);

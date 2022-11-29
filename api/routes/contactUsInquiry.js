const router = require("express").Router();
const mongoose = require("mongoose");
const ContactUsInquiry = require("../models/contactUsInquiry");

router.post("/send", async (req, res) => {
  try {
    const contactUsInquiry = new ContactUsInquiry({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
    });

    const inquiry = await contactUsInquiry.save();
    res.status(200).json(inquiry);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

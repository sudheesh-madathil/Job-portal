const mongoose = require("mongoose");

const employerRegister = new mongoose.Schema({
  companyName: { type: String, required: true },
  companyLogo: { type: String },
  industry: { type: String, required: true },
  companySize: { type: Number, required: true },
  companyWebsite: { type: String },
  yearEstablished: { type: Number },
  contactName: { type: String, required: true },
  contactEmail: { type: String, required: true },
  contactPhone: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  country: { type: String, required: true },
  postalCode: { type: String, required: true },
  username: { type: String, required: true,   },
  password: { type: String, required: true },
  linkedin: { type: String },
  twitter: { type: String },
  facebook: { type: String },
  postedAt: {
    type: Date,
    default: Date.now,
  },

});

module.exports = mongoose.model("EmployerRegister", employerRegister);

const mongoose = require("mongoose");
const { string } = require("prop-types");

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  confirmPassword: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  address: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  gender: { type: String, required: true, enum: ["male", "female", "other"] },
  professionalTitle: { type: String, required: true },
  currentEmployer: { type: String },
  currentJobTitle: { type: String },
  experienceLevel: {
    type: String,
    required: true,
    enum: ["entry", "mid", "senior"],
  },
  industry: { type: String, required: true },
  skills: { type: String, required: true },
  resume: { type: String, },
  linkedIn: { type: String },
  github: { type: String },
  portfolio: { type: String },
  education: { type: String, required: true },
  certifications: { type: String },
  preferredLocations: { type: String, required: true },
  workAuthorization: {
    type: String,
    required: true,
    enum: ["citizen", "permanentResident", "workVisa", "studentVisa"],
  },
  startDate: { type: String, required: true },
});

module.exports = mongoose.model("UserRegister", userSchema);

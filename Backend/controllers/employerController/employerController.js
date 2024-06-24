// controllers/jobController.js
var express = require("express");
var router = express.Router();
const Job = require('../../models/employer/EmployerSchema');

router.post = async (req, res) => {
  const { industryArea, monthlySalary, qualifications, location, experience, employmentStatus, positions, gender } = req.body;
  try {
    const job = new Job({
      industryArea,
      monthlySalary,
      qualifications,
      location,
      experience,
      employmentStatus,
      positions,
      gender,
    
    });
    await job.save();
    res.status(201).json({ message: 'Job posted successfully', job });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = router;
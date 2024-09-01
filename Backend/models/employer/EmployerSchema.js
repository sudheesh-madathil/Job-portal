// models/job.js
const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({

  industryArea: {
    type: String,
    required: true,

  },
  monthlySalary: {
    type: String,
    required: true,

  },
  qualifications: {
    type: String,
    required: true,

  },
  location: {
    type: String,
    required: true,
   
  },
  experience: {
    type: String,
    required: true,

  },
  employmentStatus: {
    type: String,
    required: true,
  
  },
  positions: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,

  },
  companyName: {
    type: String,
    required: true,

  },
  postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Employer', required: true },
  jobId: { type: String, unique: true, required: true },

  postedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Job', JobSchema);

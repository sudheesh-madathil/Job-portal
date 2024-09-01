const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
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
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employer',
    required: true,
  },
  jobId: {
    type: String,
    unique: true,
    required: true,
  },
  userId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,

  },
  postedAt: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ['pending', 'accepted', 'rejected'],
    default: 'pending',
  },
});
// Create a compound unique index on jobId and userId
jobSchema.index({ jobId: 1, userId: 1 }, { unique: true });
const Job = mongoose.model('applyedJob', jobSchema);

module.exports = Job;

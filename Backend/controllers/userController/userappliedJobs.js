const Appliedjob = require("../../models/User/UserAppliedJob");
const { v4: uuidv4 } = require("uuid");
const mongoose = require("mongoose");
exports.post = async (req, res) => {
  const {
   
    industryArea,
    monthlySalary,
    qualifications,
    location,
    experience,
    employmentStatus,
    positions,
    gender,
    postedBy,
    jobId,
    postedAt,
    userId,
  } = req.body; // Destructure all necessary fields from req.body

  console.log(req.body, "job applied data");

  try {
    const jobApplied = new Appliedjob({
    
      industryArea,
      monthlySalary,
      qualifications,
      location,
      experience,
      employmentStatus,
      positions,
      gender,
      postedBy,
      jobId,
      postedAt,
      userId,
    });

    await jobApplied.save();

    res.status(201).json({ message: "successfully", jobApplied });
  } catch (error) {

    if (error.code === 11000){
      res.status(400).json({ message: "You have already applied for this job." });
    } else {
      console.error("Error saving job application:", error.stack);
      res.status(500).json({ message: error.message });
    }
  }
};

// Function to get all jobs
exports.getJob = async (req, res) => {
  try {
    const userjobs = await Appliedjob.find();
    res.status(200).json(userjobs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//get job  bye id for employer

exports.getUserJobById = async (req, res) => {
  const { postedBy } = req.params;
  console.log(`Received postedBy: ${postedBy}`); // Log the received postedBy

  try {
    if (!postedBy) {
      return res.status(400).json({ message: "postedBy parameter is missing" });
    }

    const jobs = await Appliedjob.find({ postedBy });
    console.log(`Found jobs: ${jobs}`); // Log the found jobs or empty array

    if (!Appliedjob || Appliedjob.length === 0) {
      return res.status(404).json({ message: "Jobs not found" });
    }

    res.status(200).json(jobs);
  } catch (error) {
    console.error(`Error retrieving jobs: ${error.message}`); // Log any errors
    res.status(500).json({ message: error.message });
  }
};

//get job for user

exports.getUserJobHistory = async (req, res) => {
  const { id } = req.params;
  console.log(`Received userid: ${id}`); // Log the received postedBy

  try {
    if (!id) {
      return res.status(400).json({ message: "postedBy parameter is missing" });
    }

    const jobs = await Appliedjob.find({ userId:id });
    console.log(`Found user jobs: ${jobs}`); // Log the found jobs or empty array

    if (!Appliedjob || Appliedjob.length === 0) {
      return res.status(404).json({ message: "Jobs not found" });
    }

    res.status(200).json(jobs);
  } catch (error) {
    console.error(`Error retrieving jobs: ${error.message}`); // Log any errors
    res.status(500).json({ message: error.message });
  }
};

// Function to update job status by ID
exports.updateJobStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  console.log(id,"job id and updatating ")
  console.log(status,"status id and updatating ")


  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid job ID" });
  }

  try {
    const updatedJob = await Appliedjob.findByIdAndUpdate(
      id,
      { status },
      { new: true } // Returns the updated document
    );

    if (!updatedJob) {
      return res.status(404).json({ message: "Job not found" });
    }

    res
      .status(200)
      .json({ message: "Job status updated successfully", updatedJob });
  } catch (error) {
    console.error("Error updating job status:", error.stack);
    res.status(500).json({ message: error.message });
  }
};

// Function to delete job application by ID
exports.deleteJob = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid job ID" });
  }

  try {
    const deletedJob = await Appliedjob.findByIdAndDelete(id);

    if (!deletedJob) {
      return res.status(404).json({ message: "Job not found" });
    }

    res.status(200).json({ message: "Job deleted successfully", deletedJob });
  } catch (error) {
    console.error("Error deleting job:", error.stack);
    res.status(500).json({ message: error.message });
  }
};

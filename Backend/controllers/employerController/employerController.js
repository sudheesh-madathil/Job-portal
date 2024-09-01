const Job = require("../../models/employer/EmployerSchema");
const { v4: uuidv4 } = require("uuid");
const mongoose = require('mongoose');

// Function to create a new job
const createJob = async (req, res) => {
  const { id } = req.params; // Extract the ID from the request parameters

  const {
    industryArea,
    monthlySalary,
    qualifications,
    location,
    experience,
    employmentStatus,
    positions,
    gender,
    companyName
  } = req.body;

  // Generate a unique jobId
  const jobId = uuidv4();

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
      postedBy: id, // Use the extracted ID as postedBy
      jobId, 
      companyName// Include the generated jobId
    });
    console.log("Received job posting request:", req.body); // Log the received data
    await job.save();
    res.status(201).json({ message: "Job posted successfully", job });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Function to get all jobs
const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const  getJobById = async (req, res) => {
  const { postedBy } = req.params;
  console.log(`Received postedBy: ${postedBy}`); // Log the received postedBy

  try {
    if (!postedBy) {
      return res.status(400).json({ message: "postedBy parameter is missing" });
    }

    const jobs = await Job.find({ postedBy });
    console.log(`Found jobs: ${jobs}`); // Log the found jobs or empty array

    if (!jobs || jobs.length === 0) {
      return res.status(404).json({ message: "Jobs not found" });
    }

    res.status(200).json(jobs);
  } catch (error) {
    console.error(`Error retrieving jobs: ${error.message}`); // Log any errors
    res.status(500).json({ message: error.message });
  }
};

// Function to delete a job by jobId
const deleteJobById = async (req, res) => {
  const { id } = req.params;

  try {
    if (!id) {
      return res.status(400).json({ message: "jobId parameter is missing" });
    }

    const deletedJob = await Job.findByIdAndDelete(id);

    if (!deletedJob) {
      return res.status(404).json({ message: "Job not found" });
    }

    res.status(200).json({ message: "Job deleted successfully", deletedJob });
  } catch (error) {
    console.error(`Error deleting job: ${error.message}`);
    res.status(500).json({ message: error.message });
  }
};


// Function to search for jobs by location
const searchJobsByLocation = async (req, res) => {
  const { location } = req.query; // Extract the location from query parameters

  console.log(`Searching for jobs in location: ${location}`); // Log the search location

  try {
    if (!location) {
      return res.status(400).json({ message: "Location query parameter is missing" });
    }

    // Use a regular expression to perform a case-insensitive search
    const locationRegex = new RegExp(location, 'i');
    const jobs = await Job.find({ location: locationRegex });

    console.log(`Found jobs: ${jobs}`); // Log the found jobs

    if (!jobs || jobs.length === 0) {
      return res.status(404).json({ message: "No jobs found in the specified location" });
    }

    res.status(200).json(jobs);
  } catch (error) {
    console.error(`Error searching for jobs: ${error.message}`); // Log any errors
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createJob,
  getJobs,
  getJobById,
  deleteJobById,
  searchJobsByLocation
};

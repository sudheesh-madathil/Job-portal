import  { useState, useEffect } from "react";
import axios from "axios";
import "./jobHistory.css";
import { useParams } from "react-router-dom";

const EmJobHistory = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
const {id } = useParams()
  useEffect(() => {
    // Replace with your actual API endpoint
    const fetchJobs = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/Employer/postedBy/${id}`);
        setJobs(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;



  const handleDeleteJob = async (jobId) => {
    try {
      await axios.delete(`http://localhost:3000/Employer/${jobId}`);
      // After successful deletion, update jobs state by filtering out the deleted job
      setJobs((prevJobs) => prevJobs.filter((job) => job._id !== jobId));
    } catch (error) {
      console.error("Error deleting job:", error.message);
      // Handle error as needed
    }
  };

  return (
    <div className="job-history">
 
      {jobs.length > 0 ? (
        <ul>
          {jobs.map((job) => (
            <li key={job._id}>
              <h3>{job.industryArea}</h3>
              <p>Salary: {job.monthlySalary}</p>
              <p>Qualifications: {job.qualifications}</p>
              <p>Location: {job.location}</p>
              <p>Experience: {job.experience}</p>
              <p>Employment Status: {job.employmentStatus}</p>
              <p>Positions: {job.positions}</p>
              <p>Gender: {job.gender}</p>
              <p>Posted At: {new Date(job.postedAt).toLocaleString()}</p>
              <button className="DeleteBtn" onClick={() => handleDeleteJob(job._id)}>delete</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No jobs found.</p>
      )}
    </div>
  );
};

export { EmJobHistory };

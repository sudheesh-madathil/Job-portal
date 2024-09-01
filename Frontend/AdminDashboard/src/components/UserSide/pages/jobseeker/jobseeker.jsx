



import  { useState, useEffect } from "react";
import axios from "axios";


const Jobseeker = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get("http://localhost:3000/Employer/667e826e5c8f072664cf8a0f");
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

  return (
    <div className="job-history">
          
      <h2>Job History</h2>
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
            </li>
          ))}
        </ul>
      ) : (
        <p>No jobs found.</p>
      )}
    </div>
  );
};

export { Jobseeker };

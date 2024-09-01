import { useEffect, useState } from "react";
import { UserNavbar } from "../navbar/UserNavbar";
import "./JobHistory.css";
import axios from "axios";
import { useParams } from "react-router-dom";

const UserJobHistory = () => {
  const { id } = useParams();
  const [jobHistory, setJobHistory] = useState([]);

  useEffect(() => {
    const fetchUserJobData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/userApplyedJob/byuser/${id}`);
        setJobHistory(response.data);
      } catch (err) {
        console.error(err.message);
      }
    };

    fetchUserJobData();
  }, [id]);

  const getStatusClassName = (status) => {
    switch (status) {
      case "rejected":
        return "statusRejected";
      case "pending":
        return "statusPending";
      case "accepted":
        return "statusAccepted";
      default:
        return "";
    }
  };

  return (
    <>
      <UserNavbar />
      <div className="jobHistoryContainer">
        {jobHistory.length > 0 ? (
          <table className="jobHistoryTable">
            <thead>
              <tr>
                <th>Job</th>
                <th>Applied On</th>
                <th>Monthly Salary</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {jobHistory.map((job) => (
                <tr key={job._id}>
                  <td>{job.industryArea}</td>
                  <td>{new Date(job.postedAt).toLocaleDateString()}</td>
                  <td>{job.monthlySalary}</td>
                  <td className={getStatusClassName(job.status)}>
                    {job.status}
                  </td>
                  <td className="actionBtn">
                    {/* Placeholder for potential actions, like a button */}
                    <button className="actionButton">View</button>
                    <button className="deleteButton">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No job history available.</p>
        )}
      </div>
    </>
  );
};

export { UserJobHistory };

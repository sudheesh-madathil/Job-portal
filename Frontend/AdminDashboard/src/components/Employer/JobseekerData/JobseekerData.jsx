import { useState, useEffect } from "react";
import "./jobseekerData.css";
import axios from "axios";
import { useParams } from "react-router-dom";

const JobseekerData = () => {
  const { userId } = useParams();
  const [jobData, setJobData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserJobData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/UserRegister/${userId}`
        );
        setJobData(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserJobData();
  }, [userId]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return (
    <div className="jobseeker-data-container">
      {jobData ? (
        <table className="jobseeker-data-table">
          <thead>
            {/* <tr>
              <th>Field</th>
              <th>Value</th>
            </tr> */}
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>Full Name</strong>
              </td>
              <td>{jobData.fullName}</td>
            </tr>
            <tr>
              <td>
                <strong>Email</strong>
              </td>
              <td>{jobData.email}</td>
            </tr>
            <tr>
              <td>
                <strong>Address</strong>
              </td>
              <td>{jobData.address}</td>
            </tr>
            <tr>
              <td>
                <strong>contact number</strong>
              </td>
              <td>{jobData.phoneNumber}</td>
            </tr>
            <tr>
              <td>
                <strong>experienceLevel</strong>
              </td>
              <td>{jobData.experienceLevel}</td>
            </tr>
            <tr>
              <td>
                <strong>skills</strong>
              </td>
              <td>{jobData.skills}</td>
            </tr>
            <tr>
              <td>
                <strong>resume</strong>
              </td>
              <td>{jobData.resume}</td>
            </tr>
            <tr>
              <td>
                <strong>education</strong>
              </td>
              <td>{jobData.education}</td>
            </tr>
            <tr>
              <td>
                <strong>professionalTitle</strong>
              </td>
              <td>{jobData.professionalTitle}</td>
            </tr>
            <tr>
              <td>
                <strong>experienceLevel</strong>
              </td>
              <td>{jobData.experienceLevel}</td>
            </tr>
            <tr>
              <td>
                <strong>currentJobTitle</strong>
              </td>
              <td>{jobData.currentJobTitle}</td>
            </tr>
            <tr>
              <td>
                <strong>
                currentEmployer</strong>
              </td>
              <td>{jobData.
currentEmployer}</td>
            </tr>
            <tr>
              <td>
                <strong>linkedIn
                </strong>
              </td>
              <td>{jobData.linkedIn
              }</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p>No job data found for this user.</p>
      )}
    </div>
  );
};

export { JobseekerData };

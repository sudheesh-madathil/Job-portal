import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { FaRegEye, FaFacebookMessenger } from "react-icons/fa";
import { useEffect, useState } from "react";
import { MdOutlineDelete } from "react-icons/md";
import "./EmApplications.css";

const EmApplications = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [userJobData, setUserJobData] = useState([]);

console.log(userJobData,"get user applyed job only")
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserJobData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/userApplyedJob/${id}`);
        setUserJobData(response.data);
    

        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchUserJobData();
  }, [id]);

  useEffect(() => {
    const fetchUserData = async () => {
      const uniqueUserIds = [...new Set(userJobData.map((job) => job.userId))];

      const userDataPromises = uniqueUserIds.map(async (userId) => {
        try {
          const response = await axios.get(`http://localhost:3000/UserRegister/${userId}`);
          return response.data;
        } catch (err) {
          setError(err.message);
        }
      });

      const userDataArray = await Promise.all(userDataPromises);
      setUserData(userDataArray);
      setLoading(false);
    };

    if (userJobData.length > 0) {
      fetchUserData();
    }
  }, [userJobData]);

  const userviewBtn = (userId) => {
    navigate(`/Employer/Dashboard/${id}/jobseekerData/${userId}`);
  };

  const usermessage = (userId) => {
    navigate(`/Employer/Dashboard/${id}/messages/${id}/${userId}`);
  };

  // const handleStatusChange = async (jobId, newStatus) => {
  //   try {
  //     await axios.put(`http://localhost:3000/userApplyedJob/${jobId}`, { status: newStatus });
  //     setUserJobData((prevData) =>
  // prevData.map((job) =>
  //         job._id === jobId ? { ...job, status: newStatus } : job

  //       )
    
  //     );
  //   } catch (err) {
  //     console.error("Error updating status:", err.message);
  //   }
  // };


  const handleStatusChange = async (jobId, newStatus) => {
  try {
    // Send the new status to the backend
    const response = await axios.put(`http://localhost:3000/userApplyedJob/${jobId}`, { status: newStatus });
    console.log('Response:', response.data);

    // Update the userJobData state to reflect the new status
    setUserJobData((prevData) =>
      prevData.map((job) =>
        job._id === jobId ? { ...job, status: newStatus } : job
      )
    );

    // Debug: Log the updated state
    console.log('Updated job data:', userJobData);
  } catch (err) {
    console.error("Error updating status:", err.message);
  }
};


  const handleDelete = async (jobId) => {
    try {
      await axios.delete(`http://localhost:3000/userApplyedJob/${jobId}`);
      setUserJobData((prevData) => prevData.filter((job) => job._id !== jobId));
    } catch (err) {
      console.error("Error deleting job:", err.message);
    }
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return (
    <div className="applications-container">
      {userJobData.map((job) => {
        const user = userData.find((user) => user._id === job.userId);
        return (
          <div key={job._id} className="applicationIteam">
            <div className="userImg">
              <img
                src="https://cdn.pixabay.com/photo/2020/10/23/14/54/woman-5678997_640.jpg"
                alt=""
              />
            </div>
            <div className="applicationList">
              {user && (
                <>
                  <div className="userName">{user.fullName}</div>
                  <div className="jobName">
                    <div className="applyedjob">{job.industryArea}</div>
                    <div className="applyedjob">{user.address}</div>
                    <div className="applyedjob">{job.experience}</div>
                  </div>
                  <div className="appview">
                    <div className="applyedjob">
                      <button onClick={() => userviewBtn(user._id)} className="eyebtn">
                        <FaRegEye size={24} />
                      </button>
                    </div>
                    <div className="applyedjob">
                      <select value={job.status} onChange={(e) => handleStatusChange(job._id, e.target.value)}>
                        <option value="pending">pending</option>
                        <option value="rejected">rejected</option>
                        <option value="accepted">accepted</option>
                      </select>
                    </div>
                    <div className="applyedjob">
                      <button onClick={() => usermessage(user._id)} className="eyebtn">
                        <FaFacebookMessenger size={24} />
                      </button>
                    </div>
                    <div className="applyedjob">
                      <button onClick={() => handleDelete(job._id)} className="eyebtn">
                        <MdOutlineDelete size={24} />
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export { EmApplications };

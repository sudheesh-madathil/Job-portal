import { UserNavbar } from "../navbar/UserNavbar";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import "./userHome.css";
import { UserFooter } from "../footer/UserFooter";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UserHome = () => {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [location, setLocation] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [userGoogleLogin, setUserGoogleLogin] = useState([]);
  const [userLogin, setUserLogin] = useState([]);
  const [appliedJobs, setAppliedJobs] = useState([]);
console.log(userGoogleLogin);
  const { id } = useParams();

  useEffect(() => {
    fetchJobs();
    fetchUserLoginData();
    fetchUserGoogleLoginData();
    fetchAppliedJobs();
  }, [id]);

  const fetchJobs = (searchLocation = "") => {
    const url = searchLocation
      ? `http://localhost:3000/Employer/search?location=${searchLocation}`
      : "http://localhost:3000/Employer";

    axios
      .get(url)
      .then((response) => {
        setJobs(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the jobs!", error);
      });
  };

  const fetchUserLoginData = () => {
    axios
      .get(`http://localhost:3000/userRegister/${id}`)
      .then((response) => {
        setUserLogin(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user login data:", error);
      });
  };

  const fetchUserGoogleLoginData = () => {
    axios
      .get(`http://localhost:3000/userLoginData/${id}`)
      .then((response) => {
        setUserGoogleLogin(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user Google login data:", error);
      });
  };

  const fetchAppliedJobs = () => {
    axios
      .get(`http://localhost:3000/userApplyedJob/byuser/${id}`)
      .then((response) => {
        setAppliedJobs(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the applied jobs!", error);
      });
  };

  const handleViewDetails = (job) => {
    setSelectedJob(job);
    setShowDetails(true);
  };

  const handleSearch = () => {
    fetchJobs(location);
  };

  const jobApply = async () => {
    if (!selectedJob || appliedJobs.some(job => job.jobId === selectedJob.jobId)) {
     
      
      return;
    }

    const applicationData = {
      ...selectedJob,
      userId: id,
    };

    try {
      console.log("Applying for job with data:", applicationData);
      const response = await axios.post(
        "http://localhost:3000/userApplyedJob",
        applicationData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      let timerInterval;
      Swal.fire({
        title: "Your job application has been successfully submitted!",
        html: "I will close in <b></b> milliseconds.",
        timer: 4000,
        timerProgressBar: true,
        customClass: {
          popup: "custom-popup",
          title: "custom-title",
          html: "custom-html",
        },
        didOpen: () => {
          Swal.showLoading();
          const timer = Swal.getPopup().querySelector("b");
          timerInterval = setInterval(() => {
            timer.textContent = `${Swal.getTimerLeft()}`;
          }, 100);
        },
        willClose: () => {
          clearInterval(timerInterval);
        },
      }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log("I was closed by the timer");
        }
      });
      console.log(response.data);
    } catch (error) {
      console.error("There was an error applying for the job:", error);
    }
  };

  return (
    <>
      <UserNavbar userName={userLogin} />
      <div className="userHomemain">
        <div className="userSearchbar">
          <div className="Ulabel">
            <label className="userLabel">
              <h2>One million success stories</h2>
              <h3>Start yours today</h3>
              <p>Find 40,000+ jobs, Employment & Career Opportunities</p>
            </label>
          </div>
        </div>
        <div className="sticky">
          <div className="searchIteam">
            <div className="searchlist">
              <input
                placeholder="Enter Skills or job Title"
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="searchlist">
              <input
                placeholder="Location"
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div className="searchlist">
              <button className="searchlistBtn" onClick={handleSearch}>
                <FaSearch />
              </button>
            </div>
          </div>
        </div>

        <div className="jobDetails">
         
          <div className={`jobdetailsList ${selectedJob && showDetails ? 'show' : 'hide'}`}>
            {selectedJob && showDetails && (
              <>
                <h5>{selectedJob.companyName}</h5>
                <p>Industry Area: {selectedJob.industryArea}</p>
                <p>Experience: {selectedJob.experience}</p>
                <p>Location: {selectedJob.location}</p>
                <p>Gender: {selectedJob.gender}</p>
                <p>Qualifications: {selectedJob.qualifications}</p>
                <p>Employment Status: {selectedJob.employmentStatus}</p>
                <p>Positions: {selectedJob.positions}</p>
                <p>Monthly Salary: {selectedJob.monthlySalary}</p>
                <p>
                  Posted At: {new Date(selectedJob.postedAt).toLocaleString()}
                </p>
                <div className="AppyBtn">
                  {appliedJobs.some(job => job.jobId === selectedJob.jobId) ? (
                    <button className="notApplybtn" disabled>
                      Applied
                    </button>
                  ) : (
                    <button onClick={jobApply} className="Applybtn">
                      Apply Now
                    </button>
                  )}
                </div>
              </>
            )}
          </div>
          <div className="JobCard">
            {jobs.map((job) => (
              <div key={job.id} className="jobList">
                <div className="JobIteam">
                  <h5> {job.industryArea}</h5>
         <h6> {job.companyName}</h6>
         
                  <p>Experience: {job.experience}</p>
                  <p>Location: {job.location}</p>
                  <p>Qualifications: {job.qualifications}</p>
                  <p>Employment Status: {job.employmentStatus}</p>
                  <button
                    className="JobIteamBtn"
                    onClick={() => handleViewDetails(job)}
                  >
                    View
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <UserFooter />
    </>
  );
};

export { UserHome };

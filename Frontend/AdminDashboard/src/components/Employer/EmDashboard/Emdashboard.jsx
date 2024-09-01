import { NavLink, Route, Routes, useParams } from "react-router-dom";
import "./EmDashboard.css";
import { EmNavbar } from "../EmNavbar/Emnavbar";
import { EmPostJob } from "../EmpostJob/EmPostJob";
import { Emmessage } from "../Emmessages/Emmessages";
import { EmProfile } from "../EmProfile/EmProfile";
import { EmRerports } from "../Reports/EmReports";
import { EmApplications } from "../Applications/EmApplications";
import { EmNotification } from "../EmNotifications/EmNotification";
import { useEffect, useState } from "react";
import axios from "axios";
import { EmJobHistory } from "../jobHistory/JobHistory";
import { JobseekerData } from "../JobseekerData/JobseekerData";

const EmployerDashboard = () => {
  const { id } = useParams();
  const [RegisterData, setRegisterData] = useState([]);
  console.log(RegisterData, "register data");

  useEffect(() => {
    const fetchRegisterData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/Emregister/${id}`);
        setRegisterData(response.data);
        console.log(response.data, "register data");
      } catch (error) {
        console.error("Error fetching registration data:", error);
      }
    };

    if (id) {
      fetchRegisterData();
    }
  }, [id]);

  return (
    <div className="Emplyermain">
      <EmNavbar companyName={RegisterData.companyName} />
      <div className="EmnavList">
        <div className="EmNavIteam">
          <Routes>
            <Route path="job-postings/:id" element={<EmPostJob />} />
            <Route path="messages/:id/:userId" element={<Emmessage />} />
            <Route path="company-profile/:id" element={<EmProfile id={id} />} />
            <Route path="analytics/:id" element={<EmRerports />} />
            <Route path="applications/:id" element={<EmApplications />} />
            <Route path="notifications/:id" element={<EmNotification />} />
            <Route path="postedBy/:id" element={<EmJobHistory />} />
            <Route path="jobseekerData/:userId" element={<JobseekerData />} />
          </Routes>
        </div>
        <div className="employer-sidebar">
          <ul>
            <li>
              <NavLink
                to={`/Employer/Dashboard/${id}`}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/Employer/Dashboard/${id}/job-postings/${id}`}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Job Postings
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/Employer/Dashboard/${id}/postedBy/${id}`}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Job history
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/Employer/Dashboard/${id}/applications/${id}`}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Applications
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/Employer/Dashboard/${id}/messages/${id}/${id}`}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Messages
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/Employer/Dashboard/${id}/company-profile/${id}`}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Company Profile
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/Employer/Dashboard/${id}/analytics/${id}`}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Analytics & Reports
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/Employer/Dashboard/${id}/notifications/${id}`}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Notifications
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/Employer/Dashboard/${id}/billing`}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Billing
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/Employer/Dashboard/${id}/support`}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Support
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Logout
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EmployerDashboard;

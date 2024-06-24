import { useState } from "react";
import "./campaymanagement.css";
import { AdminHome } from "../AdminHome/AdminHome";
import { NavBar } from "../AdminHome/navbar";

const CompanyManagement = () => {
  const initialCompanies = [
    {
      id: 1,
      name: "Tech Corp",
      email: "contact@techcorp.com",
      status: "Active",
      activities: "Posted 5 jobs this month",
      feedback: "No recent feedback",
    },
    {
      id: 2,
      name: "Design Studio",
      email: "info@designstudio.com",
      status: "Suspended",
      activities: "Profile updated recently",
      feedback: "Complaint about response time",
    },
    {
      id: 3,
      name: "Finance Group",
      email: "support@financegroup.com",
      status: "Active",
      activities: "Posted 3 jobs this month",
      feedback: "Positive feedback on services",
    },
  ];

  const [companies, setCompanies] = useState(initialCompanies);

  const handleEdit = (id) => {
    console.log("Edit company with id:", id);
  };

  const handleSuspend = (id) => {
    setCompanies(
      companies.map((company) =>
        company.id === id
          ? {
              ...company,
              status: company.status === "Active" ? "Suspended" : "Active",
            }
          : company
      )
    );
  };

  const handleFeedback = (id) => {
    console.log("Respond to feedback for company with id:", id);
  };

  return (
    <div className="company-management">
      <AdminHome />

      <div className="company-dashboard">
        <NavBar/>
        <table className="company-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Activities</th>
              <th>Feedback</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {companies.map((company) => (
              <tr key={company.id}>
                <td>{company.name}</td>
                <td>{company.email}</td>
                <td>
                  <span className={`badge ${company.status.toLowerCase()}`}>
                    {company.status}
                  </span>
                </td>
                <td>{company.activities}</td>
                <td>{company.feedback}</td>
                <td>
                  <button
                    className="edit-btn"
                    onClick={() => handleEdit(company.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="suspend-btn"
                    onClick={() => handleSuspend(company.id)}
                  >
                    {company.status === "Active" ? "Suspend" : "Activate"}
                  </button>
                  <button
                    className="feedback-btn"
                    onClick={() => handleFeedback(company.id)}
                  >
                    Feedback
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export { CompanyManagement };

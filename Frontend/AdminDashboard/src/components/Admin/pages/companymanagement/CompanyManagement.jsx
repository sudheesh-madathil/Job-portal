import { useEffect, useState } from "react";
import "./campaymanagement.css"
import { AdminHome } from "../AdminHome/AdminHome";
import { NavBar } from "../AdminHome/navbar";
import axios from "axios";

const CompanyManagement = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/Emregister')
      .then((response) => {
        setCompanies(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the company data!", error);
      });
  }, []); // Adding empty dependency array to prevent infinite loop

  const handledelete = (id) => {
 axios.delete(`http://localhost:3000/Emregister/${id}`).then((responce)=>{
  console.log(responce.data,"responce delete");
 })
  };

  const handleSuspend = (id) => {
    setCompanies(
      companies.map((company) =>
        company._id === id
          ? {
              ...company,
              status: company.status === "Active" ? "Suspended" : "Active",
            }
          : company
      )
    );
  };



  return (
    <div className="company-management">
      <AdminHome />
      <div className="company-dashboard">
        <NavBar />
        <table className="company-table">
          <thead>
            <tr>
              <th>Company Name</th>
              <th>Contact Name</th>
              <th>Contact Email</th>
              <th>Status</th>
              <th>Industry</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {companies.map((company) => (
              <tr key={company._id}>
                <td>{company.companyName}</td>
                <td>{company.contactName}</td>
                <td>{company.contactEmail}</td>
                <td>
                  <span className={`badge ${company.status ? company.status.toLowerCase() : ''}`}>
                    {company.status || 'Unknown'}
                  </span>
                </td>
                <td>{company.industry}</td>
                <td>
                  <button className="edit-btn" onClick={() => handledelete(company._id)}>
                    delete
                  </button>
                  <button className="suspend-btn" onClick={() => handleSuspend(company._id)}>
                    {company.status === "Active" ? "Suspend" : "Activate"}
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


import './ReportingAnalytics.css';
import { AdminHome } from '../AdminHome/AdminHome';
import { NavBar } from '../AdminHome/navbar';
import { useEffect, useState } from 'react';
import axios from 'axios';
const ReportingAnalytics = () => {
  const [jobData,setjobData]= useState([])
console.log(jobData,"jobData");
 useEffect(()=>{
  axios.get("http://localhost:3000/Employer").then((responce)=>{
    setjobData(responce.data)
  })

 },[])


  return (
    <div className='job-reports'>
      <AdminHome />
      <div className='reports-content'>
        <NavBar/>

        <table className='reports-table'>
          <thead>
            <tr>
              <th>Job Title</th>
              <th>Company</th>
              <th>Status</th>
              <th>Applications</th>
            </tr>
          </thead>
          <tbody>
            {jobData.map((report) => (
              <tr key={report.id}>
                <td>{report.
industryArea}</td>
                <td>{report.
companyName}</td>
                <td>{report.status}</td>
                <td>{report.applications}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export { ReportingAnalytics };

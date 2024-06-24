
import './ReportingAnalytics.css';
import { AdminHome } from '../AdminHome/AdminHome';
import { NavBar } from '../AdminHome/navbar';

const ReportingAnalytics = () => {
  const jobReportData = [
    { id: 1, jobTitle: 'Software Engineer', company: 'Tech Corp', status: 'Active', applications: 45 },
    { id: 2, jobTitle: 'Data Scientist', company: 'Data Inc.', status: 'Closed', applications: 30 },
    { id: 3, jobTitle: 'Product Manager', company: 'Innovate LLC', status: 'Active', applications: 60 },
    // Add more data as needed
  ];

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
            {jobReportData.map((report) => (
              <tr key={report.id}>
                <td>{report.jobTitle}</td>
                <td>{report.company}</td>
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

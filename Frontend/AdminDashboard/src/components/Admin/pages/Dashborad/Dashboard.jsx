// import { AdminHome } from "../AdminHome/AdminHome";
// import { NavBar } from "../AdminHome/navbar";

// import "./Dashboard.css"


// const Dashboard = () => {


//   return (
//     <div className="dashboard">
//      <AdminHome/>
//       <main className="main-content">
//         <NavBar/>
//         <div className="dashboard-widgets">
//           <div className="widget">
//             <h3>Total Users</h3>
//             <p>1500</p>
//           </div>
//           <div className="widget">
//             <h3>Active Jobs</h3>
//             <p>300</p>
//           </div>
//           <div className="widget">
//             <h3>Pending Applications</h3>
//             <p>45</p>
//           </div>
//         </div>
//         <div className="dashboard-section">
//           <div className="recent-activities">
//             <h3>Recent Activities</h3>
//             <ul>
//               <li>User John Doe applied for Software Engineer.</li>
//               <li>New job listing for Data Scientist.</li>
//               <li>User Jane Smith updated profile.</li>
//             </ul>
//           </div>
//           <div className="statistics">
//             <h3>Statistics</h3>
//             <p>Chart Placeholder</p>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export { Dashboard };

import { AdminHome } from "../AdminHome/AdminHome";
import { NavBar } from "../AdminHome/navbar";
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <AdminHome />
   
      <div className="container mt-4">
      <NavBar/>
      <div className="dashboarditem">

    
        <div className="row row-cards">
          <div className="col-md-4">
            <div className="card mb-4 dashboard-card">
              <div className="card-body">
                <h5 className="dashboard-card-title">Total Users</h5>
                <div className="dashboard-card-text">
                  <i className="fas fa-users icon-size"></i>
                  <span className="dashboard-card-value">1500</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4 dashboard-card">
              <div className="card-body">
                <h5 className="dashboard-card-title">Active Jobs</h5>
                <div className="dashboard-card-text">
                  <i className="fas fa-briefcase icon-size"></i>
                  <span className="dashboard-card-value">300</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4 dashboard-card">
              <div className="card-body">
                <h5 className="dashboard-card-title">Pending Applications</h5>
                <div className="dashboard-card-text">
                  <i className="fas fa-file-alt icon-size"></i>
                  <span className="dashboard-card-value">45</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row row-cards">
          <div className="col-md-6">
            <div className="card mb-4 dashboard-card">
              <div className="card-body">
                <h5 className="dashboard-card-title">Recent Activities</h5>
                <ul className="dashboard-recent-activities">
                  <li>User John Doe applied for Software Engineer.</li>
                  <li>New job listing for Data Scientist.</li>
                  <li>User Jane Smith updated profile.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card mb-4 dashboard-card">
              <div className="card-body">
                <h5 className="dashboard-card-title">Statistics</h5>
                <div id="chart-container"> {/* Placeholder for chart */}</div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export { Dashboard };

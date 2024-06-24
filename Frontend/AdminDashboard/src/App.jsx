import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./components/Admin/pages/Dashborad/Dashboard";
import { UserManagement } from "./components/Admin/pages/usermanagement/UserManagement";
import { CompanyManagement } from "./components/Admin/pages/companymanagement/CompanyManagement";
import { JobManagement } from "./components/Admin/pages/jobmanagement/JobManagement";
import { ReportingAnalytics } from "./components/Admin/pages/ReportingAnalytics/ReportingAnalytics";
import { CommunicationTools } from "./components/Admin/pages/communication/CommunicationTools";
import { PaymentSettings } from "./components/Admin/pages/PaymentSettings/PaymentSettings";
import { AdminHome } from "./components/Admin/pages/AdminHome/AdminHome";
import { AdminLogin } from "./components/Admin/pages/Auth/Login";
import { AdminRegister } from "./components/Admin/pages/Auth/Register";
import { UserNavbar } from "./components/UserSide/pages/navbar/UserNavbar";
import { UserHome } from "./components/UserSide/pages/userhome/UserHome";
import { EmployerRegister } from "./components/Employer/auth/EmployerRegister";
import { EmployerLogin } from "./components/Employer/auth/EmpolyerLogin";
import { EmPostJob } from "./components/Employer/EmpostJob/EmPostJob";

function App() {
  return (
    <>
      <Routes>
        <Route path="/AdminHome" element={<AdminHome />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/users" element={<UserManagement />} />
        <Route path="/admin/companies" element={<CompanyManagement />} />
        <Route path="/admin/jobs" element={<JobManagement />} />
        <Route path="/admin/reports" element={<ReportingAnalytics />} />
        <Route path="/admin/communication" element={<CommunicationTools />} />
        <Route path="/admin/paymentSettings" element={<PaymentSettings />} />
        <Route path="/" element={<AdminLogin />} />
        <Route path="/admin/adminregister" element={<AdminRegister />} />


        <Route path="/user/nav" element={<UserNavbar/>} />
        <Route path="/user/userhome" element={<UserHome/>} />
        
        <Route path="/Employer/Register" element={<EmployerRegister/>}/>
        <Route path="/Employer/Login" element={<EmployerLogin/>}/>
        <Route path="/Employer/PostJob" element={<EmPostJob/>}/>
       
      </Routes>
    </>
  );
}

export default App;

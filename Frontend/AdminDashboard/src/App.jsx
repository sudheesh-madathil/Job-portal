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
import EmployerDashboard from "./components/Employer/EmDashboard/Emdashboard";
import { EmNavbar } from "./components/Employer/EmNavbar/Emnavbar";
import { UserLogin } from "./components/UserSide/pages/auth/UserLogin";
import { UserRegister } from "./components/UserSide/pages/auth/UserRegister";
import { EmJobHistory } from "./components/Employer/jobHistory/JobHistory";
import { Jobseeker } from "./components/UserSide/pages/jobseeker/jobseeker";
import { LandingPage } from "./components/UserSide/pages/UserLandingPage/LandingPage";
import { PortalType } from "./components/UserSide/pages/PortalType/PortalType";
import { PortalRegister } from "./components/UserSide/pages/PortalRegister/PortalRegister";
import { PortalLogin } from "./components/UserSide/pages/PortalLogin/portalLogin";
 import { UserJobApplication } from "./components/UserSide/pages/JobApplicationForm/UserJobApplication";
import { UserJobHistory } from "./components/UserSide/pages/jobList/JobHistory";
import { UserProfile } from "./components/UserSide/pages/userProfile/userProfile";
import { SendMessage } from "./components/Employer/sendMessage/sendMessage";
import { UserMessage } from "./components/UserSide/pages/UserMessage/Usermessage";
import { StudyNavBar } from "./components/Study-Abrod/Study-Navbar/Study-Navbar";
import { StudyHome } from "./components/Study-Abrod/Study-Home/Study-Home";
import { StudyFooter } from "./components/Study-Abrod/study-footer/Study-footer";
import { AdminLandingpage } from "./components/Admin/pages/AdminLogin/AdminLadingPage";
// import { Chat } from "./components/UserSide/pages/chat/chat";

function App() {
  return (
    <>
      <Routes>
      <Route path="/AdminLandingpage" element={<AdminLandingpage/>} />
        <Route path="/AdminHome" element={<AdminHome />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/users" element={<UserManagement />} />
        <Route path="/admin/companies" element={<CompanyManagement />} />
        <Route path="/admin/jobs" element={<JobManagement />} />
        <Route path="/admin/reports" element={<ReportingAnalytics />} />
        <Route path="/admin/communication" element={<CommunicationTools />} />
        <Route path="/admin/paymentSettings" element={<PaymentSettings />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/adminregister" element={<AdminRegister />} />
        <Route path="/user/userhome/:id" element={<UserHome />} />

        <Route path="/user/userProfile/:id" element={<UserProfile />} />
        <Route path="/user/nav" element={<UserNavbar />} />
        <Route path="/user/Login" element={<UserLogin />} />
        <Route path="/user/Register" element={<UserRegister />} />
        <Route path="/user/jobseeker" element={<Jobseeker />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/user/portalType" element={<PortalType />} />
        <Route path="/user/portalRegister" element={<PortalRegister />} />
        <Route path="/user/portalLogin" element={<PortalLogin />} />
        <Route path="/user/userJobHistory/:id" element={<UserJobHistory />} />
         <Route path="/user/userJobApplication/:id"  element={<UserJobApplication />}
        /> 

        <Route
          path="/user/sendmessage/:senderId/:receiverId"  element={<SendMessage />} />
        <Route path="/user/message/:id" element={<UserMessage />} />
        <Route path="/Employer/Register" element={<EmployerRegister />} />
        <Route path="/Employer/jobhistory" element={<EmJobHistory />} />
        <Route path="/Employer/Login" element={<EmployerLogin />} />
        <Route path="/Employer/PostJob/:id" element={<EmPostJob />} />
        <Route  path="/Employer/Dashboard/:id/*" element={<EmployerDashboard />}/>
        <Route path="/Employer/navbar" element={<EmNavbar />} />
        <Route path="/*" element={<EmployerDashboard />} />



        <Route path="/study/nav" element={<StudyNavBar/>} />
        <Route path="/study/Home" element={<StudyHome/>} />
        <Route path="/study/footer" element={<StudyFooter/>} />

        
      </Routes>
    </>
  );
}

export default App;

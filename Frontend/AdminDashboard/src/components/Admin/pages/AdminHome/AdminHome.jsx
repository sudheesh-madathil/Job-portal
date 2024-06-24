// src/AdminDashboard.jsx

import {  useNavigate } from 'react-router-dom';
import { CDBSidebar, CDBSidebarHeader, CDBSidebarContent, CDBSidebarMenu, CDBSidebarMenuItem, CDBSidebarFooter, CDBIcon } from 'cdbreact';






const AdminHome = () => {
  const navigate = useNavigate();

  return (
    <div className='main' >
      <CDBSidebar className='sidebarAdmin'>
        <CDBSidebarHeader prefix={<CDBIcon icon="bars" />}>
          <h5 className="m-0">Admin Panel</h5>
        </CDBSidebarHeader>

        <CDBSidebarContent>
          <CDBSidebarMenu>
            <CDBSidebarMenuItem icon="th-large" onClick={() => navigate('/admin/dashboard')}>Dashboard</CDBSidebarMenuItem>
         
            <CDBSidebarMenuItem icon="users" onClick={() => navigate('/admin/users')}>Users</CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="building" onClick={() => navigate('/admin/companies')}>Companies</CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="briefcase" onClick={() => navigate('/admin/jobs')}>Jobs</CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="chart-line" onClick={() => navigate('/admin/reports')}>Reports</CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="comments" onClick={() => navigate('/admin/communication')}>Communication</CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="credit-card" onClick={() => navigate('/admin/paymentSettings')}>Payment Settings</CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="user-plus" onClick={() => navigate('/admin/adminregister')}>Register</CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="sign-out-alt" onClick={() => navigate('/')}>LOG OUT</CDBSidebarMenuItem>
           
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div className="sidebar-btn-wrapper">
          
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>

    </div>
  );
};

export{AdminHome};

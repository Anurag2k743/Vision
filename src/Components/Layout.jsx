import React from 'react';
import { Route, Routes, useLocation, Navigate } from 'react-router-dom';

import Dashboard from '../Components/Dashboard';
import Rtl from '../Components/Rtl';
import Billing from '../Components/Billing';
import Table from '../Components/Tables';
import Sidemenu from './Sidemenu';
import Profile from './Profile';
import Signin from './Signin';
import Signup from './Signup';
import { div } from 'framer-motion/client';

const Layout = () => {
  const location = useLocation();

  // Define routes where sidebar should NOT be shown
  const noSidebarRoutes = ['/Signin', '/Signup'];
  const shouldShowSidebar = !noSidebarRoutes.includes(location.pathname);

  return (
    <div className="flex min-h-screen">
      {shouldShowSidebar && 
      <div>
         <Sidemenu />
      </div>
     
      }
      <div className={shouldShowSidebar ? 'mt-7 sm:mt-0 p-5 w-full' : 'p-5 w-full'}>
        <Routes>
          {/* Redirect root to /Dashboard */}
          <Route path="/" element={<Navigate to="/Dashboard" replace />} />

          {/* Authenticated routes */}
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Rtl" element={<Rtl />} />
          <Route path="/Billing" element={<Billing />} />
          <Route path="/Table" element={<Table />} />
          <Route path="/Profile" element={<Profile />} />

          {/* Public routes */}
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
      </div>
    </div>
  );
};

export default Layout;

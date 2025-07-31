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
import HeaderLayout from './HeaderLayout';

const AppRoutes = () => {
  const location = useLocation();

  const isAuthPage = location.pathname === '/Signin' || location.pathname === '/Signup';

  return (
    <div className="min-h-screen w-full">
      <Routes>
        {/* Auth Routes */}
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Signup" element={<Signup />} />

        {/* Main Routes with Sidebar and Header */}
        <Route
          path="*"
          element={
            isAuthPage ? (
              <Navigate to={location.pathname} />
            ) : (
              <div className="flex">
                <Sidemenu />
                <div className="mt-7 sm:mt-0 p-5 w-full">
                  <HeaderLayout />
                  <Routes>
                    <Route path="/" element={<Navigate to="/Dashboard" />} />
                    <Route path="/Dashboard" element={<Dashboard />} />
                    <Route path="/Rtl" element={<Rtl />} />
                    <Route path="/Billing" element={<Billing />} />
                    <Route path="/Table" element={<Table />} />
                    <Route path="/Profile" element={<Profile />} />
                    <Route path="*" element={<Navigate to="/Dashboard" />} />
                  </Routes>
                </div>
              </div>
            )
          }
        />
      </Routes>
    </div>
  );
};

export default AppRoutes;

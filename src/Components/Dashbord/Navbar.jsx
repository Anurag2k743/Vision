import React, { useEffect, useState } from "react";
import { FaHome, FaSearch, FaUser, FaCog } from "react-icons/fa";


const Navbar = () => {


  return (
    <div className=" sm:flex items-center justify-between px-6 py-2  text-white">
      {/* Left Section */}
      <div>
        <div className="flex items-center space-x-2 text-sm text-white/70">
          <FaHome className="text-white" />
          <span>/ Dashboard</span>
        </div>
        <h1 className="text-lg font-bold text-white">Dashboard</h1>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4 mt-3 sm:mt-0">
        {/* Search Bar */}
        <div className="flex items-center bg-[rgb(15, 21, 53)] border border-[#E2E8F04D] rounded-full px-3 py-2">
          <FaSearch className="text-white mr-2 active:mr-5" />
          <input
            type="text"
            placeholder="Type here..."
            className="bg-transparent text-white text-sm placeholder-white outline-none w-48"
          />
        </div>

        {/* Sign In */}
        <div className="flex items-center space-x-1">
          <FaUser className="text-white" />
          <span className="text-white">Sign in</span>
        </div>

        {/* Settings */}
        <FaCog className="text-white" />
      </div>
    </div>
  );
};

export default Navbar;

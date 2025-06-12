import React, { useState } from "react";
import { FaHome, FaSearch, FaUser, FaCog } from "react-icons/fa";
import { MdMenuOpen } from "react-icons/md";
import Mobilemenu from "../Mobilemenu"; // ✅ Ensure this file exists at this path

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <>
      {/* Top Navbar */}
      <div className="sm:flex items-center justify-between px-6 py-3 text-white">
        {/* Left Section */}
        <div>
          <div className="flex items-center space-x-2 text-sm text-white/70">
            <FaHome className="text-white" />
            <span>/Biling</span>
          </div>
          <h1 className="text-lg font-bold text-white">Biling</h1>
        </div>

        {/* Right Section */}
        <div className="flex items-center justify-between space-x-4 mt-3 sm:mt-0">
          {/* Search Bar */}
          <div className="flex items-center bg-[rgb(15,21,53)] border border-[#E2E8F04D] rounded-full px-3 py-2">
            <FaSearch className="mr-2" />
            <input
              type="text"
              placeholder="Type here..."
              className="bg-transparent text-white text-sm placeholder-grey-400 outline-none w-16 sm:w-32 md:w-48"
            />
          </div>

          {/* Sign In */}
          <div className="flex items-center space-x-1">
            <FaUser className="text-white" />
            <span className="text-white">Sign in</span>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={toggleMenu}
            aria-label="Open mobile menu"
            className="block md:hidden"
          >
            <MdMenuOpen className="text-white" />
          </button>

          {/* Settings */}
          <FaCog className="text-white" />
        </div>
      </div>

      {/* Conditionally Render Mobile Menu */}
    {mobileMenuOpen && <Mobilemenu  />}    </>
  );
};

export default Navbar;

import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  FaHome, FaSearch, FaUser, FaCog
} from "react-icons/fa";
import { MdMenuOpen, MdAssignment } from "react-icons/md";
import { VscGraph } from "react-icons/vsc";
import { FaMoneyBills } from "react-icons/fa6";
import { HiMiniWrenchScrewdriver } from "react-icons/hi2";
import { IoIosRocket } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

const HeaderWithNavbarAndMobileMenu = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const routeTitles = {
    '/': 'Dashboard',
    '/table': 'Table',
    '/billing': 'Billing',
    '/': 'Rtl',
    '/Signin': 'Sign In',
    '/Signup': 'Sign Up',
  };

  const currentPath = location.pathname;
  const currentTitle = routeTitles[currentPath] || 'Dashboard';

  // Hide header on Signin or Signup page
  const hideHeader = currentPath === '/Signin' || currentPath === '/Signup';
  if (hideHeader) return null;

  const menuItems = [
    { to: '/', label: 'Dashboard', icon: FaHome },
    { to: '/table', label: 'Table', icon: VscGraph },
    { to: '/billing', label: 'Billing', icon: FaMoneyBills },
    { to: '/', label: 'Rtl', icon: IoIosRocket },
  ];

  const accountItems = [
    { to: '/', label: 'Profile', icon: FaUser },
    { to: '/Signin', label: 'Sign In', icon: MdAssignment },
    { to: '/Signup', label: 'Sign Up', icon: HiMiniWrenchScrewdriver },
  ];

  return (
    <>
      {/* Fixed Header */}
      <header
        className={`fixed border left-2 right-2 top-2 md:left-[280px] md:right-5 z-50 rounded-3xl transition-all duration-300
          ${isScrolled ? 'border border-[#ffffff] backdrop-blur-xl' : 'border-none backdrop-blur-none'}
        `}
      >
        <div className="sm:flex items-center justify-between px-6 py-3 text-white">
          {/* Left Section */}
          <div>
            <div className="flex items-center space-x-2 text-sm text-white/70">
              <FaHome className="text-white" />
              <span>/  { currentTitle }</span>
            </div>
            <h1 className="text-lg font-bold text-white">{ currentTitle }</h1>
          </div>

          {/* Right Section */}
          <div className="flex items-center justify-between space-x-4 mt-3 sm:mt-0">
            <div className="flex items-center bg-[rgb(15,21,53)] border border-[#E2E8F04D] rounded-full px-3 py-2">
              <FaSearch className="mr-2" />
              <input
                type="text"
                placeholder="Type here..."
                className="bg-transparent text-white text-sm placeholder-grey-400 outline-none w-16 sm:w-32 md:w-48"
              />
            </div>

            <div className="flex items-center space-x-1">
              <FaUser className="text-white" />
              <span className="text-white">Sign in</span>
            </div>

            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open mobile menu"
              className="block md:hidden"
            >
              <MdMenuOpen className="text-white" />
            </button>

            <FaCog className="text-white" />
          </div>
        </div>
      </header>

      {/* Overlay for mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-black bg-opacity-40 transition-opacity duration-300 md:hidden ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Side Menu */}
      <div
        className={`p-3 fixed top-0 left-0 h-screen w-[230px] sm:w-[260px] z-50 bg-[#05040c] transform transition-transform duration-300 ease-in-out md:hidden
        ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <div className="flex justify-end">
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="text-white"
          >
            <RxCross2 fontSize={23} />
          </button>
        </div>
        <hr className='mt-3' />
        <div className='flex justify-center mt-3'>
          <NavLink to="/dashboard" className='text-[15px] tracking-wider'>VISION UI FREE</NavLink>
        </div>

        <div className="flex flex-col mt-5 px-10">
          {menuItems.map((menuItem, index) => (
            <NavLink
              key={index}
              to={menuItem.to}
              className="text-md mt-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {menuItem.label}
            </NavLink>
          ))}
        </div>

        <div className="flex flex-col px-10">
          {accountItems.map((accountItem, index) => (
            <NavLink
              key={index}
              to={accountItem.to}
              className="text-md tracking-wider mt-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {accountItem.label}
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default HeaderWithNavbarAndMobileMenu;

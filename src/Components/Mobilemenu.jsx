import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaHome } from "react-icons/fa";
import { VscGraph } from "react-icons/vsc";
import { FaMoneyBills } from "react-icons/fa6";
import { HiMiniWrenchScrewdriver } from "react-icons/hi2";
import { FaUser } from "react-icons/fa";
import { MdAssignment } from "react-icons/md";
import { IoIosRocket } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { MdClose } from "react-icons/md";

const Mobilemenu = ({ onClose }) => {

  const menuItems = [
    { to: '/Dashboard', label: 'Dashboard', icon: FaHome },
    { to: '/table', label: 'Table', icon: VscGraph },
    { to: '/billing', label: 'Billing', icon: FaMoneyBills },
    { to: '/rtl', label: 'Rtl', icon: IoIosRocket },
  ];

  const accountItems = [
    { to: '/profile', label: 'Profile', icon: FaUser },
    { to: '/Signin', label: 'Sign In', icon: MdAssignment },
    { to: '/Signup', label: 'Sign Up', icon: HiMiniWrenchScrewdriver },
  ];

  const renderNavItem = (item) => {
    const Icon = item.icon;
    return (
      <NavLink
        key={item.to}
        to={item.to}
        className={({ isActive }) =>
          `flex items-center gap-3 py-3 px-4 rounded-xl transition-all w-full max-w-2xl ${isActive ? 'bg-[#1a1f37] text-white' : 'text-white' }` } >
             {({ isActive }) => (
          <>
            <div
              className={`w-7 h-7 p-[6px] rounded-lg flex items-center justify-center transition-all ${isActive ? 'bg-[#0075ff] ' : 'bg-[#1a1f37] '
                }`}>
              <Icon />
            </div>
            {item.label}
          </>
        )}
      </NavLink>
    );
  };
  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={onClose} min-hscreen></div>
      <div className='fixed top-0 left-0 z-50 w-[260px] bg-[#212550] p-6 flex flex-col justify-between transition-transform duration-300 ease-in-out'>
        <div>
          <div className='flex justify-between items-center mb-6'>
            <NavLink to="/dashboard" className='text-[15px] tracking-wider text-white'>VISION UI FREE</NavLink>
            <button onClick={onClose} aria-label="Close mobile menu" className="text-white text-2xl">
              <MdClose />
            </button>
          </div>
          <hr className="h-[1px] border-0 bg-gradient-to-r from-transparent via-white to-transparent mt-3 mb-5" />
          {/* Menu Section */}
          <div className='space-y-2 text-[14px] w-full'>
            {menuItems.map(renderNavItem)}
          </div>

          {/* Account Section */}
          <div className=' mt-6'>
            <h4 className='text-[15px] text-white'>Account Pages</h4>
          </div>

          <div className='space-y-2 mt-3 text-[14px]'>
            {accountItems.map(renderNavItem)}
          </div>
        </div>

        {/* Footer Section */}
        <div>
          <div className="p-3 rounded-xl need">
            <FaStar className='bg-white h-7 w-7 p-2 text-[#0075FF] rounded-lg' />
            <div className='my-2'>
              <h5 className='text-[14px] text-white'>Need help ?</h5>
              <p className='text-[13px] text-white'>Please Check your docs</p>
            </div>
            <button className='px-5 py-3 rounded-lg bg-[#1a1f37] text-[10px] w-full'>DOCUMENTATION</button>
          </div>
          <div className='my-3'>
            <button className='px-5 py-2 bg-blue-400 text-[#ffffff] text-[14px] rounded-lg w-full'>Upgrade to Pro</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mobilemenu;

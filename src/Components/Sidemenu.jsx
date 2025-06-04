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

const Sidemenu = () => {

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
          `flex items-center gap-2 py-3 px-4 rounded-xl transition-all ${isActive ? 'bg-[#1a1f37] text-white' : 'text-white'
          }`
        } >

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
    <div className=' py-3  fixed z-50 w-[260px] hidden md:block overflow-y-scroll'>

      <div className=' p-5 rounded-lg flex flex-col justify-between gap-32'>
        <div>
          <div>
            <div className='flex justify-center'>
              <NavLink to="/dashboard" className='text-[15px] tracking-wider'>VISION UI FREE</NavLink>
            </div>
            <hr className="h-[1px] border-0 bg-gradient-to-r from-transparent via-white to-transparent mt-3" />
            {/* Menu Section */}
            <div className='space-y-2 mt-5 text-[14px]'>
              {menuItems.map(renderNavItem)}
            </div>

            {/* Account Section */}
            <div className=' mt-4'>
              <h4 className='text-[15px]'>Account Pages</h4>
            </div>

            <div className='space-y-2 mt-5 text-[14px]'>
              {accountItems.map(renderNavItem)}
            </div>
          </div>
      </div>

        {/* Footer Section */}
        <div>
          <div className="p-3 rounded-xl need">
            <FaStar className='bg-white h-7 w-7 p-2 text-[#0075FF] rounded-lg' />
            <div className='my-2'>
              <h5 className='text-[14px]'>Need help ?</h5>
              <p className='text-[13px]'>Please Check your docs</p>
            </div>
            <button className='px-5 py-3 rounded-lg bg-[#1a1f37] text-[10px] w-full'>DOCUMENTATION</button>
          </div>
          <div className='my-3'>
            <button className='px-5 py-2 bg-blue-400 text-[#ffffff] text-[14px] rounded-lg w-full'>Upgrade to Pro</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Sidemenu;

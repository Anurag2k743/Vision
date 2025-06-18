import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { VscGraph } from "react-icons/vsc";
import { FaMoneyBills } from "react-icons/fa6";
import { HiMiniWrenchScrewdriver } from "react-icons/hi2";
import { FaUser } from "react-icons/fa";
import { MdAssignment } from "react-icons/md";
import { IoIosRocket } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

const Sidemenu = () => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {

    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  const menuItems = [
    { to: '/Dashboard', label: 'Dashboard', icon: FaHome },
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

      <div
        className={`p-3 fixed top-0 left-0 h-screen w-[230px] sm:w-[260px] z-50 bg-[#0075ff]
         transform transition-transform duration-500 ease-out ${isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}>

        <div className="flex justify-end">
          <button
            onClick={() => setIsOpen(false)}
            className="text-white" >
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
              className="text-md mt-2">
              {menuItem.label}
            </NavLink>
          ))}
        </div>

        <div className="flex flex-col px-10">
          {accountItems.map((accountItem, index) => (
            <NavLink
              key={index}
              to={accountItem.to}
              className="text-md tracking-wider  mt-2"
            >
              {accountItem.label}
            </NavLink>
          ))}
        </div>
      </div>

    </>
  );
};

export default Sidemenu;

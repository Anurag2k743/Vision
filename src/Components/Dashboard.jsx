"Use client";
import React, { useEffect, useState } from 'react';
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { FaBell } from "react-icons/fa6";
import { MdDriveFileMove } from "react-icons/md";
import { BsGlobe2 } from "react-icons/bs";
import { FaFileAlt } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa6";
import Satisfaction from './Dashbord/Satisfaction';
import { CiMenuKebab } from "react-icons/ci";
import Tracking from './Dashbord/Tracking';
import Salesoverview from './Dashbord/Salesoverview';
import ActiveUsers from './Dashbord/ActiveUsers';
import Users from './Dashbord/Users';
import Project from './Dashbord/Project';
import Order from './Dashbord/Order';
import Navbar from './Dashbord/Navbar';




const Dashboard = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20); // adjust scroll threshold if needed
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <>
      {/* -------------Header section------------ */}

  <header
    className={`fixed border  left-2 right-2 top-2 md:left-[280px] md:right-5 z-50  rounded-3xl transition-all duration-300 
      ${isScrolled ? 'border border-[#ffffff] backdrop-blur-xl' : 'border-none backdrop-blur-none'}
    `}>
    <Navbar />
  </header>


      {/* -------------Header section------------ */}

      {/* -----------------today's money---------------- */}

      <div className='grid  sm:grid-cols-2  xl:grid-cols-4  gap-6 mt-[90px]'>
        <div className='bg-[#0a0e29] px-6 py-4 rounded-3xl flex justify-between '>
          <div className=''>
            <h6 className='text-[12px] text-[#A0AEC0] font-semibold'>Todays Money</h6>
            <span className='font-bold text-[20px]'>$53,000 </span>
            <span className='text-[#01b574] text-[14px] font-bold'>+55%</span>
          </div>
          <div>
            <MdDriveFileMove className='h-10 w-10 p-2 text-[#ffffff] bg-[#0075ff] rounded-lg' />
          </div>
        </div>

        <div className='bg-[#0a0e29] px-6 py-4 rounded-3xl   flex justify-between'>
          <div className=''>
            <h6 className='text-[12px] text-[#A0AEC0] font-semibold'>Today's users</h6>
            <span className='font-bold text-[20px]'>2,300 </span>
            <span className='text-[#01b574] text-[14px] font-bold'>+3%</span>
          </div>
          <div>
            <BsGlobe2 className='h-10 w-10 p-2 text-[#ffffff] bg-[#0075ff] rounded-lg' />
          </div>
        </div>

        <div className='bg-[#0a0e29] px-6 py-4 rounded-3xl  flex justify-between'>
          <div className=''>
            <h6 className='text-[12px] text-[#A0AEC0] font-semibold'>New clients</h6>
            <span className='font-bold text-[20px]'>+3,462 </span>
            <span className='text-red-600 text-[14px] font-bold'>+2%</span>
          </div>
          <div>
            <FaFileAlt className='h-10 w-10 p-2 text-[#ffffff] bg-[#0075ff] rounded-lg' />
          </div>
        </div>

        <div className='bg-[#0a0e29] px-6 py-4 rounded-3xl  flex justify-between'>
          <div className=''>
            <h6 className='text-[12px] text-[#A0AEC0] font-semibold'>Total Sales</h6>
            <span className='font-bold text-[20px]'>$103,430 </span>
            <span className='text-[#01b574] text-[14px] font-bold'>+5%</span>
          </div>
          <div>
            <FaCartPlus className='h-10 w-10 p-2 text-[#ffffff] bg-[#0075ff] rounded-lg' />
          </div>
        </div>
      </div>
      {/* -----------------today's money---------------- */}

      {/* ------------------Mark Johnson---------------- */}

      <div className=' grid grid-cols-12 gap-6'>

        <div className='col-span-12 xl:col-span-12 2xl:col-span-5 p-6 bg-[#0a0e29]  mt-6 Johnson rounded-3xl h-[260px] sm:h-[350px]'>
          <div className=''>
            <h6 className='text-[14px]'>Welcome back,</h6>
            <h2 className='text-[30px] font-bold'>Mark Johnson</h2>
            <p className='text-[14px] text-[#A0AEC0] font-semibold my-3'>Glad to see you again!
              <br />Ask me anything.</p>
          </div>
          <div className='mt-16 sm:mt-40'>
            <button className='text-[14px]'>Tap to Record</button>
          </div>
        </div>

        <div className='col-span-12 xl:col-span-6 2xl:col-span-3 h-[310px] sm:h-[350px] mt-0 xl:mt-6  p-5  rounded-2xl bg-[#0d102d]'>
          <div className='pb-4 '>
            <h4 className='font-bold text-[18px]'>Satisfaction Rate</h4>
            <h6 className='text-[14px] text-[#A0AEC0] font-semibold'>From all projects</h6>
          </div>
          <Satisfaction />
        </div>

        <div className='col-span-12  xl:col-span-6 2xl:col-span-4  sm:h-[350px]   mt-0 xl:mt-6  p-5  rounded-2xl bg-[#0d102d]'>
          <div className='w-full flex justify-between items-center gap-5 '>
            <div>
              <h4 className='font-bold text-[18px]'>Referral Tracking</h4>
            </div>
            <div>
              <CiMenuKebab className='rotate-90 h-8 w-8 text-[#0075ff] p-1 bg-blue-400 rounded-lg' fontSize={13} />
            </div>
          </div>

          <div className='w-full sm:flex justify-between items-center gap-5 mt-12'>
            <div className='sm:w-1/2 mt-3'>
              <div className='bg-[#090d25] text-white rounded-3xl  p-6 mt-3'>
                <p className='text-sm text-[#A0AEC0] font-semibold'>Invited</p>
                <h4 className='font-bold'>145 people</h4>
              </div>

              <div className='bg-[#090d25] text-white rounded-3xl  p-6 mt-3'>
                <p className='text-sm text-[#A0AEC0] font-semibold'>Bonus</p>
                <h4 className='font-bold'>1,465 </h4>
              </div>
            </div>

            <div className='sm:w-1/2 mt-6'>
              <Tracking score={9.3} />
            </div>
          </div>

        </div>

      </div>

      {/* ------------------Mark Johnson---------------- */}


      {/* --------------------Sales overview section------------------ */}

      <div className='grid grid-cols-12 gap-6'>
        <div className='col-span-12 lg:col-span-7 p-6  mt-6  rounded-3xl  custom-gradient'>
          <Salesoverview />
        </div>

        <div className='col-span-12 lg:col-span-5 p-6  rounded-3xl custom-gradient mt-6 '>
          <div className=''>
            <ActiveUsers />
          </div>

          <div className='my-5'>
            <h4>Active Users</h4>
            <span className='text-[#01b574] text-sm'>(+23)</span>
            <span className='text-[#A0AEC0] text-sm font-semibold'> Than last Week</span>
          </div>

          <div>
            <Users />
          </div>
        </div>

      </div>

      {/* --------------------Sales overview section------------------ */}
      {/* -------------------- project section------------------ */}

      <div className=' grid grid-cols-12 gap-6'>
        <div className='col-span-12 lg:col-span-8 rounded-3xl custom-gradient p-6 mt-6'>
          <Project />
        </div>
        <div className='col-span-12 lg:col-span-4 rounded-3xl custom-gradient mt-0 md:mt-6 p-6'>
          <Order />
        </div>
      </div>

      {/* -------------------- project section------------------ */}




    </>
  );
};

export default Dashboard;

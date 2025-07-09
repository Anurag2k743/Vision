import React, { useState } from 'react';
import { FaUserAlt, FaUserCircle } from "react-icons/fa";
import { MdKey } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import Mobilemenu from './formmenu/mobilemenu';

const Signin = () => {
  const [darkMode, setDarkMode] = useState(true); // Toggle state

  return (
    <>
      <div className='relative min-h-screen w-full'>
      
        {/* Main Content Area */}
        <div className=''>
          <div className='grid grid-cols-1 lg:grid-cols-2 min-h-screen'>
            {/* Left Side - Banner */}
            <div className='min-h-[400px] flex flex-col justify-center items-center bg-cover bg-center bg-[url(/singin.webp)] p-4 text-center'>
              <h4 className='text-lg sm:text-xl tracking-[4px] sm:tracking-[8px] font-bold text-white'>INSPIRED BY THE FUTURE:</h4>
              <h2 className='text-2xl sm:text-4xl tracking-[4px] sm:tracking-[8px] mt-4 font-bold text-white'>THE VISION UI DASHBOARD</h2>
            </div>

            {/* Right Side - Sign In Form */}
            <div className='bg-[#080c2c] flex flex-col justify-center p-6'>
              <div className='w-full max-w-xs mx-auto lg:ml-24'>
                <h3 className='text-2xl sm:text-3xl font-bold text-white'>Nice to see you!</h3>
                <p className='text-sm mt-3 text-[#a0aec0]'>Enter your email and password to sign in</p>

                <form className='mt-6'>
                  <div>
                    <label htmlFor="email" className='text-sm font-bold text-white'>Email</label><br />
                    <input
                      type="email"
                      id="email"
                      placeholder='Your email...'
                      className='mt-3 w-full py-2 px-3 rounded-2xl bg-transparent border-2 border-[#4a5568] text-white placeholder:text-xs placeholder:text-[#5c6076] placeholder:font-bold outline-blue-400'
                    />
                  </div>

                  <div className='mt-5'>
                    <label htmlFor="password" className='text-sm font-bold text-white'>Password</label><br />
                    <input
                      type="password"
                      id="password"
                      placeholder='Your password...'
                      className='mt-3 w-full py-2 px-3 rounded-2xl bg-transparent border-2 border-[#4a5568] text-white placeholder:text-xs placeholder:text-[#5c6076] placeholder:font-bold outline-blue-400'
                    />
                  </div>

                  {/* Toggle Switch */}
                  <div className='text-sm mt-5 text-white flex items-center gap-4'>
                    <div
                      onClick={() => setDarkMode(!darkMode)}
                      className={`w-11 h-5 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 
                      ${darkMode ? 'bg-blue-500' : 'bg-gray-500'}`}
                    >
                      <div
                        className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 
                        ${darkMode ? 'translate-x-6' : 'translate-x-0'}`}
                      />
                    </div>
                    <span>Remember me</span>
                  </div>

                  <div className='mt-10'>
                    <button type="submit" className='w-full py-2 text-xs sm:text-sm rounded-xl bg-[#0075ff] font-bold text-white hover:bg-[#005fcc] transition duration-200'>
                      SIGN IN
                    </button>
                  </div>

                  <div className='text-sm mt-4 flex justify-center text-[#a0aec0]'>
                    <span>Don't have an account?</span>
                    <NavLink to="/Signup" className='font-bold text-white ml-2'>Sign up</NavLink>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

     {/* Fixed Navigation Bar */}
         <div className='hidden lg:block w-full max-w-[1024px]  left-0  absolute right-0 top-4 z-50 mx-auto py-4 px-6 rounded-3xl border border-[#E2E8F04D] shadow-[0rem_0.25rem_0.375rem_-0.0625rem_rgba(20,20,20,0.12),0rem_0.125rem_0.25rem_-0.0625rem_rgba(20,20,20,0.07)] backdrop-blur-[42px]'>
          <div className='grid grid-cols-12 items-center'>
            <div className='col-span-4 text-white font-bold'><NavLink to="/Dashboard" className="flex items-center gap-2 text-sm">VISION UI FREE</NavLink></div>
            <div className='col-span-5 flex justify-between gap-6 text-white'>
              <NavLink to="/Dashboard" className="flex items-center gap-2 text-sm">
               <svg
                  width="16px"
                  height="16px"
                  viewBox="0 0 24 24"
                  fill="currentColor" >
                  <path d="M12.002 0C5.37 0 0 5.373 0 12c0 6.627 5.37 12 12.002 12 6.63 0 12-5.373 12-12 0-6.627-5.37-12-12-12zm0 3.74a8.25 8.25 0 0 1 5.89 14.14 8.252 8.252 0 0 1-11.782-11.78A8.222 8.222 0 0 1 12 3.74zm0 2.613a5.626 5.626 0 0 0-3.986 1.652 5.626 5.626 0 0 0 0 7.972 5.626 5.626 0 0 0 9.435-3.986A5.626 5.626 0 0 0 12 6.353z" />
                </svg>
              Dashboard</NavLink>
              <NavLink to="/" className="flex items-center gap-2 text-sm"> <FaUserAlt fontSize={16} />Profile</NavLink>
              <NavLink to="/Signup" className="flex items-center gap-2 text-sm"> <FaUserCircle fontSize={16} />Sign Up</NavLink>
              <NavLink to="/Signin" className="flex items-center gap-2 text-sm"> <MdKey fontSize={16} />Sign In</NavLink>
            </div>
            <div className='col-span-3 flex justify-end'>
              <button className='text-xs py-3 font-bold px-6 rounded-xl bg-[#0075ff] text-white'>Buy Now</button>
            </div>
          </div>
        </div> 

         {/* MOBILE MENU */}

        <div>
          <div className='xl:hidden w-full max-w-sm  md:max-w-[600px]   left-0  absolute right-0 top-4 z-50 mx-auto py-4 px-6 rounded-3xl border border-[#E2E8F04D] shadow-[0rem_0.25rem_0.375rem_-0.0625rem_rgba(20,20,20,0.12),0rem_0.125rem_0.25rem_-0.0625rem_rgba(20,20,20,0.07)] backdrop-blur-[42px]'>
            <Mobilemenu />
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;

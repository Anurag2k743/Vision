import React, { useState } from 'react'; // ✅ Added useState
import { FaUserAlt, FaUserCircle } from "react-icons/fa";
import { MdKey } from "react-icons/md";
import { NavLink } from 'react-router-dom';

const Signin = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className='relative min-h-screen w-full'>
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
  );
};

export default Signin;

"use client";
import React, { useEffect, useState } from 'react';
import Navbar from './Billing/Navbar';
import Vision from './Billing/Vision';
import Information from './Billing/Information';
import Transaction from './Billing/Transaction';

const Billing = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed border left-2 right-2 top-2 md:left-[280px] md:right-5 z-50 rounded-3xl transition-all duration-300
          ${isScrolled ? 'border border-[#ffffff] backdrop-blur-xl' : 'border-none backdrop-blur-none'}
        `}>
        <Navbar />
      </header>

      <div className='mt-[85px] md:mt-[74px]'>
        <Vision />
      </div>


      <div className='mt-6 P-6'>
        <div className='grid grid-cols-12 gap-6'>
          <div className='col-span-12 lg:col-span-7 rounded-2xl  p-6 bg-[linear-gradient(127.09deg,_rgba(6,11,40,0.94)_19.41%,_rgba(10,14,35,0.49)_76.65%)] bg-origin-border'>
            <Information />
          </div>
          <div className='col-span-12 lg:col-span-5 rounded-2xl p-6 bg-[linear-gradient(127.09deg,_rgba(6,11,40,0.94)_19.41%,_rgba(10,14,35,0.49)_76.65%)] bg-origin-border'>
            <Transaction />
          </div>
        </div>
      </div>
    </>
  );
};

export default Billing;

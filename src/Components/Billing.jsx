"use client";
import React, { useEffect, useState } from 'react';
import Navbar from './Billing/Navbar';
import Visionui from './Billing/Visionui';
import Vision from './Billing/Vision';
// import Navbar from './';

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
              {/* <Visionui/> */}
              <Vision/>
          </div>
    </>
  );
};

export default Billing;

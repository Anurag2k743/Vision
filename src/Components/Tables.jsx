import React, { useEffect, useState } from 'react';
import Navbar from './Table/Navbar';
import AuthorsTable from './Table/AuthorsTable';
import ProjectTable from './Table/ProjectTable';

const Tables = () => {
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

      <div className='mt-[85px] md:mt-[75px] overflow-x-auto w-full rounded-2xl' style={{
        background: 'linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)'
      }}>
        <AuthorsTable />
      </div>
      <div className='mt-4 overflow-x-auto w-full rounded-2xl' style={{
        background: 'linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)'
      }}>
        <ProjectTable />
      </div>
    </>
  );
};

export default Tables;

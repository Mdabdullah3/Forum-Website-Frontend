import React, { useEffect, useState } from 'react';
import DeskhNav from './DeskhNav';
import MobileNav from './MobileNav';
import logo from '../../../Assets/icons/logo.png'
const Navbar = () => {
  const [bg, setBg] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });
  return (
    <>
      <header
        className={`${bg ? 'bg-[#DAF6FC] h-20' : 'h-24'
          } flex items-center fixed top-0 w-full px-5 text-white z-50 transition-all duration-300`}
      >
        <div className='w-10/12 mx-auto h-full flex items-center justify-between'>
          <div className="flex items-center -mt-4">
            <img src={logo} alt="" className='h-8' />
            <h1 className="text-xl text-[#1D2746] ml-2 font-bold font-mono">UIU CLUB FORUM </h1>
          </div>
          <div className='hidden lg:block '>
            <DeskhNav ></DeskhNav>
          </div>
          <div className='lg:hidden'>
            <MobileNav />
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
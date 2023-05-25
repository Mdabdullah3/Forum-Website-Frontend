import React from 'react';
import Navbar from '../Pages/Shared/NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import ClickToTop from '../Pages/Shared/ScrollTOP/ClickToTop';

const Main = () => {
    return (
      <div>
        <Navbar />
        <Outlet />
        <Footer />
        <ClickToTop/>
      </div>
    );
};

export default Main;
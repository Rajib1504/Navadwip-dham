import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';

const Layout = () => {
      return (
            <div className='bg-success'>
                <Navbar/>
                <div>
                <Outlet/>
                </div>
                <Footer/>

            </div>
      );
};

export default Layout;
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import SmoothScroll from './../Components/SmoothScroll/SmoothScroll';
import { useRef } from 'react';


const Layout = () => {
  const footerRef = useRef(null)
  return (
    <div>
      <Navbar footerRef={footerRef} />
      <div>
        <SmoothScroll />
        <Outlet />
      </div>
    
        <Footer ref={footerRef} />
    
    </div>
  );
};

export default Layout;

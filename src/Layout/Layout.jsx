import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import SmoothScroll from './../Components/SmoothScroll/SmoothScroll';


const Layout = () => {
  return (
    <div>
      <Navbar  />
      <div>
        <SmoothScroll />
        <Outlet />
      </div>
    
        <Footer />
    
    </div>
  );
};

export default Layout;

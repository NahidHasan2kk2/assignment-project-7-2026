import React from 'react';
import Navber from '../../components/Home/Navbar/Navber';
import { Outlet } from 'react-router';
import Footer from '../../components/Home/Footer/Footer';

const MainLayout = () => {
 return (
  <div>
   <Navber></Navber>
   <div className='container mx-auto'>
    <Outlet></Outlet>
    <Footer></Footer>
   </div>
  </div>
 );
};

export default MainLayout;
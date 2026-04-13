import React from 'react';
import Navber from '../../components/Home/Navbar/Navber';
import { Outlet } from 'react-router';
import Footer from '../../components/Home/Footer/Footer';

const MainLayout = () => {
 return (
  <div className='container mx-auto'>
   <Navber></Navber>
   <Outlet></Outlet>
   <Footer></Footer>
  </div>
 );
};

export default MainLayout;
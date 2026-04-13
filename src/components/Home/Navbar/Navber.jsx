import React from 'react';
import { IoHomeOutline } from 'react-icons/io5';
import { RiTimeLine } from 'react-icons/ri';
import { TfiStatsUp } from 'react-icons/tfi';
import { NavLink } from 'react-router';
import iconImg from '../../../assets/images/logo.png'

const Navber = () => {

 const links = <>
  <li><NavLink to={"/"} className={({ isActive }) => isActive ? "bg-black text-white border-1" : ''} ><IoHomeOutline /> Home</NavLink></li>
  <li className='mx-5'><NavLink to={"/timeline"} className={({ isActive }) => isActive ? "bg-black text-white border-1" : ''} ><RiTimeLine /> TimeLine</NavLink></li>
  <li><NavLink to={"/stats"} className={({ isActive }) => isActive ? "bg-black text-white border-1" : ''} ><TfiStatsUp /> Stats</NavLink></li>
 </>

 return (
  <div className="navbar bg-base-100 shadow-sm">
   <div className="flex-1">
    <img className='text-black' src={iconImg} alt="icon img" />

   </div>
   <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
     {
      links
     }


    </ul>
   </div>
  </div >
 );
};

export default Navber;
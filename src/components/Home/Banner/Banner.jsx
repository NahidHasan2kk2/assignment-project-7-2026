import React from 'react';
import { FaPlus } from 'react-icons/fa';

const Banner = () => {
 return (
  <div className="hero bg-base-200 my-5 py-5">
   <div className="hero-content text-center">
    <div className='space-y-3'>
     <h1 className="text-4xl font-bold">Friends to keep close in your life</h1>
     <p className="py-2">
      Your personal shelf of meaningful connections. Browse, tend, and nurture the
      relationships that matter most.
     </p>
     <button className="btn text-white bg-black"><FaPlus />
      Add a Friend</button>
    </div>
   </div>
  </div>
 );
};

export default Banner;
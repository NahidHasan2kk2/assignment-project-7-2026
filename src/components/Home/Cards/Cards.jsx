import React from 'react';

const Cards = () => {
 return (
  <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-5'>
   <div className='text-center p-10 bg-base-200 border-1'>
    <h1 className='font-bold text-4xl mb-2'>10</h1>
    <p className='opacity-80'>Total Friend</p>
   </div>
   <div className='text-center p-10 bg-base-200 border-1'>
    <h1 className='font-bold text-4xl mb-2'>3</h1>
    <p className='opacity-80'>On track</p>
   </div>
   <div className='text-center p-10 bg-base-200 border-1'>
    <h1 className='font-bold text-4xl mb-2'>6</h1>
    <p className='opacity-80'>Need Attention</p>
   </div>
   <div className='text-center p-10 bg-base-200 border-1'>
    <h1 className='font-bold text-4xl mb-2'>12</h1>
    <p className='opacity-80'>Interactions This Month</p>
   </div>
  </div>
 );
};

export default Cards;
import React, { Suspense } from 'react';
import Friend from '../Friend/Friend';

const friendsData = fetch('/data.json').then(res => res.json());


const Friends = () => {
 return (
  <div className='my-10'>
   <h1 className='font-bold text-2xl text-center md:text-left lg:text-left'>Your Friends</h1>
   <Suspense fallback={
    <div style={{ textAlign: "center", marginTop: "50px" }}>
     <h3>⏳ Loading...</h3>
     <p>Fetching data, please wait</p>
    </div>
   }>

    <Friend friendsData={friendsData}></Friend>

   </Suspense>
  </div>
 );
};

export default Friends;
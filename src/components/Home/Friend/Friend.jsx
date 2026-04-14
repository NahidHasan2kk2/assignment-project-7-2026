import React, { use } from 'react';
import { Link } from 'react-router';

const Friend = ({ friendsData }) => {
 const statusClass = {
  "overdue": "bg-red-500 text-white",
  "almost due": "bg-yellow-400 text-black",
  "on-track": "bg-green-500 text-white"
 };

 const friends = use(friendsData);
 console.log(friends);
 return (
  <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-5 bg-base-300 shadow-2xl p-2'>

   {
    friends.map(friend => <Link to={`/friendDetails/${friend.id}`} key={friend.id} className="card bg-base-100  shadow-sm">
     <figure className="px-10 pt-10 ">
      <img className='w-[80px] rounded-full' src={friend.picture} alt="" />
     </figure>
     <div className="card-body items-center text-center">
      <h2 className="card-title font-bold text-xl">{friend.name}</h2>
      <p className='opacity-80'>{friend.days_since_contact} Days</p>
      <div className='flex justify-around
      '>
       {
        friend.tags.map((tag, ind) => <div key={ind}>
         <span className='mx-1 bg-[#aceed8] px-2 rounded-2xl'>{tag}</span>

        </div>)
       }
      </div>
      <div className="card-actions">
       <button
        className={`px-2 rounded-2xl ${statusClass[friend.status]}`}
       >
        {friend.status}
       </button>
      </div>
     </div>
    </Link>)
   }
  </div>
 );
};

export default Friend;
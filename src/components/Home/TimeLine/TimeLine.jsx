import React, { useContext, useState } from 'react';
import { FriendContext } from '../../../contextApi/FriendsProvider';
import callImg from '../../../assets/images/call.png'
import textImg from '../../../assets/images/text.png'
import vedioImg from '../../../assets/images/video.png'

const TimeLine = () => {
   const { friend } = useContext(FriendContext);
   const [filterType, setFilterType] = useState('all');
   console.log(filterType);
   const handleAll = (all) => {

      setFilterType(all);
      document.activeElement.blur();
   }
   const handleCall = (call) => {

      setFilterType(call);
      document.activeElement.blur();
   }
   const handleVideo = (video) => {

      setFilterType(video);
      document.activeElement.blur();
   }
   const handleText = (text) => {

      setFilterType(text);
      document.activeElement.blur();
   }

   const filteredFriend =
      filterType === 'all'
         ? friend
         : friend.filter(fd => fd.type === filterType);
   return (

      <div className='my-10'>
         <div>
            <h1 className='font-bold text-2xl text-black '>Your Timeline</h1>
            <div className="dropdown dropdown-bottom">
               <div tabIndex={0} role="button" className="btn m-1 border-5">Filter Timeline ⬇️</div>
               <ul className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                  <li>
                     <button className='btn' onClick={() => handleAll('all')}>All</button>
                  </li>

                  <li>
                     <button className='btn' onClick={() => handleCall('call')}>Call</button>
                  </li>

                  <li>
                     <button className='btn' onClick={() => handleVideo('video')}>Video</button>
                  </li>

                  <li>
                     <button className='btn' onClick={() => handleText('text')}>Text</button>
                  </li>
               </ul>

            </div>
         </div>
         {
            filteredFriend.map((fd, ind) => <div
               key={ind}
               className='flex items-center gap-5 border-1 rounded py-1 px-4 mb-2'>
               <div>
                  <img src={
                     fd.type === 'call' ? callImg :
                        fd.type === 'video' ? vedioImg :
                           textImg
                  } alt="" />
               </div>
               <div>
                  <h1><span className='font-bold text-xl'>{fd.type}</span> with <span className='font-bold'> {fd.name} </span></h1>
                  <p>{fd.date} <span className='ml-2'> {fd.time}</span></p>
               </div>
            </div>)
         }

      </div >
   );
};

export default TimeLine;
import React, { useContext } from 'react';
import { FriendContext } from '../../../contextApi/FriendsProvider';
import callImg from '../../../assets/images/call.png'
import textImg from '../../../assets/images/text.png'
import vedioImg from '../../../assets/images/video.png'

const TimeLine = () => {
 const { friend } = useContext(FriendContext);
 console.log(friend);

 return (

  <div className='my-10'>
   <div>
    <h1 className='font-bold text-2xl text-black '>Your Timeline</h1>
    <div className="dropdown dropdown-bottom">
     <div tabIndex={0} role="button" className="btn m-1 border-5">Filter Timeline ⬇️</div>
     <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
      <li><a>Call</a></li>
      <li><a>Text</a></li>
      <li><a>Video</a></li>
     </ul>
    </div>
   </div>
   {
    friend.map(fd => <div
     key={fd.id}
     className='flex items-center gap-5 border-1 rounded py-1 px-4'>
     <div>
      <img src={
       fd.type === 'call' ? callImg :
        fd.type === 'vedio' ? vedioImg :
         textImg
      } alt="" />
     </div>
     <div>
      <h1>MeetUp with {fd.name} </h1>
      <p>{fd.date} {fd.time}</p>
     </div>
    </div>)
   }

  </div >
 );
};

export default TimeLine;
import React, { useContext } from 'react';
import { FaComment, FaPhone, FaVideo } from 'react-icons/fa';
import { HiOutlineBellSnooze } from 'react-icons/hi2';
import { IoArchiveOutline } from 'react-icons/io5';
import { MdOutlineDeleteOutline } from 'react-icons/md';
import { useLoaderData, useParams } from 'react-router';
import { FriendContext } from '../../../contextApi/FriendsProvider';
import { toast } from 'react-toastify';

const FriendDetails = () => {

 const { friend, setFriend } = useContext(FriendContext);


 const statusClass = {
  "overdue": "bg-red-500 text-white",
  "almost due": "bg-yellow-400 text-black",
  "on-track": "bg-green-500 text-white"
 };

 const friends = useLoaderData();
 // console.log(friends);
 const params = useParams();
 // console.log(params.id);
 const selectedFriend = friends.find(friend => friend.id == params.id);
 // console.log(selectedFriend);


 const handleCallButton = (selectedFriend) => {

  toast.success(`${selectedFriend.name} added call successfully!`, {
   position: "top-center"
  })

  const newAddFriend = {
   ...selectedFriend,
   type: 'call',
   date: new Date().toLocaleDateString(),
   time: new Date().toLocaleTimeString()
  };
  setFriend([...friend, newAddFriend]);
 }
 const handleTextButton = (selectedFriend) => {
  toast.info(`${selectedFriend.name} added text successfully!`, {
   position: "top-center"
  })
  const newAddFriend = {
   ...selectedFriend,
   type: 'text',
   date: new Date().toLocaleDateString(),
   time: new Date().toLocaleTimeString()
  };
  setFriend([...friend, newAddFriend]);
 }

 const handleVedioButton = (selectedFriend) => {
  toast.warn(`${selectedFriend.name} added vedio successfully!`, {
   position: "top-center"
  })
  const newAddFriend = {
   ...selectedFriend,
   type: 'video',
   date: new Date().toLocaleDateString(),
   time: new Date().toLocaleTimeString()
  };
  setFriend([...friend, newAddFriend]);

 }

 return (
  <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-5 rounded-xl border-1 my-2">
   <div className="bg-white rounded-xl shadow p-5 text-center space-y-4 border-1">
    <img
     src={selectedFriend.picture}
     className="w-20 h-20 rounded-full mx-auto"
    />

    <h2 className="text-xl font-semibold">{selectedFriend.name}</h2>


    <span className={`px-3 py-1 text-sm rounded-full ${statusClass[selectedFriend.status]}`}>
     {selectedFriend.status}
    </span>

    <div>
     {selectedFriend.tags.map((tag, ind) => (
      <span
       key={ind}
       className="bg-green-100 text-green-600 px-2 py-1 text-xs rounded-full mr-2"
      >
       {tag}
      </span>
     ))}
    </div>

    <p className="text-gray-500 italic">"{selectedFriend.bio}"</p>

    <p className="text-sm text-gray-400">{selectedFriend.email}</p>

    {/* Actions */}
    <div className="space-y-2 mt-4">
     <button className="w-full border p-2 rounded"><span className='flex justify-center items-center gap-3'><HiOutlineBellSnooze /> Snooze 2 Weeks</span></button>
     <button className="w-full border p-2 rounded"> <span className='flex justify-center items-center gap-3'><IoArchiveOutline /> Archive</span> </button>
     <button className="w-full text-red-500 border p-2 rounded">
      <span className='flex justify-center items-center gap-3'><MdOutlineDeleteOutline /> Delete</span>
     </button>
    </div>
   </div>
   <div className="md:col-span-2 space-y-6">
    <div className="grid grid-cols-3 gap-4 border-1 p-2 rounded-xl">
     <div className="bg-base-200 p-4 rounded-xl shadow text-center">
      <h2 className="text-2xl font-bold">
       {selectedFriend.days_since_contact}
      </h2>
      <p className="text-gray-500">Days Since Contact</p>
     </div>
     <div className="bg-base-200 p-4 rounded-xl shadow text-center">
      <h2 className="text-2xl font-bold">{selectedFriend.goal}</h2>
      <p className="text-gray-500">Goal (Days)</p>
     </div>

     <div className="bg-base-200 p-4 rounded-xl shadow text-center">
      <h2 className="text-lg font-bold">
       {selectedFriend.next_due_date}
      </h2>
      <p className="text-gray-500">Next Due</p>
     </div>
    </div>
    <div className="bg-white p-5 rounded-xl shadow flex justify-between">
     <div>
      <h3 className="font-semibold">Relationship Goal</h3>
      <p className="text-gray-500">
       Connect every <b>{selectedFriend.goal} days</b>
      </p>
     </div>
     <button className="border px-3 py-1 rounded">Edit</button>
    </div>
    <div className="bg-white p-5 rounded-xl shadow">
     <h3 className="mb-4 font-semibold">Quick Check-In</h3>

     <div className="grid grid-cols-3 gap-4">
      <button onClick={() => handleCallButton(selectedFriend)} className=" border p-4 rounded flex flex-col cursor-pointer  hover:bg-blue-200 items-center">
       <FaPhone />
       Call
      </button>

      <button onClick={() => handleTextButton(selectedFriend)} className=" border p-4 rounded cursor-pointer hover:bg-blue-200 flex flex-col items-center">
       <FaComment />
       Text
      </button>

      <button onClick={() => handleVedioButton(selectedFriend)} className=" border p-4 hover:bg-blue-200 cursor-pointer rounded flex flex-col items-center">
       <FaVideo />
       Video
      </button>
     </div>
    </div>

   </div>
  </div>
 );
};

export default FriendDetails;
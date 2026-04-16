import React, { createContext, useState } from 'react';
export const FriendContext = createContext();

const FriendsProvider = ({ children }) => {
 const [friend, setFriend] = useState([]);
 // const [filteredFriend, setFilteredFriend] = useState([]);
 // const filteredValue = {
 //  filteredFriend,
 //  setFilteredFriend
 // }

 const value = {
  friend,
  setFriend
 };

 return <FriendContext.Provider
  // filteredValue={filteredValue}
  value={value}>
  {children}
 </FriendContext.Provider>
};

export default FriendsProvider;
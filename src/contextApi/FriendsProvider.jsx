import React, { createContext, useState } from 'react';
export const FriendContext = createContext();

const FriendsProvider = ({ children }) => {
 const [friend, setFriend] = useState([]);

 const value = {
  friend,
  setFriend
 };

 return <FriendContext.Provider value={value}>
  {children}
 </FriendContext.Provider>
};

export default FriendsProvider;
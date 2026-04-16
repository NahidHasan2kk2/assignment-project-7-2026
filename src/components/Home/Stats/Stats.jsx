import React, { useContext } from 'react';
import { FriendContext } from '../../../contextApi/FriendsProvider';
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

const Stats = () => {
 const { friend } = useContext(FriendContext);

 const callCount = friend.filter(fd => fd.type === 'call').length;
 const textCount = friend.filter(fd => fd.type === 'text').length;
 const videoCount = friend.filter(fd => fd.type === 'video').length;
 const chartData = [
  { name: "Call", value: callCount },
  { name: "Text", value: textCount },
  { name: "video", value: videoCount }
 ];
 const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

 return (
  <div className='my-10'>
   <div>
    <h1 className='font-bold text-4xl mb-3 pl-2'>Friendship Analytics</h1>
   </div>
   <div style={{ width: "100%", height: 300 }}>

    <h2 className='pl-5 font-semibold'>By Interaction Type</h2>

    <ResponsiveContainer>
     <PieChart>
      <Pie
       data={chartData}
       dataKey="value"
       nameKey="name"
       innerRadius={80}
       outerRadius={100}
       paddingAngle={3}
       label
      >
       {chartData.map((entry, index) => (
        <Cell key={index} fill={COLORS[index % COLORS.length]} />
       ))}
      </Pie>

      <Tooltip />
      <Legend />
     </PieChart>
    </ResponsiveContainer>
   </div>
  </div>

 );
};

export default Stats;
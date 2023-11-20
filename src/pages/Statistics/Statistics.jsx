import React from 'react'
import { Helmet } from 'react-helmet';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

function Statistics(props) {

  const datalen = props.dataLen;

  const data = [
    { name: 'Group A', value: 12-datalen },
    { name: 'Group B', value: datalen }
  ];

  const COLORS = ['#FF444A', '#00C49F'];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className='flex flex-col justify-center items-center my-5 py-2'>
      <div>
        <Helmet>
          <title>Statistics</title>
        </Helmet>
      </div>
      <PieChart width={350} height={350}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={150}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
      <div className='flex flex-col md:flex-row'>
        <div className='flex items-center md:mr-10'>
          <h1>Total Donation</h1>
          <div className='bg-[#FF444A] h-3 w-24 ml-2'></div>
        </div>
        <div className='flex items-center'>
          <h1>You Donated</h1>
          <div className='bg-[#00C49F] h-3 w-24 ml-2'></div>
        </div>
      </div>
    </div>
  )
}

export default Statistics
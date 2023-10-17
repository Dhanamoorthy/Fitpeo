
import React from 'react';
import { PieChart, Pie, Cell, Tooltip ,Label} from 'recharts';

export function RoundChart() {
  const CustomerData = [
    { name: 'Customer', value: 65 },
    { name: 'Product', value: 30 },
  ];
  const COLORS = ['#FF5733', '#33FF57'];


  
 

  const chartStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    
    marginTop: '40px',
    marginBottom: '40px',
    padding: '10px',
    fontSize:'30px'
  };


  return (
    <PieChart width={300} height={300}style={chartStyle}  >
        <Pie 
          data={CustomerData}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {CustomerData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}

<Label
            value="65% total New Customers"
            position="center"
            content={<CustomLabel />}
          />
        </Pie>
       
      </PieChart>
  );
}

function CustomLabel() {
  return (
    <text
      x={150}  // Adjust the x-coordinate to center horizontally
      y={150}  // Adjust the y-coordinate to center vertically
      textAnchor="middle"  // Center text horizontally
      dominantBaseline="middle"  // Center text vertically
      fontSize="18px"  // Adjust font size
      fill="black"  // Change text color
      
    >
      <tspan x="150" y="120"dy="1em">65%</tspan>
      <tspan x="150" dy="1em">Total New </tspan>
      <tspan x="150" dy="1em">Customers</tspan>
    </text>
  );
}

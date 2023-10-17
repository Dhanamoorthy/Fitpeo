import React from 'react';
import { BarChart, Bar, XAxis,  ResponsiveContainer } from 'recharts';
import { EarningData } from './Data';



export function Chart() {
  return(
    <div style={{ width:'100vh', height: '300' , marginTop:'40px',backgroundColor:'white' ,padding:'9px ',marginBottom:'40px'}}>
      <ResponsiveContainer >
        <BarChart data={EarningData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <XAxis dataKey="month" />
         
          <Bar dataKey="earning" fill="lightblue " fillOpacity={0.3} />
        </BarChart>
        
      </ResponsiveContainer>
     
    </div>
  )
}
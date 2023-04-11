import React from 'react';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
  } from "recharts";
const StacChart = () => {
    const data = [
        {
          name: 'Assignmen 1',
          mark: 60,
        },
        {
          name: 'Assignment 2',
          mark: 59,
        },
        {
          name: 'Assignment 3',
          mark: 60,
        },
        {
          name: 'Assignment 4',
          mark: 60,
        },
        {
          name: 'Assignment 5',
          mark: 60,
        },
        {
          name: 'Assignment 6',
          mark: 50,
        },
        {
          name: 'Assignment 7',
          mark: 58,
        },
        {
          name: 'Assignment 8',
          mark: 58,
        },
      ];
    return (
        <div className='chart-container'>
             <div className='my-5' style={{ width: "100%", height: 300 }}>
                <ResponsiveContainer>
                    <AreaChart
                    data={data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0
                    }}
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="mark" stroke="#8884d8" fill="#8884d8" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default StacChart;
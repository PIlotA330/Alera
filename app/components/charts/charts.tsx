"use client"
import React from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Fix the function parameter - it should receive props object instead of directly taking data
export function BarCharts({ data, symp }: { data: any[] | undefined, symp: string }) {
    return (
        <div className='h-full w-full place-items-center p-5'>
        <BarChart
        width={400}
        height={200}
        data={data}
        margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
        }}>
        <Legend height={10}/>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" name="Date"/>
        <YAxis />
        <Tooltip />
        <Bar dataKey={symp} fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
    </BarChart>
     </div>
    )
}
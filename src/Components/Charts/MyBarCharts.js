import React from 'react';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

const MyBarCharts = ({ myData }) => {
    let data = [];
    myData.forEach(ph => {
        const newData = {
            name: ph.phone_name,
            value: parseInt(ph.slug.split('-')[1])
        };
        data.push(newData);
    })

    return (
        <BarChart width={1200} height={400} data={data}>
            <Bar dataKey="value" fill="#8884d8" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
        </BarChart>
    );
};

export default MyBarCharts;
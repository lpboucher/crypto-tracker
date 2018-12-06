import React from 'react';
import { 
    ResponsiveContainer, 
    BarChart,
    Bar,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
} from 'recharts';

const RADIAN = Math.PI / 180; 

const SimpleBarChart = ({data}) => {
    return (
        <ResponsiveContainer width="99%" height={400}>
            <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="symbol" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="price" fill="#8884d8" />
                <Bar dataKey="quantity" fill="#82ca9d" />
            </BarChart>
    </ResponsiveContainer>
    );
};

export default SimpleBarChart;


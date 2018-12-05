import React from 'react';
import { ResponsiveContainer, 
    BarChart,
    Bar,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
} from 'recharts';

/*const data = [{name: 'Group A', value: 400}, {name: 'Group B', value: 300},
        {name: 'Group C', value: 300}, {name: 'Group D', value: 200}];*/

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

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


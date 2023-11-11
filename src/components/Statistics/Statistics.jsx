import { useEffect, useState } from "react";
import { Pie, PieChart, Tooltip } from "recharts";

const data01 = [
    { name: 'Donation A', value: 66.7 },
    { name: 'Donation B', value: 33.3 },

];
const data02 = [
    { name: 'Group A', value: 2400 },
    { name: 'Group B', value: 4567 },
];


const Statistics = () => {

    const [cetagoris, setCetagoris] = useState([]);
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setCetagoris(data))
    }, [])
    const category = cetagoris.length;
    console.log(category)
    return (
        <div className="container mx-auto">
            <p>category:{cetagoris.length}</p>
            <div className="bg-red-100 flex justify-center mt-10">
                <PieChart width={400} height={400}>
                    <Pie
                        dataKey="value"
                        isAnimationActive={false}
                        data={data01}
                        cx="50%"
                        cy="50%"
                        outerRadius={150}
                        fill="#FF444A"
                        label
                    />
                    <Pie dataKey="value" data={data02} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" />

                    <Tooltip />
                </PieChart>
            </div>
            <div className="flex justify-center mt-10 gap-10">
                <p>Your Donation
                    <progress className="progress w-56 ms-2" value="70" max="100"></progress>
                </p>
                <p>Total Donation
                    <progress className="progress progress-primary w-56 ms-2" value="70" max="100"></progress>
                </p>
            </div>

        </div>
    );
};

export default Statistics;
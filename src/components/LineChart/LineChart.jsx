import React from "react";
import { LineChart as LChart, Line, XAxis, YAxis } from "recharts";
const LineChart = () => {
  const studentsData = [
    { name: "John", id: 101, math: 85, physics: 78, chemistry: 90 },
    { name: "Emma", id: 102, math: 72, physics: 75, chemistry: 85 },
    { name: "Michael", id: 103, math: 90, physics: 82, chemistry: 88 },
    { name: "Sophia", id: 104, math: 65, physics: 70, chemistry: 75 },
    { name: "William", id: 105, math: 78, physics: 80, chemistry: 82 },
    { name: "Olivia", id: 106, math: 88, physics: 85, chemistry: 92 },
    { name: "James", id: 107, math: 79, physics: 76, chemistry: 84 },
    { name: "Charlotte", id: 108, math: 92, physics: 90, chemistry: 95 },
    { name: "Daniel", id: 109, math: 70, physics: 68, chemistry: 72 },
    { name: "Isabella", id: 110, math: 83, physics: 79, chemistry: 87 },
  ];

  return (
    <div>
      <LChart width={800} height={400} data={studentsData}>
        <XAxis dataKey="name" />
        <YAxis />
        <Line dataKey="math" stroke="red"></Line>
        <Line dataKey="physics" stroke="yellow"></Line>
      </LChart>
    </div>
  );
};

export default LineChart;

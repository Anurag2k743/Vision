import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const data = [
  { name: "Jan", value: 320 },
  { name: "Feb", value: 240 },
  { name: "Mar", value: 100 },
  { name: "Apr", value: 300 },
  { name: "May", value: 480 },
  { name: "Jun", value: 340 },
  { name: "Jul", value: 270 },
  { name: "Aug", value: 120 },
  { name: "Sep", value: 410 },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-black text-white p-2 rounded-lg text-xs">
        <p>{`${payload[0].payload.name}`}</p>
        <p>{`Sales: ${payload[0].payload.value}`}</p>
      </div>
    );
  }
  return null;
};

const ActiveUsers = () => {
  const [selectedMonth, setSelectedMonth] = useState(null);

  const handleClick = (data, index) => {
    setSelectedMonth(data);
  };

  return (
    <div className="w-full h-64 py-3 rounded-2xl text-white bg-[#0a0e29]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="name" tick={false} axisLine={false} tickLine={false} />
          <YAxis
            tick={{ fontSize: "10px", fill: "#ffffff" }}
            axisLine={false}
            tickLine={false}
            domain={[0, 500]}
            ticks={[0, 100, 200, 300, 400, 500]}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar
            dataKey="value"
            radius={[10, 10, 0, 0]}
            barSize={5}
            onClick={handleClick}
            isAnimationActive={false}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                cursor="pointer"
                fill="#e5e5e5"

              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      {selectedMonth && (
        <div className=" text-center text-lg text-white">
          {selectedMonth.name} Sales: {selectedMonth.value}
        </div>
      )}
    </div>
  );
};

export default ActiveUsers;

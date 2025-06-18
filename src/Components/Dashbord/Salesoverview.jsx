import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", website: 500, mobile: 200 },
  { month: "Feb", website: 250, mobile: 270 },
  { month: "Mar", website: 300, mobile: 310 },
  { month: "Apr", website: 280, mobile: 350 },
  { month: "May", website: 500, mobile: 380 },
  { month: "Jun", website: 250, mobile: 410 },
  { month: "Jul", website: 300, mobile: 550 },
  { month: "Aug", website: 270, mobile: 360 },
  { month: "Sep", website: 320, mobile: 420 },
  { month: "Oct", website: 350, mobile: 470 },
  { month: "Nov", website: 260, mobile: 390 },
  { month: "Dec", website: 400, mobile: 560 },
];

const SalesOverview = () => {
  return (
    <div className="text-white">
      <h2 className="text-xl font-semibold mb-1">Sales Overview</h2>
      <p className="text-green-400 text-sm mb-2">+5% more <span className="text-[#A0AEC0] font-semibold">in 2021</span></p>
      <div className="h-[260px] sm:h-[350px]">
      <ResponsiveContainer width="100%" height="100%" className="mt-10">
        <AreaChart 
          data={data} 
          margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
          <defs>
            {/* Blue gradient (exact from image) */}
            <linearGradient id="gradientWebsite" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#0072ff" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#0072ff" stopOpacity={0.1} />
            </linearGradient>
            
            {/* Teal gradient (exact from image) */}
            <linearGradient id="gradientMobile" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#00c6bf" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#00c6bf" stopOpacity={0.1} />
            </linearGradient>
          </defs>

          <XAxis 
            dataKey="month" 
            stroke="#ccc" 
            tick={{ fontSize: 12 }} 
            tickMargin={10}
          />
          <YAxis 
            stroke="#ccc" 
            tick={{ fontSize: 12 }} 
            domain={[0, 600]}
            tickCount={7}
            tickMargin={10}
          />

          <Tooltip
            contentStyle={{
              backgroundColor: "#1a1a2e",
              border: "none",
              borderRadius: 8,
              fontSize: "12px",
            }}
            itemStyle={{
              color: "#fff",
              fontSize: "12px",
            }}
            labelStyle={{
              color: "#fff",
              fontWeight: "bold",
              fontSize: "12px",
            }}
            formatter={(value, name) => {
              const label = name === "website" ? "Website Sales" : "Mobile Sales";
              return [`${value}`, label];
            }}
          />

          <CartesianGrid 
            strokeDasharray="3 3" 
            stroke="#2e2e48" 
            horizontal={true} 
            vertical={false}
          />

          {/* Updated with exact colors from image */}
          <Area
            type="monotone"
            dataKey="website"
            stroke="#0072ff"  // Solid blue stroke (matches gradient start)
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#gradientWebsite)"
          />
          <Area
            type="monotone"
            dataKey="mobile"
            stroke="#00c6bf"  // Solid teal stroke (matches gradient start)
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#gradientMobile)"
          />
        </AreaChart>
      </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SalesOverview;
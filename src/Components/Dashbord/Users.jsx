import React from "react";
import { FaUser, FaRocket, FaShoppingCart, FaWrench } from "react-icons/fa";

const stats = [
  { label: "Users", value: "32,984", icon: <FaUser />, progress: 60 },
  { label: "Clicks", value: "2.42M", icon: <FaRocket />, progress: 60 },
  { label: "Sales", value: "2,400$", icon: <FaShoppingCart />, progress: 60 },
  { label: "Items", value: "320", icon: <FaWrench />, progress: 60 },
];

const Users = () => {
  return (
    <div className="flex flex-wrap justify-between py-2 rounded-2xl text-white gap-4 mt-3">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="flex-1 min-w-[120px] max-w-[180px]"
        >
          <div className="flex items-center gap-2 mb-2 text-sm text-white">
            <div className="text-blue-500 bg-white/10 p-2 rounded-lg text-lg">
              {stat.icon}
            </div>
            {stat.label}
          </div>
          <div className="text-xl font-bold mb-1">{stat.value}</div>
          <div className="h-1 bg-white/10 rounded-full w-full mt-2">
            <div
              className="h-1 bg-blue-600 rounded-full transition-all duration-700"
              style={{ width: `${stat.progress}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;

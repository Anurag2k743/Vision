import React, { useState, useEffect } from 'react';
import { BsEmojiSmileFill } from "react-icons/bs";

const Satisfaction = ({ percentage = 95 }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setProgress(percentage);
    }, 100); // Optional: animation delay
    return () => clearTimeout(timeout);
  }, [percentage]);

  const radius = 100;
  const stroke = 12;
  const normalizedRadius = radius - stroke / 2;
  const circumference = 2 * Math.PI * normalizedRadius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="flex items-center justify-center relative ">
      <svg height={radius * 2} width={radius * 2}>
        <defs>
          <linearGradient id="gradientStroke" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="blue" />
            <stop offset="100%" stopColor="#22234b" />
          </linearGradient>
        </defs>

        <circle
          stroke="#22234b"
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset="0"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          transform={`rotate(-90 ${radius} ${radius})`}
        />

        <circle
          stroke="url(#gradientStroke)"
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={strokeDashoffset}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          transform={`rotate(-90 ${radius} ${radius})`}
          style={{ transition: 'stroke-dashoffset 1s ease' }}
        />
      </svg>

      {/* Overlay content (OUTSIDE the SVG) */}
      <div className="absolute flex flex-col items-center">
        <div>
          <BsEmojiSmileFill fontSize={25} className="h-12 w-12 bg-[#0075ff] p-3 rounded-full text-white" />
        </div>
        <div className="text-3xl font-semibold mt-2  px-2 rounded">{percentage}%</div>
      </div>
    </div>
  );
};

export default Satisfaction;



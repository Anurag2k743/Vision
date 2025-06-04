import React, { useState, useEffect } from 'react';

const Tracking = ({ score = 9.3, maxScore = 10 }) => {
    const percentage = (score / maxScore) * 100;
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {    
            setProgress(percentage);
        }, 100);
        return () => clearTimeout(timer);
    }, [percentage]);

    const radius = 100;
    const stroke = 12;
    const normalizedRadius = radius - stroke * 0.5;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    return (
        <div className="flex items-center justify-center relative">
            <svg height={radius * 2} width={radius * 2}>
                <defs>
                    <linearGradient id="gradStroke" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#17c1e8" />
                        <stop offset="100%" stopColor="#49a85f" />
                    </linearGradient>
                </defs>
                

                <circle
                    stroke="#1a1d42"
                    fill="transparent"
                    strokeWidth={stroke}
                    r={normalizedRadius}
                    cx={radius}
                    cy={radius}
                />

                <circle
                    stroke="url(#gradStroke)"
                    fill="transparent"
                    strokeWidth={stroke}
                    strokeLinecap="round"
                    strokeDasharray={`${circumference} ${circumference}`}
                    strokeDashoffset={strokeDashoffset}
                    r={normalizedRadius}
                    cx={radius}
                    cy={radius}
                    className="transition-all duration-1000 ease-out origin-center -rotate-90"
                />
            </svg>

            <div className="absolute flex flex-col items-center text-white text-center">
                <span className="text-sm opacity-70">Safety</span>
                <span className="text-4xl font-bold">{score}</span>
                <span className="text-sm opacity-70 mt-1">Total Score</span>
            </div>
        </div>
    );
};

export default Tracking;

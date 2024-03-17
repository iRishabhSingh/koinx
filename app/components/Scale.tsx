import React from "react";
import { GoTriangleUp } from "react-icons/go";

const Scale: React.FC<{ low: number; high: number; current: number }> = ({
  low,
  high,
  current,
}) => {
  const left = (((current - low) / (high - low)) * 100).toFixed(0);

  return (
    <div className="relative w-[60%]">
      <div className="h-1 w-full rounded-full bg-gradient-to-r from-red-500 via-30% via-orange-500 to-green-500"></div>
      <div className="absolute top-0" style={{ left: `${left}%` }}>
        <GoTriangleUp />
        <span className="absolute top-[100%] left-[-50%] text-[10px] text-gray-500">
          {current.toLocaleString()}
        </span>
      </div>
    </div>
  );
};

export default Scale;

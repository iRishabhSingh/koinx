"use client";
import React from "react";
import { FaInfoCircle } from "react-icons/fa";

const HoverForInfo: React.FC<{ children?: React.ReactNode; about: string }> = ({
  children,
  about,
}) => {
  const [showTooltip, setShowTooltip] = React.useState(false);

  const toggleTooltip = () => {
    setShowTooltip(!showTooltip);
  };

  return (
    <div className="relative">
      <button className="">
        <FaInfoCircle
          className="ml-2 text-[#ABB9BF] cursor-pointer"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          onClick={toggleTooltip}
        />
        {showTooltip && (
          <div className="absolute bg-gray-100 text-gray-800 px-2 py-1 rounded-md border border-gray-200">
            {children ? children : about}
          </div>
        )}
      </button>
    </div>
  );
};

export default HoverForInfo;

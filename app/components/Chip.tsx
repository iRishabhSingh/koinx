import React from "react";

interface ChipProps {
  text: number;
  arrow?: boolean;
}

const Chip: React.FC<ChipProps> = ({ text, arrow }) => {
  const isNegative = text < 0;
  const chipBackgroundColor = isNegative ? "bg-[#EE68551A]" : "bg-[#0AB27D0F]";
  const textColor = isNegative ? "text-[#E96975]" : "text-[#32BE88]";
  const fillColor = isNegative ? "#E96975" : "#32BE88";
  const sign = isNegative ? "" : "+";
  const formattedText = `${arrow ? "" : sign}${text.toFixed(2)}%`;

  return (
    <div
      className={`inline-flex items-center gap-2 p-1 px-2 mr-2 rounded-[2px] bg-opacity-50 h-6 ${chipBackgroundColor}`}
    >
      {arrow && (
        <svg
          width="11"
          height="8"
          viewBox="0 0 11 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5.5 0L11 8H0L5.5 0Z" fill={fillColor} />
        </svg>
      )}
      <span className={`text-xs font-medium rounded ${textColor}`}>
        {formattedText}
      </span>
    </div>
  );
};

export default Chip;

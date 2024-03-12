import React from "react";

interface NextButtonProps {
  text: string;
  arrow?: boolean;
  onClick?: () => void;
}

const Button: React.FC<NextButtonProps> = ({ text, arrow, onClick }) => {
  return (
    <button
      className="w-fit flex items-center bg-white font-medium py-2 px-5 rounded-lg shadow-md m-1 ml-0"
      onClick={onClick}
    >
      <span className="text-nowrap text-sm sm:text-base">{text}</span>
      {arrow && (
        <svg
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="ml-2"
        >
          <path
            d="M17.0658 9.77144H4.56577"
            stroke="#0F1629"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.0243 4.7511L17.0659 9.7711L12.0243 14.7919"
            stroke="#0F1629"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
};

export default Button;

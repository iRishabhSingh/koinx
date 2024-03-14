"use client";
import React, { useState } from "react";

const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <div className="flex justify-between border-b border-[#D3E0E6] overflow-x-auto carousel">
      {[
        "Overview",
        "Fundamentals",
        "News Insights",
        "Sentiments",
        "Team",
        "Technical",
        "Tokenomics",
      ].map((tabName) => (
        <div
          key={tabName}
          onClick={() => handleTabClick(tabName)}
          className={`cursor-pointer px-8 py-2 text-sm sm:text-base flex items-center ${
            activeTab === tabName
              ? "border-b-2 border-[#0052FE] text-[#0052FE]"
              : "border-none text-black"
          }`}
        >
          <span className="whitespace-nowrap">{tabName}</span>
        </div>
      ))}
    </div>
  );
};

export default Tabs;

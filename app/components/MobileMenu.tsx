"use client";
import { useState } from "react";
import Link from "next/link";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative z-50">
      <button
        onClick={toggleMenu}
        aria-label="Toggle Menu"
        className="block md:hidden text-black focus:outline-none"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>
      {isOpen && (
        <div className="absolute top-14 right-4 bg-white p-4 shadow-lg rounded transform transition-all duration-300">
          <ul className="flex flex-col gap-3 text-right">
            <li>
              <Link href="/crypto-taxes">Crypto Taxes</Link>
            </li>
            <li>
              <Link href="/free-tools">Free Tools</Link>
            </li>
            <li>
              <Link href="/resource-center">Resource Center</Link>
            </li>
          </ul>
          <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold py-2 px-4 mt-3 rounded w-[136px] h-[40px]">
            Get Started
          </button>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;

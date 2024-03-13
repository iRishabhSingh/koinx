"use client";
import Link from "next/link";
import Image from "next/image";
import { MobileMenu } from "./components";

const Navbar = () => {
  return (
    <nav className="bg-white w-full">
      <div className="mx-auto flex justify-between items-center  py-4 px-4 sm:px-[24px] md:px-[56px] min-w-[320px] max-w-[1440px]">
        <div className="flex items-center">
          {/* Logo */}
          <Link href="/" passHref className="text-black text-lg font-semibold">
            <Image
              src="/logo.png"
              alt="Logo"
              width={95}
              height={20}
              loading="lazy"
              style={{ width: "100%", height: "100%" }}
            />
          </Link>
        </div>
        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6">
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
          {/* Get Started Button */}
          <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-2 px-4 rounded w-[136px] h-[40px]">
            Get Started
          </button>
        </div>
        {/* Burger Menu for Mobile */}
        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

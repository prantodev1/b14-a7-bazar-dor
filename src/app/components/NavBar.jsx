import Image from "next/image";
import React from "react";
import NavLink from "./NavLink";
import DateDisplay from "./DateDisplay";
import Marquee from "react-fast-marquee";

const NavBar = () => {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
        
        <div className="flex items-center gap-3">
          <Image
            src="/logo-icon.png"
            alt="বাজার দর"
            width={45}
            height={45}
            className="rounded-xl bg-green-700 p-2"
          />

          <div>
            <h2 className="text-xl font-bold leading-tight text-gray-800">
              বাজার দর
            </h2>

            <DateDisplay />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="cursor-pointer px-3 py-2 text-sm text-gray-800 hover:text-green-700">
            সাইন ইন
          </button>

          <button className="cursor-pointer rounded-md bg-green-700 px-4 py-2 text-sm text-white hover:bg-green-800">
            সাইন আপ
          </button>
        </div>
      </div>

      <NavLink />
      
    </header>
  );
};

export default NavBar;
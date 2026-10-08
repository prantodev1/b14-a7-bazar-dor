import Image from "next/image";
import React from "react";
import NavLink from "./NavLink";
import DateDisplay from "./DateDisplay";
import Link from "next/link";

const NavBar = () => {
  return (
    <header className="border-b border-gray-200 bg-white">

      {/* Top Navbar */}
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-3 py-2 sm:px-4">

        {/* Logo + Brand */}
        <Link href={'/'}>
        <div className="flex min-w-0 items-center gap-2 sm:gap-3">
          <Image
            src="/logo-icon.png"
            alt="বাজার দর"
            width={45}
            height={45}
            className="h-10 w-10 rounded-xl bg-green-700 p-2 sm:h-[45px] sm:w-[45px]"
          />

          <div className="min-w-0">
            <h2 className="truncate text-base font-bold leading-tight text-gray-800 sm:text-xl">
              বাজার দর
            </h2>

            <div className="text-[10px] sm:text-xs">
              <DateDisplay />
            </div>
          </div>
        </div>
        </Link>
        

        {/* Auth Buttons */}
        <div className="flex shrink-0 items-center gap-1 sm:gap-2">
          <button
            className="cursor-pointer px-2 py-1.5 text-xs text-gray-800
            transition hover:text-green-700 sm:px-3 sm:py-2 sm:text-sm"
          >
            সাইন ইন
          </button>

          <button
            className="cursor-pointer rounded-md bg-green-700 px-3 py-1.5
            text-xs font-medium text-white transition hover:bg-green-800
            sm:px-4 sm:py-2 sm:text-sm"
          >
            সাইন আপ
          </button>
        </div>
      </div>

      {/* Navigation */}
      <div className="overflow-x-auto border-t border-gray-100 scrollbar-hide">
        <div className="min-w-max">
          <NavLink />
        </div>
      </div>

    </header>
  );
};

export default NavBar;
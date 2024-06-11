"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  interface MenuItemProps {
    label: string;
  }

  const MenuItem: React.FC<MenuItemProps> = ({ label }) => {
    return <div className="text-white text-sm font-semibold">{label}</div>;
  };

  return (
    <header className="flex items-center justify-between bg-[#0A0908] h-[60px] md:h-[70px] lg:h-[70px] px-3 md:px-20 lg:px-20">
      {/* Left */}
      <div className="flex items-center justify-start">
        <Image
          src="/Logo.png"
          alt="Default Logo"
          width={99}
          height={30}
          className="items-center w-[85.67px] h-[24px] md:w-[99px] md:h-[30px] lg:w-[99px] lg:h-[30px]"
        />
      </div>
      {/* Right */}
      <div
        ref={menuRef}
        className=" block text-white ml-0 md:ml-6 lg:ml-6  text-[24px] h-[24px] md:hidden lg:hidden cursor-pointer"
        onClick={toggleMenu}
      >
        <FiMenu />
      </div>

      {/* Menu Contents */}
      {menuOpen && (
        <div className="block md:hidden lg:hidden fixed top-[75px] right-1 w-3/6 bg-[#181818] py-8 px-4">
          <div className="flex flex-col justify-center gap-6 text-sm font-normal">
            <Link href="/intelDocs">
              <MenuItem label="Docs" />
            </Link>
            <Link href="/advantages">
              <MenuItem label="Advantages" />
            </Link>
            {/* <Link href="/metadappDocs">
              <MenuItem label="Docs" />
            </Link> */}
          </div>
        </div>
      )}

      <div className=" hidden md:flex lg:flex items-center gap-8">
        <Link href="/intelDocs" className="">
          <h3 className="text-base font-medium hover:underline hover:underline-offset-4">
            Docs
          </h3>
        </Link>
        <Link href="/advantages" className="">
          <p className="text-base font-medium hover:underline hover:underline-offset-4">
            Advantages
          </p>
        </Link>
        <div className="flex items-center gap-2 border border-[#181818] h-[40px] rounded-[88px] px-4">
          <p className="font-normal text-sm pr-1">Community</p>
          <Image src="/X.png" width={13.59} height={13.59} alt="twitter" />

          <Image
            src="/telegram.png"
            width={13.59}
            height={13.59}
            alt="Telegram"
          />
        </div>
        <Link href="/logIn">
          <div className=" hidden md:block lg:block bg-gradient-to-r from-[rgba(3,255,163,.9)] to-[rgba(127,86,217,.9)] rounded-[66px] py-[2px] px-[2px] mb-10 mt-10 shadow-drop">
            <button className="bg-gradient-to-r from-[#3A3A3A] to-[#000000] flex gap-2 items-center justify-center text-sm font-medium ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-800 hover:scale-95 dark:text-secondary text-white transition ease-in-out delay-150 duration-300 h-10 w-[153px] rounded-[66px] hover:bg-[#0B0F16]">
              Request Access
            </button>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Navigation;

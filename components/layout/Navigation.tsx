"use client";
import Cookies from "js-cookie";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { FaTelegramPlane, FaDiscord } from 'react-icons/fa';
const Navigation = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // toggle button

  const [isChecked, setIsChecked] = useState(true);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  // other elenents
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

  const pathName = usePathname();
  const show =
    pathName === "/dashboard" ||
    pathName === "/communityManager" ||
    pathName === "/trainAi";
  const visible =
    pathName === "/logIn" ||
    pathName === "/connectWeb3" ||
    pathName === "/category" ||
    pathName === "/user";

  const train = pathName === "/trainAi" || pathName === "/x-Agents";
  const inline = pathName === "/workspace";
  const userSelect = Cookies.get("user");
  // console.log("select user - ", userSelect);

  // const agents = pathName === "/x-Agents";

  return (
    <>
      {pathName === "/" && (
        <header className="w-full absolute top-0 left-0 z-40 flex items-center justify-between bg-[#0A0908] h-[60px] md:h-[70px] lg:h-[70px] px-3 md:px-20 lg:px-20">
          <Image src="/Logo.png" width={99} height={40} alt="logo" />

          {/* Menu Contents */}
          <div
            ref={menuRef}
            className=" block text-white ml-0 md:ml-6 lg:ml-6  text-[24px] h-[24px] md:hidden lg:hidden cursor-pointer"
            onClick={toggleMenu}
          >
            <FiMenu />
          </div>
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
      )}

      {/*  dashboard navigation  */}

      {show && (
        <header className="hidden w-full absolute z-40 top-0 left-[290px] md:flex lg:flex justify-center bg-[#0D0D0D] h-[60px] md:h-[70px] lg:h-[72px] px-3 md:px-20 lg:px-10">
          <div className="hidden md:flex lg:flex items-center gap-6 justify-between">
            <div className="flex justify-center items-center gap-8">
              <p
                className={`text-base font-medium ${
                  userSelect === "communityManager"
                    ? "text-white"
                    : "text-[#6D6D6D]"
                }`}
              >
                Community Manager
              </p>

              <p
                className={`text-base font-medium ${
                  userSelect === "kolInfluencer"
                    ? "text-white"
                    : "text-[#6D6D6D] cursor-not-allowed"
                }`}
              >
                KOL Influencer
              </p>
            </div>
            <div className="flex items-center justify-end gap-6 px-4 md:px-12 lg:px-24 xl:px-72">
  <p className="font-medium text-[20px] leading-[20.8px]">
    Co-pilot
  </p>
  <div className="flex items-center justify-center gap-1">
    <div
      className="relative inline-block w-7 h-4 transition duration-200 ease-linear rounded-full cursor-pointer bg-[#545454]"
      onClick={handleToggle}
    >
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleToggle}
        className="absolute opacity-0 w-full h-full cursor-pointer bg-[#545454]"
      />
      <span
        className={`absolute left-0 inline-block w-3.5 h-3.5 transition duration-200 ease-linear transform rounded-full shadow ${
          isChecked ? "translate-x-3 bg-green-400" : "bg-white"
        }`}
      ></span>
    </div>
    <p className="font-medium text-[14px] leading-[14.56px] text-[#6B6B6B]">
      {isChecked ? "ON" : "OFF"}
    </p>
  </div>
</div>

            {/* ends here */}
          </div>
        </header>
      )}

      {/* login navigation */}

      {visible && (
        <header className="fixed z-50 top-0 left-0 flex justify-end h-[60px] bg-black opacity-[1%] md:h-[70px] lg:h-[70px] px-3 md:px-20 lg:px-10 py-4 border-[#363636] w-[95%] border-b ">
          <div className="flex justify-start pr-10">
            <Image src="/Logo.png" width={97} height={30} alt="logo" />
          </div>
        </header>
      )}

      {/* workspace navigation */}
      {inline && (
        <header className="absolute z-40 top-0 left-0 flex justify-end h-[60px] md:h-[72px] lg:h-auto px-3 md:px-20 lg:px-12 py-4 w-full bg-[#0D0D0D] gap-4">
          <p className="font-medium text-[20px]">Co-pilot</p>
          <div
            ref={menuRef}
            className=" block text-white ml-0 md:ml-6 lg:ml-6  text-[24px] h-[24px] md:hidden lg:hidden cursor-pointer"
            onClick={toggleMenu}
          >
            <FiMenu />
          </div>

          {/* Menu Contents */}
          {menuOpen && (
            <div className="block md:hidden lg:hidden fixed top-[75px] right-1 w-full bg-[#181818] py-8 px-4">
              <div className="flex flex-col justify-center gap-6 text-sm font-normal">
                <Link href="/communityManager">
                  <MenuItem label="community Manager" />
                </Link>
                <Link href="/kolInfluencer">
                  <MenuItem label="Kol Influencer" />
                </Link>
              </div>
            </div>
          )}
          <div className="flex items-center justify-center gap-2">
            <div
              className="relative inline-block w-7 h-4 transition duration-200 ease-linear rounded-full cursor-pointer bg-[#545454]"
              onClick={handleToggle}
            >
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleToggle}
                className="absolute opacity-0 w-full h-full cursor-pointer bg-[#545454]"
              />
              <span
                className={`absolute left-0 inline-block w-3.5 h-3.5 transition duration-200 ease-linear transform rounded-full shadow ${
                  isChecked ? "translate-x-3 bg-green-400" : "bg-white"
                }`}
              ></span>
            </div>
            <p className="font-medium text-[14px] leading-[14.56px] text-[#6B6B6B]">
              {isChecked ? "ON" : "OFF"}
            </p>
          </div>
        </header>
      )}

      {/* x-agents navigation */}

      {/* {agents && (
        <header className="absolute z-40 top-0 left-0 flex justify-end h-[60px] md:h-[72px] lg:h-auto px-3 md:px-20 lg:px-12 py-4 w-full bg-[#0D0D0D] gap-4">
          <p className="text-[18px] leading-[18.72px] font-medium"></p>
          <p className="font-medium text-[20px]">Co-pilot</p>
          <div
            ref={menuRef}
            className=" block text-white ml-0 md:ml-6 lg:ml-6  text-[24px] h-[24px] md:hidden lg:hidden cursor-pointer"
            onClick={toggleMenu}
          >
            <FiMenu />
          </div>

          {/* Menu Contents */}
          {/* {menuOpen && (
            <div className="block md:hidden lg:hidden fixed top-[75px] right-1 w-full bg-[#181818] py-8 px-4">
              <div className="flex flex-col justify-center gap-6 text-sm font-normal">
                <Link href="/communityManager">
                  <MenuItem label="community Manager" />
                </Link>
                <Link href="/kolInfluencer">
                  <MenuItem label="Kol Influencer" />
                </Link>
              </div>
            </div>
          )}
          <div className="flex items-center justify-center gap-2">
            <div
              className="relative inline-block w-7 h-4 transition duration-200 ease-linear rounded-full cursor-pointer bg-[#545454]"
              onClick={handleToggle}
            >
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleToggle}
                className="absolute opacity-0 w-full h-full cursor-pointer bg-[#545454]"
              />
              <span
                className={`absolute left-0 inline-block w-3.5 h-3.5 transition duration-200 ease-linear transform rounded-full shadow ${
                  isChecked ? "translate-x-3 bg-green-400" : "bg-white"
                }`}
              ></span>
            </div>
            <p className="font-medium text-[14px] leading-[14.56px] text-[#6B6B6B]">
              {isChecked ? "ON" : "OFF"}
            </p>
          </div>
        </header>
      )}  */}

      {/* TrainAi navigation  */}

      {train && (
  <header className="hidden md:flex lg:flex w-full absolute z-40 top-0 left-[1px] justify-center bg-[#0D0D0D] h-[60px] md:h-[70px] lg:h-[72px] px-3 md:px-20 lg:px-2">
    <div
      ref={menuRef}
      className="block text-white ml-0 md:ml-6 lg:ml-6 text-[24px] h-[24px] md:hidden lg:hidden cursor-pointer"
      onClick={toggleMenu}
    >
      <FiMenu />
    </div>

    {/* Menu Contents */}
    {menuOpen && (
      <div className="block md:hidden lg:hidden fixed top-[75px] right-1 w-full bg-[#181818] py-8 px-4">
        <div className="flex flex-col justify-center gap-6 text-sm font-normal">
          <Link href="/communityManager">
            <MenuItem label="Community Manager" />
          </Link>
          <Link href="/kolInfluencer">
            <MenuItem label="Kol Influencer" />
          </Link>
        </div>
      </div>
    )}

    <div className="flex items-center justify-between w-full">
      {/* Centered Links */}
      <div className="flex items-center justify-center gap-4 mx-auto pl-[20rem]" >
        <Link href="/trainAi">
          <div className={`w-auto h-[37px] rounded-[24px] px-2 py-2 flex items-center gap-2 text-[14px] leading-[14.3px] font-medium ${
            pathname === "/trainAi" ? "bg-[#03FFA3] text-[#0d0d0d]" : "text-[#6A6A6A]"
          }`}>
            <div className="flex items-center gap-1">
              <div className="flex items-center justify-center border-2 border-[#0d0d0d] rounded-full w-[17px] h-[17px]">
                <FaDiscord className="text-[#0d0d0d] w-[14px] h-[14px]" />
              </div>
              <div className="flex items-center justify-center bg-[#0d0d0d] rounded-full w-[17px] h-[17px]">
                <FaTelegramPlane className="text-[#03FFA3] w-[14px] h-[14px]" />
              </div>
            </div>
            Community Training
          </div>
        </Link>
        <Link href="/x-Agents">
          <div className={`w-auto h-[37px] rounded-[24px] px-2 py-2 flex items-center text-[14px] leading-[14.3px] font-medium ${
            pathname === "/x-Agents" ? "bg-[#03FFA3] text-[#0d0d0d]" : "text-[#6A6A6A]"
          }`}>
            X Content Studio
          </div>
        </Link>
      </div>

      {/* Co-pilot and Toggle Button at the Far Right */}
      <div className="flex items-center gap-6 pr-4 md:pr-8 lg:pr-0 xl:pr-16">
        <p className="font-medium text-[20px] leading-[20.8px]">
          Co-pilot
        </p>
        <div className="flex items-center justify-center gap-1">
          <div
            className="relative inline-block w-7 h-4 transition duration-200 ease-linear rounded-full cursor-pointer bg-[#545454]"
            onClick={handleToggle}
          >
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleToggle}
              className="absolute opacity-0 w-full h-full cursor-pointer bg-[#545454]"
            />
            <span
              className={`absolute left-0 inline-block w-3.5 h-3.5 transition duration-200 ease-linear transform rounded-full shadow ${
                isChecked ? "translate-x-3 bg-green-400" : "bg-white"
              }`}
            ></span>
          </div>
          <p className="font-medium text-sm leading-[14.56px] text-[#6B6B6B]">
            {isChecked ? "ON" : "OFF"}
          </p>
        </div>
      </div>
      

    </div>
  </header>
)}
 {/* login navigation */}

      {visible && (
        <header className="absolute z-40 top-0 left-0 flex justify-end h-[60px] md:h-[70px] lg:h-auto px-3 md:px-20 lg:px-10 py-4 border-[#363636] w-[95%] border-b ">
          <div className="flex justify-end pr-10">
            <Image src="/Logo.png" width={97} height={30} alt="logo" />
          </div>

          {/* Menu Contents */}
          {menuOpen && (
            <div className="block md:hidden lg:hidden fixed top-[75px] right-1 w-full bg-[#181818] py-8 px-4">
              <div className="flex flex-col justify-center gap-6 text-sm font-normal">
                <Link href="/communityManager">
                  <MenuItem label="community Manager" />
                </Link>
                <Link href="/kolInfluencer">
                  <MenuItem label="Kol Influencer" />
                </Link>
              </div>
            </div>
          )}
        </header>
      )}
    </>
  );
};

export default Navigation;

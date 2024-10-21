import React from "react";
import Image from "next/image";
import { Logo } from "@/assets"; // Removed telegram and twitter as they weren't used directly
import { FaXTwitter } from "react-icons/fa6";
import { PiTelegramLogoLight } from "react-icons/pi";

const Footer = () => {
  const style4: React.CSSProperties = {
    background:
      "radial-gradient(circle, rgba(127, 86, 217, 0.3), rgba(16, 12, 14, 0.6))",
    backgroundBlendMode: "darken",
    filter: "blur(70px)",
  };

  return (
    <>
      <div className="bg-[#000000] relative w-full h-auto overflow-hidden ">
        <div
          style={style4}
          className="-bottom-[3%] left-[99%] absolute w-[65%] h-[200px] -translate-x-1/2"
        ></div>

        {/* Main Flex Container */}
        <div className="flex flex-col items-start pt-5 mx-auto px-2 md:px-2 lg:px-24 py-2 md:py-20 lg:py-10 pb-3 md:pb-16 lg:pb-5">
          
          {/* Logo and Community Icons Flex Container */}
          <div className="flex flex-col md:flex-col lg:flex-col w-full items-start">
            <div className="block mb-5 pt-0 px-2">
              <Image
                src={Logo}
                alt="Default Logo"
                width={50}
                height={34.37}
                className="md:hidden lg:hidden"
              />
              <Image
                src={Logo}
                alt="Default Logo"
                width={140}
                height={96.24}
                className="hidden md:block lg:block"
              />
            </div>

            {/* Community Section */}
            <div className="flex items-start gap-2 border border-[#181818] h-auto rounded-[88px] px-2">
              <p className="font-normal text-sm pr-1">Community</p>
              <a href="https://t.me/mylabwork" target="_blank" rel="noopener noreferrer">
                <FaXTwitter className="w-[16px] h-[16px] text-white" />
              </a>
              <a href="https://t.me/mylabwork" target="_blank" rel="noopener noreferrer">
                <PiTelegramLogoLight className="w-[16px] h-[16px] text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="flex justify-start pt-4 md:pt-6 lg:pt-6 pb-5 mx-auto border-t border-[#272727] w-[95%] md:w-[85%] lg:w-[85%]">
          <p className="font-normal text-[10px] px-2">
            Built with ⚡️ 0x Ai Company Inc
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;

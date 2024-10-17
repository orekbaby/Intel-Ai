import React from "react";
import Image from "next/image";
import {Logo, telegram, twitter } from "@/assets";

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
        <div className="flex flex-col md:flex-col pt-2 lg:flex-row justify-between mx-auto px-3 md:px-12 lg:px-32  py-2 md:py-20 lg:py-20  pb-0 md:pb-16 lg:pb-16">
          <div className="w-full md:w-full lg:w-1/2 flex">
            <div className="block md:hidden lg:hidden">
              <Image
                src={Logo}
                alt="Default Logo"
                width={50}
                height={34.37}
                className="mb-10 pt-5"
              />
            </div>

            <div className="hidden md:block lg:block">
              <Image
                src={Logo}
                alt="Default Logo"
                width={140}
                height={96.24}
                className="mb-10"
              />
            </div>
          </div>

          <div className="w-full md:w-full lg:w-1/2">
          <div className="ml-auto flex justify-end items-end pb-3">
          <div className="flex md:hidden lg:hidden w-fit items-center justify-center gap-2 border border-[#181818] h-[40px] rounded-[88px] px-4">
  <p className="font-normal text-sm pr-1">Community</p>

  <div className="">
  <a href="https://t.me/mylabwork" target="_blank" rel="noopener noreferrer">
    <Image src={twitter} width={16} height={16} alt="twitter" />
    </a>
  </div>

  {/* Wrap the Telegram image inside a link */}
  <a href="https://t.me/mylabwork" target="_blank" rel="noopener noreferrer">
    <Image
      src={telegram}
      width={16}
      height={16}
      alt="Telegram"
    />
  </a>
  </div>
</div>
        </div>
        </div>
        <div className="flex justify-start pt-4 md:pt-6 lg:pt-6 pb-5 mx-auto  border-t border-[#272727] w-[95%] md:w-[85%] lg:w-[85%]">
          <p className="font-normal text-[10px] px-2">
            Built with ⚡️ 0x Ai Company Inc
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;

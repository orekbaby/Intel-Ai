import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navigation = () => {
  return (
    <header className="flex items-center justify-between bg-[#0A0908] h-[60px] px-20">
      {/* Left */}
      <div className="flex items-center justify-start">
        <Image
          src="/intel-logo.png"
          alt="Default Logo"
          width={99}
          height={30}
          className="items-center"
        />
      </div>
      {/* Right */}
      <div className="flex items-center gap-8">
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
        <div className="flex items-center gap-2 border border-[#181818] h-[40px] rounded-[88px]">
          <p className="font-normal text-sm pr-1">Community</p>
          <Image src="/X.png" width={13.59} height={13.59} alt="Discord" />
          <Image
            src="/discord.png"
            width={13.59}
            height={13.59}
            alt="Discord"
          />
          <Image
            src="/telegram.png"
            width={13.59}
            height={13.59}
            alt="Telegram"
          />
        </div>
        <div className="bg-gradient-to-r from-[rgba(3,255,163,.9)] to-[rgba(127,86,217,.9)] rounded-[66px] py-[2px] px-[2px] mb-10 mt-10 shadow-drop">
          <button className="bg-gradient-to-r from-[#3A3A3A] to-[#000000] flex gap-2 items-center justify-center text-sm font-medium ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-800 hover:scale-95 dark:text-secondary text-white transition ease-in-out delay-150 duration-300 h-10 w-[153px] rounded-[66px] hover:bg-[#0B0F16]">
            Request Access
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navigation;

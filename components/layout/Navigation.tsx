import React from "react";
import Image from "next/image";
import Link from "next/link";
const Navigation = () => {
  return (
    <header className=" flex items-center justify-between bg-[#0A0908] h-[60px] px-20">
      {/* left */}
      <div className="flex items-center justify-start ">
        <Image
          src="/intel-logo.png"
          alt="Default Logo"
          width={99}
          height={30}
          className="items-center"
        />
      </div>
      {/* right */}
      <div className="flex justify-center items-center gap-8">
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
        <div
          className="flex justify-center items-center gap-2 border border-[#181818] w-[157px] h-[40px]
         rounded-[88px] "
        >
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
        <div className="">
          <button
            className="
    bg-gradient-to-r from-[rgba(58,58,58,.9)] via-[rgba(58,58,58,.9)] to-[rgba(0,0,0,.5)]
    border-l border-l-[rgba(3,255,163,1)]
    border-t border-t-[rgba(3,255,163,1)]
    border-b-[3px] border-b-[rgba(3,255,163,1)]
    border-r-[3px] border-r-[rgba(127,86,217,1)]
    items-center justify-center text-sm font-medium
    ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2
    disabled:pointer-events-none disabled:opacity-50
    dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-800
    hover:scale-95 dark:text-secondary text-white bg-button
    transition ease-in-out delay-150 hover:border-2 hover:bg-[#0B0F16]
    duration-300 dark:hover:bg-[#0B0F16] 
    h-10 w-[153px] rounded-[66px]
  "
            value="Log In"
          >
            Request Access
          </button>

          {/* rgba(58, 58, 58, 1) rgba(0, 0, 0, 1)
          <div class="h-72 bg-gradient-to-r from-purple-600 to-blue-600"></div> */}
        </div>
      </div>
    </header>
  );
};

export default Navigation;

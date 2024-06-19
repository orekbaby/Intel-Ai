import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { FaTelegramPlane } from "react-icons/fa";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { FaRegThumbsUp } from "react-icons/fa6";
import { FaRegThumbsDown } from "react-icons/fa6";
import { CiPaperplane } from "react-icons/ci";
import Link from "next/link";

const DialogData = () => {
  return (
    <>
      <div className="w-full md:w-full lg:w-full h-[400px] md:h-[400px] lg:h-[100vh] overflow-y-auto scrollbar-hide outline-0 mb-5 pt-5">
        <div className="w-[193px] h-[40px] flex justify-between items-center px-4 rounded-[10px] bg-[#1D1D1D] mb-5">
          <div className="flex gap-2 items-center">
            <div className="w-[14px] h-[14px] rounded-full bg-[#2B6AFF] flex justify-center items-center">
              <FaTelegramPlane className="w-[10px] h-[10px]" />
            </div>
            <p className="font-normal text-xs leading-[12.48px]">Telegram</p>
          </div>
          <IoIosArrowDown className="w-[15px] h-[15px]" />
        </div>
        <div className=" flex w-full h-[60px] bg-[#1B1B1B] rounded-[20px] px-8 mb-5  items-center">
          <p className="font-normal text-left text-sm leading-[14.56px] text-[#858585]">
            Simulation workspace
          </p>
        </div>
        {/* chat */}
        <div className="flex justify-end mb-8 relative">
          <div className="w-[264px] h-[53px] rounded-[20px] bg-[#696969] px-4 py-2">
            <h5 className="font-normal text-xs mb-1">What is Getequity </h5>
            <p className="font-normal text-[10px] text-[#939393]">11:00 am</p>
          </div>
          {/* absolute position section */}
          <div className="flex justify-center items-center bg-[#2D2D2D] border-[3px] border-[#181818] w-[49px] h-[28px] rounded-[20px] absolute right-7 bottom-[-15%]">
            <p className="font-normal text-xs">You</p>
          </div>
          <div className="absolute bottom-[-10%] right-0">
            <Image
              src="/avatar.png"
              width={28}
              height={28}
              alt="uder-img"
              className=""
            />
          </div>
        </div>
        {/* response section */}
        <div className="w-[375px] h-[126px] rounded-[20px] bg-[#2D2D2D] px-3 py-2 relative">
          <p className="font-normal text-xs leading-[16.48px]">
            With a commitment to providing tools for investment, asset
            organization, and management in one convenient platform, GetEquity
            ensures a safe and efficient investment experience for accredited
            investors, from high-net-worth individuals to industry veterans.
          </p>
        </div>
        {/* absolute section */}
        <div className="flex gap-1 items-center relative bottom-[2%]">
          <div className="">
            <Image
              src="/glow-img.png"
              width={28}
              height={28}
              alt="uder-img"
              className=""
            />
          </div>

          <div className="flex justify-center items-center bg-[#2D2D2D] border-[3px] border-[#181818] w-[57px] h-[28px] rounded-[20px]">
            <p className="font-normal text-xs">
              Intel
              <span className="font-black text-xs text-[#03FFA3]">ai</span>
            </p>
          </div>
        </div>
        {/* like section */}
        <div className="flex gap-2 pt-5">
          <div className="w-[26px] h-[26px] rounded-full bg-[#2D2D2D] flex justify-center items-center">
            <FaRegThumbsUp className="text-[#8E8E8E] w-[14px] h-[14px]" />
          </div>

          <div className="w-[26px] h-[26px] rounded-full bg-[#2D2D2D] flex justify-center items-center">
            <FaRegThumbsDown className="text-[#8E8E8E] w-[14px] h-[14px]" />
          </div>
        </div>

        {/* text area section */}

        <div className="pt-60 flex justify-center items-center gap-4">
          <div className="">
            <input
              type="text"
              id="inputField2"
              className="text-input pt-1 font-[300px] text-sm leading-[22.68px]"
              placeholder="Ask any question"
            />
          </div>
          <div className="w-[60px] h-[60px] rounded-[20px] bg-[#03FFA3] flex justify-center items-center">
            <CiPaperplane className="w-[26px] h-[26px] text-black" />
          </div>
        </div>

        {/* button */}
        <Dialog>
          <div className="mb-20 flex justify-center pt-6 ">
            {" "}
            <DialogTrigger>
              <div className="flex justify-center items-center pt-1">
                <div className="bg-gradient-to-r from-[rgba(3,255,163,.9)] to-[rgba(127,86,217,.9)] w-fit rounded-[66px] py-[2px] px-[2px] mb-10  shadow-drop">
                  <button className="bg-gradient-to-r from-[#3A3A3A] to-[#000000] flex gap-2 items-center justify-center ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-800 hover:scale-95 dark:text-secondary text-white transition ease-in-out delay-150 duration-300 h-10 w-[177px] rounded-[66px] hover:bg-[#0B0F16] font-normal text-xs">
                    Complete Simulation
                  </button>
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="px-8 md:w-full lg:w-full border-none rounded-lg max-w-auto w-[540px] h-[401px] bg-[#181818]">
              <div className="mx-auto">
                <Image
                  width={120}
                  height={120}
                  src="/onboard.png"
                  className="mx-auto mb-5 pt-10"
                  alt=""
                />
                <h3 className="font-medium text-center text-[20px] leading-[26px] w-[80%] mx-auto mb-4">
                  Congratulations on Completing Your Initial Training!
                </h3>
                <p className="font-medium text-sm mx-auto text-center text-[#C1C1C1] w-[383px] mb-5">
                  The next step is to integrate your Telegram community
                </p>
                {/* button */}
                <Link href="/community">
                  <button
                    className="bg-white items-center flex justify-center text-center 
                                  text-xs font-normal ring-offset-white focus-visible:outline-none
                                  text-[#0D0D0D] h-10 w-[199px] rounded-[66px] mx-auto shadow-drop2"
                  >
                    Integrate your community now
                  </button>
                </Link>
              </div>
            </DialogContent>
          </div>
        </Dialog>
      </div>
    </>
  );
};

export default DialogData;

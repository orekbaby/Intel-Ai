import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";
import Link from "next/link";
import { FaTelegramPlane } from "react-icons/fa";
import DialogData from "@/components/dialog/DialogData";
import { userDocInfo } from "@/config/mockData";
import { IntelAi, loader } from "@/assets";

const page = () => {
  return (
    <>
      <div className="block md:hidden lg:hidden xl:hidden 2xl:hidden w-full md:w-[60%] lg:w-[60%] bg-[#181818] rounded-[20px] h-[80vh] md:h-[840px] overflow-y-auto scrollbar-hide relative overflow-x-hidden">
        <div className="w-full h-[60px] rounded-[20px] bg-[#1B1B1B] flex justify-between items-center px-5 mb-10">
          <p className="font-normal text-sm leading-[14.56px] text-[#858585]">
            Test Area
          </p>
          <div className="w-[110px] h-[40px] flex justify-center items-center text-center rounded-[10px] bg-[#131313]">
            <p className="font-normal text-sm leading-[14.65px]">
              1
              <span className="font-normal text-sm leading-[14.65px] text-[#3C3C3C]">
                /15 prompts
              </span>
            </p>
          </div>
        </div>
        {/* text area */}
        <Image
          width={49.34}
          height={10}
          src={IntelAi}
          alt="logo"
          className="ml-10 mb-1"
        />

        <div className="w-full ml-3 md:ml-10 lg:ml-10 xl:ml-10 2xl:ml-10 border-l-2 border-[#03FFA3] px-4  h-[250px] md:h-[230px] lg:h-[230px] overflow-y-auto scrollbar-hide mb-5 overflow-x-hidden">
          {/* first content */}
          {userDocInfo?.map((row, index) => (
            <div key={index} className="overflow-x-hidden">
              <p className="font-[200] text-sm leading-[19.2px] mb-5 w-[95%] ">
                {row.content}
              </p>
            </div>
          ))}
        </div>

        {/* button */}
        <Dialog>
          <div className="mb-20 flex justify-center pt-6 ">
            {" "}
            {/* Added parent container with flex and justify-center */}
            <DialogTrigger className="relative">
              <button className="bg-gradient-to-r from-[rgba(3,255,163,.9)] to-[rgba(127,86,217,.9)] flex justify-center gap-1 items-center text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 font-normal focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-800 hover:scale-95 dark:text-secondary text-white transition ease-in-out delay-150 duration-300 h-[42px] w-[222px] rounded-[21px] hover:bg-[#0B0F16]">
                <div className="w-[14px] h-[14px] rounded-full bg-[#2B6AFF] flex justify-center items-center">
                  <FaTelegramPlane className="w-[10px] h-[10px]" />
                </div>
                Simulate on Telegram
              </button>
            </DialogTrigger>
          </div>
          <DialogContent className="hidden px-8 md:w-full lg:w-full border-none rounded-lg max-w-auto w-[540px] h-[401px] bg-[#181818]">
            <div className="mx-auto">
              <Image
                width={48}
                height={48}
                src={loader}
                className="mx-auto mb-5 pt-10 bg-[#181818]"
                alt=""
              />
              <h3 className="font-medium text-center text-[20px] leading-[26px] w-[80%] mx-auto mb-4">
                Creating your simulation workspace
              </h3>
              <p className="font-medium text-sm mx-auto text-center text-[#C1C1C1] w-[383px] mb-5">
                Please wait while your AI generates the test environment for
                your results.
              </p>
              {/* button */}
              <Link href="/train-ai" prefetch={false}>
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
          <DialogContent
            className="absolute top-[54%] left-[50%] md:left-[80%] lg:left-[80%] -translate-x-1/2 w-full px-0 md:px-4 lg:px-4 md:w-full lg:w-full
                     bg-[#131313] border-none h-auto rounded-lg max-w-auto mb-20"
          >
            <DialogData />
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default page;

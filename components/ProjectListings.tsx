import React from "react";
import { launchpadData } from "@/utils/mockData";
import { FaCircle } from "react-icons/fa";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CiPaperplane } from "react-icons/ci";

const ProjectListings = () => {
  return (
    <>
      {launchpadData?.map((row, index) => (
        <>
          <div className="flex flex-col mb-5 pb-1 border-[#1E1E1E] border-b text-left">
            <h5 className="font-medium cursor-pointer text-sm leading-[14.56px] pb-2">
              Upcoming Project Listings
            </h5>
          </div>
          <div className="w-full h-auto rounded-[20px] pb-10">
            <div className="w-[460px] h-auto bg-[#1B1B1B] pt-3 pb-4 px-4 rounded-bl-[20px] rounded-br-[20px]">
              <h5 className="font-semibold text-sm text-[#f9f9f9] mb-4">
                Instructions:
              </h5>
              <p className="font-normal text-sm leading-[14.56px] text-[#E4E4E4] mb-2">
                {row.insructionText}
              </p>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <FaCircle className="text-[#858585] text-[6px]" />
                  <p className="font-[300] text-[#858585] text-sm leading-[14.56px] italic">
                    {row.bullet1}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <FaCircle className="text-[#858585] text-[6px]" />
                  <p className="font-[300] text-[#858585] text-sm leading-[14.56px] italic">
                    {row.bullet2}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <FaCircle className="text-[#858585] text-[6px]" />
                  <p className="font-[300] text-[#858585] text-sm leading-[14.56px] italic">
                    {row.bullet3}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <FaCircle className="text-[#858585] text-[6px]" />
                  <p className="font-[300] text-[#858585] text-sm leading-[14.56px] italic">
                    {row.bullet4}
                  </p>
                </div>
              </div>
            </div>
            {/* text area starts here */}
            <div className="pt-8 pb-3">
              <div className="relative w-[420px] h-[108px]  bg-[#0D0D0D] rounded-[12px] border border-[#363636]">
                <textarea
                  className="w-full h-[65px] bg-transparent border-none outline-none pt-9 px-4 pb-2 text-[#7B7B7B] font-normal italic text-xs"
                  placeholder="Add more information"
                />
                <div className="absolute bottom-0 w-full h-[43px] border-t border-[#272727] flex justify-between items-center px-4">
                  <Image
                    src="/ring.png"
                    width={18}
                    height={18}
                    alt="textarea-icon"
                    className=""
                  />

                  <button className="w-[27px] h-[27px] rounded-full bg-[#03FFA3] flex justify-center items-center">
                    <CiPaperplane className="w-[14px] h-[14px] text-black" />
                  </button>
                </div>
              </div>
            </div>
            <hr className="border-t border-[#222222]" />

            {/* save button */}
            <div className="flex justify-center pt-5 mx-auto items-center">
              <button className="bg-gradient-to-r from-[rgba(3,255,163,.9)] to-[rgba(127,86,217,.9)] flex justify-center gap-1 items-center ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 font-normal focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-800 hover:scale-95 dark:text-secondary text-white transition ease-in-out delay-150 duration-300 h-10 w-[153px] rounded-[200px] hover:bg-[#0B0F16] text-xs">
                Save
              </button>
            </div>
          </div>
        </>
      ))}
    </>
  );
};

export default ProjectListings;

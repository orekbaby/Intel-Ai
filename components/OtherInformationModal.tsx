"use client";
import React, { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { informationModal } from "@/utils/mockData";
import Image from "next/image";

import { CiPaperplane } from "react-icons/ci";

const OtherInformationModal = () => {
  const [selectedOption, setSelectedOption] = useState("today");
  const options = [
    "Today",
    "26 June 2024",
    "1 week",
    "1 month",
    "5 days",
    // Add more options as needed
  ];

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <>
      <div className="">
        {informationModal?.map((row, index) => (
          <Dialog key={index}>
            <DialogTrigger className="cursor-pointer" asChild>
              <div className="flex flex-col mb-5 pb-5 border-[rgb(30,30,30)] border-b text-left">
                <div className="bg-[#101010] px-4 py-2 flex border-[#181818] items-center mb-10">
                  <h5 className="font-medium text-sm leading-[14.56px] mb-2">
                    {row.title}
                  </h5>
                </div>
                <div className="px-2">
                  <p className="font-semibold text-[13px] leading-[16.56px] text-white ">
                    {row.content}
                  </p>
                  <p className="font-normal text-sm text-[#4D4D4D]">
                    Add other options
                  </p>
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="absolute top-[50%] max-w-auto w-[460px] h-auto overflow-y-auto scrollbar-hide border-0 outline-none">
              <div className="w-full h-auto bg-[#131313] border-b border-[#131313] rounded-[20px] pb-10">
                <div className="bg-[#101010] border-[#181818] border-b px-4 py-[10px] w-[460px] h-[47px] mb-1">
                  <h5 className="font-semibold text-sm text-[14.56px]">
                    {row.title}
                  </h5>
                </div>

                <div className="w-full">
                  <input
                    type="text"
                    id="inputField"
                    className="text-input3 mt-2 font-normal italic text-xs leading-[22.68px]"
                    placeholder="What do you want to add?"
                  />
                  <hr className="border-b border-[#222222] pt-3" />
                </div>

                <div className="w-[460px] h-auto bg-[#1B1B1B] pt-2 pb-4 px-4 rounded-bl-[20px] rounded-br-[20px]">
                  <h5 className="font-semibold text-sm text-[#f9f9f9] mb-4">
                    {row.instruction}
                  </h5>
                  <p className="font-normal text-sm leading-[14.56px] text-[#E4E4E4] mb-2">
                    {row.insructionText}
                  </p>
                </div>

                {/* text area starts here */}
                <div className="pt-8 pb-3 px-2 w-auto">
                  <div className="relative w-[420px] h-[108px] bg-[#0D0D0D] rounded-[12px] border border-[#363636]">
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
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </>
  );
};

export default OtherInformationModal;

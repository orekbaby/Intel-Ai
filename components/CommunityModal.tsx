"use client";
import React, { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { announcementsModal, communityModals } from "@/utils/mockData";
import { FaCircle } from "react-icons/fa";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CiPaperplane } from "react-icons/ci";

const CommunityModal = () => {
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
      <div className="w-full h-full">
        {communityModals?.map((row, index) => (
          <Dialog key={index}>
            <DialogTrigger className="cursor-pointer" asChild>
              <div className="flex flex-col mb-5 pb-5 border-[#1E1E1E] border-b text-left">
                <h5 className="font-semibold  text-sm leading-[14.56px] mb-2">
                  {row.title}
                </h5>
                <p className="font-normal text-sm leading-[16.56px] text-[#4D4D4D]">
                  {row.content}
                </p>
              </div>
            </DialogTrigger>
            <DialogContent
              className="absolute top-[52%] max-w-auto w-[460px]
                        h-[90vh] overflow-y-auto scrollbar-hide border-0 outline-none"
            >
              <div className="w-full h-auto bg-[#131313] border-b border-[#131313] rounded-[20px] pb-10">
                <div className="bg-[#101010] border-[#181818] border-b px-4 py-[10px] w-[460px] h-[47px] mb-3">
                  <h5 className="font-semibold text-sm text-[14.56px]">
                    {row.title}
                  </h5>
                </div>
                <div className="w-auto p-2">
                  <p className="italic text-[13.75px] font-[300] mb-3">
                    When do you want to inform your community about this
                    information?
                  </p>
                </div>
                <div className="relative mb-2 px-2 w-auto">
                  <select
                    value={selectedOption}
                    onChange={(e) => handleOptionChange(e.target.value)}
                    className="w-[420px] h-[44px] rounded-[16px] bg-[#2A2A2A] text-white px-4 outline-none"
                  >
                    {options.map((option) => (
                      <option
                        className="font-normal text-base"
                        key={option}
                        value={option}
                      >
                        {option}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-3 flex items-center px-3 pointer-events-none">
                    <svg
                      className="w-6 h-6 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    ></svg>
                  </div>
                </div>
                <div className="flex justify-end px-10 mb-5">
                  <p className="text-[#BDFE1C] border-[#BDFE1C] border-b text-[13.75px] font-normal">
                    Custom Date
                  </p>
                </div>

                <div className="w-[460px] h-auto bg-[#1B1B1B] pt-2 pb-4 px-4 rounded-bl">
                  <h5 className="font-semibold text-sm text-[#f9f9f9] mb-4">
                    Instructions:
                  </h5>
                  <p className="font-normal text-sm leading-[14.56px] text-[#E4E4E4] mb-2">
                    {row.insructionText}
                  </p>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <FaCircle className="text-[#858585] text-[6px]" />
                      <p className="font-normal text-[#858585] text-sm leading-[14.56px] italic">
                        {row.bullet1}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <FaCircle className="text-[#858585] text-[6px]" />
                      <p className="font-normal text-[#858585] text-sm leading-[14.56px] italic">
                        {row.bullet2}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <FaCircle className="text-[#858585] text-[6px]" />
                      <p className="font-normal text-[#858585] text-sm leading-[14.56px] italic">
                        {row.bullet3}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <FaCircle className="text-[#858585] text-[6px]" />
                      <p className="font-normal text-[#858585] text-sm leading-[14.56px] italic">
                        {row.bullet4}
                      </p>
                    </div>
                  </div>
                </div>
                {/* text area starts here */}
                <div className="pt-8 pb-3 px-2 w-auto">
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
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </>
  );
};

export default CommunityModal;

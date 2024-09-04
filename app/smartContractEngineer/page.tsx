import React, { useState } from "react";
import { FaBook, FaFire } from "react-icons/fa";
import { SlBookOpen } from "react-icons/sl";
import { LiaGripfire } from "react-icons/lia";
import { Button } from "@/components/ui/button";

const page = () => {
 
  return (
<>
<div className="pl-28 w-full h-[80vh] md:h-[100vh] lg:h-[100vh] relative overflow-y-auto scrollbar-hide pb-40">
<div className="flex justify-between items-center w-full p-4">
      {/* Left Side: Buttons */}
      <div className="flex items-center gap-5">
        {/* First Div: Useful Libraries */}
        <div className="flex justify-center items-center gap-2 w-auto bg-[#25252566] opacity-[40%] h-[40px] rounded-[9px] px-2 ">
           <span className="font-normal text-sm leading-[12px]">Useful Libraries</span>
          <SlBookOpen className="h-4 w-4 text-[#03FFA3]" />
        </div>

        {/* Second Div: Trending Contracts */}
        <div className="flex justify-center items-center gap-2 w-auto px-2 h-[40px]  bg-[#25252566] opacity-[40%] rounded-[9px]">
         <span className="font-normal text-sm leading-[12px]">Trending Contracts</span>
          <LiaGripfire className="h-4 w-4  text-[#03FFA3]" />
        </div>
      </div>

      {/* Right Side: Daily Usage Quota */}
      <div className="pr-4 text-white">
        <p className="font-normal text-sm leading-[12px]">| 4 / 10 daily usage quota</p>
      </div>
    </div>
    <div className="flex justify-between">
<div className="w-1/2 pl-6">
<div className="flex justify-between w-full p-4 gap-10">
      {/* Left Side: Two Rows */}
      <div className="flex flex-col w-1/2 gap-4">
        {/* Row 1: Task Type */}
        <h3 className="font-semibold text-[18px] leading-[28.9px]">Task Type</h3>

        {/* Row 2: Fix Bug with Dropdown */}
        <div className="flex items-center justify-between w-full h-[48px] p-[10px] bg-[#131313] text-white rounded-[12px]">
          <p className="font-['Guaruja_Neue'] text-[16px] leading-[16.64px]">Fix Bug</p>
          <select className="bg-transparent text-white outline-none">
            {/* <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option> */}
          </select>
        </div>
      </div>

      {/* Right Side: Two Rows */}
      <div className="flex flex-col w-1/2 gap-4">
        {/* Row 1: Developer Proficiency */}
        <h3 className="font-semibold text-[18px] leading-[28.9px]">Developer Proficiency</h3>

        {/* Row 2: Junior with Dropdown */}
        <div className="flex items-center justify-between w-full h-[48px] p-[10px] bg-[#131313] text-white rounded-[12px]">
          <p className="font-['Guaruja_Neue'] text-[16px] leading-[16.64px]">Junior</p>
          <select className="bg-transparent text-white outline-none">
            {/* <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option> */}
          </select>
        </div>
      </div>
    </div>

    <div className="pt-10">
      <h3 className="font-semibold text-[18px] leading-[28.9px] mb-5">Task Instruction (Raw Prompt)</h3>
      <div className="bg-[#131313] h-auto w-full p-2 px-4">
<p className="font-normal text-base leading-[24px]">Find the bugs in this code and fix it, tell me the things I did wrong and recommend how I can prevent them 
  in the future following best practices</p>
     <Button className="">Enter</Button>
      </div>
    </div>
</div>
<div className="w-1/2">
second part
</div>
    </div>
    </div>
</>
  )
  
   
};

export default page;

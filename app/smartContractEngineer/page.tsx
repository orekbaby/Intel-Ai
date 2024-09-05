import React, { useState } from "react";
import { FaBook, FaFire, FaPlus } from "react-icons/fa";
import { SlBookOpen } from "react-icons/sl";
import { LiaGripfire } from "react-icons/lia";
import { Button } from "@/components/ui/button";
import { CiFileOn } from "react-icons/ci";
import { FaRegSquare } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import Image from "next/image";
import { FaCircle } from "react-icons/fa";

const page = () => {
  const items = [
    {
      id: 1,
      text: "Metabot-add to watchlist.tff",
    },
    {
      id: 2,
      text: "Smartwallet tracking-add to watchlist.tff",
    },
    {
      id: 3,
      text: "Smartwallet tracking-add to watchlist.tff",
    },
  ];
 
  return (
<>
<div className="pl-28 w-full h-[80vh] md:h-[100vh] lg:h-[100vh] relative overflow-y-auto scrollbar-hide pb-40">
  <div className="dasboard-color">
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
    <div className="w-1/2 pl-4">
  <div className="flex justify-between w-full p-4 gap-10">
      {/* Left Side: Two Rows */}
      <div className="flex flex-col w-1/2 gap-4">
        {/* Row 1: Task Type */}
        <h3 className="font-semibold text-base leading-[28.9px]">Task Type</h3>

        {/* Row 2: Fix Bug with Dropdown */}
        <div className="flex items-center justify-between w-full h-[48px] p-[10px] bg-[#131313] text-white rounded-[12px]">
          <p className="font-['Guaruja_Neue'] text-sm leading-[16.64px]">Fix Bug</p>
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
        <h3 className="font-semibold text-base leading-[28.9px]">Developer Proficiency</h3>

        {/* Row 2: Junior with Dropdown */}
        <div className="flex items-center justify-between w-full h-[48px] p-[10px] bg-[#131313] text-white rounded-[12px]">
          <p className="font-['Guaruja_Neue'] text-sm leading-[16.64px]">Junior</p>
          <select className="bg-transparent text-white outline-none">
            {/* <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option> */}
          </select>
        </div>
      </div>
    </div>

    <div className="pt-10 pb-20">
      <h3 className="font-semibold text-base leading-[28.9px] mb-5">Task Instruction (Raw Prompt)</h3>
      <div className="bg-[#131313] h-auto w-full p-3 px-5 rounded-xl">
<p className="font-normal text-sm leading-[24px]">Find the bugs in this code and fix it, tell me the things I did wrong and recommend how I can prevent them 
  in the future following best practices</p>
  <div className="flex justify-end pt-10">
  <Button className="w-[80px] h-[38px] bg-[#03FFA3] font-normal text-base text-black rounded-[40px] px-[19px] pt-[3px] pb-[6px]">Enter</Button>
     </div>
      </div>
    </div>

    <div className="flex justify-between items-center pb-5">
     <h4 className="font-semibold text-sm leading-[28.9px] mb-5">
      Code Context
      </h4>
       <div className="flex gap-3">
          <div className=" flex items-center gap-1 font-normal text-sm justify-center w-auto h-[40px] py-[7px] px-[11px] rounded-[9px] bg-[#252525]">
        Workspace : Default (1 File)
        
          <CiFileOn />
        </div>
        <div className="flex justify-center items-center bg-[#1D1D1D] w-[40px] h-[40px] rounded-[4px]">
        <FaPlus className="w-[12px] h-[12px]" />
        </div>
      </div>
    </div>

    <div className="space-y-4 bg-[#131313] p-4">
      {items.map((item) => (
        <div key={item.id} className="flex justify-between items-center">
          <span className="text-base font-normal leading-[29.16px]">{item.text}</span>
          <div className="flex space-x-4">
            <div className="bg-[#1D1D1D] w-10 h-10 rounded-l flex items-center justify-center">
              <FaRegSquare className="text-white w-5 h-5" />
            </div>
            <div className="bg-[#1D1D1D] w-10 h-10 flex items-center justify-center rounded-l">
              <MdOutlineDeleteOutline className="text-white w-5 h-5" />
            </div>
           </div>
        </div>
      ))}
<div className="flex justify-center items-center pt-10">
      <p className="font-normal text-sm text-center text-[#858585]">Drag and drop files or folders here (VS Code/IDE/Finder/File Explorer)</p>
      </div>
      <div className="flex justify-center items-center gap-2">
      <span className="font-normal text-sm leading-[12px]">or</span> 
      <div className="flex justify-center items-center w-[185px] h-[44px] rounded-md bg-[#1D1D1D]">
      <p className="font-notmal text-sm leading-[12px]"> </p>Add File Manually
      </div>
      </div>
    </div>
</div>

{/* second section */}
<div className="w-1/2 ml-4">
<h3 className="font-semibold text-base leading-[28.9px] mb-5">Code Breakdown (Explanation)</h3>
<div className="bg-[#131313] h-auto w-full p-3 px-5 rounded-xl">
  <div className="flex gap-2">
    <div className="">
    <Image 
    width={24}
    height={24}
    src="/setings.png"
    alt=""
    />
    </div>
    
  
    <h5 className="font-medium text-base leading-[29.07px] mb-2">Issues and fixes</h5>
  </div>
  <div className="flex flex-col gap-2">
  <div className="flex flex-col gap-2">
    <div className="flex items-start gap-1">
      <span className="font-bold">1.</span>
      <h5 className="font-normal text-sm leading-6">Incorrect Handling of State Updates in <code>increaseCount</code>:</h5>
    </div>
    <div className="flex flex-col gap-1">
      <div className="flex items-start gap-2">
        <p className="font-normal text-sm leading-6">Problem: The <code>increaseCount</code> function logs the count before it&apos;s updated. React&apos;s <code>setState</code> is asynchronous, so the count logged might not reflect the new state immediately.</p>
      </div>
      <div className="flex items-start gap-2">
        <p className="font-normal text-sm leading-6">Fix: Update the count inside the <code>console.log</code> after it has been set.</p>
      </div>
    </div>
    <p className="pt-5 font-normal text-base leading-6">Why It Matters: Understanding that state updates in React are asynchronous is crucial. By using the previous state (<code>prevCount</code>), you ensure you&apos;re working with the most up-to-date value.</p>
  </div>

  <div className="flex flex-col gap-2 pt-5">
    <div className="flex items-start gap-1">
      <span className="font-bold">2.</span>
      <h5 className="font-normal text-sm leading-6">Incorrect Usage of the <code>Link</code> Component:</h5>
    </div>
    <div className="flex flex-col gap-1">
      <div className="flex items-start gap-2">
        <p className="font-normal text-sm leading-6">Problem: The <code>Link</code> component in Next.js should wrap a single child element, typically an anchor tag (<code>a</code>). The <code>passHref</code> prop is redundant in this context.</p>
      </div>
      <div className="flex items-start gap-2">
        <p className="font-normal text-sm leading-6">Fix: Simplify the usage of the <code>Link</code> component.</p>
      </div>
    </div>
  </div>

  <div className="pt-10">
    <Image
    width={646}
    height={627}
    src="/code.png"
    alt="code"
    />
  </div>
</div>





  </div>
  
  </div>
    </div>
    </div>
    </div>
</>
  )
  
   
};

export default page;

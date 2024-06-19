"use client";
import React, { useState } from "react";
import Link from "next/link";
import { description } from "@/utils/mockData";

type DescriptionItem = {
  name: string;
  description: string;
};

const Page = () => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleOptionClick = (index: number) => {
    setSelectedOption(index);
  };

  const style2: React.CSSProperties = {
    background:
      "radial-gradient(circle, rgba(3, 255, 163, 0.4), rgba(16, 12, 14, 0.5))",
    backgroundBlendMode: "darken",
    filter: "blur(50px)",
  };

  const bgClipText: React.CSSProperties = {
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
  };

  return (
    <>
      <main className="mt-4 md:mt-20 lg:mt-16 mx-auto">
        <section className="first-gradient section relative w-full h-full z-10 mx-auto mb-48 ">
          <div className=" w-full md:max-w-[1280px] lg:max-w-[1280px] px-0 md:px-0 lg:px-6 relative mb-0 md:mb-10 lg:mb-10 h-full mx-auto">
            {/* top gradient */}
            <div
              style={style2}
              className="top-[-5%] left-[-25%] absolute w-[22%] h-[130px] md:h-[500px] lg:h-[120px] translate-x-1/2 z-[-1]"
            ></div>
            {/* bottom styling */}
            <div
              style={style2}
              className="bottom-[-70%] right-0 absolute w-[40%] h-[130px] md:h-[500px] lg:h-[120px] translate-x-1/2 z-[-1]"
            ></div>
            <div className="">
              <h1
                className="
                text-[32px] 
               leading-[33.28px] md:leading-[64px] lg:leading-[64px] text-center w-[378px] md:w-full lg:w-full mb-6 mx-auto "
              >
                Which Category Best Describes your community?
              </h1>
              <div className="w-[562px] h-auto bg-[#131313] mb-8 py-4 mx-auto px-6 rounded-[20px]">
                {description.map((row, index) => (
                  <div
                    key={index}
                    className={`border-b border-[#1E1E1E] mt-5 ${
                      selectedOption === index ? "border-gradient" : ""
                    }`}
                  >
                    <div
                      onClick={() => handleOptionClick(index)}
                      className="cursor-pointer"
                    >
                      <h4 className="font-semibold text-sm mb-2 w-[90%] text-white">
                        {row.name}
                      </h4>
                      <p className="leading-[16.8px] mb-4 font-normal w-[447px] text-sm text-[#4D4D4D] ">
                        {row.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* button */}
              <Link href="/onboard">
                <button
                  className="bg-white cursor-pointer items-center flex justify-center text-center 
                 text-xs font-normal ring-offset-white focus-visible:outline-none
                 text-[#0D0D0D] h-10 w-[204px] rounded-[20px] mx-auto shadow-drop2"
                >
                  Next
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Page;

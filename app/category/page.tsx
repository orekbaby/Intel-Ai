"use client";
import React, { useState } from "react";
import Link from "next/link";
import { description } from "@/utils/mockData";
import { FaArrowLeft } from "react-icons/fa";

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
          <div className="w-full px-2 md:px-0 lg:px-6 relative mb-0 md:mb-10 lg:mb-10 h-full mx-auto">
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

            {/* Back button */}
            <div className="mb-6 flex justify-start absolute top-[-8%] left-10">
              <Link href="/user">
                <button className="flex items-center text-[#707070]">
                  <FaArrowLeft className="mr-2 text-[#707070]" />
                  Back
                </button>
              </Link>
            </div>
            <div className="">
              <h1
                className=" pt-24 font-medium text-[15px] md:text-[32px] lg:text-[32px]
               leading-[18.6px] md:leading-[64px] lg:leading-[64px] text-center w-[251px] md:w-full lg:w-full mb-6 mx-auto"
              >
                Which Category Best Describes your community?
              </h1>
              <div className="w-[362px] md:w-[562px] lg:w-[562px] h-auto bg-[#0D0D0D] border border-[#1B1B1B] mb-10 md:mb-8 lg:mb-8 py-2 md:py-4 lg:py-4 mx-auto px-6 md:px-6 lg:px-6 rounded-[16px] md:rounded-[20px] lg:rounded-[20px]">
                {description.map((row, index) => (
                  <Link href="/onboard" key={index}>
                    <div
                      className={`border-b border-[#1E1E1E] mt-5 ${
                        selectedOption === index ? "border-gradient" : ""
                      }`}
                    >
                      <div
                        onClick={() => handleOptionClick(index)}
                        className="cursor-pointer hover:bg-[#181818] hover:p-2 transition-colors ease-in duration-300"
                      >
                        <h4 className="font-semibold text-sm mb-2 w-[90%] text-white">
                          {row.name}
                        </h4>
                        <p className="leading-[16.8px] mb-4 font-normal w-full md:w-[447px] lg:w-[447px] text-sm text-[#4D4D4D] ">
                          {row.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Page;

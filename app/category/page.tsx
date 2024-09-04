// src/app/category/Page.tsx
"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { description } from "@/utils/mockData";
import { FaArrowLeft } from "react-icons/fa";
import { useSelectedCategory } from "@/context/SelectedCategoryContext";
 // Import the context

const Page = () => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const { setSelectedCategory } = useSelectedCategory();
  // Get the setSelectedCategory function from context
  const router = useRouter();

  const handleOptionClick = (index: number) => {
    setSelectedOption(index);
    setSelectedCategory(description[index].name); // Update selectedCategory with the clicked row's name

    if (index === 0 || 1 || 2) {
      router.push("/onboard");
    }
  };

  const handleBackClick = () => {
    router.push("/user");
  };

  return (
    <div className="mt-4 md:mt-20 lg:mt-16 mx-auto">
      <section className="first-gradient section relative w-full h-full z-10 mx-auto mb-48">
        {/* Back button */}
        <div className="mb-6 flex justify-start absolute top-[-8%] md:top-[-10%] left-15s md:left-10 lg:left-10">
          <button
            onClick={handleBackClick}
            className="flex items-center text-[#707070]"
          >
            <FaArrowLeft className="mr-2 text-[#707070]" />
          </button>
        </div>
        <div>
          <h1 className="pt-16 font-medium text-[15px] md:text-[32px] lg:text-[32px] leading-[20.6px] md:leading-[64px] lg:leading-[64px] text-center w-[251px] md:w-full lg:w-full mb-6 mx-auto">
            Which Category Best Describes your community?
          </h1>
          <div className="w-[362px] md:w-[562px] lg:w-[562px] h-auto bg-[#0D0D0D] border border-[#1B1B1B] mb-10 md:mb-8 lg:mb-8 py-2 md:py-4 lg:py-4 mx-auto px-6 md:px-6 lg:px-6 rounded-[16px] md:rounded-[20px] lg:rounded-[20px]">
            {description.map((row, index) => (
              <div
                key={index}
                className={`border-b border-[#1E1E1E] mt-5 hover:bg-[#1d1d1d] p-2 ${
                  selectedOption === index ? "border-gradient" : "disabled"
                }`}
                onClick={() => handleOptionClick(index)} // Handle the option click
              >
                <h4 className="font-semibold text-sm mb-2 w-[90%] text-white">
                  {row.name}
                </h4>
                <p className="leading-[16.8px] mb-4 font-normal w-full md:w-[447px] lg:w-[447px] text-sm text-[#4D4D4D]">
                  {row.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;

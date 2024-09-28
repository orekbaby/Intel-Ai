// src/app/category/Page.tsx
"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { description } from "@/config/mockData";
import { FaArrowLeft } from "react-icons/fa";
import { useSelectedCategory } from "@/context/SelectedCategoryContext";
import { useSelector } from 'react-redux';
import { useEffect } from 'react';




const Page = () => {
  const style2: React.CSSProperties = {
    background:
      "radial-gradient(circle, rgba(3, 255, 163, 0.3), rgba(16, 12, 14, 0.2))",
    backgroundBlendMode: "darken",
    filter: "blur(60px)",
  };
  const onBoard = useSelector((state:any) => state.user.onBoard);
  const selectedUser = useSelector((state:any) => state.user.selectedUser);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const { setSelectedCategory } = useSelectedCategory();
  // Get the setSelectedCategory function from context
  const router = useRouter();

  useEffect(() => {
    if (selectedUser === 'smartContractEngineer') {
      router.push('/onboard');
    }
  }, [selectedUser, router]);

  // Update selectedCategory with the clicked row's name

  const handleOptionClick = (index: number) => {
    setSelectedOption(index);
    setSelectedCategory(description[index].name);
  
    if (selectedUser === 'communityManager') {
      // Community Manager should go to /onboard first if not onboarded
      !onBoard ? router.push('/onboard') : router.push('/dashboard');
    } else if (selectedUser === 'smartContractEngineer') {
      // Smart Contract Engineer goes directly to /dashboard
      router.push('/dashboard');
    }
  };
  
    

  const handleBackClick = () => {
    router.push("/user");
  };

  return (
    <div className="mt-10 md:mt-20 lg:mt-16 mx-auto overflow-hidden w-full h-[100vh]">
      <section className="first-gradient section relative w-full h-full z-10 mx-auto mb-48">
      <div
          style={style2}
          className="top-[-18%] left-[-20%] absolute w-[20%] h-[130px] md:h-[500px] lg:h-[120px] translate-x-1/2 z-[-1]"
        ></div>

        {/* Bottom gradient styling */}
        <div
          style={style2}
          className="bottom-[-70%] right-0 absolute w-[40%] h-[130px] md:h-[500px] lg:h-[120px] translate-x-1/2 z-[-1]"
        ></div> 
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
          <h2 className="pt-16 font-medium text-[15px] md:text-[27px] lg:text-[27px] leading-[20.6px] md:leading-[45px] lg:leading-[64px] text-center w-[251px] md:w-[70%] lg:w-full mb-6 md:mb-16 lg:mb-6 mx-auto">
            Which Category Best Describes your community?
          </h2>
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

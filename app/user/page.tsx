"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import CardComponent from "@/components/CardComponent";
import { influencer, manager } from "@/assets";
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '@/store/reducers/userSlice';

const Page = () => {
  const style2: React.CSSProperties = {
    background:
      "radial-gradient(circle, rgba(3, 255, 163, 0.3), rgba(16, 12, 14, 0.2))",
    backgroundBlendMode: "darken",
    filter: "blur(60px)",
  };

  const dispatch = useDispatch();
  const router = useRouter();

  const selectedUser = useSelector((state:any) => state.user.selectedUser);  // Get the current selected persona from Redux
  const onBoard = useSelector((state:any) => state.user.onBoard);
  // Function to handle user persona selection
  const handleSelectUser = (persona:any) => {
    dispatch(setUser(persona));  // Update Redux state and set cookie

    // Post-login persona handling logic
    if (persona === 'communityManager') {
      router.push('/category');  // Redirect to category page
    } else if (persona === 'smartContractEngineer') {
      !onBoard ? router.push('/onboard') : router.push('/dashboard');  // Redirect to dashboard for Smart Contract Engineer
    }
  };
  const cards = [
    {
      imgSrc: manager,
      title: "Community Owner/Manager",
      description: "Select a dedicated community manager to help nurture and grow your online community, ensuring a vibrant and engaged environment.",
      onClick: () => handleSelectUser('communityManager'),
      isClickable: true,
    },
    {
      imgSrc: influencer,
      title: "Smart Contract Engineer",
      description: "Audit, optimize, and enhance your smart contracts with tailored insights and automated tools designed to make you a 10x engineer.",
      onClick: () => handleSelectUser('smartContractEngineer'),
      isClickable: true,
    },
  ];


  return (
    <main className="mt-4 md:mt-20 lg:mt-28 mx-auto">
      <section className="first-gradient section relative w-full h-full z-10 mx-auto mb-60">
        {/* Back button */}
        <div className="mb-6 flex justify-start absolute top-[-40%] left-10">
          <Link href="/connect-web3">
            <button className="flex items-center text-[#707070]">
              <FaArrowLeft className="mr-2 text-[#707070]" />
              Back
            </button>
          </Link>
        </div>
        <div
          style={style2}
          className="top-[-18%] left-[-20%] absolute w-[20%] h-[130px] md:h-[500px] lg:h-[120px] translate-x-1/2 z-[-1]"
        ></div>

        {/* Bottom gradient styling */}
        <div
          style={style2}
          className="bottom-[-70%] right-0 absolute w-[40%] h-[130px] md:h-[500px] lg:h-[120px] translate-x-1/2 z-[-1]"
        ></div>
        <div className="w-full px-0 md:px-4 lg:px-6 relative mb-0 md:mb-10 lg:mb-10 h-full mx-auto">
          <h2
            className="text-sm text-[16.8px] text-white
              leading-[36.28px] md:leading-[64px] lg:leading-[64px] text-center mb-5"
          >
           Select the persona that best describes you
          </h2>
          <div className="flex justify-center items-center gap-4">
            {cards.map((card, index) => (
              <CardComponent
                key={index}
                imgSrc={card.imgSrc}
                title={card.title}
                description={card.description}
                onClick={card.onClick}
                isClickable={card.isClickable}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;

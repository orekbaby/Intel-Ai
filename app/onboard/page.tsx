"use client";
import { useRouter } from "next/navigation"; // Ensure you have this import at the top
import Link from "next/link";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa";
import { onboard } from "@/assets";
import { useState } from "react";
import { setOnBoard } from '@/store/reducers/userSlice';
import { useDispatch, useSelector } from "react-redux";

const Page = () => {
  const style2: React.CSSProperties = {
    background:
      "radial-gradient(circle, rgba(3, 255, 163, 0.2), rgba(16, 12, 14, 0.2))",
    backgroundBlendMode: "darken",
    filter: "blur(60px)",
  };
 
  const dispatch = useDispatch();
  const onBoard = useSelector((state:any) => state.user.onBoard);

  const router = useRouter();

  
  

 // Onboarding logic for Smart Contract Engineer
const handleOnBoard = () => {
  dispatch(setOnBoard(true));  // Set the onBoard state to true
  router.push("/dashboard");   // After onboarding, go to dashboard
};

 

  return (
    <>
      <main className="pt-4 md:pt-20 lg:pt-20 mx-auto">
        <section className="first-gradient section relative w-full h-full z-10 mx-auto mb-60">
          {/* Back button */}
          <div className="mb-6 flex justify-start absolute top-[-10%] left-10">
            <Link href="/category">
              <button className="flex items-center text-[#707070]">
                <FaArrowLeft className="mr-2 text-[#707070]" />
                Back
              </button>
            </Link>
          </div>

          {/* top gradient */}
          <div
            style={style2}
            className="top-[-50%] left-[-20%] absolute w-[25%] h-[130px] md:h-[500px] lg:h-[160px] translate-x-1/2 z-[-1]"
          ></div>

          {/* bottom styling */}
          <div
            style={style2}
            className="bottom-[-50%] right-[-5%] absolute w-[40%] h-[130px] md:h-[500px] lg:h-[130px] translate-x-1/2 z-[-1]"
          ></div>

          <div className="w-full px-0 md:px-0 lg:px-6 relative mb-0 md:mb-10 lg:mb-10 h-full mx-auto pt-16">
            <div className="">
              <div className="w-full h-full">
                <Image
                  width={200}
                  height={200}
                  src={onboard}
                  className="mx-auto mb-5 w-[143px] h-[143px] md:w-[200px] lg:w-[200px] md:h-[200px] lg:h-[200px]"
                  alt=""
                />
              </div>
              <h3 className="font-normal text-center text-[32px] md:text-[40px] leading-[32px] md:leading-[40px] lg:leading-[40px] mx-auto mb-3">
                Onboarded Successfully
              </h3>
              <p className="font-normal text-sm mx-auto text-center text-[#707070] w-[85%] md:w-[383px] lg:w-[383px] mb-10">
                Your info has been uploaded to the AI, you can begin testing
                your AI now
              </p>
              {/* button */}
              <button
                className="bg-white items-center flex justify-center text-center 
                 text-xs font-normal ring-offset-white focus-visible:outline-none
                 text-[#0D0D0D]  w-[298px] h-[55px] md:h-10 lg:h-10 md:w-[153px] lg:w-[153px]  rounded-[66px] mx-auto shadow-drop2"
                onClick={handleOnBoard}
              >
                Go to dashboard
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Page; // Export the renamed component

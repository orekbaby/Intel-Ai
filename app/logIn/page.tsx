import React from "react";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { Button } from "@/components/ui/button";
const page = () => {
  const style2: React.CSSProperties = {
    background:
      "radial-gradient(circle, rgba(3, 255, 163, 0.2), rgba(16, 12, 14, 0.2))",
    backgroundBlendMode: "darken",
    filter: "blur(50px)",
  };

  const bgClipText: React.CSSProperties = {
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
  };

  return (
    <>
      <main className="mt-4 md:mt-20 lg:mt-20 mx-auto">
        <section className="first-gradient section relative w-full h-full z-10 mx-auto mb-48 ">
          <div className=" w-full md:max-w-[1280px] lg:max-w-[1280px] px-0 md:px-0 lg:px-6 relative mb-0 md:mb-10 lg:mb-10 h-full mx-auto">
            {/* top-gradient */}
            <div
              style={style2}
              className="top-[-15%] right-[50%] absolute w-[40%] h-[130px] md:h-[500px] lg:h-[160px] translate-x-1/2 z-[-1]"
            ></div>
            {/* 
            bottom-gradient */}
            <div
              style={style2}
              className="bottom-[-30%] right-[50%] absolute w-[40%] h-[130px] md:h-[500px] lg:h-[150px] translate-x-1/2"
            ></div>
            <div className="z-[1]">
              <h1
                style={bgClipText}
                className="bg-gradient-to-r from-[rgba(3,255,163,0.9)] to-[rgba(127,86,217,0.9)]
               text-transparent font-medium text-[32px] md:text-[60px] lg:text-[64px] 
               leading-[36.28px] md:leading-[64px] lg:leading-[64px] text-center w-[378px] md:w-full lg:w-full mb-6 mx-auto "
              >
                Welcome to Intel AI
              </h1>

              <p className="font-normal text-sm  text-white text-center mb-10 px-2 md:px-0 lg:px-0 w-[80%] h-[36px] leading-[18.8px] d:w-full lg:w-[393px] md:h-full lg:h-[51px] mx-auto">
                Discover cutting-edge AI solutions designed to transform your
                business and unlock new possibilities. Dive in and explore how{" "}
                {""}
                <span className="font-medium text-sm">Intel AI</span> can power
                your next innovation.
              </p>
            </div>
            {/* invitation code box */}
            <div
              className="border border-[#474747] bg-[#131313] bg-opacity-[6%]
             w-[543px] h-[435px] leading-[16.64px] mx-auto rounded-[20px] py-14"
            >
              <h2 className="font-medium text-base text-center mb-4">
                Enter Your Invitation Code
              </h2>

              <p className="text-[#707070] text-center text-sm font-normal leading-[18.56px] w-[80%] h-[45px] mx-auto mb-10">
                Securely enter your private key to access your account and
                unlock all features. Your private key ensures your data is safe
                and only accessible by you.
              </p>

              {/* input section */}
              <div className="mx-auto px-16">
                <p className="font-medium text-xs">
                  Input your invitation code
                </p>
                <input
                  className="mb-5 mt-2 text-xs md:text-sm lg:text-sm w-[380px] h-[38px] md:h-[40px] lg:h-[40px] py-[8px] px-[16px] pr-[32px] italic bg-[#1B1B1B] font-normal text-[#616161]  rounded-[6px] md:rounded-[12px] lg:rounded-[12px] mx-auto"
                  type="text"
                  placeholder="Enter invite code"
                />
              </div>
              {/* button */}
              <Link href="/connectWeb3">
                <button
                  className="bg-white items-center flex justify-center text-center 
                 text-xs font-medium ring-offset-white focus-visible:outline-none
                 text-[#0D0D0D] h-10 w-[170px] rounded-[20px] mx-auto shadow-drop2"
                >
                  Submit
                </button>
              </Link>

              {/* old button */}

              <div className=" hidden md:block lg:block bg-gradient-to-r from-[rgba(3,255,163,.9)] to-[rgba(127,86,217,.9)] rounded-[66px] py-[2px] px-[2px] mb-10 mt-10 shadow-drop w-fit mx-auto">
                <button className="bg-[#090909] flex justify-center gap-5 items-center text-sm font-medium ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-800 hover:scale-95 dark:text-secondary text-white transition ease-in-out delay-150 duration-300 h-[50px] w-[379px] rounded-[66px] hover:bg-[#0B0F16]">
                  <p className="font-medium text-xs">No invitation code?</p>
                  <div className="flex justify-center gap-4 items-center">
                    <p className="font-medium text-xs">Find here</p>
                    <div className="w-[30px] h-[30px] rounded-full bg-[#2B6AFF] flex justify-center items-center ">
                      <FaTelegramPlane className="w-[15px] h-[15px]" />
                    </div>
                    <div className=" flex justify-center  items-center w-[30px] h-[30px] bg-white rounded-full">
                      {" "}
                      <FaXTwitter className="w-[15px] h-[15px] text-black" />
                    </div>
                  </div>
                </button>
              </div>
            </div>{" "}
          </div>
        </section>
      </main>
    </>
  );
};

export default page;

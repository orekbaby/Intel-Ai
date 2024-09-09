"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import { FaArrowLeft } from 'react-icons/fa';  // Assuming you're using this icon

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

const Page = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/user');
  };

  const handleBackClick = () => {
    router.push("/log-in");
  };

  return (
<div className="">
    <div className="mb-6 flex justify-start absolute top-[-8%] md:top-[-50%] lg:top-40 left-15 md:left-10 lg:left-10">
    <button
      onClick={handleBackClick}
      className="flex items-center text-[#707070]"
    >
      <FaArrowLeft className="mr-2 text-[#707070]" />
    </button>
  </div>
    <div className="mt-4 md:mt-20 lg:mt-16 mx-auto">
      <section className="first-gradient section relative w-full h-full z-10 mx-auto mb-48">
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
         
        </div>
      </section>

      <div className="flex justify-center items-center pt-20">
        <button
          onClick={handleClick}
          className="flex items-center justify-center text-base font-semibold text-white bg-[#0D0D0D] border border-[#3A3939] rounded-[24px] px-6 py-3 hover:bg-[#1A1A1A] transition duration-300"
        >
          Connect Wallet
        </button>
      </div>
    </div>
    </div>
  );
};

export default Page;

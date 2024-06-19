import { token } from "@/utils/mockData";
import React from "react";
import Image from "next/image";
import Link from "next/link";
const page = () => {
  const style2: React.CSSProperties = {
    background:
      "radial-gradient(circle, rgba(3, 255, 163, 0.2), rgba(16, 12, 14, 0.2))",
    backgroundBlendMode: "darken",
    filter: "blur(60px)",
  };

  return (
    <>
      <main className="pt-4 md:pt-20 lg:pt-20 mx-auto">
        <section className="first-gradient section relative w-full h-full z-10 mx-auto mb-60 ">
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

          <div className=" w-full md:max-w-[1280px] lg:max-w-[1280px] px-0 md:px-0 lg:px-6 relative mb-0 md:mb-10 lg:mb-10 h-full mx-auto">
            <Image
              width={200}
              height={200}
              src="/onboard.png"
              className="mx-auto mb-5"
              alt=""
            />
            <h3 className="font-normal text-center text-[40px] leading-[40px] mx-auto mb-3">
              Onboarded Successfully
            </h3>
            <p className="font-normal text-sm mx-auto text-center text-[#707070] w-[383px] mb-10">
              Your info has been uploaded to the AI, you can begin testing your
              AI now
            </p>
            {/* button */}
            <Link href="/dashboard">
              <button
                className="bg-white items-center flex justify-center text-center 
                 text-xs font-normal ring-offset-white focus-visible:outline-none
                 text-[#0D0D0D] h-10 w-[153px] rounded-[66px] mx-auto shadow-drop2"
              >
                Go to dashboard
              </button>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default page;

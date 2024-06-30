import { chooseUser } from "@/utils/mockData";
import React from "react";
import Image from "next/image";
import Link from "next/link";
const page = () => {
  const style2: React.CSSProperties = {
    background:
      "radial-gradient(circle, rgba(3, 255, 163, 0.3), rgba(16, 12, 14, 0.2))",
    backgroundBlendMode: "darken",
    filter: "blur(60px)",
  };

  return (
    <>
      <main className="mt-4 md:mt-20 lg:mt-40 mx-auto">
        <section className="first-gradient section relative w-full h-full z-10 mx-auto mb-60 ">
          {/* top gradient */}
          <div
            style={style2}
            className="top-[-190%] left-[-20%] absolute w-[20%] h-[130px] md:h-[500px] lg:h-[120px] translate-x-1/2 z-[-1]"
          ></div>

          {/* bottom styling */}

          <div
            style={style2}
            className="bottom-[-70%] right-0 absolute w-[40%] h-[130px] md:h-[500px] lg:h-[120px] translate-x-1/2 z-[-1]"
          ></div>

          <div className=" w-full px-0 md:px-4 lg:px-6 relative mb-0 md:mb-10 lg:mb-10 h-full mx-auto">
            <h2
              className="text-sm text-[16.8px] text-white
               leading-[36.28px] md:leading-[64px] lg:leading-[64px] text-center mb-5"
            >
              Are you a
            </h2>
            <Link href="/category">
              <div className="flex flex-col w-full md:flex-row lg:flex-row justify-center items-center px-20 md:px-0 lg-px-0 gap-4 md:gap-10 lg:gap-10 rounded-[40px] ">
                {chooseUser?.map((row, index) => (
                  <div
                    key={index}
                    className="hover:bg-gradient-to-r from-[rgba(189,254,28,0.9)]
                  to-[rgba(37,184,222,0.9)] py-[2px] px-[2px] 
                  w-fit rounded-[40px] cursor-pointer"
                  >
                    <div
                      className={`bg-gradient-to-r from-[rgba(28,28,28,0.9)] ${
                        index === 1 ? "to-[#131313]" : "to-[rgba(0,0,0,0.9)]"
                      } w-[354px] md:w-[250px] lg:w-[250px] h-auto rounded-[40px] mx-auto px-4 md:px-6 lg:px-6 py-6 md:py-8 lg:py-8`}
                    >
                      <Image
                        src={row.img}
                        width={40}
                        height={40}
                        className="mb-5"
                        alt="manager"
                      />
                      <h3 className="font-medium text-sm md:text-base lg:text-base mb-2">
                        {row.title}
                      </h3>
                      <p
                        className="font-[300] md:font-normal lg:font-normal text-xs w-full md:w-[212px] lg:w-[212px] h-auto text-[#707070]"
                        style={{ fontWeight: 300 }}
                      >
                        {row.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Link>

            {/* button */}
            <div className="pt-10">
              <Link href="/category">
                <button
                  className="bg-white cursor-pointer items-center flex justify-center text-center 
                 text-xs font-normal ring-offset-white focus-visible:outline-none
                 text-[#0D0D0D] h-[55px] md:h-10 lg:h-10 w-[362px] md:w-[204px] lg:w-[204px] md:rounded-[20px] lg:rounded-[20px] rounded-[66px] mx-auto shadow-drop2"
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

export default page;

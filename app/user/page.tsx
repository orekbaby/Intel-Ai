"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
import Cookies from "js-cookie";

const Page = () => {
  const style2: React.CSSProperties = {
    background:
      "radial-gradient(circle, rgba(3, 255, 163, 0.3), rgba(16, 12, 14, 0.2))",
    backgroundBlendMode: "darken",
    filter: "blur(60px)",
  };

  const [selectUser, setSelectUser] = useState<string>("");

  const handleSelectUser = (selectedOption: string) => {
    setSelectUser(selectedOption);
    Cookies.set("user", selectedOption);
  };
  // console.log("selected user - ", selectUser);

  return (
    <>
      <main className="mt-4 md:mt-20 lg:mt-28 mx-auto">
        <section className="first-gradient section relative w-full h-full z-10 mx-auto mb-60 ">
          {/* top gradient */}

          {/* Back button */}
          <div className="mb-6 flex justify-start absolute top-[-40%] left-10">
            <Link href="/connectWeb3">
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

          {/* bottom styling */}

          <div
            style={style2}
            className="bottom-[-70%] right-0 absolute w-[40%] h-[130px] md:h-[500px] lg:h-[120px] translate-x-1/2 z-[-1]"
          ></div>

          <div className="w-full px-0 md:px-4 lg:px-6 relative mb-0 md:mb-10 lg:mb-10 h-full mx-auto">
            <h2
              className="text-sm text-[16.8px] text-white
               leading-[36.28px] md:leading-[64px] lg:leading-[64px] text-center mb-5"
            >
              Are you a
            </h2>
            <div className="flex flex-col w-full md:flex-row lg:flex-row justify-center items-center px-20 md:px-0 lg:px-0 gap-4 md:gap-10 lg:gap-10 rounded-[40px]">
              <Link
                onClick={() => handleSelectUser("communityManager")}
                href="/category"
                className="cursor-pointer"
              >
                <div
                  className="hover:bg-gradient-to-r from-[rgba(189,254,28,0.9)]
                    to-[rgba(37,184,222,0.9)] py-[2px] px-[2px] 
                    w-fit rounded-[40px]"
                >
                  <div
                    className="bg-gradient-to-r from-[rgba(28,28,28,0.9)] to-[rgba(0,0,0,0.9)]
                      w-[354px] md:w-[250px] lg:w-[250px] h-auto rounded-[40px] mx-auto px-4 md:px-6 lg:px-6 py-6 md:py-8 lg:py-8"
                  >
                    <Image
                      src="/manager.png"
                      width={40}
                      height={40}
                      className="mb-5"
                      alt="manager"
                    />
                    <h3 className="font-medium text-sm md:text-base lg:text-base mb-2">
                      Community Manager
                    </h3>
                    <p
                      className="font-[300] md:font-normal lg:font-normal text-xs w-full md:w-[212px] lg:w-[212px] h-auto text-[#707070]"
                      style={{ fontWeight: 300 }}
                    >
                      Select a dedicated community manager to help nurture and
                      grow your online community, ensuring a vibrant and engaged
                      environment.
                    </p>
                  </div>
                </div>
              </Link>

              {/* second category */}

              <div
                className="hover:bg-gradient-to-r from-[rgba(189,254,28,0.9)]
                    to-[rgba(37,184,222,0.9)] py-[2px] px-[2px] 
                    w-fit rounded-[40px] cursor-not-allowed opacity-50"
              >
                <div
                  className="bg-[#131313]
                      w-[354px] md:w-[250px] lg:w-[250px] h-auto rounded-[40px] mx-auto px-4 md:px-6 lg:px-6 py-6 md:py-8 lg:py-8 shadow-lg"
                >
                  <Image
                    src="/influencer.png"
                    width={40}
                    height={40}
                    className="mb-5"
                    alt="manager"
                  />
                  <h3 className="font-medium text-sm md:text-base lg:text-base mb-2">
                    KOL/Influencer
                  </h3>
                  <p
                    className="font-[300] md:font-normal lg:font-normal text-xs w-full md:w-[212px] lg:w-[212px] h-auto text-[#707070]"
                    style={{ fontWeight: 300 }}
                  >
                    Pick an influencer to amplify your brand’s message, connect
                    with your target audience, and boost your visibility on
                    social media
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Page;

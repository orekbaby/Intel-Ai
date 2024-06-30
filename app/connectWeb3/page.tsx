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
      <main className="mt-4 md:mt-20 lg:mt-44 mx-auto">
        <section className="first-gradient section relative w-full h-full z-10 mx-auto mb-60 ">
          {/* top gradient */}
          <div
            style={style2}
            className="top-[-50%] left-[-20%] absolute w-[30%] h-[130px] md:h-[500px] lg:h-[160px] translate-x-1/2 z-[-1]"
          ></div>

          {/* bottom styling */}

          <div
            style={style2}
            className="bottom-[-50%] right-0 absolute w-[40%] h-[130px] md:h-[500px] lg:h-[120px] translate-x-1/2 z-[-1]"
          ></div>

          <div className=" w-full px-0 md:px-0 lg:px-6 relative mb-0 md:mb-10 lg:mb-10 h-full mx-auto">
            <h2
              className="text-[36px] text-[#707070]
               leading-[36.28px] hidden md:block lg:block md:leading-[64px] lg:leading-[64px] text-center"
            >
              Connect Web3 Wallet
            </h2>
            <div className="w-[270px] h-[311px] bg-[#131313] mx-auto rounded-[16px] mt-40 md:mt-0 lg:mt-0">
              <div className="border-b border-[#202020] pt-4 pb-2 px-10 mb-3">
                <p className="font-normal text-xs text-[#DBDBDB] text-center">
                  Connect Wallet
                </p>
              </div>

              {token?.map((row, index) => (
                <div
                  key={index}
                  className="flex items-center w-[250px]
                   h-[40px] rounded-[16px] py-[16px] px-[16px] bg-[#1A1A1A] mb-3 mx-auto"
                >
                  <Link href="/user">
                    <div className="flex justify-center items-center gap-3 cursor-pointer">
                      <Image
                        src={row.tokenImg}
                        width={28}
                        height={28}
                        alt="metamask"
                      />
                      <p className="font-normal text-center text-xs">
                        {row.token}
                      </p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default page;

"use client";
import React from "react";
import Image from "next/image";
import { IoCheckmark } from "react-icons/io5";
import { FaCircleCheck } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import DialogData from "@/components/dialog/DialogData";
import Link from "next/link";
const page = () => {
  return (
    <>
      <main className="pl-16 w-full h-[100vh] overflow-y-auto scrollbar-hide mb-4">
        <section className="relative w-full h-full mb-48 bg-[#131313]">
          <div className="w-full pl-8 pr-4 relative mb-0 md:mb-10 lg:mb-10 h-full">
            <div className="pt-5 pl-6">
              <p className="font-medium text-[20px] mb-4">IntelAI Workspace</p>
              <div className="w-full flex justify-between gap-4 h-full">
                <div className="w-[40%] bg-[#181818] h-[840px] rounded-[20px] ">
                  <div className="w-[490px] h-[105px] bg-[#1B1B1B] rounded-[20px] p-4 mb-16">
                    <h3 className="font-medium text-sm text-[#f9f9f9] mb-4">
                      Provide Context
                    </h3>
                    <p className="font-normal text-sm text-[#858585] leading-[16.58px] w-full">
                      Providing more information about your community will help
                      the AI better understand your needs and provide more
                      accurate assistance.
                    </p>
                  </div>
                  <h4 className="font-normal text-sm text-[#D6D6D6] italic mb-5 pl-3">
                    UPLOAD DOCUMENTS
                  </h4>

                  {/* my form data*/}
                  <div className="px-6">
                    <div className="border-b border-[#2B2B2B] pb-3 mb-6 w-full flex justify-between">
                      <h5
                        className="text-[#ABABAB] font-bold
                       text-sm leading-[14.56px] mb-3"
                      >
                        What is the name of your project?
                      </h5>
                      <IoCheckmark className="w-[24px] h-[24px] text-[#38EE0A]" />
                    </div>

                    {/* form with select */}
                    <div className="border-b border-[#2B2B2B] pb-3 mb-6 w-full flex justify-between">
                      <h5
                        className="text-[#ABABAB] font-bold
                       text-sm leading-[14.56px] mb-3"
                      >
                        What is the category of your project?
                      </h5>
                      <IoCheckmark className="w-[24px] h-[24px] text-[#38EE0A]" />
                    </div>

                    {/* url website part */}

                    <div className="border-b border-[#2B2B2B] pb-3 mb-6 w-full flex justify-between">
                      <h5
                        className="block text-[#ABABAB] font-bold
                       text-sm leading-[14.56px] mb-3"
                      >
                        Add Website/URL
                      </h5>
                      <IoCheckmark className="w-[24px] h-[24px] text-[#38EE0A]" />
                    </div>

                    {/* upload document  */}

                    <div className="border-[#2B2B2B] border-b pb-3 mb-5 w-full">
                      <p className="font-semibold text-sm leading-[22.48px]">
                        {" "}
                        Upload Document
                      </p>
                      <p className="text-[#858585] font-normal text-sm leading-[16.58px] w-[90%] mb-3">
                        Kindly upload any documents or links that you might have
                        about your project or product.
                        <span className="text-white font-normal text-sm leading-[14.58px]">
                          Whitepaper, Gitbook, Pitch Deck, Excel Sheet, FAQ
                          documents and so on.
                        </span>{" "}
                      </p>

                      <div
                        className="justify-between gap-2 items-center pt-5 w-[397px] h-[60px] flex mt-2 font-[300px] text-sm
                        text-center rounded-[66px] bg-[#131313] px-[15px] pb-4 border-[#4A6800] border"
                      >
                        <div className="flex flex-col">
                          <Image
                            src="/file-img.png"
                            width={36}
                            height={36}
                            alt="file-img"
                            className=""
                          />
                        </div>
                        <div className="flex flex-1 flex-col items-start">
                          <p className="font-medium text-sm leading-[22.61px]">
                            Polkadot.
                          </p>
                          <span className="font-[300] text-xs text-[#D5D5D5]">
                            200KB
                          </span>
                        </div>
                        <p className="font-normal leading-[10.4px] text-[10px] text-[#858585]">
                          Upload doc.{" "}
                          <span className="font-semibold leading-[10.4px] text-[10px] text-[#858585]">
                            PDF, GITBOOK, DOC
                          </span>
                        </p>
                        <div className="flex flex-col gap-1 items-end pl-10">
                          <FaCircleCheck className="text-[#4A6800]  w-[16px] h-[16px]" />
                          <p className="font-bold text-xs leading-[14.65px]">
                            100%
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* button */}
                    <Link href="/workspaceData">
                      <div className="pt-40 flex justify-center items-center">
                        <button className="bg-gradient-to-r from-[rgba(3,255,163,.9)] to-[rgba(127,86,217,.9)] flex justify-center gap-1 items-center ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 font-normal focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-800 hover:scale-95 dark:text-secondary text-white transition ease-in-out delay-150 duration-300 h-10 w-[153px] rounded-[24px] hover:bg-[#0B0F16] text-xs">
                          Submit
                        </button>
                      </div>
                    </Link>
                  </div>
                </div>

                <div className="w-[60%] bg-[#181818] rounded-[20px] h-[809px] relative">
                  <div className="w-full h-[60px] rounded-[20px] bg-[#1B1B1B] flex justify-between items-center px-5 mb-10">
                    <p className="font-normal text-sm leading-[14.56px] text-[#858585]">
                      Test Area
                    </p>
                    <div className="w-[110px] h-[40px] flex justify-center items-center text-center rounded-[10px] bg-[#131313]">
                      <p className="font-normal text-sm leading-[14.65px]">
                        1
                        <span className="font-normal text-sm leading-[14.65px] text-[#3C3C3C]">
                          /15 prompts
                        </span>
                      </p>
                    </div>
                  </div>
                  {/* text area */}
                  <Image
                    width={49.34}
                    height={10}
                    src="/intel-ai.png"
                    alt="logo"
                    className="ml-10 mb-1"
                  />

                  <div className="w-full  ml-10 border-l-2 border-[#03FFA3] px-2 h-auto">
                    {/* first content */}
                    <p className="font-[200] text-base leading-[19.2px] mb-5 w-[95%]">
                      GetEquity is a dynamic platform that democratizes access
                      to private capital investments, providing a marketplace
                      for investors of all types to engage in private company
                      investments across diverse markets like the Middle East,
                      Africa, and Europe. 
                    </p>

                    {/* second content */}
                    <p className="font-[200] text-base leading-[19.2px] mb-5 w-[95%]">
                      The company focuses on aggregating investments across
                      various asset classes, making investment opportunities
                      more accessible for SEC-accredited providers. Founded in
                      2020 and based in Lagos, Nigeria, GetEquity operates as a
                      private marketplace facilitating the trade of digital
                      securities and assets securely and privately. Their
                      innovative approach allows users to fund their wallets
                      easily, invest in vetted investment products, buy and sell
                      shares, and even gift equity to family and friends. 
                    </p>

                    {/* third content */}
                    <p className="font-[200] text-base leading-[19.2px] mb-5 w-[95%]">
                      The company focuses on aggregating investments across
                      various asset classes, making investment opportunities
                      more accessible for SEC-accredited providers. Founded in
                      2020 and based in Lagos, Nigeria, GetEquity operates as a
                      private marketplace facilitating the trade of digital
                      securities and assets securely and privately. Their
                      innovative approach allows users to fund their wallets
                      easily, invest in vetted investment products, buy and sell
                      shares, and even gift equity to family and friends.
                    </p>

                    {/* fourth content */}
                    <p className="font-[200] text-base leading-[19.2px] mb-5 w-[95%]">
                      GetEquity is a dynamic platform that democratizes access
                      to private capital investments, providing a marketplace
                      for investors of all types to engage in private company
                      investments across diverse markets like the Middle East,
                      Africa, and Europe. 
                    </p>

                    {/* fifth contenth */}
                    <p className="font-[200] text-base leading-[19.2px] mb-5 w-[95%]">
                      The company focuses on aggregating investments across
                      various asset classes, making investment opportunities
                      more accessible for SEC-accredited providers. Founded in
                      2020 and based in Lagos, Nigeria, GetEquity operates as a
                      private marketplace facilitating the trade of digital
                      securities and assets securely and privately. Their
                      innovative approach allows users to fund their wallets
                      easily, invest in vetted investment products, buy and sell
                      shares, and even gift equity to family and friends.
                    </p>
                  </div>

                  {/* button */}
                  <Dialog>
                    <div className="mb-20 flex justify-center pt-6 ">
                      {" "}
                      {/* Added parent container with flex and justify-center */}
                      <DialogTrigger className="relative">
                        <button className="bg-gradient-to-r from-[rgba(3,255,163,.9)] to-[rgba(127,86,217,.9)] flex justify-center gap-1 items-center text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 font-normal focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-800 hover:scale-95 dark:text-secondary text-white transition ease-in-out delay-150 duration-300 h-[42px] w-[222px] rounded-[21px] hover:bg-[#0B0F16]">
                          <div className="w-[14px] h-[14px] rounded-full bg-[#2B6AFF] flex justify-center items-center">
                            <FaTelegramPlane className="w-[10px] h-[10px]" />
                          </div>
                          Simulate on Telegram
                        </button>
                      </DialogTrigger>
                    </div>
                    <DialogContent
                      className="absolute top-[54%] left-[80%] -translate-x-1/2 w-full px-4 md:w-full lg:w-full
                     bg-[#131313] border-none h-auto rounded-lg max-w-auto mb-20"
                    >
                      <DialogData />
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default page;

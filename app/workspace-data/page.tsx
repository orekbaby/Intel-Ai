"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { IoCheckmark } from "react-icons/io5";
import { FaCircleCheck } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import DialogData from "@/components/dialog/DialogData";
import Link from "next/link";
import { userDocInfo } from "@/config/mockData";
import { Button } from "@/components/ui/button";
import { ContentInside, FileImg, IntelLogo } from "@/assets";

const Page = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      router.push("/workspace-data-mobile");
    }, 3000);
  };

  return (
    <>
      {isLoading ? (
        <div className="w-full ml-2 md:ml-10 lg:ml-10 xl:ml-10 2xl:ml-10 border-l-2 border-[#03FFA3] flex md:hidden lg:hidden xl:hidden 2xl:hidden h-screen bg-[#181818] ">
          <Image
            src={ContentInside}
            width={430}
            height={809}
            alt="content"
            className="rounded-[20px]"
          />
          <div className="flex justify-center items-center">
            <Button
              className="w-[282px] h-[48px] bg-gradient-to-r from-[rgba(21,21,21,1)]
             to-[rgba(49,49,49,1)]"
            ></Button>
          </div>
        </div>
      ) : (
        <div className="pl-0 md:pl-4 lg:pl-16 xl:pl-20 zxl:pl-24 w-full h-full overflow-x-hidden mb-4 ">
          <section className="relative w-full h-full mb-48 bg-[#131313]">
            <div className="w-full pl-0 md:pl-2 lg:pl-8 xl:pl-10 2xl:pl-12 pr-0 md:pr-4 lg:pr-4 xl:pr-6 2xl:pr-8 relative mb-0 md:mb-10 lg:mb-10 h-full">
              <div className="pt-5 pl-2 md:pl-2 lg:pl-6 xl:pl-8 2xl:pl-10  h-full overflow-hidden">
                <p className="font-medium text-base md:text-[20px] lg:text-[20px] xl:[20px] 2xl:[24px] mb-4">
                 0x AI Workspace
                </p>
                <div className="w-full flex flex-col gap-4 md:flex-row lg:flex-row xl:flex-row 2xl:flex-rowjustify-between h-full">
                  <div className="w-full md:w-[45%] lg:w-[40%] xl:w-[40%] 2xl:w-[45%] bg-transparent h-[840px] overflow-y-auto scrollbar-hide rounded-[20px] overflow-hidden ">
                    <div className="w-full md:w-full lg:w-[490px] h-auto bg-[#1B1B1B] rounded-[20px] p-4 mb-10">
                      <h3 className="font-medium text-sm text-[#f9f9f9] mb-4">
                        Provide Context
                      </h3>
                      <p className="font-normal text-sm text-[#858585] leading-[16.58px] w-full md:w-full lg:w-[90%]">
                        Providing more information about your community will
                        help the AI better understand your needs and provide
                        more accurate assistance.
                      </p>
                    </div>
                    <div className="w-full h-[250px] md:h-[330px] lg:h-[300px] overflow-y-auto scrollbar-hide mb-2 md:mb-10 lg:mb-10 xl:mb-10 2xl:mb-10">
                      <h4 className="font-normal text-sm text-[#D6D6D6] italic mb-5 pl-3 md:pl-2 lg:pl-3">
                        UPLOAD DOCUMENTS
                      </h4>

                      {/* my form data*/}
                      <div className="px-2 md:px-2 lg-px-6">
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
                          <p className="text-[#858585] font-normal text-sm leading-[16.58px] w-full md:w-[90%] lg:w-[90%] xl:w-[90%] 2xl:w-[80%] mb-3">
                            Kindly upload any documents or links that you might
                            have about your project or product.
                            <span className="text-white font-normal text-sm leading-[14.58px]">
                              Whitepaper, Gitbook, Pitch Deck, Excel Sheet, FAQ
                              documents and so on.
                            </span>{" "}
                          </p>

                          <div
                            className="justify-between gap-2 items-center pt-5 w-[370px] md:w-[397px] lg:w-[397px] h-[60px] flex mt-2 font-[300px] text-sm
                        text-center rounded-[66px] bg-[#131313] px-[15px] pb-4 border-[#4A6800] border"
                          >
                            <div className="flex flex-col">
                              <Image
                                src={FileImg}
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
                      </div>
                    </div>

                    {/* button for mobile */}
                    <div>
                      <div className="flex md:hidden lg:hidden xl:hidden 2xl:hidden justify-center items-center">
                        <button
                          className="bg-gradient-to-r from-[rgba(3,255,163,.9)] to-[rgba(127,86,217,.9)] flex justify-center gap-1 items-center ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 font-normal focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-800 hover:scale-95 dark:text-secondary text-white transition ease-in-out delay-150 duration-300 h-10 w-[153px] rounded-[24px] hover:bg-[#0B0F16] text-xs"
                          onClick={handleClick}
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="hidden md:block lg:block xl:block 2xl:block w-full md:w-[55%] lg:w-[60%] bg-[#181818] rounded-[20px] h-[840px] overflow-y-auto scrollbar-hide relative overflow-hidden">
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
                      src={IntelLogo}
                      alt="logo"
                      className="ml-10 mb-1"
                    />

                    <div className="w-full  ml-10 border-l-2 border-[#03FFA3] px-2  h-[250px] md:h-[330px] lg:h-[300px] overflow-y-auto scrollbar-hide mb-1">
                      {/* first content */}
                      {userDocInfo?.map((row, index) => (
                        <div key={index} className="">
                          <p className="font-[200] text-base leading-[19.2px] mb-5 w-full md:w-[90%] lg:w-[95%] xl:[90%] 2xl:[85%]">
                            {row.content}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* button */}
                    <Dialog>
  <div className="mb-20 flex justify-center pt-6">
    <DialogTrigger className="relative">
      <button className="bg-gradient-to-r from-[rgba(3,255,163,.9)] to-[rgba(127,86,217,.9)] flex justify-center gap-1 items-center text-sm ring-offset-white focus-visible:outline-none 
      focus-visible:ring-2 focus-visible:ring-neutral-400 font-normal 
      focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-800 hover:scale-95 
      dark:text-secondary text-white transition ease-in-out delay-150 duration-300 h-[42px] w-[222px] rounded-[21px] hover:bg-[#0B0F16]">
        <div className="w-[14px] h-[14px] rounded-full bg-[#2B6AFF] flex justify-center items-center">
          <FaTelegramPlane className="w-[10px] h-[10px]" />
        </div>
        Simulate on Telegram
      </button>
    </DialogTrigger>
  </div>

  {/* First DialogContent */}
  {/* <DialogContent className="px-8 md:w-full lg:w-full border-none rounded-lg max-w-auto w-[540px] h-[401px] bg-[#181818]">
    <div className="mx-auto">
      <Image
        width={48}
        height={48}
        src="/loader.png"
        className="mx-auto mb-5 pt-10 bg-[#181818]"
        alt=""
      />
      <h3 className="font-medium text-center text-[20px] leading-[26px] w-[80%] mx-auto mb-4">
        Creating your simulation workspace
      </h3>
      <p className="font-medium text-sm mx-auto text-center text-[#C1C1C1] w-[383px] mb-5">
        Please wait while your AI generates the test environment for your results.
      </p>
      {/* Button */}
      {/* <Link href="/communityManager">
        <button
          className="bg-white items-center flex justify-center text-center text-xs font-normal ring-offset-white focus-visible:outline-none text-[#0D0D0D] h-10 w-[199px] rounded-[66px] mx-auto shadow-drop2"
        >
          Integrate your community now
        </button>
      </Link>
    </div>
  </DialogContent> */} 

  {/* Second DialogContent */}
  <DialogContent 
    className="absolute top-[54%] left-[50%] md:left-[68%] lg:left-[80%] -translate-x-1/2 w-full px-0 md:px-2 lg:px-4 bg-[#131313] border-none h-auto rounded-lg max-w-auto mb-20"
    style={{ backdropFilter: "none" }} // Ensure no blur is applied
  >
    <DialogData />
  </DialogContent>
</Dialog>

                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default Page;

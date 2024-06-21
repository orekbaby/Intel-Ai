import { escalationReport } from "@/utils/mockData";
import React from "react";
import { FaArrowTurnUp, FaArrowUp } from "react-icons/fa6";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CiMenuKebab, CiPaperplane } from "react-icons/ci";
import Unresolved from "@/components/queryContents/Unresolved";
import Resolved from "@/components/queryContents/Resolved";
import Image from "next/image";
import All from "@/components/queryContents/All";
import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <>
      <main className="pl-16 w-full h-[100vh] overflow-y-auto scrollbar-hide mb-4">
        <section className="relative w-full h-[100vh] overflow-y-auto scrollbar-hide pb-5 dashboard-color">
          <div className="w-full flex justify-between mb-0 md:mb-10 lg:mb-10 h-full pr-10">
            <div className="w-[70%]">
              <div className="pt-5 pl-12">
                <div className="w-[150px] h-[35px] rounded-[25px] bg-[#1B1B1B] flex justify-center items-center mb-10">
                  <p className="font-medium text-sm leading-[14.56px]">
                    Escallation Report
                  </p>
                </div>

                <div className="flex justify-start gap-4 items-center">
                  {escalationReport?.map((row, index) => (
                    <div className="w-[138px] h-[115px] rounded-[20px] bg-[#181818] flex flex-col pt-4 px-3">
                      <p className="font-medium text-xs leading-[12.48px] mb-5">
                        {row.title}
                      </p>
                      <p className="font-[300] text-[40px] leading-[41.6px]">
                        {row.number}
                      </p>
                      <div className="w-[21px] h-[10px] rounded-[2px] flex justify-center items-center bg-[#03FFA3] bg-opacity-[11%]">
                        <div className="flex justify-center items-center gap-1">
                          <p className="font-medium text-[6px] text-[#76CA43] ">
                            {row.percentage}
                          </p>
                          <FaArrowTurnUp className="w-[5px] h-[3px] text-[#76CA43] rotate-6" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* tabs section */}
                <Tabs
                  defaultValue="Unresolved"
                  className="w-full pl-2 pr-3 md:pl-0 lg:pl-0 pt-5 md:pt-0 lg:pt-7 overflow-x-hidden"
                >
                  <TabsList className="flex mt-0 mb-0 items-center justify-between md:justify-start lg:justify-start gap-0 md:gap-2 lg:gap-1 px-2 md:px-0 lg:px-0 border w-fit rounded-[24px] border-[#1C1C1C]">
                    <TabsTrigger
                      className=" w-full md:w-fit lg:w-[100px] px-5 md:px-2 lg:px-2 bg-[#161616] text-[#666666] data-[state=active]:bg-white text-[9px] md:text-sm lg:text-sm gap-2 font-medium rounded-[24px]"
                      value="Unresolved"
                    >
                      {" "}
                      Unresolved
                    </TabsTrigger>
                    <TabsTrigger
                      className=" w-full md:w-fit lg:w-[90px] px-5 md:px-2 lg:px-2 bg-[#161616] text-[#666666] data-[state=active]:bg-white text-[9px] md:text-sm lg:text-sm gap-2 font-medium rounded-[24px]"
                      value="Resolved"
                    >
                      Resolved
                    </TabsTrigger>

                    <TabsTrigger
                      className="w-full md:w-fit lg:w-[53px] px-5 md:px-2 lg:px-2 bg-[#161616] text-[#666666] data-[state=active]:bg-white text-[9px] md:text-sm lg:text-sm gap-2 
                      font-medium rounded-[24px]"
                      value="All"
                    >
                      All
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent
                    className="w-full h-full pt-2 overflow-x-hidden"
                    value="Unresolved"
                  >
                    <Unresolved />
                  </TabsContent>

                  <TabsContent
                    className="w-full h-full pt-2 overflow-x-hidden"
                    value="Resolved"
                  >
                    <Resolved />
                  </TabsContent>

                  <TabsContent
                    className="w-full h-full pt-2 overflow-x-hidden"
                    value="All"
                  >
                    <All />
                  </TabsContent>
                </Tabs>
              </div>
            </div>

            {/* second part */}
            <div className="w-[30%] pr-4">
              <p className="font-normal text-base leading-[16.64px] mb-4">
                Query Sorting Portal
              </p>
              {/* show this when sort button is not clicked */}
              <div className=" hidden w-[397px] h-[824px] bg-[#181818] rounded-[20px]">
                <div className="w-[397px] flex justify-end px-6 items-center h-[65px] rounded-[20px] bg-[#252525]">
                  <CiMenuKebab className="text-base text-[#767676]" />
                </div>
                <p className="font-medium leading-[14.56px] text-sm text-center pt-80 mb-5">
                  No Queries to sort
                </p>
                <p className="font-normal text-sm leading-[14.56px] italic text-center mb-80">
                  Click on the sort button to resolve queries
                </p>
                <div className=" flex justify-center items-center gap-2">
                  <div className="">
                    <input
                      type="text"
                      id="inputField2"
                      className="text-input2 font-normal pt-1  text-sm leading-[14.56px] italic"
                      placeholder="Input the proper response here ...."
                    />
                  </div>
                  <div className="w-[50px] h-[50px] rounded-full bg-[#03FFA3] flex justify-center items-center">
                    <CiPaperplane className="w-[26px] h-[30px] text-black" />
                  </div>
                </div>
              </div>

              {/* show this when sorted button is clicked */}
              <div className="w-[397px] h-[824px] bg-[#181818] rounded-[20px]">
                <div className="w-[397px] flex justify-between px-6 items-center h-[65px] rounded-[20px] bg-[#252525]">
                  {/* start */}
                  <div className="flex items-center gap-4 relative">
                    <div className="flex justify-center items-center w-[36px] h-[36px] bg-[#76CA43] rounded-full">
                      <p className="text-[#000000]">MT</p>
                    </div>
                    <p className="font-normal text-[20px] leading-[20.8px]">
                      Metatrade Inc
                    </p>
                    <div className="w-[14px] h-[14px] rounded-full bg-[#2B6AFF] flex justify-center items-center">
                      {/* <FaTelegramPlane className="w-[10px] h-[10px]" /> */}
                    </div>
                  </div>
                  {/* end */}
                  <CiMenuKebab className="text-base text-[#767676]" />
                </div>
                <div className="flex justify-start mb-8 relative pt-6 px-4">
                  <div className="w-[375px] h-[69px] rounded-[20px] bg-[#2D2D2D] px-4 py-2">
                    <p className="font-normal text-xs leading-[12.84px] mb-1">
                      I encountered a bug while using the workspace. Can you
                      help?{" "}
                    </p>
                    <div className="flex justify-end">
                      {" "}
                      <p className="font-normal text-[10px] text-[#939393]">
                        11:00 am
                      </p>
                    </div>
                  </div>
                  {/* absolute position section */}
                  <div
                    className="flex justify-center items-center bg-[#2D2D2D] border-[3px]
                   border-[#181818] w-[107px] h-[28px] rounded-[20px] py-4 absolute left-7 bottom-[-15%]"
                  >
                    <p className="font-normal text-xs">Spockman2304</p>
                  </div>
                  <div className="absolute bottom-[-10%] left-0">
                    <Image
                      src="/avatar.png"
                      width={28}
                      height={28}
                      alt="uder-img"
                      className=""
                    />
                  </div>
                </div>

                {/* response section */}
                <div className="flex justify-end px-4 pt-5">
                  <div className="w-[264px] h-[166px] rounded-[20px] bg-[#696969] px-3 py-4 relative">
                    <p className="font-normal text-xs leading-[14.84px]">
                      **I&apos;m sorry to hear you&apos;re experiencing a bug!
                      Your issue has been escalated to our community manager,
                      who will assist you shortly. In the meantime, could you
                      please provide more details about the bug, such as what
                      you were doing when it occurred and any error messages you
                      received? This will help us resolve the issue more
                      efficiently. Thank you for your patience!**
                    </p>
                  </div>
                </div>
                {/* absolute section */}
                <div className="flex gap-1 items-center relative bottom-[2%] left-[70%]">
                  <div className="">
                    <Image
                      src="/glow-img.png"
                      width={28}
                      height={28}
                      alt="uder-img"
                      className=""
                    />
                  </div>

                  <div className="flex justify-center items-center bg-[#2D2D2D] border-[3px] border-[#181818] w-[57px] h-[28px] rounded-[20px]">
                    <p className="font-normal text-xs">
                      Intel
                      <span className="font-black text-xs text-[#03FFA3]">
                        ai
                      </span>
                    </p>
                  </div>
                </div>
                <div className="pt-80 mb-3 px-4">
                  <Button className="bg-gradient-to-r  from-[rgba(3,255,163,.9)] to-[rgba(127,86,217,.9)] flex justify-center gap-1 items-center ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 font-normal focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-800 hover:scale-95 dark:text-secondary text-white transition ease-in-out delay-150 duration-300 h-[25px] w-[133px] rounded-[24px] hover:bg-[#0B0F16] text-xs">
                    Resolve comment
                    <FaArrowUp className="text-[10px] rotate-45" />
                  </Button>
                </div>
                <div className=" flex justify-center items-center gap-2">
                  <div className="">
                    <input
                      type="text"
                      id="inputField2"
                      className="text-input2 font-normal pt-1  text-sm leading-[14.56px] italic"
                      placeholder="Input the proper response here ...."
                    />
                  </div>
                  <div className="w-[50px] h-[50px] rounded-full bg-[#03FFA3] flex justify-center items-center">
                    <CiPaperplane className="w-[26px] h-[30px] text-black" />
                  </div>
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

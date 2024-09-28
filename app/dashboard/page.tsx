"use client";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Image from "next/image";
import Link from "next/link";
import { integrationDashboard, proUpgrade } from "@/config/mockData";
import { CiCircleCheck } from "react-icons/ci";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { DashboardIcon, StarCenter, StarLeft } from "@/assets";

const Page: React.FC = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    setOpenModal(true);
  }, []);

  return (
    <>
      <main className="pl-2 md:pl-2 lg:pl-[290px] w-full h-[80vh] md:h-[100vh] lg:h-[100vh] overflow-hidden  pb-8 md:pb-5 lg:pb-5">
        <section className="dashboard-color relative w-full h-[100vh] rounded-tl-[20px] overflow-y-auto scrollbar-hide">
          <div className="w-full px-0 md:px-0 lg:px-2 relative mb-0 md:mb-10 lg:mb-10 h-full ml-0 md:ml-2 lg:ml-10">
            <h2 className="leading-[37.44px] text-[27px] mb-5 md:mb-7 lg:mb-7 font-[200] pt-10 md:pt-8 lg:pt-8">
              You&apos;re Welcome!
              <span className="leading-[24.96px] md:leading-[37.44px] lg:leading-[37.44px] text-[24px] md:text-[36px] lg:text-[36px] font-normal">
                👋
              </span>{" "}
            </h2>

            <p className="leading-[18.8px] font-normal text-sm w-[359px] h-auto text-[#A9A9A9] mb-5 md:mb-10 lg:mb-10">
            To get started,
Train IntelAI with your community data to test & simulate its capabilities. <Link className="text-green-500 border-b border-b-green-500" rel="stylesheet" href="/workspace" prefetch={false}>Click here to begin.</Link>

            </p>

            <div
              className="relative bg-gradient-to-r from-[rgba(0,0,0,1)]
           via-[rgba(24,24,24,0.8)] to-[rgba(3,255,163,0.4)] w-[371px] h-[196px] md:w-[95%] md:h-[217px] 
           lg:w-[874px] lg:h-[217px] rounded-[16px] md:rounded-[20px] lg:rounded-[20px] mb-4 md:mb-5 lg:mb-5"
            >
              {/* first star */}
              <div className="absolute top-[12%] left-[40%] ">
                <Image
                  src={StarCenter}
                  width={245.9}
                  height={59.25}
                  alt="icon"
                  className=""
                />
              </div>

              {/* second star */}
              <div className="absolute bottom-[12%] left-[3%]">
                <Image
                  src={StarLeft}
                  width={245.9}
                  height={59.25}
                  alt="icon"
                  className=""
                />
              </div>

              {/* third */}
              <div className="absolute bottom-[20%] right-[3%]">
                <Image
                  src={StarLeft}
                  width={245.9}
                  height={59.25}
                  alt="icon"
                  className=""
                />
              </div>

              <div className="px-3 md:px-10 lg:px-10 py-10 md:py-7 lg:py-7">
                <Image
                  src={DashboardIcon}
                  width={71}
                  height={71}
                  alt="icon"
                  className="mb-5 w-[31px] h-[31px] md:w-[71px] md:h-[71px] lg:h-[71px] lg:w-[71px]"
                />
                <div className="flex flex-col md:flex-row lg:flex-row justify-start">
                  <div className="w-full md:w-1/2 lg:w-1/2">
                    <h3 className="font-medium text-[20px] md:text-[24px] lg:text-[27px] leading-[20.8px] md:leading-[37.44px] lg:leading-[32.44px] w-full mb-5 md:mb-0 lg:mb-0">
                      Train your AI to suite your preference
                    </h3>
                  </div>
                  <div className="w-full md:w-1/2 lg:w-1/2 flex items-center justify-between">
                    <p className="font-normal text-[10px] leading-[12.8px] text-[#969696] w-[231px] md:w-[247px] lg:w-[247px] h-auto">
                      Train IntelAI to suit your community and requirements
                      seamlessly.Train IntelAI to suit your community and
                      requirements seamlessly.
                    </p>
                    <div className="pt-8">
                      <Link href="/workspace">
                        <button
                          className="bg-white items-center flex justify-center text-center 
                 text-xs font-normal md:font-medium lg:font-medium ring-offset-white focus-visible:outline-none
                 text-[#0D0D0D] w-[84px] h-[26px] md:w-[153px] md:h-10 lg:w-[153px] lg:h-[40px] rounded-[66px] md:rounded-[20px] lg:rounded-[20px] mx-auto leading-[12.8px]"
                        >
                          Train AI
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* bottom boxes first */}

            <div className="w-full md:w-[95%] lg:w-[874px] h-auto flex flex-col md:flex-row lg:flex-row justify-between relative overflow-hidden gap-4">
              {integrationDashboard?.map((row, index) => (
                <div
                  key={index}
                  className="w-[371px] md:w-[437px] lg:w-[437px] h-auto rounded-[20px] bg-[#181818] px-4 md:px-6 lg:px-6 py-3 md:py-5 lg:py-5"
                >
                  <Image
                    src={row.img}
                    width={53}
                    height={53}
                    alt="cable-icon"
                    className="mb-3"
                  />
                  <div className="absolute top-[4%] right-[53%]">
                    <Image
                      src={row.img2}
                      width={180}
                      height={50}
                      alt="star-img"
                      className="hidden md:block lg:block"
                    />
                  </div>
                  <h4 className=" font-medium text-base leading-[16.64px] mb-2 md:mb-3 lg:mb-3">
                    {row.title}
                  </h4>
                  <p className="font-normal text-xs leading-[14.64px] text-[#6D6D6D] w-[75%] mb-3">
                    {row.content}
                  </p>
                  <div className="flex justify-end">
                    <Link href="/">
                      <button
                        className="bg-white items-center flex justify-center text-center 
                 text-xs font-normal md:font-medium lg:font-medium ring-offset-white focus-visible:outline-none
                 text-[#0D0D0D] w-[105px] h-[26px] md:h-10 lg:h-10 md:w-[153px] lg:w-[153px] rounded-[66px] md:rounded-[20px] lg:rounded-[20px] mx-auto leading-[12.8px]"
                      >
                        {row.button}
                      </button>
                    </Link>
                  </div>
                </div>
              ))}

              {proUpgrade?.map((row, index) => (
                <div key={index} className="pb-40 md:pb-20 lg:pb-20">
                  <div
                    className="w-[371px] md:w-[98%] lg:w-[437px] h-auto rounded-[20px] bg-gradient-to-r from-[rgba(189,254,28,1)]
           via-[rgba(37,184,222,1)] to-[rgba(70,13,255,1)] px-6 py-5"
                  >
                    <div className="bg-[#505050] w-[53px] h-[53px] rounded-full flex items-center text-center justify-center mb-3">
                      <Image
                        src={row.img}
                        width={30}
                        height={30}
                        alt="cable-icon"
                        className=""
                      />
                    </div>

                    <h4 className="font-medium text-base leading-[16.64px] mb-3">
                      {row.title}
                    </h4>

                    <div className="flex gap-2">
                      <CiCircleCheck />
                      <p className="font-normal text-xs leading-[14.64px] text-white w-full mb-3">
                        {row.content1}
                      </p>
                    </div>

                    <div className="flex gap-2">
                      <CiCircleCheck />
                      <p className="font-normal text-xs leading-[14.64px] text-white w-full mb-3">
                        {row.content1}
                      </p>
                    </div>

                    <div className="flex justify-end">
                      <Link href="/">
                        <button
                          className="bg-white items-center flex justify-center text-center 
                 text-xs font-normal md:font-medium lg:font-medium ring-offset-white focus-visible:outline-none
                 text-[#0D0D0D] w-[105px] h-[26px] md:h-10 lg:h-10 md:w-[153px] lg:w-[153px] rounded-[66px] md:rounded-[20px] lg:rounded-[20px] mx-auto leading-[12.8px]"
                        >
                          {row.button}
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* <Dialog onOpenChange={handleCloseModal} open={openModal}>
        <DialogContent className="px-8 border-none rounded-lg max-w-auto w-[350px] h-[227px] bg-[#181818]">
          <h3 className="pt-10 font-medium text-center text-[20px] leading-[24px] w-full mx-auto">
            Your Journey Starts Here
          </h3>
          <p className="font-medium text-sm mx-auto text-center text-[#C1C1C1] w-full mb-6">
            Before you start using your community workspace, it's important to
            train your AI.
          </p>
        </DialogContent>
      </Dialog> */}
    </>
  );
};

export default Page;

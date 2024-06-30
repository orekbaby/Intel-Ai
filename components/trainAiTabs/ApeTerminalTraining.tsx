import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Link from "next/link";
import ApeTerminalTable from "@/components/ApeTerminalTable";
import AnnouncementModal from "../AnnouncementModal";
import CommunityModal from "../CommunityModal";
import OtherInformationModal from "../OtherInformationModal";

const ApeTerminalTraining = () => {
  return (
    <div className="w-full h-auto mx-auto px-0 md:px-10 lg:px-10">
      <h2 className="font-medium text-[30px] md:text-[36px] lg:text-[36px] leading-[33.28px] md:leading-[37.44px] lg:leading-[37.44px] pt-0 md:pt-10 lg:pt-10 mb-7 text-center px-0 md:px-0 lg:px-0 w-[100%] md:w-full lg:w-full">
        What’s happening in your Community?
      </h2>
      <div className="flex flex-col md:flex-row lg:flex-row justify-center items-center gap-6 md:gap-8 lg:gap-8 mb-10">
        <Dialog>
          <DialogTrigger className="cursor-pointer" asChild>
            <div className="flex items-center justify-center text-center font-medium text-sm leading-[14.56px] w-[374px] md:w-[266px] lg:w-[266px] h-[76px] md:h-[50px] lg:h-[50px] rounded-[200px] border-[#202020] bg-[#181818]">
              Upcoming Announcements
            </div>
          </DialogTrigger>
          <DialogContent className="absolute top-[48%] max-w-auto w-[562px] px-4 md:w-full lg:w-full bg-[#0D0D0D] border-b border-[#1B1B1B] rounded-[20px]">
            <div className="w-full md:w-full lg:w-full h-[400px] md:h-[400px] lg:h-[80vh] overflow-y-auto scrollbar-hide border-b-transparent outline-0">
              <AnnouncementModal />
            </div>
          </DialogContent>
        </Dialog>

        {/* community dialog */}
        <Dialog>
          <DialogTrigger className="cursor-pointer" asChild>
            <div className="flex items-center justify-center text-center font-medium text-sm leading-[14.56px] w-[374px] md:w-[266px] lg:w-[266px] h-[76px] md:h-[50px] lg:h-[50px] rounded-[200px] border border-[#202020] bg-[#181818]">
              Community Engagement
            </div>
          </DialogTrigger>
          <DialogContent className="absolute top-[50%] max-w-auto w-[562px] h-[400px] px-4 md:w-full lg:w-full bg-[#0D0D0D] border-b border-[#1B1B1B] rounded-[20px]">
            <div className="w-full md:w-full lg:w-full h-[400px] md:h-[400px] lg:h-[100vh] overflow-y-auto scrollbar-hide border-b-transparent outline-0">
              <CommunityModal />
            </div>
          </DialogContent>
        </Dialog>

        {/* other information */}
        <Dialog>
          <DialogTrigger className="cursor-pointer" asChild>
            <div className="flex items-center justify-center text-center font-medium text-sm leading-[14.56px] w-[374px] md:w-[266px] lg:w-[266px] h-[76px] md:h-[50px] lg:h-[50px] rounded-[200px] border border-[#202020] bg-[#181818]">
              Other Information
            </div>
          </DialogTrigger>
          <DialogContent className="absolute top-[55%] w-[486px] h-auto px-0 md:w-full lg:w-full bg-[#0D0D0D] border-b border-[#1B1B1B] rounded-[20px]">
            <div className="w-full md:w-full lg:w-full h-auto overflow-y-auto scrollbar-hide border-b-transparent outline-0">
              <OtherInformationModal />
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Dialog>
        <div className="mb-20 flex flex-col md:flex-row lg:flex-row justify-center mx-auto">
          <DialogTrigger>
            <button className="flex justify-center mx-auto bg-gradient-to-r from-[rgba(3,255,163,.9)] to-[rgba(127,86,217,.9)] gap-1 items-center text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 font-normal focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-800 hover:scale-95 dark:text-secondary text-white transition ease-in-out delay-150 duration-300 h-[48px] md:h-[42px] lg:h-[42px] w-[282px] md:w-[222px] lg:w-[222px] rounded-[21px] hover:bg-[#0B0F16]">
              <div className="w-[14px] h-[14px] rounded-full bg-[#2B6AFF] flex justify-center items-center">
                <FaTelegramPlane className="w-[10px] h-[10px]" />
              </div>
              Simulate on Telegram
            </button>
          </DialogTrigger>

          <p className="block md:hidden lg:hidden font-normal text-center text-[#BDFE1C] text-sm leading-[14.56px] border-b border-[#BDFE1C] w-fit pt-6 mx-auto">
            Training History
          </p>
        </div>
        <DialogContent className="px-6 md:px-8 lg:px-8 border-none rounded-lg max-w-auto w-[380px] h-[257px] bg-[#181818]">
          <div className="mx-auto pt-8">
            <h3 className="font-medium text-center text-[20px] leading-[24px] w-full mx-auto mb-4">
              Your Journey Starts Here
            </h3>
            <p className="font-medium text-sm mx-auto text-center text-[#C1C1C1] w-full mb-6">
              Before you start using your community workspace, it&apos;s
              important to train your AI. Discover the benefits of AI training
              here.
            </p>
            <Link href="/workspace">
              <button className="bg-white items-center flex justify-center text-center text-xs font-normal ring-offset-white focus-visible:outline-none text-[#0D0D0D] h-[55px] md:h-10 lg:h-10 w-[298px] md:w-[153px] lg:w-[153px] rounded-[66px] mx-auto shadow-drop2">
                Train your AI now
              </button>
            </Link>
          </div>
        </DialogContent>
      </Dialog>

      <div className="mx-auto text-left">
        <p className="font-medium text-[18px] leading-[13px] mb-5">
          Training History
        </p>
        <p className="font-normal text-sm leading-[13px] text-[#929292] mb-3">
          Recent Training
        </p>
      </div>

      {/* table component */}
      <div className="mx-auto">
        <ApeTerminalTable />
      </div>
    </div>
  );
};

export default ApeTerminalTraining;

import React from "react";
import {
  Table,
  TableHeader,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { FaTelegramPlane } from "react-icons/fa";
import { trainingHistory } from "@/utils/mockData";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import Link from "next/link";
import { announcementsModal } from "@/utils/mockData";

const ApeTerminalTraining = () => {
  return (
    <div className="w-full h-auto mx-auto ">
      <h2 className="font-medium text-[36px] leading-[37.44px] pt-10 mb-7 text-center">
        What’s happening in your Community?
      </h2>

      <div className="flex justify-center items-center gap-10 mb-10">
        <Dialog>
          <DialogTrigger>
            <div
              className="flex items-center justify-center text-center font-medium text-sm
             leading-[14.56px] w-[266px] h-[50px] rounded-[200px] border border-[#202020] bg-[#181818]"
            >
              Upcoming Announcements
            </div>
          </DialogTrigger>
          <DialogContent
            className="absolute top-[58%] max-w-auto w-[562px] px-4 md:w-full lg:w-full
                   bg-[#0D0D0D] border-b border-[#1B1B1B] rounded-[20px]"
          >
            <div className="w-full md:w-full lg:w-full h-[400px] md:h-[400px] lg:h-[100vh] overflow-y-auto scrollbar-hide border-b-transparent outline-0">
              {announcementsModal?.map((row, index) => (
                <div
                  key={index}
                  className="flex flex-col mb-5 pb-5 border-[#1E1E1E] border-b"
                >
                  <h5 className="font-semibold text-sm leading-[14.56px] mb-2">
                    {row.title}
                  </h5>
                  <p className="font-normal text-sm leading-[16.56px] text-[#4D4D4D]">
                    {row.content}
                  </p>
                </div>
              ))}
            </div>
          </DialogContent>
        </Dialog>

        <div className="flex items-center justify-center text-center font-medium text-sm leading-[14.56px] w-[266px] h-[50px] rounded-[200px] border border-[#202020] bg-[#181818]">
          Community Engagement
        </div>

        <div className="flex items-center justify-center text-center font-medium text-sm leading-[14.56px] w-[266px] h-[50px] rounded-[200px] border border-[#202020] bg-[#181818]">
          Other Information
        </div>
      </div>
      <Dialog>
        <div className="mb-20 flex justify-center mx-auto">
          <DialogTrigger>
            <button className="bg-gradient-to-r from-[rgba(3,255,163,.9)] to-[rgba(127,86,217,.9)] flex justify-center gap-1 items-center text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 font-normal focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-800 hover:scale-95 dark:text-secondary text-white transition ease-in-out delay-150 duration-300 h-[42px] w-[222px] rounded-[21px] hover:bg-[#0B0F16]">
              <div className="w-[14px] h-[14px] rounded-full bg-[#2B6AFF] flex justify-center items-center">
                <FaTelegramPlane className="w-[10px] h-[10px]" />
              </div>
              Simulate on Telegram
            </button>
          </DialogTrigger>
        </div>
        <DialogContent className="px-8  border-none rounded-lg max-w-auto w-[380px] h-[257px] bg-[#181818]">
          <div className="mx-auto pt-8">
            <h3 className="font-medium text-center text-[20px] leading-[24px] w-full mx-auto mb-4">
              Your Journey Starts Here
            </h3>
            <p className="font-medium text-sm mx-auto text-center text-[#C1C1C1] w-full mb-6">
              Before you start using your community workspace, it&apos;s
              important to train your AI. Discover the benefits of AI training
              here.
            </p>
            {/* button */}
            <Link href="/workspace">
              <button
                className="bg-white items-center flex justify-center text-center 
                                  text-xs font-normal ring-offset-white focus-visible:outline-none
                                  text-[#0D0D0D] h-10 w-[153px] rounded-[66px] mx-auto shadow-drop2"
              >
                Train your AI now
              </button>
            </Link>
          </div>
        </DialogContent>
      </Dialog>
      <div className="mx-auto px-20 text-left">
        <p className="font-medium text-[18px] leading-[13px] mb-5">
          Training History
        </p>

        <p className="font-normal text-sm leading-[13px] text-[#929292] mb-3">
          Recent Training
        </p>
      </div>
      <div className="mx-auto px-20">
        <Table className="overflow-x-hidden w-full">
          <TableHeader>
            <TableRow className="border-[#373737] h-[40px] border-b bg-[#1D1D1D]">
              <TableHead className="w-[150px] font-normal text-[12px] text-[#898989]">
                PROJECT NAME
              </TableHead>
              <TableHead className="font-normal text-[12px] text-[#898989] text-center pl-12">
                <div className="w-[150px]">ACTION</div>
              </TableHead>

              <TableHead className="w-[100px] md:w-[150px] lg:w-[150px] font-normal text-[12px] text-[#898989] text-left md:text-center lg:text-left pl-16">
                DATE & TIME
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {trainingHistory?.map((row, index) => (
              <TableRow
                key={index}
                className={`border-none ${
                  index === 0
                    ? "bg-[#0A0908]"
                    : index === 1
                    ? "bg-[#1D1D1D]"
                    : index === 2
                    ? "bg-[#0A0908]"
                    : ""
                }`}
              >
                <TableCell className="flex items-center font-normal text-[9px] md:text-sm lg:text-sm pl-4">
                  <div className="w-[100px] md:w-[100px] lg:w-[200px]">
                    {row.projectName}
                  </div>
                </TableCell>
                <TableCell className="font-medium text-[9px] md:text-sm lg:text-sm pr-10 text-left">
                  <div className="w-[100px] md:w-[350px] lg:w-[300px] pl-20 text-[#03FFA3]">
                    {row.action}
                  </div>
                </TableCell>
                <TableCell className="text-center flex items-center gap-1 font-normal text-[9px] md:text-sm lg:text-sm pl-4">
                  <div className="w-[100px] md:w-[200px] lg:w-[200px] text-left md:text-right lg:text-left pl-12">
                    {row.dateTime}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ApeTerminalTraining;

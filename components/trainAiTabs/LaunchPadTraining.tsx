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
import Link from "next/link";

const LaunchPadTraining = () => {
  return (
    <div className="w-full h-auto mx-auto">
      <h2 className="font-medium text-[36px] leading-[37.44px] pt-10 text-center">
        What’s new with your launchpad projects?
      </h2>

      <div className="flex justify-center items-center gap-10 mb-10">
        <Link href="/">
          <div className=" hidden md:block lg:block bg-gradient-to-r from-[rgba(3,255,163,.9)] to-[rgba(127,86,217,.9)] rounded-[200px] py-[2px] px-[2px] mb-10 mt-10 shadow-drop">
            <button className="bg-gradient-to-r from-[#3A3A3A] to-[#000000] flex gap-2 items-center justify-center text-sm font-medium ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-800 hover:scale-95 dark:text-secondary text-white transition ease-in-out delay-150 duration-300 h-[50px] w-[266px] rounded-[200px] hover:bg-[#0B0F16]">
              Upcoming Project Listings
            </button>
          </div>
        </Link>

        <div className="flex items-center justify-center text-center font-medium text-sm leading-[14.56px] w-[266px] h-[50px] rounded-[200px] border border-[#202020] bg-[#181818]">
          Update Previously Listed Projects
        </div>
      </div>

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
            <TableRow className="border-[#373737] border-b bg-[#1D1D1D]">
              <TableHead className="w-[150px] font-normal text-[12px] text-[#898989]">
                Project Name
              </TableHead>
              <TableHead className="font-normal text-[12px] text-[#898989] text-center pl-10">
                <div className="w-[150px]">Action</div>
              </TableHead>

              <TableHead className="w-[100px] md:w-[150px] lg:w-[150px] font-normal text-[12px] text-[#898989] text-left md:text-center lg:text-left pl-16">
                Date & Time
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {trainingHistory?.map((row, index) => (
              <TableRow
                key={index}
                className={`border-none ${
                  index === 1
                    ? "bg-[#0A0908]"
                    : index === 2
                    ? "bg-[#1D1D1D]"
                    : index === 3
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

export default LaunchPadTraining;

import React from "react";
import Image from "next/image";
import {
  Table,
  TableHeader,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { allTable, resolvedTable, unResolvedTable } from "@/utils/mockData";
import { FaArrowUp } from "react-icons/fa6";

const All = () => {
  return (
    <>
      <div className="w-full overflow-hidden">
        {" "}
        {/* Updated overflow-hidden here */}
        <Table className="overflow-x-auto scrollbar-hide w-full">
          <TableHeader>
            <TableRow className="border-[#373737] h-[40px] border-b bg-[#1D1D1D]">
              <TableHead className="w-[100px] font-medium text-base leading-[16px]">
                #
              </TableHead>
              <TableHead className="font-normal text-[12px] text-[#898989] leading-[12.48px]">
                <div className="w-[130px]"> MONITORED GROUPS</div>
              </TableHead>
              <TableHead className="font-normal text-[12px] text-[#898989] leading-[12.48px]">
                PLATFORM
              </TableHead>
              <TableHead className="font-normal text-[12px] text-[#898989] leading-[12.48px]">
                QUERY
              </TableHead>
              <TableHead className="text-center font-normal text-[12px] text-[#898989] leading-[12.48px]">
                {" "}
                TIME
              </TableHead>
              <TableHead className="text-right"> </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="overflow-x-auto scrollbar-hide">
            {allTable?.map((row, index) => (
              <TableRow
                key={index}
                className={`border-none ${
                  index === 0
                    ? "bg-[#0A0908]"
                    : index === 1
                    ? "bg-[#1D1D1D]"
                    : index === 2
                    ? "bg-[#0A0908]"
                    : index === 3
                    ? "bg-[#1D1D1D]"
                    : index === 4
                    ? "bg-[#0A0908]"
                    : index === 5
                    ? "bg-[#1D1D1D]"
                    : index === 6
                    ? "bg-[#0A0908]"
                    : ""
                }`}
              >
                <TableCell className="font-medium  text-base leading-[16px]">
                  <div className="">{row.number}</div>
                </TableCell>
                <TableCell className="">
                  <div className="w-[100px]">
                    <div className="flex items-center gap-1">
                      {" "}
                      <Image
                        src={row.img}
                        alt={row.altText}
                        width={25}
                        height={25}
                        className=""
                      />
                      <p className="font-medium text-[9px] md:text-sm lg:text-sm leading-[14.56px]">
                        {row.name}
                      </p>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="">
                  <div className="">
                    <div className="flex items-center gap-1">
                      <Image
                        src={row.platform}
                        alt={row.altText}
                        width={25}
                        height={25}
                        className=""
                      />
                      <p className="font-medium text-[9px] md:text-sm lg:text-sm leading-[14.56px]">
                        {row.social}
                      </p>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-left">
                  <div className="w-[250px]">
                    <p className="font-medium text-[9px] md:text-sm lg:text-sm leading-[14.56px]">
                      {row.query}
                    </p>
                  </div>
                </TableCell>
                <TableCell className="text-right font-medium text-[9px] md:text-sm lg:text-sm leading-[14.56px]">
                  <div className="w-[100px] pr-2"> {row.time} </div>
                </TableCell>
                <TableCell className="text-left">
                  <Button
                    className={
                      index === 1 || index === 4 || index === 5
                        ? "w-[66px] flex justify-center gap-1 items-center h-[25px] bg-[#03FFA3] rounded-[66px] text-center text-[#0D0D0D] font-normal text-[9px] md:text-[10px] lg:text-xs leading-[12.48px] ml-4"
                        : "text-[#03FFA3] font-normal text-[9px] md:text-[10px] lg:text-xs leading-[12.48px]"
                    }
                  >
                    {row.button}
                    <FaArrowUp
                      className={
                        index === 1 || index === 4 || index === 5
                          ? "text-[10px] rotate-45"
                          : "hidden"
                      }
                    />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default All;

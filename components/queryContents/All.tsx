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
import { allTable } from "@/config/mockData";
import { FaArrowUp } from "react-icons/fa6";

const All = () => {
  return (
    <div className="w-full overflow-hidden">
      <Table className="overflow-x-auto scrollbar-hide w-full">
        <TableHeader>
          <TableRow className="border-[#373737] h-[35px] border-b bg-[#1D1D1D]">
            <TableHead className="w-[80px] font-medium text-xs leading-[14px]">
              #
            </TableHead>
            <TableHead className="font-normal text-[10px] text-[#898989] leading-[11px]">
              <div className="w-[120px]">MONITORED GROUPS</div>
            </TableHead>
            <TableHead className="font-normal text-[10px] text-[#898989] leading-[11px]">
              PLATFORM
            </TableHead>
            <TableHead className="font-normal text-[10px] text-[#898989] leading-[11px]">
              QUERY
            </TableHead>
            <TableHead className="text-center font-normal text-[10px] text-[#898989] leading-[11px]">
              TIME
            </TableHead>
            <TableHead className="text-right"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="overflow-x-auto scrollbar-hide">
          {allTable?.map((row, index) => (
            <TableRow
              key={index}
              className={`border-none ${
                index % 2 === 0 ? "bg-[#0A0908]" : "bg-[#1D1D1D]"
              }`}
            >
              <TableCell className="font-medium text-xs leading-[14px]">
                {row.number}
              </TableCell>
              <TableCell>
                <div className="w-[90px] flex items-center gap-1">
                  <Image
                    src={row.img}
                    alt={row.altText}
                    width={20}
                    height={20}
                  />
                  <p className="font-medium text-[9px] leading-[12px]">
                    {row.name}
                  </p>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-1">
                  <Image
                    src={row.platform}
                    alt={row.altText}
                    width={20}
                    height={20}
                  />
                  <p className="font-medium text-[9px] leading-[12px]">
                    {row.social}
                  </p>
                </div>
              </TableCell>
              <TableCell className="text-left">
                <div className="w-[200px]">
                  <p className="font-medium text-[9px] leading-[12px]">
                    {row.query}
                  </p>
                </div>
              </TableCell>
              <TableCell className="text-right font-medium text-[9px] leading-[12px]">
                <div className="w-[80px] pr-2"> {row.time} </div>
              </TableCell>
              <TableCell className="text-left">
                <Button
                  className={
                    index === 1 || index === 4 || index === 5
                      ? "w-[60px] flex justify-center gap-1 items-center h-[22px] bg-[#03FFA3] rounded-full text-center text-[#0D0D0D] font-normal text-[8px] leading-[10px]"
                      : "text-[#03FFA3] font-normal text-[9px] leading-[11px]"
                  }
                >
                  {row.button}
                  <FaArrowUp
                    className={
                      index === 1 || index === 4 || index === 5
                        ? "text-[9px] rotate-45"
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
  );
};

export default All;

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
import { resolvedTable, unResolvedTable } from "@/utils/mockData";
const Resolved = () => {
  return (
    <>
      <div className="w-full">
        <Table className="overflow-x-hidden w-full">
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
              <TableHead className="text-right"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {resolvedTable?.map((row, index) => (
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
                <TableCell className="text-left font-normal text-[9px] md:text-[10px] lg:text-xs leading-[12.48px]  text-[#03FFA3] ">
                  {row.button}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default Resolved;

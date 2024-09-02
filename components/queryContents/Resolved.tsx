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
import { resolvedTable } from "@/utils/mockData";

const Resolved = () => {
  return (
    <>
      <div className="w-full">
        <Table className="overflow-x-auto w-full">
          <TableHeader>
            <TableRow className="border-[#373737] h-[35px] border-b bg-[#1D1D1D]">
              <TableHead className="w-[60px] font-medium text-[10px] leading-[14px]">
                #
              </TableHead>
              <TableHead className="font-normal text-[10px] text-[#898989] leading-[14px]">
                <div className="w-[110px]">MONITORED GROUPS</div>
              </TableHead>
              <TableHead className="font-normal text-[10px] text-[#898989] leading-[14px]">
                PLATFORM
              </TableHead>
              <TableHead className="font-normal text-[10px] text-[#898989] leading-[14px]">
                QUERY
              </TableHead>
              <TableHead className="text-center font-normal text-[10px] text-[#898989] leading-[14px]">
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
                  index % 2 === 0 ? "bg-[#0A0908]" : "bg-[#1D1D1D]"
                }`}
              >
                <TableCell className="font-medium text-[12px] leading-[16px]">
                  {row.number}
                </TableCell>
                <TableCell>
                  <div className="w-[90px]">
                    <div className="flex items-center gap-1">
                      <Image
                        src={row.img}
                        alt={row.altText}
                        width={22}
                        height={22}
                      />
                      <p className="font-medium text-[10px] leading-[14px]">
                        {row.name}
                      </p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-1">
                    <Image
                      src={row.platform}
                      alt={row.altText}
                      width={22}
                      height={22}
                    />
                    <p className="font-medium text-[10px] leading-[14px]">
                      {row.social}
                    </p>
                  </div>
                </TableCell>
                <TableCell className="text-left">
                  <div className="w-[180px]">
                    <p className="font-medium text-[10px] leading-[14px]">
                      {row.query}
                    </p>
                  </div>
                </TableCell>
                <TableCell className="text-right font-medium text-[10px] leading-[14px]">
                  <div className="w-[90px] pr-2">{row.time}</div>
                </TableCell>
                <TableCell className="text-left font-normal text-[10px] leading-[14px] text-[#03FFA3]">
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

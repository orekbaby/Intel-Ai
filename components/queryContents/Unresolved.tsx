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
import { unResolvedTable } from "@/utils/mockData";
import { FaArrowUp } from "react-icons/fa6";

interface UnresolvedProps {
  addQuery: (query: string) => void;
  resolveComment: () => void;
}

const Unresolved: React.FC<UnresolvedProps> = ({
  addQuery,
  resolveComment,
}) => {
  return (
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
              TIME
            </TableHead>
            <TableHead className="text-right"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {unResolvedTable.map((row, index) => (
            <TableRow
              key={index}
              className={`border-none ${
                index % 2 === 0 ? "bg-[#0A0908]" : "bg-[#1D1D1D]"
              }`}
            >
              <TableCell className="font-medium text-base leading-[16px]">
                {row.number}
              </TableCell>
              <TableCell>
                <div className="w-[100px] flex items-center gap-1">
                  <Image
                    src={row.img}
                    alt={row.altText}
                    width={25}
                    height={25}
                  />
                  <p className="font-medium text-[9px] md:text-sm lg:text-sm leading-[14.56px]">
                    {row.name}
                  </p>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-1">
                  <Image
                    src={row.platform}
                    alt={row.altText}
                    width={25}
                    height={25}
                  />
                  <p className="font-medium text-[9px] md:text-sm lg:text-sm leading-[14.56px]">
                    {row.social}
                  </p>
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
                <div className="w-[100px] pr-2">{row.time}</div>
              </TableCell>
              <TableCell className="text-left font-normal text-[9px] md:text-[10px] lg:text-xs leading-[12.48px]">
                <Button
                  className="w-[66px] flex justify-center gap-1 items-center h-[25px] bg-[#03FFA3] rounded-[66px] text-center text-[#0D0D0D]"
                  onClick={() => addQuery(row.query)}
                >
                  {row.button === "Sort" ? "Resolve" : row.button}
                  <FaArrowUp className="text-[10px] rotate-45" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Unresolved;

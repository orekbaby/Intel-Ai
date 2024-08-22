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
  updateUserData: () => void;
}

const Unresolved: React.FC<UnresolvedProps> = ({
  addQuery,
  resolveComment,
  updateUserData,
}) => {
  return (
    <div className="w-full overflow-x-auto">
      <Table className="min-w-full">
        <TableHeader>
          <TableRow className="border-[#373737] h-[35px] border-b bg-[#1D1D1D]">
            <TableHead className="w-[50px] font-medium text-sm">#</TableHead>
            <TableHead className="font-normal text-[11px] text-[#898989]">
              <div className="w-[120px]">MONITORED GROUPS</div>
            </TableHead>
            <TableHead className="font-normal text-[11px] text-[#898989]">
              PLATFORM
            </TableHead>
            <TableHead className="font-normal text-[11px] text-[#898989]">
              QUERY
            </TableHead>
            <TableHead className="text-center font-normal text-[11px] text-[#898989]">
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
              <TableCell className="font-medium text-sm">{row.number}</TableCell>
              <TableCell>
                <div className="w-[80px] flex items-center gap-1">
                  <Image
                    src={row.img}
                    alt={row.altText}
                    width={20}
                    height={20}
                  />
                  <p className="font-medium text-[10px] leading-[12px]">
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
                  <p className="font-medium text-[10px] leading-[12px]">
                    {row.social}
                  </p>
                </div>
              </TableCell>
              <TableCell className="text-left">
                <div className="w-[180px]">
                  <p className="font-medium text-[10px] leading-[12px]">
                    {row.query}
                  </p>
                </div>
              </TableCell>
              <TableCell className="text-right font-medium text-[10px] leading-[12px]">
                <div className="w-[80px] pr-2">{row.time}</div>
              </TableCell>
              <TableCell className="text-left font-normal text-[10px] leading-[12px]">
                <Button
                  className="w-[60px] flex justify-center gap-1 items-center h-[25px] bg-[#03FFA3] rounded-full text-[#0D0D0D]"
                  onClick={() => {
                    updateUserData();
                    addQuery(row.query);
                  }}
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

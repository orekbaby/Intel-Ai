import React from "react";
import {
  Table,
  TableHeader,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@/components/ui/table";

import { trainingHistory } from "@/config/mockData";
const ApeTerminalTable = () => {
  return (
    <>
      <div className="w-full">
        <Table className="overflow-x-hidden w-full">
          <TableHeader>
            <TableRow className="border-[#373737] h-[40px] border-b bg-[#1D1D1D]">
              <TableHead className="hidden md:block lg:block w-[100px] font-medium text-xs leading-[16px]">
                #
              </TableHead>
              <TableHead className="font-normal text-[12px] text-[#898989] leading-[12.48px]">
                <div className="w-[100px] md:w-[130px] lg-[130px]">
                  {" "}
                  PROJECT NAME
                </div>
              </TableHead>
              <TableHead className="text-left font-normal text-[12px] text-[#898989] leading-[12.48px]">
                ACTION
              </TableHead>
              <TableHead className="font-normal text-left md:text-left lg:text-left pl-4 md:pl-20 lg:pl-20 text-[12px] text-[#898989] leading-[12.48px]">
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
                <TableCell className="hidden md:block lg:block font-medium text-xs leading-[14.56px]">
                  <div className="w-[100px] md:w-full h-w-full">
                    {row.number}
                  </div>
                </TableCell>
                <TableCell className="text-left">
                  <div className="w-[100px] md:w-[150px] lg:w-[150px] xl:w-[150px] 2xl:w-[200px]">
                    <p className="font-normal text-[9px] md:text-sm lg:text-sm leading-[14.56px]">
                      {row.projectName}
                    </p>
                  </div>
                </TableCell>
                <TableCell className="font-medium text-left text-[9px] md:text-sm lg:text-sm text-[#03FFA3] leading-[14.56px]">
                  <div className="w-[100px] md:w-full h-full">{row.action}</div>
                </TableCell>
                <TableCell className="text-left md:text-center lg:text-center flex gap-1 items-center">
                  <div className="w-[100px] md:w-[250px] lg:w-[250px] xl:w-[250px] 2xl:w-[250px] pl-0 md:pl-2 lg:pl-6 pr-6 md:pr-0 lg:pr-0">
                    <p className="font-normal text-[9px] md:text-sm lg:text-sm leading-[14.56px]">
                      {row.dateTime}{" "}
                    </p>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default ApeTerminalTable;

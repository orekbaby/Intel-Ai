"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
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
import { unResolvedTable } from "@/config/mockData";
import { FaArrowUp } from "react-icons/fa6";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface UnresolvedProps {
  addQuery: (query: string) => void;
  resolveComment: () => void;
}

const UnresolvedMobile: React.FC<UnresolvedProps> = ({
  addQuery,
  resolveComment,
}) => {
  const [openDialog, setOpenDialog] = useState<number | null>(null);
  const router = useRouter();

  const handleButtonClick = (query: string, name: string, img: any) => {
    localStorage.setItem("redirectQuery", query);
    localStorage.setItem("redirectName", name);

    localStorage.setItem("redirectImg", img);
    router.push("/querychat-mobile");
  };

  return (
    <div className="w-full">
      <Table className="overflow-x-hidden w-full">
        <TableHeader>
          <TableRow className="border-[#373737] h-[40px] border-b bg-[#1D1D1D]">
            <TableHead className="font-normal text-[12px] text-[#898989] leading-[12.48px]">
              <div className="w-[130px]"> MONITORED GROUPS</div>
            </TableHead>
            <TableHead className="font-normal text-[12px] text-[#898989] leading-[12.48px]">
              PLATFORM
            </TableHead>
            <TableHead className="text-right font-normal pr-14 text-[12px] text-[#898989] leading-[12.48px]">
              TIME
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {unResolvedTable.map((row, index) => (
            <React.Fragment key={index}>
              <TableRow
                className={`border-none ${
                  index % 2 === 0 ? "bg-[#0A0908]" : "bg-[#1D1D1D]"
                }`}
                onClick={() => setOpenDialog(index)}
              >
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
                <TableCell className="text-center pl-12 font-medium text-[9px] md:text-sm lg:text-sm leading-[14.56px]">
                  <div className="w-[100px]">{row.time}</div>
                </TableCell>
              </TableRow>
              <Dialog
                open={openDialog === index}
                onOpenChange={() => setOpenDialog(null)}
              >
                <DialogContent
                  className="absolute top-[52%] left-[48%] max-w-auto w-[398px]
                        h-[312px] border-0 outline-none bg-[#181818]"
                >
                  <div className="w-[398px] h-[40px] border-[#272727] border-b">
                    <div className="flex items-center gap-1">
                      <Image
                        src={row.img}
                        alt={row.altText}
                        width={25}
                        height={25}
                      />
                      <p className="font-medium text-[15px] leading-[14.56px]">
                        {row.name}
                      </p>
                    </div>
                  </div>
                  <p className="font-normal text-sm leading-[15.6px] w-[80%]">
                    {row.query}
                  </p>
                  <div className="pt-20">
                    <Button
                      className="w-[362px] flex justify-center gap-1 items-center text-sm h-[55px] bg-[#03FFA3] rounded-[66px] text-center text-[#0D0D0D]"
                      onClick={() =>
                        handleButtonClick(row.query, row.name, row.img)
                      }
                    >
                      {row.button === "Sort" ? "Resolve" : row.button}
                      <FaArrowUp className="text-[14px] rotate-45" />
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default UnresolvedMobile;

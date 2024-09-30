"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { unResolvedTable } from "@/config/mockData";
import { FaXTwitter } from "react-icons/fa6";

import { FaTelegramPlane, FaDiscord } from "react-icons/fa";

interface UnresolvedProps {
  addQuery: (query: string) => void;
  resolveComment: () => void;
}

const UnresolvedMobile: React.FC<UnresolvedProps> = ({
  addQuery,
  resolveComment,
}) => {
  
  const router = useRouter();

  const handleButtonClick = (query: string, name: string, img: any) => {
    localStorage.setItem("redirectQuery", query);
    localStorage.setItem("redirectName", name);

    localStorage.setItem("redirectImg", img);
    router.push("/querychat-mobile");
  };

  return (
    <div className="w-full px-1">
   <div className="flex justify-start px-2 items-center font-normal text-[11.5px] text-[#898989] mb-4
border-[#373737] h-[40px] border-b bg-[#1D1D1D]
">
      Monitored platforms & queries
    </div>

    {unResolvedTable.map((row, index) => (
      <div
        key={index}
        className={`flex items-center gap-4 p-4 rounded-lg mb-2 ${
          index % 2 === 0 ? "bg-[#0A0908]" : "bg-[#1D1D1D]"
        }`}
        onClick={() =>
          handleButtonClick(row.query, row.name, row.img)
        }
      >
        {/* Avatar with Social Icon */}
        <div className="relative">
        <Image
                      src={row.img}
                      alt={row.altText}
                      width={51}
                      height={51}
                    />
          {/* Social Icon Positioned at Bottom-Right */}
          <div
  className={`absolute bottom-0 right-0 w-4 h-4 flex items-center justify-center rounded-full ${
    row.platform ===  FaDiscord
      ? "bg-[#7289DA]"
      : row.platform === FaTelegramPlane
      ? "bg-[#0088cc]"
      : row.platform === FaXTwitter
      ? "bg-[#0d0d0d]"
      : ""
  }`}
>
  <row.platform className="text-white w-3 h-3" />
</div>
        </div>

        {/* Name and Query */}
        <div className="flex flex-col">
          <span className="font-medium text-white text-[13px]">
            {row.name}
          </span>
          <span className="font-normal text-[#B2B2B2] text-xs">
            {row.query}
          </span>
        </div>
      </div>
    ))}
  </div>
  );
};

export default UnresolvedMobile;

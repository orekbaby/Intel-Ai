"use client";
import React, { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { GoPencil } from "react-icons/go";
import { FaRegClock } from "react-icons/fa";

interface CardProps {
  strategy: string;
  date: string;
  time: string;
}

const ScheduleCard: React.FC<CardProps> = ({ strategy, date, time }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Utility function to strip HTML tags
  const stripHtmlTags = (html: string) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };

  const truncatedTweet =
    stripHtmlTags(strategy).length > 100
      ? `${stripHtmlTags(strategy).slice(0, 100)}...`
      : stripHtmlTags(strategy);

  return (
<div
  className="w-[363px] h-auto pb-4 rounded-[20px] bg-[#252525] py-2 px-4 cursor-pointer"
  onClick={() => setIsExpanded(!isExpanded)}
>
  <div className="flex flex-col justify-between h-full">
    <div className="flex justify-between items-center">
      <div className="w-[75%]">
        <p className="font-normal text-sm leading-[14.56px]">
          {isExpanded ? stripHtmlTags(strategy) : truncatedTweet}
        </p>
      </div>
      <div className="w-[25%] flex justify-end">
        <div className="flex flex-col gap-8 items-end">
          <div className="w-[25px] h-[25px] bg-[#434343] flex justify-center items-center rounded-[4px]">
            <MdDeleteOutline className="w-[16px] h-[16px]" />
          </div>
          <div className="flex items-center gap-1 bg-[#131313] p-[3px] rounded-[12px] whitespace-nowrap">
            <FaRegClock className="w-[6px] h-[6px] text-[#858585]" />
            <p className="font-[300] text-[8px] leading-[12px] text-[#858585]">
              {date}{" "}
              <span className="font-normal text-[8px] leading-[12px] text-white">
                {time}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default ScheduleCard;

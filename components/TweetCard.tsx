"use client";
import React, { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { GoPencil } from "react-icons/go";
import { FaRegClock } from "react-icons/fa";

interface CardProps {
  tweet: string;
  date: string;
  time: string;
}

const TweetCard: React.FC<CardProps> = ({ tweet, date, time }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Utility function to strip HTML tags
  const stripHtmlTags = (html: string) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };

  const truncatedTweet =
    stripHtmlTags(tweet).length > 100
      ? `${stripHtmlTags(tweet).slice(0, 100)}...`
      : stripHtmlTags(tweet);

  return (
    <div
      className="w-[363px] h-auto pb-4 rounded-[20px] bg-[#252525] p-4 cursor-pointer"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex justify-between gap-6">
        <div className="w-[75%]">
          <p className="font-normal text-sm leading-[14.56px]">
            {isExpanded ? stripHtmlTags(tweet) : truncatedTweet}
          </p>
        </div>
        <div className="w-[25%] flex flex-col gap-2">
          <div className="flex gap-4">
            <div className="w-[25px] h-[25px] bg-[#434343] flex justify-center items-center rounded-[4px]">
              <MdDeleteOutline className="w-[16px] h-[16px]" />
            </div>
            <div className="w-[25px] h-[25px] bg-[#434343] flex justify-center items-center rounded-[4px]">
              <GoPencil className="w-[16px] h-[16px]" />
            </div>
          </div>
          <div className="bg-[#03FFA3] flex justify-center w-[45px] h-auto rounded-lg bg-opacity-[8%]">
            <p className="text-[#03FFA3] font-[300] text-[8px] leading-[12px]">
              Thread
              <span className="font-normal text-[8px] leading-[12px] text-white">
                5
              </span>
            </p>
          </div>
          <div className="flex gap-1 w-[91px] items-center h-auto bg-[#131313] p-[3px] rounded-[12px] mr-4">
            <FaRegClock className="w-[6px] h-[6px]" />
            <p className="font-[300] text-[8px] leading-[12px] text-[#858585]">
              {date} {""}
              <span className="font-normal text-[8px] leading-[12px] text-white">
                {time}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TweetCard;

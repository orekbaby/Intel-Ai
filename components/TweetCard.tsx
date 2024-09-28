"use client";
import React, { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { GoPencil } from "react-icons/go";
import { FaRegClock } from "react-icons/fa";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface CardProps {
  tweet: string;
  date: string;
  time: string;
  onDelete: () => void;
}

const TweetCard: React.FC<CardProps> = ({ tweet, date, onDelete, time }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const stripHtmlTags = (html: string) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };

  const truncatedTweet =
    stripHtmlTags(tweet).length > 100
      ? `${stripHtmlTags(tweet).slice(0, 100)}...`
      : stripHtmlTags(tweet);

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div
  className="w-full max-w-[410px] h-auto rounded-[20px] bg-[#252525] p-4 mx-auto cursor-pointer"
  onClick={() => setIsExpanded(!isExpanded)}
>
  <div className="flex flex-col justify-between gap-6">
    <div className="w-full">
      <p className="font-normal text-sm leading-[14.56px]">
        {isExpanded ? stripHtmlTags(tweet) : truncatedTweet}
      </p>
    </div>

    <div className="flex flex-col md:flex-col gap-2 justify-start items-end">
      <div className="flex gap-4 mt-2 md:mt-0"> 
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <div
              className="w-[25px] h-[25px] bg-[#434343] flex justify-center items-center rounded-[4px] cursor-pointer"
              onClick={(e) => e.stopPropagation()}
            >
              <MdDeleteOutline className="w-[16px] h-[16px]" />
            </div>
          </DialogTrigger>
          <DialogContent className="max-w-[300px] py-6 px-4 rounded-[20px] outline-none border-none bg-[#181818]">
            <div className="text-[14px] font-normal text-white text-center mb-4">
              Are you sure you want to delete your scheduled tweet?
            </div>
            <div className="flex justify-center gap-4">
              <button
                className="w-[80px] px-4 rounded-[20px] text-sm h-10 py-2 bg-red-500 text-white font-medium"
                onClick={() => {
                  onDelete();
                  setIsDialogOpen(false);
                }}
              >
                Yes
              </button>
              <button
                className="py-2 w-[80px] px-4 rounded-[20px] text-sm h-10 text-white font-medium border border-neutral-500"
                onClick={() => setIsDialogOpen(false)}
              >
                No
              </button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Time and Date */}
      <div className="flex gap-1 w-fit md:w-it lg:w-fit justify-center items-center h-auto bg-[#131313] py-[3px] rounded-[12px] md:mt-2">
        <FaRegClock className="w-[6px] h-[6px]" />
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

  );
};


export default TweetCard;
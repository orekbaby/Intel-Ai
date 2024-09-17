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

  // Utility function to strip HTML tags
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
    className="w-[363px] md:w-full lg:w-[410px] h-auto pb-4 rounded-[20px] bg-[#252525] p-4 mx-auto cursor-pointer"
    onClick={() => setIsExpanded(!isExpanded)}
  >
    <div className="flex flex-col md:flex-row justify-between gap-6">
      <div className="w-full md:w-[60%]">
        <p className="font-normal text-sm leading-[14.56px]">
          {isExpanded ? stripHtmlTags(tweet) : truncatedTweet}
        </p>
      </div>
      <div className="w-full md:w-[40%] flex flex-col gap-2">
        <div className="flex gap-4">
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <div
                className="w-[25px] h-[25px] bg-[#434343] flex justify-center items-center rounded-[4px] cursor-pointer"
                onClick={(e) => e.stopPropagation()} // Prevent click event from bubbling up
              >
                <MdDeleteOutline className="w-[16px] h-[16px]" />
              </div>
            </DialogTrigger>
  
            {/* Modal content */}
            <DialogContent className="max-w-[300px] py-6 px-4 rounded-[20px] outline-none border-none bg-[#181818]">
              <div className="text-[14px] font-normal text-white text-center mb-4">
                Are you sure you want to delete your scheduled tweet?
              </div>
              <div className="flex justify-center gap-4">
                <button
                  className="w-[80px] px-4 rounded-[20px] text-sm h-10 py-2 bg-red-500 text-white font-medium"
                  onClick={() => {
                    onDelete(); // Call delete handler
                    setIsDialogOpen(false); // Close modal
                  }}
                >
                  Yes
                </button>
                <button
                  className="py-2 w-[80px] px-4 rounded-[20px] text-sm h-10  text-white font-medium border border-neutral-500"
                  onClick={() => setIsDialogOpen(false)} // Close modal without deleting
                >
                  No
                </button>
              </div>
            </DialogContent>
          </Dialog>
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
        <div className="flex gap-1 w-[91px] md:w-[60%] lg:w-[91px] justify-center items-center h-auto bg-[#131313] p-[3px] rounded-[12px] mr-4 md:mr-6 lg:mr-4">
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

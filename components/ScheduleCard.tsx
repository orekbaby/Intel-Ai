"use client"
import React, { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"; // Ensure this is the correct import

interface CardProps {
  strategy: string;
  date: string;
  time: string;
  onDelete: () => void; // Add onDelete prop
}

const ScheduleCard: React.FC<CardProps> = ({ strategy, date, time, onDelete }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

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
  className="w-[363px] md:w-[100%] lg:w-[410px] h-auto pb-4 rounded-[20px] bg-[#252525] py-2 px-4 cursor-pointer"
  onClick={() => setIsExpanded(!isExpanded)}
>
  <div className="flex flex-col justify-between h-full">
    <div className="flex flex-col md:flex-row justify-between items-center">
      <div className="w-full md:w-[75%]">
        <p className="font-normal text-sm leading-[14.56px]">
          {isExpanded ? stripHtmlTags(strategy) : truncatedTweet}
        </p>
      </div>
      <div className="w-full md:w-[25%] flex justify-end mt-4 md:mt-0">
        <div className="flex flex-col gap-8 items-end">
          {/* Dialog Trigger and Content */}
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <div
                className="w-[25px] h-[25px] bg-[#434343] flex justify-center items-center rounded-[4px]"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent card click
                  setIsDialogOpen(true); // Open dialog
                }}
              >
                <MdDeleteOutline className="w-[16px] h-[16px]" />
              </div>
            </DialogTrigger>

            {/* Modal content */}
            <DialogContent className="max-w-[300px] py-6 px-4 rounded-[20px] outline-none border-none bg-[#181818]">
              <div className="text-[14px] font-normal text-white text-center mb-4">
                Are you sure you want to delete your scheduled strategy post?
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

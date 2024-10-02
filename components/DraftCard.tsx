import React, { useState } from "react";
import { FaRegClock } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { FiLoader } from "react-icons/fi";

interface CardProps {
  content: string;
  comment: string;
  commentSpan: string;
  likes: string;
  likesSpan: string;
  retweet: string;
  retweetSpan: string;
  date: string;
  time: string;
  onDelete: () => void; // Prop for delete function
}

const DraftCard: React.FC<CardProps> = ({
  content,
  comment,
  commentSpan,
  likes,
  likesSpan,
  retweet,
  retweetSpan,
  date,
  time,
  onDelete,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
    const stripHtmlTags = (html: string) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };

  const truncatedTweet =
    stripHtmlTags(content).length > 100
      ? `${stripHtmlTags(content).slice(0, 100)}.....`
      : stripHtmlTags(content);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  return (
    <>
     {isLoading ? (
 <div className="absolute top-20 left-[5%] md:left-[20%] lg:left-[20%] flex justify-center items-center w-[100%]">
 <div className="px-8 border-none rounded-[20px] flex justify-center items-center max-w-auto w-[262px] h-[252px] bg-[#181818] py-10">
   <div className="mx-auto">
     <FiLoader
       className="w-[80px] h-[80px] text-gray-600 mx-auto mb-5"
     />
     <h3 className="font-medium text-[20px] mx-auto text-center text-[#C1C1C1] leading-[24px] mb-3">
       Please wait.....
     </h3>
     <p className="font-medium text-center text-sm leading-[14.56px] mx-auto">
       Now scheduling your tweet.
     </p>
   </div>
 </div>
</div>

    ) : (
      <div className="w-[373px] md:w-[410px] lg:w-[410px] h-auto rounded-[20px] bg-[#252525] px-4 py-3"
      onClick={() => setIsExpanded(!isExpanded)}>
        <p className="font-normal text-xs md:text-xs lg:text-[13.56px] w-full md:w-[80%] lg:w-full leading-[16.1px] mb-3">
        {isExpanded ? stripHtmlTags(content) : truncatedTweet}
        </p>
        <div className="flex justify-end gap-4 items-end">
        {/* Delete Icon wrapped in a Dialog */}
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <div className="w-[25px] h-[25px] bg-[#434343] flex justify-center items-center rounded-[4px] cursor-pointer" 
               onClick={(e) => {
                  e.stopPropagation(); 
                  setIsDialogOpen(true); 
                }}>
                <MdDeleteOutline className="w-[16px] h-[16px]" />
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-[300px] py-6 px-4 rounded-[20px] outline-none border-none bg-[#181818]">
              <div className="text-center">
                <p className="text-sm font-medium pt-3 ">Are you sure you want to delete this content?</p>
                <div className="flex justify-center mt-4 gap-4 pb-5">
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
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="flex justify-end items-end pt-1">
          <div className="flex items-center gap-1 bg-[#131313] p-[3px] rounded-[12px] w-fit whitespace-nowrap">
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
    )}
    </>
  );
};

export default DraftCard;

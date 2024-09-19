import React, { useState } from "react";
import { FaRegClock } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

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

const ContentPostedCard: React.FC<CardProps> = ({
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
  // Utility function to strip HTML tags
  const stripHtmlTags = (html: string) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  return (
    <>
      <div className="w-[362px] md:w-[100%] lg:w-[410px] h-auto rounded-[20px] bg-[#252525] px-4 py-3">
        <p className="font-normal md:text-xs lg:text-[13.56px] w-full md:w-[80%] lg:w-full leading-[14.1px] mb-5">
          {stripHtmlTags(content)}
        </p>
        <div className="border-t border-[#313131] h-[34px] gap-4 flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <div className="bg-[#22362F] flex justify-center items-center w-[81px] h-auto p-[4px] rounded-[24px]">
              <p className="text-[#03FFA3] font-[300] text-[8px] leading-[12px]">
                {comment}{" "}
                <span className="font-normal text-[8px] leading-[12px] text-white">
                  {commentSpan}
                </span>
              </p>
            </div>
            <div className="flex gap-1 justify-center items-center w-[71px] h-[21px] bg-[#131313] py-[3px] rounded-[24px]">
              <p className="font-[300] text-[8px] leading-[12px] text-[#F7406C]">
                {likes}{" "}
                <span className="font-normal text-[8px] leading-[12px] text-white">
                  {likesSpan}
                </span>
              </p>
            </div>
            <div className="flex gap-1 justify-center items-center w-[72px] h-[21px] bg-[#363636] py-[3px] rounded-[24px]">
              <p className="font-[300] text-[8px] leading-[12px] text-[#858585]">
                {retweet}{" "}
                <span className="font-normal text-[8px] leading-[12px] text-white">
                  {retweetSpan}
                </span>
              </p>
            </div>
          </div>

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
                <p>Are you sure you want to delete this content?</p>
                <div className="flex justify-center mt-4 gap-4">
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

        <div className="flex justify-start items-end pt-1">
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
    </>
  );
};

export default ContentPostedCard;

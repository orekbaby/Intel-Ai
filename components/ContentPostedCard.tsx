import React from "react";
import { MdDeleteOutline } from "react-icons/md";

interface CardProps {
  content: string;
  comment: string;
  commentSpan: string;
  likes: string;
  likesSpan: string;
  retweet: string;
  retweetSpan: string;
}

const ContentPostedCard: React.FC<CardProps> = ({
  content,
  comment,
  commentSpan,
  likes,
  likesSpan,
  retweet,
  retweetSpan,
}) => {
  // Utility function to strip HTML tags
  const stripHtmlTags = (html: string) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };

  return (
    <div className="w-[362px] h-auto rounded-[20px] bg-[#252525] px-4 py-3">
      <p className="font-normal text-[13.56px] leading-[14.1px] mb-5">
        {stripHtmlTags(content)}
      </p>
      <div className="border-t border-[#313131] h-[34px] flex justify-between items-center">
        <div className="flex justify-start gap-2">
          <div className="bg-[#22362F] flex justify-center w-[81px] h-auto p-[4px] rounded-[24px]">
            <p className="text-[#03FFA3] font-[300] text-[8px] leading-[12px]">
              {comment} {""}
              <span className="font-normal text-[8px] leading-[12px] text-white">
                {commentSpan}{" "}
              </span>
            </p>
          </div>
          <div className="flex gap-1 justify-center w-[71px] items-center h-[21px] bg-[#131313] py-[3px] rounded-[24px]">
            <p className="font-[300] text-[8px] leading-[12px] text-[#F7406C]">
              {likes} {""}
              <span className="font-normal text-[8px] leading-[12px] text-white">
                {likesSpan}
              </span>
            </p>
          </div>
          <div className="flex gap-1 justify-center w-[72px] items-center h-[21px] bg-[#363636] py-[3px] rounded-[24px]">
            <p className="font-[300] text-[8px] leading-[12px] text-[#858585]">
              {retweet} {""}
              <span className="font-normal text-[8px] leading-[12px] text-white">
                {retweetSpan}
              </span>
            </p>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="w-[25px] h-[25px] bg-[#434343] flex justify-center items-center rounded-[4px]">
            <MdDeleteOutline className="w-[16px] h-[16px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentPostedCard;

import { postedContent } from "@/config/mockData";
import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import ContentPostedCard from "./ContentPostedCard";
import Cookies from "js-cookie";

interface PostedContent {
  content: string;
  date: string;
  time: string;
}

const ContentPosted: React.FC = () => {
  const cookieData = Cookies.get("postedContents");
  const postedContent: PostedContent[] = cookieData
    ? JSON.parse(cookieData)
    : [];

  return (
    <>
      <div className="pt-5">
        <div className="flex flex-col items-center justify-between gap-5">
          {postedContent.map((row: PostedContent, index: number) => (
            <ContentPostedCard
              key={index}
              content={row.content}
              comment="10"
              commentSpan="comments"
              likes="150"
              likesSpan="likes"
              retweet="20"
              retweetSpan="retweets" 
              date={row.date} 
              time={row.time} 
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ContentPosted;

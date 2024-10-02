import { postedContent } from "@/config/mockData";
import React, { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import ContentPostedCard from "./ContentPostedCard";
import Cookies from "js-cookie";
import DraftCard from "./DraftCard";

interface DraftContent {
  content: string;
  date: string;
  time: string;
}

const Drafts: React.FC = () => {
  const cookieData = Cookies.get("draftContents");
  const [draftContent, setDraftContent] = useState<DraftContent[]>(
    cookieData ? JSON.parse(cookieData) : []
  );

  // Delete function
  const handleDelete = (index: number) => {
    const updatedContent = draftContent.filter((_, i) => i !== index);
    setDraftContent(updatedContent);
    Cookies.set("draftContents", JSON.stringify(updatedContent), {
      expires: 7,
      path: "/",
      secure: true,
    });
  };

  return (
    <div className="pt-5">
      <div className="flex flex-col items-center justify-between gap-5">
        {draftContent.map((row: DraftContent, index: number) => (
          <DraftCard
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
            onDelete={() => handleDelete(index)} 
          />
        ))}
      </div>
    </div>
  );
};

export default Drafts;

import { postedContent } from "@/utils/mockData";
import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import ContentPostedCard from "./ContentPostedCard";
import Cookies from "js-cookie";

interface PostedContent {
  content: string;
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
              comment={""}
              commentSpan={""}
              likes={""}
              likesSpan={""}
              retweet={""}
              retweetSpan={""} // comment={row.comment}
              // commentSpan={row.commentSpan}
              // likes={row.likes}
              // likesSpan={row.likesSpan}
              // retweet={row.retweet}
              // retweetSpan={row.retweetSpan}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ContentPosted;

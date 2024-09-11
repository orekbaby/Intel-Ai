import React, { useState, useEffect } from "react";
import TweetCard from "./TweetCard";
import Cookies from "js-cookie";

// Define the type for tweet content
interface TweetContent {
  content: string;
  date: string;
  time: string;
}

const ScheduleTweet: React.FC = () => {
  // Retrieve and parse the tweet contents from the cookie
  const cookieData = Cookies.get("tweetContents");
  const [tweetContents, setTweetContents] = useState<TweetContent[]>(
    cookieData ? JSON.parse(cookieData) : []
  );

  // Update the cookie whenever the tweetContents state changes
  useEffect(() => {
    Cookies.set("tweetContents", JSON.stringify(tweetContents), {
      expires: 7,
      path: "/x-agents",
      secure: true,
    });
  }, [tweetContents]);

  // Function to handle deleting a tweet by index
  const handleDelete = (index: number) => {
    const updatedTweets = tweetContents.filter((_, i) => i !== index);
    setTweetContents(updatedTweets);
  };

  return (
    <div className="pt-5">
      {tweetContents.length === 0 ? (
        <div className="pt-5 flex flex-col items-center mx-auto gap-2 justify-center">
          <p className="font-semibold text-sm text-[14.56px]">
            You do not have any scheduled tweets
          </p>
          <span className="font-normal text-xs leading-[12.48px] mx-auto text-center ">
            Click on Schedule Button to start
          </span>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-between gap-5">
          {tweetContents.map((row: TweetContent, index: number) => (
            <TweetCard
              key={index}
              tweet={row.content} // Pass tweet content
              date={row.date} // Pass tweet date
              time={row.time} // Pass tweet time
              onDelete={() => handleDelete(index)} // Pass delete handler
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ScheduleTweet;

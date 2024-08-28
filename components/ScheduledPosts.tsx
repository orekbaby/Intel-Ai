import React from "react";
import StrategyCard from "./StrategyCard";
import Cookies from "js-cookie";
import ScheduleCard from "./ScheduleCard";

// Define the type for strategy content
interface StrategyContent {
  content: string;
  date: string;
  time: string;
}

const ScheduledPosts: React.FC = () => {
  // Retrieve and parse the strategy contents from the cookie
  const cookieData = Cookies.get("strategyContents");
  const strategyContents: StrategyContent[] = cookieData ? JSON.parse(cookieData) : [];

  return (
    <div className="pt-5">
      {strategyContents.length === 0 ? (
        <div className="pt-5 flex flex-col items-center mx-auto gap-2 justify-center">
          <p className="font-semibold text-sm text-[14.56px]">
            You do not have any Strategy scheduled
          </p>
          <span className="font-normal text-xs leading-[12.48px] mx-auto text-center">
            Click on Content Calendar to start
          </span>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-between gap-5">
                   {strategyContents.map((row: StrategyContent, index: number) => (
            <ScheduleCard
              key={index}
              strategy={row.content} // Adjusted to match your data structure
              date={row.date} // Adjusted to match your data structure
              time={row.time} // Adjusted to match your data structure
            />
          ))} 
        </div>
      )}
    </div>
  );
};

export default ScheduledPosts;

"use client";
import React, { useState, useEffect } from "react";
import ScheduleCard from "./ScheduleCard";
import Cookies from "js-cookie";

interface StrategyContent {
  content: string;
  date: string;
  time: string;
}

const ScheduledPosts: React.FC<{ savedStrategyContents?: StrategyContent[] }> = ({ savedStrategyContents }) => {
  // Set initial strategyContents from cookies or the parent (if passed via props)
  const [strategyContents, setStrategyContents] = useState<StrategyContent[]>(
    savedStrategyContents || (Cookies.get("strategyContents") ? JSON.parse(Cookies.get("strategyContents")!) : [])
  );

  // Sync strategyContents state with cookie whenever it changes
  useEffect(() => {
    Cookies.set("strategyContents", JSON.stringify(strategyContents), {
      expires: 7,
      path: "/", // Now using root path for both train-ai and x-agents
      secure: true,
    });
  }, [strategyContents]);

  const handleDelete = (index: number) => {
    const updatedContents = strategyContents.filter((_, i) => i !== index);
    setStrategyContents(updatedContents);

    // Update the cookie with the new array for both paths
    Cookies.set("strategyContents", JSON.stringify(updatedContents), {
      expires: 7,
      path: "/", // Ensure it's accessible from both paths
      secure: true,
    });
  };

  return (
    <div className="pt-10 md:pt-5 lg:pt-5">
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
          {strategyContents.map((row, index) => (
            <ScheduleCard
              key={index}
              strategy={row.content}
              date={row.date}
              time={row.time}
              onDelete={() => handleDelete(index)} // Pass index to handleDelete
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ScheduledPosts;

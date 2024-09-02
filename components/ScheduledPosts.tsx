"use client"
import React, { useState, useEffect } from "react";
import ScheduleCard from "./ScheduleCard";
import Cookies from "js-cookie";

interface StrategyContent {
  content: string;
  date: string;
  time: string;
}

const ScheduledPosts: React.FC = () => {
  const cookieData = Cookies.get("strategyContents");
  const [strategyContents, setStrategyContents] = useState<StrategyContent[]>(
    cookieData ? JSON.parse(cookieData) : []
  );

  useEffect(() => {
    Cookies.set("strategyContents", JSON.stringify(strategyContents), {
      expires: 7,
      path: "/x-Agents",
      secure: true,
    });
  }, [strategyContents]);

  const handleDelete = (index: number) => {
    // Remove the item at the specified index
    const updatedContents = strategyContents.filter((_, i) => i !== index);

    // Update the state with the new array
    setStrategyContents(updatedContents);

    // Update the cookie with the new array
    Cookies.set("strategyContents", JSON.stringify(updatedContents), {
      expires: 7,
      path: "/x-Agents",
      secure: true,
    });
  };

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

import React from "react";
import { hookModal } from "@/config/mockData";

interface HookListProps {
  onSelect: (content: string) => void;
}

const HookList: React.FC<HookListProps> = ({ onSelect }) => {
  return (
    <div className="flex flex-col gap-3 pb-3 text-left cursor-pointer w-full h-full">
      {hookModal?.map((row, index) => (
        <div
          key={index}
          className="border-[#1E1E1E] border-b hover:bg-gray-700 p-2 rounded-md"
          onClick={() => onSelect(row.content)}
        >
          <h5 className="font-bold text-sm leading-[14.56px] mb-2">
            {row.content}
          </h5>
        </div>
      ))}
    </div>
  );
};

export default HookList;

"use client";
import React from "react";

interface CopilotToggleButtonProps {
  checked: boolean;
  onToggle: () => void;
}

const CopilotToggleButton: React.FC<CopilotToggleButtonProps> = ({
  checked,
  onToggle,
}) => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center justify-center gap-1">
        {/* Text indicating the current mode */}
        <p
          className={`font-medium text-[14px] leading-[14.56px] ${
            checked ? "text-[#6B6B6B]" : "text-[#545454]"
          }`}
        >
          Tweet
        </p>

        {/* Toggle switch */}
        <div
          className="relative inline-block w-7 h-4 transition duration-200 ease-linear rounded-full cursor-pointer bg-[#545454]"
          onClick={onToggle}
        >
          <input
            type="checkbox"
            checked={checked}
            onChange={onToggle}
            className="absolute opacity-0 w-full h-full cursor-pointer"
          />
          <span
            className={`absolute top-0 inline-block w-3.5 h-3.5 transition duration-200 ease-linear transform rounded-full shadow ${
              checked ? "translate-x-3 bg-green-400" : "bg-[#03ffa3]"
            }`}
            style={{ left: checked ? "calc(100% - 1.5rem)" : "0" }}
          ></span>
        </div>

        {/* Text indicating the opposite mode */}
        <p
          className={`font-medium text-[14px] leading-[14.56px] ${
            checked ? "text-[#545454]" : "text-[#6B6B6B]"
          }`}
        >
          Thread
        </p>
      </div>
    </div>
  );
};

export default CopilotToggleButton;

"use client";
import React, { useState } from "react";
import { ChevronDownIcon } from "lucide-react";

interface CopilotToggleButtonProps {
  checked: boolean;
  onToggle: (value: boolean) => void; // Update onToggle to accept a boolean value
}

const ToggleButtonMobile: React.FC<CopilotToggleButtonProps> = ({
  checked,
  onToggle,
}) => {
  const [selectedOption, setSelectedOption] = useState<string>(checked ? "Thread" : "Tweet");

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedOption(value);
    onToggle(value === "Tweet");
  };

  return (
    <div className="flex md:hidden lg:hidden items-center justify-center"> {/* Hide on medium screens and above */}
      <div className="relative inline-block text-left">
        <select
          className="custom-dropdown block w-[150px] h-[32px] bg-[#121212] border-[#2D2C2C] border- text-white rounded-lg"
          value={selectedOption}
          onChange={handleOptionChange}
        >
          <option value="Tweet" className="font-normal text-base leading-[16.64px]">Tweet</option>
          <option value="Thread" className="font-normal text-base leading-[16.64px]">Thread</option>
        </select>
        <ChevronDownIcon className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white pointer-events-none" />
      </div>
    </div>
  );
};

export default ToggleButtonMobile;

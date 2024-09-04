import React, { useEffect, useState } from "react";
import { FaCheck, FaCaretDown } from "react-icons/fa6";

interface InputCategoryProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const InputCategory: React.FC<InputCategoryProps> = ({ value, onChange }) => {
  const [isCategoryEditing, setIsCategoryEditing] = useState<boolean>(true);

  // Automatically select the category if value is provided
  useEffect(() => {
    if (value) {
      setIsCategoryEditing(false);
    }
  }, [value]);

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    onChange(event);
    setIsCategoryEditing(false);
  };

  const handleClick = () => {
    setIsCategoryEditing(true);
  };

  return (
    <div className="border-[#2B2B2B] border-b pb-3 mb-6 w-full">
      <label
        htmlFor="inputField3"
        className="block text-white font-semibold text-sm leading-[22.48px] mb-3"
      >
        What is the category of your project?
      </label>
      <div className="flex items-center relative">
        {isCategoryEditing ? (
          <div className="relative flex items-center w-full">
            <select
              id="category"
              value={value}
              onChange={handleCategoryChange}
              className="text-white bg-[#1A1A1A] border border-[#333] rounded-md p-2 pr-10 font-normal text-xs md:text-sm lg:text-sm leading-5 w-full appearance-none"
              style={{ outline: "none" }}
              required
            >
              <option value="" disabled>Select a category</option>
              <option value="launchpad">Launchpad</option>
              <option value="Token Project">Token Project</option>
              <option value="Memecoin Project">Memecoin Project</option>
            </select>
            {/* Custom Arrow Icon */}
            <svg
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400"
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L5 5L9 1"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        ) : (
          <>
            {value && (
              <div className="flex justify-center items-center w-[16px] h-[16px] rounded-full bg-[#4A6800] mt-2 mr-2">
                <FaCheck className="text-white w-[10px] h-[10px]" />
              </div>
            )}
            <div
              className="text-white font-semibold text-sm leading-[22.48px] mt-2 cursor-pointer"
              onClick={handleClick}
            >
              {value || "Select a category"}
            </div>
            <FaCaretDown
              className="text-white absolute right-[5%] cursor-pointer mt-2"
              onClick={handleClick}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default InputCategory;

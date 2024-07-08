import React, { useState } from "react";
import { FaCheck } from "react-icons/fa6";

interface InputCategoryProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const InputCategory: React.FC<InputCategoryProps> = ({ value, onChange }) => {
  const [isCategoryEditing, setIsCategoryEditing] = useState<boolean>(true);

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    onChange(event);
    setIsCategoryEditing(false);
  };

  const handleCategoryMouseEnter = () => {
    setIsCategoryEditing(true);
  };

  return (
    <div
      className="border-[#2B2B2B] border-b pb-3 mb-6 w-full"
      onMouseEnter={handleCategoryMouseEnter}
    >
      <label
        htmlFor="inputField3"
        className="block text-white font-semibold text-sm leading-[22.48px] mb-3"
      >
        What is the category of your project?
      </label>
      <div className="flex items-center">
        {value && !isCategoryEditing && (
          <div className="flex justify-center items-center w-[16px] h-[16px] rounded-full bg-[#4A6800] mt-2 mr-2">
            <FaCheck className="text-white w-[10px] h-[10px]" />
          </div>
        )}
        {isCategoryEditing ? (
          <select
            id="category"
            value={value}
            onChange={handleCategoryChange}
            className="text-white custom-input mt-2 font-[300px] text-sm leading-[22.68px] rounded p-2"
            style={{ border: "none", outline: "none" }}
            required
          >
            <option value="">Select a category </option>
            <option value="launchpad">Launchpad</option>
            <option value="Marketing">Token Project</option>
            <option value="Development">Memecoin Project</option>
          </select>
        ) : (
          <div className="text-white font-semibold text-sm leading-[22.48px] mt-2 cursor-pointer">
            {value}
          </div>
        )}
      </div>
    </div>
  );
};

export default InputCategory;

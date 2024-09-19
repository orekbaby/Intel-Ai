import React, { useState } from "react";
import { FaCheck, FaCaretDown } from "react-icons/fa";

interface InputFieldProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  placeholder,
  value,
  onChange,
}) => {
  const [isFilled, setIsFilled] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(true);

  // Helper function to capitalize the first letter if not already capitalized
  const capitalizeFirstLetter = (input: string) => {
    if (!input) return input; // Return if empty
    return input.charAt(0).toUpperCase() + input.slice(1);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    onChange(newValue); // Call the parent onChange with the raw input
    setIsFilled(newValue.trim() !== "");
  };

  const handleInputBlur = () => {
    if (value.trim() !== "") {
      setIsEditing(false);
      // Capitalize first letter when the user finishes editing
      onChange(capitalizeFirstLetter(value));
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setIsEditing(false);
      // Capitalize first letter when the user presses "Enter"
      onChange(capitalizeFirstLetter(value));
    }
  };

  const handleClick = () => {
    setIsEditing(true);
  };

  return (
    <div className="border-[#2B2B2B] border-b pb-3 mb-6 w-full">
      <label
        htmlFor="inputField2"
        className="block text-white font-semibold text-sm leading-[22.48px] mb-3"
      >
        {label}
      </label>
      <div className="flex items-center relative">
        {isEditing ? (
          <input
            type="text"
            id="inputField2"
            className="custom-input mt-2 font-[300px] text-sm leading-[22.68px]"
            placeholder={placeholder}
            value={value}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            onKeyPress={handleKeyPress}
            autoComplete="off"
          />
        ) : (
          <>
            {isFilled && (
              <div className="flex justify-center items-center w-[16px] h-[16px] rounded-full bg-[#4A6800] mt-2 mr-2">
                <FaCheck className="text-white w-[10px] h-[10px]" />
              </div>
            )}
            <div
              className="text-white font-semibold text-sm leading-[22.48px] mt-2 cursor-pointer"
              onClick={handleClick}
            >
              {value || placeholder}
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

export default InputField;

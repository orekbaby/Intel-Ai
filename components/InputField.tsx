// InputField component
import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";

interface InputFieldProps {
  label: string;
  placeholder: string;
  value: string; // Define value prop
  onChange: (value: string) => void; // Define onChange handler in props
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  placeholder,
  value,
  onChange, // Destructure onChange from props
}) => {
  const [isFilled, setIsFilled] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(true);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    onChange(newValue); // Call onChange prop with updated value
    setIsFilled(newValue.trim() !== "");
  };

  const handleInputBlur = () => {
    setIsEditing(false);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setIsEditing(false);
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
      <div className="flex items-center">
        {isFilled && !isEditing && (
          <div className="flex justify-center items-center w-[16px] h-[16px] rounded-full bg-[#4A6800] mt-2 mr-2">
            <FaCheck className="text-white w-[10px] h-[10px]" />
          </div>
        )}
        {isEditing ? (
          <input
            type="text"
            id="inputField2"
            className="custom-input mt-2 font-[300px] text-sm leading-[22.68px]"
            placeholder={placeholder}
            value={value} // Use value prop for input value
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            onKeyPress={handleKeyPress}
            autoComplete="off" // Disable autocomplete
          />
        ) : (
          <div
            className="text-white font-semibold text-sm leading-[22.48px] mt-2 cursor-pointer"
            onMouseEnter={handleClick}
          >
            {value || placeholder}
          </div>
        )}
      </div>
    </div>
  );
};

export default InputField;

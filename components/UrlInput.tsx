import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";

interface UrlInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const UrlInput: React.FC<UrlInputProps> = ({ value, onChange }) => {
  const [error, setError] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isEditing, setIsEditing] = useState<boolean>(true);

  const validateUrl = (value: string) => {
    try {
      const urlObj = new URL(value);
      const hasValidProtocol =
        urlObj.protocol === "http:" || urlObj.protocol === "https:";
      const hasWWW = value.includes("www.");

      return hasValidProtocol && hasWWW;
    } catch (_) {
      return false;
    }
  };

  const handleBlur = () => {
    if (validateUrl(value)) {
      setIsValid(true);
      setError("");
      setIsEditing(false);
    } else {
      setError("Please input a valid URL link (e.g., https://www.example.com)");
      setIsValid(false);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleBlur();
    }
  };

  const handleClick = () => {
    setIsEditing(true);
  };

  return (
    <div className="mb-5 w-full">
      <label
        htmlFor="inputField4"
        className="block text-white font-semibold text-sm leading-[22.48px] mb-3"
      >
        Add Website/URL
      </label>
      <div className="flex items-center" onMouseEnter={handleClick}>
        {isValid && !isEditing && (
          <div className="flex justify-center items-center w-[16px] h-[16px] rounded-full bg-[#4A6800] mt-3 mr-2">
            <FaCheck className="text-white w-[10px] h-[10px]" />
          </div>
        )}
        {isEditing ? (
          <input
            type="text"
            id="inputField4"
            className="custom-input mt-2 font-[300px] text-sm leading-[22.68px] pr-10 bg-transparent"
            placeholder=""
            value={value}
            onChange={onChange}
            onBlur={handleBlur}
            onKeyPress={handleKeyPress}
            autoComplete="off" // Disable autocomplete
            required
          />
        ) : (
          <div className="text-white font-semibold text-sm leading-[22.48px] mt-2 cursor-pointer">
            {value || "Add Website/URL"}
          </div>
        )}
      </div>
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </div>
  );
};

export default UrlInput;

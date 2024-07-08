import React, { useState } from "react";
import { FaTelegramPlane, FaDiscord, FaTwitter } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

// interface SocialsItem {
// img: React.ElementType | string;
// name: string;

// }
// const socialMenu: SocialsItem[] = [
//   {
//     img: FaTelegramPlane,
//     name: "Telegram",
//   },

//   {
//     img: FaDiscord,
//     name: "Discord",
//   },

//   {
//     img: FaTwitter,
//     name: "Twitter",
//   },
// ];

const SocialMenu = () => {
  const [selectedOption, setSelectedOption] = useState("telegram");
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false); // Close the dropdown after selection
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="w-[193px] h-[40px] flex justify-between items-center px-4 rounded-[10px] bg-[#1D1D1D] mb-5">
        <div
          className="w-full h-full flex justify-between items-center px-4 rounded-[10px] cursor-pointer"
          onClick={toggleDropdown}
        >
          <div className="flex gap-2 items-center">
            {selectedOption === "telegram" && (
              <div className="w-[14px] h-[14px] rounded-full bg-[#2B6AFF] flex justify-center items-center">
                <FaTelegramPlane className="w-[10px] h-[10px]" />
              </div>
            )}
            {selectedOption === "discord" && (
              <div className="w-[14px] h-[14px] rounded-full bg-[#7289DA] flex justify-center items-center">
                <FaDiscord className="w-[10px] h-[10px]" />
              </div>
            )}
            {selectedOption === "twitter" && (
              <div className="w-[14px] h-[14px] rounded-full bg-[#1DA1F2] flex justify-center items-center">
                <FaTwitter className="w-[10px] h-[10px]" />
              </div>
            )}
            <p className="font-normal text-xs leading-[12.48px]">
              {selectedOption === "telegram" && "Telegram"}
              {selectedOption === "discord" && "Discord"}
              {selectedOption === "twitter" && "Twitter"}
            </p>
          </div>
          <IoIosArrowDown className="w-[15px] h-[15px]" />
        </div>
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-[#1D1D1D] shadow-md rounded-b-[10px] mt-1">
            <div
              className="px-4 py-2 cursor-pointer hover:bg-gray-700"
              onClick={() => handleOptionChange("telegram")}
            >
              <div className="flex gap-2 items-center">
                <div className="w-[14px] h-[14px] rounded-full bg-[#2B6AFF] flex justify-center items-center">
                  <FaTelegramPlane className="w-[10px] h-[10px]" />
                </div>
                <p className="font-normal text-xs leading-[12.48px]">
                  Telegram
                </p>
              </div>
            </div>
            <div
              className="px-4 py-2 cursor-pointer hover:bg-gray-700"
              onClick={() => handleOptionChange("discord")}
            >
              <div className="flex gap-2 items-center">
                <div className="w-[14px] h-[14px] rounded-full bg-[#7289DA] flex justify-center items-center">
                  <FaDiscord className="w-[10px] h-[10px]" />
                </div>
                <p className="font-normal text-xs leading-[12.48px]">Discord</p>
              </div>
            </div>
            <div
              className="px-4 py-2 cursor-pointer hover:bg-gray-700"
              onClick={() => handleOptionChange("twitter")}
            >
              <div className="flex gap-2 items-center">
                <div className="w-[14px] h-[14px] rounded-full bg-[#1DA1F2] flex justify-center items-center">
                  <FaTwitter className="w-[10px] h-[10px]" />
                </div>
                <p className="font-normal text-xs leading-[12.48px]">Twitter</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SocialMenu;

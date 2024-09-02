"use client";
import React, { useEffect, useRef, useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";
import { FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";
import { CiPaperplane } from "react-icons/ci";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  aiResponse,
  chipsButton,
  userInput,
  userInput2,
  userInput3,
} from "@/utils/mockData";
import SocialMenu from "./SocialMenu";
interface DialogData2Props {
  onCompleteSimulation: () => void;
}

const DialogData2: React.FC<DialogData2Props> = ({ onCompleteSimulation }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [conversation, setConversation] = useState<any[]>([]);
  const [promptCount, setPromptCount] = useState<number>(0);
  const [inputValue, setInputValue] = useState<string>("");
  const latestMessageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (latestMessageRef.current) {
      latestMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [conversation]);

  const handleButtonClick = (index: number) => {
    if (promptCount < 15) {
      let newUserPrompts: any[] = [];
      if (index === 0) {
        newUserPrompts = userInput;
      } else if (index === 1) {
        newUserPrompts = userInput2;
      } else if (index === 2) {
        newUserPrompts = userInput3;
      }

      const newConversation = [
        ...conversation,
        ...newUserPrompts.map((prompt: any) => ({
          user: prompt,
          ai: aiResponse[0],
        })),
      ];

      setConversation(newConversation);
      setPromptCount(newConversation.length);
      setActiveIndex(index === activeIndex ? null : index);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSendPrompt = () => {
    if (inputValue.trim() !== "" && promptCount < 15) {
      const newUserPrompt = {
        question: inputValue,
        time: "Now",
        user: "You",
        image: "/avatar.png",
      };
      const newAiResponse = {
        response:
          "With a commitment to providing tools for investment, asset organization, and management in one convenient platform, GetEquity ensures a safe and efficient investment experience for accredited investors, from high-net-worth individuals to industry veterans.",
        aiImage: "/glow-img.png",
        name: " Intel",
        span: "ai",
      };

      const newConversation = [
        ...conversation,
        { user: newUserPrompt, ai: newAiResponse },
      ];

      setConversation(newConversation);
      setPromptCount(promptCount + 1);
      setInputValue("");
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSendPrompt();
    }
  };

  return (
    <>
      <div className="relative w-full md:w-full lg:w-full h-[100vh] overflow-y-auto scrollbar-hide outline-0 mb-5 pt-20 pb-20">
        <SocialMenu />

        <div className="bg-[#181818] px-6 rounded-[20px]">
          <div className="flex w-full h-[60px] bg-[#1B1B1B] rounded-[20px] px-8 mb-3 items-center justify-between">
            <p className="font-normal text-left text-sm leading-[14.56px] text-[#858585]">
              Simulation workspace
            </p>
            <div className="w-[110px] h-[40px] flex justify-center items-center text-center rounded-[10px] bg-[#131313]">
              <p className="font-normal text-sm leading-[14.65px]">
                {promptCount}
                <span className="font-normal text-sm leading-[14.65px] text-[#3C3C3C]">
                  /15 prompts
                </span>
              </p>
            </div>
          </div>
          {/* chips options */}
          <div className="flex justify-center gap-0 md:gap-1 lg:gap-1 xl:gap-2 2xl:gap-2 items-center mb-14 px-6">
            {chipsButton?.map((row, index) => (
              <div
                key={index}
                className={`relative w-fit rounded-[8px] p-[1px] ${
                  activeIndex === index
                    ? "bg-gradient-to-r from-[rgba(3,255,163,0.9)] to-[rgba(127,86,217,0.9)]"
                    : ""
                }`}
              >
                <Button
                  key={index}
                  className={`w-[126px] md:w-[149px] lg:w-[149px] xl:w-[149px] 2xl:w-[163px] h-[37px] flex justify-center items-center rounded-[8px] py-2 px-6 font-medium text-[12.76px] bg-[#2C2C2C]`}
                  onClick={() => handleButtonClick(index)}
                >
                  {row.button}
                </Button>
              </div>
            ))}
          </div>
          {/* conversation section */}
          {conversation?.map((entry, index) => (
            <div key={index}>
              <div className="flex justify-end mb-8 relative">
                <div className="">
                  <div className="w-[183px] md:w-[264px] lg:w-[264px] xl:w-[270px] 2xl:w-[274px] h-[53px] rounded-[20px] bg-[#696969] px-4 py-2">
                    <h5 className="font-normal text-xs mb-1">
                      {entry.user.question}
                    </h5>
                    <p className="font-normal text-[10px] text-[#939393]">
                      {entry.user.time}
                    </p>
                  </div>
                  <div className="flex justify-center items-center bg-[#2D2D2D] border-[3px] border-[#181818] w-[49px] h-[28px] rounded-[20px] absolute right-7 bottom-[-15%]">
                    <p className="font-normal text-xs">{entry.user.user}</p>
                  </div>
                  <div className="absolute bottom-[-10%] right-0">
                    <Image
                      src={entry.user.image}
                      width={28}
                      height={28}
                      alt="user-img"
                    />
                  </div>
                </div>
              </div>

              <div className="relative mb-8">
                <div className="w-[339px] h-[120px] md:w-[375px] lg:w-[375px] xl:w-[380px] 2xl:w-[385px] md:h-[126px] lg:h-[126px] rounded-[20px] bg-[#2D2D2D] px-3 py-2">
                  <p className="font-normal text-xs leading-[16.48px]">
                    {entry.ai.response}
                  </p>
                </div>
                <div className="flex gap-1 items-center relative bottom-[2%]">
                  <div className="">
                    <Image
                      src={entry.ai.aiImage}
                      width={28}
                      height={28}
                      alt="ai-img"
                    />
                  </div>
                  <div className="flex justify-center items-center bg-[#2D2D2D] border-[3px] border-[#181818] w-[57px] h-[28px] rounded-[20px]">
                    <p className="font-normal text-xs">
                      {entry.ai.name}
                      <span className="font-black text-xs text-[#03FFA3]">
                        {entry.ai.span}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div ref={latestMessageRef} />
          {/* conversation section ends here */}

          {/* like section starts */}
          <div className="flex gap-2 pt-10 md:pt-5 lg:pt-5">
            <div className="w-[26px] h-[26px] rounded-full bg-[#2D2D2D] flex justify-center items-center">
              <FaRegThumbsUp className="text-[#8E8E8E] w-[14px] h-[14px]" />
            </div>
            <div className="w-[26px] h-[26px] rounded-full bg-[#2D2D2D] flex justify-center items-center">
              <FaRegThumbsDown className="text-[#8E8E8E] w-[14px] h-[14px]" />
            </div>
          </div>
          {/* ends here */}

          {/* input box and send button section */}

          <div className="fixed pb-16 bg-[#181818] w-full h-fit bottom-0 left-0 pt-5 md:pt-0 lg:pt-0">
            <div className="flex justify-center items-center gap-2 md:gap-4 lg:gap-4 xl:gap-4 2xl:gap-4">
              <div className="pl-2 md:pl-0 lg:pl-0">
                <input
                  type="text"
                  id="inputField2"
                  className="text-input pt-1 font-[300px] text-sm leading-[22.68px]"
                  placeholder="Ask any question"
                  value={inputValue}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyDown}
                  autoComplete="off"
                />
              </div>
              <Button
                className="w-[60px] h-[60px] rounded-[20px] bg-[#03FFA3] flex justify-center items-center"
                onClick={handleSendPrompt}
              >
                <CiPaperplane className="w-[26px] h-[26px] text-black" />
              </Button>
            </div>

            {/* stimulate your telegram button */}

            <div className="flex justify-center pt-6 ">
              <div className="flex justify-center items-center pt-1">
                <div className="bg-gradient-to-r from-[rgba(3,255,163,.9)] to-[rgba(127,86,217,.9)] w-fit rounded-[66px] py-[2px] px-[2px] shadow-drop">
                  <Button
                    className="bg-gradient-to-r from-[#3A3A3A] to-[#000000] flex gap-2 items-center justify-center ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-800 hover:scale-95 dark:text-secondary text-white transition ease-in-out delay-150 duration-300 h-10 w-[177px] rounded-[66px] hover:bg-[#0B0F16] font-normal text-xs"
                    onClick={onCompleteSimulation}
                  >
                    Complete Simulation
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DialogData2;

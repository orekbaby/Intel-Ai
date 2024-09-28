"use client"
import React, { useState } from 'react'
import { Button } from "./ui/button";
import { MdOutlineContentCopy } from "react-icons/md";
import { IoMdCheckmark } from "react-icons/io";
import { IoBulbOutline } from "react-icons/io5";
import { CiMenuKebab } from "react-icons/ci";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { onboard } from '@/assets';
import Image from "next/image";
import { FaArrowUp } from 'react-icons/fa';


interface StrategyButtonProps {
  areButtonsVisible: boolean;
  isDialogOpen: boolean;
  setIsDialogOpen: (open: boolean) => void;
  hasRequested: boolean;
  setHasRequested: (requested: boolean) => void;
  handleFinalizeStrategyClick: () => void;
  handleContinueChatting: () => Promise<void>;
  handleQuickStrategyClick: () => Promise<void>;
  isQuickStrategyClicked: boolean;
  setIsQuickStrategyClicked: (clicked: boolean) => void; // Changed to function
  handleClearChat: () => void;
  isInputVisible: boolean;
  setIsInputVisible: (visible: boolean) => void;
  text: string;
  setText: (text: string) => void;
  handleSendButtonClick: () => Promise<void>;
  handleKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => Promise<void>;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setAreButtonsVisible: (visible: boolean) => void;
}

const StrategyButton: React.FC<StrategyButtonProps> = ({
  areButtonsVisible,
  isDialogOpen,
  setIsDialogOpen,
  hasRequested,
  setHasRequested,
  handleFinalizeStrategyClick,
  handleContinueChatting,
  handleQuickStrategyClick,
  handleClearChat,
  isInputVisible,
  setIsInputVisible,
  isQuickStrategyClicked,
  setIsQuickStrategyClicked,
  handleInputChange,
  text,
  setText,
  handleSendButtonClick,
  handleKeyDown,
  setAreButtonsVisible
    
    
}) => {
   
  return (
    <>
  
    
    <div className="flex justify-between items-center pb-2 md:bg-[#1F1F1F] lg:bg-[#1F1F1F] rounded-md">
      {/* Left-aligned Buttons */}
      <div className="flex space-x-4">
        {areButtonsVisible && (
          <Dialog open={isDialogOpen} onOpenChange={(isOpen) => setIsDialogOpen(isOpen)}>
            <DialogTrigger>
              <button
                className={`flex items-center justify-center w-[77px] h-[27px] text-[#0d0d0d] bg-white font-medium text-xs leading-[12.48px] rounded-[24px] py-[10px] px-3 ${!hasRequested ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={!hasRequested}
                onClick={() => setIsDialogOpen(true)}
              >
                <div className="flex items-center">
                  <div className="w-[14px] h-[14px] bg-green-500 rounded-[4px] flex justify-center items-center mr-2">
                    <IoMdCheckmark className="text-white w-[12px] h-[12px]" />
                  </div>
                  <span>Approve</span>
                </div>
              </button>
            </DialogTrigger>
            <DialogContent className="px-4 py-4 w-[90%] sm:w-[80%] md:w-[75%] lg:w-[390px] max-w-full border-none h-auto md:h-[325px] bg-[#181818] rounded-[20px]">
  <div className="mx-auto">
    <Image
      width={120}
      height={120}
      src={onboard}
      className="mx-auto mb-5 pt-5"
      alt=""
    />
    <h3 className="font-medium text-center text-[18px] sm:text-[20px] leading-[24px] sm:leading-[26px] w-full mx-auto mb-4">
      Great Job!
    </h3>
    <p className="font-medium text-sm mx-auto text-center text-[#C1C1C1] leading-[16.8px] mb-5">
      Now, click on &quot;Finalize Strategy&quot; button to get results
    </p>
    <button
      className="bg-white items-center flex justify-center text-center 
        text-xs font-normal ring-offset-white focus-visible:outline-none
        text-[#0D0D0D] h-10 w-full sm:w-[326px] rounded-[66px] mx-auto shadow-drop2"
      onClick={handleFinalizeStrategyClick}
    >
      Finalize Strategy
    </button>
  </div>
</DialogContent>

          </Dialog>
        )}
       
         {areButtonsVisible && (
          <button className="w-auto h-[28px] flex justify-center items-center rounded-[24px] bg-[#4C4C4C] border border-[#707070] text-white text-medium text-xs leading-[12.48px] py-[10px] px-4" onClick={handleContinueChatting}>
            Continue Chatting
          </button>
        )}
      </div>
      <div>
        {isQuickStrategyClicked ? (
          <button
            className="flex items-center justify-center w-[53px] h-[28px] rounded-[24px] bg-[#0D0D0D] text-white text-medium text-xs leading-[12.48px] py-[10px] px-4"
            onClick={handleClearChat}
          >
            Clear
          </button>
        ) : (
          <button
            className="flex items-center justify-center h-[28px] rounded-[24px] border border-[#3A3939] text-white text-medium text-xs leading-[12.48px] py-[10px] px-4"
            onClick={handleQuickStrategyClick}
          >
            Quick Strategy
            <div className="flex items-center text-white text-l">
              💡
            </div>
          </button>
        )}
      </div>
    </div>
    {isInputVisible && (
       <div className="flex items-center justify-between w-full h-[48px] px-6 bg-[#1F1F1F] border-t border-[#2B2B2B] pt-8 pb-8 [rounded-[16px]">
        <input
            type="text"
            placeholder="What is on your mind?"
            value={text}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            className="flex-1 input-area bg-transparent border-none outline-none font-normal text-xs italic text-white placeholder-[#707070]"
          />
        <div className="absolute bottom-8 right-7 block md:hidden lg:hidden">
          <button
            className="flex justify-center items-center w-[27px] h-[27px] rounded-full bg-[#03ffa3]"
            onClick={handleSendButtonClick}
          >
            <FaArrowUp className="w-[16px] h-[14px] text-black" />
          </button>
        </div>
        <div className="hidden md:block lg:block">
          <button
            className="flex justify-center items-center w-[27px] h-[27px] rounded-full bg-[#03ffa3]"
            onClick={handleSendButtonClick}
          >
            <FaArrowUp className="w-[16px] h-[14px] text-black" />
          </button>
        </div>
      </div>
    )}

    
  
    </>
  )
}

export default StrategyButton
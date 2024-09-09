"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FaCircle } from "react-icons/fa";
import { ring } from "@/assets";

interface ModalState {
  newBullet: string;
  bullets: string[];
  showSaveMessage: boolean;
}

interface AccordionProps {
  index: number;
  row: any;
  optionsKey: string;
  modalStates: ModalState[];
  handleTextareaChange: (index: number, value: string) => void;
  handleSave: (index: number) => void;
}

const AccordionComponent: React.FC<AccordionProps> = ({
  index,
  row,
  optionsKey,
  modalStates,
  handleTextareaChange,
  handleSave,
}) => {
  return (
    <Accordion
      className="w-full md:w-[510px] lg:w-[510px]"
      type="single"
      collapsible
    >
      <AccordionItem
        className="w-full border-none mb-3 md:mb-3 lg:mb-0 px-3"
        value={row.value}
      >
        <AccordionTrigger className="flex gap-3 md:gap-10 lg:gap-10 pr-[8.5%] md:pr-[10%] lg:pr-[10%] border-b border-[#1E1E1E]">
          <p className="text-[13.75px] font-[300] leading-[14.3px]">
            {row[optionsKey]}
          </p>
        </AccordionTrigger>
        <AccordionContent>
          <div className="w-[420px] md:w-[460px] lg:w-[460px] h-auto bg-[#1B1B1B] pt-2 pb-4 px-2 md:px-4 lg:px-4 rounded-bl">
            <h5 className="font-semibold text-sm text-[#f9f9f9] mb-4">
              Instructions:
            </h5>
            <p className="font-normal text-[13px] md:text-sm lg:text-sm leading-[14.56px] text-[#E4E4E4] mb-2">
              Please provide detailed information about the new partnership.
              Include the:
            </p>
            <div className="flex flex-col">
              {modalStates[index].bullets.map((bullet, bulletIndex) => (
                <div className="flex items-center gap-2" key={bulletIndex}>
                  <FaCircle className="text-[#858585] text-[6px]" />
                  <input
                    type="text"
                    value={bullet}
                    readOnly
                    className="bg-transparent border-none outline-none text-[#858585] text-sm italic w-full"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="pt-8 pb-3 px-2 w-auto">
            <div className="relative w-[360px] md:w-[420px] lg:w-[420px] h-[108px] bg-[#0D0D0D] rounded-[12px] border border-[#363636]">
              <textarea
                className="w-full h-[65px] bg-transparent border-none outline-none pt-9 px-4 pb-2 text-[#7B7B7B] font-normal italic text-xs"
                placeholder="Add more information"
                value={modalStates[index].newBullet}
                onChange={(e) => handleTextareaChange(index, e.target.value)}
              />
              <div className="absolute bottom-0 w-full h-[43px] border-t border-[#272727] flex justify-between items-center px-4">
                <Image
                  src={ring}
                  width={18}
                  height={18}
                  alt="textarea-icon"
                  className=""
                />
              </div>
            </div>
          </div>
          <hr className="border-t border-[#222222]" />
          <div
            className={`flex justify-center pt-5 mx-auto items-center pr-12 md:pr-6 lg:pr-6 ${
              optionsKey === "options4" ? "pb-24" : ""
            }`}
          >
            <button
              className="bg-gradient-to-r from-[rgba(3,255,163,.9)] to-[rgba(127,86,217,.9)] flex justify-center gap-1 items-center ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 font-normal focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-800 hover:scale-95 dark:text-secondary text-white transition ease-in-out delay-150 duration-300 h  md:h-10 lg:h-10 w-[325px] md:w-[153px] lg:w-[153px]  rounded-[200px] hover:bg-[#0B0F16] text-xs"
              onClick={() => handleSave(index)}
            >
              Save
            </button>
            <div className="absolute top-[10%] left-[30%] md:left-[35%] lg:left-[35%] text-center mt-2 text-green-500">
              {modalStates[index].showSaveMessage && (
                <div className="bg-white w-[200px] h-auto p-2 rounded-[20px] ">
                  <p className="text-sm font-normal"> Saved successfully!</p>
                </div>
              )}
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionComponent;

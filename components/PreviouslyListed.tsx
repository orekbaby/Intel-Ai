"use client";
import {
  metadappInfo,
  optionTriggers,
  previousListings,
} from "@/utils/mockData";
import React, { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FaCircle } from "react-icons/fa";
import { Button } from "@/components/ui/button";

interface ModalState {
  newBullet: string;
  bullets: string[];
  showSaveMessage: boolean;
}

const PreviouslyListed: React.FC = () => {
  const initialModalStates = previousListings.map((row) => ({
    newBullet: "",
    bullets: [row.bullet1, row.bullet2, row.bullet3, row.bullet4].filter(
      Boolean
    ),
    showSaveMessage: false,
  }));

  const [modalStates, setModalStates] =
    useState<ModalState[]>(initialModalStates);
  const [openModals, setOpenModals] = useState<boolean[]>(
    Array(previousListings.length).fill(false)
  );

  useEffect(() => {
    const savedData = localStorage.getItem("modalStates");
    if (savedData) {
      setModalStates(JSON.parse(savedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("modalStates", JSON.stringify(modalStates));
  }, [modalStates]);

  const handleTextareaChange = (index: number, value: string) => {
    const newModalStates = [...modalStates];
    newModalStates[index].newBullet = value;
    setModalStates(newModalStates);
  };

  const handleSave = (index: number) => {
    const newModalStates = [...modalStates];
    newModalStates[index].showSaveMessage = true;
    setModalStates(newModalStates);
    localStorage.setItem("modalStates", JSON.stringify(newModalStates));
    setTimeout(() => {
      const newModalStatesAfterTimeout = [...newModalStates];
      newModalStatesAfterTimeout[index].showSaveMessage = false;
      setModalStates(newModalStatesAfterTimeout);
      setOpenModals((prev) => {
        const newOpenModals = [...prev];
        newOpenModals[index] = false;
        return newOpenModals;
      });
    }, 2000); // Hide message after 2 seconds
  };

  return (
    <>
      <div className="">
        {previousListings?.map((row, index) => (
          <Dialog
            key={index}
            open={openModals[index]}
            onOpenChange={(isOpen) =>
              setOpenModals((prev) => {
                const newOpenModals = [...prev];
                newOpenModals[index] = isOpen;
                return newOpenModals;
              })
            }
          >
            <DialogTrigger className="cursor-pointer" asChild>
              <div
                className={`flex flex-col text-left gap-2 w-[486px] p-4 ${
                  index === 1 ? "bg-[#0d0d0d]" : "bg-[#131313]"
                } border-b border-[#131313]`}
              >
                <div className="">
                  <h5 className="font-medium text-[14px] leading-[14.56px] mb-2">
                    {row.projectName}
                  </h5>
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="absolute top-[55%] w-[486px] h-auto overflow-y-auto scrollbar-hide border-0 outline-none">
              <div className="w-full h-auto bg-[#131313] border-b border-[#131313] rounded-[20px] pb-10">
                <div className="bg-[#101010] border-[#181818] border-b px-4 py-[10px] w-[460px] h-[47px] mb-3">
                  <h5 className="font-semibold text-sm text-[14.56px]">
                    {row.projectTitle}
                    <span className="font-bold text-sm leading-[14.56px] ml-2">
                      {row.projectSpan}
                    </span>
                  </h5>
                </div>
                <p className="font-[300] italic text-sm leading-[14.56px] pb-3 px-3">
                  {row.instructions}
                </p>

                {/* Render accordion content dynamically */}
                <Accordion
                  className="w-full md:w-[510px] lg:w-[510px]"
                  type="single"
                  collapsible
                >
                  <AccordionItem
                    className="w-full border-none mb-3 md:mb-3 lg:mb-0 px-3"
                    value={row.value}
                  >
                    <AccordionTrigger className="flex gap-10 pr-[10%] border-b border-[#1E1E1E]">
                      <p className="text-[9px] md:text-[13.75px] lg:text-[13.75px] font-[300] leading-[14.3px]">
                        {row.options1}
                      </p>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="w-[460px] h-auto bg-[#1B1B1B] pt-2 pb-4 px-4 rounded-bl">
                        <h5 className="font-semibold text-sm text-[#f9f9f9] mb-4">
                          Instructions:
                        </h5>
                        <p className="font-normal text-sm leading-[14.56px] text-[#E4E4E4] mb-2">
                          Please provide detailed information about the new
                          partnership. Include the:
                        </p>
                        <div className="flex flex-col">
                          {modalStates[index].bullets.map(
                            (bullet, bulletIndex) => (
                              <div
                                className="flex items-center gap-2"
                                key={bulletIndex}
                              >
                                <FaCircle className="text-[#858585] text-[6px]" />
                                <input
                                  type="text"
                                  value={bullet}
                                  readOnly
                                  className="bg-transparent border-none outline-none text-[#858585] text-sm italic w-full"
                                />
                              </div>
                            )
                          )}
                        </div>

                        {/* Text area starts here */}
                      </div>
                      <div className="pt-8 pb-3 px-2 w-auto">
                        <div className="relative w-[420px] h-[108px] bg-[#0D0D0D] rounded-[12px] border border-[#363636]">
                          <textarea
                            className="w-full h-[65px] bg-transparent border-none outline-none pt-9 px-4 pb-2 text-[#7B7B7B] font-normal italic text-xs"
                            placeholder="Add more information"
                            value={modalStates[index].newBullet}
                            onChange={(e) =>
                              handleTextareaChange(index, e.target.value)
                            }
                          />
                          <div className="absolute bottom-0 w-full h-[43px] border-t border-[#272727] flex justify-between items-center px-4">
                            <img
                              src="/ring.png"
                              width={18}
                              height={18}
                              alt="textarea-icon"
                              className=""
                            />
                          </div>
                        </div>
                      </div>
                      <hr className="border-t border-[#222222]" />
                      {/* Save button */}
                      <div className="flex justify-center pt-5 mx-auto items-center">
                        <button
                          className="bg-gradient-to-r from-[rgba(3,255,163,.9)] to-[rgba(127,86,217,.9)] flex justify-center gap-1 items-center ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 font-normal focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-800 hover:scale-95 dark:text-secondary text-white transition ease-in-out delay-150 duration-300 h-10 w-[153px] rounded-[200px] hover:bg-[#0B0F16] text-xs"
                          onClick={() => handleSave(index)}
                        >
                          Save
                        </button>
                        <div className="absolute top-[50%] left-[35%] text-center mt-2 text-green-500">
                          {modalStates[index].showSaveMessage && (
                            <div className="bg-white w-[200px] h-auto p-4 rounded-[20px] ">
                              <p className="text-sm font-normal">
                                {" "}
                                Saved successfully!
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                {/* 
                accordion2 */}

                <Accordion
                  className="w-full md:w-[510px] lg:w-[510px]"
                  type="single"
                  collapsible
                >
                  <AccordionItem
                    className="w-full border-none mb-3 md:mb-3 lg:mb-0 px-3"
                    value={row.value}
                  >
                    <AccordionTrigger className="flex gap-10 pr-[10%] border-b border-[#1E1E1E]">
                      <p className="text-[9px] md:text-[13.75px] lg:text-[13.75px] font-[300] leading-[14.3px]">
                        {row.options2}
                      </p>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="w-[460px] h-auto bg-[#1B1B1B] pt-2 pb-4 px-4 rounded-bl">
                        <h5 className="font-semibold text-sm text-[#f9f9f9] mb-4">
                          Instructions:
                        </h5>
                        <p className="font-normal text-sm leading-[14.56px] text-[#E4E4E4] mb-2">
                          Please provide detailed information about the new
                          partnership. Include the:
                        </p>
                        <div className="flex flex-col">
                          {modalStates[index].bullets.map(
                            (bullet, bulletIndex) => (
                              <div
                                className="flex items-center gap-2"
                                key={bulletIndex}
                              >
                                <FaCircle className="text-[#858585] text-[6px]" />
                                <input
                                  type="text"
                                  value={bullet}
                                  readOnly
                                  className="bg-transparent border-none outline-none text-[#858585] text-sm italic w-full"
                                />
                              </div>
                            )
                          )}
                        </div>

                        {/* Text area starts here */}
                      </div>
                      <div className="pt-8 pb-3 px-2 w-auto">
                        <div className="relative w-[420px] h-[108px] bg-[#0D0D0D] rounded-[12px] border border-[#363636]">
                          <textarea
                            className="w-full h-[65px] bg-transparent border-none outline-none pt-9 px-4 pb-2 text-[#7B7B7B] font-normal italic text-xs"
                            placeholder="Add more information"
                            value={modalStates[index].newBullet}
                            onChange={(e) =>
                              handleTextareaChange(index, e.target.value)
                            }
                          />
                          <div className="absolute bottom-0 w-full h-[43px] border-t border-[#272727] flex justify-between items-center px-4">
                            <img
                              src="/ring.png"
                              width={18}
                              height={18}
                              alt="textarea-icon"
                              className=""
                            />
                          </div>
                        </div>
                      </div>
                      <hr className="border-t border-[#222222]" />
                      {/* Save button */}
                      <div className="flex justify-center pt-5 mx-auto items-center">
                        <button
                          className="bg-gradient-to-r from-[rgba(3,255,163,.9)] to-[rgba(127,86,217,.9)] flex justify-center gap-1 items-center ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 font-normal focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-800 hover:scale-95 dark:text-secondary text-white transition ease-in-out delay-150 duration-300 h-10 w-[153px] rounded-[200px] hover:bg-[#0B0F16] text-xs"
                          onClick={() => handleSave(index)}
                        >
                          Save
                        </button>
                        <div className="absolute top-[50%] left-[35%] text-center mt-2 text-green-500">
                          {modalStates[index].showSaveMessage && (
                            <div className="bg-white w-[200px] h-auto p-4 rounded-[20px] ">
                              <p className="text-sm font-normal">
                                {" "}
                                Saved successfully!
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                {/* 3rd accordion */}
                <Accordion
                  className="w-full md:w-[510px] lg:w-[510px]"
                  type="single"
                  collapsible
                >
                  <AccordionItem
                    className="w-full border-none mb-3 md:mb-3 lg:mb-0 px-3"
                    value={row.value}
                  >
                    <AccordionTrigger className="flex gap-10 pr-[10%] border-b border-[#1E1E1E]">
                      <p className="text-[9px] md:text-[13.75px] lg:text-[13.75px] font-[300] leading-[14.3px]">
                        {row.options3}
                      </p>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="w-[460px] h-auto bg-[#1B1B1B] pt-2 pb-4 px-4 rounded-bl">
                        <h5 className="font-semibold text-sm text-[#f9f9f9] mb-4">
                          Instructions:
                        </h5>
                        <p className="font-normal text-sm leading-[14.56px] text-[#E4E4E4] mb-2">
                          Please provide detailed information about the new
                          partnership. Include the:
                        </p>
                        <div className="flex flex-col">
                          {modalStates[index].bullets.map(
                            (bullet, bulletIndex) => (
                              <div
                                className="flex items-center gap-2"
                                key={bulletIndex}
                              >
                                <FaCircle className="text-[#858585] text-[6px]" />
                                <input
                                  type="text"
                                  value={bullet}
                                  readOnly
                                  className="bg-transparent border-none outline-none text-[#858585] text-sm italic w-full"
                                />
                              </div>
                            )
                          )}
                        </div>

                        {/* Text area starts here */}
                      </div>
                      <div className="pt-8 pb-3 px-2 w-auto">
                        <div className="relative w-[420px] h-[108px] bg-[#0D0D0D] rounded-[12px] border border-[#363636]">
                          <textarea
                            className="w-full h-[65px] bg-transparent border-none outline-none pt-9 px-4 pb-2 text-[#7B7B7B] font-normal italic text-xs"
                            placeholder="Add more information"
                            value={modalStates[index].newBullet}
                            onChange={(e) =>
                              handleTextareaChange(index, e.target.value)
                            }
                          />
                          <div className="absolute bottom-0 w-full h-[43px] border-t border-[#272727] flex justify-between items-center px-4">
                            <img
                              src="/ring.png"
                              width={18}
                              height={18}
                              alt="textarea-icon"
                              className=""
                            />
                          </div>
                        </div>
                      </div>
                      <hr className="border-t border-[#222222]" />
                      {/* Save button */}
                      <div className="flex justify-center pt-5 mx-auto items-center">
                        <button
                          className="bg-gradient-to-r from-[rgba(3,255,163,.9)] to-[rgba(127,86,217,.9)] flex justify-center gap-1 items-center ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 font-normal focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-800 hover:scale-95 dark:text-secondary text-white transition ease-in-out delay-150 duration-300 h-10 w-[153px] rounded-[200px] hover:bg-[#0B0F16] text-xs"
                          onClick={() => handleSave(index)}
                        >
                          Save
                        </button>
                        <div className="absolute top-[50%] left-[35%] text-center mt-2 text-green-500">
                          {modalStates[index].showSaveMessage && (
                            <div className="bg-white w-[200px] h-auto p-4 rounded-[20px] ">
                              <p className="text-sm font-normal">
                                {" "}
                                Saved successfully!
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                {/* 4th accordion */}

                <Accordion
                  className="w-full md:w-[510px] lg:w-[510px]"
                  type="single"
                  collapsible
                >
                  <AccordionItem
                    className="w-full border-none mb-3 md:mb-3 lg:mb-0 px-3"
                    value={row.value}
                  >
                    <AccordionTrigger className="flex gap-10 pr-[10%] border-b border-[#1E1E1E]">
                      <p className="text-[9px] md:text-[13.75px] lg:text-[13.75px] font-[300] leading-[14.3px]">
                        {row.options4}
                      </p>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="w-[460px] h-auto bg-[#1B1B1B] pt-2 pb-0 px-4 rounded-bl">
                        <h5 className="font-semibold text-sm text-[#f9f9f9] mb-4">
                          Instructions:
                        </h5>
                        <p className="font-normal text-sm leading-[14.56px] text-[#E4E4E4] mb-2">
                          Please provide detailed information about the new
                          partnership. Include the:
                        </p>
                        <div className="flex flex-col">
                          {modalStates[index].bullets.map(
                            (bullet, bulletIndex) => (
                              <div
                                className="flex items-center gap-2"
                                key={bulletIndex}
                              >
                                <FaCircle className="text-[#858585] text-[6px]" />
                                <input
                                  type="text"
                                  value={bullet}
                                  readOnly
                                  className="bg-transparent border-none outline-none text-[#858585] text-sm italic w-full"
                                />
                              </div>
                            )
                          )}
                        </div>

                        {/* Text area starts here */}
                      </div>
                      <div className="pt-8 pb-3 px-2 w-auto">
                        <div className="relative w-[420px] h-[108px] bg-[#0D0D0D] rounded-[12px] border border-[#363636]">
                          <textarea
                            className="w-full h-[65px] bg-transparent border-none outline-none pt-9 px-4 pb-2 text-[#7B7B7B] font-normal italic text-xs"
                            placeholder="Add more information"
                            value={modalStates[index].newBullet}
                            onChange={(e) =>
                              handleTextareaChange(index, e.target.value)
                            }
                          />
                          <div className="absolute bottom-0 w-full h-[43px] border-t border-[#272727] flex justify-between items-center px-4">
                            <img
                              src="/ring.png"
                              width={18}
                              height={18}
                              alt="textarea-icon"
                              className=""
                            />
                          </div>
                        </div>
                      </div>
                      <hr className="border-t border-[#222222]" />
                      {/* Save button */}
                      <div className="flex justify-center pt-5 pb-20 mx-auto items-center">
                        <button
                          className="bg-gradient-to-r from-[rgba(3,255,163,.9)] to-[rgba(127,86,217,.9)] flex justify-center gap-1 items-center ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 font-normal focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-800 hover:scale-95 dark:text-secondary text-white transition ease-in-out delay-150 duration-300 h-10 w-[153px] rounded-[200px] hover:bg-[#0B0F16] text-xs"
                          onClick={() => handleSave(index)}
                        >
                          Save
                        </button>
                        <div className="absolute top-[50%] left-[35%] text-center mt-2 text-green-500">
                          {modalStates[index].showSaveMessage && (
                            <div className="bg-white w-[200px] h-auto p-4 rounded-[20px] ">
                              <p className="text-sm font-normal">
                                {" "}
                                Saved successfully!
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </>
  );
};

export default PreviouslyListed;

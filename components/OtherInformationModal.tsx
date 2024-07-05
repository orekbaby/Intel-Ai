"use client";
import React, { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { informationModal } from "@/utils/mockData";
import Image from "next/image";

interface ModalState {
  newBullet: string;
  bullets: string[];
  showSaveMessage: boolean;
}

import { CiPaperplane } from "react-icons/ci";
import { FaCircle } from "react-icons/fa";

const OtherInformationModal: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>("today");
  const [modalStates, setModalStates] = useState<ModalState[]>(
    informationModal.map((row) => ({
      newBullet: "",
      bullets: [],
      showSaveMessage: false,
    }))
  );

  const options = [
    "Today",
    "26 June 2024",
    "1 week",
    "1 month",
    "5 days",
    // Add more options as needed
  ];

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
  };

  const handleTextareaChange = (index: number, value: string) => {
    const newModalStates = [...modalStates];
    newModalStates[index].newBullet = value;
    setModalStates(newModalStates);
  };

  const handleSave = (index: number) => {
    const newModalStates = [...modalStates];
    if (newModalStates[index].newBullet.trim() !== "") {
      newModalStates[index].bullets.push(newModalStates[index].newBullet);
      newModalStates[index].newBullet = "";
      newModalStates[index].showSaveMessage = true;
      setModalStates(newModalStates);
      setTimeout(() => {
        const newModalStatesAfterTimeout = [...newModalStates];
        newModalStatesAfterTimeout[index].showSaveMessage = false;
        setModalStates(newModalStatesAfterTimeout);
      }, 2000); // Hide message after 2 seconds
    }
  };

  const handleBulletChange = (
    modalIndex: number,
    bulletIndex: number,
    value: string
  ) => {
    const newModalStates = [...modalStates];
    newModalStates[modalIndex].bullets[bulletIndex] = value;
    setModalStates(newModalStates);
  };

  const handleBulletDelete = (modalIndex: number, bulletIndex: number) => {
    const newModalStates = [...modalStates];
    newModalStates[modalIndex].bullets.splice(bulletIndex, 1);
    setModalStates(newModalStates);
  };

  return (
    <>
      <div className="">
        {informationModal?.map((row, index) => (
          <Dialog key={index}>
            <DialogTrigger className="cursor-pointer" asChild>
              <div className="flex flex-col mb-5 pb-5 border-[rgb(30,30,30)] border-b text-left">
                <div className="bg-[#101010] px-4 py-2 flex border-[#181818] items-center mb-10">
                  <h5 className="font-medium text-sm leading-[14.56px] mb-2">
                    {row.title}
                  </h5>
                </div>
                <div className="px-2">
                  <p className="font-semibold text-[13px] leading-[16.56px] text-white ">
                    {row.content}
                  </p>
                  <p className="font-normal text-sm text-[#4D4D4D]">
                    Add other options
                  </p>
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="absolute top-[50%] max-w-auto w-[460px] h-auto overflow-y-auto scrollbar-hide border-0 outline-none">
              <div className="w-full h-auto bg-[#131313] border-b border-[#131313] rounded-[20px] pb-10">
                <div className="bg-[#101010] border-[#181818] border-b px-4 py-[10px] w-[460px] h-[47px] mb-1">
                  <h5 className="font-semibold text-sm text-[14.56px]">
                    {row.title}
                  </h5>
                </div>

                <div className="w-full">
                  <input
                    type="text"
                    id="inputField"
                    className="text-input3 mt-2 font-normal italic text-xs leading-[22.68px]"
                    placeholder="What do you want to add?"
                  />
                  <hr className="border-b border-[#222222] pt-3" />
                </div>

                <div className="w-[460px] h-auto bg-[#1B1B1B] pt-2 pb-4 px-4 rounded-bl-[20px] rounded-br-[20px]">
                  <h5 className="font-semibold text-sm text-[#f9f9f9] mb-4">
                    {row.instruction}
                  </h5>
                  <p className="font-normal text-sm leading-[14.56px] text-[#E4E4E4] mb-2">
                    {row.insructionText}
                  </p>
                  <div className="flex flex-col">
                    {modalStates[index].bullets.map((bullet, bulletIndex) => (
                      <div
                        className="flex items-center gap-2"
                        key={bulletIndex}
                      >
                        <FaCircle className="text-[#858585] text-[6px]" />
                        <input
                          type="text"
                          value={bullet}
                          onChange={(e) =>
                            handleBulletChange(
                              index,
                              bulletIndex,
                              e.target.value
                            )
                          }
                          onKeyDown={(e) => {
                            if (e.key === "Backspace" && bullet === "") {
                              handleBulletDelete(index, bulletIndex);
                            }
                          }}
                          className="bg-transparent border-none outline-none text-[#858585] text-sm italic w-full"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* text area starts here */}
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
                      <Image
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

                {/* save button */}
                <div className="flex justify-center pt-5 mx-auto items-center">
                  <button
                    onClick={() => handleSave(index)}
                    className="bg-gradient-to-r from-[rgba(3,255,163,.9)] to-[rgba(127,86,217,.9)] flex justify-center gap-1 items-center ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 font-normal focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-800 hover:scale-95 dark:text-secondary text-white transition ease-in-out delay-150 duration-300 h-10 w-[153px] rounded-[200px] hover:bg-[#0B0F16] text-xs"
                  >
                    Save
                  </button>
                </div>
                {modalStates[index].showSaveMessage && (
                  <div className="absolute top-[40%] left-[38%] text-center mt-2 text-green-500">
                    Saved successfully!
                  </div>
                )}
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </>
  );
};

export default OtherInformationModal;

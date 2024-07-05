"use client";
import React, { useEffect, useState, FC } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { announcementsModal } from "@/utils/mockData";
import { FaCircle } from "react-icons/fa";
import Image from "next/image";
import Calendar from "@/components/Calendar";

interface ModalState {
  newBullet: string;
  bullets: string[];
  showSaveMessage: boolean;
}

const AnnouncementModal = () => {
  const [selectedOption, setSelectedOption] = useState<string>("today");
  const [modalStates, setModalStates] = useState<ModalState[]>(
    announcementsModal.map((row) => ({
      newBullet: "",
      bullets: [row.bullet1, row.bullet2, row.bullet3, row.bullet4].filter(
        Boolean
      ),
      showSaveMessage: false,
    }))
  );

  const [showCalendar, setShowCalendar] = useState(false);
  const [savedDate, setSavedDate] = useState<string | null>(
    localStorage.getItem("savedDate")
  );

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedOption(value);
    if (value === "customDate") {
      setShowCalendar(true);
    } else {
      setShowCalendar(false);
    }
  };

  const handleDateSave = (date: string) => {
    setSavedDate(date);
    setSelectedOption(date);
    setShowCalendar(false);
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
      <div className="w-full h-full">
        {announcementsModal?.map((row, index) => (
          <Dialog key={index}>
            <DialogTrigger className="cursor-pointer" asChild>
              <div className="flex flex-col mb-5 pb-5 border-[#1E1E1E] border-b text-left">
                <h5 className="font-semibold text-sm leading-[14.56px] mb-2">
                  {row.title}
                </h5>
                <p className="font-normal text-sm leading-[16.56px] text-[#4D4D4D]">
                  {row.content}
                </p>
              </div>
            </DialogTrigger>
            <DialogContent
              className="absolute top-[52%] max-w-auto w-[460px]
                        h-[90vh] overflow-y-auto scrollbar-hide border-0 outline-none"
            >
              <div className="w-full bg-[#131313] h-auto rounded-[20px] border-b border-[#131313] pb-10">
                <div className="bg-[#101010] border-[#181818] border-b px-4 py-[10px] w-[460px] h-[47px] mb-3">
                  <h5 className="font-semibold text-sm text-[14.56px]">
                    {row.title}
                  </h5>
                </div>
                <div className="px-4 w-auto">
                  <p className="italic text-[13px] font-[300] mb-3">
                    When do you want to inform your community about this
                    information?
                  </p>
                </div>
                <div className="relative mb-5 px-2 w-auto">
                  <div>
                    <select
                      value={selectedOption}
                      onChange={handleOptionChange}
                      className="w-[420px] h-[44px] rounded-[16px] bg-[#2A2A2A] text-white px-4 py-2 outline-none border-none font-[300] text-sm"
                    >
                      <option
                        value="today"
                        className="hover:bg-[#1d1d1d] gap-2 mb-2"
                      >
                        Today
                      </option>
                      <option
                        value="tomorrow"
                        className="hover:bg-[#1d1d1d] gap-2 mb-2"
                      >
                        Tomorrow
                      </option>
                      <option
                        value="thisWeek"
                        className="hover:bg-[#1d1d1d] gap-2 mb-2"
                      >
                        This Week
                      </option>
                      <option
                        value="customDate"
                        className="hover:bg-[#1d1d1d] gap-2 mb-2"
                      >
                        Custom Date
                      </option>
                      {savedDate && (
                        <option
                          value={savedDate}
                          className="hover:bg-[#1d1d1d] gap-2 mb-2"
                        >
                          {savedDate}
                        </option>
                      )}
                    </select>
                    {showCalendar && <Calendar onSave={handleDateSave} />}
                  </div>
                </div>
                <div className="w-[460px] h-auto bg-[#1B1B1B] pt-2 pb-4 px-4 rounded-bl">
                  <h5 className="font-semibold text-sm text-[#f9f9f9] mb-4">
                    Instructions:
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
                {/* Text area starts here */}
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
                {/* Save button */}
                <div className="flex justify-center pt-5 mx-auto items-center">
                  <button
                    onClick={() => handleSave(index)}
                    className="bg-gradient-to-r from-[rgba(3,255,163,.9)] to-[rgba(127,86,217,.9)] flex justify-center gap-1 items-center ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 font-normal focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-800 hover:scale-95 dark:text-secondary text-white transition ease-in-out delay-150 duration-300 h-10 w-[153px] rounded-[200px] hover:bg-[#0B0F16] text-xs"
                  >
                    Save
                  </button>
                </div>
                {modalStates[index].showSaveMessage && (
                  <div className="absolute top-[50%] left-[30%] text-center mt-2 text-green-500">
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

export default AnnouncementModal;

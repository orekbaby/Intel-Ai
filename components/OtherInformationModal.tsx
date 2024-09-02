"use client";
import React, { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { informationModal } from "@/utils/mockData";
import Image from "next/image";



interface ModalState {
  newContent: string;
  showSaveMessage: boolean;
}

const OtherInformationModal: React.FC = () => {
  const [modalStates, setModalStates] = useState<ModalState[]>(
    informationModal.map(() => ({
      newContent: "",
      showSaveMessage: false,
    }))
  );

  const [openModals, setOpenModals] = useState<boolean[]>(
    Array(informationModal.length).fill(false)
  );

  const handleTextareaChange = (index: number, value: string) => {
    const newModalStates = [...modalStates];
    newModalStates[index].newContent = value;
    setModalStates(newModalStates);
  };

  const handleSave = (index: number) => {
    const newModalStates = [...modalStates];

    // Check if the input box (newContent) is empty
    if (newModalStates[index].newContent.trim() === '') {
      // If the input is empty, do not proceed with saving
      return;
    }

    // Save the entered content to local storage
    localStorage.setItem(
      `modalContent_${index}`,
      newModalStates[index].newContent
    );

    // Show the save message
    newModalStates[index].showSaveMessage = true;
    setModalStates(newModalStates);

    // Clear the input area
    newModalStates[index].newContent = '';
    setModalStates(newModalStates);

    // Delay closing the modal by 2 seconds
    setTimeout(() => {
      setOpenModals((prev) => {
        const newOpenModals = [...prev];
        newOpenModals[index] = false;
        return newOpenModals;
      });
    }, 2000);

    // Hide the save message after 2 seconds
    setTimeout(() => {
      const newModalStatesAfterTimeout = [...newModalStates];
      newModalStatesAfterTimeout[index].showSaveMessage = false;
      setModalStates(newModalStatesAfterTimeout);
    }, 2000);
  };

  return (
    <>
      <div className="">
        {informationModal?.map((row, index) => (
          <Dialog
            key={index}
            open={openModals[index]}
            onOpenChange={(isOpen) => {
              setOpenModals((prev) => {
                const newOpenModals = [...prev];
                newOpenModals[index] = isOpen;
                return newOpenModals;
              });
            }}
          >
            <DialogTrigger
              className="cursor-pointer"
              asChild
              onClick={() =>
                setOpenModals((prev) => {
                  const newOpenModals = [...prev];
                  newOpenModals[index] = true;
                  return newOpenModals;
                })
              }
            >
              <div className="flex flex-col mb-5 pb-5 border-[rgb(30,30,30)] border-b text-left hover:bg-[#1d1d1d]">
                <div className="bg-[#101010] px-4 py-1 flex border-[#181818] items-center mb-10">
                  <h5 className="font-medium text-sm leading-[14.56px] mb-2">
                    {row.title}
                  </h5>
                </div>
                <div className="px-2">
                  <p className="font-semibold text-[13px] leading-[16.56px] text-white ">
                    {row.content}
                  </p>
                  <p className="font-normal text-sm text-[#4D4D4D] pt-2">
                    Add other options
                  </p>
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="absolute top-[50%] left-[48%] max-w-auto w-[430px] md:w-[460px] lg:w-[460px] h-auto overflow-y-auto overflow-x-hidden scrollbar-hide border-0 outline-none">
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
                <div className="w-[460px] h-auto bg-[#1B1B1B] pt-2 pb-4 px-4 rounded-bl">
                  <h5 className="font-semibold text-sm text-[#f9f9f9] mb-4">
                    Instructions:
                  </h5>
                  <p className="font-normal text-sm w-[80%] leading-[14.56px] text-[#E4E4E4] mb-3">
                    {row.insructionText}
                  </p>
                </div>
                {/* text area starts here */}
                <div className="pt-8 pb-3 px-4 md:px-2 lg:px-2 w-auto">
                  <div className="relative w-[360px] md:w-[420px] lg:w-[420px] h-[108px] bg-[#0D0D0D] rounded-[12px] border border-[#363636]">
                    <textarea
                      className="w-full h-[65px] bg-transparent border-none outline-none pt-9 px-4 pb-2 text-[#7B7B7B] font-normal italic text-xs"
                      placeholder="Add more information"
                      value={modalStates[index].newContent}
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
                <div className="absolute top-[10%] left-[33%] text-center mt-2 text-green-500">
                  {modalStates[index].showSaveMessage && (
                    <div className="bg-white w-[200px] h-auto p-2 rounded-[20px] ">
                      <p className="text-sm font-normal">
                        {" "}
                        Saved successfully!
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </>
  );
};

export default OtherInformationModal;

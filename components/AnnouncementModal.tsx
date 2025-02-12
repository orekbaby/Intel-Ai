"use client";
import React, { useState, FC } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { announcementsModal } from "@/config/mockData";
import { FaCircle } from "react-icons/fa";
import Image from "next/image";
import Calendar from "@/components/Calendar";
import { toast, useToast } from "@/components/ui/use-toast"
import { ToastAction } from "@/components/ui/toast"
import { ring } from "@/assets";
import UploadRing from "./UploadRing";
import { FiLoader } from "react-icons/fi";

interface ModalState {
  textAreaContent: string;
  showSaveMessage: boolean;
}

const AnnouncementModal: FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>("today");
  const [modalStates, setModalStates] = useState<ModalState[]>(
    announcementsModal.map(() => ({
      textAreaContent: "",
      showSaveMessage: false,
    }))
  );
  const [showCalendar, setShowCalendar] = useState(false);
  const [savedDate, setSavedDate] = useState<string | null>(
    localStorage.getItem("savedDate")
  );
  const [isLoading, setIsLoading] = useState(false);

  const [openModals, setOpenModals] = useState<boolean[]>(
    Array(announcementsModal.length).fill(false)
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
    newModalStates[index].textAreaContent = value;
    setModalStates(newModalStates);
  };
  

  const handleSave = (index: number) => {
    const newModalStates = [...modalStates];
  
    // Check if the input box (textAreaContent) is empty
    if (newModalStates[index].textAreaContent.trim() === '' &&  !selectedFile) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "please enter some content before saving.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
      return;
    }
  
    // Save the entered content to local storage
    localStorage.setItem(
      `modalText_${index}`,
      newModalStates[index].textAreaContent
    );
  
    // Clear the input area
    newModalStates[index].textAreaContent = '';
  
    // Show the save message
    setIsLoading(true);
  
    // Hide the save message and close the modal after 2 seconds
    setTimeout(() => {
      const newModalStatesAfterTimeout = [...newModalStates];
     
      setModalStates(newModalStatesAfterTimeout);
  
      // Close the modal
      setOpenModals((prev) => {
        const newOpenModals = [...prev];
        newOpenModals[index] = false;
        setIsLoading(false);
        return newOpenModals;
      });
    }, 3000);
  };
  
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setSelectedFile(file);
  };

  return (
    <div className="w-full h-full">
      
      {announcementsModal?.map((row, index) => (
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
          <DialogTrigger asChild>
            <div
              className="flex flex-col mb-5 pb-5 border-[#1E1E1E] border-b  text-left cursor-pointer hover:bg-[#2d2d2d] gap-3"
              onClick={() =>
                setOpenModals((prev) => {
                  const newOpenModals = [...prev];
                  newOpenModals[index] = true;
                  return newOpenModals;
                })
              }
            >
              <div className="pt-5 rouned-lg">
              <h5 className="font-semibold text-sm leading-[14.56px] mb-2">
                {row.title}
              </h5>
              <p className="font-normal text-sm leading-[16.56px] text-[#4D4D4D]">
                {row.content}
              </p>
              </div>
            </div>
          </DialogTrigger>
          {isLoading ? (
             
             <div className="absolute top-20 left-[20%] flex justify-center items-center">
             <div className="px-8 border-none rounded-[20px] flex justify-center items-center max-w-auto w-[262px] h-[252px] bg-[#181818] mt-10">
               <div className="flex flex-col justify-center items-center">
                 <FiLoader
                   className="w-[48px] h-[48px] text-gray-600 mb-5 animate-spin-fast"
                 />
                 <h3 className="font-medium text-[20px] text-center text-[#C1C1C1] leading-[24px] mb-3">
                   Please wait.....
                 </h3>
                 <p className="font-medium text-center text-sm leading-[14.56px]">
                   Now saving your contents.
                 </p>
               </div>
             </div>
           </div>
           
                 ):(
          <DialogContent
            className="absolute top-[52%] left-[48%] max-w-auto w-[430px] md:w-[460px] lg:w-[460px]
                      h-[90vh] overflow-y-auto overflow-x-hidden scrollbar-hide border-0 outline-none"
          >
            <div className="w-full bg-[#131313] h-auto rounded-[20px] border-b border-[#131313] pb-10 p-6 md:p-2 lg:p-2">
              <div className="bg-[#101010] border-[#181818] border-b px-4 md:px-4 lg:px-4 py-[10px] w-[460px] h-[47px] mb-3">
                <h5 className="font-semibold text-sm text-[14.56px]">
                  {row.title}
                </h5>
              </div>
              <div className="px-4 md:px-4 lg:px-4 w-auto">
                <p className="italic text-[13px] w-[80%] md:w-full lg:w-full font-[300] mb-3">
                  When do you want to inform your community about this
                  information?
                </p>
              </div>
              <div className="relative mb-5 px-2 w-auto">
                <div>
                  <select
                    value={selectedOption}
                    onChange={handleOptionChange}
                    className="w-[350px] md:w-[420px] lg:w-[420px] xl:w-[420px] 2xl:w-[450px] h-[44px] rounded-[16px] bg-[#2A2A2A] text-white px-4 py-2 outline-none border-none font-[300] text-sm"
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
              <div className="w-[420px] h-auto bg-[#1B1B1B] pt-2 pb-4 px-4 rounded-bl">
                <h5 className="font-semibold text-sm text-[#f9f9f9] mb-4">
                  Instructions:
                </h5>
                <p className="font-normal text-sm w-[80%] leading-[16.56px] text-[#E4E4E4] mb-3">
                  {row.insructionText}
                </p>
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2 items-center">
                    <FaCircle className="text-[#858585] text-[6px]" />
                    <p className="font-normal italic text-sm leading-[14.56px] text-[#858585]">
                      {row.bullet1}
                    </p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <FaCircle className="text-[#858585] text-[6px]" />
                    <p className="font-normal italic text-sm leading-[14.56px] text-[#858585]">
                      {row.bullet2}
                    </p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <FaCircle className="text-[#858585] text-[6px]" />
                    <p className="font-normal italic text-sm leading-[14.56px] text-[#858585]">
                      {row.bullet3}
                    </p>
                  </div>
                  {row.bullet4 && (
                    <div className="flex gap-2 items-center">
                      <FaCircle className="text-[#858585] text-[6px]" />
                      <p className="font-normal italic text-sm leading-[14.56px] text-[#858585]">
                        {row.bullet4}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div className="pt-8 pb-3 px-2 w-auto">
                <div className="relative w-[375px] md:w-[420px] lg:w-[420px] h-[108px] bg-[#0D0D0D] rounded-[12px] border border-[#363636]">
                  <textarea
                    className="w-full h-[65px] bg-transparent border-none outline-none pt-9 px-4 pb-2 text-[#f9f9f9] font-normal italic text-xs mb-t"
                    placeholder="Add more information"
                    value={modalStates[index].textAreaContent}
                    onChange={(e) =>
                      handleTextareaChange(index, e.target.value)
                    }
                  />
                  <div className="absolute bottom-0 w-full h-[43px] border-t border-[#272727] flex justify-between items-center px-4">
                  <UploadRing
                value={selectedFile}  // Pass the selected file or null
               onChange={handleFileChange}  // Pass the handler function
                   />
                  </div>
                </div>
              </div>
              <hr className="border-b border-[#222222]" />
              <div className="flex justify-start md:justify-center lg:justify-center pt-5 items-start px-28 md:px-0 lg:px-0 md:items-center lg:items-center w-auto">
                <button
                  onClick={() => handleSave(index)}
                  className="bg-gradient-to-r from-[rgba(3,255,163,.9)] to-[rgba(127,86,217,.9)] flex justify-center gap-1 items-center ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 font-normal focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-800 hover:scale-95 dark:text-secondary text-white transition ease-in-out delay-150 duration-300 h-10 w-[153px] rounded-[200px] hover:bg-[#0B0F16] text-xs"
                >
                  Save
                </button>
              </div>
             
              
             </div>
          </DialogContent>
                 )}
        </Dialog>
      ))}
    </div>
  );
};

export default AnnouncementModal;

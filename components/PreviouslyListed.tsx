"use client";
import {
  metadappInfo,
  optionTriggers,
  previousListings,
} from "@/config/mockData";
import React, { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import AccordionComponent from "./AccordionComponent";
import { toast, useToast } from "@/components/ui/use-toast"
import { ToastAction } from "@/components/ui/toast"
import { FiLoader } from "react-icons/fi";

interface ModalState {
  newBullet: string;
  bullets: string[];
  showSaveMessage: boolean;
}

const PreviouslyListed: React.FC = () => {

  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setSelectedFile(file);
  };


  const initialModalStates = previousListings.map((row) => ({
    newBullet: "",
    bullets: [row.bullet1, row.bullet2, row.bullet3, row.bullet4].filter(Boolean),
    showSaveMessage: false,
  }));

  const [modalStates, setModalStates] = useState<ModalState[]>(initialModalStates);
  const [openModals, setOpenModals] = useState<boolean[]>(Array(previousListings.length).fill(false));
  const [isLoading, setIsLoading] = useState(false);
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
    if (
      !modalStates[index].newBullet &&
      modalStates[index].newBullet.trim() === "" &&
      !selectedFile  // Check if the file is not uploaded
    ) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "Please enter some content and upload a file before saving.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
      return;
    }
    

    const newModalStates = [...modalStates];
  
    localStorage.setItem("modalStates", JSON.stringify(newModalStates));

    newModalStates[index].newBullet = "";
    setModalStates(newModalStates);
    setIsLoading(true);
    setTimeout(() => {
      setOpenModals((prev) => {
        const newOpenModals = [...prev];
        newOpenModals[index] = false;
        setIsLoading(false);
        return newOpenModals;
      });

      const newModalStatesAfterTimeout = [...newModalStates];
      
      setModalStates(newModalStatesAfterTimeout);
    }, 3000);
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
                className="flex flex-col text-left gap-2 w-[486px] p-4 border-b border-[#131313] hover:bg-[#0d0d0d]"
              >
                <div className="">
                  <h5 className="font-medium text-[14px] leading-[14.56px] mb-2">
                    {row.projectName}
                  </h5>
                </div>
              </div>
            </DialogTrigger>
            {isLoading ? (
             
             <div className="absolute top-[-40%] left-[20%] flex justify-center items-center">
         <div className="px-8 border-none rounded-[20px] flex justify-center items-center max-w-auto w-[262px] h-[252px] bg-[#181818] mt-10">
           <div className="mx-auto">
             <FiLoader
             
               className="w-[80px] h-[80px] text-gray-600 mx-auto mb-5 pt-10 bg-[#181818]"
              
             />
             <h3 className="font-medium text-[20px] mx-auto text-center text-[#C1C1C1] leading-[24px] mb-3">
               Please wait.....
             </h3>
             <p className="font-medium text-center text-sm leading-[14.56px] mx-auto">
               Now saving your contents.
             </p>
           </div>
         </div>
         </div>
                 ):(
            <DialogContent className="absolute top-[55%] left-[48%] w-[430px] md:w-[486px] p-6 lg:w-[486px] h-auto overflow-y-auto scrollbar-hide border-0 outline-none overflow-x-hidden">
              <div className="w-full h-auto bg-[#131313] border-b border-[#131313] rounded-[20px] pb-10">
                <div className="bg-[#101010] border-[#181818] border-b pr-6 md:pr-4 lg:pr-4 pl-0 md:pl-4 lg:pl-4 py-[10px] w-[420px] md:w-[460px] lg:w-[460px] h-[47px] mb-3">
                  <h5 className="font-semibold text-sm text-center md:text-left lg:text-left text-[14.56px]">
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
                <AccordionComponent
                  index={index}
                  row={row}
                  optionsKey="options1"
                  modalStates={modalStates}
                  handleTextareaChange={handleTextareaChange}
                  handleSave={handleSave}
                  selectedFile={selectedFile}
                  handleFileChange={handleFileChange}
                />
                <AccordionComponent
                  index={index}
                  row={row}
                  optionsKey="options2"
                  modalStates={modalStates}
                  handleTextareaChange={handleTextareaChange}
                  handleSave={handleSave}
                  selectedFile={selectedFile}
                  handleFileChange={handleFileChange}
                />
                <AccordionComponent
                  index={index}
                  row={row}
                  optionsKey="options3"
                  modalStates={modalStates}
                  handleTextareaChange={handleTextareaChange}
                  handleSave={handleSave}
                  selectedFile={selectedFile}
                  handleFileChange={handleFileChange}
                />
                <AccordionComponent
                  index={index}
                  row={row}
                  optionsKey="options4"
                  modalStates={modalStates}
                  handleTextareaChange={handleTextareaChange}
                  handleSave={handleSave}
                  selectedFile={selectedFile}
                  handleFileChange={handleFileChange}
                />
              </div>
            </DialogContent>
                 )}
          </Dialog>
        ))}
      </div>
    </>
  );
};

export default PreviouslyListed;

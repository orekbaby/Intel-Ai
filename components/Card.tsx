// card.tsx
import React, { useState } from "react";
import Image from "next/image";
import { IoCopyOutline } from "react-icons/io5";
import { Button } from "./ui/button";
import { GoPencil } from "react-icons/go";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import TextEditor from "./TextEditor";
import Calendar2 from "./Calendar2";
import { GlowImg } from "@/assets";

interface CardProps {
  index: number;  
  title: string;
  response: string;
  editorContent: string;
  setEditorContent: (content: string) => void;
  isDialogOpen: boolean;
  setIsDialogOpen: (open: boolean) => void;
  handleEditSave: (index: number) => void; 
  handleCancel: () => void;
  handleCardClick: () => void;
  handlePostClick:() => void;
  selectedCardIndex: number | null; 
  handlePostDirectly: (index: number | null) => void;
  generatedResponses: { [key: number]: { response: string } }; 
  addEditorContent: (date: string, time: string, content: string) => void;
  
  savedSuccessfully: boolean;
  openModal: boolean;
  setOpenModal:(open: boolean) => void;
  setProgress: (index: number) => void; 
  handleSave: () => void;
  closeModal: () => void;
  
}

const Card: React.FC<CardProps> = ({ index, title, response, handleCardClick, addEditorContent, 
  editorContent, setEditorContent, isDialogOpen,
  setIsDialogOpen,
  handleEditSave,
  handleCancel,
  openModal,
  setOpenModal,
  setProgress,
  handleSave,
  closeModal,
  savedSuccessfully,
  selectedCardIndex,
  handlePostDirectly,
  handlePostClick,
  generatedResponses
 
  }) => {
    const [isExpanded, setIsExpanded] = useState(false);
  const [charCount, setCharCount] = useState<number>(0);
  const [charLimitExceeded, setCharLimitExceeded] = useState<boolean>(false);

  const toggleExpanded = () => {
    setIsExpanded((prev) => !prev);
  };
 

  const stripHtmlTags = (html: string) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };

  // Truncate the response to 150 characters
  const truncatedResponse =
    stripHtmlTags(response).length > 150
      ? `${stripHtmlTags(response).slice(0, 120)}...`
      : stripHtmlTags(response);
  return (
    <div className="w-fit md:w-[300px] lg:h-[300px] h-auto pb-2 md:pb-4 lg:pb-4 rounded-[16px] bg-[#252525] px-4 md:px-3 lg:px-3">
  <div className="px-3 py-3 h-[34px] border-b border-[#3D3D3D] mb-5">
    <h5 className="font-medium text-sm leading-[14.56px]">{title}</h5>
  </div>

  {/* Full response for larger screens */}
  <p className="hidden md:flex lg:flex font-normal text-sm leading-[14.56px] mb-2">{response}</p>

  {/* Truncated response for smaller screens */}
  <div className="block md:hidden lg:hidden font-normal text-sm leading-[14.56px] mb-2">
    <span>{isExpanded ? stripHtmlTags(response) : truncatedResponse}</span>
    
    {stripHtmlTags(response).length > 150 && (
      <button
        onClick={toggleExpanded}
        className="inline-block text-[#03ffa3] font-medium text-sm ml-2 border-b border-[#03ffa3] whitespace-nowrap"
      >
        {isExpanded ? "Show Less" : "Show All"}
      </button>
    )}
  </div>

{isExpanded && (
        <div className="block md:hidden lg:hidden pt-3">
          <div className="flex justify-start items-center gap-2 mb-2 md:mb-10 lg:mb-10">
            <Image src={GlowImg} width={24} height={24} alt="image" />
            <div className="w-[25px] flex justify-center items-center rounded-[4px] h-[25px] bg-[#1b1b1b]">
              <IoCopyOutline className="w-[16px] h-[16px]" />
            </div>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger onClick={handleCardClick}>
                <div className="w-[25px] h-[25px] bg-[#434343] flex justify-center items-center rounded-[4px]">
                  <GoPencil className="w-[16px] h-[16px]" />
                </div>
              </DialogTrigger>
              <DialogContent className="absolute top-[52%] left-[48%] max-w-auto w-[430px] md:w-[460px] lg:w-[397px] border-0 outline-none">
                <div className="bg-[#181818] h-auto px-4 py-4">
                  <div className="w-[385px] h-auto border-[#363636] border mb-2">
                    <TextEditor
                      editorContent={editorContent}
                      setEditorContent={setEditorContent}
                      setCharCount={setCharCount}
                    />
                  </div>
                  <p className="text-[10px] leading-[12px] font-300 text-[#858585] mb-3">
                    <span className="text-green-400 text-[10px] leading-[12px] font-300">{editorContent.length}</span>
                    /500 characters
                  </p>
                  <div className="flex justify-center gap-8 items-center">
                    <button
                      className="bg-white flex justify-center gap-1 items-center font-normal h-[40px] w-[125px] rounded-[200px]"
                      onClick={() => handleEditSave(index)}
                    >
                      Save
                    </button>
                    <button
                      className="bg-[#292929] flex justify-center gap-1 items-center text-white h-[40px] w-[125px] rounded-[200px]"
                      onClick={handleCancel}
                    >
                      Cancel
                    </button>
                  </div>
                  {savedSuccessfully && (
                    <div className="mt-2 text-center text-green-400">
                      Saved successfully!
                    </div>
                  )}
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <div className="border-[#303030] border-t h-auto">
            <div className="w-full h-auto gap-4 flex justify-between items-center mb-5 pt-2">
              <Dialog open={openModal} onOpenChange={setOpenModal}>
                <DialogTrigger className="cursor-pointer" asChild>
                  <Button className="w-1/2 md:w-[153px] lg:w-[153px] h-[40px] py-2 px-2 border-[#575757] border rounded-[50px] font-medium text-xs">
                    Schedule Tweet
                  </Button>
                </DialogTrigger>
                <DialogContent className="absolute top-[52%] right-[-80%] px-6 rounded-[20px]">
                  <div className="w-full h-[80vh] overflow-y-auto border-b-transparent">
                    <Calendar2
                      editorContent={editorContent}
                      addEditorContent={addEditorContent}
                      generatedResponses={generatedResponses}
                      setProgress={setProgress}
                      index={index}
                      onSave={handleSave}
                      onCloseModal={closeModal}
                    />
                  </div>
                </DialogContent>
              </Dialog>

              <Button className="w-1/2 md:w-[153px] lg:w-[153px] h-[35px] bg-[#0D0D0D] py-2 px-2 rounded-[50px]" onClick={handlePostClick}>
                Tweet Now
              </Button>
            </div>
          </div>
        </div>
      )}
      <div className="hidden md:flex lg:flex justify-start items-center gap-2 mb-2 md:mb-2 lg:mb-2">
        <Image src={GlowImg} width={24} height={24} alt="image" />
        <div className="w-[25px] flex justify-center items-center rounded-[4px] h-[25px] bg-[#1b1b1b]">
          <IoCopyOutline className="w-[16px] h-[16px]" />
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
  <DialogTrigger onClick={handleCardClick}>
    <div className="w-[25px] h-[25px] bg-[#434343] flex justify-center items-center rounded-[4px]">
      <GoPencil className="w-[16px] h-[16px]" />
    </div>
  </DialogTrigger>
  <DialogContent className="absolute top-[52%] left-[48%] max-w-auto w-[430px] md:w-[460px] lg:w-[397px] border-0 outline-none">
    <div className="bg-[#181818] h-auto px-4 py-4">
      <div className="w-[385px] h-auto border-[#363636] border mb-2">
        <TextEditor 
        editorContent={editorContent} 
        setEditorContent={setEditorContent}
      setCharCount={setCharCount} />
      </div>
      <p className="text-[10px] leading-[12px] font-300 text-[#858585] mb-3">
        <span className="text-green-400 text-[10px] leading-[12px] font-300">{charCount}</span>
        /500 characters
      </p>
      <div className="flex justify-center gap-8 items-center">
        <button
          className="bg-white flex justify-center gap-1 items-center ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 font-normal focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-800 hover:scale-95 dark:text-white text-black transition ease-in-out delay-150 duration-300 h-[40px] md:h-[33px] lg:h-[33px] w-[125px] md:w-[95px] lg:w-[95px] rounded-[200px] hover:bg-[#0B0F16] text-xs"
          onClick={() => handleEditSave(index)} 
        >
          Save
        </button>

        <button
          className="bg-[#292929] flex justify-center gap-1 items-center ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 font-normal focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-800 hover:scale-95 dark:text-secondary transition ease-in-out delay-150 duration-300 h-[40px] md:h-[33px] lg:h-[33px] w-[125px] md:w-[95px] lg:w-[95px] rounded-[200px] hover:bg-[#0B0F16] text-xs text-white"
          onClick={handleCancel}
        >
          Cancel
        </button>
      </div>
      {savedSuccessfully && (
        <div className="mt-2 text-center text-green-400">
          Saved successfully!
        </div>
      )}
    </div>
  </DialogContent>
</Dialog>

      </div>
      <div className="hidden md:flex lg:flex border-[#303030] border-t h-auto">
        <div className="w-full h-auto gap-4 flex justify-between items-center mb-5 pt-2">
          
          <Dialog open={openModal} onOpenChange={setOpenModal}>
                      <DialogTrigger className="cursor-pointer" asChild>
                        <Button
                          className="w-[153px] h-[35px] p-[10px] border-[#575757] border rounded-[50px] font-medium text-xs leading-[12.48px]"
                          onClick={() => setOpenModal(true)}
                        >
            Schedule Tweet
          </Button>
          </DialogTrigger>
          <DialogContent className="absolute top-[52%] right-[-80%] -translate-x-1/2 max-w-auto border-none outline-none px-6 md:px-4 lg:px-4 rounded-[20px]">
          <div className="w-full md:w-full lg:w-full h-[80vh] md:h-[80vh] lg:h-[95vh] overflow-y-auto scrollbar-hide border-b-transparent outline-0">
                          <Calendar2
                            editorContent={editorContent}
                            addEditorContent={addEditorContent}
                            generatedResponses={generatedResponses}
                            setProgress={setProgress}
                            index={index}
                            onSave={handleSave}
                            onCloseModal={closeModal}
                            />
                        </div>
                      </DialogContent>
                    </Dialog>
                    <div className="flex item-center justify-center">
        <Button
  className="className= w-[153px] h-[35px] p-[10px] bg-[#0D0D0D] rounded-[50px] font-medium text-xs leading-[14.56px]"
  onClick={handlePostClick}
>
  Tweet Now
</Button>
  </div>
        </div>
        </div>
        </div>
  );
};

export default Card;

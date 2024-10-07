"use client";
import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import Cookies from "js-cookie";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ContentPosted from "./ContentPosted";
import { useToast } from "@/components/ui/use-toast";
import ScheduleTweet from "./ScheduleTweet";
import Card from "./Card";
import Threads from "./Threads";
import TextEditor from "./TextEditor";
import CopilotToggleButton from "./CopilotToggleButton";
import { FaArrowUp } from "react-icons/fa";
import Calendar2 from "./Calendar2";
import HookList from "./HookList";
import { Progress } from "@/components/ui/progress";
import { maxIndex } from "d3-array";
import ToggleButtonMobile from "./TogleButtonMobile";
import { CiMenuKebab } from "react-icons/ci";
import Drafts from "./Drafts";
import { BiLoaderCircle } from "react-icons/bi";
import { FiLoader } from "react-icons/fi";
interface Response {
  title: string;
  response: string;
  id: number;
  
}

const response: Response[] = [
  {
    id: 1,

    title: "Response1",
    response:
      "Decentralized Finance (DeFi) is revolutionizing the financial world by enabling peer-to-peer transactions without intermediaries like banks. Using blockchain technology, DeFi offers innovative services such as lending, borrowing, and trading with enhanced security and transparency. It's democratizing access to financial tools, empowering users globally. #DeFi #Blockchain #CryptoFinance",
    
  },

  {
    id: 2,
    title: "Response2",
    response:
      "Decentralized Finance (DeFi) is revolutionizing the financial world by enabling peer-to-peer transactions without intermediaries like banks. Using blockchain technology, DeFi offers innovative services such as lending, borrowing, and trading with enhanced security and transparency. It's democratizing access to financial tools, empowering users globally. #DeFi #Blockchain #CryptoFinance",
    
  },

  ];



interface ComposeProps {
  addEditorContent: (date: string, time: string, content: string) => void;

  
}
const Compose: React.FC<ComposeProps> = ({ addEditorContent }) => {
  const handleAddToDraft = (title: string, response: string) => {
    // Add draft logic here
   
  };

  const [isTweetMode, setIsTweetMode] = useState<boolean>(true);
  const [tweetHeading, setTweetHeading] = useState<boolean>(false);
  const [savedDate, setSavedDate] = useState<string | null>(
    localStorage.getItem("savedDate")
  );
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [userInput, setUserInput] = useState<string>("");
  const [threadInput, setThreadInput] = useState<string>("");
  const [threadsText, setThreadsText] = useState<string>("");
  const [copyMessage, setCopyMessage] = useState<string | null>(null);
  const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(null);
  const [generatedResponses, setGeneratedResponses] = useState<Response[]>([]);
  const [typedResponses, setTypedResponses] = useState<string[]>([]);
  const [editorContent, setEditorContent] = useState<string>("");
  const [charCount, setCharCount] = useState<number>(0);
  const [charLimitExceeded, setCharLimitExceeded] = useState<boolean>(false);
  const [selectedContent, setSelectedContent] = useState("Hook type");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [images, setImages] = useState<{ [key: number]: string[] }>({});
  const [isSaving, setIsSaving] = useState(false);
  const [savedSuccessfully, setSavedSuccessfully] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null); 
  const [customContents, setCustomContents] = useState<object[]>([]);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [progress, setProgress] = useState(0); 
  const [postProgress, setPostProgress] = useState(0); 
  const [isScheduling, setIsScheduling] = useState<boolean>(true);
  const [isPosting, setIsPosting] = useState<boolean>(true);
  const [threadsContent, setThreadsContent] = useState<
    Array<{ content: string; count: number; countNum: string }>
  >([]);
  const [isLoading, setIsLoading] = useState(false);

  const [isHookListOpen, setIsHookListOpen] = useState(false);
  const [isClearDialogOpen, setIsClearDialogOpen] = useState(false);

  const handleToggle = () => {
    setIsTweetMode((prev) => !prev);
  };

  const { toast } = useToast();

  const handleSelect = (content: string) => {
    setSelectedContent(content);
    setIsHookListOpen(false); // Close the modal
  };

  const handleEditorChange = (content: string) => {
    setEditorContent(content);
  };

  const clearEditorContent = () => {
    setEditorContent("");
  };

const handleEditSave = (index: number) => {
  const updatedResponses = [...typedResponses];
  
  // Strip HTML tags from the content
  const plainTextContent = editorContent.replace(/<\/?[^>]+(>|$)/g, "");
  
  updatedResponses[index] = plainTextContent;
  setTypedResponses(updatedResponses);

  // Save to localStorage
  localStorage.setItem('typedResponses', JSON.stringify(updatedResponses));

  setSavedSuccessfully(true);
  setTimeout(() => {
      setSavedSuccessfully(false);
      setIsDialogOpen(false);
  }, 2000);
};

  const handleGenerateResponses = () => {
    if (!userInput.trim()) return;

    setGeneratedResponses([]);
    setTypedResponses([]);
    setTweetHeading(true);
    response.forEach((response, index) => {
      setTimeout(() => {
        setGeneratedResponses((prev) => [...prev, response]);
        addTypingEffect(response.response, index);
      }, index * 1000);
    });
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (postProgress === 100) {
      setShowSuccessMessage(true);
      timer = setTimeout(() => {
        setPostProgress(0); 
        setShowSuccessMessage(false);
      }, 3000);
    }

    return () => clearTimeout(timer);
  }, [postProgress]);

  const handleThreads = () => {
    if (!userInput.trim()) return;
    const maxThreadLength = 500; // Adjust this value as needed
    const text = userInput.trim();
    const threads = [];
  
    for (let i = 0; i < text.length; i += maxThreadLength) {
      const chunk = text.slice(i, i + maxThreadLength);
      threads.push({
        content: chunk,
        count: threads.length + 1, // Count of the thread
        countNum: `${i + 1}-${Math.min(i + maxThreadLength, text.length)}`,
      });
    }
  
    // Update state for threads and clear images
    setThreadsContent(threads); // Update threads
   resetImages();// Clear images when new threads are generated
  };

  const handleDivideThread = (index: number) => {
    const thread = threadsContent[index];
    const newContent = thread.content.slice(0, thread.content.length / 2);
    const remainingContent = thread.content.slice(thread.content.length / 2);

    setThreadsContent((prev) => [
      ...prev.slice(0, index),
      { ...thread, content: newContent, count: thread.count },
      {
        content: remainingContent,
        count: thread.count + 1,
        countNum: `${thread.count + 1}`,
      },
      ...prev.slice(index + 1),
    ]);
  };

  const handleAddImage = (index: number, imageUrl: string) => {
    setImages((prev) => ({
      ...prev,
      [index]: [...(prev[index] || []), imageUrl],
    }));
  };
  

  const handleDeleteThread = (index: number) => {
    setThreadsContent((prev) => prev.filter((_, i) => i !== index));
    
    // Remove images associated with the deleted thread
    setImages((prev) => {
      const newImages = { ...prev };
      delete newImages[index]; // Remove the images for the deleted thread
      return newImages;
    });
  };
  
  // Optionally, if you want to ensure images don't reappear when generating threads
  const resetImages = () => {
    setImages({});
  };

  const handleCopyContent = (content: string) => {
    navigator.clipboard
      .writeText(content)
      .then(() => {
        toast({
          description: "Text copied to clipboard.",
        });
      })
      .catch((error) => {
        console.error("Failed to copy text: ", error);
      });
  };

  

  const addTypingEffect = (text: string, index: number) => {
    let i = 0;
    const speed = 10; // typing speed in milliseconds
    const typingEffect = () => {
      if (i < text.length) {
        setTypedResponses((prev) => {
          const newResponses = [...prev];
          newResponses[index] = (newResponses[index] || "") + text.charAt(i);
          return newResponses;
        });
        i++;
        setTimeout(typingEffect, speed);
      }
    };
    typingEffect();
  };

  const handleCancel = () => {
    setIsDialogOpen(false);
  };
  const clearInput = () => {
    setUserInput("");
    setThreadsText("")
    setThreadsContent([]);
    setGeneratedResponses([]);
    setTweetHeading(false);
  };

  // posted content function
  // AddPostedContent function remains the same

  const addPostedContent = (content: string, date: string, time: string) => {
    let currentContent = Cookies.get("postedContents");
    console.log("Current Cookie Content:", currentContent);
  
    let contentArray = currentContent ? JSON.parse(currentContent) : [];
    
    // Add the new content along with the current date and time
    contentArray.push({ content, date, time });
  
    let updatedContent = JSON.stringify(contentArray);
    Cookies.set("postedContents", updatedContent, {
      expires: 7,
      path: "/",
      secure: true,
    });
  };
  
  const handleSave = (content?: string) => {
    const finalContent = content || editorContent;
  
    if (!finalContent) {
      console.log("No content to post");
      return;
    }
  
    // Get the current date and time when posting
    const formattedDate = new Date().toDateString();
    const currentTime = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  
    // Call addPostedContent with the content, date, and time
    addPostedContent(finalContent, formattedDate, currentTime);
  
    setPostProgress(25);
    setTimeout(() => {
      setPostProgress(100);
      setTimeout(() => {
        setShowSuccessMessage(true);
        setTimeout(() => setShowSuccessMessage(false), 3000);
      }, 300);
    }, 3000);
  };
  
  const handlePostDirectly = (index: number | null) => {
    if (index === null) {
      console.error("No card selected to post.");
      return;
    }
  
    const selectedResponse = generatedResponses[index]?.response || "";
    handleSave(selectedResponse); // Directly post the selected response
  };

  //draft section
  const addDraftContent = (content: string, date: string, time: string) => {
    let currentContent = Cookies.get('draftContents');
    let contentArray = currentContent ? JSON.parse(currentContent) : [];
  
    // Push the new content along with the current date and time
    contentArray.push({
      content: content,
      date: date,
      time: time,
    });
  
    let updatedContent = JSON.stringify(contentArray);
    Cookies.set('draftContents', updatedContent, {
      expires: 7,
      path: '/',
      secure: true,
    });
  };
  
  const handleDraftSave = () => {
    if (!threadsText) {
      console.log('No threads to post');
      return;
    }
  
    // Get the current date and time at the moment of posting
    const currentDate = new Date().toDateString(); // Format the date
    const currentTime = new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    }); // Format the time in 12-hour format with AM/PM
  
    // Loop through threadsContent and add each thread's content to posted contents
    
      addDraftContent(threadsText, currentDate, currentTime);
  
  
    setIsLoading(true);
    // Set progress to 25% and start updating progress
    setThreadsText("")
    setThreadsContent([]);
    setTimeout(() => {
      setIsLoading(false); // Hide loading state
    }, 3000);
  };
  
  

  const handleCardClick = (index: number) => {
    setSelectedCardIndex(index); // Set the selected card index
    const selectedResponse = generatedResponses[index]?.response || "";
    setEditorContent(selectedResponse);
    setCharCount(selectedResponse.length);
    setIsDialogOpen(true);
  
    console.log("select-response:", selectedResponse);
  };

  //delete functionalitu
const deleteTweet = (index: number) => {
    const cookieData = Cookies.get("tweetContents");
    const tweetContents = cookieData ? JSON.parse(cookieData) : [];

    if (index > -1) {
      tweetContents.splice(index, 1); // Remove the tweet at the specified index
      Cookies.set("tweetContents", JSON.stringify(tweetContents)); // Update the cookie
    }

    console.log("Deleted tweet at index", index);
  };

// New function to post directly from the card without using the editor


const handlePostClick = (index: number) => {
  handlePostDirectly(index);
};









// useEffect remains the same

useEffect(() => {
  const savedResponses = localStorage.getItem('typedResponses');
  if (savedResponses) {
    setTypedResponses(JSON.parse(savedResponses));
  }
}, []);




// useEffect remains the same

useEffect(() => {
  const savedResponses = localStorage.getItem('typedResponses');
  if (savedResponses) {
    setTypedResponses(JSON.parse(savedResponses));
  }
}, []);

const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  const inputValue = e.target.value;
  setUserInput(inputValue); // This will keep your original functionality
  
};

const handleButtonClick = () => {
  handleGenerateResponses();
  handleThreads();
  setThreadsText(userInput);
  setUserInput(""); 
  
};




return (
    <>
      <div className="w-full h-[80vh] md:h-[100vh] lg:h-[100vh] relative overflow-y-auto overflow-x-hidden scrollbar-hide dashboard-color">
        <div className="w-full flex flex-col md:flex-row lg:flex-row justify-between  h-full">
          <div className="w-full md:w-[55%] lg:w-[60%] bg-[#181818] h-[781px] overflow-y-auto  scrollbar-hide pt-10
           px-2 border-r border-[#252525] rounded-[20px] pb-10 md:pb-40 lg:pb-40">
            <div>
              <div className="flex justify-center gap-4 md:gap-0 lg-gap-0 flex-col md:flex-row lg:flex-row items-center overflow-x-hidden">
                <p className="font-medium text-[20px] leading-[20.8px]">
                  Tweet about something...
                </p>
                <ToggleButtonMobile
                      checked={!isTweetMode}
                      onToggle={handleToggle}
                    />
              </div>
              {/* Text area */}
              <div className="hidden md:flex lg:flex pt-5 justify-center items-center">
                <div className="relative w-[607px] md:w-[90%] lg:w-[607px] h-[213px] bg-[#1D1D1D] rounded-[12px] border border-[#323232]">
                <textarea
          className="w-full h-[65px] bg-transparent border-none outline-none pt-9 px-4 pb-2 text-[#f9f9f9] font-normal italic text-xs mb-t helvetica-font"
        placeholder=""
        value={userInput} // Keep the original value
        onChange={handleInputChange} // Use the combined handler
     content={threadsText}
/>

      <div className="absolute bottom-[30%] right-5 flex justify-end">
                    <button
                      className="flex justify-center items-center w-[27px] h-[27px] rounded-full bg-[#03ffa3]"
                      onClick={handleButtonClick}
                    >
                      <FaArrowUp className="w-[16px] h-[14px] text-black" />
                    </button>
                  </div>
                  <div className="absolute bottom-0 w-full h-[54px] border-t border-[#272727] flex justify-between items-center px-4">
                    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                      <DialogTrigger className="cursor-pointer" asChild>
                        <Button className="font-medium text-[12px] leading-[12.48px] bg-[#303030] w-auto h-[36px] rounded-[50px] py-[10px] px-4">
                          {selectedContent}
                        </Button>
                      </DialogTrigger>
                      <DialogContent
                        className="absolute top-[52%] left-[48%] max-w-auto w-[430px] md:w-[460px] lg:w-[397px]
                  h-[100vh] overflow-y-auto overflow-x-hidden scrollbar-hide border-0 outline-none"
                      >
                        <div className="w-full bg-[#0d0d0d] h-auto rounded-[20px] border-b border-[#131313] pb-5 px-4 pt-2">
                          <HookList onSelect={handleSelect} />
                        </div>
                      </DialogContent>
                    </Dialog>

                    <CopilotToggleButton
                      checked={!isTweetMode}
                      onToggle={handleToggle}
                    />
                     <Button
                      className="font-medium text-[12px] w-[83px] h-[36px] rounded-[50px] bg-[#0D0D0D] leading-[12.48px]"
                      onClick={clearInput}
                    >
                      Clear
                    </Button>
                  </div>
                </div>
              </div>
          {/* mobile */}
             <div className="block md:hidden lg:hidden  bg-transparent w-full h-[300px] overflow-y-auto scrollbar-hide relative rounded-[16px] overflow-x-hidden">
          <>
        <div className="bg-transparent md:bg-[#1F1F1F] lg:bg-[#1F1F1F] p-2 h-auto overflow-y-auto overflow-x-hidden max-h-[165px]">
       
      <div className="flex justify-end mb-5 pt-10 pb-5">
              <div className="w-[325px] p-[10px] rounded-lg  bg-transparent md:bg-[#252525] lg:bg-[#252525] border-[#292929] border">
                <p className="font-medium text-xs leading-[12.48px] text-[#B3B3B3]">
                 {threadsText}
                </p>
              </div>
            </div>
        
     {/* mobile response */}
     {tweetHeading && (
  <div className="flex justify-between md:hidden lg:hidden pt-5 px-2 md:px-4 lg:px-4">
    {/* Conditionally change the heading text based on tweet mode or threads mode */}
    <h4 className="font-medium text-sm">
      {isTweetMode ? "Here’s Your Response" : "Here’s your Thread Content"}
    </h4>

    <div className="relative">
      {/* First Modal Trigger: CiMenuKebab */}
      <Dialog>
        <DialogTrigger asChild>
          <button>
            <CiMenuKebab className="w-[24px] h-[24px] text-white" />
          </button>
        </DialogTrigger>

        {/* First Modal Content: Select Options */}
        <DialogContent
          className="block md:hidden lg:hidden bg-[#131313] absolute text-left top-[40%]
          w-[400px] h-[212px] border-b-[1px] px-2 pt-5 border-[#333333] rounded-t-[16px] overflow-y-auto"
        >
          <div className="text-xs font-semibold text-white">
            <ul className="flex flex-col space-y-4 px-4tab">
              {/* Trigger Dialog for Scheduled Post */}
              <li>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="block text-left w-full py-2 px-4 bg-transparent hover:bg-gray-700 rounded-lg">
                      Scheduled Post
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-[#131313] w-full h-[500px] overflow-y-auto scrollbar-hide md:w-[430px] md:h-[388px] border-b-[1px] border-[#333333] rounded-t-[16px]">
                    <ScheduleTweet />
                  </DialogContent>
                </Dialog>
              </li>

              {/* Trigger Dialog for Posted Contents */}
              <li>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="block text-left w-full py-2 px-4 bg-transparent hover:bg-gray-700 rounded-lg">
                      Content Posted
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-[#131313] w-full h-[500px] overflow-y-auto scrollbar-hide md:w-[430px] md:h-[388px] border-b-[1px] border-[#333333] rounded-t-[16px]">
                    <ContentPosted />
                  </DialogContent>
                </Dialog>
              </li>

              <li>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="block text-left w-full py-2 px-4 bg-transparent hover:bg-gray-700 rounded-lg">
                      Drafts
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-[#131313] w-full h-[500px] overflow-y-auto scrollbar-hide md:w-[430px] md:h-[388px] border-b-[1px] border-[#333333] rounded-t-[16px]">
                    <Drafts />
                  </DialogContent>
                </Dialog>
              </li>
            </ul>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  </div>
)}
     {isTweetMode ? (
              <div className="flex md:hidden lg:hidden flex-col gap-4 md:flex-col lg:flex-row justify-between pt-2 md:gap-4 lg:gap-0  pb-5 px-2 md:px-2 lg:px-4">
                {generatedResponses?.map((row, index) => (
                  <div
                    key={index}
                        className={`cursor-pointer p-[2px] rounded-[16px] h-full ${
                      activeIndex === index
                        ? "bg-gradient-to-r from-[rgba(3,255,163,0.9)] to-[rgba(127,86,217,0.9)]"
                        : ""
                    }`}
                    onClick={()=> setActiveIndex(index)}
                  >
                    <div className="bg-[#252525] rounded-[16px]">
                      
                    <Card
  key={index}
  index={index}
  title={row.title}
  response={typedResponses[index] || ""}
  handleCardClick={() => handleCardClick(index)} // For editing
  setEditorContent={setEditorContent}
  editorContent={editorContent}
  isDialogOpen={isDialogOpen}
  setIsDialogOpen={setIsDialogOpen} 
  handlePostDirectly={handlePostDirectly} // Now directly posts the response
  selectedCardIndex={selectedCardIndex} 
   handleEditSave={() => handleEditSave(index)} 
  handleCancel={handleCancel}
  savedSuccessfully={savedSuccessfully}
  openModal={openModal}
  setOpenModal={setOpenModal}
  generatedResponses={generatedResponses}
  setProgress={setProgress}
  handleSave={handleSave}
  closeModal={closeModal}
  addEditorContent={addEditorContent}
  handlePostClick={() => handlePostClick(index)} // Pass index directly
/>
</div>
  </div>
                ))}
              </div>
            ) : (
              <Threads
                threadsContent={threadsContent}
                threadsText={threadsText}
                handleSave={handleSave}
                handleDivideThread={handleDivideThread}
                handleAddImage={handleAddImage}
                handleDeleteThread={handleDeleteThread}
                handleCopyContent={handleCopyContent}
                tweetHeading={tweetHeading}
              />
            )}
    
  </div>
    </>
    {isLoading ? (
  <div className="absolute top-1 left-[20%] flex justify-center items-center overflow-auto">
      <div className="px-8 border-none rounded-[20px] flex justify-center items-center max-w-auto w-[262px] h-[252px] bg-[#181818] shadow-lg mt-5">
        <div className="mx-auto">
          <FiLoader
          
            className="w-[80px] h-[80px] text-[#707070] mx-auto mb-5 pt-2 bg-[#181818]"
           
          />
          <h3 className="font-medium text-[20px] mx-auto text-center text-[#C1C1C1] leading-[24px] mb-3">
            Please wait.....
          </h3>
          <p className="font-medium text-center text-sm leading-[18.56px] mx-auto">
            Now saving your content to draft.
          </p>
        </div>
      </div>
      </div>
    ) : (

  <div className="fixed bottom-20 w-full">
  <div className="flex justify-between items-center bg-transparent md:bg-[#1F1F1F] lg:bg-[#1F1F1F] pt-5 px-2">
      <div className="w-full h-[54px] border-b border-[#272727] flex justify-between items-center px-4">
        
        {/* Hook List Dialog */}
        <Dialog open={isHookListOpen} onOpenChange={setIsHookListOpen}>
          <DialogTrigger className="cursor-pointer" asChild>
            <Button className="font-medium text-[12px] leading-[12.48px] bg-[#303030] w-auto h-[36px] rounded-[50px] py-[10px] px-4">
              {selectedContent}
            </Button>
          </DialogTrigger>
          <DialogContent
            className="absolute top-[52%] left-[48%] max-w-auto w-[430px] md:w-[460px] lg:w-[397px]
            h-[100vh] overflow-y-auto overflow-x-hidden scrollbar-hide border-0  px-12 outline-none"
          >
            <div className="w-full bg-[#0d0d0d] h-auto rounded-[20px] border-b border-[#131313] pb-5 px-4 pt-2">
              <HookList onSelect={handleSelect} />
            </div>
          </DialogContent>
        </Dialog>

        {/* Clear Dialog */}
        
        <Dialog open={isClearDialogOpen} onOpenChange={setIsClearDialogOpen}>
          <DialogTrigger asChild>
            <Button className="font-medium text-[12px] w-[83px] h-[36px] rounded-[50px] bg-[#0D0D0D] leading-[12.48px]">
              Clear
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-[300px] py-6 md:py-6 lg:py-6 px-4 rounded-[20px] outline-none border-none bg-[#181818]">
            <div className="text-[14px] font-normal text-white text-center mb-4">
              Would you like to save your thread contents to draft?
            </div>
            <div className="flex justify-center gap-4">
              <button
                className="w-[80px] h-10 px-4 py-2 rounded-[20px] text-sm bg-green-500 text-white font-medium hover:bg-green-200 transition-colors duration-200"
                onClick={() => {
                  handleDraftSave(); // Call save handler
                  setIsClearDialogOpen(false); // Close modal
                }}
              >
                Yes
              </button>
              <button
                className="w-[80px] h-10 px-4 py-2 rounded-[20px] text-sm text-white font-medium border border-neutral-500 hover:bg-neutral-600 transition-colors duration-200"
                onClick={() => {
                  setIsClearDialogOpen(false); // Close modal
                  clearInput(); // Clear input
                }}
              >
                No
              </button>
            </div>
          </DialogContent>
        </Dialog>
  
      </div>
    </div>
    
            <div className="flex items-center justify-between w-[95%] h-auto 
            px-6 md:px-6 lg:px-6 bg-[#1f1f1f] rounded-[16px] border-2
             border-[#2B2B2B] py-4">
             <input
            type="text"
            placeholder="What is on your mind?"
            value={userInput}
             onChange={handleInputChange} 
            content={threadsText}
           className="flex-1 input-area bg-transparent border-none border outline-none font-normal 
           text-xs italic text-white placeholder-[#707070]"
          />
          
        <div className="absolute bottom-1 right-7">
          <button
            className="flex justify-center items-center w-[37px] h-[37px] rounded-full bg-[#03ffa3]"
            onClick={handleButtonClick}
          >
            <FaArrowUp className="w-[16px] h-[14px] text-black" />
          </button>
        </div>
      </div>
    
  </div>
    )}
</div>

              {/* Progress bar */}
              {progress > 0 && (
  <div className="flex flex-col items-start gap-3 px-4 py-4 w-[70%] md:w-[609px] lg:w-[609px] h-[73px] rounded-[16px] bg-[#131313] border-[#303030] absolute left-[15%] md:left-[5%] lg:left-[5%] top-[20%] overflow-hidden">
    <div className="text-xs md:text-sm lg:text-sm">
      {progress < 100
        ? progress === 25
          ? isScheduling
            ? "Scheduling..."
            : null
          : null
        : "Your scheduling is complete."}
    </div>
    <div className="flex justify-center items-center w-[400px] md:w-[571px] h-[9px] rounded-[24px] bg-[#1E1E1E] absolute bottom-0">
      <div
        className="h-full rounded-[24px] bg-gradient-to-r from-[#03FFA3] to-[#7F56D9]"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  </div>
)}


{postProgress > 0 && (
  <div className="flex flex-col items-start gap-3 px-4 py-4 w-[70%] md:w-[609px] lg:w-[609px] h-[73px] rounded-[16px] bg-[#131313] border-[#303030] absolute left-[15%] md:left-[10%]
   lg:left-[10%] top-[20%]">
    <div>
      {postProgress < 100
        ? postProgress === 25
          ? isPosting
            ? "Posting tweet..."
            : null
          : null
        : "Your tweet is posted"}
    </div>
    <div className="flex justify-center items-center w-[400px] md:w-[571px] h-[9px] rounded-[24px] bg-[#1E1E1E] absolute bottom-0">
      <div
        className="h-full rounded-[24px] bg-gradient-to-r from-[#03FFA3] to-[#7F56D9]"
        style={{ width: `${postProgress}%` }}
      ></div>
    </div>
  </div>
)}
</div>





            {/* Conditional rendering based on mode */}
            {isTweetMode ? (
              <div className="hidden md:flex lg:flex flex-col md:flex-col lg:flex-row justify-between pt-2 gap-2 md:gap-4 lg:gap-0  pb-20 px-2 md:px-2 lg:px-4">
                {generatedResponses?.map((row, index) => (
                  <div
                    key={index}
                        className={`cursor-pointer p-[2px] rounded-[16px] h-full ${
                      activeIndex === index
                        ? "bg-gradient-to-r from-[rgba(3,255,163,0.9)] to-[rgba(127,86,217,0.9)]"
                        : ""
                    }`}
                    onClick={()=> setActiveIndex(index)}
                  >
                    <div className="bg-[#252525] rounded-[16px]">
                      
                    <Card
  key={index}
  index={index}
  title={row.title}
  response={typedResponses[index] || ""}
  handleCardClick={() => handleCardClick(index)} // For editing
  setEditorContent={setEditorContent}
  editorContent={editorContent}
  isDialogOpen={isDialogOpen}
  setIsDialogOpen={setIsDialogOpen} 
  handlePostDirectly={handlePostDirectly} // Now directly posts the response
  selectedCardIndex={selectedCardIndex} 
   handleEditSave={() => handleEditSave(index)} 
  handleCancel={handleCancel}
  savedSuccessfully={savedSuccessfully}
  openModal={openModal}
  setOpenModal={setOpenModal}
  generatedResponses={generatedResponses}
  setProgress={setProgress}
  handleSave={handleSave}
  closeModal={closeModal}
  addEditorContent={addEditorContent}
  handlePostClick={() => handlePostClick(index)} // Pass index directly
/>
</div>
  </div>
                ))}
              </div>
            ) : (
              <div className="hidden md:block lg:block">
              <Threads
                threadsContent={threadsContent}
                threadsText={threadsText}
                handleSave={handleSave}
                handleDivideThread={handleDivideThread}
                handleAddImage={handleAddImage}
                handleDeleteThread={handleDeleteThread}
                handleCopyContent={handleCopyContent}
                tweetHeading={tweetHeading}
              />
              </div>
            )}
          </div>

          <div className="hidden md:block lg:block w-[40%] md:w-[45%] lg:w-[40%] pb-6 ml-2 md:ml-1 lg:ml-2 h-auto rounded-[10px] overflow-x-hidden">
            <div className="w-full overflow-x-hidden">
              <div className="bg-[#131313] h-auto w-full px-2">
               
                {/* put your content here */}
                <div className="px-2">
                   {/* content posted tabs section */}
                  <Tabs
                    defaultValue="ScheduledTweet"
                    className="w-full overflow-x-hidden"
                  >
                    <TabsList className="flex mt-0 mb-0 items-center justify-center md:justify-start lg:justify-start gap-2 md:gap-4 lg:gap-3 
                    px-0 w-full border-b border-[#363636]">
                      <TabsTrigger
                        className="w-fit data-[state=active]:text-white 
                    text-[#4D4D4D] text-xs font-medium leading-[12.8px]"
                        value="ScheduledTweet"
                      >
                        Scheduled tweet
                      </TabsTrigger>
                      <TabsTrigger
                        className="w-fit data-[state=active]:text-white
                     text-[#4D4D4D] text-xs font-medium leading-[12.8px]"
                        value="PostedContent"
                      >
                        Posted Content
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent
                      className="w-full pt-2 md:pt-0 lg:pt-0 h-[250px] md:h-[90vh] lg:h-[90vh] overflow-y-auto overflow-x-hidden bg-[#181818] pb-40 scrollbar-hide"
                      value="ScheduledTweet"
                    >
                      <ScheduleTweet />
                    </TabsContent>
                    <TabsContent
                      className="w-full pt-2 md:pt-0 lg:pt-0 h-[250px] md:h-[90vh] lg:h-[90vh] overflow-y-auto overflow-x-hidden bg-[#181818] pb-40 scrollbar-hide"
                      value="PostedContent"
                    >
                      <ContentPosted />
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
          {/* ends here */}
        </div>
      </div>
    </>
  );
};

export default Compose;
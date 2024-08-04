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

interface Response {
  title: string;
  response: string;
  img: string;
}

const response: Response[] = [
  {
    title: "response1",
    response:
      "Decentralized Finance (DeFi) is revolutionizing the financial world by enabling peer-to-peer transactions without intermediaries like banks. Using blockchain technology, DeFi offers innovative services such as lending, borrowing, and trading with enhanced security and transparency. It's democratizing access to financial tools, empowering users globally. #DeFi #Blockchain #CryptoFinance",
    img: "/glow-img.png",
  },
  {
    title: "response2",
    response:
      "Decentralized Finance (DeFi) is revolutionizing the financial world by enabling peer-to-peer transactions without intermediaries like banks. Using blockchain technology, DeFi offers innovative services such as lending, borrowing, and trading with enhanced security and transparency. It's democratizing access to financial tools, empowering users globally. #DeFi #Blockchain #CryptoFinance",
    img: "/glow-img.png",
  },
  {
    title: "response3",
    response:
      "Decentralized Finance (DeFi) is revolutionizing the financial world by enabling peer-to-peer transactions without intermediaries like banks. Using blockchain technology, DeFi offers innovative services such as lending, borrowing, and trading with enhanced security and transparency. It's democratizing access to financial tools, empowering users globally. #DeFi #Blockchain #CryptoFinance",
    img: "/glow-img.png",
  },
];

interface ComposeProps {
  onAddToDraft: (title: string, response: string) => void; // Update prop type
}
const Compose: React.FC<ComposeProps> = ({ onAddToDraft }) => {
  const handleAddToDraft = (title: string, response: string) => {
    // Add draft logic here
    onAddToDraft(title, response);
  };

  const [isTweetMode, setIsTweetMode] = useState<boolean>(true);
  const [savedDate, setSavedDate] = useState<string | null>(
    localStorage.getItem("savedDate")
  );
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [userInput, setUserInput] = useState<string>("");
  const [copyMessage, setCopyMessage] = useState<string | null>(null);

  const [generatedResponses, setGeneratedResponses] = useState<Response[]>([]);
  const [typedResponses, setTypedResponses] = useState<string[]>([]);
  const [editorContent, setEditorContent] = useState<string>("");
  const [charCount, setCharCount] = useState<number>(0);
  const [charLimitExceeded, setCharLimitExceeded] = useState<boolean>(false);
  const [selectedContent, setSelectedContent] = useState("Hook type");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [images, setImages] = useState<{ [key: number]: string[] }>({});

  const [customContents, setCustomContents] = useState<object[]>([]);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [progress, setProgress] = useState(0); // For progress bar
  const [isScheduling, setIsScheduling] = useState<boolean>(true); // Default to scheduling

  const [threadsContent, setThreadsContent] = useState<
    Array<{ content: string; count: number; countNum: string }>
  >([]);

  const handleToggle = () => {
    setIsTweetMode((prev) => !prev);
  };

  const { toast } = useToast();

  const handleSelect = (content: string) => {
    setSelectedContent(content);
    setIsDialogOpen(false); // Close the modal
  };

  const handleEditorChange = (content: string) => {
    setEditorContent(content);
  };

  const clearEditorContent = () => {
    setEditorContent("");
  };

  const handleGenerateResponses = () => {
    if (!userInput.trim()) return;

    setGeneratedResponses([]);
    setTypedResponses([]);
    response.forEach((response, index) => {
      setTimeout(() => {
        setGeneratedResponses((prev) => [...prev, response]);
        addTypingEffect(response.response, index);
      }, index * 1000); // Delay each response by 1 second
    });
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (progress === 100) {
      setShowSuccessMessage(true);
      timer = setTimeout(() => {
        setProgress(0); // Reset progress
        setShowSuccessMessage(false); // Hide success message
      }, 3000); // Hide after 2 seconds
    }

    return () => clearTimeout(timer);
  }, [progress]);

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

    // Update state or pass threads to the component that will display them
    setThreadsContent(threads); // Assuming you have a state or method to update this
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

  const handleButtonClick = () => {
    handleGenerateResponses();
    handleThreads();
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

  const handleCardClick = (index: number) => {
    setActiveIndex(index);
    const selectedResponse = generatedResponses[index]?.response || "";
    setEditorContent(selectedResponse);
    setCharCount(selectedResponse.length);
  };

  const clearInput = () => {
    setUserInput("");
  };

  // posted content function
  const addPostedContent = (content: string) => {
    // Retrieve the current value of the cookie
    let currentContent = Cookies.get("postedContents");
    console.log("Current Cookie Content:", currentContent);

    // Parse the current value into an array, or initialize a new array if the cookie does not exist
    let contentArray = currentContent ? JSON.parse(currentContent) : [];

    // Add the new editorContent object to the array
    contentArray.push({
      content: content,
    });

    // Convert the array back to a string
    let updatedContent = JSON.stringify(contentArray);

    // Save the updated array back to the cookie
    Cookies.set("postedContents", updatedContent, {
      expires: 7,
      path: "/x-Agents",
      secure: true,
    });
    // console.log("Updated Cookie Content:", updatedContent);
  };

  const handleSave = () => {
    setIsScheduling(false); // Set the mode to postin
    if (!editorContent) {
      console.log("Editor content is empty");
      return;
    }

    setEditorContent("");
    addPostedContent(editorContent);
    const postedContents = [...customContents];
    setCustomContents(postedContents);
    Cookies.set("postedContents", JSON.stringify(postedContents));
    console.log("Custom Contents Cookie:", JSON.stringify(postedContents));

    setProgress(25); // Set progress to 25%
    setTimeout(() => {
      setProgress(100); // Update progress to 100%
      setTimeout(() => {
        setShowSuccessMessage(true);
        setTimeout(() => setShowSuccessMessage(false), 1000);
      }, 300);
    }, 1000);
  };

  return (
    <>
      <div className="w-full h-[80vh] md:h-[100vh] lg:h-[100vh] relative overflow-y-auto scrollbar-hide dashboard-color">
        <div className="w-full flex justify-between">
          <div className="w-[60%] bg-[#181818] h-[781px] overflow-y-auto scrollbar-hide pt-10 border-r border-[#252525] rounded-[20px] pb-40">
            <div>
              <div className="flex justify-center items-center">
                <p className="font-medium text-[20px] leading-[20.8px]">
                  Tweet about something...
                </p>
              </div>
              {/* Text area */}
              <div className="pt-5 flex justify-center items-center">
                <div className="relative w-[607px] h-[213px] bg-[#1D1D1D] rounded-[12px] border border-[#323232]">
                  <textarea
                    className="w-full h-[65px] bg-transparent border-none outline-none pt-9 px-4 pb-2 text-[#f9f9f9] font-normal italic text-xs mb-t"
                    placeholder=""
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
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

              {/* Progress bar */}
              {progress > 0 && (
                <div className="flex flex-col items-start gap-3 px-4 py-4  w-[609px] h-[73px] rounded-[16px] bg-[#131313] border-[#303030] absolute left-[10%] top-[50%]">
                  <div>
                    {progress < 100
                      ? progress === 25
                        ? isScheduling
                          ? "Scheduling tweet"
                          : "Posting tweet"
                        : null
                      : isScheduling
                      ? "Your tweet has been scheduled"
                      : "Tweet has been posted"}
                  </div>
                  <div className="flex justify-center items-center w-[571px] h-[9px] rounded-[24px] bg-[#1E1E1E] absolute bottom-0">
                    <div
                      className="h-full rounded-[24px]  bg-gradient-to-r from-[#03FFA3] to-[#7F56D9]"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                </div>
              )}
            </div>

            {/* Conditional rendering based on mode */}
            {isTweetMode ? (
              <div className="flex justify-between pt-10 px-4">
                {generatedResponses?.map((row, index) => (
                  <div
                    key={index}
                    onClick={() => handleCardClick(index)}
                    className={`cursor-pointer p-[2px] rounded-[16px] ${
                      activeIndex === index
                        ? "bg-gradient-to-r from-[rgba(3,255,163,0.9)] to-[rgba(127,86,217,0.9)]"
                        : ""
                    }`}
                  >
                    <div className="bg-[#252525] rounded-[16px]">
                      <Card
                        title={row.title}
                        response={typedResponses[index] || ""}
                        img={row.img}
                        onAddToDraft={onAddToDraft} // Pass the function as a prop
                      />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <Threads
                threadsContent={threadsContent}
                handleSave={handleSave}
                handleDivideThread={handleDivideThread}
                handleAddImage={handleAddImage}
                handleDeleteThread={handleDeleteThread}
                handleCopyContent={handleCopyContent}
              />
            )}
          </div>

          <div className="w-[40%] bg-[#181818] pb-6 ml-5 h-auto rounded-[10px]">
            <div className="w-[408px]">
              <div className="bg-[#131313] h-auto w-full px-2 pb-20">
                <div className="border-[#1E1E1E] border-b h-auto flex py-3 px-2 mb-5">
                  <p className="font-medium text-base leading-[16.64px]">
                    Edit Portal
                  </p>
                </div>
                {/* put your content here */}
                <div className="px-4">
                  <h5 className="font-normal text-xs leading-[13px] mb-3">
                    Edit your content
                  </h5>
                  <p className="font-300 w-[80%] text-[10px] leading-[12px] text-[#858585] mb-3">
                    Refine your message and ensure accuracy with our intuitive
                    editing tools. Perfect your content to engage your audience
                    effectively.
                  </p>
                  <div className="">
                    <div className="w-[385px] h-auto border-[#363636] border mb-2">
                      <TextEditor
                        content={editorContent}
                        setContent={setEditorContent}
                        setCharCount={setCharCount}
                      />
                    </div>
                    <p className="text-[10px] leading-[12px] font-300 text-[#858585] mb-3">
                      <span className="text-green-400 text-[10px] leading-[12px] font-300">
                        {charCount}
                      </span>
                      /500 characters
                    </p>
                  </div>
                  <div className="w-[240px] h-auto gap-4 flex justify-between items-center mb-5">
                    <Dialog open={openModal} onOpenChange={setOpenModal}>
                      <DialogTrigger className="cursor-pointer" asChild>
                        <Button
                          className="w-[114px] h-[35px] p-[10px] border-[#575757] border rounded-[50px] font-medium text-xs leading-[12.48px]"
                          onClick={() => setOpenModal(true)}
                        >
                          Schedule
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="absolute top-[48%] right-[-80%] -translate-x-1/2 max-w-auto border-none outline-none px-6 md:px-4 lg:px-4 rounded-[20px]">
                        <div className="w-full md:w-full lg:w-full h-[80vh] md:h-[80vh] lg:h-[80vh] overflow-y-auto scrollbar-hide border-b-transparent outline-0">
                          <Calendar2
                            editorContent={editorContent}
                            setProgress={setProgress}
                            onSave={handleSave}
                            onCloseModal={closeModal}
                          />
                        </div>
                      </DialogContent>
                    </Dialog>
                    <Button
                      className="w-[114px] h-[35px] bg-[#03ffa3] rounded-[50px] border-none font-medium text-xs leading-[12.48px] text-black"
                      onClick={handleSave}
                    >
                      Tweet Now
                    </Button>
                  </div>
                  {/* content posted tabs section */}
                  <Tabs
                    defaultValue="ScheduledTweet"
                    className="w-full overflow-x-hidden"
                  >
                    <TabsList className="flex mt-0 mb-0 items-center justify-center md:justify-start lg:justify-start gap-2 md:gap-4 lg:gap-3 px-0 w-full border-b border-[#363636]">
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
                      className="w-full pt-2 md:pt-0 lg:pt-0 h-[250px] overflow-y-auto bg-[#181818] pb-40 scrollbar-hide"
                      value="ScheduledTweet"
                    >
                      <ScheduleTweet />
                    </TabsContent>
                    <TabsContent
                      className="w-full pt-2 md:pt-0 lg:pt-0 o h-[250px] overflow-y-auto bg-[#181818] pb-40 scrollbar-hide"
                      value="PostedContent"
                    >
                      <ContentPosted />
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Compose;

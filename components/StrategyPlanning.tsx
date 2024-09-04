"use client"
import { FaChevronDown, FaChevronUp, FaRegClock } from "react-icons/fa";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { useEffect, useRef, useState } from 'react'
import { FaArrowUp, FaCheck } from 'react-icons/fa';
import PostedContents from './PostedContents';
import ScheduledPosts from './ScheduledPosts';
import AllStrategies from './AllStrategies';
import { ChevronDownIcon } from "lucide-react";
import { Button } from "./ui/button";
import { MdOutlineContentCopy } from "react-icons/md";
import { IoMdCheckmark } from "react-icons/io";
import { IoBulbOutline } from "react-icons/io5";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";
import Calendar4 from "./Calendar4";
import Cookies from "js-cookie";


const accordionData: AccordionData[] = [
  {
    id: 1,
    title: "Teaser Post",
    text: "Exciting news is on the horizon! 🚀 Stay tuned this week as we reveal something game-changing.Can you guess what it is? Drop your thoughts below! #TeaserTuesday #ComingSoon",
  button: "my name is folakemi",
  },
  {
    id: 2,
    title: "Poll",
    text: "We’re working on something special! Which aspect of [Your Product] are you most excited about?",
    button: "my name is folakemi",
  },

  {
    id: 3,
    title: "Teaser",
    text: "We’re working on something special! Which aspect of [Your Product] are you most excited about?",
    button: "my name is folakemi",
  },

  {
    id: 4,
    title: "Poll",
    text: "We’re working on something special! Which aspect of [Your Product] are you most excited about?",
    button: "my name is folakemi",
  },
];

interface Strategy {
  strategy: string;
  content: string;
   timestamp: { date: string; time: string };
  }

  interface Strategy {
    strategy: string;
    timestamp: { date: string; time: string };
    // Add any other properties if needed
  }

  interface Timestamp {
    date: string;
    time: string;
  }
  
  interface Chat {
    request: string;
    response: string;
    timestamp: Timestamp; // Add the timestamp property
  }
  

interface AccordionData {
  id: number;
  title: string;
  text: string;
  button: string;
}

interface StrategyPlanningProps {
  
  handleSave: () => void;
  addStrategyContent: (date: string, time: string, content: string) => void;
  // Add any other props you need to pass here, such as:
  strategies: Strategy[]; // Example prop if you're passing an array of strategies
}

const StrategyPlanning: React.FC<StrategyPlanningProps> = ({ handleSave, strategies, addStrategyContent }) => {

  const [isReadMoreStatic, setIsReadMoreStatic] = useState<boolean>(false);
  const [isReadMore, setIsReadMore] = useState<Record<number, boolean>>({});
  const [text, setText] = useState<string>('');
  const [request, setRequest] = useState<string[]>([]);
const [tempRequest, setTempRequest] = useState<string[]>([]); 
  const [response, setResponse] = useState<string | null>(null);
  const [isQuickStrategyClicked, setIsQuickStrategyClicked] = useState<boolean>(false);
  const [isInputVisible, setIsInputVisible] = useState<boolean>(true);
  const [showContent, setShowContent] = useState<boolean>(false);
  const [copiedContent, setCopiedContent] = useState<string | null>(null);
  const [showCopyMessage, setShowCopyMessage] = useState<boolean>(false);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [hasRequested, setHasRequested] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [chats, setChats] = useState<Chat[]>([]);
  const chatContainerRef = useRef<HTMLDivElement | null>(null);
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [areButtonsVisible, setAreButtonsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    const savedOption = Cookies.get('selectedOption');
    if (savedOption) {
      setSelectedOption(savedOption);
    }
  }, []);

  // Handle option change
  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedOption(value);
    Cookies.set('selectedOption', value, { expires: 7 }); // Save to cookies with a 7-day expiry
  };


//request and response functionallity
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSendButtonClick = async () => {
    if (text.trim()) {
        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
        const formattedTime = currentDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

        const newChat: Chat = {
            request: text.trim(),
            response: "",
            timestamp: { date: formattedDate, time: formattedTime }
        };

        setChats((prevChats) => [...prevChats, newChat]);
        setIsInputVisible(false);
        setHasRequested(true);
        setIsQuickStrategyClicked(true);
        setAreButtonsVisible(true);

        await delayResponse();

        const updatedResponse = "I understand that your strategy this week is to increase engagement through interactive polls and AMAs. This aligns well with your community's current activity levels. Would you like to add a daily discussion thread to further boost engagement?";

        setChats((prevChats) =>
            prevChats.map((chat, index) =>
                index === prevChats.length - 1
                    ? { ...chat, response: updatedResponse }
                    : chat
            )
        );

        const storedStrategies = JSON.parse(localStorage.getItem('strategies') || '[]');
        const newStrategy = { ...newChat, response: updatedResponse };

        if (newStrategy.response) {
            storedStrategies.push(newStrategy);
            localStorage.setItem('strategies', JSON.stringify(storedStrategies));
        }

        scrollToBottom();
        setText('');
    }
};
  
const handleKeyDown = async (event: React.KeyboardEvent<HTMLInputElement>) => {
  if (event.key === 'Enter') {
      // Prevent default Enter key behavior
      event.preventDefault();

      if (text.trim()) {
          const currentDate = new Date();
          const formattedDate = currentDate.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
          const formattedTime = currentDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

          const newChat: Chat = {
              request: text.trim(),
              response: "",
              timestamp: { date: formattedDate, time: formattedTime }
          };

          setChats((prevChats) => [...prevChats, newChat]);

          // Make input invisible and change Quick Strategy button to Clear
          setIsInputVisible(false);
          setIsQuickStrategyClicked(true);
setHasRequested(true);
          setAreButtonsVisible(true);

          await delayResponse();

          const updatedResponse = "I understand that your strategy this week is to increase engagement through interactive polls and AMAs. This aligns well with your community's current activity levels. Would you like to add a daily discussion thread to further boost engagement?";

          setChats((prevChats) =>
              prevChats.map((chat, index) =>
                  index === prevChats.length - 1
                      ? { ...chat, response: updatedResponse }
                      : chat
              )
          );

          const storedStrategies = JSON.parse(localStorage.getItem('strategies') || '[]');
          const newStrategy = { ...newChat, response: updatedResponse };

          if (newStrategy.response) {
              storedStrategies.push(newStrategy);
              localStorage.setItem('strategies', JSON.stringify(storedStrategies));
          }

          scrollToBottom();
          setText('');
      }
  }
};




const handleQuickStrategyClick = async () => {
  const quickRequest = "Our goal for this week is to promote our upcoming product launch by releasing teaser content and engaging with members through polls and AMAs.";
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  const formattedTime = currentDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

  const newChat: Chat = {
    request: quickRequest,
    response: "",
    timestamp: { date: formattedDate, time: formattedTime } // Include the timestamp
  };

  setChats((prevChats) => [...prevChats, newChat]);
  setIsInputVisible(false);
  setHasRequested(true);
  setIsQuickStrategyClicked(true);
  setAreButtonsVisible(true);

  await delayResponse();

  const updatedResponse = "I understand that your strategy this week is to increase engagement through interactive polls and AMAs. This aligns well with your community's current activity levels. Would you like to add a daily discussion thread to further boost engagement?";

  setChats((prevChats) =>
    prevChats.map((chat, index) =>
      index === prevChats.length - 1
        ? { ...chat, response: updatedResponse }
        : chat
    )
  );

  // Save to local storage
  const storedStrategies = JSON.parse(localStorage.getItem('strategies') || '[]');
  storedStrategies.push({
    strategy: quickRequest,
    content: updatedResponse,
    timestamp: { date: formattedDate, time: formattedTime } // Store both strategy and timestamp
  });
  localStorage.setItem('strategies', JSON.stringify(storedStrategies));

  scrollToBottom();
};

  

  const handleClearChat = () => {
    setChats([]); // Clear the chat history
    setText('');
    setIsInputVisible(true);
    setHasRequested(false);
    setIsQuickStrategyClicked(false); // Reset the button state to "Quick Strategy"
  };

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  const delayResponse = (): Promise<void> => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  };

//contunue chatting functionality
const handleContinueChatting = async () => {
  setIsInputVisible(true);
  if (text.trim()) {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
    const formattedTime = currentDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

    const newChat: Chat = {
      request: text.trim(),
      response: "",
      timestamp: { date: formattedDate, time: formattedTime } // Include timestamp
    };

    setChats(prevChats => [...prevChats, newChat]);
    setHasRequested(true);

    await delayResponse();

    const updatedResponse = "I understand that your strategy this week is to increase engagement through interactive polls and AMAs. This aligns well with your community's current activity levels. Would you like to add a daily discussion thread to further boost engagement?";

    setChats(prevChats =>
      prevChats.map((chat, index) =>
        index === prevChats.length - 1
          ? { ...chat, response: updatedResponse }
          : chat
      )
    );

    // Save to local storage
    const storedStrategies = JSON.parse(localStorage.getItem('strategies') || '[]');
    storedStrategies.push(newChat);
    localStorage.setItem('strategies', JSON.stringify(storedStrategies));

    scrollToBottom();
    setText('');
  }
};

  
  const [finalizedStrategies, setFinalizedStrategies] = useState<Strategy[]>([]);

  const handleFinalizeStrategyClick = () => {
    if (chats.length > 0) {
        // Filter out empty or duplicate strategies
        const newStrategies: Strategy[] = chats
            .filter(chat => chat.request.trim() !== '' && chat.response.trim() !== '')
            .map(chat => ({
                strategy: chat.request, // Use the request string as the strategy
                content: chat.response || "Default content", // Use the response as content or provide a default value
                timestamp: chat.timestamp // Include the timestamp from the chat
            }));

        if (newStrategies.length > 0) {
            // Update the finalized strategies state with the new strategies
            setFinalizedStrategies(prevStrategies => [...prevStrategies, ...newStrategies]);

            // Save finalized strategies to local storage
            const storedFinalizedStrategies = JSON.parse(localStorage.getItem('finalizedStrategies') || '[]');
            const updatedStrategies = [...storedFinalizedStrategies, ...newStrategies];
            localStorage.setItem('finalizedStrategies', JSON.stringify(updatedStrategies));

            setIsDialogOpen(false); // Close the modal

            // Show loading state
            setIsLoading(true);

            // After 3 seconds, perform the rest of the operations
            setTimeout(() => {
                setShowContent(true);
                setChats([]); // Clear the chat history after finalizing
                setText('');
                setIsInputVisible(true);
                setIsLoading(false); // Hide loading state
            }, 3000); // 3 seconds delay
        }
    }
};
  
  
  const handleDeleteStrategy = (strategyToDelete: string) => {
    setFinalizedStrategies(prevStrategies => {
      const updatedStrategies = prevStrategies.filter(strategy => strategy.strategy !== strategyToDelete);
      localStorage.setItem('finalizedStrategies', JSON.stringify(updatedStrategies));
      return updatedStrategies;
    });
  };
  




  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedContent(text);
      setShowCopyMessage(true);
      setTimeout(() => setShowCopyMessage(false), 2000); // Hide message after 2 seconds
    });
  };


//read more functionallity
  const handleReadMore = (index: number) => {
    setIsReadMore((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };


    useEffect(() => {
    // Save each item's text to cookies
    accordionData.forEach((item, index) => {
      Cookies.set(`accordionText_${item.id}`, item.text);
    });
  }, []);


  const renderText = (text: string, index: number) => {
    const displayText = isReadMore[index] ? text : text.slice(0, 150) + "...";
     return (
      <div>
        <p className="font-normal text-sm leading-[14.56px] inline">
          {displayText}
        </p>
        <button
          className="text-green-500 border-b border-green-500 font-medium text-sm leading-[14.56px]  ml-1 inline"
          onClick={() => handleReadMore(index)}
        >
          {isReadMore[index] ? "Show less" : "Read more"}
        </button>
      </div>
    );
  };


//read more functionality for rationale
  const handleReadMoreStatic = () => {
    setIsReadMoreStatic(!isReadMoreStatic);
  };

  const renderTextStatic = (text: string) => {
    const displayText = isReadMoreStatic ? text : text.slice(0, 150) + "...";
    return (
      <div>
        <p className="font-normal text-sm leading-[14.56px] inline">
          {displayText}
        </p>
        <button
          className="text-green-500 border-b border-green-500 font-medium text-sm leading-[14.56px]  ml-1 inline"
          onClick={handleReadMoreStatic}
        >
          {isReadMoreStatic ? "Show less" : "Read more"}
        </button>
      </div>
    );
  };

  const closeModal = () => {
    setOpenModal(false);
  };



  return (
    <>
    <div className="w-full h-[80vh] md:h-[100vh] lg:h-[100vh] relative overflow-y-auto scrollbar-hide dashboard-color pb-40">
        <div className="w-full flex justify-between">
         <div className="w-[60%] h-[781px] overflow-y-auto scrollbar-hide pt-5 border-r border-[#252525] rounded-[20px] pb-40">
         <div className="flex flex-col gap-4 justify-center items-center">
          <h3 className='text-[32px] font-medium leading-[33.38px] text-center'> Welcome To Co-Pilot</h3>
                <p className="font-normal text-[14px] leading-[14.56px]">
                Create a tailored strategy for your community or project.
                </p>
                <div className="relative inline-block text-left">
      <select
        className="custom-dropdown block w-[150px] h-[32px] bg-[#121212] text-white"
        value={selectedOption}
        onChange={handleOptionChange}
      >
        <option value="This Week" className="font-normal text-base leading-[16.64px]">This Week</option>
        <option value="Next Week" className="font-normal text-base leading-[16.64px]">Next Week</option>
        <option value="This Month" className="font-normal text-base leading-[16.64px]">This Month</option>
      </select>
      <ChevronDownIcon className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white pointer-events-none" />
    </div>
</div>
{isLoading ? (
  <div className="flex justify-center items-center">
      <div className="px-8 border-none rounded-[20px] flex justify-center items-center max-w-auto w-[262px] h-[252px] bg-[#181818] mt-10">
        <div className="mx-auto">
          <Image
            width={48}
            height={48}
            src="/loader.png"
            className="mx-auto mb-5 pt-10 bg-[#181818]"
            alt=""
          />
          <h3 className="font-medium text-[20px] mx-auto text-center text-[#C1C1C1] leading-[24px] mb-3">
            Please wait.....
          </h3>
          <p className="font-medium text-center text-sm leading-[14.56px] mx-auto">
            Now creating your strategy
          </p>
        </div>
      </div>
      </div>
    ) : (

<div className="flex justify-center items-center pt-10">
<div className="custom-textarea bg-[#1F1F1F] w-[610px] h-[195px] overflow-auto scrollbar-hide relative rounded-[16px]">
  {/* Top part displaying the typed text */}

  {/* loading state */}
  
  <>
    

   
 
  <div className="bg-[#1F1F1F] p-2 h-auto overflow-y-auto max-h-[130px]">
    <div className="flex flex-col-reverse space-y-4 space-y-reverse">
      {chats.map((chat, index) => (
        <div key={index} className="mb-4">
          {chat.request && (
            <div className="flex justify-end mb-5">
              <div className="w-[325px] p-[10px] rounded-lg bg-[#252525] border-[#292929] border">
                <p className="font-medium text-xs leading-[12.48px] text-[#B3B3B3]">
                  {chat.request}
                </p>
              </div>
            </div>
          )}
          {chat.response && (
            <div className="flex justify-start">
              <div className="pt-5 w-[366px] py-1 px-[10px] rounded-lg bg-[#252525] border-[#292929] border">
                <p className="font-medium text-xs leading-[12.48px] text-[#B3B3B3]">
                  {chat.response}
                </p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
   
    </>

  <div className="absolute bottom-0 w-full">
    {/* Fixed button container */}
    <div className="flex justify-between items-center bg-[#1F1F1F] p-2">
      {/* Left-aligned Buttons */}
      <div className="flex space-x-4">
        {areButtonsVisible && (
          <Dialog open={isDialogOpen} onOpenChange={(isOpen) => setIsDialogOpen(isOpen)}>
            <DialogTrigger>
              <button
                className={`flex items-center justify-center w-[77px] h-[27px] text-[#0d0d0d] bg-white font-medium text-xs leading-[12.48px] rounded-[24px] py-[10px] px-3 ${!hasRequested ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={!hasRequested}
                onClick={() => setIsDialogOpen(true)}
              >
                <div className="flex items-center">
                  <div className="w-[14px] h-[14px] bg-green-500 rounded-[4px] flex justify-center items-center mr-2">
                    <IoMdCheckmark className="text-white w-[12px] h-[12px]" />
                  </div>
                  <span>Approve</span>
                </div>
              </button>
            </DialogTrigger>
            <DialogContent className="px-8 py-4 md:w-full lg:w-full border-none max-w-auto w-[390px] h-[325px] bg-[#181818] rounded-[66px]">
              <div className="mx-auto">
                <Image
                  width={120}
                  height={120}
                  src="/onboard.png"
                  className="mx-auto mb-5 pt-5"
                  alt=""
                />
                <h3 className="font-medium text-center text-[20px] leading-[26px] w-full mx-auto mb-4">
                  Great Job!
                </h3>
                <p className="font-medium text-sm mx-auto text-center text-[#C1C1C1] leading-[16.8px] mb-5">
                  Now, click on &quot;Finalize Strategy&quot; button to get results
                </p>
                <button
                  className="bg-white items-center flex justify-center text-center 
                    text-xs font-normal ring-offset-white focus-visible:outline-none
                    text-[#0D0D0D] h-10 w-[326px] rounded-[66px] mx-auto shadow-drop2"
                  onClick={handleFinalizeStrategyClick}
                >
                  Finalize Strategy
                </button>
              </div>
            </DialogContent>
          </Dialog>
        )}
        {areButtonsVisible && (
          <button className="w-auto h-[28px] flex justify-center items-center rounded-[24px] border border-[#707070] text-white text-medium text-xs leading-[12.48px] py-[10px] px-4" onClick={handleContinueChatting}>
            Continue Chatting
          </button>
        )}
      </div>
      <div>
        {isQuickStrategyClicked ? (
          <button
            className="flex items-center justify-center w-[53px] h-[28px] rounded-[24px] bg-[#0D0D0D] text-white text-medium text-xs leading-[12.48px] py-[10px] px-4"
            onClick={handleClearChat}
          >
            Clear
          </button>
        ) : (
          <button
            className="flex items-center justify-center h-[28px] rounded-[24px] border border-[#3A3939] text-white text-medium text-xs leading-[12.48px] py-[10px] px-4"
            onClick={handleQuickStrategyClick}
          >
            Quick Strategy
            <div className="flex items-center text-white text-l">
              💡
            </div>
          </button>
        )}
      </div>
    </div>
    {isInputVisible && (
      <div className="flex items-center justify-between w-full h-[34px] px-6 bg-[#1F1F1F] border-t border-[#2B2B2B] pt-2">
        <input
            type="text"
            placeholder="What is on your mind?"
            value={text}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            className="flex-1 input-area bg-transparent border-none outline-none font-normal text-xs italic text-white placeholder-[#707070]"
          />
        <div className="absolute bottom-0 right-7">
          <button
            className="flex justify-center items-center w-[27px] h-[27px] rounded-full bg-[#03ffa3]"
            onClick={handleSendButtonClick}
          >
            <FaArrowUp className="w-[16px] h-[14px] text-black" />
          </button>
        </div>
      </div>
    )}
  </div>
</div>

 {/* stop */}
</div>
)}

{/* accordion content */}
  {showContent && (
        <div className="space-y-4 pb-40 pt-16">
          <h5 className="font-medium text-base leading-[16.64px] pb-2">Actionable Recommendations</h5>

          {/* First row */}
          <div className="bg-[#131313] p-4 rounded-md border border-[#262626]">
            <div className="flex justify-start items-center gap-1 ">
              <IoBulbOutline className="text-[#03FFA3]" />
              <h3 className="text-white font-medium text-base leading-[16.64px] ">Rationale:</h3>
            </div>

            <div className="text-[#DEDEDE] mt-2 font-[300] text-sm leading-[14.56px]">
              {renderTextStatic(
                "To effectively build anticipation for the upcoming product launch, it's crucial to create a sense of excitement and community involvement. By strategically releasing teaser content and actively engaging with your community through polls and AMAs, you can generate buzz and gather valuable feedback that may help refine your launch approach."
              )}
            </div>
          </div>

          {/* Mapped Rows */}
          {accordionData.map((item, index) => (
            <div
              key={item.id}
              className={`${
                index === 0
                  ? "bg-[#0d0d0d] border border-[#262626]"
                  : index === 2
                  ? "bg-[#0d0d0d] border border-[#262626]"
                  : "bg-[#151515] border border-[#262626]"
              } p-4 rounded-md`}
            >
              <div>
                <h3 className="text-white text-sm leading-[14.56px] font-semibold pb-3">
                  {item.title}
                </h3>
                <h5 className="text-[13px] font-medium leading-[20.28px] text-left">
                  Content Suggestion:
                </h5>
                <div className="text-[#DEDEDE] font-normal text-[13px] leading-[20.8px] text-left inline">
                  {renderText(item.text, index)}
                </div>
              </div>

              {isReadMore[index] && (
                <div>
                  <div className="flex justify-start gap-1 items-center pt-2">
                    <span className="font-medium text-xs leading-[12.48px] text-[#BDBDBD]">
                      Recommended Post Time
                    </span>
                    <div className="flex gap-1 w-[91px] items-center h-auto bg-[#131313] p-[3px] rounded-[12px] mr-4">
                      <FaRegClock className="w-[6px] h-[6px]" />
                      <p className="font-[300] text-[8px] leading-[12px] text-[#858585]">
                        19/09/2024{" "}
                        <span className="font-normal text-[8px] leading-[12px] text-white">
                          10:00PM
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="pt-3 flex items-center gap-2">
                  <Dialog open={openModal} onOpenChange={setOpenModal}>
                  <DialogTrigger className="cursor-pointer" asChild>
                    <button
                      className="w-[187px] h-[29px] font-semibold text-xs leading-[12.48px] px-3 rounded-[24px] bg-white text-[#0d0d0d] border-[#E5E5E5] border"
                    >
                      Add to content calendar
                    </button>
                    </DialogTrigger>
                      <DialogContent className="absolute top-[48%] right-[-80%] -translate-x-1/2 max-w-auto border-none outline-none px-6 md:px-4 lg:px-4 rounded-[20px]">
                        <div className="w-full md:w-full lg:w-full h-[80vh] md:h-[80vh] lg:h-[80vh] overflow-y-auto scrollbar-hide border-b-transparent outline-0">
                          <Calendar4 
                         index={index}
                         addStrategyContent={addStrategyContent}
                         onSave={handleSave}
onCloseModal={closeModal}
                         accordionData={accordionData}

                          />
                        </div>
                      </DialogContent>
                    </Dialog>
                    <div
                      className="flex justify-center items-center bg-[#434343] rounded-md w-[25px] h-[25px]"
                      onClick={() => handleCopy(item.text)}
                    >
                      <MdOutlineContentCopy className="w-[13px] h-[13px]" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {showCopyMessage && copiedContent && (
        <div className="w-fit absolute bottom-[80%] right-[80%] bg-gradient-to-r from-[rgba(3,255,163,0.9)] to-[rgba(127,86,217,0.9)] h-auto p-[1px] rounded-lg">
        <div
          className=" w-full bg-[#0d0d0d] text-white rounded-md shadow-lg h-full py-2 px-2"
        >
          Message copied
        </div>
        </div>
      )}
    </div>


       <div className="w-[40%] pb-6 ml-2 h-auto rounded-[10px]">
            <div className="w-[408px]">
              <div className="bg-[#131313] h-auto w-full px-2">

                {/* put your content here */}
                <div className="px-2">
                   {/* content posted tabs section */}
                  <Tabs
                    defaultValue="AllStrategies"
                    className="w-full overflow-x-hidden"
                  >


                    <TabsList className="flex mt-0 mb-0 items-center justify-center md:justify-start lg:justify-start gap-2 md:gap-4 lg:gap-3 px-0 w-full border-b border-[#363636]">
                    <TabsTrigger
                        className="w-fit data-[state=active]:text-white 
                    text-[#4D4D4D] text-xs font-medium leading-[12.8px]"
                        value="AllStrategies" > 
                         All Strategies
                      </TabsTrigger>
                      <TabsTrigger

                     className="w-fit data-[state=active]:text-white 
                    text-[#4D4D4D] text-xs font-medium leading-[12.8px]"
                        value="ScheduledPosts"
                      >
                        Scheduled Posts
                      </TabsTrigger>
                      <TabsTrigger
                        className="w-fit data-[state=active]:text-white
                     text-[#4D4D4D] text-xs font-medium leading-[12.8px]"
                        value="PostedContents"
                      >
                        Posted Content
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent
                      className="w-full pt-2 md:pt-0 lg:pt-0 h-[400px] overflow-y-auto bg-[#181818] pb-40 scrollbar-hide"
                      value="AllStrategies"
                    >
<AllStrategies 
  strategies={finalizedStrategies}  // Pass the entire array of strategies
  onDeleteStrategy={handleDeleteStrategy}
/>


                    </TabsContent>
                    <TabsContent
                      className="w-full pt-2 md:pt-0 lg:pt-0 h-[400px] overflow-y-auto bg-[#181818] pb-40 scrollbar-hide"
                      value="ScheduledPosts"
                    >
                      <ScheduledPosts />
                    </TabsContent>
                    <TabsContent
                      className="w-full pt-2 md:pt-0 lg:pt-0 o h-[400px] overflow-y-auto bg-[#181818] pb-40 scrollbar-hide"
                      value="PostedContents"
                    >
                      <PostedContents />
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
      </div>
      {/* send half of my section */}

          {/* ends here */}
      </div>
      </>
  );
}

export default StrategyPlanning
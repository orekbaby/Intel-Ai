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
import Image from "next/image";
import Calendar4 from "./Calendar4";
import Cookies from "js-cookie";
import { loader, onboard } from "@/assets";
import { CiMenuKebab } from "react-icons/ci";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import StrategyResponses from "./StrategyResponses";
import StrategyButton from "./StrategyButton";


interface Strategy {
  strategy: string;
  content: string;
   timestamp: { date: string; time: string };
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
  onCloseModal: () => void;  // Add onCloseModal to the props
  strategies: Strategy[];
  accordionData: AccordionData[];
   // Example prop if you're passing an array of strategies
}


const StrategyPlanning: React.FC<StrategyPlanningProps> = ({ handleSave, strategies, accordionData, onCloseModal, addStrategyContent }) => {
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
        setShowContent(false);
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
          setShowContent(false);
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
  setShowContent(false);
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
    setChats([]); 
    setText('');
    setShowContent(false);
    setIsInputVisible(true);
    setHasRequested(false);
    setIsQuickStrategyClicked(false); 
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
                // setChats([]); // Clear the chat history after finalizing
                // setText('');
                setIsInputVisible(true)
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
    accordionData.forEach((item:any, index:any,) => {
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
    <div className="w-full h-[100vh] md:h-[100vh] lg:h-[100vh] relative overflow-y-auto scrollbar-hide overflow-x-hidden dashboard-color pb-0 md:pb-40 lg:pb-10 bg-lime-500">
        <div className="w-full flex h-full flex-col md:flex-row lg:flex-row justify-between">
         <div className="w-full md:w-[55%] lg:w-[60%] h-full md:[781px] lg:[781px] overflow-y-auto scrollbar-hide pt-0 md:pt-5 lg:pt-5 border-r border-[#252525] rounded-[20px] pb-0 md:pb-10 lg:pb-10">
         <div className="flex flex-col gap-4 justify-center items-center">
          <h3 className='text-[27px] font-medium leading-[33.38px] text-center pt-5 md:pt-2 lg:pt-0'> Welcome To Co-Pilot</h3>
                <p className="font-normal text-[14px] leading-[14.56px]">
                Create a tailored strategy for your community or project.
                </p>
                <div className="relative inline-block text-left pt-5 pb-5 md:pb-0 lg:pb-0">
      <select
        className="custom-dropdown block w-[150px] h-[32px] bg-[#121212] text-white"
        value={selectedOption}
        onChange={handleOptionChange}
      >
        <option value="This Week" className="font-normal text-base leading-[16.64px]">This Week</option>
        <option value="Next Week" className="font-normal text-base leading-[16.64px]">Next Week</option>
        <option value="This Month" className="font-normal text-base leading-[16.64px]">This Month</option>
      </select>
      <ChevronDownIcon className="absolute right-2 top-9 transform -translate-y-1/2 h-4 w-4 text-white pointer-events-none" />
    </div>
</div>
{isLoading ? (
  <div className="flex justify-center items-center">
      <div className="px-8 border-none rounded-[20px] flex justify-center items-center max-w-auto w-[262px] h-[252px] bg-[#181818] mt-2 md:mt-10 lg:mt-10">
        <div className="mx-auto">
          <Image
            width={48}
            height={48}
            src={loader}
            className="mx-auto mb-3 md:mb-5 lg:mb-5  pt-3 md:pt-5 lg:pt-5 bg-[#181818]"
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

<div className="flex flex-col items-center pt-0 md:pt-10 lg:pt-10 w-full">
  <div className="custom-textarea bg-transparent bg-red-500 md:bg-[#1F1F1F] lg:bg-[#1F1F1F] w-full max-w-[610px] h-[220px] overflow-auto scrollbar-hide relative rounded-[16px]">
    <div className="bg-transparent md:bg-[#1F1F1F] lg:bg-[#1F1F1F] p-2 h-auto overflow-y-auto max-h-[185px] md:h-[165px] lg:h-[165px]">
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
                <div className="pt-5 w-[366px] py-2 px-[10px] rounded-lg bg-[#252525] border-[#292929] border">
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

    <div className="block md:hidden lg:hidden">
      <StrategyResponses
        handleSave={handleSave}
        showContent={showContent}
        finalizedStrategies={finalizedStrategies}
        onDeleteStrategy={handleDeleteStrategy}
        renderTextStatic={renderTextStatic}
        renderText={renderText}
        isReadmore={isReadMore}
        openModal={openModal}
        setOpenModal={setOpenModal}
        addStrategyContent={addStrategyContent}
        closeModal={closeModal}
        showCopyMessage={showCopyMessage}
        copiedContent={copiedContent}
        onCloseModal={onCloseModal}
        strategies={strategies}
        handleCopy={handleCopy}
      />
    </div>
  </div>

  <div className="fixed bottom-[10%] left-0 right-0 p-4 block md:hidden lg:hidden">
    <StrategyButton
      areButtonsVisible={areButtonsVisible}
      isDialogOpen={isDialogOpen}
      setIsDialogOpen={setIsDialogOpen}
      hasRequested={hasRequested}
      setHasRequested={setHasRequested}
      handleFinalizeStrategyClick={handleFinalizeStrategyClick}
      handleContinueChatting={handleContinueChatting}
      handleQuickStrategyClick={handleQuickStrategyClick}
      handleClearChat={handleClearChat}
      isInputVisible={isInputVisible}
      setIsInputVisible={setIsInputVisible}
      text={text}
      setText={setText}
      handleSendButtonClick={handleSendButtonClick}
      handleKeyDown={handleKeyDown}
      handleInputChange={handleInputChange}
      isQuickStrategyClicked={isQuickStrategyClicked}
      setIsQuickStrategyClicked={setIsQuickStrategyClicked}
      setAreButtonsVisible={setAreButtonsVisible}
    />
  </div>

  <div className="w-full max-w-[610px] hidden md:block lg:block">
  <StrategyButton
    areButtonsVisible={areButtonsVisible}
    isDialogOpen={isDialogOpen}
    setIsDialogOpen={setIsDialogOpen}
    hasRequested={hasRequested}
    setHasRequested={setHasRequested}
    handleFinalizeStrategyClick={handleFinalizeStrategyClick}
    handleContinueChatting={handleContinueChatting}
    handleQuickStrategyClick={handleQuickStrategyClick}
    handleClearChat={handleClearChat}
    isInputVisible={isInputVisible}
    setIsInputVisible={setIsInputVisible}
    text={text}
    setText={setText}
    handleSendButtonClick={handleSendButtonClick}
    handleKeyDown={handleKeyDown}
    handleInputChange={handleInputChange}
    isQuickStrategyClicked={isQuickStrategyClicked}
    setIsQuickStrategyClicked={setIsQuickStrategyClicked}
    setAreButtonsVisible={setAreButtonsVisible}
  />
</div>

</div>

)}

{/* accordion content */}
<div className="hidden md:block lg:block">
<StrategyResponses
  handleSave={handleSave}
  showContent={showContent}
  finalizedStrategies={finalizedStrategies}
  onDeleteStrategy={handleDeleteStrategy}
  renderTextStatic={renderTextStatic}
  renderText={renderText}
  isReadmore={isReadMore}
  openModal={openModal}
  setOpenModal={setOpenModal}
  addStrategyContent={addStrategyContent}
  closeModal={closeModal}
  showCopyMessage={showCopyMessage}
  copiedContent={copiedContent}
  onCloseModal={onCloseModal}
  strategies={strategies}
  handleCopy={handleCopy}
/>
</div>

    </div>


       <div className="hidden md:block lg:block w-full md:w-[45%] lg:w-[40%] pb-6 ml-2 md:ml-3 lg:ml-3  h-auto rounded-[10px] overflow-hidden">
            <div className="w-full">
              <div className="bg-[#131313] h-[781px] w-full">

                {/* put your content here */}
                <div className="">
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
                      className="w-full pt-2 md:pt-0 lg:pt-0 h-[90vh] overflow-y-auto bg-[#181818] pb-10 scrollbar-hide"
                      value="AllStrategies"
                    >
    <AllStrategies 
  strategies={finalizedStrategies}  // Pass the entire array of strategies
  onDeleteStrategy={handleDeleteStrategy}
    />


                    </TabsContent>
                    <TabsContent
                      className="w-full pt-2 md:pt-0 lg:pt-0 h-[90vh] overflow-y-auto bg-[#181818] pb-10 scrollbar-hide"
                      value="ScheduledPosts"
                    >
                      <ScheduledPosts />
                    </TabsContent>
                    <TabsContent
                      className="w-full pt-2 md:pt-0 lg:pt-0 h-[90vh] overflow-y-auto bg-[#181818] pb-10 scrollbar-hide"
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
     
  );
}

export default StrategyPlanning
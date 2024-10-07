"use client"
import React, { useEffect, useState } from 'react'
import Cookies from "js-cookie";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MdOutlineContentCopy } from "react-icons/md";import { CiMenuKebab } from 'react-icons/ci';
import { FaArrowLeft, FaRegClock } from 'react-icons/fa';
import Calendar4 from '@/components/Calendar4';
import AllStrategies from '@/components/AllStrategies';
import ScheduledPosts from '@/components/ScheduledPosts';
import PostedContents from '@/components/PostedContents';
import { IoBulbOutline, IoChevronBack } from 'react-icons/io5';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

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

    interface StrategySave {
        onSave: (date: string, time: string, content: string) => void;
    }
  
   interface AccordionData {
        id: number;
        title: string;
        text: string;
        button: string;
      }

      interface PageProps {
        onSave: (date: string, time: string, content: string) => void;
        // Add other props if needed
      }

      
const page = () => {
const [isReadMoreStatic, setIsReadMoreStatic] = useState<boolean>(false);
const [isReadMore, setIsReadMore] = useState<Record<number, boolean>>({});
const [copiedContent, setCopiedContent] = useState<string | null>(null);
const [showCopyMessage, setShowCopyMessage] = useState<boolean>(false);
const [openModal, setOpenModal] = useState<boolean>(false);
const [showContent, setShowContent] = useState<boolean>(false);
const [finalizedStrategies, setFinalizedStrategies] = useState<Strategy[]>([]);  
const [isLoading, setIsLoading] = useState(false);

const router = useRouter(); 
const addStrategyContent = (date: string, time: string, content: string) => {
    // Retrieve the current content from the cookie
    let currentContent = Cookies.get("strategyContents");
    let contentArray = currentContent ? JSON.parse(currentContent) : [];
  
    // Add the new content to the content array
    contentArray.push({
      content: content,
      time: time,
      date: date,
    });
  
    // Update the content and set it in the cookie
    let updatedContent = JSON.stringify(contentArray);
    Cookies.set("strategyContents", updatedContent, {
      expires: 7,
      path: "/", // Use root path to make the cookie available for both /train-ai and /x-agents
      secure: true,
    });
  };
  
  const handleSave = (date: string, time: string, content: string) => {
    // Your handleSave logic here
    console.log("Saving strategy content at index:", );
    // Close modal after save
    closeModal();
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
    <>
  
        <div className="space-y-4 pb-0 md:pb-10 lg:pb-10 pt-5 md:pt-16 lg:pt-16 px-1 relative">
        <div className="mb-6 flex justify-start absolute -top-[-0%] left-10">
            
              <Button className="flex items-center text-[#707070]" onClick={() => router.back()} >
                <FaArrowLeft className="mr-2 text-[#707070]" />
                Back
              </Button>
          
            
          </div>
          <div className="flex justify-between items-center">
          <h5 className="font-medium text-base leading-[16.64px] pb-2 pl-2">Actionable Recommendations</h5>
          <div className="">
         
      {/* First Modal Trigger: CiMenuKebab */}
      <Dialog>
        <DialogTrigger asChild>
          <Button>
            <CiMenuKebab className="w-[24px] h-[24px] text-white block md:hidden lg:hidden" />
          </Button>
        </DialogTrigger>

        {/* First Modal Content: Select Options */}
        <DialogContent
  className="block md:hidden lg:hidden bg-[#131313] absolute text-left top-[40%] w-full h-[400px] border-b-[1px] border-[#333333] py-4 rounded-t-[16px] overflow-y-auto scrollbar-hide"  
>
  <div className="text-xs font-semibold text-white">
    <ul className="flex flex-col space-y-4 px-4">
      {/* Trigger Dialog for All Strategies */}
      <li>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="block text-left w-full py-2 px-4 bg-transparent hover:bg-gray-700 rounded-lg">
              All Strategies
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-[#131313] py-4 w-full h-[400px] overflow-y-auto border-b-[1px] border-[#333333] rounded-t-[16px]">
            <AllStrategies
              strategies={finalizedStrategies}  // Pass the entire array of strategies
              onDeleteStrategy={handleDeleteStrategy}
            />
          </DialogContent>
        </Dialog>
      </li>

      {/* Trigger Dialog for Schedule Posts */}
      <li>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="block text-left w-full py-2 px-4 bg-transparent hover:bg-gray-700 rounded-lg">
              Scheduled Post
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-[#131313] w-full  overflow-y-auto h-[388px] lg:h-[388px] border-b-[1px] border-[#333333] rounded-t-[16px]">
            <ScheduledPosts />
          </DialogContent>
        </Dialog>
      </li>

      {/* Trigger Dialog for Posted Contents */}
      <li>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="block text-left w-full py-2 px-4 bg-transparent hover:bg-gray-700 rounded-lg">
              Scheduled Content
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-[#131313] w-full h-full md:w-[430px] md:h-[388px] border-b-[1px] border-[#333333] rounded-t-[16px]">
            <PostedContents />
          </DialogContent>
        </Dialog>
      </li>
    </ul>
  </div>
</DialogContent>

      </Dialog>
    </div>
          </div>
         
         
          {/* First row */}
          <div className="bg-[#131313] p-4 rounded-md border border-[#262626] relative">
            <div className="flex justify-start items-center gap-1 ">
              <IoBulbOutline className="text-[#03FFA3]" />
              <h3 className="text-white font-medium text-sm md:text-base lg:text-base leading-[16.64px] ">Rationale:</h3>
            </div>

            <div className="text-[#DEDEDE] mt-2 font-[300] text-xs md:text-sm lg:text-sm leading-[14.56px]">
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
                <h3 className="text-white text-sm leading-[14.56px] font-medium md:font-semibold lg:font-semibold pb-3">
                  {item.title}
                </h3>
                <h5 className="text-xs md:text-[13px] lg:text-[13px] font-medium leading-[20.28px] text-left">
                  Content Suggestion:
                </h5>
                <div className="text-[#DEDEDE] font-normal text-[11px] md:text-[13px] lg:text-[13px] leading-[20.8px] text-left inline">
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
  <DialogContent className="absolute top-[48%] right-[-50%] -translate-x-1/2 max-w-auto border-none outline-none px-6 md:px-4 lg:px-4 rounded-[20px]">
    <div className="w-full md:w-full lg:w-full h-[80vh] md:h-[80vh] lg:h-[80vh] overflow-y-auto scrollbar-hide border-b-transparent outline-0">
      <Calendar4 
        index={index}
        addStrategyContent={addStrategyContent}
        onSave={handleSave}
        onCloseModal={closeModal} // Use the correct function name
        accordionData={accordionData}
      />
    </div>
  </DialogContent>
</Dialog>
 <div className="flex justify-center items-center bg-[#434343] rounded-md w-[25px] h-[25px]"
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
     

      {showCopyMessage && copiedContent && (
        <div className="w-fit absolute bottom-[80%] right-[80%] bg-gradient-to-r from-[rgba(3,255,163,0.9)] to-[rgba(127,86,217,0.9)] h-auto p-[1px] rounded-lg">
        <div
          className=" w-full bg-[#0d0d0d] text-white rounded-md shadow-lg h-full py-2 px-2"
        >
          Message copied
        </div>
        </div>
      )}
    </>
  )
}

export default page
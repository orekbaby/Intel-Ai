"use client";
import React, { useState } from "react";
import Cookies from "js-cookie";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import StrategyPlanning from "@/components/StrategyPlanning";
import Compose from "@/components/Compose";
 import Link from "next/link";
import { FaDiscord, FaTelegramPlane } from "react-icons/fa";

import { usePathname } from "next/navigation";
const Page = () => {
  const pathname = usePathname()
  const [isModalOpen, setModalOpen] = useState(false);

  const addEditorContent = (date: string, time: string, content: string) => {
    let currentContent = Cookies.get("tweetContents");
    console.log("Current Cookie Content:", currentContent);
  
    let contentArray = currentContent ? JSON.parse(currentContent) : [];
  
    contentArray.push({
      content: content,
      time: time,
      date: date,
    });
  
    let updatedContent = JSON.stringify(contentArray);
  
    Cookies.set("tweetContents", updatedContent, {
      expires: 7,
      path: "/",
      secure: true,
    });
  };

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
  

  // Define the handleSave function
  const handleSave = (index: number) => {
    // Your handleSave logic here
    console.log("Saving strategy content at index:", index);
    // Close modal after save
    closeModal();
  };

  // Define the closeModal function
  const closeModal = () => {
    setModalOpen(false);
    console.log("Modal closed");
  };

  return (
    <>
      <div className="pl-0 md:pl-0 lg:pl-28 xl:pl-28 2xl:pl-24 w-full h-[100vh] overflow-y-auto overflow-x-hidden scrollbar-hide mb-4">
        <div className="w-full dashboard-color h-[100vh] overflow-y-auto overflow-x-hidden scrollbar-hide pb-5">
          <div className="w-full  mb-0 md:mb-10 lg:mb-10 h-full overflow-x-hidden">
            <div className= "w-full pt-5 overflow-x-hidden">
              <div className="border-[#1C1C1C] border w-[358px] rounded-[40px] h-auto">
            <div className="flex md:hidden lg:hidden items-center justify-center pt-2 md:pt-0 lg:pt-0 gap-6 mx-auto pl-0 md:pl-[20rem] lg:pl-[20rem] mb-5" >
        <Link href="/train-ai" prefetch={false}
        
        >
          <div className={`w-auto h-[37px] rounded-[24px] px-2 py-2 flex items-center gap-2 text-[14px] leading-[14.3px] font-medium ${
            pathname === "/train-ai" ? "bg-[#03FFA3] text-[#0d0d0d]" : "text-[#6A6A6A]"
          }`}>
            <div className="flex items-center gap-1">
              <div className="flex items-center justify-center border-2 border-[#0d0d0d] rounded-full w-[17px] h-[17px]">
                <FaDiscord className="text-[#0d0d0d] w-[14px] h-[14px]" />
              </div>
              <div className="flex items-center justify-center bg-[#0d0d0d] rounded-full w-[17px] h-[17px]">
                <FaTelegramPlane className="text-[#03FFA3] w-[14px] h-[14px]" />
              </div>
            </div>
            Community Training
          </div>
        </Link>
        <Link href="/x-agents" prefetch={false}
        >
          <div className={`w-auto h-[37px] rounded-[24px] px-2 py-2 flex items-center text-[14px] leading-[14.3px] font-medium ${
            pathname === "/x-agents" ? "bg-[#03FFA3] text-[#0d0d0d]" : "text-[#6A6A6A]"
          }`}>
            X Content Studio
          </div>
        </Link>
      </div>
      </div>
              
              <Tabs defaultValue="StrategyPlanning" className="w-full h-auto px-0 md:px-4 lg:px-4 pt-0 md:pt-2 lg:pt-2 pb-5 overflow-x-hidden">
              <TabsList className="w-fit max-w-none overflow-hidden border-[#272727] rounded-[50px] gap-4 flex justify-center md:justify-start lg:justify-start border items-center mx-auto md:mx-0 lg:mx-0">

<TabsTrigger
  className="w-[128px] h-[35px] p-[10px] data-[state=active]:text-black data-[state=active]:bg-white text-white rounded-lg md:rounded-[50px] lg:rounded-[50px] bg-[#1B1B1B] font-medium text-sm"
  value="StrategyPlanning"
>
  Strategy Planning
</TabsTrigger>

<TabsTrigger
  className="w-[128px] h-[35px] font-medium text-sm leading-[14.56px] data-[state=active]:text-black data-[state=active]:bg-white text-white rounded-lg md:rounded-[50px] lg:rounded-[50px] bg-[#1B1B1B] p-[10px]"
  value="PostNow"
>
  Post Now
</TabsTrigger>

</TabsList>

                
                <TabsContent className="w-full bg-[#181818] overflow-x-hidden" value="StrategyPlanning">
                  <StrategyPlanning
                    addStrategyContent={addStrategyContent}
                    handleSave={() => handleSave(0)}  
                    onCloseModal={closeModal} 
                    strategies={[]}
                  accordionData={[]}
                  />
                </TabsContent>
                
                <TabsContent className="w-full bg-[#181818]  overflow-x-hidden" value="PostNow">
                  <Compose
                    addEditorContent={addEditorContent}
                  />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;

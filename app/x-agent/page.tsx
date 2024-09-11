"use client";
import React, { useState } from "react";
import Cookies from "js-cookie";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import StrategyPlanning from "@/components/StrategyPlanning";
import Compose from "@/components/Compose";

const Page = () => {
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
      path: "/x-agent",
      secure: true,
    });
  };

  const addStrategyContent = (date: string, time: string, content: string) => {
    let currentContent = Cookies.get("strategyContents");
    let contentArray = currentContent ? JSON.parse(currentContent) : [];

    contentArray.push({
      content: content,
      time: time,
      date: date,
    });

    let updatedContent = JSON.stringify(contentArray);
    Cookies.set("strategyContents", updatedContent, {
      expires: 7,
      path: "/x-agent",
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
      <div className="pl-0 md:pl-16 lg:pl-20 xl:pl-20 2xl:pl-24 w-full h-[100vh] overflow-y-auto scrollbar-hide mb-4">
        <section className="relative w-full h-[100vh] overflow-y-auto scrollbar-hide pb-5 dashboard-color">
          <div className="w-full pl-0 md:pl-8 lg:pl-10 xl:pl-10 2xl:pl-12 pr-0 md:pr-4 lg:pr-4 xl:pr-6 2xl:pr-8 relative mb-0 md:mb-10 lg:mb-10 h-full">
            <div className="pt-5">
              <Tabs defaultValue="StrategyPlanning" className="w-full h-auto px-4 pt-2 pb-5 fixed">
                <TabsList className="w-[256px] border-[#272727] rounded-[50px] gap-4 flex justify-end border items-center">
                  <TabsTrigger
                    className="w-[128px] h-[35px] p-[10px] data-[state=active]:text-black data-[state=active]:bg-[#03FFA3] text-white rounded-[50px] bg-[#1B1B1B] font-medium text-sm"
                    value="StrategyPlanning"
                  >
                    Strategy Planning
                  </TabsTrigger>

                  <TabsTrigger
                    className="w-[128px] h-[35px] font-medium text-sm leading-[14.56px] data-[state=active]:text-black data-[state=active]:bg-[#03FFA3] text-white rounded-[50px] bg-[#1B1B1B] p-[10px]"
                    value="PostNow"
                  >
                    Post Now
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent className="bg-[#181818]" value="StrategyPlanning">
                  <StrategyPlanning
                    addStrategyContent={addStrategyContent}
                    handleSave={() => handleSave(0)}  
                    onCloseModal={closeModal} 
                    strategies={[]}
                  />
                </TabsContent>
                
                <TabsContent value="PostNow">
                  <Compose
                    addEditorContent={addEditorContent}
                  />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Page;

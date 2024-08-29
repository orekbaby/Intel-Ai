"use client";
import React from "react";
import Cookies from "js-cookie";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ContentStudio from "@/components/ContentStudio";
const page = () => {

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
      path: "/x-Agents",
      secure: true,
    });
  };

  const addStrategyContent = (date: string, time: string, content: string) => {
    let currentContent = Cookies.get('strategyContents');
    let contentArray = currentContent ? JSON.parse(currentContent) : [];

    contentArray.push({
      content: content,
      time: time,
      date: date,
    });

    let updatedContent = JSON.stringify(contentArray);
    Cookies.set('strategyContents', updatedContent, {
      expires: 7,
      path: '/x-Agents',
      secure: true,
    });
  };

  return (
    <>
      <div className="pl-0 md:pl-16 lg:pl-20 xl:pl-20 2xl:pl-24 w-full h-[100vh] overflow-y-auto scrollbar-hide mb-4">
        <section className="relative w-full h-[100vh] overflow-y-auto scrollbar-hide pb-5 dashboard-color">
          <div className="w-full pl-0 md:pl-8 lg:pl-10 xl:pl-10 2xl:pl-12 pr-0 md:pr-4 lg:pr-4 xl:pr-6 2xl:pr-8 relative mb-0 md:mb-10 lg:mb-10 h-full">
            <div className="pt-5">
              <Tabs
                defaultValue="ContentStudio"
                className="w-full pl-0 pt-5 md:pt-0 lg:pt-0 "
              >
                <TabsList className="flex mt-0 mb-0 items-center justify-center md:justify-start lg:justify-start gap-2 md:gap-4 lg:gap-3 px-0 w-fit">
                  <TabsTrigger
                    className="w-fit  md:w-[148px] pl-6 lg:w-[179px] h-[37px] shadow-sm rounded-[24x] px-[10px] md:px-[10px]  data-[state=active]:text-white
                     data-[state=active]:bg-[#1B1B1B]
                     md:data-[state=active]:bg-[#181818] lg:data-[state=active]:bg-transparent text-[#4D4D4D] text-sm gap-2 font-medium leading-[14.56px]"
                    value="ContentStudio"
                  >
                    Content Studio (Co-pilot)
                  </TabsTrigger>
                   </TabsList>
                <TabsContent
                  className="w-full h-full pt-5 md:pt-0 lg:pt-0 overflow-x-hidden"
                  value="ContentStudio"
                >
                  <ContentStudio 
                  addEditorContent={addEditorContent}
                  addStrategyContent={addStrategyContent}
                
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

export default page;

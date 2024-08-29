"use client";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Compose from "./Compose";
import Drafts from "./Drafts";
import StrategyPlanning from "./StrategyPlanning";
import { add } from "date-fns";

interface ContentStudioProps {
  addStrategyContent: (date: string, time: string, content: string) => void;
addEditorContent: (date: string, time: string, content: string) => void;

}

const ContentStudio: React.FC<ContentStudioProps> = ({addStrategyContent, addEditorContent, }) => {
  const [draftCount, setDraftCount] = useState(0);
  const handleAddToDraft = () => {
    setDraftCount((prevCount) => prevCount + 1);
  };
  return (
    <Tabs defaultValue="StrategyPlanning" className="w-full h-auto px-4 pt-5 pb-5 fixed">
      <TabsList className=" w-[256px] border-[#272727] rounded-[50px] gap-4 flex justify-end border items-center">
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
          handleSave={function (): void {
            throw new Error("Function not implemented.");
          } } strategies={[]}         />
      </TabsContent>
      <TabsContent value="PostNow">
      <Compose
         onAddToDraft={handleAddToDraft}
         addEditorContent={addEditorContent} 
         />
      </TabsContent>
    </Tabs>
  );
};

export default ContentStudio;

"use client";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Compose from "./Compose";
import Drafts from "./Drafts";

const ContentStudio: React.FC = () => {
  const [draftCount, setDraftCount] = useState(0);
  const handleAddToDraft = () => {
    setDraftCount((prevCount) => prevCount + 1);
  };
  return (
    <Tabs defaultValue="Compose" className="w-full h-auto px-4 pt-5 pb-5 fixed">
      <TabsList className=" w-[256px] border-[#272727] rounded-[50px] gap-4 flex justify-end border items-center">
        <TabsTrigger
          className="w-[128px] h-[35px] p-[10px] data-[state=active]:text-black data-[state=active]:bg-[#03FFA3] text-white rounded-[50px] bg-[#1B1B1B] font-medium text-sm"
          value="Compose"
        >
          Compose
        </TabsTrigger>
        <TabsTrigger
          className="w-[128px] h-[35px] font-medium text-sm leading-[14.56px] data-[state=active]:text-black data-[state=active]:bg-[#03FFA3] text-white rounded-[50px] bg-[#1B1B1B] p-[10px]"
          value="Drafts"
        >
          Drafts ({draftCount})
        </TabsTrigger>
      </TabsList>
      <TabsContent value="Compose">
        <Compose onAddToDraft={handleAddToDraft} />
      </TabsContent>
      <TabsContent value="Drafts">
        <Drafts />
      </TabsContent>
    </Tabs>
  );
};

export default ContentStudio;

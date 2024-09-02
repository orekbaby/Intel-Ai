import React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ApeTerminalTraining from "@/components/trainAiTabs/ApeTerminalTraining";
import LaunchPadTraining from "@/components/trainAiTabs/LaunchPadTraining";
import ProjectTraining from "@/components/projectTrainTabs/ProjectTraining";
import QueryEscalationProtocol from "@/components/projectTrainTabs/QueryEscalationProtocol";

const Page = () => {
  return (
    <>
      <div className="pl-2 md:pl-20 lg:pl-20 w-full h-[100vh]">
        <section className="relative w-full h-full mb-48 bg-[#131313]">
          <div className="w-full px-4 md:px-6 lg:px-10 relative mb-0 md:mb-10 lg:mb-10 h-full">
            <div className="pt-5">
              <Tabs
                defaultValue="ProjectTraining"
                className="w-full pl-0 pt-5 md:pt-0 lg:pt-5 overflow-x-hidden"
              >
                <TabsList className="flex mt-0 mb-0 items-center justify-center md:justify-start lg:justify-start gap-2 md:gap-4 lg:gap-10 px-6 w-full border-b border-[#2B2B2B] pb-5">
  <TabsTrigger
    className="w-[163px] md:w-fit lg:w-fit h-[auto] min-h-[27px] rounded-[24px] px-4 md:px-2 lg:px-3 py-1 data-[state=active]:text-[#0d0d0d] data-[state=active]:bg-[#1E1E1E]
     md:data-[state=active]:bg-transparent lg:data-[state=active]:bg-white text-[#6A6A6A] text-sm gap-2 font-medium flex items-center justify-center"
    value="ProjectTraining"
  >
    Project Training
  </TabsTrigger>
  <TabsTrigger
    className="w-[163px] md:w-fit lg:w-fit h-[auto] min-h-[27px] rounded-[24px] px-4 md:px-2 lg:px-3 py-1 data-[state=active]:text-[#0d0d0d] data-[state=active]:bg-[#1E1E1E]
     md:data-[state=active]:bg-transparent lg:data-[state=active]:bg-white text-[#6A6A6A] text-sm gap-2 font-medium flex items-center justify-center"
    value="QueryEscalationProtocol"
  >
    Query Escalation Protocol
  </TabsTrigger>
</TabsList>

                <TabsContent
                  className="w-full h-full pt-5 md:pt-0 lg:pt-0 overflow-x-hidden"
                  value="ProjectTraining"
                >
                  <ProjectTraining />
                </TabsContent>

                <TabsContent
                  className="w-full h-full pt-5 md:pt-0 lg:pt-0 overflow-x-hidden"
                  value="QueryEscalationProtocol"
                >
                  <QueryEscalationProtocol />
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

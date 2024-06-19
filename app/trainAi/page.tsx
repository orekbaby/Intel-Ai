import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import ApeTerminalTraining from "@/components/trainAiTabs/ApeTerminalTraining";
import LaunchPadTraining from "@/components/trainAiTabs/LaunchPadTraining";

const page = () => {
  return (
    <>
      <main className="pl-[290px] w-full h-[100vh] overflow-y-auto scrollbar-hide">
        <section className="relative w-full h-full mb-48 bg-[#131313]">
          <div className="w-full md:max-w-[1280px] lg:max-w-[1280px] px-0 md:px-0 lg:px-8 relative mb-0 md:mb-10 lg:mb-10 h-full">
            <div className="pt-5">
              <Tabs
                defaultValue="ApeTerminalTraining"
                className="w-full pl-2 pr-3 md:pl-0 lg:pl-0 pt-5 md:pt-0 lg:pt-0 overflow-x-hidden"
              >
                <TabsList className="flex mt-0 mb-0 items-center justify-between md:justify-start lg:justify-start gap-0 md:gap-2 lg:gap-6 px-2 md:px-0 lg:px-0">
                  <TabsTrigger
                    className=" w-full md:w-fit lg:w-fit px-5 md:px-2 lg:px-2 data-[state=active]:text-white text-[#4D4D4D] text-[9px] md:text-sm lg:text-sm gap-2 font-medium"
                    value="ApeTerminalTraining"
                  >
                    {" "}
                    ApeTerminalTraining
                  </TabsTrigger>
                  <TabsTrigger
                    className=" w-full md:w-fit lg:w-fit px-5 md:px-2 lg:px-2 data-[state=active]:text-white text-[#4D4D4D] text-[9px] md:text-sm lg:text-sm gap-2 font-medium"
                    value="LaunchPadTraining"
                  >
                    LaunchPadTraining
                  </TabsTrigger>
                </TabsList>
                <TabsContent
                  className="w-full h-full pt-10 overflow-x-hidden"
                  value="ApeTerminalTraining"
                >
                  <ApeTerminalTraining />
                </TabsContent>

                <TabsContent
                  className="w-full h-full pt-10 overflow-x-hidden"
                  value="LaunchPadTraining"
                >
                  <LaunchPadTraining />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default page;

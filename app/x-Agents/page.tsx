import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ContentStudio from "@/components/ContentStudio";
const page = () => {
  return (
    <>
      <div className="pl-0 md:pl-16 lg:pl-20 xl:pl-20 2xl:pl-24 w-full h-[100vh] overflow-y-auto scrollbar-hide mb-4">
        <section className="relative w-full h-[100vh] overflow-y-auto scrollbar-hide pb-5 dashboard-color">
          <div className="w-full pl-0 md:pl-8 lg:pl-10 xl:pl-10 2xl:pl-12 pr-0 md:pr-4 lg:pr-4 xl:pr-6 2xl:pr-8 relative mb-0 md:mb-10 lg:mb-10 h-full">
            <div className="pt-5">
              <Tabs
                defaultValue="ContentStudio"
                className="w-full pl-0 pt-5 md:pt-0 lg:pt-0 overflow-x-hidden"
              >
                <TabsList className="flex mt-0 mb-0 items-center justify-center md:justify-start lg:justify-start gap-2 md:gap-4 lg:gap-3 px-0 w-fit">
                  <TabsTrigger
                    className="w-fit h-[35px] md:w-[148px] lg:w-[148px] shadow-sm rounded-[50px] px-[10px] md:px-[10px] lg:px-[10px] py-[10px] data-[state=active]:text-white
                     data-[state=active]:bg-[#1B1B1B]
                     md:data-[state=active]:bg-[#1B1B1B] lg:data-[state=active]:bg-transparent text-[#4D4D4D] text-sm gap-2 font-medium leading-[14.56px]"
                    value="ContentStudio"
                  >
                    Content Studio
                  </TabsTrigger>
                  <TabsTrigger
                    className="w-fit h-auto md:w-[148px] lg:w-[148px] px-4 md:px-2 lg:px-2 py-2 data-[state=active]:bg-[#1B1B1B]
                     md:data-[state=active]:bg-transparent lg:data-[state=active]:bg-[#1B1B1B] data-[state=active]:text-white text-[#4D4D4D] text-sm gap-2 font-medium rounded-[16px]"
                    value="ContentScheduler"
                  >
                    Content Scheduler
                  </TabsTrigger>

                  <TabsTrigger
                    className="w-full md:w-fit lg:w-fit px-4 md:px-2 lg:px-2 py-2 data-[state=active]:bg-[#1E1E1E]
                     md:data-[state=active]:bg-[#1B1B1B] lg:data-[state=active]:bg-[#1B1B1B] data-[state=active]:text-white text-[#4D4D4D] text-sm gap-2 font-medium rounded-[16px]"
                    value="Co-pilot"
                  >
                    Co-pilot
                  </TabsTrigger>
                </TabsList>
                <TabsContent
                  className="w-full h-full pt-5 md:pt-0 lg:pt-0 overflow-x-hidden"
                  value="ContentStudio"
                >
                  <ContentStudio />
                </TabsContent>

                <TabsContent
                  className="w-full h-full pt-5 md:pt-10 lg:pt-10 overflow-x-hidden"
                  value="ContentScheduler"
                >
                  Content Scheduler
                </TabsContent>

                <TabsContent
                  className="w-full h-full pt-5 md:pt-10 lg:pt-10 overflow-x-hidden"
                  value="CoPilot"
                >
                  Co-pilot
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

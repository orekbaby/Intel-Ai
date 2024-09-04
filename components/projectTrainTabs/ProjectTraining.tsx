// ProjectTraining.tsx
"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ApeTerminalTraining from "@/components/trainAiTabs/ApeTerminalTraining";
import LaunchPadTraining from "@/components/trainAiTabs/LaunchPadTraining";
import { useUserInput } from "@/context/UserInputContext"; // Import the context

const ProjectTraining: React.FC = () => {
  const { projectName } = useUserInput(); // Retrieve the input from the context

  const tabValue = projectName.replace(/\s+/g, "-"); // Replace spaces with hyphens for value

  return (
    <div className="w-full h-[100vh] overflow-y-auto scrollbar-hide">
      <section className="relative w-full h-full mb-48 bg-[#131313]">
        <div className="w-full px-0 md:px-6 lg:px-0 relative mb-0 md:mb-10 lg:mb-10 h-full">
          <div className="pt-2">
            <Tabs
              defaultValue={tabValue} // Use the user input as the default tab value
              className="w-full pt-5 md:pt-0 lg:pt-0 pl-6 overflow-x-hidden"
            >
              <TabsList className="flex mt-0 mb-0 items-center justify-center md:justify-start lg:justify-start gap-2 md:gap-4 lg:gap-6 px-0 w-fit">
                <TabsTrigger
                  className="w-[163px] h-auto md:w-fit lg:w-fit px-4 md:px-2 lg:px-2 data-[state=active]:text-white rounded-[16px] data-[state=active]:bg-[#1E1E1E] md:data-[state=active]:bg-transparent lg:data-[state=active]:bg-transparent text-[#4D4D4D] text-sm gap-2 font-medium"
                  value={tabValue} // Use the user input as the tab value
                >
                  {projectName} Training {/* Display the user input as the tab name */}
                </TabsTrigger>
                <TabsTrigger
                  className="w-full md:w-fit lg:w-fit px-4 md:px-2 lg:px-2 data-[state=active]:bg-[#1E1E1E] md:data-[state=active]:bg-transparent lg:data-[state=active]:bg-transparent data-[state=active]:text-white text-[#4D4D4D] text-sm gap-2 font-medium rounded-[16px]"
                  value="LaunchPadTraining"
                >
                  Launchpad Projects Training
                </TabsTrigger>
              </TabsList>
              <TabsContent
                className="w-full h-full pt-5 md:pt-10 lg:pt-5 overflow-x-hidden"
                value={tabValue} // Ensure the tab content matches the new value
              >
                <ApeTerminalTraining />
              </TabsContent>

              <TabsContent
                className="w-full h-full pt-5 md:pt-10 lg:pt-5 overflow-x-hidden"
                value="LaunchPadTraining"
              >
                <LaunchPadTraining />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectTraining;

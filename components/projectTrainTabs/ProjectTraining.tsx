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
    <div className="w-full h-[100vh] overflow-y-auto scrollbar-hide overflow-x-hidden">
      <section className="relative w-full h-full mb-48 bg-[#131313] overflow-x-hidden">
        <div className="w-full px-0 md:px-6 lg:px-0 relative mb-0 md:mb-10 lg:mb-10 h-full overflow-x-hidden">
          <div className="pt-2">
            <Tabs
              defaultValue={tabValue} // Use the user input as the default tab value
              className="w-full pt-0 md:pt-0 lg:pt-0 pl-0 md:pl-6 lg:pl-6 overflow-x-hidden"
            >
              <TabsList className="flex overflow-x-hidden mt-0 mb-0 items-center justify-center md:justify-start lg:justify-start gap-4 md:gap-4 lg:gap-6 px-0 w-full">
                <TabsTrigger
                  className="w-fit h-auto md:w-fit lg:w-fit px-3 md:px-2 lg:px-2 data-[state=active]:text-white rounded-none data-[state=active]:border-b-2 border-white md:data-[state=active]:bg-transparent lg:data-[state=active]:bg-transparent text-[#4D4D4D] text-sm font-medium"
                  value={tabValue} // Use the user input as the tab value
                >
                  {projectName} Training {/* Display the user input as the tab name */}
                </TabsTrigger>
                <TabsTrigger
                  className="w-fit h-auto md:w-fit lg:w-fit px-3 md:px-2 lg:px-2 data-[state=active]:text-white rounded-none data-[state=active]:border-b-2 border-white md:data-[state=active]:bg-transparent lg:data-[state=active]:bg-transparent text-[#4D4D4D] text-sm font-medium"
                  value="LaunchPadTraining"
                >
                  Launchpad Projects Training
                </TabsTrigger>
              </TabsList>
              <TabsContent
                className="w-full h-full pt-0 md:pt-10 lg:pt-5 overflow-x-hidden"
                value={tabValue} // Ensure the tab content matches the new value
              >
                <ApeTerminalTraining />
              </TabsContent>

              <TabsContent
                className="w-full h-full pt-0 md:pt-10 lg:pt-5 overflow-x-hidden"
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

"use client"
import React, { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ApeTerminalTraining from "@/components/trainAiTabs/ApeTerminalTraining";
import LaunchPadTraining from "@/components/trainAiTabs/LaunchPadTraining";
import ProjectTraining from "@/components/projectTrainTabs/ProjectTraining";
import QueryEscalationProtocol from "@/components/projectTrainTabs/QueryEscalationProtocol";
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '@/store/reducers/userSlice';
import Cookies from 'js-cookie';
import StrategyPlanning from "@/components/StrategyPlanning";
import Link from "next/link";
import { FaDiscord, FaTelegramPlane } from "react-icons/fa";

import { usePathname } from "next/navigation";

const Page = () => {
  const [isModalOpen, setModalOpen] = useState(false);
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
      path: "/x-agents",
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

  const selectedUser = useSelector((state:any) => state.user.selectedUser);
  const dispatch = useDispatch();
  const pathname = usePathname();
  useEffect(() => {
    if (!selectedUser || selectedUser !== 'communityManager') {
      const userFromCookie = Cookies.get('user');
      if (userFromCookie === 'communityManager') {
        dispatch(setUser(userFromCookie));
      } else {
        // Redirect if the user doesn't have permission
      }
    }
  }, [selectedUser, dispatch]);
  return (
    <>
      <div className="pl-0 md:pl-0 lg:pl-24 xl:pl-28 2xl:pl-24 w-full h-[100vh] overflow-y-auto overflow-x-hidden scrollbar-hide mb-4">
        <section className="w-full h-full mb-48 bg-[#131313] overflow-x-hidden">
          <div className="w-full px-3 md:px-6 lg:px-10 relative mb-0 md:mb-10 lg:mb-10 h-full overflow-x-hidden">
            <div className="w-full pt-2 md:pt-5 lg:pt-5 overflow-x-hidden">
            <div className="flex md:hidden lg:hidden items-center justify-center pt-5 md:pt-0 lg:pt-0 gap-4 mx-auto pl-0 md:pl-[20rem] lg:pl-[20rem] mb-5 overflow-x-hidden">
  <Link href="/train-ai" prefetch={false}>
    <div className={`w-auto h-[37px] rounded-l-[24px] px-2 py-2 flex items-center gap-2 text-[14px] leading-[14.3px] font-medium ${
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

  <Link href="/x-agents" prefetch={false}>
    <div className={`w-auto h-[37px] rounded-l-[24px] px-2 py-2 flex items-center text-[14px] leading-[14.3px] font-medium ${
      pathname === "/x-agents" ? "bg-[#03FFA3] text-[#0d0d0d]" : "text-[#6A6A6A]"
    }`}>
      X Content Studio
    </div>
  </Link>
</div>
<Tabs
defaultValue="ProjectTraining"
                className="w-full pl-0 pt-5 md:pt-5 lg:pt-5 overflow-x-hidden"
              >
                <TabsList className="flex mt-0 mb-5 items-center justify-center md:justify-start lg:justify-start gap-2 md:gap-4 lg:gap-10 px-6  py-4  w-full border-b border-[#2B2B2B] pb-10">
  <TabsTrigger
    className="w-fit md:w-fit lg:w-fit h-[38px] rounded-[8px] md:rounded-[24px] lg:rounded-[24px] px-4 md:px-2 lg:px-3 py-2 md:py-1 lg:py-1  
     data-[state=active]:bg-white text-[#6A6A6A] text-sm gap-2 font-medium flex items-center justify-center"
    value="ProjectTraining"
  >
    Project Training
  </TabsTrigger>

  <TabsTrigger
    className="hidden md:flex lg:flex w-fit md:w-fit lg:w-fit h-[38px] rounded-[8px] md:rounded-[24px] lg:rounded-[24px] px-4 md:px-2 lg:px-3 py-2  md:py-1 lg:py-2 
     data-[state=active]:bg-white text-[#6A6A6A] text-sm gap-2 font-medium items-center justify-center"
    value="StrategyPlanning"
  >
    Strategy Planning
  </TabsTrigger>
  <TabsTrigger
    className="w-fit md:w-fit lg:w-fit h-[38px] rounded-[8px] md:rounded-[24px] lg:rounded-[24px] px-4 md:px-2 lg:px-3 py-2  md:py-1 lg:py-1 
     data-[state=active]:bg-white text-[#6A6A6A] text-sm gap-2 font-medium items-center justify-center"
    value="QueryEscalationProtocol"
  >
    Query Escalation Protocol
  </TabsTrigger>
</TabsList>

                <TabsContent
                  className="w-full h-full pt-0 md:pt-0 lg:pt-0 overflow-x-hidden"
                  value="ProjectTraining"
                >
                  <ProjectTraining />
                </TabsContent>

                <TabsContent
                  className="w-full bg- h-full pt-0 md:pt-0 lg:pt-5 overflow-x-hidden"
                  value="StrategyPlanning"
                >
                 <StrategyPlanning
                    addStrategyContent={addStrategyContent}
                    handleSave={() => handleSave(0)}  
                    onCloseModal={closeModal} 
                    strategies={[]}
                    accordionData={[]}
                  />
                </TabsContent>

                <TabsContent
                  className="w-full h-full pt-0 md:pt-0 lg:pt-0"
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

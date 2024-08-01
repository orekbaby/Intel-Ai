"use client";
import { savedDrafts } from "@/utils/mockData";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { CiMenuKebab } from "react-icons/ci";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ContentPosted from "./ContentPosted";
import ScheduleTweet from "./ScheduleTweet";
import DraftCard from "./DraftCard";
import { GoPencil } from "react-icons/go";
import { FaCopy } from "react-icons/fa";
import { CiImageOn } from "react-icons/ci";
import { HiOutlineArrowPath } from "react-icons/hi2";

const Drafts = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0); // Default to the first index being active
  const activeDraft = savedDrafts[activeIndex];

  return (
    <>
      <div className="w-full h-[80vh] md:h-[100vh] lg:h-[100vh] relative overflow-y-auto scrollbar-hide dashboard-color px-4">
        <div className="w-full flex justify-between gap-4">
          <div className="w-[60%] bg-[#181818] h-[781px] pt-10 border-r border-[#252525] rounded-[20px]">
            <div className="w-full h-[781px] bg-[#181818] py-4 px-6">
              <h5 className="font-medium text-[13.75px] leading-[14.3px] text-[#6E6E6E] ">
                TITLE
              </h5>
              <div className="flex justify-start items-center gap-4">
                <h6 className="font-semibold text-sm leading-[12px]">
                  {activeDraft.draftTitle}
                </h6>
                <div className="w-[25px] h-[25px] bg-[#434343] flex justify-center items-center rounded-[4px]">
                  <GoPencil className="w-[16px] h-[16px]" />
                </div>
              </div>

              <h5 className="font-medium text-[13.75px] leading-[14.3px] text-[#6E6E6E] mb-1 pt-5">
                RESULT
              </h5>
              <p className="font-normal text-sm leading-[14.56px] mb-3">
                {activeDraft.result}
              </p>

              <div className="flex justify-between items-center">
                <div className="flex justify-start gap-3 items-center">
                  <div className="flex justify-center items-center bg-[#434343] rounded-md w-[25px] h-[25px]">
                    <FaCopy className="w-[10.89px] h-[14px] text-[#C8C8C8]" />
                  </div>
                  <div className="flex justify-center items-center bg-[#434343] rounded-md w-[25px] h-[25px]">
                    <CiImageOn className="w-[13px] h-[13px]" />
                  </div>

                  <div className="flex justify-center items-center bg-[#434343] rounded-md w-[25px] h-[25px]">
                    <HiOutlineArrowPath className="w-[13px] h-[13px]" />
                  </div>
                </div>

                <div className="flex justify-end items-center gap-1">
                  <Button className="font-normal text-[15px] leading-[15.6px] text-[#A4A4A4]">
                    Schedule
                  </Button>
                  <Button className="w-[114px] h-[25px] rounded-[66px] border-[#434343] border font-medium text-[12px] leading-[12.48px] text-[#A4A4A4]">
                    Post now
                  </Button>
                </div>
              </div>
            </div>
          </div>
          {/* right section content */}
          <div className="w-[40%] bg-[#181818] h-[100vh] pb-6 ml-5 rounded-[10px]">
            <div className="w-[408px]">
              <div className="bg-[#131313] h-auto w-full px-2 pb-20">
                <div className="bg-[#141414] border-b border-[#1d1d1d] h-[49px] flex items-center mb-3">
                  <h5 className="font-normal text-sm leading-[12px]">
                    Saved Drafts
                  </h5>
                </div>

                <div className="flex flex-col gap-2">
                  {savedDrafts.map((row, index) => (
                    <DraftCard
                      key={index}
                      draftTitle={row.draftTitle}
                      isActive={activeIndex === index}
                      onClick={() => setActiveIndex(index)}
                    />
                  ))}
                </div>
              </div>
              <Tabs
                defaultValue="ScheduledTweet"
                className="w-full overflow-x-hidden pt-5"
              >
                <TabsList className="flex mt-0 mb-0 items-center justify-center md:justify-start lg:justify-start gap-2 md:gap-4 lg:gap-3 px-0 w-full border-b border-[#363636]">
                  <TabsTrigger
                    className="w-fit data-[state=active]:text-white border-white border-b
                    text-[#4D4D4D] text-xs font-medium leading-[12.8px]"
                    value="ScheduledTweet"
                  >
                    Scheduled tweet
                  </TabsTrigger>
                  <TabsTrigger
                    className="w-fit data-[state=active]:text-white
                     text-[#4D4D4D] text-xs font-medium leading-[12.8px]"
                    value="PostedContent"
                  >
                    Posted Content
                  </TabsTrigger>
                </TabsList>
                <TabsContent
                  className="w-full  pt-5 md:pt-0 lg:pt-0 overflow-y-auto scrollbar-hide h-[300px] pb-28"
                  value="ScheduledTweet"
                >
                  <ScheduleTweet />
                </TabsContent>
                <TabsContent
                  className="w-full pt-5 md:pt-0 lg:pt-0  overflow-y-auto scrollbar-hide h-[300px] pb-28"
                  value="PostedContent"
                >
                  <ContentPosted />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Drafts;

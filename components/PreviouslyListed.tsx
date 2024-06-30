import { optionTriggers, previousListings } from "@/utils/mockData";
import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const PreviouslyListed = () => {
  return (
    <>
      <div className="">
        {previousListings?.map((row, index) => (
          <Dialog key={index}>
            <DialogTrigger className="cursor-pointer" asChild>
              <div className="flex flex-col text-left w-[486px] h-[64px] gap-2">
                <div className="">
                  <h5 className="font-medium text-sm leading-[14.56px] mb-2">
                    {row.projectName}
                  </h5>
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="absolute top-[52%] w-[486px] h-auto overflow-y-auto scrollbar-hide border-0 outline-none">
              <div className="w-full h-auto bg-[#131313] border-b border-[#131313] rounded-[20px] pb-10">
                <div className="bg-[#101010] border-[#181818] border-b px-4 py-[10px] w-[460px] h-[47px] mb-3">
                  <h5 className="font-semibold text-sm text-[14.56px]">
                    {row.projectTitle}
                    <span className="font-bold text-sm leading-[14.56px] ml-2">
                      {row.projectSpan}
                    </span>
                  </h5>
                </div>
                <p className="font-[300] italic text-sm leading-[14.56px] pb-3 px-3">
                  {row.instructions}
                </p>

                {/* accordion content */}
                <Accordion
                  className="w-full md:w-[510px] lg:w-[510px]"
                  type="single"
                  collapsible
                >
                  <AccordionItem
                    className="w-full border-none mb-3 md:mb-3 lg:mb-0 px-3"
                    value=""
                  >
                    <AccordionTrigger className="flex items-center gap-10 pr-[10%] border-b border-[#1E1E1E]">
                      <div className="flex items-center justify-center gap-2">
                        <p className="text-[9px] md:text-[13.75px] lg:text-[13.75px] font-[300] leading-[14.3px]">
                          Milestone Updates (Post-Fundraising Follow-ups).
                        </p>
                      </div>
                      <p className="text-[#4CA244] font-bold text-xs md:text-base lg:text-base"></p>
                    </AccordionTrigger>

                    <AccordionContent>
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>

                    <AccordionTrigger className="flex items-center gap-10 pr-[10%] border-b border-[#1E1E1E]">
                      <div className="flex items-center justify-center gap-2">
                        <p className="text-[9px] md:text-[13.75px] lg:text-[13.75px] font-[300] leading-[14.3px]">
                          Team Current & Future plans.
                        </p>
                      </div>
                      <p className="text-[#4CA244] font-bold text-xs md:text-base lg:text-base"></p>
                    </AccordionTrigger>

                    <AccordionContent>
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                    {/* 3rd trigger */}

                    <AccordionTrigger className="flex items-center gap-10 pr-[10%] border-b border-[#1E1E1E]">
                      <div className="flex items-center justify-center gap-2">
                        <p className="text-[9px] md:text-[13.75px] lg:text-[13.75px] font-[300] leading-[14.3px]">
                          New Exchange Listings.
                        </p>
                      </div>
                      <p className="text-[#4CA244] font-bold text-xs md:text-base lg:text-base"></p>
                    </AccordionTrigger>

                    <AccordionContent>
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>

                    {/* fouth trigger */}
                    <AccordionTrigger className="flex items-center gap-10 pr-[10%] border-b border-[#1E1E1E]">
                      <div className="flex items-center justify-center gap-2">
                        <p className="text-[9px] md:text-[13.75px] lg:text-[13.75px] font-[300] leading-[14.3px]">
                          Success Story Update.
                        </p>
                      </div>
                      <p className="text-[#4CA244] font-bold text-xs md:text-base lg:text-base"></p>
                    </AccordionTrigger>

                    <AccordionContent>
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </>
  );
};

export default PreviouslyListed;

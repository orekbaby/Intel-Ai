"use client";
import React, { useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CiMenuKebab, CiPaperplane } from "react-icons/ci";
import Image from "next/image";
import Unresolved from "@/components/queryContents/Unresolved";
import Resolved from "@/components/queryContents/Resolved";
import All from "@/components/queryContents/All";
import {
  escalationReport,
  querySection,
  responseSection,
} from "@/utils/mockData";
import { Button } from "@/components/ui/button";

interface ChatItem {
  type: "query" | "response";
  content: string;
  time: string;
  username?: string;
  img: string;
  responderName?: string;
  responderSpan?: string;
}

const Page: React.FC = () => {
  const [chatItems, setChatItems] = useState<ChatItem[]>([]);

  const addQuery = (query: string) => {
    const newQuery: ChatItem = {
      type: "query",
      content: query,
      time: "Now",
      username: "Spockman2304",
      img: "/avatar.png",
    };
    const newResponse: ChatItem = {
      type: "response",
      content:
        "**I'm sorry to hear you're experiencing a bug! Your issue has been escalated to our community manager, who will assist you shortly. In the meantime, could you please provide more details about the bug, such as what you were doing when it occurred and any error messages you received? This will help us resolve the issue more efficiently. Thank you for your patience!**",
      time: "Now",
      img: "/glow-img.png",
      responderName: "Intel",
      responderSpan: "ai",
    };
    setChatItems([...chatItems, newQuery, newResponse]);
  };

  return (
    <main className="pl-16 w-full h-[100vh] overflow-y-auto scrollbar-hide mb-4">
      <section className="relative w-full h-[100vh] overflow-y-auto scrollbar-hide pb-5 dashboard-color">
        <div className="w-full flex justify-between mb-0 md:mb-10 lg:mb-10 h-full pr-10">
          <div className="w-[70%]">
            <div className="pt-5 pl-12">
              <div className="w-[150px] h-[35px] rounded-[25px] bg-[#1B1B1B] flex justify-center items-center mb-10">
                <p className="font-medium text-sm leading-[14.56px]">
                  Escalation Report
                </p>
              </div>

              <div className="flex justify-start gap-4 items-center">
                {escalationReport?.map((row, index) => (
                  <div key={index} className="">
                    <div className="w-[138px] h-[115px] rounded-[20px] bg-[#181818] flex flex-col pt-4 px-3">
                      <p className="font-medium text-xs leading-[12.48px] mb-5">
                        {row.title}
                      </p>
                      <p className="font-[300] text-[40px] leading-[41.6px]">
                        {row.number}
                      </p>
                      <div className="w-[21px] h-[10px] rounded-[2px] flex justify-center items-center bg-[#03FFA3] bg-opacity-[11%]">
                        <div className="flex justify-center items-center gap-1">
                          <p className="font-medium text-[6px] text-[#76CA43]">
                            {row.percentage}
                          </p>
                          <FaArrowUp className="w-[5px] h-[3px] text-[#76CA43] rotate-6" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <Tabs
                defaultValue="Unresolved"
                className="w-full pl-2 pr-3 md:pl-0 lg:pl-0 pt-5 md:pt-0 lg:pt-7 overflow-x-hidden"
              >
                <TabsList className="flex mt-0 mb-0 items-center justify-between md:justify-start lg:justify-start gap-0 md:gap-2 lg:gap-1 px-2 md:px-0 lg:px-0 border w-fit rounded-[24px] border-[#1C1C1C]">
                  <TabsTrigger
                    className=" w-full md:w-fit lg:w-[100px] px-5 md:px-2 lg:px-2 bg-[#161616] text-[#666666] data-[state=active]:bg-white text-[9px] md:text-sm lg:text-sm gap-2 font-medium rounded-[24px]"
                    value="Unresolved"
                  >
                    Unresolved
                  </TabsTrigger>
                  <TabsTrigger
                    className=" w-full md:w-fit lg:w-[90px] px-5 md:px-2 lg:px-2 bg-[#161616] text-[#666666] data-[state=active]:bg-white text-[9px] md:text-sm lg:text-sm gap-2 font-medium rounded-[24px]"
                    value="Resolved"
                  >
                    Resolved
                  </TabsTrigger>
                  <TabsTrigger
                    className="w-full md:w-fit lg:w-[53px] px-5 md:px-2 lg:px-2 bg-[#161616] text-[#666666] data-[state=active]:bg-white text-[9px] md:text-sm lg:text-sm gap-2 font-medium rounded-[24px]"
                    value="All"
                  >
                    All
                  </TabsTrigger>
                </TabsList>
                <TabsContent
                  className="w-full h-full pt-2 overflow-x-hidden"
                  value="Unresolved"
                >
                  <Unresolved addQuery={addQuery} />
                </TabsContent>
                <TabsContent
                  className="w-full h-full pt-2 overflow-x-hidden"
                  value="Resolved"
                >
                  <Resolved />
                </TabsContent>
                <TabsContent
                  className="w-full h-full pt-2 overflow-x-hidden"
                  value="All"
                >
                  <All />
                </TabsContent>
              </Tabs>
            </div>
          </div>

          <div className="w-[30%] pr-4">
            <p className="font-normal text-base leading-[16.64px] mb-4">
              Query Sorting Portal
            </p>
            <div className="w-[397px] h-[824px] bg-[#181818] rounded-[20px]">
              <div className="w-[397px] flex justify-end px-6 items-center h-[65px] rounded-[20px] bg-[#252525]">
                <CiMenuKebab className="text-base text-[#767676]" />
              </div>
              <div
                className="p-4 overflow-y-auto"
                style={{ height: "calc(100% - 130px)" }}
              >
                <div className="flex flex-col gap-4">
                  {chatItems.map((item, index) => (
                    <div
                      key={index}
                      className={`flex justify-${
                        item.type === "query" ? "start" : "end"
                      } mb-8 relative pt-6 px-4`}
                    >
                      {item.type === "query" ? (
                        <div className="relative w-[375px] h-[69px] rounded-[20px] bg-[#2D2D2D] px-4 py-2">
                          <p className="font-normal text-xs leading-[12.84px] mb-1">
                            {item.content}
                          </p>
                          <div className="flex justify-end">
                            <p className="font-normal text-[10px] text-[#939393]">
                              {item.time}
                            </p>
                          </div>
                          <div
                            className="flex justify-center items-center bg-[#2D2D2D] border-[3px]
                            border-[#181818] w-[107px] h-[28px] rounded-[20px] py-4 absolute left-7 bottom-[-15%]"
                          >
                            <p className="font-normal text-xs">
                              {item.username}
                            </p>
                          </div>
                          <div className="absolute bottom-[-10%] left-0">
                            <Image
                              src={item.img}
                              width={28}
                              height={28}
                              alt="user-img"
                              className=""
                            />
                          </div>
                        </div>
                      ) : (
                        <div className="relative w-[264px] h-[166px] rounded-[20px] bg-[#696969] px-3 py-4">
                          <p className="font-normal text-xs leading-[14.84px]">
                            {item.content}
                          </p>
                          <div className="flex gap-1 items-center absolute bottom-[2%] left-[70%]">
                            <div className="">
                              <Image
                                src={item.img}
                                width={28}
                                height={28}
                                alt="user-img"
                                className=""
                              />
                            </div>
                            <div className="flex justify-center items-center bg-[#2D2D2D] border-[3px] border-[#181818] w-[57px] h-[28px] rounded-[20px]">
                              <p className="font-normal text-xs">
                                {item.responderName}
                                <span className="font-black text-xs text-[#03FFA3]">
                                  {item.responderSpan}
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-center items-center gap-2 p-4">
           
                  <input
                    type="text"
                    id="inputField2"
                    className="text-input2 font-normal pt-1 text-sm leading-[14.56px] italic"
                    placeholder="Input the proper response here ...."
                  />
            
                <div className="w-[50px] h-[50px] rounded-full bg-[#03FFA3] flex justify-center items-center">
                  <CiPaperplane className="w-[26px] h-[30px] text-black" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;


// resolve page
import React from "react";
import Image from "next/image";
import {
  Table,
  TableHeader,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { unResolvedTable } from "@/utils/mockData";
import { FaArrowUp } from "react-icons/fa6";

interface UnresolvedProps {
  addQuery: (query: string) => void;
}

const Unresolved: React.FC<UnresolvedProps> = ({ addQuery }) => {
  return (
    <div className="w-full">
      <Table className="overflow-x-hidden w-full">
        <TableHeader>
          <TableRow className="border-[#373737] h-[40px] border-b bg-[#1D1D1D]">
            <TableHead className="w-[100px] font-medium text-base leading-[16px]">
              #
            </TableHead>
            <TableHead className="font-normal text-[12px] text-[#898989] leading-[12.48px]">
              MONITORED GROUPS
            </TableHead>
            <TableHead className="font-normal text-[12px] text-[#898989] leading-[12.48px]">
              PLATFORM
            </TableHead>
            <TableHead className="font-normal text-[12px] text-[#898989] leading-[12.48px]">
              QUERY
            </TableHead>
            <TableHead className="text-center font-normal text-[12px] text-[#898989] leading-[12.48px]">
              TIME
            </TableHead>
            <TableHead className="text-right"> </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {unResolvedTable.map((row, index) => (
            <TableRow
              key={index}
              className={`border-none ${
                index % 2 === 0 ? "bg-[#0A0908]" : "bg-[#1D1D1D]"
              }`}
            >
              <TableCell className="font-medium text-base leading-[16px]">
                {row.number}
              </TableCell>
              <TableCell className="">
                <div className="w-[100px] flex items-center gap-1">
                  <Image
                    src={row.img}
                    alt={row.altText}
                    width={25}
                    height={25}
                  />
                  <p className="font-medium text-[9px] md:text-sm lg:text-sm leading-[14.56px]">
                    {row.name}
                  </p>
                </div>
              </TableCell>
              <TableCell className="">
                <div className="flex items-center gap-1">
                  <Image
                    src={row.platform}
                    alt={row.altText}
                    width={25}
                    height={25}
                  />
                  <p className="font-medium text-[9px] md:text-sm lg:text-sm leading-[14.56px]">
                    {row.social}
                  </p>
                </div>
              </TableCell>
              <TableCell className="text-left">
                <div className="w-[250px]">
                  <p className="font-medium text-[9px] md:text-sm lg:text-sm leading-[14.56px]">
                    {row.query}
                  </p>
                </div>
              </TableCell>
              <TableCell className="text-right font-medium text-[9px] md:text-sm lg:text-sm leading-[14.56px]">
                <div className="w-[100px] pr-2">{row.time}</div>
              </TableCell>
              <TableCell className="text-left font-normal text-[9px] md:text-[10px] lg:text-xs leading-[12.48px] ">
                <Button
                  className="w-[66px] flex justify-center gap-1 items-center h-[25px] bg-[#03FFA3] rounded-[66px] text-center text-[#0D0D0D]"
                  onClick={() => addQuery(row.query)}
                >
                  {row.button}
                  <FaArrowUp className="text-[10px] rotate-45" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Unresolved;

"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CiMenuKebab, CiPaperplane } from "react-icons/ci";
import Image from "next/image";
import Unresolved from "@/components/queryContents/Unresolved";
import UnresolvedMobile from "@/components/queryContents/UnresolvedMobile";
import Resolved from "@/components/queryContents/Resolved";
import All from "@/components/queryContents/All";
import { escalationReport } from "@/utils/mockData";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
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

const Page = () => {
  const [chatItems, setChatItems] = useState<ChatItem[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [showResolveButton, setShowResolveButton] = useState<boolean>(false);
  const latestMessageRef = useRef<HTMLDivElement>(null);
  const [userData, setUserData] = useState({ name: "", img: "" });
  const [showUserData, setShowUserData] = useState(false);

  useEffect(() => {
    const name = localStorage.getItem("redirectName") || "";
    const img = localStorage.getItem("redirectImg") || "";

    if (name && img) {
      setUserData({ name, img });
    }
  }, []);

  const updateUserData = () => {
    const name = localStorage.getItem("redirectName") || "";
    const img = localStorage.getItem("redirectImg") || "";

    if (name && img) {
      setUserData({ name, img });
      setShowUserData(true);
    }
  };

  useEffect(() => {
    if (latestMessageRef.current) {
      latestMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatItems]);

  const addQuery = (query: string) => {
    const newQuery: ChatItem = {
      type: "query",
      content: query,
      time: "Now",
      username: "Spockman2304",
      img: "/avatar.png",
    };
    setChatItems((prevItems) => [...prevItems, newQuery]);

    setTimeout(() => {
      const newResponse: ChatItem = {
        type: "response",
        content:
          "**I'm sorry to hear you're experiencing a bug! Your issue has been escalated to our community manager, who will assist you shortly. In the meantime, could you please provide more details about the bug, such as what you were doing when it occurred and any error messages you received? This will help us resolve the issue more efficiently. Thank you for your patience!**",
        time: "Now",
        img: "/glow-img.png",
        responderName: "Intel",
        responderSpan: "ai",
      };
      simulateTyping(newResponse);
    }, 1500); //

    setInputValue("");
    setShowResolveButton(false);
  };

  const simulateTyping = (response: ChatItem) => {
    const characters = response.content.split("");
    let currentText = "";

    const typingInterval = setInterval(() => {
      currentText += characters.shift() || "";
      setChatItems((prevItems) => {
        const lastItem = prevItems[prevItems.length - 1];
        if (
          lastItem.type === "response" &&
          lastItem.content === currentText.slice(0, -1)
        ) {
          return [
            ...prevItems.slice(0, prevItems.length - 1),
            { ...response, content: currentText },
          ];
        } else {
          return [...prevItems, { ...response, content: currentText }];
        }
      });

      if (characters.length === 0) {
        clearInterval(typingInterval);
        setChatItems((prevItems) => [
          ...prevItems.slice(0, prevItems.length - 1),
          response,
        ]);
        setShowResolveButton(true);
      }
    }, 10);
  };

  const handleSendQuery = () => {
    if (inputValue.trim() !== "") {
      addQuery(inputValue);
    }
  };

  const handleResolveComment = () => {
    setChatItems([]);
    setShowResolveButton(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      addQuery(inputValue);
    }
  };
  return (
    <div className="w-full h-[80vh] md:h-[100vh] lg:h-[100vh] relative overflow-y-auto scrollbar-hide dashboard-color">
      <div className="w-full md:w-[70%] lg:w-[70%] h-full pt-5">
        <div className="">
          <div className="w-[150px] h-[35px] rounded-[25px] bg-[#1B1B1B] flex justify-center items-center mb-10">
            <p className="font-medium text-sm leading-[14.56px]">
              Escalation Report
            </p>
          </div>
          {/* desktop */}
          <div className="hidden md:flex lg:flex justify-start gap-4 items-center">
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
                      <p className="font-[500] text-[6px] text-[#76CA43]">
                        {row.percentage}
                      </p>
                      <FaArrowUp className="w-[5px] h-[3px] text-[#76CA43] rotate-6" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* mobile */}
          <div className="grid grid-cols-2 gap-4 items-center md:hidden lg:hidden">
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
                      <p className="font-[500] text-[6px] text-[#76CA43]">
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
              className="hidden md:block lg:block w-full h-full pt-2 overflow-x-hidden"
              value="Unresolved"
            >
              <Unresolved
                addQuery={addQuery}
                resolveComment={handleResolveComment}
                updateUserData={updateUserData}
              />
            </TabsContent>

            <TabsContent
              className="block md:hidden lg:hidden w-full h-full pt-2 overflow-x-hidden"
              value="Unresolved"
            >
              <UnresolvedMobile
                addQuery={addQuery}
                resolveComment={handleResolveComment}
              />
            </TabsContent>
            <TabsContent
              className="hidden md:block lg:block w-full h-full pt-2 overflow-x-hidden"
              value="Resolved"
            >
              <Resolved />
            </TabsContent>

            <TabsContent
              className="block md:hidden lg:hidden w-full h-full pt-2 overflow-x-hidden"
              value="Resolved"
            >
              <Resolved />
            </TabsContent>

            <TabsContent
              className="w-full h-full pt-2 overflow-x-hidden hidden md:block lg:block"
              value="All"
            >
              <All />
            </TabsContent>

            <TabsContent
              className="block md:hidden lg:hidden w-full h-full pt-2 overflow-x-hidden"
              value="All"
            >
              <All />
            </TabsContent>
          </Tabs>
        </div>

        {/* pagination  */}
        <div className="hidden md:block lg:block">
          <Pagination className="flex items-end justify-end ">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
                <PaginationLink href="#">2</PaginationLink>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">8</PaginationLink>
                <PaginationLink href="#">9</PaginationLink>
                <PaginationLink href="#">10</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
      {/* desktop ends here */}

      <div className="hidden md:block lg:block fixed top-10 right-0 h-[90vh] md:h-[100vh] lg:h-[100vh] w-full md:w-[30%] lg:w-[30%] pb-20 overflow-y-auto scrollbar-hide pt-10 md:pt-24 lg:pt-24">
        <p className="font-normal text-base leading-[16.64px] mb-4">
          Query Sorting Portal
        </p>
        <div className="w-full h-full overflow-y-auto scrollbar-hide overflow-x-hidden bg-[#181818] rounded-[20px] pb-5">
          <div className="bg-[#252525] w-[397px] flex justify-between px-6 items-center h-[65px] rounded-[20px]">
            {showUserData && (
              <div className="flex items-center gap-1">
                <Image
                  src={userData.img}
                  alt="User Avatar"
                  width={25}
                  height={25}
                />
                <p className="font-medium text-[15px] leading-[14.56px]">
                  {userData.name}
                </p>
              </div>
            )}
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
                    <div className="relative w-[237px] md:w-[375px] lg:w-[375px] h-[86px] md:h-[69px] lg:h-[69px] rounded-[20px] bg-[#2D2D2D] px-4 py-2">
                      <p className="font-normal text-[13.75px] md:text-xs lg:text-xs leading-[15.6px] md:leading-[12.84px] lg:leading-[12.84px] mb-1">
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
                        <p className="font-normal text-xs">{item.username}</p>
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
                    // response section
                    <div className="relative w-[284px] md:w-[264px] lg:w-[264px] h-[156px] md:h-[166px] lg:h-[166px] rounded-[20px] bg-[#696969] px-3 py-4">
                      <p className="font-normal text-xs leading-[14.84px]">
                        {item.content}
                      </p>
                      {/* absolute section */}
                      <div className="flex gap-1 items-center absolute bottom-[5] left-[70%]">
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
              <div ref={latestMessageRef} />
              {/* scroll to this element  */}
            </div>
          </div>
          <div className="bg-[#181818] absolute pb-16  w-full h-fit bottom-0 right-0 ">
            {showResolveButton && (
              <div className="mb-5 px-4">
                <Button
                  className="bg-gradient-to-r from-[rgba(3,255,163,.9)] to-[rgba(127,86,217,.9)] flex justify-center gap-1 items-center ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 font-normal focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-800 hover:scale-95 dark:text-secondary text-white transition ease-in-out delay-150 duration-300 h-[25px] w-[133px] rounded-[24px] hover:bg-[#0B0F16] text-xs"
                  onClick={handleResolveComment}
                >
                  Resolve comment
                  <FaArrowUp className="text-[10px] rotate-45" />
                </Button>
              </div>
            )}

            {/* bg-[#181818] */}
            <div className="flex justify-center items-center gap-2">
              <div className="">
                <input
                  type="text"
                  id="inputField2"
                  className="text-input2 font-normal pt-1 text-sm leading-[14.56px] italic"
                  placeholder="Input the proper response here ...."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  autoComplete="off"
                />
              </div>
              <div
                onClick={handleSendQuery}
                className="w-[50px] h-[50px] rounded-full bg-[#03FFA3] flex justify-center items-center cursor-pointer"
              >
                <CiPaperplane className="w-[26px] h-[30px] text-black" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

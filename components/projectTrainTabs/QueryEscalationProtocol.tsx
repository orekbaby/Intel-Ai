"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaArrowUp, FaTelegramPlane } from "react-icons/fa";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CiMenuKebab, CiPaperplane } from "react-icons/ci";
import Image from "next/image";
import Unresolved from "@/components/queryContents/Unresolved";
import UnresolvedMobile from "@/components/queryContents/UnresolvedMobile";
import Resolved from "@/components/queryContents/Resolved";
import All from "@/components/queryContents/All";
import { escalationReport } from "@/config/mockData";
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
import { avatar, GlowImg, onboard } from "@/assets";
import ResolvedMobile from "../queryContents/ResolvedMobile";

interface ChatItem {
  type: "query" | "response";
  content: string;
  time: string;
  username?: string;
  img: any;
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
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  // useEffect(() => {
  //   const name = localStorage.getItem("redirectName") || "";
  //   const img = localStorage.getItem("redirectImg") || "";

  //   if (name && img) {
  //     setUserData({ name, img });
  //   }
  // }, []);

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
      username: userData.name || "Spockman2304",
      img: avatar,
    };
    setChatItems((prevItems) => [...prevItems, newQuery]);

    setTimeout(() => {
      const newResponse: ChatItem = {
        type: "response",
        content:
          "**I'm sorry to hear you're experiencing a bug! Your issue has been escalated to our community manager, who will assist you shortly. In the meantime, could you please provide more details about the bug, such as what you were doing when it occurred and any error messages you received? This will help us resolve the issue more efficiently. Thank you for your patience!**",
        time: "Now",
        img: GlowImg,
        responderName: "0x",
        responderSpan: "ai",
      };
      simulateTyping(newResponse);
    }, 1500); //

    setInputValue("");
    setShowResolveButton(false);
    setShowUserData(true);
    [userData.name, avatar,]
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
  setShowResolveButton(false);  // Hide the resolve button
  setShowSuccessMessage(true);  // Show the success message

  // Set timeout to hide the success message after 3 seconds
  setTimeout(() => {
    setShowSuccessMessage(false);
  }, 3000);
 
};

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      addQuery(inputValue);
    }
  };
  return (
    <div className="w-full h-full md:h-[100vh] lg:h-[100vh] relative overflow-y-auto  scrollbar-hide dashboard-color">
      <div className="w-full md:w-full lg:w-[70%] h-full pt-5">
        <div className="w-full pl-1 md:pl-0 lg:pl-0">
          <div className="w-[150px] h-[35px] rounded-[25px] bg-[#1B1B1B] flex justify-center items-center mb-10">
            <p className="font-medium text-sm leading-[14.56px]">
              Escalation Report
            </p>
          </div>
          {/* desktop */}
          <div className="hidden md:flex lg:flex justify-center md:justify-start lg:justify-start gap-4 items-center">
            {escalationReport?.map((row, index) => (
              <div key={index} className="">
                <div className="w-[189px] md:w-[138px] lg:w-[138px] h-[137px]  rounded-[20px] bg-[#181818] shadow-lg flex flex-col py-4 px-3">
                {row.img && (
                <div className="flex items-center justify-start gap-2">
               <div className="w-[21px] h-[21px] rounded-full bg-[#7289DA] flex justify-center items-center">
              <row.img className="w-[10px] h-[10px]" /> {/* Render the icon */}
            </div>
         <p className="font-medium text-xs leading-[12.48px] mb-5 pt-5">
                    {row.title}
                  </p>
                  </div> 
                   )}
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
          <div className="grid grid-cols-2 gap-3 items-center md:hidden lg:hidden overflow-x-hidden">
          {escalationReport?.map((row, index) => (
  <div key={index} className="">
    <div className="w-[169px] h-[157px] rounded-[20px] bg-[#181818] flex flex-col py-4 px-3">
      {row.img && (
        <div className="flex items-center justify-start gap-2">
          <div className="w-[21px] h-[21px] rounded-full bg-[#7289DA] flex justify-center items-center">
            <row.img className="w-[10px] h-[10px]" /> {/* Render the icon */}
          </div>
        </div>
      )}
      <p className="font-medium text-xs leading-[12.48px] mb-5 pt-5">
        {row.title} {/* Always render the title */}
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
            className="w-full pl-0 pr-0 md:pl-0 lg:pl-0 pt-5 md:pt-7 lg:pt-7 overflow-x-hidden"
          >
            <TabsList className="flex mt-0 mb-0 items-center justify-between md:justify-start lg:justify-start gap-0 md:gap-2 lg:gap-1 px-0 md:px-0 lg:px-0 border w-fit rounded-[24px] border-[#1C1C1C] overflow-x-hidden">
              <TabsTrigger
                className=" w-full md:w-fit lg:w-[100px] px-5 md:px-2 lg:px-2 bg-[#161616] text-[#666666] data-[state=active]:bg-white  text-[9px] md:text-sm lg:text-sm gap-2 font-medium rounded-[24px]"
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
              className="hidden md:hidden lg:block w-full h-full pt-2 overflow-x-hidden"
              value="Unresolved"
            >
              <Unresolved
                addQuery={addQuery}
                resolveComment={handleResolveComment}
                updateUserData={updateUserData}
              />
            </TabsContent>

            <TabsContent
              className="block md:block lg:hidden w-full h-full pt-2 overflow-x-hidden"
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
              <ResolvedMobile />
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

      <div className="hidden md:hidden lg:block fixed top-10 right-0 h-[90vh] md:h-[100vh] lg:h-[100vh] w-full md:w-[30%] lg:w-[30%] pb-20 overflow-y-auto scrollbar-hide pt-10 md:pt-24 lg:pt-24 overflow-x-hidden">
        <p className="font-normal text-base leading-[16.64px] mb-4">
          Query Sorting Portal
        </p>
        <div className="w-full h-full overflow-y-auto scrollbar-hide overflow-x-hidden bg-[#181818] rounded-[20px] pb-5">
          <div className="bg-[#252525] w-[397px] flex justify-between px-6 items-center h-[65px] rounded-[20px]">
            {showUserData && (
              <div className="flex items-center gap-1">
                <Image
                  src={avatar}
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
            className="p-4 overflow-y-auto overflow-x-hidden"
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

          {showSuccessMessage && (
      <div className="flex justify-center pt-20  absolute top-20 left-10 ">
       <div className="w-[292px] flex justify-center items-center flex-col gap-4 h-auto px-8 md:w-full lg:w-full border-none rounded-lg max-w-auto py-6  bg-[#1b1b1b] shadow-lg border-white border">
              <Image className=""
              width={120}
              height={119}
              src={onboard}
              alt="success"
              />
              <h2 className="font-medium text-[24px] text-white">Success!</h2>
              <p className="font-medium text-sm text-[#c1c1c1]">Your comment has been resolved.</p>
            </div>
            </div>
      )}
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
              <div className="overflow-x-hidden">
              <input
            type="text"
            id="inputField2"
            className="
              w-[300px] sm:w-[300px] md:w-[300px] lg:w-[280px]
              h-[45px] sm:h-[50px] md:h-[55px] lg:h-[50px]
              rounded-[15px] bg-[#0d0d0d] border border-gray-500 text-white
              italic font-light text-sm md:text-base lg:text-base
              px-4 outline-none focus:ring-2 focus:ring-blue-500 outline-0
            "
                  placeholder="Input the proper response here ...."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  autoComplete="off"
                />
              </div>
             
<Button className="
              w-[50px] h-[50px] sm:w-[50px] sm:h-[50px] md:w-[55px] md:h-[55px] lg:w-[50px] lg:h-[50px]
              rounded-[15px] sm:rounded-[16px] md:rounded-[18px] lg:rounded-[20px]
              bg-[#03FFA3] flex justify-center items-center
            "
            onClick={handleSendQuery}
          >
            <CiPaperplane
              className="
                w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] md:w-[24px] md:h-[24px] lg:w-[26px] lg:h-[26px]
                text-black
              "
            />
          </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

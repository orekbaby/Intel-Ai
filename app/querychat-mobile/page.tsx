"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import { FaArrowUp } from "react-icons/fa";
import { CiMenuKebab, CiPaperplane } from "react-icons/ci";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { avatar, GlowImg } from "@/assets";

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
  const [showUserInfo, setShowUserInfo] = useState(false);

  useEffect(() => {
    const name = localStorage.getItem("redirectName") || "";
    const img = localStorage.getItem("redirectImg") || "";

    if (name && img) {
      setUserData({ name, img });
    }
  }, []);

  const addQuery = useCallback(
    (query: string) => {
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
          responderName: "Intel",
          responderSpan: "ai",
        };
        simulateTyping(newResponse);
      }, 1500);

      setInputValue("");
      setShowResolveButton(false);
      setShowUserInfo(true);
    },
    [userData.name, userData.img]
  );

  useEffect(() => {
    const redirectQuery = localStorage.getItem("redirectQuery");
    if (redirectQuery) {
      addQuery(redirectQuery);
      localStorage.removeItem("redirectQuery");
    }
  }, [addQuery]); // Include addQuery in the dependency array

  useEffect(() => {
    if (latestMessageRef.current) {
      latestMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatItems]);

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
    }, 30);
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
    <div className="fixed top-10 right-0 md:right-10 lg:right-0 h-[90vh] md:h-[90vh] lg:h-[100vh] w-full md:w-[90%] lg:w-[30%] pb-24 overflow-y-auto scrollbar-hide pt-10 md:pt-16 lg:pt-24 overflow-hidden">
      <p className="font-normal text-base leading-[16.64px] mb-4">
        Query Sorting Portal
      </p>
      <div className="w-full h-full overflow-y-auto scrollbar-hide overflow-x-hidden bg-[#181818] rounded-[20px] pb-5">
        <div className="bg-[#252525] w-[397px] md:w-full lg:w-[397px] flex justify-between px-6 items-center h-[65px] rounded-[20px]">
          {showUserInfo && (
            <div className="flex items-center gap-1">
             <Image src={avatar} alt="User Avatar" width={25} height={25} />

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
                  <div className="relative w-full md:w-[375px] lg:w-[375px] h-[65px] md:h-auto lg:h-auto rounded-[20px] bg-[#2D2D2D] px-4 py-2">
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
                            border-[#181818] w-[107px] h-auto rounded-[20px] py-4 absolute left-7 bottom-[-60%] md:bottom-[-70%] lg:bottom-[-70%]"
                    >
                      <p className="font-normal text-xs">{item.username}</p>
                    </div>
                    <div className="absolute bottom-[10%] md:bottom-[-25%] lg:bottom-[-10%] left-0">
                      <Image src={item.img} width={28} height={28} alt="User" />
                    </div>
                  </div>
                ) : (
                  <div className="relative flex flex-col items-end gap-4">
                    <div className="relative w-full md:w-[375px] lg:w-[375px] h-auto md:h-auto lg:h-auto rounded-[20px] bg-[#2D2D2D] px-4 py-2">
                      <p className="font-normal text-[13.75px] md:text-xs lg:text-xs leading-[15.6px] md:leading-[12.84px] lg:leading-[12.84px] mb-1">
                        {item.content}
                      </p>
                      <div className="flex justify-end">
                        <p className="font-normal text-[10px] text-[#939393]">
                          {item.time}
                        </p>
                      </div>
                      <div className="absolute right-[-2%] md:right-[2%] lg:right-[-10%]">
                        <Image
                          src={item.img}
                          width={28}
                          height={28}
                          alt="Responder"
                        />
                      </div>
                      <div
                        className="flex items-center bg-[#2D2D2D] border-[3px]
                                border-[#181818] w-[107px] h-auto rounded-[20px] py-4 absolute right-7 bottom-[10%] md:bottom-[-40%] lg:bottom-[-15%]"
                      >
                        <p className="font-normal text-xs">
                          {item.responderName}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
            <div ref={latestMessageRef} />
          </div>
        </div>
        {showResolveButton && (
             <Button
             className="bg-gradient-to-r from-[rgba(3,255,163,.9)] to-[rgba(127,86,217,.9)] flex justify-center gap-1 items-center ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 font-normal focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-800 hover:scale-95 dark:text-secondary text-white transition ease-in-out delay-150 duration-300 h-[25px] w-[133px] rounded-[24px] hover:bg-[#0B0F16] text-xs"
             onClick={handleResolveComment}
           >
             Resolve comment
             <FaArrowUp className="text-[10px] rotate-45" />
           </Button>
          )}
        <div className="px-4 pt-4">
          <div className="flex items-center gap-3 mb-4">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your query..."
              className="flex-1 py-2 md:py-5 px-4 rounded-[20px] bg-[#2D2D2D] text-white placeholder-[#939393] border-none"
            />
            <CiPaperplane
              onClick={handleSendQuery}
              className="text-[24px] cursor-pointer text-[#D6D6D6]"
            />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Page;

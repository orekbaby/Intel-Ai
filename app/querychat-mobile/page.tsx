"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import { FaArrowLeft, FaArrowUp } from "react-icons/fa";
import { CiMenuKebab, CiPaperplane } from "react-icons/ci";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { avatar, GlowImg, onboard } from "@/assets";
import { Dialog, DialogContent,  DialogTrigger } from "@/components/ui/dialog";
import Link from "next/link";

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
  const [isQuerySent, setIsQuerySent] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleContinueChatting = () => {
    setIsQuerySent(false); // Show input, hide buttons
    setInputValue(''); // Clear input field
  };

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
          responderName: "0x",
          responderSpan: "ai",
        };
        simulateTyping(newResponse);
      }, 1000);

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
        setIsQuerySent(true);
        setShowResolveButton(true);
      }
    }, 50);
  };

  const handleSendQuery = () => {
    if (inputValue.trim() !== "") {
      addQuery(inputValue);
      setIsQuerySent(true);
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
    setIsQuerySent(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      addQuery(inputValue);
    }
  };

  return (
    
    <div className="fixed top-10 left-0 md:right-10 lg:right-0 h-[90vh] md:h-[90vh] lg:h-[100vh] w-full md:w-[90%] lg:w-[30%] pb-24 overflow-y-auto scrollbar-hide pt-10 md:pt-16 lg:pt-24 overflow-x-hidden">
      <p className="font-normal text-base leading-[16.64px] mb-4 relative">
        Query Sorting Portal
      </p>
      <div className="mb-6 flex justify-start md:hidden lg:hidden absolute top-0 left-10">
            <Link href="/train-ai">
              <button className="flex items-center text-[#707070]">
                <FaArrowLeft className="mr-2 text-[#707070]" />
                Back
              </button>
            </Link>
          </div>
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
                            border-[#181818] w-[107px] h-auto rounded-[20px] py-4 absolute left-7 bottom-[-20%] md:bottom-[-70%] lg:bottom-[-70%]"
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
                      <p className="font-normal text-[13.75px] md:text-xs lg:text-xs leading-[15.6px] md:leading-[12.84px] lg:leading-[12.84px] mb-7 md:mb-1 lg:mb-1">
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
                        className="flex items-center justify-center bg-[#2D2D2D] border-[3px]
                                border-[#181818] w-[107px] h-auto rounded-[20px] py-2 absolute right-7 bottom-0 md:bottom-[-40%] lg:bottom-[-15%]"
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
        <div className="flex flex-col w-full mx-auto items-center space-y-5 px-12">
        
              <Button
                className="w-full bg-white flex justify-center gap-1 items-center ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 font-normal focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-150 dark:focus-visible:ring-neutral-100 hover:scale-95 dark:text-secondary text-black transition ease-in-out delay-150 duration-300 h-[55px] rounded-[24px] hover:bg-sky-100 text-xs"
                onClick={handleResolveComment}
              >
                Resolve comment
                <FaArrowUp className="text-[10px] rotate-45" />
              </Button>
           

       <button
            className="w-full h-[55px] flex justify-center items-center rounded-[24px] bg-[#4C4C4C] border border-white text-white text-medium text-xs leading-[12.48px] py-[10px] px-4"
            onClick={handleContinueChatting}
          >
            Continue Chatting
          </button>
        </div>
      )}
      {showSuccessMessage && (
      <div className="flex justify-center absolute top-20 left-10 ">
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

        <div className="px-2 pt-4">
        {!isQuerySent && (
          <div className="flex items-center gap-3 mb-4">
           <input
  type="text"
  value={inputValue}
  onChange={(e) => setInputValue(e.target.value)}
  onKeyDown={handleKeyDown}
  placeholder="Type your query..."
  className="w-full h-[60px] py-2 md:py-3 px-4 rounded-[20px] bg-[#2D2D2D] text-white placeholder-[#939393] border-none"
/>

            <Button className="w-[50px] h-[50px] flex justify-center items-center bg-[#03FFA3] rounded-full">
            <CiPaperplane
              onClick={handleSendQuery}
              className="w-[26px] h-[30px] cursor-pointer text-black"
            />
            </Button>
           
          </div>
        )}
          
        </div>
      </div>
    </div>
  );
};

export default Page;

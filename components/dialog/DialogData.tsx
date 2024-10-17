"use client";
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@/store/combinedStore'; // Adjust import paths as needed
import { completeTrain } from '@/store/reducers/appSlice';
import React, { useEffect, useRef, useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";
import { FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";
import { CiPaperplane } from "react-icons/ci";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  aiResponse,
  chipsButton,
  userInput,
  userInput2,
  userInput3,
} from "@/config/mockData";
import SocialMenu from "../SocialMenu";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useToast } from "@/components/ui/use-toast"
import { ToastAction } from "@/components/ui/toast"
import { avatar, GlowImg, onboard } from '@/assets';


  const DialogData: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null); // State to track active button index
  const [conversation, setConversation] = useState<any[]>([]); // State to track conversation
  const [promptCount, setPromptCount] = useState<number>(0); // State to track prompt count
  const [inputValue, setInputValue] = useState<string>(""); // State to track input value
  const latestMessageRef = useRef<HTMLDivElement>(null); // Ref to track latest message
  const [hasPerformedAction, setHasPerformedAction] = useState(false);
  const [isPromptSent, setIsPromptSent] = useState(false);

  const handleContinueChatting = () => {
    setIsPromptSent(false); // Show input, hide buttons
    setInputValue(''); // Clear input field
  };

  useEffect(() => {
    if (latestMessageRef.current) {
      latestMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [conversation]);

  const handleButtonClick = (index: number) => {
    if (promptCount < 15) {
      let newUserPrompts: any[] = [];
      if (index === 0) {
        newUserPrompts = userInput;
      } else if (index === 1) {
        newUserPrompts = userInput2;
      } else if (index === 2) {
        newUserPrompts = userInput3;
      }
  
      const newConversation = [
        ...conversation,
        ...newUserPrompts.map((prompt: any) => ({
          user: prompt,
          ai: aiResponse[0],
        })),
      ];
  
      setConversation(newConversation);
      setPromptCount(newConversation.length);
      setActiveIndex(index === activeIndex ? null : index);
  
      // Set the flag to true when the button is clicked
      setHasPerformedAction(true);
      setIsPromptSent(true);
    }
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSendPrompt = () => {
    if (inputValue.trim() !== "" && promptCount < 15) {
      const newUserPrompt = {
        question: inputValue,
        time: "Now",
        user: "You",
        image: avatar,
      };
      const newAiResponse = {
        response:
          "With a commitment to providing tools for investment, asset organization, and management in one convenient platform, GetEquity ensures a safe and efficient investment experience for accredited investors, from high-net-worth individuals to industry veterans.",
        aiImage: GlowImg,
        name: " 0x",
        span: "ai",
      };
  
      const newConversation = [
        ...conversation,
        { user: newUserPrompt, ai: newAiResponse },
      ];
  
      setConversation(newConversation);
      setPromptCount(promptCount + 1);
      setInputValue("");
  
      // Set the flag to true when the prompt is sent
      setHasPerformedAction(true);
      setIsPromptSent(true);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSendPrompt();
    }
  };

   const dispatch: AppDispatch = useDispatch();
  const router = useRouter();
  const aiTrainCompleted = useSelector((state: RootState) => state.app.aiTrainCompleted);

  // Handler function to dispatch the completeTrain action and navigate
  const handleNavigation = () => {
    if (!aiTrainCompleted) {
      dispatch(completeTrain()); // Dispatch action only if not completed
    }
    router.push('/train-ai'); // Navigate to '/train-ai'
  };

  const { toast } = useToast()
  return (
    <>
      <div className="relative w-full md:w-full lg:w-full h-[100vh] overflow-y-auto overflow-x-hidden scrollbar-hide outline-0 mb-5 pt-20 px-2 pb-20">
        <SocialMenu />

        <div className="bg-[#181818] px-6 md:px-2 lg:px-6 rounded-[20px] overflow-x-hidden">
          <div className="flex w-full h-[60px] bg-[#1B1B1B] rounded-[20px] px-6 md:px-2 lg:px-8 mb-3 items-center justify-between">
            <p className="font-normal text-left text-sm leading-[14.56px] text-[#858585]">
              Simulation workspace
            </p>
            <div className="hidden md:flex lg:flex w-[110px] h-[40px] justify-center items-center text-center rounded-[10px] bg-[#131313]">
              <p className="font-normal text-sm leading-[14.65px]">
                {promptCount}
                <span className="font-normal text-sm leading-[14.65px] text-[#3C3C3C]">
                  /15 prompts
                </span>
              </p>
            </div>
          </div>
          {/* chips options */}
          <div className="flex justify-center md:justify-start lg:justify-center gap-1 md:gap-1 lg:gap-1 xl:gap-2 2xl:gap-2 items-center mb-14 px-16 md:px-0 lg:px-6 rounded-[24px] md:rounded-xl lg:rounded-xl">
            {chipsButton?.map((row, index) => (
              <div
                key={index}
                className={`relative w-fit rounded-[24px] md:rounded-xl lg:rounded-xl p-[1px] ${
                  activeIndex === index
                    ? "md:bg-gradient-to-r from-[rgba(3,255,163,0.9)] to-[rgba(127,86,217,0.9)] lg:"
                    : ""
                }`}
              >
                <Button
                  key={index}
                  className={`w-[120px] md:w-[149px] lg:w-[149px] xl:w-[149px] 2xl:w-[163px] h-[38px] flex justify-center items-center rounded-[24px] md:rounded-xl lg:rounded-xl] py-2 px-6 border border-white md:border-none lg:border-none font-medium text-[12.76px] bg-[#2C2C2C]`}
                  onClick={() => handleButtonClick(index)}
                >
                  {row.button}
                </Button>
              </div>
            ))}
          </div>
          {/* conversation section */}
          {conversation?.map((entry, index) => (
            <div className='' key={index}>
              <div className="flex justify-end mb-8 relative">
                <div className="px-4">
                  <div className="w-[183px] md:w-[264px] lg:w-[264px] xl:w-[270px] 2xl:w-[274px] h-[53px] rounded-[20px] bg-[#696969] px-4 py-2">
                    <h5 className="font-normal text-xs mb-1">
                      {entry.user.question}
                    </h5>
                    <p className="font-normal text-[10px] text-[#939393]">
                      {entry.user.time}
                    </p>
                  </div>
                  <div className="flex justify-center items-center bg-[#2D2D2D] border-[3px] border-[#181818] w-[49px] h-[28px] rounded-[20px] absolute right-7 bottom-[-20%]">
                    <p className="font-normal text-xs">{entry.user.user}</p>
                  </div>
                  <div className="absolute bottom-[-10%] right-0">
                    <Image
                      src={entry.user.image}
                      width={28}
                      height={28}
                      alt="user-img"
                    />
                  </div>
                </div>
              </div>

              <div className="relative pb-10 md:pb-20 lg:pb-20">
                <div className="w-[339px] h-[120px] md:w-[375px] lg:w-[375px] xl:w-[380px] 2xl:w-[385px] md:h-[126px] lg:h-[126px] rounded-[20px] bg-[#2D2D2D] px-3 py-2">
                  <p className="font-normal text-xs leading-[16.48px]">
                    {entry.ai.response}
                  </p>
                </div>
                <div className="flex gap-1 items-center relative bottom-[2%]">
                  <div className="">
                    <Image
                      src={entry.ai.aiImage}
                      width={28}
                      height={28}
                      alt="ai-img"
                    />
                  </div>
                  <div className="flex justify-center items-center bg-[#2D2D2D] border-[3px] border-[#181818] w-[57px] h-[28px] rounded-[20px]">
                    <p className="font-normal text-xs">
                      {entry.ai.name}
                      <span className="font-black text-xs text-[#03FFA3]">
                        {entry.ai.span}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div ref={latestMessageRef} />
          {/* conversation section ends here */}

          {/* like section starts */}
          <div className="hidden  gap-2 pt-10 md:pt-5 lg:pt-10">
            <div className="w-[26px] h-[26px] rounded-full bg-[#2D2D2D] flex justify-center items-center">
              <FaRegThumbsUp className="text-[#8E8E8E] w-[14px] h-[14px]" />
            </div>
            <div className="w-[26px] h-[26px] rounded-full bg-[#2D2D2D] flex justify-center items-center">
              <FaRegThumbsDown className="text-[#8E8E8E] w-[14px] h-[14px]" />
            </div>
          </div>
          {/* ends here */}

          {/* input box and send button section */}
          <div className="fixed pb-0 md:pb-16 lg:pb-16 bg-[#181818] w-full h-fit bottom-0 left-0 pt-5 md:pt-0 lg:pt-0">
            <div className="flex justify-center items-center gap-2 md:gap-4 lg:gap-4 xl:gap-4 2xl:gap-4">
              <div className="pl-2 md:pl-0 lg:pl-0">
              <div className="chat-container flex flex-col items-center gap-4">
      {/* Input field and send button */}
      {!isPromptSent && (
        <div className="flex items-center gap-4">
          <input
            type="text"
            id="inputField2"
            className="
              w-[300px] sm:w-[300px] md:w-[300px] lg:w-[383px]
              h-[45px] sm:h-[50px] md:h-[55px] lg:h-[50px]
              rounded-[15px] bg-[#0d0d0d] border border-gray-500 text-white
              italic font-light text-sm md:text-base lg:text-lg
              px-4 outline-none focus:ring-2 focus:ring-blue-500 outline-0
            "
            placeholder="Ask any question"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            autoComplete="off"
          />
          <Button
            className="
              w-[50px] h-[50px] sm:w-[50px] sm:h-[50px] md:w-[55px] md:h-[55px] lg:w-[60px] lg:h-[60px]
              rounded-[15px] sm:rounded-[16px] md:rounded-[18px] lg:rounded-[20px]
              bg-[#03FFA3] flex justify-center items-center
            "
            onClick={handleSendPrompt}
          >
            <CiPaperplane
              className="
                w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] md:w-[24px] md:h-[24px] lg:w-[26px] lg:h-[26px]
                text-black
              "
            />
          </Button>
        </div>
      )}

      {/* Buttons to show after the prompt is sent */}
      {isPromptSent && (
        <div className="flex flex-col gap-4 justify-center items-center pt-5">
           <Dialog>
              <div className="flex justify-center pt-0 ">
                <DialogTrigger>
                  <button
            className="w-[297px] h-[55px] flex justify-center items-center rounded-[24px] bg-white border text-black text-medium text-xs leading-[12.48px] py-[10px] px-4"
            onClick={(e) => {
              if (!hasPerformedAction) {
                e.preventDefault();
                toast({
                  variant: "destructive",
                  title: "Uh oh! Something went wrong.",
                  description: "Please complete a simulation or send a prompt before proceeding.",
                  action: <ToastAction altText="Try again">Try again</ToastAction>,
                });
              }
            }}
          >
            Complete Simulation
          </button>
          </DialogTrigger>
          <DialogContent className="px-4 sm:px-8 w-full max-w-[410px] border-none rounded-lg h-auto bg-[#181818] py-5">
  <div className="mx-auto">
    <Image
      width={120}
      height={120}
      src={onboard}
      className="mx-auto mb-5 pt-5"
      alt=""
    />
    <h3 className="font-medium text-center text-[20px] leading-[26px] w-[90%] sm:w-[80%] mx-auto mb-4">
      Congratulations on Completing Your Initial Training!
    </h3>
    <p className="font-medium text-sm mx-auto text-center text-[#C1C1C1] w-[90%] sm:w-[383px] mb-5">
      The next step is to integrate your Telegram community
    </p>
    {/* button */}
    <button
      onClick={handleNavigation}
      className="bg-white items-center flex justify-center text-center 
        text-xs font-normal ring-offset-white focus-visible:outline-none
        text-[#0D0D0D] h-10 w-full max-w-[199px] rounded-[66px] mx-auto shadow-drop2"
    >
      Integrate your community now
    </button>
  </div>
</DialogContent>

              </div>
            </Dialog>
          <button
            className="w-[297px] h-[55px] flex justify-center items-center rounded-[24px] bg-[#4C4C4C] border border-white text-white text-medium text-xs leading-[12.48px] py-[10px] px-4"
            onClick={handleContinueChatting}
          >
            Continue Chatting
          </button>
        </div>
         
      )}

            <Dialog>
              <div className="flex justify-center pt-6 ">
                <DialogTrigger>
                  <div className="flex justify-center items-center pt-1">
                    <div className="hidden md:hidden lg:hiddenbg-gradient-to-r from-[rgba(3,255,163,.9)] to-[rgba(127,86,217,.9)] w-fit rounded-[66px] py-[2px] px-[2px] shadow-drop">
                      <button className="bg-gradient-to-r from-[#3A3A3A] to-[#000000] flex gap-2 items-center justify-center ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950
                       dark:focus-visible:ring-neutral-800 hover:scale-95 dark:text-secondary text-white transition ease-in-out delay-150 duration-300 h-10 w-[177px] rounded-[66px] hover:bg-[#0B0F16] font-normal text-xs"
                       onClick={(e) => {
                        if (!hasPerformedAction) {
                          e.preventDefault();
                          toast({
                            variant: "destructive",
                            title: "Uh oh! Something went wrong.",
                            description: "Please complete a simulation or send a prompt before proceeding.",
                            action: <ToastAction altText="Try again">Try again</ToastAction>,
                          });
                        }
                      }}
                       >
                        Complete Simulation
                      </button>
                      <ToastContainer
                      position="top-center"
                      style={{ top: '80px' }}
                      />
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="px-8 md:w-full lg:w-full border-none rounded-lg max-w-auto w-[540px] h-[401px] bg-[#181818]">
                  <div className="mx-auto">
                    <Image
                      width={120}
                      height={120}
                      src={onboard}
                      className="mx-auto mb-5 pt-10"
                      alt=""
                    />
                    <h3 className="font-medium text-center text-[20px] leading-[26px] w-[80%] mx-auto mb-4">
                      Congratulations on Completing Your Initial Training!
                    </h3>
                    <p className="font-medium text-sm mx-auto text-center text-[#C1C1C1] w-[383px] mb-5">
                      The next step is to integrate your Telegram community
                    </p>
                    {/* button */}
                    <button
                      onClick={handleNavigation}
                      className="bg-white items-center flex justify-center text-center 
                text-xs font-normal ring-offset-white focus-visible:outline-none
                text-[#0D0D0D] h-10 w-[199px] rounded-[66px] mx-auto shadow-drop2"
                    >
                      Integrate your community now
                    </button>
                  </div>
                </DialogContent>
              </div>
            </Dialog>
          </div>
        </div>
        </div>
        </div>
        </div>
        </div>
    </>
  );
};

export default DialogData;

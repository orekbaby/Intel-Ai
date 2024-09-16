import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { FaCircle } from "react-icons/fa";
import { proDashboard, proUpgrade } from "@/config/mockData";
import { CiCircleCheck } from "react-icons/ci";
import Cookies from "js-cookie";
import { BarChart, chart, DiscordBar, EngagementChart, LineChart, persona1, persona2, socials, StarCenter, StarImage, StarLeft, TelegramBar, timer, TwitterBar } from "@/assets";

const Page = () => {
  const bgClipText: React.CSSProperties = {
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
  };

  return (
    <>
      <section className="pl-0 md:pl-2 lg:pl-[270px] w-full h-[100vh] mb-3 ">
        <div className="flex flex-col md:flex-row lg:flex-row w-full gap-2 dashboard-color h-[100vh] overflow-y-auto scrollbar-hide px-0 md:px-6 lg:px-6">
          {/* Main section taking 70% of the width */}
          <div className="w-full md:w-[70%] lg:w-[70%] gap-2 ml-2 md:ml-2 lg:ml-10 border-r border-[#363636] pr-0 md:pr-0 lg:pr-5">
            <h2 className="text-xs leading-[12.48px] font-normal mb-5 pt-5">
              Quick Actions
            </h2>
            {/* First row */}
            <div className="w-full flex flex-col md:flex-row lg:flex-row justify-between gap-5 mb-5">
              <div className="w-full md:w-[60%] lg:w-[60%]">
                <div
                  className="relative h-[187px] bg-gradient-to-r from-[rgba(0,0,0,1)]
                 via-[rgba(24,24,24,0.8)] to-[rgba(3,255,163,0.4)] rounded-[20px]"
                >
                  <h1 className="leading-[14.56px] text-sm pt-6  px-4 md:px-6 lg:px-6 font-normal text-[#5E5E5E] mb-5">
                    Hello, Username{" "}
                    <span className="leading-[14.56px] text-sm font-normal">
                      👋
                    </span>
                  </h1>
                  {/* first star */}
                  <div className="absolute top-[12%] left-[40%] ">
                    <Image
                      src={StarCenter}
                      width={245.9}
                      height={59.25}
                      alt="icon"
                    />
                  </div>

                  {/* second star */}
                  <div className="absolute bottom-[12%] left-[3%]">
                    <Image
                      src={StarLeft}
                      width={245.9}
                      height={59.25}
                      alt="icon"
                    />
                  </div>

                  {/* third */}
                  <div className="absolute bottom-[20%] right-[3%]">
                    <Image
                      src={StarLeft}
                      width={245.9}
                      height={59.25}
                      alt="icon"
                    />
                  </div>

                  <div className="px-4 md:px-2 lg:px-6">
                    <div className="flex flex-col justify-start">
                      <div className="w-full">
                        <h3 className="font-[200px] text-[24px] md:text-[36px] lg:text-[36px] leading-[37.44px] w-full">
                          Train, Update, Test & Simulate!
                        </h3>
                      </div>
                      <div className="flex justify-between items-center">
                        <p className="font-medium md:font-normal lg:font-normal text-[11px] md:text-[10px] lg:text-[10px] leading-[12.8px] text-[#969696] w-[169px] h-[22px]">
                          Train IntelAI to suit your tweets and requirements
                          seamlessly.
                        </p>
                        <div>
                          <Link href="/trainAi">
                            <button
                              className="bg-white items-center flex justify-center text-center 
                             text-xs font-medium ring-offset-white focus-visible:outline-none
                             text-[#0D0D0D] h-10 w-[153px] rounded-[20px] mx-auto leading-[12.48px]"
                            >
                              Train AI
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[95%] md:w-[40%] lg:w-[40%] px-1 md:px-0 lg:px-0">
                <div className="w-full h-[187px] bg-[#181818] rounded-[20px] px-4 py-3">
                  <div className="w-full">
                    <Image
                      src={StarImage}
                      width={291}
                      height={105}
                      alt="star"
                       className="mx-auto rounded-[20px] mb-2"
                    />
                  </div>

                  <div className="flex justify-start md:justify-center lg:justify-center items-start md:items-center lg:items-center gap-6">
                    <h3 className="font-normal w-full h-auto text-[24px] md:text-[18px] lg:text-[18px] leading-[27.96px] md:[24.96px] lg:[24.96px]">
                      Connect more communities
                    </h3>
                    <div className="flex justify-end md:justify-center lg:justify-center w-full md:w-auto lg:w-auto items-center pb-10">
        <div className="flex items-center border-b border-[#03FFA3] pt-7 md:pt-5 lg:pt-10">
          <p className="font-medium text-xs leading-[12.48px] text-[#03FFA3]">
            Start Integrating
          </p>
          <MdArrowOutward className="text-[#03FFA3] text-[10px] ml-2" />
        </div>
      </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Second row taking full width */}
            <div className="flex justify-between items-center w-full mb-3">
              <div className="font-medium yext-sm md:text-lg lg:text-lg">Analytics</div>
              <div className="relative">
                <select className="h-9 w-32 border bg-[#181818] border-[#272727] rounded-[25px] px-4 py-1 text-[#828282] font-medium text-sm text-center appearance-none">
                <option className="text-[#828282] font-medium text-sm text-left text-[14.96px]">
                    Today Week
                  </option>
                  <option className="text-[#828282] font-medium text-sm text-left text-[14.96px]">
                    This Week
                  </option>
                  <option className="text-[#828282] font-medium text-sm text-left text-[14.96px]">
                    Next Week
                  </option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <svg
                    className="fill-current text-[#828282] h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M5.516 7.548a.85.85 0 00-1.211 1.204l5.126 5.12a.85.85 0 001.211 0l5.125-5.12a.85.85 0 00-1.211-1.204L10 11.759 5.516 7.548z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-full h-[187px] bg-[#181818] rounded-[20px] mb-4 px-2 md:px-6 lg:px-6 py-4">
              <div className="flex justify-between items-center ">
                <p className="font-medium text-[10px] leading-[10.4px] text-[#969696]">
                  ACTIVITIES
                </p>
                <div className="flex flex-col md:flex-row lg:flex-row justify-center items-center gap-2">
                  <div className="flex items-center gap-1">
                    <FaCircle className="text-[#0EA5E9] text-[8px]" />
                    <p className="font-medium text-[8px] leading-[10.4px] text-[#969696]">
                      Discord
                    </p>
                  </div>

                  <div className="flex items-center justify-center gap-1">
                    <FaCircle className="text-[#8B5CF6] text-[8px]" />
                    <p className="font-medium text-[8px] leading-[10.4px] text-[#969696]">
                      Twitter
                    </p>
                  </div>

                  <div className="flex items-center gap-1">
                    <FaCircle className="text-[#2DB253] text-[8px]" />
                    <p className="font-medium text-[8px] leading-[10.4px] text-[#969696]">
                      Telegram
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center gap-4 items-center pt-5">
                <div className="flex flex-col">
                  <span className="font-normal text-[40px] leading-[41.6px] mb-2">
                    20
                  </span>
                  <p className="font-medium text-[10px] leading-[10.8px] w-full text-[#969696]">
                    Total escallations across all platforms
                  </p>
                </div>
                <div className="flex flex-1">
                  <div className="hidden md:block lg:block w-[530px] h-auto bg-[#1C1C1C] px-6 py-1">
                    <Image
                      src={BarChart}
                      alt="Descriptive alt text"
                      className="w-full h-auto object-cover"
                      layout="responsive"
                      width={510}
                      height={98}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Third row with two columns */}
            <div className="w-full flex flex-col md:flex-row lg:flex-row gap-4 mb-4">
              <div className=" w-full md:w-[50%] lg:w-[50%] h-[187px] bg-[#181818] rounded-[20px] flex flex-col px-4 md:px-6 lg:px-6 py-4">
                <div className="flex justify-between items-center ">
                  <p className="font-medium text-[10px] leading-[10.4px] text-[#969696]">
                    COMMUNITY ENGAGEMENT
                  </p>
                  <div className="flex justify-center items-center gap-2">
                    <div className="flex items-center gap-1">
                      <FaCircle className="text-[#0EA5E9] text-[8px]" />
                      <p className="font-medium text-[8px] leading-[10.4px] text-[#969696]">
                        Discord
                      </p>
                    </div>

                    <div className="flex items-center justify-center gap-1">
                      <FaCircle className="text-[#8B5CF6] text-[8px]" />
                      <p className="font-medium text-[8px] leading-[10.4px] text-[#969696]">
                        Twitter
                      </p>
                    </div>

                    <div className="flex items-center gap-1">
                      <FaCircle className="text-[#2DB253] text-[8px]" />
                      <p className="font-medium text-[8px] leading-[10.4px] text-[#969696]">
                        Telegram
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center gap-4 items-center pt-5">
                  <div className="flex flex-col">
                    <span className="font-normal text-[40px] leading-[41.6px] mb-2">
                      40%
                    </span>
                    <p className="font-medium text-[10px] leading-[10.8px] w-full text-[#969696]">
                      % Increase in community engagement day on day
                    </p>
                  </div>
                  <div className="flex flex-1">
                    <div className="w-[230px] h-auto bg-[#1C1C1C] px-1 py-1">
                      <Image
                        src={EngagementChart}
                        alt="Descriptive alt text"
                        className="w-full h-auto object-cover"
                        layout="responsive"
                        width={200}
                        height={81}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-[50%] lg:w-[50%] h-[187px] bg-[#181818] rounded-[20px] flex flex-col  px-6 py-4">
                <div className="flex justify-between items-center ">
                  <p className="font-medium text-[10px] leading-[10.4px] text-[#969696]">
                    % ESCALATION REPORTS
                  </p>
                  <div className="flex justify-center items-center gap-2">
                    <div className="flex items-center gap-1">
                      <FaCircle className="text-[#0EA5E9] text-[8px]" />
                      <p className="font-medium text-[8px] leading-[10.4px] text-[#969696]">
                        Discord
                      </p>
                    </div>

                    <div className="flex items-center justify-center gap-1">
                      <FaCircle className="text-[#8B5CF6] text-[8px]" />
                      <p className="font-medium text-[8px] leading-[10.4px] text-[#969696]">
                        Twitter
                      </p>
                    </div>

                    <div className="flex items-center gap-1">
                      <FaCircle className="text-[#2DB253] text-[8px]" />
                      <p className="font-medium text-[8px] leading-[10.4px] text-[#969696]">
                        Telegram
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center gap-4 items-center pt-5">
                  <div className="flex flex-col">
                    <span className="font-normal text-[40px] leading-[41.6px] mb-2">
                      40%
                    </span>
                    <p className="font-medium text-[10px] leading-[10.8px] w-full text-[#969696]">
                      Total escallations across all platforms
                    </p>
                  </div>
                  <div className="flex flex-1">
                    <div className="w-[170px] h-auto bg-[#1C1C1C] px-1 py-1">
                      <Image
                        src={chart}
                        alt="Descriptive alt text"
                        className="w-full h-auto object-cover"
                        layout="responsive"
                        width={170}
                        height={100}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Fourth row with two columns */}
            <div className="w-ful flex  flex-col md:flex-row lg:flex-row  gap-5">
              <div className="w-[50%] md:w-[25%] lg:w-[25%] h-[187px] bg-[#181818] rounded-[20px] px-4 py-4">
                <div className="">
                  <p className="font-medium text-[10px] leading-[10.4px] text-[#969696] mb-6">
                    PLATFORM ENGAGEMENTS
                  </p>
                  {/* image */}
                  <Image
                    src={DiscordBar}
                    width={164}
                    height={18.17}
                    alt="icon"
                    className="mb-6"
                  />

                  <Image
                    src={TwitterBar}
                    width={164}
                    height={18.17}
                    alt="icon"
                    className="mb-6"
                  />

                  <Image
                    src={TelegramBar}
                    width={164}
                    height={18.17}
                    alt="icon"
                  />
                </div>
              </div>
              <div className="w-[50%] md:w-[25%] lg:w-[25%] h-[187px] bg-[#181818] rounded-[20px] px-4 py-4">
                <div className="mx-auto">
                  <p className="font-medium text-[10px] leading-[10.4px] text-[#969696] mb-3 w-[80%]">
                    RESOLUTION TURN AROUND TIME
                  </p>
                  <Image
                    src={timer}
                    width={110.77}
                    height={120}
                     className="max-w-[100%]"
                    alt="icon"
                  />
                </div>
              </div>
              <div className="w-full md:w-[50%] lg:w-[50%] h-[187px] bg-[#181818] rounded-[20px] py-4 px-5">
                <p className="font-medium text-[10px] leading-[10.4px] text-[#969696] mb-5">
                  INTEL AI ACTIVITY
                </p>
                <p className="font-normal text-[#969696] text-xs leading-[12.48px]">
                  avg proficiency:{" "}
                  <span className="font-normal text-base leading-[16.64px] text-white">
                    7.0
                  </span>
                  <Image
                    src={LineChart}
                    width={370}
                    height={110.5}
                    className="max-w-[100%]"
                    alt="icon"
                  />
                </p>
              </div>
            </div>
          </div>
          {/* Side section taking 30% of the width */}

          <div className="w-full max-w-[30%] ml-2 border-white">
  <p className="font-normal text-xs leading-[12.48px] pt-5 mb-5">Outstanding Tasks</p>
  
  <div className="flex flex-col">
    <div className="w-full max-w-[100%] h-auto rounded-[20px] bg-[#181818] p-4 mb-8">
      <div className="w-full max-w-[100%] h-auto mx-auto rounded-[20px] bg-gradient-to-r from-[rgba(7,7,7,1)] to-[rgba(24,24,24,1)] mt-2">
        {/* first persona */}
        <div className="relative">
          {/* persona images */}
          <Image src={persona1} width={40} height={40} alt="female-persona" className="absolute top-0 left-2 z-10" />
          <Image src={persona2} width={40} height={40} alt="male-persona" className="absolute right-3 bottom-[-20%]" />
          
          <div className="w-full max-w-[186px] h-[44px] p-2 rounded-lg mx-auto mb-3">
            <div className="w-full max-w-[159px] h-[48px] border-[#181818] border px-2 py-2 rounded-[10px] z-20">
              <p className="text-[8px] font-normal leading-[9.76px] mb-2">Mozihla</p>
              <p className="text-[8px] font-normal leading-[9.76px] text-[#6D6D6D] w-full">Intel <span className="font-[900] text-[8px] text-white leading-[9.76px]">ai</span> automatically blocks spams and tracks the progress.</p>
            </div>
          </div>
          
          {/* second persona */}
          <div className="w-full max-w-[186px] h-[44px] p-2 rounded-lg mx-auto">
            <div className="w-full max-w-[159px] h-[48px] border-[#181818] border px-2 py-2 rounded-[10px] ml-5">
              <p className="text-[8px] font-normal leading-[9.76px] mb-2">Mozihla</p>
              <p className="text-[8px] font-normal leading-[9.76px] text-[#6D6D6D] w-full">Intel <span className="font-[900] text-[8px] text-white leading-[9.76px]">ai</span> automatically blocks spams and tracks the progress.</p>
            </div>
          </div>
        </div>
      </div>
      <p className="pt-5 font-medium text-base leading-[14.64px] mb-3">Spam blocking and tracking</p>
      <p className="text-[12px] font-normal leading-[16.64px] text-[#6D6D6D] w-full">Intel <span className="font-[900] text-[12px] text-white leading-[14.64px]">ai</span> automatically blocks spams and tracks the progress.</p>
    </div>

    {/* second box */}
    <div className="w-full max-w-[100%] h-auto rounded-[20px] bg-[#181818] p-4">
      <div className="w-full max-w-[250px] h-auto mx-auto rounded-[20px] bg-gradient-to-r from-[rgba(7,7,7,1)] to-[rgba(24,24,24,1)] mt-3">
        <Image src={socials} width={250} height={110} alt="icon" />
      </div>
      <p className="pt-5 font-medium text-base leading-[14.64px] mb-3">More integrations coming soon</p>
      <p className="text-[12px] font-normal leading-[16.64px] text-[#6D6D6D] w-full">We are adding more channels for integrations. Discord, Notion, Zapier, Slack, and many more.</p>
    </div>

    {/* third box */}
    <p className="text-xs font-normal leading-[12.48px] pt-10 mb-5">Promotions</p>

    {/* upgrade pro */}
    {proDashboard?.map((row, index) => (
      <div key={index} className="w-full max-w-[100%] h-auto rounded-[20px] bg-gradient-to-r from-[rgba(189,254,28,1)] via-[rgba(37,184,222,1)] to-[rgba(70,13,255,1)] p-6 py-5 relative">
        <Image src={row.img} width={38} height={38} alt="star" className="absolute top-5 right-7" />
        <h4 className="font-normal text-[48px] leading-[53.52px] mb-3">{row.title}</h4>
        <div className="flex gap-2">
          <CiCircleCheck />
          <p className="font-normal text-[10px] leading-[10.4px] text-white w-full mb-3">{row.content1}</p>
        </div>
        <div className="flex gap-2">
          <CiCircleCheck />
          <p className="font-normal text-[10px] leading-[10.4px] text-white w-full mb-3">{row.content2}</p>
        </div>
        <div className="flex justify-end">
          <Link href="/">
            <button className="bg-[#0D0D0D] items-center flex justify-center text-center ring-offset-white focus-visible:outline-none h-10 w-full max-w-[153px] rounded-[20px] mx-auto">
              <p style={bgClipText} className="bg-gradient-to-r from-[rgba(3,255,163,0.9)] to-[rgba(127,86,217,0.9)] text-xs font-normal text-transparent leading-[12.8px]">{row.button}</p>
              <MdArrowOutward className="text-[#7F56D9] text-sm pb-1" />
            </button>
          </Link>
        </div>
      </div>
    ))}
  </div>
</div>

        </div>
      </section>
    </>
  );
};

export default Page;

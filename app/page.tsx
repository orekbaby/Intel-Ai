"use client";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import { CldVideoPlayer } from "next-cloudinary";
import "next-cloudinary/dist/cld-video-player.css";

  const TestimonialCarousel = dynamic(() => import("@/components/TestimonialCarousel"), {
  ssr: false,
  loading: () => (
    <div className="flex-col justify-center items-center w-full h-24 hidden md:flex lg:flex xl:flex 2xl:flex">
      <div className="text-[#18283f] h-20 w-20 animate-spin mb-5" />
    </div>
  ),
});
import {
  communityOwners,
  customAgents,
  integration,
  kolsInfluencers,
 
  sponsors,
} from "@/config/mockData";
import Marquee from "react-fast-marquee";

import "../styles/fonts.css";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger1,
  AccordionTrigger,
} from "@/components/ui/accordion";

import Link from "next/link";
import Image from "next/image";
import {   accordionLanding } from "@/config/mockData";
import { Ellipse3, VectorQuestion } from "@/assets";

import { useRouter } from "next/navigation";

const Footer = dynamic(() => import("@/components/Footer"), {
  ssr: false,
  loading: () => (
    <div className="flex-col justify-center items-center w-full h-24 hidden md:flex lg:flex xl:flex 2xl:flex">
      <div className="text-[#18283f] h-20 w-20 animate-spin mb-5" />
    </div>
  ),
});

export default function Home() {
  const bgClipText: React.CSSProperties = {
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
  };

  const style: React.CSSProperties = {
    background:
      "radial-gradient(circle, rgba(133, 255, 211, .2), rgba(7, 99, 65, .2))",
    backgroundBlendMode: "darken",
    filter: "blur(50px)",
  };

  const style1: React.CSSProperties = {
    background:
      "radial-gradient(circle, rgba(133, 255, 211, .2), rgba(7, 99, 65, .2))",
    backgroundBlendMode: "darken",
    filter: "blur(50px)",
  };

  const style2: React.CSSProperties = {
    background:
      "radial-gradient(circle, rgba(3, 255, 163, 0.4), rgba(16, 12, 14, 0.5))",
    backgroundBlendMode: "darken",
    filter: "blur(50px)",
  };
  const moon: React.CSSProperties = {
    background:
      "radial-gradient(circle, rgba(220, 31, 255, 0.2), rgba(3, 255, 163, 0.4))",
    backgroundBlendMode: "darken",
    filter: "blur(50px)",
  };
  

  const style3: React.CSSProperties = {
    background:
      "radial-gradient(circle, rgba(0, 209, 178, 1), rgba(7, 99, 65, .2))",
    backgroundBlendMode: "darken",
    filter: "blur(60px)",
  };

  const style4: React.CSSProperties = {
    background:
      "radial-gradient(circle, rgba(127, 86, 217, 0.3), rgba(16, 12, 14, 0.6))",
    backgroundBlendMode: "darken",
    filter: "blur(70px)",
  };

  const style5: React.CSSProperties = {
    background:
      "radial-gradient(circle, rgba(3, 255, 163, .7), rgba(220, 31, 255, .7))",
    backgroundBlendMode: "darken",
    filter: "blur(50px)",
  };

  const style6: React.CSSProperties = {
    background:
      "radial-gradient(circle, rgba(3, 255, 163, .7), rgba(220, 31, 255, .7))",
    backgroundBlendMode: "darken",
    filter: "blur(50px)",
  };
  const router = useRouter(); 
  const videoUrl = "https://res.cloudinary.com/dy9f5rcat/video/upload/v1725477344/shcwnfht8qob3juvwzds.mp4";
  const videoId = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME

  return (
    <main className="mt-4 md:mt-20 lg:mt-20">
      {/* hero-section */}
      <section className="first-gradient section relative w-full h-auto overflow-hidden mx-auto z-10 ">
        <div className=" w-full ">
          <div className="px-0 md:px-28 lg:px-16">
            {/* Gradient background with lower z-index */}
            <div
              style={style2}
              className="bottom-[47%] -left-[1%] absolute w-[100%] md:w-[60%] lg:w-[60%] h-[130px] md:h-[360px] lg:h-[360px] -translate-x-1/2 z-[-1]"
            ></div>
            <div
              style={style6}
              className="bottom-0 -left-[50%] absolute w-[100%] md:w-[60%] lg:w-[30%] h-[130px] md:h-[360px] lg:h-[160px] -translate-x-1/2 z-[-1]"
            ></div>

<div
           style={moon}
            className="absolute bottom-[-5%] left-[50%] w-[30%] h-[150px] -translate-x-1/2 z-5"
          >

          </div>
            <h2
              style={bgClipText}
              className="bg-gradient-to-r from-[rgba(3,255,163,0.9)] to-[rgba(127,86,217,0.9)]
      text-transparent font-medium text-[27px] md:text-[40px] lg:text-[60px]
      leading-[30.28px] md:leading-[46.56px] lg:leading-[66.56px] text-center w-[378px] md:w-[90%] lg:w-[80%] mb-5 mx-auto guaruja-font"
            >
              Collaboration Protocol of Autonomous AI Agents
            </h2>
            <p className="font-normal text-sm md:text-[18px] lg:text-[22px] text-[#8A8A8A] text-center mb-4 md:mb-6 lg:mb-8 px-4 md:px-8 lg:px-0 leading-[20px] md:leading-[26px] lg:leading-[28px]  mx-auto w-full md:w-full lg:w-[50%]">
      Tailored Intelligence built from the ground up specifically for
        the Web3 Ecosystem.
</p>


            {/* mobile button */}
            <Link href="/log-in" prefetch={false}>
              <div className="shadow-drop block md:hidden lg:hidden bg-gradient-to-r from-[rgba(3,255,163,.9)] to-[rgba(127,86,217,.9)] rounded-[24px] py-[2px] px-[2px] mb-0 h-[43px] md:h-[70px] lg:h-[70px] w-fit justify-center text-center mx-auto">
                <button className="flex items-center w-full justify-center gap-2 bg-gradient-to-r from-[#3A3A3A] to-[#000000] rounded-[24px] py-2 md:py-5 h-[43px] lg:py-5 px-12 md:px-28 lg:px-28 text-center font-medium text-sm">
                  Request Early Access
                  <span className="text-[#03FFA3]">
                    <svg
                      width="6"
                      height="7"
                      viewBox="0 0 6 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.146447 5.51803C-0.0488155 5.71329 -0.0488155 6.02987 0.146447 6.22514C0.341709 6.4204 0.658291 6.4204 0.853553 6.22514L0.146447 5.51803ZM5.74342 1.12817C5.74342 0.852023 5.51956 0.628166 5.24342 0.628166L0.743416 0.628166C0.467274 0.628166 0.243416 0.852023 0.243416 1.12817C0.243416 1.40431 0.467274 1.62817 0.743416 1.62817L4.74342 1.62817L4.74342 5.62817C4.74342 5.90431 4.96727 6.12817 5.24342 6.12817C5.51956 6.12817 5.74342 5.90431 5.74342 5.62817L5.74342 1.12817ZM0.853553 6.22514L5.59697 1.48172L4.88986 0.774612L0.146447 5.51803L0.853553 6.22514Z"
                        fill="#BDFE1C"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </Link>

            {/* mobile picture */}
        <div className="mx-auto block md:hidden lg:hidden rounded-[20px] px-4 relative overflow-hidden">
        <div className="w-full h-[35vh] p-[3px] bg-gradient-to-r translate-y-12 from-[rgba(3,255,163,.9)] to-[rgba(127,86,217,.9)] rounded-[20px] object-cover block md:hidden lg:hidden">
          <div className="bg-[#0D0D0D] w-full h-full rounded-[20px] p-[2px]"> 
    <video
      className="object-cover w-full h-full rounded-[20px] text-center"
      loop
      autoPlay
      muted
      playsInline
      preload="auto" 
      controls={false} 
      onCanPlayThrough={() => console.log("Mobile video ready to play smoothly")} 
      onError={() => console.error("Error loading mobile video")}
    >
      <source 
        src={videoUrl} 
        type="video/mp4" 
      />
      Your browser does not support the video tag.
    </video>
  </div>
</div>
 </div>
            <Link href="log-in" prefetch={false}>
              <div
                className="shadow-drop hidden md:block lg:block bg-gradient-to-r from-[rgba(3,255,163,.9)]
             to-[rgba(127,86,217,.9)] rounded-[66px] py-[2px] px-[2px] mb-10 md:mb-16 lg:mb-16 h-[43px] md:h-[70px] lg:h-[70px] xl:h-[70px] 2xl:h-[75px] w-fit justify-center mx-auto"
              >
                <button className="flex gap-2 bg-gradient-to-r from-[#3A3A3A] to-[#000000] rounded-[66px] py-2 md:py-5 lg:py-5 px-12 md:px-28 lg:px-28 text-center">
                  Request Early Access
                  <span className="text-[#03FFA3]">
                    <svg
                      width="6"
                      height="7"
                      viewBox="0 0 6 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.146447 5.51803C-0.0488155 5.71329 -0.0488155 6.02987 0.146447 6.22514C0.341709 6.4204 0.658291 6.4204 0.853553 6.22514L0.146447 5.51803ZM5.74342 1.12817C5.74342 0.852023 5.51956 0.628166 5.24342 0.628166L0.743416 0.628166C0.467274 0.628166 0.243416 0.852023 0.243416 1.12817C0.243416 1.40431 0.467274 1.62817 0.743416 1.62817L4.74342 1.62817L4.74342 5.62817C4.74342 5.90431 4.96727 6.12817 5.24342 6.12817C5.51956 6.12817 5.74342 5.90431 5.74342 5.62817L5.74342 1.12817ZM0.853553 6.22514L5.59697 1.48172L4.88986 0.774612L0.146447 5.51803L0.853553 6.22514Z"
                        fill="#BDFE1C"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </Link>
           


            {/* Hero image with higher z-index  */}
            <div className="pb-0 md:pb-10 lg:pb-20 px-12">
              <div
                className="hidden md:block lg:block rounded-[20px] h-full"
              >
               <div
  className="w-full h-full p-[2px] hidden md:block lg:block rounded-[20px] 
  bg-gradient-to-r from-[rgba(3,255,163,.9)] to-[rgba(127,86,217,.9)] border-2 border-transparent"
>
  <div className="bg-[#0D0D0D] w-full h-full rounded-[20px] p-[2px]">
    <video
      className="object-cover w-full h-full rounded-[20px]"
      loop
      autoPlay
      muted
      playsInline
      preload="auto" // Preload video for smoother playback
      onCanPlayThrough={() => console.log('Video ready to play smoothly')} // Log when video is ready
      onError={() => console.error('Error loading video')}
    >
      <source src={videoUrl} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
</div>

              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Second section */}
      <div className="bg-[#181818] pt-10 md:pt-32 lg:pt-20 px-4 md:px-24 lg:px-0 text-center pb-7 md:pb-20 lg:pb-20 mx-auto">
  <h3 className="font-medium text-[24px] md:text-[27px] lg:text-[56px] mb-4 md:mb-8 lg:mb-8 leading-[28.32px] md:leading-[40px] lg:leading-[65.5px] text-center w-full md:w-[90%] lg:w-[80%] mx-auto">
    Meticulously Engineered To Deliver {""}
    <span
      style={bgClipText}
      className="bg-gradient-to-r from-[#03FFA3] to-[#7F56D9] text-transparent"
    >
      Human-Like Intelligence {""}
    </span>
    at every level
  </h3>
  <p className="font-normal text-[14px] md:text-base lg:text-[20px] xl:text-[20px] 2xl:text-[22px] 
  px-2 md:px-8 lg:px-12 mb-6 md:mb-6 lg:mb-6 text-[#8A8A8A] leading-[20px] md:leading-[24px] lg:leading-[31.2px] mx-auto w-full md:w-full lg:w-[70%]">
  Experience AI Agents that interact like humans but operate with the power of a supercomputer. 0Xai&apos;s deep learning algorithms are designed to replicate the intricate workflows of blockchain engineers and communities, ensuring every interaction feels personal while delivering unmatched precision and efficiency.
  </p>
 
  <div className="mx-auto w-full px-0 md:px-20 lg:px-20 h-full">
  <div
    className="p-[1px] rounded-[8px] w-full h-full bg-gradient-to-r hidden md:block lg:block"
    style={{
      background: "linear-gradient(135deg, rgba(58, 58, 58, 1), rgba(0, 0, 0, 1))",
    }}
  >
    <video
      className="object-cover mx-auto max-w-full h-full w-full rounded-[8px]"
      loop
      autoPlay
      muted
      playsInline
      preload="auto"
      onCanPlayThrough={() => console.log('Video ready to play smoothly')}
      onError={() => console.error('Error loading video')}
    >
      <source
        src="https://res.cloudinary.com/dy9f5rcat/video/upload/v1729154644/B7BBAE94-E274-4508-94B8-367ABC6B69CF_j4fxno.mp4"
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
  </div>

  {/* Mobile Video */}
  <div
    className="p-[1px] rounded-[8px] bg-gradient-to-r block md:hidden lg:hidden w-full h-full"
    style={{
      background: "linear-gradient(135deg, rgba(58, 58, 58, 1), rgba(0, 0, 0, 1))",
    }}
  >
    <video
      className="object-cover w-full h-full rounded-[8px] text-center block"
      loop
      autoPlay
      muted
      playsInline
      preload="auto"
      controls={false}
      onCanPlayThrough={() => console.log('Mobile video ready to play smoothly')}
      onError={() => console.error('Error loading mobile video')}
    >
      <source
        src="https://res.cloudinary.com/dy9f5rcat/video/upload/v1729154644/B7BBAE94-E274-4508-94B8-367ABC6B69CF_j4fxno.mp4"
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
  </div>
  </div>
  </div>



      {/* custom ai */}
      <div className="relative w-full h-auto overflow-hidden z-10 ">
        {/* first right gradient */}
        <div
          style={style2}
          className="-top-[3%] left-[98%] absolute w-[50%] h-[350px] -translate-x-1/2 z-5"
        ></div>

        {/* second left gradient */}
        <div
          style={style2}
          className="top-[35%] -left-[7%] absolute w-[50%] h-[350px] -translate-x-1/2 overflow-hidden z-5"
        ></div>

        {/* third gradient */}
        <div
          style={style2}
          className="top-[60%] left-[98%] absolute w-[50%] h-[450px] -translate-x-1/2 z-5"
        ></div>

        {/* fouurth gradient */}
        <div
          style={style2}
          className="-bottom-[3%] left-[98%] absolute w-[50%] h-[450px] -translate-x-1/2 z-5"
        ></div>

        <div className="mx-auto px-0 md:px-28 lg:px-40 text-center pt-16 md:pt-28 lg:pt-32 mb-7 md:mb-16 lg:mb-16">
          <h3 className="font-medium pl-10 md:pl-0text-center w-[90%] md:w-full lg:w-full text-[20px] md:text-[27px] lg:text-[32px] mb-5">
          Custom AI Agents That Truly  Understand Web3
          </h3>
          <p className="font-normal text-center text-[13px] md:text-[14px] lg:text-[20px] w-[90%] md:w-full lg:w-full h-auto mx-auto px-0 md:px-28 lg:px-0  text-[#B6B5B5] mb-0 md:mb-20 lg:mb-20 leading-[18.2px] md:leading-[18.45px] lg:leading-[31.2px]">
          0Xai leverages a custom <span className="font-semibold text-center text-[13px] md:text-[14px] lg:text-[20px] text-[#B6B5B5] ">LLM architecture</span> that&apos;s fine-tuned to grasp the intricacies of blockchain technology use cases with unparalleled precision.
          </p>
        </div>
        {/* custom ai */}
        <div className="flex flex-col w-full md:flex-row lg:flex-row justify-center gap-4 md:gap-6 lg:gap-8 mx-auto px-4 md:px-6 lg:px-8">
  {communityOwners?.map((row, index) => (
   <div
   key={index}
   className="flex-1 h-[381px] md:h-[381px] lg:h-[440px] bg-[#070707] rounded-lg px-4 md:px-6 lg:px-6 py-4 md:py-6 lg:py-8 mb-6 md:mb-8 lg:mb-10 mx-auto"
 >
   <Image
     src={row.img}
     width={340}
     height={200}
     alt="custom-img"
     className="object-cover w-full h-auto max-w-full mx-auto mb-4"
   />
   <h4 className="font-medium text-base md:text-sm lg:text-[18px] w-[75%] md:w-full lg:w-full mb-3 leading-normal md:leading-relaxed lg:leading-[1.4]">
  {row.heading}
</h4>

   <p className="font-normal text-sm md:text-[13px] text-[#8A8A8A] w-full md:w-auto h-auto leading-relaxed">
     {row.content}
   </p>
 </div>
  ))}

  {/* second column */}
  {kolsInfluencers?.map((row, index) => (
  <div
    key={index}
    className="flex-1 h-[381px] md:h-[381px] lg:h-[440px] bg-[#070707] rounded-lg px-4 md:px-6 lg:px-6 py-4 md:py-6 lg:py-4 mb-6 md:mb-8 lg:mb-10 mx-auto"
  >
    <Image
      src={row.img}
      width={340}
      height={200}
      alt="custom-img"
      className="object-cover w-full h-auto max-w-full mx-auto"
    />
<h4 className="font-medium text-base md:text-sm lg:text-[18px] w-[75%] md:w-full lg:w-full mb-3 leading-normal md:leading-relaxed lg:leading-[1.4]">
  {row.heading}
</h4>

    <p className="font-normal text-sm md:text-[13px] text-[#8A8A8A] w-full md:w-auto h-auto leading-relaxed break-words overflow-wrap">
      {row.content}
    </p>
  </div>
))}


  {/* third column */}
  {customAgents?.map((row, index) => (
    <div
      key={index}
      className="flex-1 h-[381px] md:h-[381px] lg:h-[440px] bg-[#070707] rounded-lg px-4 md:px-6 lg:px-6 py-4 md:py-6 lg:py-8 mb-6 md:mb-8 lg:mb-10 mx-auto"
    >
      <Image
        src={row.img}
        width={350}
        height={173}
        alt="custom-img"
        className="object-cover w-full h-auto max-w-full mx-auto mb-4"
      /> 
      <h4 className="font-medium text-base md:text-sm lg:text-[18px] w-[75%] md:w-full lg:w-full mb-3 leading-normal md:leading-relaxed lg:leading-[1.4]">
  {row.heading}
</h4>

      <p className="font-normal text-sm md:text-[13px] text-[#8A8A8A] w-full md:w-auto h-auto leading-relaxed">
        {row.content}
      </p>
    </div>
  ))}
</div>

{/* stop here */}


        <div className="mx-auto px-4 md:px-0 lg:px-40 xl:px-40 2xl:px-48 text-center pt-28">
          <h5
            style={bgClipText}
            className="font-normal text-[20px] w-[90%] md:w-full lg:w-full pl-10 md:pl-0 lg:pl-0 md:text-[27px] lg:text-[32px] xl:text-[32px] 2xl:text-[36px] leading-[26.88px] md:leading-[51.84px] lg:leading-[51.84px] mb-10 md:mb-6 lg:mb-6 bg-gradient-to-r from-[#03FFA3] 
             to-[#7F56D9] text-transparent" 
          >
            Join the top companies already using 0x AI
          </h5>
        </div>
        <Marquee className="py-2" pauseOnHover={true}>
          <div className="flex justify-center gap-4 md:gap-10 lg:gap-10 md:justify-between lg:justify-between mb-20 md:mb-56 lg:mb-56">
            {sponsors?.map((row, index) => (
              <div key={index} className="flex justify-between">
                <Image
                  src={row.img}
                  width={122.85}
                  height={32.39}
                  alt={`sponsor-img-${index}`} 
                  className="w-[101.23px] h-[20.72px] md:h-[32.39px]
                 lg:h-[32.39px] md:w-[122.85px] lg:w-[122.85px]"
                />
              </div>
            ))}
          </div>
        </Marquee>

        {/* features section */}
        <div className="mx-auto px-0 md:px-32 lg:px-40 xl:px-40 2xl:px-48 text-center z-10">
          <div className="bg-gradient-to-r from-[#3A3A3A] to-[#000000] w-fit rounded-[66px] mx-auto">
            <span
              className="font-medium text-[13.96px] bg-gradient-to-r from-[#03FFA3] to-[#7F56D9] w-[96.87px] h-[25.98px] text-center rounded-[66px] py-[3.99px]
           px-[21.93px] shadow-drop"
            >
              Features
            </span>
          </div>
          <h5 className="hidden md:block lg:block font-medium w-full h-auto md:h-auto lg:h-auto md:w-[80%] lg:w-full text-[24px] md:text-[27px] lg:text-[32px] leading-[38.77px] md:leading-[40.15px] lg:leading-[58.15px] pt-5 md:pt-8 lg:pt-8  mb-28 mx-auto">
          Empower Your Workflow with Cutting-Edge Features
          </h5>
          <h5 className="block md:hidden lg:hidden font-medium w-[346px] h-[78px] md:h-auto lg:h-auto md:w-full lg:w-full text-[22px] leading-[30.77px]  pt-5 mb-16 mx-auto">
            Empower Your Workflow with Cutting-Edge Features
          </h5>
         
        </div>
       {integration.map((row, index) => (
  <div
    key={index}
    className={`flex flex-col px-4 md:px-20 ${
      index === 1 ? "md:flex-row-reverse" : "md:flex-row"
    } justify-center items-center mx-auto gap-10 mb-16`}
  >
    {/* Text Section */}
    <div className="w-full md:w-1/2 text-left px-4">
      <h5 className="text-xl md:text-2xl lg:text-2xl font-medium mb-4 w-full md:w-[90%]">{row.title}</h5>
      <p className="text-sm md:text-base text-[#BDBDBD]">{row.description}</p>
    </div>
   
    {/* Image Section */}
    <div className="w-full md:w-1/2 relative">
      <div className="w-full h-auto bg-center bg-cover">
        <Image
          src={row.integration}
          width={600}
          height={532}
          alt="Integration Image"
          className="object-cover w-full h-auto hidden md:block lg:block"
        />

        <Image
          src={row.mobileImg}
          width={389}
          height={379}
          alt="Integration Image"
          className="object-cover w-full h-auto block md:hidden lg:hidden"
        />
      </div>
    </div>
  </div>
))}




        
      </div>
      {/* testimonials section */}
      <div className="text center mx-auto px-0 md:px-12 lg:px-40 mb-16 md:mb-36 lg:mb-36 mt-20">
        <h5 className="font-medium text-[24px] md:text-[27px] lg:text-[32px]leading-[38px] md:leading-[45.15px] leading-[58.77px] mt-10 mb-5 text-center mx-auto">
          Voices of Innovation, Testimonials
        </h5>
        <p className="font-normal text-sm leading-[22.68px] md:[27.68px] lg:leading-[27.68px] md:text-sm lg:text-sm text-[#BDBDBD] mx-auto px-2 md:px-24 lg:px-44 mb-5 text-center">
        See what people say about 0x AI
        </p>
      </div>
      {/* carousel for testimonials */}
      <div className="mx-auto px-2 md:px-32 lg:px-24 mb-14 md:mb-60 lg:mb-60">
        <TestimonialCarousel />
      </div>

      {/* FAQ */}
      <>
        <div className="relative w-full h-auto overflow-hidden">
          <div
            style={style2}
            className="-bottom-[3%] left-[50%] absolute w-[60%] h-[350px] -translate-x-1/2"
          ></div>
          {/* rainbow- style */}
          <div
           style={moon}
            className="absolute bottom-[-5%] left-[50%] w-[30%] h-[150px] -translate-x-1/2"
          >
         </div>

      <div className="text center mx-auto px-0 md:px-24 lg:px-40 mb-5 md:mb-12 lg:mb-12">
            <h5 className="font-medium text-[24px] md:text-[27px] lg:text-[36px] text-center mb-5 md:mb-5 lg:mb-10 w-[323px] md:w-full lg:w-full h-[39px] mx-auto">
              Frequently asked questions
            </h5>
            <p className="font-normal text-sm md:text-base lg:text-sm text-center text-[#8A8A8A]">
              Everything you need to know
            </p>
          </div>
          <div className="relative mx-auto max-w-screen-lg w-[100%] px-4 md:w-[70%] lg:w-[60%] mb-20 md:mb-48 lg:mb-48">
            {accordionLanding?.map((row, index) => (
              <div key={index} className="">
                <Accordion className="" type="single" collapsible>
                  <AccordionItem className="border-none" value={row.value}>
                    <AccordionTrigger1 className="font-normal text-sm border-b leading-[25.92px] border-[#2B2B2B] text-left">
                      {row.trigger}
                    </AccordionTrigger1>
                    <AccordionContent className="text-left text-[#8A8A8A] leading-[25.92px] font-normal text-sm mt-3">
                      {row.content}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            ))}

            <div className="w-fit relative h-auto md:h-auto lg:h-auto overflow-hidden md:w-full lg:w-[784px] px-3 md:px-6 lg:px-8 pt-6 md:pt-4 lg:pt-10 pb-0 md:pb-4 lg:pb-4 rounded-[20px] mb-24 md:mb-28 lg:mb-10 mt-40 bg-gradient-to-r from-[rgba(189,254,28,.9)] via-[rgba(37,184,222,.9)] to-[rgba(70,13,255,.9)] mx-auto">
              <div className="absolute inset-0 bg-background-image w-full h-full bg-center bg-no-repeat bg-contain z-0">
                <Image
                  src={VectorQuestion}
                  width={350}
                  height={250}
                  alt="bg-img"
                  className="relative bottom-7 left-0 opacity-[60%] hidden"
                />
              </div>
              <div className="relative z-10">
                <h5 className="font-medium text-[22px] text-[#E7F1FF] text-left">
                  Still have questions?
                </h5>
                <div className="flex flex-col md:flex-row lg:flex-row md:justify-between lg:justify-between items-center w-full h-full">
                  <p className="font-normal text-sm md:text-[16px] lg:text-sm leading-[1.7rem] mt-0 md:mt-2 lg:mt-0 mb-3 md:mb-4 lg:mb-4 text-[#2A336D] h-auto w-full md:w-[387px] md:h-[42px] lg:w-[357px] lg:h-[42px]">
                    Can&apos;t find the answer you&apos;re looking for? Please
                    chat to our friendly team.
                  </p>
                  <div className="w-fit md:w-auto mb-5 md:text-right md:mb-10 lg:mb-10 text-left">
                    <div className="bg-gradient-to-r from-[rgba(189,254,28,.9)] to-[rgba(37,184,222,.9)] rounded-[66px] py-[2px] px-[2px] shadow-drop">
                      <button className="bg-gradient-to-r from-[#3A3A3A] to-[#000000] flex gap-2 items-center justify-center text-sm font-medium ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-800 hover:scale-95 dark:text-secondary text-white transition ease-in-out delay-150 duration-300 h-10 w-[153px] rounded-[66px] hover:bg-[#0B0F16] cursor-pointer"
                       onClick={() => router.push('/log-in')}
                      >
                        Sign Up
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>

      {/* footer section */}
      <Footer />
    </main>
  );
}

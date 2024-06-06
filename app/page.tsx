import {
  advantages,
  communityOwners,
  content,
  customAgents,
  integration,
  kolsInfluencers,
  sorting,
  sponsors,
} from "@/utils/mockData";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger1,
  AccordionTrigger,
} from "@/components/ui/accordion";

import Image from "next/image";

import { accordionData } from "@/utils/mockData";

// import Marquee from "react-fast-marquee";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Testimonials from "@/components/carousel/Testimonials";

import Testimonials2 from "@/components/carousel/Testimonials2";

import Testimonials3 from "@/components/carousel/Testimonials3";

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
  //   rainbow on top
  //   #03FFA3  3, 255, 163, 1
  // 20%
  // #DC1FFF  220, 31, 255, 1
  // 20%

  // footer gradient
  // #7F56D9 127, 86, 217, 1
  // 20.7%
  // #100C0E 16, 12, 14, 1
  // 19.8%

  //   eclipse colors
  // #D9FFF1  217, 255, 241, 1
  // 80%
  // #03FFA3 3, 255, 163, 1
  // 40%
  // #03FFA3  3, 255, 163, 1
  // 35%

  const style1: React.CSSProperties = {
    background:
      "radial-gradient(circle, rgba(133, 255, 211, .2), rgba(7, 99, 65, .2))",
    backgroundBlendMode: "darken",
    filter: "blur(50px)",
  };

  const style2: React.CSSProperties = {
    background:
      "radial-gradient(circle, rgba(133, 255, 211, .2), rgba(7, 99, 65, .2))",
    backgroundBlendMode: "darken",
    filter: "blur(60px)",
  };

  const style3: React.CSSProperties = {
    background:
      "radial-gradient(circle, rgba(0, 209, 178, 1), rgba(7, 99, 65, .2))",
    backgroundBlendMode: "darken",
    filter: "blur(60px)",
  };

  const style4: React.CSSProperties = {
    background:
      "radial-gradient(circle, rgba(127, 86, 217, 0.8), rgba(16, 12, 14, 0.9))",
    backgroundBlendMode: "darken",
    filter: "blur(70px)",
  };

  const style5: React.CSSProperties = {
    background:
      "radial-gradient(circle, rgba(3, 255, 163, .7), rgba(220, 31, 255, .7))",
    backgroundBlendMode: "darken",
    filter: "blur(50px)",
  };

  return (
    <main className="mt-24 md:mt-20 lg:mt-20">
      {/* hero-section */}
      <section className="first-gradient section relative w-full h-auto overflow-hidden">
        <div className="mx-auto w-full md:max-w-[1280px] lg:max-w-[1280px] px-5 md:px-4 lg:px-6 relative mb-10">
          <div className="w-auto px-28">
            <div
              style={style2}
              className="bottom-[47%] -left-[1%] absolute w-[60%] h-[350px] -translate-x-1/2"
            ></div>
            <h1
              style={bgClipText}
              className="bg-gradient-to-r from-[rgba(3,255,163,0.9)] to-[rgba(127,86,217,0.9)] text-transparent font-medium text-[64px] leading-[66.56px] text-center mb-5 "
            >
              Communication Protocol of Blockchain AI Agents
            </h1>
            {/* First gradient */}

            <p className="font-normal text-[24px] text-[#8A8A8A] text-center mb-10 px-40">
              Tailored Intelligence built from the ground up specifically for
              the Web3 Ecosystem.
            </p>
            <div className="bg-gradient-to-r from-[rgba(3,255,163,.9)] to-[rgba(127,86,217,.9)] rounded-[66px] py-[2px] px-[2px] mb-10 shadow-xl shadow-[#BDFE1C1A] h-70 w-fit justify-center mx-auto">
              {" "}
              <button className="flex gap-2 bg-gradient-to-r from-[#3A3A3A] to-[#000000] rounded-[66px] py-5 px-28">
                Request Early Access{" "}
                <span className="text-[#03FFA3]">
                  <svg
                    width="6"
                    height="7"
                    viewBox="0 0 6 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {" "}
                    <path
                      d="M0.146447 5.51803C-0.0488155 5.71329 -0.0488155 6.02987 0.146447 6.22514C0.341709 6.4204 0.658291 6.4204 0.853553 6.22514L0.146447 5.51803ZM5.74342 1.12817C5.74342 0.852023 5.51956 0.628166 5.24342 0.628166L0.743416 0.628166C0.467274 0.628166 0.243416 0.852023 0.243416 1.12817C0.243416 1.40431 0.467274 1.62817 0.743416 1.62817L4.74342 1.62817L4.74342 5.62817C4.74342 5.90431 4.96727 6.12817 5.24342 6.12817C5.51956 6.12817 5.74342 5.90431 5.74342 5.62817L5.74342 1.12817ZM0.853553 6.22514L5.59697 1.48172L4.88986 0.774612L0.146447 5.51803L0.853553 6.22514Z"
                      fill="#BDFE1C"
                    />{" "}
                  </svg>{" "}
                </span>
              </button>{" "}
            </div>
            <Image
              src="/hero-img.png"
              width={1088}
              height={721}
              alt="hero-img"
              className="object-cover w-[100%] h-auto text-center z-10"
            />
          </div>
        </div>
      </section>
      {/* second section */}
      <div className="bg-[#181818] pt-32 w-auto px-36 text-center pb-28">
        <h2 className="font-medium text-[64px] mb-10 leading-[75.52px]">
          Meticulously Engineered To Deliver{" "}
          <span
            style={bgClipText}
            className="bg-gradient-to-r from-[#03FFA3]  to-[#7F56D9] text-transparent"
          >
            {" "}
            Human-Like Responses
          </span>
          :
        </h2>
        <p className="font-normal text-[24px] px-32 mb-7 text-[#8A8A8A]">
          Experience the sophistication of AI Agents that talks like a human but
          works like a supercomputer. Intel AI&apos;s deep learning algorithms
          are crafted to replicate the warmth, empathy, and complexity of human
          interaction, ensuring that every message, reply, or announcement feels
          genuinely personal.
        </p>
        <Image
          src="/ai-img.png"
          width={1002}
          height={361.55}
          alt="hero-img"
          className=" object-cover w-auto h-auto text-center"
        />
      </div>
      {/* custom ai */}
      <div className="relative w-full h-auto overflow-hidden ">
        {/* first right gradient */}
        <div
          style={style}
          className="-top-[3%] left-[98%] absolute w-[50%] h-[350px] -translate-x-1/2"
        ></div>

        {/* second left gradient */}
        <div
          style={style}
          className="top-[35%] -left-[7%] absolute w-[50%] h-[350px] -translate-x-1/2 overflow-hidden"
        ></div>

        {/* third gradient */}
        <div
          style={style}
          className="bottom-[50%] left-[98%] absolute w-[50%] h-[450px] -translate-x-1/2"
        ></div>

        {/* fouurth gradient */}
        <div
          style={style2}
          className="-bottom-[3%] left-[98%] absolute w-[50%] h-[500px] -translate-x-1/2"
        ></div>

        <div className="w-auto px-40 text-center pt-32 mb-16">
          <h3 className="font-medium text-[36px] mb-5">
            Custom AI Agents Like Never Before
          </h3>
          <p className="font-normal text-[24px] w-auto px-40 text-[#8A8A8A] mb-20">
            Intel AI leverages a custom LLM architecture that&apos;s fine-tuned
            to grasp the intricacies of blockchain technology, its narratives,
            trends, & community nuances with unparalleled precision
          </p>
        </div>
        {/* custom ai */}
        <div className="flex justify-center gap-10 w-auto">
          {communityOwners?.map((row, index) => (
            <div
              key={index}
              className="w-[400.88px] h-[355.38px] bg-[#070707] rounded-[20px] px-6 pt-1 mb-48"
            >
              {" "}
              <Image
                src={row.img}
                width={345.99}
                height={184.91}
                alt="custom-img"
                className="object-cover w-auto h-auto text-center mb-8"
              />
              <h4 className="font-medium text-[20px] mb-3">{row.heading}</h4>
              <p className="font-normal text-sm text-[#8A8A8A] w-[370px] h-[54px] leading-[18.2px]">
                {row.content}
              </p>
            </div>
          ))}
          {/* second column */}
          {kolsInfluencers?.map((row, index) => (
            <div
              key={index}
              className="w-[400.88px] h-[355.38px] bg-[#070707] rounded-[20px] px-6 pt-1 mb-36"
            >
              <Image
                src={row.img}
                width={340.93}
                height={200.08}
                alt="custom-img"
                className="object-cover w-auto h-auto text-center mb-6"
              />
              <h4 className="font-medium text-[20px] mb-3">{row.heading}</h4>
              <p className="font-normal text-sm text-[#8A8A8A] w-[354px] h-[36px] leading-[18.2px]">
                {row.content}
              </p>
            </div>
          ))}

          {/* third column */}
          {customAgents?.map((row, index) => (
            <div
              key={index}
              className="w-[401.12px] h-[355.38px] bg-[#070707] rounded-[20px] px-6 pt-10 mb-36"
            >
              <Image
                src={row.img}
                width={350}
                height={173}
                alt="custom-img"
                className="object-cover w-auto h-auto text-center mb-5"
              />
              <h4 className="font-medium text-[20px] mb-3">{row.heading}</h4>
              <p className="font-normal text-sm text-[#8A8A8A] w-[348px] h-[54px] leading-[18.2px]">
                {row.content}
              </p>
            </div>
          ))}
        </div>
        <div className="w-auto px-40 text-center">
          <h5
            style={bgClipText}
            className="font-normal text-[32px] leading-[51.84px] mb-6 bg-gradient-to-r from-[#03FFA3]  to-[#7F56D9] text-transparent"
          >
            Join the top companies already using Intel AI
          </h5>
        </div>
        <div className="flex justify-between mb-56">
          {sponsors?.map((row, index) => (
            <div key={index} className=" flex justify-between">
              <Image
                src={row.img}
                width={122.85}
                height={32.39}
                alt="spnsors-img"
              />
            </div>
          ))}
        </div>
        {/* <Marquee className="py-2" pauseOnHover={true}></Marquee> */}

        {/* features section */}
        <div className="w-auto px-40 text-center">
          <div className="bg-gradient-to-r from-[#3A3A3A] to-[#000000] w-fit rounded-[66px] mx-auto">
            <span
              className="font-medium text-[13.96px] bg-gradient-to-r from-[#03FFA3] to-[#7F56D9] w-[96.87px] h-[25.98px] text-center rounded-[66px] py-[3.99px]
           px-[21.93px] shadow-drop"
            >
              Features
            </span>
          </div>
          <h5 className="font-medium text-[36px] leading-[58.15px] mt-8 mb-5">
            Glossy Unleashed: Latest Innovations
          </h5>
          <p className="font-normal text-base text-[#BDBDBD] w-auto px-32 mb-20">
            Explore the frontier of coding evolution with Glossy Unleashed. Our
            latest features redefine the boundaries of what&apos;s possible in
            coding tools.
          </p>
        </div>
        {integration?.map((row, index) => (
          <div key={index} className="flex justify-center  w-auto px-32 mb-20">
            <div className="w-1/2">
              <Image
                src={row.img}
                width={45}
                height={45}
                alt="cable-icon"
                className="mb-8"
              />
              <h5 className="font-medium text-[29.91px leading-[28.88px] w-[60%] text-left mb-5">
                {row.title}
              </h5>
              <p className="font-normal text-base text-[#BDBDBD] mb-10 w-[498px] h-[63px] ">
                {row.description}
              </p>
              <div className="flex gap-2  justify-start">
                <Image
                  src={row.img2}
                  width={25}
                  height={25}
                  alt="content-tag"
                  className="mb-5"
                />
                <p className="font-normal text-[13.96px] text-[#BDBDBD]">
                  {row.name}
                </p>
              </div>
              <div className="flex gap-2 justify-start">
                <Image
                  src={row.img3}
                  width={25}
                  height={25}
                  alt="query"
                  className=""
                />
                <p className="font-normal text-[13.96px] text-[#BDBDBD]">
                  {row.name2}
                </p>
              </div>
            </div>
            {/* background-img */}
            <div className="w-1/2 relative">
              <div
                className="bg-background-image
           w-[613.43px] h-[586px] rounded-[11%] border border-[#3A3A3A]"
              >
                <Image
                  src={row.integration}
                  width={552}
                  height={532}
                  alt="bg-img"
                  className="pt-16 pl-16 object-cover w-full h-auto max-h-full"
                />
              </div>
            </div>
          </div>
        ))}

        {/* content section */}
        {content?.map((row, index) => (
          <div key={index} className="flex justify-center w-auto px-32 mb-20">
            <div className="w-1/2">
              <div className="flex gap-2 justify-start">
                <Image
                  src={row.img}
                  width={25}
                  height={25}
                  alt="cable-tag"
                  className="mb-5"
                />
                <p className="font-normal text-[13.96px] text-[#BDBDBD]">
                  {row.name}
                </p>
              </div>
              <Image
                src={row.img2}
                width={45}
                height={45}
                alt="content-tag"
                className="mb-8"
              />
              <h5 className="font-medium text-[29.91px leading-[28.88px] w-[60%] text-left mb-5">
                {row.title}
              </h5>
              <p className="font-normal text-base text-[#BDBDBD] mb-8 w-[498px] h-[105px] ">
                {row.description}
              </p>

              <div className="flex gap-2 justify-start">
                <Image
                  src={row.img3}
                  width={25}
                  height={25}
                  alt="query"
                  className="mb-8"
                />
                <p className="font-normal text-[13.96px] text-[#BDBDBD]">
                  {row.name2}
                </p>
              </div>
            </div>
            {/* background-img */}
            <div className="w-1/2 relative">
              <div
                className="bg-background-image
          w-[613.43px] h-[586px] rounded-[11%] border border-[#3A3A3A]"
              >
                <Image
                  src={row.integration}
                  width={600}
                  height={532}
                  alt="bg-img"
                  className="pt-20 pl-16 object-cover w-full h-auto"
                />
              </div>
            </div>
          </div>
        ))}

        {/* sorting section */}
        {sorting?.map((row, index) => (
          <div
            key={index}
            className="flex justify-center gap-10 w-auto px-32 mb-40"
          >
            <div className="w-1/2">
              <div className="flex gap-2 justify-start">
                <Image
                  src={row.img}
                  width={25}
                  height={25}
                  alt="cable-tag"
                  className="mb-5"
                />
                <p className="font-normal text-[13.96px] text-[#BDBDBD]">
                  {row.name}
                </p>
              </div>
              <div className="flex gap-2 justify-start">
                <Image
                  src={row.img2}
                  width={25}
                  height={25}
                  alt="content-tag"
                  className="mb-5"
                />
                <p className="font-normal text-[13.96px] text-[#BDBDBD]">
                  {row.name2}
                </p>
              </div>
              <Image
                src={row.img3}
                width={45}
                height={45}
                alt="query"
                className="mb-8"
              />

              <h5 className="font-medium text-[29.91px leading-[28.88px] w-[454px] h-[48px] text-left">
                {row.title}
              </h5>
              <p className="font-normal text-base text-[#BDBDBD] w-[498px] h-[126px] ">
                {row.description}
              </p>
            </div>
            {/* background-img */}
            <div className="w-1/2 relative">
              <div
                className="bg-background-image
           w-[613.43px] h-auto rounded-[11%] border border-[#3A3A3A]"
              >
                <Image
                  src={row.integration}
                  width={600}
                  height={532}
                  alt="bg-img"
                  className="pl-16 pt-12 object-cover w-full h-auto rounded-[5%]"
                />
              </div>
            </div>
          </div>
        ))}

        {/* Advantages Section */}
        <div className="text center w-auto px-40 mb-16">
          <h5 className="font-medium text-[36px] leading-[58.15px] mt-10 mb-3 text-center">
            Advantages
          </h5>
          <p className="font-normal text-base text-[#BDBDBD] w-auto px-44 mb-5 text-center">
            Discover a world of possibilities with Glossy&apos; exceptional
            features tailored to enhance your coding journey.
          </p>
        </div>
        {/* grid section */}

        <div className="grid grid-cols-3 gap-24 pb-40 mx-auto border-b border-[#272727] w-[85%]">
          {advantages?.map((row, index) => (
            <div key={index} className="">
              <Image
                src={row.img}
                width={47.85}
                height={47.85}
                alt="icon"
                className="mb-5"
              />

              <h5 className="font-medium text-[20px] leading-[29.91px] mb-3 w-[382.79px]">
                {row.title}
              </h5>
              <p className="font-normal text-base w-[382.79px] h-[60px] text-[#BDBDBD] opacity-[45%]">
                {row.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* testimonials section */}
      <div className="text center w-auto px-40 mb-36 mt-20">
        <h5 className="font-medium text-[36px] leading-[58.15px] mt-10 mb-5 text-center">
          Voices of Innovation, Testimonials
        </h5>
        <p className="font-normal text-base text-[#BDBDBD] w-auto px-44 mb-5 text-center">
          Discover what the coding community is saying about Glossy in our
          Testimonials section. Immerse yourself in firsthand experiences as
          developers share.
        </p>
      </div>
      {/* carousel for testimonials */}
      <div className="w-auto px-32 mb-60">
        {/* // 33% of the carousel width. */}

        <Carousel>
          <CarouselContent className="flex gap-x-10">
            <CarouselItem className="basis-1/3">
              <Testimonials />
            </CarouselItem>
            <CarouselItem className="basis-1/3 ">
              {" "}
              <Testimonials2 />
            </CarouselItem>
            <CarouselItem className="basis-1/3 ">
              {" "}
              <Testimonials3 />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      {/* FAQ */}
      <>
        <div className="relative w-full h-auto overflow-hidden">
          <div
            style={style2}
            className="-bottom-[3%] left-[50%] absolute w-[60%] h-[300px] -translate-x-1/2"
          ></div>
          {/* rainbow- style */}
          <Image
            src="/ellipse3.png"
            width={562.86}
            height={100}
            alt="eclipse"
            className="absolute bottom-0 left-[30%]"
          />

          {/* eclipse style */}

          {/* <div
            style={style2}
            className="-bottom-[3%] left-[50%] absolute w-[60%] h-[500px] -translate-x-1/2"
          ></div> */}
          <div className="text center w-auto px-40 mb-12">
            <h5 className="font-medium text-[40px] text-center mb-5">
              Frequently asked questions
            </h5>
            <p className="font-normal text-base text-center text-[#8A8A8A]">
              Everything you need to know
            </p>
          </div>
          <div className="relative mx-auto max-w-screen-lg w-full md:w-[70%] lg:w-[70%] mb-48">
            {accordionData?.map((row, index) => (
              <div key={index} className="">
                <Accordion className="" type="single" collapsible>
                  <AccordionItem className="border-none" value={row.value}>
                    <AccordionTrigger1 className="font-normal text-base border-b border-[#2B2B2B] text-left">
                      {row.trigger}
                    </AccordionTrigger1>
                    <AccordionContent className="text-left text-[#8A8A8A] font-normal text-base mt-3">
                      {row.content}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            ))}
            <div className="mb-28 mt-12">
              <Image
                src="/questions.png"
                alt="Default Logo"
                width={784}
                height={157}
                className="w-[100%]"
              />
            </div>

            {/* <div className="h-[157px] relative overflow-hidden w-full  px-4 md:px-0 lg:px-8 pt-12 pb-4 rounded-[20px] mb-24 md:mb-28 lg:mb-28 mt-12">
              <div
                className="w-full bg-gradient-to-r from-[rgba(189,254,28,.9)] via-[rgba(37,184,222,.
              9)] to-[rgba(70,13,255,.9)] absolute top-0 left-0 h-full"
              ></div>
              <div
                // style="clip-path: polygon(0 56%, 0% 100%, 100% 100%);"
                className="bg-[url('/accordion-bg-img.png')] bg-center bg-no-repeat bg-contain w-[30%] h-auto absolute top-0 left-[10%] z-10"
              ></div>
              <div className="flex justify-between items-center w-full h-full z-20">
                <div className="flex flex-col gap-5">
                  <h5 className=" font-medium text-base md:text-[24px] lg:text-[24px] text-[#E7F1FF] text-left">
                    Still have questions?
                  </h5>

                  <p className="font-normal text-[16px] leading-[1.7rem] mt-2 mb-4 text-[#2A336D] w-[387px] h-[42px]">
                    Can&apos;t find the answer you&apos;re looking for? Please
                    chat to our friendly team.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-[rgba(189,254,28,.9)] to-[rgba(37,184,222,.9)] rounded-[66px] py-[2px] px-[2px] mb-10  shadow-drop">
                  <button className="bg-gradient-to-r from-[#3A3A3A] to-[#000000] flex gap-2 items-center justify-center text-sm font-medium ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-800 hover:scale-95 dark:text-secondary text-white transition ease-in-out delay-150 duration-300 h-10 w-[153px] rounded-[66px] hover:bg-[#0B0F16]">
                    Sign Up
                  </button>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </>

      {/* footer section */}
      <div className="bg-[#000000] relative w-full h-auto overflow-hidden ">
        <div
          style={style4}
          className="-bottom-[3%] left-[99%] absolute w-[65%] h-[200px] -translate-x-1/2"
        ></div>
        <div className="flex justify-between mx-auto  px-32 py-20  pb-16">
          <div className="w-1/2 flex">
            <div className="">
              <Image
                src="/intel-logo.png"
                alt="Default Logo"
                width={226}
                height={28}
                className=""
              />
            </div>
          </div>

          <div className="w-1/2">
            <h5 className="font-medium text-base mb-5">Company</h5>
            <p className="font-normal text-sm text-[#707070]">
              Cykelbarometer tiskap, regnbågsbarn. Diren kude. Trangen tön.
              Andrafiering plabel. Antist dibel. Detet plar. Sorat prio. Dedon
              bise, sor. Tötrenas pan om terasm. Emgram eurovis om backslick.
              Intrakosa plötslig vuxendöd. Päkron rel. Sospere atomslöjd. Hexare
              juholtare. Lanas att. Pevill. Pogt traras bengen. Plastis
              krosektigt. Pixlig soska. Dekaligt satt, respektive od. Osade
              tison ypäsat. Språkplikt ten och stenorure. Astrosodat agon
              yjäjänat. Blandkostare. Sosesade. Guldomat kontraling spår. Lask
              kun. Polyamori revis. Läjov lar uspesa. Mytopol.
            </p>
          </div>
        </div>
        <div className="flex justify-start pt-6 pb-5 mx-auto  border-t border-[#272727] w-[85%]">
          <p className="font-normal text-[10px]">
            Built with ⚡️ Intelai Company Inc
          </p>
        </div>
      </div>
    </main>
  );
}

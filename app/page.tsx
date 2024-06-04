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
  return (
    <main className="mt-24 md:mt-20 lg:mt-20">
      {/* hero-section */}
      <section>
        <div className="mx-auto w-full md:max-w-[1280px] lg:max-w-[1280px] px-5 md:px-4 lg:px-6 relative mb-10">
          <div className="text-center w-auto px-28">
            <h1 className="font-medium text-[64px] leading-[66.56px] text-center mb-5 text-[#7F56D9]">
              Communication Protocol of Blockchain AI Agents
            </h1>
            <p className="font-normal text-[24px] text-[#8A8A8A] text-center mb-10 px-40">
              Tailored Intelligence built from the ground up specifically for
              the Web3 Ecosystem.
            </p>
            <button
              className="bg-gradient-to-r from-[rgba(58,58,58,.9)] via-[rgba(58,58,58,.9)] to-[rgba(0,0,0,.5)]
    border-l border-l-[rgba(3,255,163,1)]
    border-t border-t-[rgba(3,255,163,1)]
    border-b-[3px] border-b-[rgba(3,255,163,1)]
    border-r-[3px] border-r-[rgba(127,86,217,1)] items-center justify-center text-sm font-medium ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-800 hover:scale-95 dark:text-secondary text-white bg-button transition ease-in-out delay-150 hover:border-2 hover:bg-[#0B0F16] duration-300 dark:hover:bg-[#0B0F16] h-[70px]  w-[420px]  rounded-[66px] mb-16"
              value="Log In"
            >
              {" "}
              Request Early Access
              {/* <MdArrowOutward /> */}
            </button>
            <Image
              src="/hero-img.png"
              width={1088}
              height={721}
              alt="hero-img"
              className="object-cover w-[100%] h-auto text-center"
            />
          </div>
        </div>
        {/* second section */}
        <div className="bg-[#181818] pt-32 w-auto px-36 text-center pb-28">
          <h2 className="font-medium text-[64px] mb-10 leading-[75.52px]">
            Meticulously Engineered To Deliver{" "}
            <span className="text-blue-500"> Human-Like Responses</span>:
          </h2>
          <p className="font-normal text-[24px] px-32 mb-7 text-[#8A8A8A]">
            Experience the sophistication of AI Agents that talks like a human
            but works like a supercomputer. Intel AI&apos;s deep learning
            algorithms are crafted to replicate the warmth, empathy, and
            complexity of human interaction, ensuring that every message, reply,
            or announcement feels genuinely personal.
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
          <h5 className="font-normal text-[32px] leading-[51.84px] mb-6 text-[#03FFA3]">
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
          <span
            className="font-medium text-[13.96px] bg-[#7F56D9] w-[96.87px] h-[25.98px] text-center rounded-[66px] py-[3.99px]
           px-[21.93px]"
          >
            Features
          </span>
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

        <div className="grid grid-cols-3 gap-24 pb-40 px-28 w-auto border-b border-[#272727]">
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
        <div className="text center w-auto px-40 mb-12">
          <h5 className="font-medium text-[40px] text-center mb-5">
            Frequently asked questions
          </h5>
          <p className="font-normal text-base text-center text-[#8A8A8A]">
            Everything you need to know
          </p>
        </div>
        <div className="mx-auto max-w-screen-lg w-full md:w-[70%] lg:w-[70%] mb-48">
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
          <div className="w-full bg-[#25B8DE] px-4 md:px-0 lg:px-8 py-8 rounded-[20px] mb-24 md:mb-28 lg:mb-28 mt-12">
            <h5 className=" font-medium text-base md:text-[24px] lg:text-[24px] text-[#E7F1FF] text-left">
              Still have questions?
            </h5>
            <div className="flex justify-between">
              <p className="font-normal text-[16px] leading-[1.7rem] mt-4 mb-4 text-[#2A336D]">
                Can&apos;t find the answer you&apos;re looking for? Please chat
                to our friendly team.
              </p>
              <button
                className="
    bg-gradient-to-r from-[rgba(58,58,58,.9)] via-[rgba(58,58,58,.9)] to-[rgba(0,0,0,.5)]
    border-l border-l-[rgba(3,255,163,1)]
    border-t border-t-[rgba(3,255,163,1)]
    border-b-[3px] border-b-[rgba(3,255,163,1)]
    border-r-[3px] border-r-[rgba(127,86,217,1)]
    items-center justify-center text-sm font-medium
    ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2
    disabled:pointer-events-none disabled:opacity-50
    dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-800
    hover:scale-95 dark:text-secondary text-white bg-button
    transition ease-in-out delay-150 hover:border-2 hover:bg-[#0B0F16]
    duration-300 dark:hover:bg-[#0B0F16] 
    h-10 w-[153px] rounded-[66px]
  "
                value="Log In"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
        {/* footer section */}
        <div className="bg-[#000000] flex justify-between px-32 py-20 border-b border-[#272727] pb-16">
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
        <div className="flex justify-start bg-black pt-6 pb-10 px-32 w-auto">
          <p className="font-normal text-[10px]">
            Built with ⚡️ Intelai Company Inc
          </p>
        </div>
      </section>
    </main>
  );
}

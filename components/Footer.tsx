import React from "react";
import Image from "next/image";

const Footer = () => {
  const style4: React.CSSProperties = {
    background:
      "radial-gradient(circle, rgba(127, 86, 217, 0.3), rgba(16, 12, 14, 0.6))",
    backgroundBlendMode: "darken",
    filter: "blur(70px)",
  };
  return (
    <>
      <div className="bg-[#000000] relative w-full h-auto overflow-hidden ">
        <div
          style={style4}
          className="-bottom-[3%] left-[99%] absolute w-[65%] h-[200px] -translate-x-1/2"
        ></div>
        <div className="flex flex-col md:flex-row lg:flex-row justify-between mx-auto px-3 md:px-32 lg:px-32  py-5 md:py-20 lg:py-20  pb-28 md:pb-16 lg:pb-16">
          <div className="w-full md:w-1/2 lg:w-1/2 flex">
            <div className="block md:hidden lg:hidden">
              <Image
                src="/Logo.png"
                alt="Default Logo"
                width={85.67}
                height={24}
                className="mb-10"
              />
            </div>

            <div className="hidden md:block lg:block">
              <Image
                src="/intel-logo.png"
                alt="Default Logo"
                width={215}
                height={50}
                className="mb-10"
              />
            </div>
          </div>

          <div className="md:w-1/2 lg:w-1/2">
            <h5 className="font-medium hidden md:block lg:block text-sm md:text-base lg:text-base mb-0 w-[337px] h-[52px] md:w-full lg:w-full">
              Company
            </h5>
            <h5 className="block md:hidden lg:hidden font-medium text-sm md:text-base lg:text-base mb-5 w-[337px] h-[52px] md:w-[90%] lg:w-[90%] leading-[25.84px]">
              Intelai: Empowering Collaboration in the Blockchain Industry
            </h5>
            <p className="block md:hidden lg:hidden font-normal text-sm text-[#868686] w-[362px] h-auto md:h-auto lg:h-auto md-w-full lg:w-full leading-[22.68px]">
              Bringing together community managers and influencers to seamlessly
              collaborate on projects across Telegram and Twitter. Join us to
              elevate your blockchain initiatives.
            </p>

            {/* desktop info */}
            <p className="hidden md:block lg:block font-normal text-sm text-[#868686] w-full h-auto md:h-auto lg:h-auto md-w-full lg:w-full leading-[22.68px]">
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
        <div className="flex justify-start pt-4 md:pt-6 lg:pt-6 pb-5 mx-auto  border-t border-[#272727] w-[95%] md:w-[85%] lg:w-[85%]">
          <p className="font-normal text-[10px] px-2">
            Built with ⚡️ Intelai Company Inc
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;

import React, { useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Testimonials from "@/components/carousel/Testimonials";

import Testimonials2 from "@/components/carousel/Testimonials2";

import Testimonials3 from "@/components/carousel/Testimonials3";
const Carousel: React.FC = () => {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, skipSnaps: false });

  useEffect(() => {
    if (!embla) return;
    let autoplayId: number;

    const autoplay = () => {
      clearTimeout(autoplayId);
      autoplayId = window.setTimeout(() => {
        embla.scrollNext();
      }, 3000);
    };

    embla.on("select", autoplay);
    embla.on("pointerDown", () => clearTimeout(autoplayId));

    autoplay();

    return () => clearTimeout(autoplayId);
  }, [embla]);

  return (
    <>
      <div className="hidden md:block lg:block embla" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">
            <div className="flex justify-between gap-10">
              <Testimonials />
              <Testimonials2 />
              <Testimonials3 />
            </div>
          </div>
          <div className="embla__slide">
            <div className="flex justify-between gap-10">
              <Testimonials />
              <Testimonials2 />
              <Testimonials3 />
            </div>
          </div>
          <div className="embla__slide">
            <div className="flex justify-between gap-10">
              <Testimonials />
              <Testimonials2 />
              <Testimonials3 />
            </div>
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="block md:hidden lg:hidden embla" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">
            <div className="flex justify-between items-center">
              <Testimonials />
            </div>
          </div>
          <div className="embla__slide">
            <div className="flex justify-between">
              <Testimonials2 />
            </div>
          </div>
          <div className="embla__slide">
            <div className="flex justify-between">
              <Testimonials3 />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;

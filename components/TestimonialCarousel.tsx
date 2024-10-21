import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import React from "react";
import Testimonials from "@/components/carousel/Testimonials";
import Testimonials2 from "@/components/carousel/Testimonials2";
import Testimonials3 from "@/components/carousel/Testimonials3";

const TestimonialCarousel: React.FC = () => {
  return (
    <>
      {/* Desktop Carousel: Show 3 items */}
      <Carousel>
          <CarouselContent className="flex gap-x-10">
            <CarouselItem className=" basis-full md:basis-1/3 flex justify-center md:justify-start lg:justify-start items-center lg:basis-1/3">
              <Testimonials />
            </CarouselItem>
            <CarouselItem className="basis-full md:basis-1/3 lg:basis-1/3 flex justify-center md:justify-start lg:justify-start items-center ">
              {" "}
              <Testimonials2 />
            </CarouselItem>
            <CarouselItem className="basis-full md:basis-1/3 lg:basis-1/3 flex justify-center md:justify-start lg:justify-start items-center">
              {" "}
              <Testimonials3 />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="ml-10 md:ml-0 lg:ml-0" />
          <CarouselNext className="mr-10 md:mr-0 lg:mr-0" />
        </Carousel>
    </>
  );
};

export default TestimonialCarousel;

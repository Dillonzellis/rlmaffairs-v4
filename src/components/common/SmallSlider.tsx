"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/common/ui/carousel";
import Image from "next/image";

const imgs = [
  { src: "/cater-slide-1.jpg", alt: "" },
  { src: "/cater-slide-3.jpg", alt: "" },
  { src: "/home-catering-slider/slide-1.jpg", alt: "" },
  { src: "/home-catering-slider/slide-2.jpg", alt: "" },
  { src: "/home-catering-slider/slide-3.jpg", alt: "" },
  { src: "/home-catering-slider/slide-4.jpg", alt: "" },
  { src: "/home-catering-slider/slide-5.jpg", alt: "" },
  { src: "/home-catering-slider/slide-6.jpg", alt: "" },
];

export function SmallSlider() {
  return (
    <Carousel
      className="w-full"
      opts={{
        align: "start",
        loop: true,
        watchDrag: false,
      }}
      plugins={[
        Autoplay({
          delay: 1200,
        }),
      ]}
    >
      <CarouselContent className="-ml-1">
        {imgs.map((img, idx) => (
          <CarouselItem
            key={idx}
            className="pl-0 sm:w-full md:basis-1/2 lg:basis-1/3"
          >
            <div className="">
              <Image
                key={idx}
                src={img.src}
                alt={img.alt}
                width={365}
                height={335}
                className="min-h-[335px] w-full object-cover"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

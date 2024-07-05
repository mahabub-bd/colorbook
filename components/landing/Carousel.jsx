"use client";

import { imageUrls } from "@/constants/data";
import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Carousel() {
  return (
    <>
      <Swiper
        spaceBetween={20}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        effect={"fade"}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {imageUrls.map((imageUrl, index) => (
          <SwiperSlide key={index} className="relative bg-black">
            <Image
              className="md:h-[600px]  h-[350px] w-full "
              src={imageUrl}
              alt="car"
              width={1920}
              height={800}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-black bg-opacity-10 sm:text:3xl md:text-5xl  text-white md:p-4 p-0 rounded">
                Complete solution in Printing & Packaging
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

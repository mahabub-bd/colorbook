"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import { imageUrls } from "@/constants/data";
import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";

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
          <SwiperSlide key={index}>
            <Image
              className="h-[800px] w-full"
              src={imageUrl}
              alt="car"
              width={1920}
              height={800}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

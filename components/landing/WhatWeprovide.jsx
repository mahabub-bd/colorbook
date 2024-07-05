"use client";

import { servicesData } from "@/constants/data";
import { WhatWeDo } from "@/public";
import Image from "next/image";
import Link from "next/link";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import SectionHeader from "../common/SectionHeader";

const WhatWeProvide = () => {
  return (
    <section
      className="bgc-lighter py-50 relative"
      style={{ backgroundImage: `url(${WhatWeDo.src})` }}
    >
      <div className="container mx-auto">
        <SectionHeader
          subtitle="What We Provide"
          title="Best Category For Printing"
        />
      </div>

      <div className="container ">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            380: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          loop={true}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {servicesData.map((service) => (
            <SwiperSlide
              className="flex  flex-col md:p-2 p-1 shadow-md bg-gradient-to-br from-custom-pink to-custom-orange rounded-lg"
              key={service.id}
            >
              <div className="mt-4 text-center w-full">
                <Image
                  src={service.imgUrl}
                  width={160}
                  height={160}
                  className="rounded-full mx-auto"
                  alt={service.title}
                />
              </div>

              <div className="md:my:2 my-1 text-center w-full">
                <Link
                  className="font-semibold text-black"
                  href={`products/${service.productSlug}`}
                >
                  {service.title}
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default WhatWeProvide;

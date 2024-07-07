"use client";

import { servicesData } from "@/constants/data";
import { WhatWeDo } from "@/public";
import Image from "next/image";
import Link from "next/link";
import { Autoplay, Pagination } from "swiper/modules";
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
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          {servicesData.map((service) => (
            <SwiperSlide
              className="flex flex-col shadow-2xl bg-white  rounded-lg"
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

              <div className=" text-center w-full custom-background mt-10 text-gray-100 space-y-5">
                <Link
                  className="  hover:text-white"
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

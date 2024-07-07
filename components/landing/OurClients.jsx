"use client";
import { clientsData } from "@/constants/data";
import { WhatWeDo } from "@/public";
import Image from "next/image";

import { Autoplay, Grid } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import SectionHeader from "../common/SectionHeader";

const OurClients = () => {
  const swiper = useSwiper();

  return (
    <section
      className="bgc-lighter py-50 relative mx-auto"
      style={{ backgroundImage: `url(${WhatWeDo.src})` }}
    >
      <div className="container mx-auto">
        <SectionHeader
          subtitle="Our Clients"
          title="Your One Stop Design & Printing Solutions"
        />
      </div>
      <div>
        <Swiper
          slidesPerView={8}
          spaceBetween={20}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            380: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 20,
            },
          }}
          loop={1000}
          modules={[Autoplay, Grid]}
          className="mySwiper"
        >
          {clientsData.map((client) => (
            <SwiperSlide
              className="flex items-center justify-center"
              key={client.id}
            >
              <div className="mt-4 w-40 h-40 flex items-center justify-center">
                <Image
                  src={client?.imgUrl}
                  width={140}
                  height={140}
                  alt={client?.clientName}
                  className="object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default OurClients;

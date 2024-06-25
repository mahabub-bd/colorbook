"use client";
import { clientsData } from "@/constants/data";
import { WhatWeDo } from "@/public";
import Image from "next/image";

import { Autoplay, Grid } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

const OurClients = () => {
  const swiper = useSwiper();

  return (
    <section
      className=" bgc-lighter py-50 relative"
      style={{ backgroundImage: `url(${WhatWeDo.src})` }}
    >
      <div className="container mx-auto">
        <div className="section-title text-center mb-20 ">
          <span className="sub-title mb-10">Our Clients</span>
          <h2 className="py-10">Your One Stop Design & Printing Soulations</h2>
        </div>
      </div>
      <div className="">
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
            <SwiperSlide key={client.id}>
              <div className="w-64 h-64 mt-5 flex justify-center items-center">
                <Image
                  src={client?.imgUrl}
                  width={150}
                  height={80}
                  alt={client?.clientName}
                  className=" object-cover"
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

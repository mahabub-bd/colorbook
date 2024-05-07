"use client";
import { servicesData } from "@/constants/data";
import { WhatWeDo } from "@/public";
import Link from "next/link";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

const WhatWeProvide = () => {
  const swiper = useSwiper();

  return (
    <section
      className=" bgc-lighter py-50 relative"
      style={{ backgroundImage: `url(${WhatWeDo.src})` }}
    >
      <div className="container mx-auto">
        <div className="section-title text-center mb-20 ">
          <span className="sub-title mb-10">What We Provide</span>
          <h2 className="py-10">Best Category For Printing</h2>
        </div>
      </div>
      <div className="container">
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
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          loop={1000}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {servicesData.map((service, index) => (
            <SwiperSlide
              className="what-we-provide-item  px-12 py-6 mb-2"
              key={index}
            >
              <i className={service.icon}></i>
              <h6>
                <Link className="font-semibold" href={service.link}>
                  {service.title}
                </Link>
              </h6>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default WhatWeProvide;

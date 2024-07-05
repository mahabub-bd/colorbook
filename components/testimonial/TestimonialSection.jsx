"use client";
import { testimonialsData } from "@/constants/data";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import SectionHeader from "../common/SectionHeader";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto">
        <SectionHeader
          subtitle="Testimonials"
          title="The love of customers towards Colorbook"
        />
      </div>
      <div className="container my-20">
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          }}
          loop={true}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {testimonialsData.map((testimonial) => (
            <SwiperSlide className="flex flex-col" key={testimonial?.id}>
              <TestimonialCard testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;

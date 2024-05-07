import AboutSection from "@/components/AboutArea";
import Carousel from "@/components/Carousel";
import HeroArea from "@/components/Hero";
import ServicesArea from "@/components/ServicesArea";
import WhatWeProvide from "@/components/WhatWeprovide";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function HomePage() {
  return (
    <main>
      <Carousel />
      <HeroArea />
      <WhatWeProvide />
      <AboutSection />
      <WhyChooseUs />
      <ServicesArea />
    </main>
  );
}

import AboutSection from "@/components/landing/AboutArea";
import Carousel from "@/components/landing/Carousel";
import OurClients from "@/components/landing/OurClients";
import ServicesArea from "@/components/landing/ServicesArea";
import WhatWeProvide from "@/components/landing/WhatWeprovide";
import WhyChooseUs from "@/components/landing/WhyChooseUs";

export default function HomePage() {
  return (
    <main>
      <Carousel />

      <WhatWeProvide />
      <AboutSection />
      <WhyChooseUs />
      <ServicesArea />
      <OurClients />
    </main>
  );
}

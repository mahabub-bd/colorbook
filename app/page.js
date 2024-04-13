import AboutSection from "@/components/AboutArea";
import HeroArea from "@/components/Hero";
import ServicesArea from "@/components/ServicesArea";
import WhatWeProvide from "@/components/WhatWeprovide";

export default function Home() {
  return (
    <main>
      <HeroArea />
      <WhatWeProvide />
      <AboutSection />
      <ServicesArea />
    </main>
  );
}

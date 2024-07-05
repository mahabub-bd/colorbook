import { whyChooseUs } from "@/constants/data";
import { WhatWeDo } from "@/public";
import SectionHeader from "../common/SectionHeader";
import WhyChooseCard from "./WhyChooseCard";

const WhyChooseUs = () => {
  return (
    <section
      className=" bgc-lighter py-50 relative"
      style={{ backgroundImage: `url(${WhatWeDo.src})` }}
    >
      <div className="container mx-auto">
        <SectionHeader
          subtitle="Why Choose Us"
          title="Best Category For Printing"
        />
      </div>
      <div className="container">
        <div className="grid grid-cols-12">
          {whyChooseUs.map((item) => (
            <WhyChooseCard
              key={item?.id}
              title={item?.title}
              description={item?.description}
              imageUrl={item?.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

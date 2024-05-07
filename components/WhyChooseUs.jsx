import { whyChooseUs } from "@/constants/data";
import { WhatWeDo } from "@/public";
import WhyChooseCard from "./WhyChooseCard";

const WhyChooseUs = () => {
  return (
    <section
      className=" bgc-lighter py-50 relative"
      style={{ backgroundImage: `url(${WhatWeDo.src})` }}
    >
      <div className="container mx-auto">
        <div className="section-title text-center mb-20 ">
          <span className="sub-title mb-10">Why Choose Us</span>
          <h2 className="py-10">Best Category For Printing</h2>
        </div>
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

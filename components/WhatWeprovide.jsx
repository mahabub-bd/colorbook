import { WhatWeDo } from "@/public";

const WhatWeProvide = () => {
  return (
    <section
      className=" bgc-lighter py-50"
      style={{ backgroundImage: `url(${WhatWeDo.src})` }}
    >
      <div className="container mx-auto">
        <div className="section-title text-center mb-20 animate__animated animate__fadeInUp animate__delay-0.2s">
          <span className="sub-title mb-10">What We Provide</span>
          <h2 className="py-10">Best Category For Printing</h2>
        </div>
        <div className="what-we-provide-active flex justify-around flex-wrap">
          <div className="what-we-provide-item animate__animated animate__fadeInUp animate__delay-0.2s">
            <i className="flaticon-t-shirt"></i>
            <h6>
              <a href="service-details.html">T-Shirt Print</a>
            </h6>
          </div>
          <div className="what-we-provide-item animate__animated animate__fadeInUp animate__delay-0.3s">
            <i className="flaticon-logo"></i>
            <h6>
              <a href="service-details.html">Logo Design</a>
            </h6>
          </div>
          <div className="what-we-provide-item animate__animated animate__fadeInUp animate__delay-0.4s">
            <i className="flaticon-banner"></i>
            <h6>
              <a href="service-details.html">Banner Print</a>
            </h6>
          </div>
          <div className="what-we-provide-item animate__animated animate__fadeInUp animate__delay-0.5s">
            <i className="flaticon-reading-book"></i>
            <h6>
              <a href="service-details.html">Books Print</a>
            </h6>
          </div>
          <div className="what-we-provide-item animate__animated animate__fadeInUp animate__delay-0.6s">
            <i className="flaticon-debit-card"></i>
            <h6>
              <a href="service-details.html">Card Print</a>
            </h6>
          </div>
          <div className="what-we-provide-item animate__animated animate__fadeInUp animate__delay-0.7s">
            <i className="flaticon-award"></i>
            <h6>
              <a href="service-details.html">Trophy Print</a>
            </h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeProvide;

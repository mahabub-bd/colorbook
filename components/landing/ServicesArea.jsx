import { OffsetMachine } from "@/public";

const ServicesArea = () => {
  return (
    <div className="services-area rel z-1">
      <div className="services-inner text-white bg-black">
        <div className="flex items-center flex-col md:flex-row ">
          <div className=" md:w-1/3 w-full">
            {/* Content for the first column */}
            <div className="service-content rel p-100 py-130 rpb-100 wow fadeInUp delay-0-2s">
              <div className="section-title mb-30">
                <span className="sub-title mb-15">Latest Services</span>
                <h2 className="text-[2.5rem] leading-[1.2]">
                  Awesome Service For Printing and Design
                </h2>
              </div>
              <h6>Awards Winning Printing Company</h6>
              <p>
                Take a trivial example which of ever untakes laborious physical
                exercise except
              </p>
              <a href="services.html" className="theme-btn hover-two mt-20">
                Learn More <i className="far fa-long-arrow-right"></i>
              </a>
              <div className="circle-shapes no-animation">
                <div className="shape-inner">
                  <span className="dot-one"></span>
                  <span className="dot-two"></span>
                  <span className="dot-three"></span>
                  <span className="dot-four"></span>
                  <span className="dot-five"></span>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-2/3 w-full">
            <div className="flex flex-wrap">
              <div className="md:w-1/2 w-full">
                <div className="service-item">
                  <div className="icon">
                    <i className="flaticon-print"></i>
                  </div>
                  <h3>
                    <a href="service-details.html">Printing Services</a>
                  </h3>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error voluptatem
                    accusantium doloremque
                  </p>
                  <a href="service-details.html" className="read-more">
                    Read More <i className="far fa-long-arrow-right"></i>
                  </a>
                  <div
                    className="bg-image"
                    style={{ backgroundImage: `url(${OffsetMachine.src})` }}
                  ></div>
                </div>
              </div>

              <div className="md:w-1/2 w-full">
                {/* Second item in the second column */}
                <div className="service-item">
                  <div className="icon">
                    <i className="flaticon-3d-printer"></i>
                  </div>
                  <h3>
                    <a href="service-details.html">3D Printing Service</a>
                  </h3>
                  <p>
                    On the other hand, we denounce with rigteous indignation and
                    dislike demoralized
                  </p>
                  <a href="service-details.html" className="read-more">
                    Read More <i className="far fa-long-arrow-right"></i>
                  </a>
                  <div
                    className="bg-image"
                    style={{ backgroundImage: `url(${OffsetMachine.src})` }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap">
              <div className="md:w-1/2 w-full">
                <div className="service-item">
                  <div className="icon">
                    <i className="flaticon-focus"></i>
                  </div>
                  <h3>
                    <a href="service-details.html">Design & Branding</a>
                  </h3>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error voluptatem
                    accusantium doloremque
                  </p>
                  <a href="service-details.html" className="read-more">
                    Read More <i className="far fa-long-arrow-right"></i>
                  </a>
                  <div
                    className="bg-image"
                    style={{ backgroundImage: `url(${OffsetMachine.src})` }}
                  ></div>
                </div>
              </div>

              <div className="md:w-1/2 w-full">
                <div className="service-item">
                  <div className="icon">
                    <i className="flaticon-print-1"></i>
                  </div>
                  <h3>
                    <a href="service-details.html">Offest Printing</a>
                  </h3>
                  <p>
                    On the other hand, we denounce with rigteous indignation and
                    dislike demoralized
                  </p>
                  <a href="service-details.html" className="read-more">
                    Read More <i className="far fa-long-arrow-right"></i>
                  </a>
                  <div
                    className="bg-image"
                    style={{ backgroundImage: `url(${OffsetMachine.src})` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesArea;

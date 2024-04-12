import { AboutOne, AboutTwo, AboutVideo } from "@/public";
import Image from "next/image";

const AboutSection = () => {
  return (
    <div className="about-area py-130 relative z-1">
      <div className="mx-auto container">
        <div className="flex items-center justify-between gap-5">
          <div className="about-images mb-65">
            <div className="flex items-center justify-center flex-col ">
              <div className="flex justify-around gap-2">
                <div className="image wow fadeInLeft delay-0-4s">
                  <Image src={AboutOne} alt="About" width={400} height={400} />
                </div>
                <div className="image wow fadeInLeft delay-0-4s">
                  <Image src={AboutTwo} alt="About" width={400} height={400} />
                </div>
              </div>

              <div className="about-video wow fadeInRight delay-0-6s">
                <Image src={AboutVideo} alt="About" width={400} height={400} />
                <a
                  href="https://www.youtube.com/watch?v=9Y7ma241N8k"
                  className="mfp-iframe video-play"
                >
                  <i className="fas fa-play"></i>
                </a>
              </div>
            </div>
            <div className="circle-shapes">
              <div className="shape-inner">
                <span className="dot-one"></span>
                <span className="dot-two"></span>
                <span className="dot-three"></span>
                <span className="dot-four"></span>
                <span className="dot-five"></span>
              </div>
            </div>
          </div>

          <div className="about-content wow fadeInUp delay-0-2s">
            <div className="section-title mb-20">
              <span className="sub-title mb-15">About Company</span>
              <h2 className=" leading-16">
                We’re Dhaka Based Printing Services Company
              </h2>
            </div>
            <div className="experience-year mb-20">
              <h6>We Have More than</h6>
              <span className="number">10</span>
              <h6>Years of Experience in Printing Services</h6>
            </div>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium totam aperiam eaquey ipsa quae
            </p>
            <div className="about-btns pt-5">
              <a href="about.html" className="theme-btn mt-20">
                Learn More <i className="far fa-long-arrow-right"></i>
              </a>
              <a
                href="https://www.youtube.com/watch?v=9Y7ma241N8k"
                className="mfp-iframe about-video-play mt-20"
              >
                <i className="fas fa-play"></i> <span>How It Works</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

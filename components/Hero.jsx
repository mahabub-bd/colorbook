import { HeroOne } from "@/public";
import Image from "next/image";

const HeroArea = () => {
  return (
    <div className="hero-area pt-145 pb-75 relative z-1">
      <div className="container mx-auto">
        <div className="flex gap-2 justify-between items-center  md:flex-row flex-col">
          <div className="hero-content rmb-55 animate__animated animate__fadeInUp animate__delay-0.2s">
            <span className="sub-title mb-15">Printing Company</span>
            <h1>We’re Pixel Perfect Printing Company</h1>
            <p>
              On the other hand, we denounce with righteous indignation and
              dislike men who are so beguiled demoralized
            </p>
            <ul className="list-style-one pt-10 animate__animated animate__fadeInUp animate__delay-0.3s">
              <li>Quality Services Provider</li>
              <li>Printing, Designing and Transportation</li>
            </ul>
            <div className="hero-btns pt-25 animate__animated animate__fadeInUp animate__delay-0.4s">
              <a href="team.html" className="theme-btn">
                Talk With Us <i className="far fa-long-arrow-right"></i>
              </a>
              <a href="contact.html" className="theme-btn style-three">
                Latest Projects <i className="far fa-long-arrow-right"></i>
              </a>
            </div>
          </div>

          <div className="hero-images animate__animated animate__fadeInLeft animate__delay-0.2s">
            <Image
              className="rounded-md"
              src={HeroOne}
              alt="Hero Image"
              priority
            />
            <Image
              className="image-one animate__animated animate__fadeInRight animate__delay-0.6s rounded-md "
              priority
              src={HeroOne}
              alt="Hero Image"
            />
            <Image
              className="image-two animate__animated animate__fadeInDown animate__delay-0.8s rounded-md"
              priority
              src={HeroOne}
              alt="Hero Image"
            />
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
        </div>
      </div>
    </div>
  );
};

export default HeroArea;

import { OffsetMachine, OffsetMachineTwo } from "@/public";
import Image from "next/image";

const HeroArea = () => {
  return (
    <div className="hero-area pt-145 pb-75 relative z-1">
      <div className=" container mx-auto flex  justify-between items-center  md:flex-row flex-col">
        <div className="hero-content rmb-55  md:w-1/2 w-full ">
          <span className="sub-title mb-15">Wellcome to Color Book</span>
          <h1>Complete solution in Printing & Packaging</h1>
          <p>
            On the other hand, we denounce with righteous indignation and
            dislike men who are so beguiled demoralized
          </p>
          <ul className="list-style-one pt-10 ">
            <li>Quality Services Provider</li>
            <li>Printing, Designing and Transportation</li>
          </ul>
          <div className="hero-btns pt-25 ">
            <a href="team.html" className="theme-btn">
              Talk With Us <i className="far fa-long-arrow-right"></i>
            </a>
            <a href="contact.html" className="theme-btn style-three">
              Latest Projects <i className="far fa-long-arrow-right"></i>
            </a>
          </div>
        </div>

        <div className="hero-images md:w-1/2 w-full  ">
          <Image
            className="image-one rounded-md w-40 object-cover"
            src={OffsetMachine}
            alt="Hero Image"
            priority
          />
          <Image
            className="image-two rounded-md w-40 object-cover "
            priority
            src={OffsetMachineTwo}
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
  );
};

export default HeroArea;

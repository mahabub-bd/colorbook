import { socialMedia } from "@/constants";
import { HeaderTop, TelephoneIcon } from "@/public";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../Navbar";

export default function Header() {
  return (
    <>
      <div
        className="navbar-top style-one text-white bgs-cover md:block hidden "
        style={{ backgroundImage: `url(${HeaderTop.src})` }}
      >
        <div className="mx-auto sm:px-4 ">
          <div className="flex flex-wrap ">
            <div className="lg:w-1/2 pr-4 pl-4">
              <div className="topbar-left text-lg-start ">
                <span>Your Trust Printing Partner</span>
              </div>
            </div>
            <div className="lg:w-1/2 pr-4 pl-4">
              <ul className="topbar-right justify-center lg:justify-end">
                <li className=" after: list-none">
                  <Image className="w-6" src={TelephoneIcon} alt="facebook" />

                  <b className="mx-2">
                    Call: <a href="calto:+8801780100700"> +8801780100700</a>
                  </b>
                </li>
                <li className="social-style-one">
                  {socialMedia.map((item) => (
                    <Link href={item.link} key={item.id}>
                      <Image src={item.icon} alt="item" className="w-7" />
                    </Link>
                  ))}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Navbar />
    </>
  );
}

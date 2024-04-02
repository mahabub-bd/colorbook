import { HeaderTop, TelephoneIcon } from "@/constants/images";
import Image from "next/image";
import { NavbarComponent } from "../Navbar";

export default function Header() {
  return (
    <>
      <div
        className="navbar-top style-one text-white bgs-cover"
        style={{ backgroundImage: `url(${HeaderTop.src})` }}
      >
        <div className="mx-auto sm:px-4 container-1570">
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
                    Call: <a href="calto:+00023456789"> +8801711852202</a>
                  </b>
                </li>
                <li className="social-style-one">
                  <a href="#">
                    <i className="fab fa-facebook-f" aria-hidden="true"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter" aria-hidden="true"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-dribbble" aria-hidden="true"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <NavbarComponent />
    </>
  );
}

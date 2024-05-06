import { Logo } from "@/public";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer-area py-40">
      <div className=" container mx-auto sm:px-4">
        <div className="flex flex-wrap  justify-between">
          <div className="xl:w-1/3 pr-4 pl-4 lg:w-2/5  md:w-1/2 ">
            <div className="widget widget_about ">
              <div className="footer-logo mb-25">
                <a href="index.html">
                  <Image src={Logo} alt="Logo" className="w-52" />
                </a>
              </div>
              <p>
                Your Trust Printing Partner & Complete solution in Printing &
                Packaging
              </p>
              <div className="social-style-two mt-15">
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-dribbble"></i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="xl:w-1/3  md:w-1/2 pr-4 pl-4">
            <div className="widget widget_nav_menu wow fadeInUp delay-0-4s">
              <h4 className="widget-title">Useful Links</h4>
              <ul>
                <li>
                  <a href="service-details.html">Digital Printing</a>
                </li>
                <li>
                  <a href="blog.html">Latest News</a>
                </li>
                <li>
                  <a href="service-details.html">3D Printing</a>
                </li>
                <li>
                  <a href="contact.html">Need a Career?</a>
                </li>
                <li>
                  <a href="service-details.html">Printing & Design</a>
                </li>
                <li>
                  <a href="contact.html">My Account</a>
                </li>
                <li>
                  <a href="service-details.html">Ofset Printing</a>
                </li>
                <li>
                  <a href="shop.html">Shopping Cart</a>
                </li>
                <li>
                  <a href="service-details.html">Logo Design</a>
                </li>
                <li>
                  <a href="contact.html">Payment Methode</a>
                </li>
                <li>
                  <a href="service-details.html">T-Shirt Pringting</a>
                </li>
                <li>
                  <a href="faqs.html">Faqs</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="xl:w-1/3  md:w-1/2 pr-4 pl-4">
            <div className="widget widget_contact_info wow fadeInUp delay-0-6s">
              <h4 className="widget-title">Contact With Us</h4>
              <p>Need Any Support Us! Or Work Together?</p>
              <ul>
                <li>
                  <i className="far fa-map-marker-alt"></i>
                  <a href="">
                    Office : 134, Arambag, (3rd Floor), Motijheel, Dhaka-1000
                  </a>
                </li>
                <li>
                  <i className="far fa-map-marker-alt"></i>
                  <a href="">
                    Factory : 68, Arambag (Ground Floor), Motijheel, Dhaka-1000
                  </a>
                </li>
                <li>
                  <i className="far fa-envelope"></i>
                  <a href="mailto:info@colorbook.com.bd">
                    info@colorbook.com.bd
                  </a>
                </li>
                <li>
                  <i className="far fa-phone"></i>
                  <a href="calto:+8801780100700">+8801780100700</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom mt-15 pt-25 pb-10">
          <div className="flex flex-wrap  items-center">
            <div className="lg:w-full pr-4 pl-4">
              <div className="copyright-text text-center text-lg-start">
                <Link className="text-center" href="/">
                  © Copyright 2024, All Right Reserved{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { servicesData } from "@/constants/data";
import { Logo } from "@/public";
import FooterBg from "https://res.cloudinary.com/mahabub-bd/image/upload/v1719148351/footer-3-bg_yqxrel.jpg";
import Image from "next/image";
import Link from "next/link";
import CustomLink from "./CustomLink";

export default function Footer() {
  return (
    <footer
      className="footer-area py-40 bg-gradient-to-r from-blue-50 to-transparent"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(255, 255, 255, .95), rgba(255, 255, 255, .85)), url(${FooterBg.src})`,
      }}
    >
      <div className="container mx-auto sm:px-4">
        <div className="flex flex-wrap justify-between ">
          <div className="xl:w-1/3 pr-4 pl-4 lg:w-2/5 md:w-1/2">
            <div className="flex flex-col md:justify-start justify-center md:items-start items-center md:my-0 my-10 ">
              <div className="footer-logo mb-25 text-center md:text-left">
                <Link href="/">
                  <Image
                    src={Logo}
                    alt="Logo"
                    className="w-52 mx-auto md:mx-0"
                  />
                </Link>
              </div>
              <p className="text-center md:text-left">
                Your Trust Printing Partner & Complete solution in Printing &
                Packaging
              </p>
              <div className="social-style-two mt-15 flex justify-center md:justify-start space-x-4">
                <Link href="#">
                  <i className="fab fa-facebook-f"></i>
                </Link>
                <Link href="#">
                  <i className="fab fa-twitter"></i>
                </Link>
                <Link href="#">
                  <i className="fab fa-linkedin"></i>
                </Link>
                <Link href="#">
                  <i className="fab fa-instagram"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-full pr-4 pl-4 mt-10">
            <div className="widget widget_nav_menu ">
              <h4 className="widget-title">Useful Links</h4>
              <div className="flex md:flex-col  flex-row  md:gap-0 gap-3 flex-wrap md:justify-center">
                {servicesData.map((service) => (
                  <CustomLink
                    key={service.id}
                    path={`/products/${service.productSlug}`}
                  >
                    {service?.title}
                  </CustomLink>
                ))}
              </div>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 pr-4 pl-4">
            <div className="widget widget_contact_info wow fadeInUp delay-0-6s">
              <h4 className="widget-title">Contact With Us</h4>
              <p>Need Any Support Us! Or Work Together?</p>
              <ul>
                <li>
                  <i className="far fa-map-marker-alt"></i>
                  <Link href="">
                    Office : 134, Arambag, (3rd Floor), Motijheel, Dhaka-1000
                  </Link>
                </li>
                <li>
                  <i className="far fa-map-marker-alt"></i>
                  <Link href="">
                    Factory : 68, Arambag (Ground Floor), Motijheel, Dhaka-1000
                  </Link>
                </li>
                <li>
                  <i className="far fa-envelope"></i>
                  <Link href="mailto:info@colorbook.com.bd">
                    info@colorbook.com.bd
                  </Link>
                </li>
                <li>
                  <i className="far fa-phone"></i>
                  <Link href="tel:+8801780100700">+8801780100700</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t-2 md:mt-15 mt-5 md:pt-25 pt-10">
          <div className="flex flex-wrap items-center">
            <div className="lg:w-full pr-4 pl-4">
              <div className="copyright-text text-center flex items-center md:justify-between md:flex-row flex-col justify-center">
                <Link className="text-center text-md text-red-500" href="/">
                  © Copyright 2024, All Right Reserved
                </Link>
                <Link
                  className="text-center text-md text-blue-500"
                  href="https://mahabub.me/"
                >
                  This site is developed by Mahabub Hossain
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

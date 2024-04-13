"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { navLinks } from "@/constants";
import useScroll from "@/hooks/useScroll";
import { Logo } from "@/public";
import { TogglerMenu } from ".";

const Navbar = () => {
  const [active, setActive] = useState("Home");

  const { scrolled } = useScroll();

  return (
    <div className="scroll-mt-[200px] ">
      <div
        className={` container  relative mx-auto  bg-white ${
          scrolled && "sticky drop-shadow-lg"
        }`}
        id="home"
      >
        <nav
          className={`mx-auto flex px-3 py-2 sm:px-0 justify-between items-center`}
        >
          <Link href="/">
            <Image
              src={Logo}
              alt="headerlogo"
              className="w-[50px]  object-contain"
              priority
            />
          </Link>
          <ul
            className={`list-none sm:flex hidden items-center justify-center flex-1`}
          >
            {navLinks?.map((nav) => (
              <li
                key={nav.id}
                className={` font-bold nav-font cursor-pointer text-[16px]  ${
                  active === nav.title ? "text-blue-700 " : "text-black"
                } [&:not(:last-child)]:mr-10`}
                onClick={() => setActive(nav.title)}
              >
                <Link href={`/${nav.id}`}>{nav.title}</Link>
              </li>
            ))}
          </ul>

          <TogglerMenu />
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

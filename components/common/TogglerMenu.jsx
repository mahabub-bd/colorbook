"use client";

import { Close, Menu } from "@/public";
import Image from "next/image";
import { useState } from "react";

import { navLinks } from "@/constants";
import styles from "@/styles/styles";
import CustomLink from "./CustomLink";

const TogglerMenu = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="sm:hidden flex flex-1 justify-end items-center relative">
      <Image
        src={toggle ? Close : Menu}
        alt="menu"
        className="w-[28px] h-[28px] cursor-pointer object-contain"
        onClick={() => setToggle((prev) => !prev)}
      />

      <div
        className={`${
          toggle ? "flex" : "hidden"
        } p-6 bg-black-gradient absolute top-20 right-0 mx-6 my-2 min-w-[200px] rounded-xl sidebar z-50 `}
      >
        <ul className=" list-none flex  flex-col  flex-1">
          {navLinks.map((item) => (
            <li key={item.id} className={`${styles.mobileMenu} `}>
              <CustomLink scroll={false} path={`${item.id}`}>
                {item.title}
              </CustomLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TogglerMenu;

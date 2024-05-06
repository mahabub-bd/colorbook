import Image from "next/image";
import Link from "next/link";

import { navLinks } from "@/constants";
import { Logo } from "@/public";
import { TogglerMenu } from ".";
import CustomLink from "./CustomLink";

const Navbar = () => {
  return (
    <div className=" sticky top-0 left-0 mx-auto  bg-white z-50 drop-shadow-lg">
      <nav
        className={`container mx-auto flex px-3 py-2 sm:px-0 justify-between items-center`}
      >
        <Link href="/">
          <Image
            src={Logo}
            alt="headerlogo"
            className="w-[220px]  object-contain p-1"
            priority
          />
        </Link>
        <ul
          className={`list-none sm:flex hidden items-center justify-center flex-1`}
        >
          {navLinks?.map((nav) => (
            <li
              key={nav.id}
              className={` font-bold nav-font cursor-pointer text-[16px] [&:not(:last-child)]:mr-10`}
            >
              <CustomLink path={`${nav.id}`}>{nav.title}</CustomLink>
            </li>
          ))}
        </ul>

        <TogglerMenu />
      </nav>
    </div>
  );
};

export default Navbar;

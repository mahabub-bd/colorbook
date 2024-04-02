"use client";
import { Button, Navbar } from "keep-react";
import Image from "next/image";
import { MagnifyingGlass } from "phosphor-react";

import Logo from "../public/logos/logo.png";

export const NavbarComponent = () => {
  return (
    <Navbar>
      <Navbar.Container className="flex items-center justify-between">
        <Navbar.Container className="flex items-center">
          <Navbar.Brand>
            <Image src={Logo} alt="keep" width="100" height="40" />
          </Navbar.Brand>
          <Navbar.Divider></Navbar.Divider>
          <Navbar.Container
            tag="ul"
            className="lg:flex hidden items-center justify-between gap-8"
          >
            <Navbar.Link linkName="Home" />

            <Navbar.Link linkName="About" />
            <Navbar.Link linkName="Services" />
            <Navbar.Link linkName="News" />
            <Navbar.Link linkName="Resources" />
            <Navbar.Link linkName="Contacts" />
          </Navbar.Container>
          <Navbar.Collapse collapseType="sidebar">
            <Navbar.Container tag="ul" className="flex flex-col gap-5">
              <Navbar.Link linkName="Home" />

              <Navbar.Link linkName="Blogs" />
              <Navbar.Link linkName="News" />
              <Navbar.Link linkName="Resources" />
            </Navbar.Container>
          </Navbar.Collapse>
        </Navbar.Container>

        <Navbar.Container className="flex gap-2">
          <Button size="sm" variant="link">
            <span>
              <MagnifyingGlass size={20} color="#444" />
            </span>
            <span className="ml-2 text-metal-600">Search</span>
          </Button>
          <Button size="sm">Contact</Button>
          <Navbar.Toggle />
        </Navbar.Container>
      </Navbar.Container>
    </Navbar>
  );
};

"use client";
import { useState } from "react";
import { Close, Leaf, Menu } from "./svg";
import { navbarLinks } from "@/utils/data";
import { ThemeButton } from "./ThemeButton";
import Container from "./Container";
import { Social } from "./Social";
import Image from "next/image";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Container>
      <nav className="py-3 mt-5 my-5">
        <div className="flex justify-between">
          <div className="sm:flex md:hidden mt-[-20px]">
            {/* <ThemeButton /> */}
          </div>
          <header className="hidden sm:flex gap-6">
            {navbarLinks.map((link) => (
              <a
                className="group flex justify-center items-center font-bold"
                href={link.path[0]}
                key={link.id}
              >
                {link.label}
                <Leaf
                  className="mx-2 group-hover:text-green-500"
                  alt="folha da logo Holly Agência utilizada como decoração ao lado aos nomes do menu"
                />
              </a>
            ))}
            <a href="/#quote" className="font-bold">
              <div className="w-full py-2 px-3 text-center font-semibold rounded-xl bg-green-950 text-white border-2 decoration-transparent hover:bg-white hover:border-2 hover:decoration-black hover:text-black duration-150 ease-linear">
                Solicitar Orçamento
              </div>
            </a>
          </header>
          <div className="hidden sm:flex gap-8">
            <div className="flex items-center">
              {" "}
              <Social />
            </div>
            {/* <ThemeButton />  */}
          </div>
          {/*  <div
            onClick={handleNav}
            className="absolute top-8 right-10 text-2xl  sm:hidden "
          >
            {menuOpen ? <></> : <Menu />}
          </div> */}
        </div>
        <hr className="mt-5 dark:opacity-50" />
        {/* <div
          className={
            menuOpen
              ? "fixed left-0 top-0 w-[70%] sm:hidden h-screen  p-10 ease-in duration-300 bg-black/90"
              : "fixed left-[-100%] top-0 p-10 !ease-in-out duration-1000"
          }
        >
          <div onClick={handleNav} className="pt-6 sm:hidden text-white">
            {menuOpen ? (
              <Close className="absolute top-8 right-4 sm:hidden text-2xl" />
            ) : (
              <></>
            )}
            <header className="flex flex-col my-3">
              {navbarLinks.map((link, index) => (
                <a
                  href={link.path[0]}
                  key={index}
                  className="py-2 border-b-2 text-center"
                >
                  {link.label}
                </a>
              ))}
            </header>
          </div>
        </div> */}
      </nav>
    </Container>
  );
};

"use client";
import { useState } from "react";
import { Close, Menu } from "./svg";
import { navbarLinks } from "@/utils/data";
import { ThemeButton } from "./ThemeButton";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="py-3 mt-5 my-5">
      <div className="flex justify-between">
        <header className="hidden sm:flex gap-6">
          {/* {navbarLinks.map((link) => (
            <a className="font-bold" href={link.path[0]} key={link.id}>
              {link.label}
            </a>
          ))} */}
          <a href="#quote" className="font-bold">
            <div className="w-full py-2 px-3 mt-[-8px] text-center font-semibold rounded-xl bg-mySageGreen/80 text-white hover:bg-mySageGreen">
              Solicitar Orçamento
            </div>
          </a>
        </header>
        <div className="hidden sm:flex gap-4">
          {/* <div> icones</div> */}
          <ThemeButton />
        </div>
        {/*  <div
          onClick={handleNav}
          className="absolute top-8 right-10 text-2xl  sm:hidden "
        >
          {menuOpen ? <></> : <Menu />}
        </div> */}
      </div>
      <hr className="mt-5 dark:opacity-50" />
      <div
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
          {/* <header className="flex flex-col my-3">
            {navbarLinks.map((link, index) => (
              <a
                href={link.path[0]}
                key={index}
                className="py-2 border-b-2 text-center"
              >
                {link.label}
              </a>
            ))}
          </header> */}
        </div>
      </div>
    </nav>
  );
};
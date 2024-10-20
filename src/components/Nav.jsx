import logo from "../assets/logo-alexa.png";
import { navLinks } from "../constants";
import { BrowserRouter, Route, useLocation } from "react-router-dom";
import { useState } from "react";
import MenuHam from "./MenuHam";

import { Link } from "react-router-dom";

const Nav = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const bgNav = () => [];

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
    } else {
      setOpenNavigation(true);
    }
  };

  const handleClick = () => {
    setOpenNavigation(false);
  };

  return (
    <header className="fixed top-0 z-10 w-full">
      <nav className="flex justify-between items-center bg-black px-0 py-2">
        <a href="">
          <img
            src={logo}
            alt=""
            className=" ml-9  width-[25px] h-[35px] m-3 lg:w-[40px] lg:h-[55px]   "
          />
        </a>

        <div
          className={`${
            openNavigation ? "flex" : "hidden"
          } w-full lg:w-[400px] fixed top-0 bottom-0 lg:static lg:flex lg:mx-auto`}
        >
          <ul
            className=" flex flex-col w-full lg:w-[500px] items-center top-16 lg:top-0 relative lg:flex-row lg:items-center  gap-16
            bg-gradient-to-tr from-[#212121] via-[#212121]]
 "
          >
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={handleClick}
                  className={`font-kumbh whitespace-nowrap block leading-normal text-base md:text-lg text-white transition-colors hover:text-menu  ${
                    item.onlyMobile ? "lg: hidden" : ""
                  }  mt-[30px] md:mt-14 lg:mt-0`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <button
          onClick={toggleNavigation}
          className="ml-auto hidden max-lg:block w-[30px] "
        >
          <MenuHam openNavigation={openNavigation} />
        </button>
      </nav>
    </header>
  );
};

export default Nav;

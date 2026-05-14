import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { HiCodeBracket } from "react-icons/hi2";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 transition-all duration-300 ${
        scrolled
          ? "bg-[#050816]/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">

        {/* Logo + Name */}
        <Link
          to="/"
          className="flex items-center gap-3"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >

          {/* Professional Developer Symbol */}
          <div className="relative flex items-center justify-center">

            {/* Soft Glow */}
            <div className="absolute inset-0 rounded-full bg-cyan-400/10 blur-md scale-125"></div>

            {/* Main Circle */}
            <div
              className="
                relative
                w-9 h-9
                sm:w-10 sm:h-10
                rounded-full
                border
                border-cyan-400/30
                bg-[#050816]
                flex
                items-center
                justify-center
                shadow-[0_0_15px_rgba(34,211,238,0.10)]
              "
            >

              {/* Icon */}
              <HiCodeBracket
                className="
                  text-cyan-400
                  text-[18px]
                  sm:text-[20px]
                "
              />
            </div>
          </div>

          {/* Name */}
          <div className="flex flex-col">

            <p className="text-white text-[18px] sm:text-[20px] font-extrabold tracking-wide leading-none">
              RAHUL KUMAR
            </p>

            <span className="hidden sm:block text-cyan-400 text-[11px] tracking-[3px] font-medium mt-1">
              SOFTWARE DEVELOPER
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="list-none hidden sm:flex flex-row gap-10">

          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title
                  ? "text-cyan-400"
                  : "text-slate-300"
              } hover:text-cyan-400 text-[17px] font-medium cursor-pointer transition-all duration-300`}
              onClick={() =>
                setActive(nav.title)
              }
            >
              <a href={`#${nav.id}`}>
                {nav.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <div className="sm:hidden flex flex-1 justify-end items-center">

          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[26px] h-[26px] object-contain cursor-pointer"
            onClick={() =>
              setToggle(!toggle)
            }
          />

          {/* Mobile Dropdown */}
          <div
            className={`${
              !toggle
                ? "hidden"
                : "flex"
            } absolute top-20 right-0 mx-4 my-2 min-w-[180px] z-10 rounded-2xl bg-[#0a0f1c]/95 backdrop-blur-xl border border-white/[0.05] shadow-2xl p-6`}
          >

            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-5">

              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`cursor-pointer text-[16px] font-medium transition-all duration-300 ${
                    active === nav.title
                      ? "text-cyan-400"
                      : "text-slate-300"
                  } hover:text-cyan-400`}
                  onClick={() => {
                    setToggle(false);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
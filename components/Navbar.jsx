"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../images/logo.svg";
import { Moon, Sun } from "lucide-react";
import arrowDown from "../images/icon-arrow-down.svg";
import { useFonts } from "@/hooks/useFonts";

const Navbar = () => {
  const [theme, setTheme] = useState("");
  const { fonts, handleFonts, handleMenuFonts, menuFonts } = useFonts();

  const handleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));

    localStorage.setItem("toggle", theme === "light" ? true : false);
  };

  useEffect(() => {
    const initialValue = localStorage.getItem("theme");
    setTheme(initialValue);
  }, []);

  useEffect(() => {
    localStorage.getItem("theme");

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <section>
      <nav className=" px-[30px] md:px-0 container flex flex-row justify-between  items-center pt-[50px] ">
        <div>
          <a>
            {" "}
            <Image
              className="w-auto h-auto"
              width={40}
              height={40}
              priority="true"
              src={logo}
              alt="logo of dictionary"
            />{" "}
          </a>
        </div>
        <div className="flex flex-row   justify-center items-center gap-5 relative">
          <button
            onClick={handleMenuFonts}
            className="flex items-center gap-2 border-r border-solid border-gray-400 px-5 dark:text-white  font-bold"
          >
            {fonts}
            <Image
              className="w-auto h-auto"
              src={arrowDown}
              width={15}
              height={15}
              priority="true"
              alt="Arrow DropDown"
            />
          </button>
          {menuFonts && (
            <div className="absolute w-[150px] h-[150px] p-[20px] font-bold bg-white dark:bg-darkInput  bottom-[-150px] right-[120px] rounded-lg shadow-[0px_5px_15px_0px_#efefef] dark:shadow-[0px_5px_20px_0px_#9646c9] ">
              <ul className="text-black dark:text-white flex flex-col gap-3  ">
                <li
                  onClick={() => handleFonts("Sans")}
                  className="hover:text-purpleFont"
                >
                  Sans Serif
                </li>
                <li
                  onClick={() => handleFonts("Serif")}
                  className="hover:text-purpleFont"
                >
                  Serif
                </li>
                <li
                  onClick={() => handleFonts("Mono")}
                  className="hover:text-purpleFont"
                >
                  {" "}
                  Mono
                </li>
              </ul>
            </div>
          )}
          <div className="flex flex-row items-center  gap-5">
            <div
              onClick={handleTheme}
              className={`relative ${
                theme === "dark" ? "bg-purpleFont  " : "bg-gray-900 "
              }  w-[40px] h-[20px]  rounded-3xl`}
            >
              <div
                className={` ${
                  theme === "dark" ? "right-[3px]" : "left-[3px] "
                }  absolute top-[2.5px]  w-[15px] h-[15px] bg-white rounded-full `}
              />
            </div>
            <div>
              {theme === "dark" ? (
                <Sun className="text-white" size={40} strokeWidth={0.75} />
              ) : (
                <Moon size={40} strokeWidth={0.75} />
              )}
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;

/* 

              */

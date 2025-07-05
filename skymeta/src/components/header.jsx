"use client";

import { LogoDark } from "@/assets";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { BsInstagram, BsLinkedin, BsPlayFill } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoLinkedin } from "react-icons/bi";
import { MdDarkMode, MdLightMode, MdPhone } from "react-icons/md";
import Link from "next/link";
import "../functions/i18n";
import { t } from "i18next";
import { useDispatch, useSelector } from "react-redux";
// import { changeLanguage } from "@/redux/reducers/language";
import { changeLanguage } from "@/redux/actions/language";

function Header() {
  const [backgroundColor, setBackgroundColor] = useState(false);
  const dispatch = useDispatch();
  const language = useSelector((state) => state.languageReducer.language);

  console.log(language);

  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset > 0) {
        setBackgroundColor(true);
      } else {
        setBackgroundColor(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const HandleLang = (lang) => {
    dispatch(changeLanguage(lang));
  };
  return (
    <div
      className={`
    ${
      backgroundColor
        ? "bg-black bg-opacity-20 backdrop-blur-lg"
        : "bg-transparent"
    } w-screen fixed top-0 z-50
    `}
    >
      <div
        className={`flex justify-between w-full h-16 items-center px-5 tablet:px-10 transition-colors duration-500 max-w-[1440px] mx-auto`}
      >
        <div className="flex gap-2 items-center">
          <Image
            src={LogoDark}
            alt="logo"
            width={32}
            height={32}
            className="cursor-pointer"
          />
          <div className="flex gap-2 tablet:gap-4 items-baseline font-[600]">
            <Link href={"/"} className="text-xl font-[1000] cursor-pointer">
              sky<span className="text-[var(--primary)]">meta</span>
            </Link>
            <Link
              href={"/projects"}
              className="text-[var(--link)] text-sm cursor-pointer hover:text-[var(--link-hover)]  transition-all duration-500"
            >
              {t("Projects")}
            </Link>
            <Link
              href={"/blog"}
              className="text-[var(--link)] text-sm cursor-pointer hover:text-[var(--link-hover)]  transition-all duration-500"
            >
              {t("Blog")}
            </Link>
            <div className="dropdown dropdown-bottom dropdown-end">
              <label
                tabIndex="0"
                className="bg-[var(--secondary20)] w-fit h-fit py-1 px-3 rounded-full text-sm flex gap-1 items-center group text-[var(--secondary)]"
              >
                {t("Work")}
                <BsPlayFill className="pc:group-hover:translate-x-1 transition-all duration-500 rotate-[-30deg] pc:rotate-0" />
              </label>
              <ul
                tabIndex="0"
                className="dropdown-content z-[1] menu p-2 !backdrop-blur-lg !bg-[var(--primary10)] rounded-md w-52 mt-4 pc:hidden"
              >
                <div className="justify-center  gap-2 flex flex-col">
                  <Link
                    href={"/skills-and-tools"}
                    className="text-[var(--secondary)] text-sm cursor-pointer hover:text-[var(--secondary-hover)]  transition-all duration-500 p-2 hover:bg-[var(--primary10)] rounded-md"
                  >
                    {t("Skills & Tools")}
                  </Link>
                  <Link
                    href={"/contact"}
                    className="text-[var(--secondary)] text-sm cursor-pointer hover:text-[var(--secondary-hover)]  transition-all duration-500 p-2 hover:bg-[var(--primary10)] rounded-md"
                  >
                    {t("contact")}
                  </Link>
                </div>
              </ul>
            </div>
            <div className="items-center gap-4 hidden pc:flex">
              <Link
                href={"/skills-and-tools"}
                className="text-[var(--secondary)] text-sm cursor-pointer hover:text-[var(--secondary-hover)]  transition-all duration-500"
              >
                {t("Skills & Tools")}
              </Link>
              <div className="w-[2px] h-[3px] rounded-full mt-1 bg-white"></div>
              <Link
                href={"/contact"}
                className="text-[var(--secondary)] text-sm cursor-pointer hover:text-[var(--secondary-hover)]  transition-all duration-500"
              >
                {t("contact")}
              </Link>
            </div>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <Link href={"https://twitter.com/skymeta_co"} target="_blank">
            <FaXTwitter className="hover:text-[var(--primary)] transition-all duration-500 hidden tablet:block" />
          </Link>
          <Link href={"https://linkedin.com/company/skymeta-co"} target="_blank">
            <BiLogoLinkedin className="hover:text-[var(--primary)] transition-all duration-500 hidden tablet:block" />
          </Link>
          <Link href={"https://instagram.com/skymeta.co"} target="_blank">
            <BsInstagram className="hover:text-[var(--primary)] transition-all duration-500 hidden tablet:block" />
          </Link>
          <div className="bg-[var(--neutral-4)] w-[1px] h-[20px] hidden tablet:block"></div>
          {/* <Link
            href={"/contact"}
            className="h-[25px] w-[25px] bg-[var(--primary20)] p-1 flex justify-center items-center rounded-md group cursor-pointer"
          >
            <MdDarkMode className="group-hover:scale-110 group-hover:rotate-12 transition-all duration-200" />
            <MdPhone className="group-hover:scale-110 rotate-[135deg] group-hover:-rotate-0 transition-all duration-500" />

          </Link> */}
          <div className="flex gap-2">
            <div className="dropdown dropdown-bottom dropdown-end">
              <label
                tabIndex="0"
                className="bg-[var(--secondary20)] w-fit h-fit py-1 px-2 rounded-full text-sm flex gap-1 items-center group text-[var(--secondary)]"
              >
                <span className={`fi fis fi-${language} rounded-full`}></span>

                <BsPlayFill className="pc:group-hover:translate-y-[1px] transition-all -rotate-[30deg] duration-500 " />
              </label>
              <ul
                tabIndex="0"
                className="dropdown-content z-[1] menu p-2 !backdrop-blur-lg !bg-[var(--primary10)] rounded-md w-52 mt-4"
              >
                <div className="justify-center  gap-2 flex flex-col">
                  <div
                    className="text-[var(--secondary)] text-sm cursor-pointer hover:text-[var(--secondary-hover)]  transition-all duration-500 p-2 hover:bg-[var(--primary10)] rounded-md gap-2 flex"
                    onClick={() => {
                      HandleLang("gb");
                    }}
                  >
                    <span className={`fi fis fi-${"gb"} rounded-full`}></span>
                    English
                  </div>
                  <div
                    className="text-[var(--secondary)] text-sm cursor-pointer hover:text-[var(--secondary-hover)]  transition-all duration-500 p-2 hover:bg-[var(--primary10)] rounded-md gap-2 flex"
                    onClick={() => {
                      HandleLang("tr");
                    }}
                  >
                    <span className={`fi fis fi-${"tr"} rounded-full`}></span>
                    Türkiye
                  </div>
                  <div
                    className="text-[var(--secondary)] text-sm cursor-pointer hover:text-[var(--secondary-hover)]  transition-all duration-500 p-2 hover:bg-[var(--primary10)] rounded-md gap-2 flex"
                    onClick={() => {
                      HandleLang("fr");
                    }}
                  >
                    <span className={`fi fis fi-${"fr"} rounded-full`}></span>
                    Français
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

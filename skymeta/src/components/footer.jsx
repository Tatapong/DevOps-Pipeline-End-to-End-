"use client";

import { t } from "i18next";
import Link from "next/link";
import React from "react";
import { BiLogoLinkedin } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import Typewriter from "typewriter-effect";

function Footer() {
  return (
    <footer className="w-full relative bg-gradient-to-t from-transparent to-[var(--background-color)]  pt-10 font-Roboto">
      <div className="flex flex-col pc:flex-row w-full items-center relative  max-w-6xl mx-auto z-0 gap-4 justify-between px-5 pc:px-3 pb-10 border-b border-[var(--neutral-5)]">
        <div className="w-full pc:w-1/2">
          <div className="w-[80%]">
            <div className="font-[900] text-[var(--neutral)] text-sm">
              {t("About us")}
            </div>
            <div className="font-[500] text-[var(--neutral-3)] text-sm mt-1">
              {t("We are Skymeta")},{" "}
              <span className="font-[900]">
                {t("Web developers, mobile developers, UI/UX , full stack")}{" "}
              </span>{" "}
              {t(
                "We loves intuitive, clean and modern UI design and high responsive and performant application"
              )}
            </div>
            <div className="flex gap-4 mt-4">
              <Link href={"https://twitter.com/skymeta_co"} target="_blank">
                <FaXTwitter className="hover:text-[var(--primary)] transition-all duration-500 hidden tablet:block" />
              </Link>
              <Link
                href={"https://linkedin.com/company/skymeta-co"}
                target="_blank"
              >
                <BiLogoLinkedin className="hover:text-[var(--primary)] transition-all duration-500 hidden tablet:block" />
              </Link>
              <Link href={"https://instagram.com/skymeta.co"} target="_blank">
                <BsInstagram className="hover:text-[var(--primary)] transition-all duration-500 hidden tablet:block" />
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full pc:w-1/2 flex flex-col pc:flex-row pc:space-x-32 justify-end">
          <div>
            <p className="font-[900] text-[var(--neutral)] text-sm">
              {t("Work")}
            </p>

            <ul className="mt-6 space-y-4 text-sm flex flex-col">
              <Link
                href={"/skills-and-tools"}
                className="hover:text-[var(--secondary-hover)] transition-all duration-300 cursor-pointer"
              >
                {t("Skills & Tools")}
              </Link>

              <Link
                href={"/contact"}
                className="hover:text-[var(--secondary-hover)] transition-all duration-300 cursor-pointer"
              >
                {t("contact")}
              </Link>
            </ul>
          </div>

          <div className="mt-10 pc:mt-0">
            <p className="font-[900] text-[var(--neutral)] text-sm">
              This site
            </p>

            <ul className="mt-6 space-y-4 text-sm flex flex-col">
              <Link
                href={"/"}
                className="hover:text-[var(--secondary-hover)] transition-all duration-300 cursor-pointer"
              >
                Home
              </Link>

              <Link
                href={"projects"}
                className="hover:text-[var(--secondary-hover)] transition-all duration-300 cursor-pointer"
              >
                Project
              </Link>

              <Link
                href={"blog"}
                className="hover:text-[var(--secondary-hover)] transition-all duration-300 cursor-pointer"
              >
                Blog
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex font-[600] flex-col pc:flex-row mt-5 w-full items-center px-5  max-w-6xl mx-auto z-0 gap-4 justify-between pb-5 text-xs text-[var(--neutral)]">
        <div className="">© 2023, Skymeta</div>
        <div className="">{t("see the recent update on our social media")}</div>
      </div>
    </footer>
  );
}

export default Footer;

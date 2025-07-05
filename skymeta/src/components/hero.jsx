"use client";

import { Hero1, Main, Main2, MainPic } from "@/assets";
import { decrement, increment, incrementBy } from "@/redux/reducers/count";
import { t } from "i18next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdContacts } from "react-icons/md";
import Typewriter from "typewriter-effect";

function Hero() {
  return (
    <div className="w-full bg-gradient-to-b from-transparent to-[var(--background-color)]">
      <div className="flex w-full items-center h-screen max-h-[800px] pb-[10vh] relative  max-w-6xl mx-auto px-10 z-0">
        <div className="z-[1] w-full tablet:w-1/2">
          <div className="text-[30px] mobilelg:text-[40px] text-[var(--neutral-4)]">
            {t("hello")}✌️
          </div>
          <div className=" font-bold text-[40px] mobilelg:text-[60px] -mt-4">
            {t("We are")}{" "}
            <span className="from-[var(--primary)] via-[var(--link)] to-[var(--secondary)] bg-gradient-to-r bg-clip-text text-transparent">
              Skymeta{t("We are t")}
            </span>
          </div>
          <div className="font-[700] text-[20px] mobilelg:text-[25px] from-[var(--primary)] to-[var(--neutral-4)] bg-gradient-to-r bg-clip-text text-transparent">
            <Typewriter
              options={{
                strings: [
                  t("a software company"),
                  t("we build web application"),
                  t("professional penetration testers"),
                  t("We love using new technologies."),
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <Link
            href={"/contact"}
            className="bg-[var(--primary)] w-fit h-fit py-3 px-4 mt-5 rounded-md text-sm flex gap-1 items-center group text-[var(--neutral-0)] font-bold hover:bg-[var(--link-hover)] cursor-pointer hover:scale-105 transition-all duration-300"
          >
            {t("Contact us")}
            <MdContacts />
          </Link>
        </div>
        <div className="absolute flex  w-full justify-end right-0 z-0 floating-img">
          {/* <Image src={MainPic2} alt="main" width={400} height={400}/> */}
          <Image
            src={Hero1}
            alt="main"
            className="hidden tablet:block w-[600px] h-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;

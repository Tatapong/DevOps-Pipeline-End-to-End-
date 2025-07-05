import React from "react";
import {
  BiEqualizer,
  BiLogoDjango,
  BiLogoFigma,
  BiLogoJavascript,
  BiLogoNodejs,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoTypescript,
  BiMobileVibration,
} from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { PiShootingStarLight } from "react-icons/pi";
import Partners from "./partners";
import { t } from "i18next";
import { Fade } from "react-awesome-reveal";

function Tech() {
  return (
    <div className="w-full bg-[var(--background-color)] border-b border-[var(--neutral-5)] pb-36">
      <div className="w-full items-center relative px-10 z-0 max-w-6xl mx-auto">
        <div className="font-[600] text-[var(--neutral-4)] text-sm">
          {t("Our most used tech stack/tools")}:
        </div>
        <div className="flex gap-2 text-3xl text-[var(--neutral-4)] my-2">
          <BiLogoReact className="hover:text-blue-600 transition-all duration-500 cursor-pointer" />
          <TbBrandNextjs className="hover:text-white transition-all duration-500 cursor-pointer" />
          <BiLogoTailwindCss className="hover:text-blue-400 transition-all duration-500 cursor-pointer" />
          <BiLogoDjango className="hover:text-white transition-all duration-500 cursor-pointer" />
          <BiLogoNodejs className="hover:text-green-900 transition-all duration-500 cursor-pointer" />
          <BiLogoJavascript className="hover:text-yellow-500 transition-all duration-500 cursor-pointer" />
          <BiLogoTypescript className="hover:text-blue-600 transition-all duration-500 cursor-pointer" />
          <BiLogoFigma className="hover:text-orange-600 transition-all duration-500 cursor-pointer" />
        </div>
        <div className="mt-10 tablet:mt-20">
          <Fade cascade triggerOnce={true} duration={2000}>
            <div className="flex items-stretch gap-5 flex-wrap mx-auto">
              <div className="relative border border-[var(--border-color)] rounded-md max-w-[90%] tablet:max-w-[45%] pc:max-w-[32%] min-w-[320px]">
                <div className="w-full h-[1px] bg-[var(--border-color)] absolute left-0 top-11 z-0"></div>
                <div className="h-full w-[1px] bg-[var(--border-color)] absolute top-0 left-11 z-0"></div>
                <div className="w-[90%] ml-5 flex items-center mt-5 z-[1]">
                  <div className="w-[50px] h-[48px] rounded-full bg-[var(--primary)] flex justify-center items-center z-[1]">
                    <PiShootingStarLight className="text-2xl" />
                    {/* <BsStars className="text-yellow-400 text-3xl"/> */}
                  </div>
                  <div className="flex pl-10 items-center w-full h-[30px] rounded-full bg-[var(--border-color)] -ml-7 z-0 font-[600] text-sm text-[var(--neutral-3)]">
                    {t("Customer satisfaction")}
                  </div>
                </div>
                <div className="ml-14 mr-2 text-sm font-normal text-[var(--neutral-3)] mt-3 mb-4">
                  {t("Customer satisfaction content")}
                </div>
              </div>

              <div className="relative border border-[var(--border-color)] rounded-md max-w-[90%] tablet:max-w-[45%] pc:max-w-[32%] min-w-[320px]">
                <div className="w-full h-[1px] bg-[var(--border-color)] absolute left-0 top-11 z-0"></div>
                <div className="h-full w-[1px] bg-[var(--border-color)] absolute top-0 left-11 z-0"></div>
                <div className="w-[90%] ml-5 flex items-center mt-5 z-[1]">
                  <div className="w-[50px] h-[48px] rounded-full bg-[var(--secondary)] flex justify-center items-center z-[1]">
                    <BiEqualizer className="text-2xl" />
                  </div>
                  <div className="flex pl-10 items-center w-full h-[30px] rounded-full bg-[var(--border-color)] -ml-7 z-0 font-[600] text-sm text-[var(--neutral-3)]">
                    {t("Product Quality")}
                  </div>
                </div>
                <div className="ml-14 mr-2 text-sm font-normal text-[var(--neutral-3)] mt-3 mb-4">
                  {t("Product Quality content")}
                </div>
              </div>

              <div className="relative border border-[var(--border-color)] rounded-md max-w-[90%] tablet:max-w-[45%] pc:max-w-[32%] min-w-[320px]">
                <div className="w-full h-[1px] bg-[var(--border-color)] absolute left-0 top-11 z-0"></div>
                <div className="h-full w-[1px] bg-[var(--border-color)] absolute top-0 left-11 z-0"></div>
                <div className="w-[90%] ml-5 flex items-center mt-5 z-[1]">
                  <div className="w-[50px] h-[48px] rounded-full bg-[var(--tag)] flex justify-center items-center z-[1]">
                    <BiMobileVibration className="text-2xl" />
                  </div>
                  <div className="flex pl-10 items-center w-full h-[30px] rounded-full bg-[var(--border-color)] -ml-7 z-0 font-[600] text-sm text-[var(--neutral-3)]">
                    {t("Mobile First Approach")}
                  </div>
                </div>
                <div className="ml-14 mr-2 text-sm font-normal text-[var(--neutral-3)] mt-3 mb-4">
                  {t("Mobile First Approach content")}
                </div>
              </div>
            </div>
          </Fade>
        </div>
        <Partners />
        <div className="">
          <div className="text-[var(--primary)] font-bold">
            {t("User Friendly")}
          </div>
          <div className="font-bold text-[30px] mobilelg:text-[40px] text-[var(--neutral-3)] mt-4">
            {t("Built With Modern")}{" "}
            <span className="from-[var(--primary)] via-[var(--link)] to-[var(--secondary)] bg-gradient-to-r bg-clip-text text-transparent">
              {" "}
              {t("Technologies")}{" "}
            </span>
            {t("& Love")}
          </div>
          <div className="font-bold text-[var(--neutral-4)] max-w-lg mt-4">
            {t("user friendly content")}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tech;

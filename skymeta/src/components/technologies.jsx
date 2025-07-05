import React from "react";
import {
  BiLogoAmazon,
  BiLogoBootstrap,
  BiLogoCss3,
  BiLogoDjango,
  BiLogoDocker,
  BiLogoFlutter,
  BiLogoGit,
  BiLogoGithub,
  BiLogoGitlab,
  BiLogoHeroku,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoMongodb,
  BiLogoNetlify,
  BiLogoNodejs,
  BiLogoPostgresql,
  BiLogoReact,
  BiLogoRedux,
  BiLogoTailwindCss,
  BiLogoTypescript,
  BiLogoVuejs,
  BiLogoWordpress,
} from "react-icons/bi";
import {
  TbBrandMysql,
  TbBrandNextjs,
  TbBrandReactNative,
  TbBrandVite,
} from "react-icons/tb";
import { IoLogoVercel } from "react-icons/io5";
import { SiExpress, SiRender } from "react-icons/si";
import { FaLaravel, FaPhp, FaSass } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { t } from "i18next";
import { Zoom } from "react-awesome-reveal";

function Technologies() {
  const language = useSelector((state) => state.languageReducer.language);

  return (
    <div className="w-full bg-[var(--background-color)] pb-36 pt-10 tablet:pt-20">
      <div className="w-full items-center relative px-10 z-0 max-w-6xl mx-auto">
        <div className="font-bold text-[30px] mobilelg:text-[40px] text-[var(--neutral-3)] mt-4 relative group cursor-pointer">
          {t("Our tech")}{" "}
          <span className="from-[var(--primary)] via-[var(--link)] to-[var(--secondary)] bg-gradient-to-r bg-clip-text text-transparent">
            {" "}
            {t("Technologies tech")}{" "}
          </span>
          <div className="absolute bottom-2 w-10 h-1 bg-[var(--secondary)] transition-all duration-500 group-hover:w-56 group-hover:h-2"></div>
        </div>
        <div className="font-bold text-[var(--neutral-4)] max-w-2xl mt-4">
          {t("technology content")}
        </div>

        {/* backend */}
        <div className="text-[var(--neutral)] font-bold mt-10">
          Backend Centric
          <div className="full bg-[var(--primary)] h-[1px]"></div>
          <div className="flex gap-5 flex-wrap mt-5">
            <Zoom cascade triggerOnce={true}>
              <div className="flex gap-1 group cursor-pointer items-center">
                <BiLogoNodejs className="group-hover:text-green-900 transition-all duration-500 text-3xl" />
                Node
              </div>
              <div className="flex gap-1 group cursor-pointer items-center">
                <SiExpress className="group-hover:text-white transition-all duration-500 text-3xl" />
                Express
              </div>
              <div className="flex gap-1 group cursor-pointer items-center">
                <BiLogoDjango className="group-hover:text-white transition-all duration-500 text-3xl" />
                Django
              </div>
              <div className="flex gap-1 group cursor-pointer items-center">
                <BiLogoJavascript className="group-hover:text-yellow-500 transition-all duration-500 text-3xl" />
                Javascript
              </div>
              <div className="flex gap-1 group cursor-pointer items-center">
                <BiLogoTypescript className="group-hover:text-blue-600 transition-all duration-500 text-3xl" />
                Typescript
              </div>
              <div className="flex gap-1 group cursor-pointer items-center">
                <FaPhp className="group-hover:text-purple-800 transition-all duration-500 text-3xl" />
                PHP
              </div>
              <div className="flex gap-1 group cursor-pointer items-center">
                <FaLaravel className="group-hover:text-orange-600 transition-all duration-500 text-3xl" />
                Laravel
              </div>
            </Zoom>
          </div>
        </div>

        {/* frontend */}
        <div className="text-[var(--neutral)] font-bold mt-10">
          Frontend Centric
          <div className="full bg-[var(--primary)] h-[1px]"></div>
          <div className="flex gap-5 flex-wrap mt-5">
            <Zoom cascade triggerOnce={true}>
              <div className="flex gap-1 group cursor-pointer items-center">
                <BiLogoReact className="group-hover:text-blue-600 transition-all duration-500 text-3xl" />
                React
              </div>
              <div className="flex gap-1 group cursor-pointer items-center">
                <TbBrandReactNative className="group-hover:text-blue-600 transition-all duration-500 text-3xl" />
                React Native
              </div>
              <div className="flex gap-1 group cursor-pointer items-center">
                <BiLogoFlutter className="group-hover:text-blue-300 transition-all duration-500 text-3xl" />
                Flutter
              </div>
              <div className="flex gap-1 group cursor-pointer items-center">
                <TbBrandNextjs className="group-hover:text-white transition-all duration-500 text-3xl" />
                Next
              </div>
              <div className="flex gap-1 group cursor-pointer items-center">
                <BiLogoJavascript className="group-hover:text-yellow-500 transition-all duration-500 text-3xl" />
                Javascript
              </div>
              <div className="flex gap-1 group cursor-pointer items-center">
                <BiLogoTypescript className="group-hover:text-blue-600 transition-all duration-500 text-3xl" />
                Typescript
              </div>
              <div className="flex gap-1 group cursor-pointer items-center">
                <BiLogoHtml5 className="group-hover:text-orange-600 transition-all duration-500 text-3xl" />
                HTML 5
              </div>
              <div className="flex gap-1 group cursor-pointer items-center">
                <BiLogoCss3 className="group-hover:text-blue-600 transition-all duration-500 text-3xl" />
                CSS 3
              </div>
              <div className="flex gap-1 group cursor-pointer items-center">
                <BiLogoTailwindCss className="group-hover:text-blue-400 transition-all duration-500 text-3xl" />
                Tailwind Css
              </div>
              <div className="flex gap-1 group cursor-pointer items-center">
                <BiLogoBootstrap className="group-hover:text-orange-500 transition-all duration-500 text-3xl" />
                Bootstrap 5
              </div>
              <div className="flex gap-1 group cursor-pointer items-center">
                <TbBrandVite className="group-hover:text-white transition-all duration-500 text-3xl" />
                Vite
              </div>
              <div className="flex gap-1 group cursor-pointer items-center">
                <BiLogoVuejs className="group-hover:text-green-900 transition-all duration-500 text-3xl" />
                Vue
              </div>
              <div className="flex gap-1 group cursor-pointer items-center">
                <BiLogoRedux className="group-hover:text-purple-600 transition-all duration-500 text-3xl" />
                Redux
              </div>
              <div className="flex gap-1 group cursor-pointer items-center">
                <FaSass className="group-hover:text-orange-600 transition-all duration-500 text-3xl" />
                Sass
              </div>
              <div className="flex gap-1 group cursor-pointer items-center">
                <BiLogoWordpress className="group-hover:text-blue-300 transition-all duration-500 text-3xl" />
                Wordpress
              </div>
            </Zoom>
          </div>
        </div>

        {/* Database */}
        <div className="text-[var(--neutral)] font-bold mt-10">
          Database Centric
          <div className="full bg-[var(--primary)] h-[1px]"></div>
          <div className="flex gap-5 flex-wrap mt-5">
            <Zoom cascade triggerOnce={true}>
              <div className="flex gap-1 group cursor-pointer items-center">
                <BiLogoPostgresql className="group-hover:text-blue-400 transition-all duration-500 text-3xl" />
                Postgresql
              </div>
              <div className="flex gap-1 group cursor-pointer items-center">
                <TbBrandMysql className="group-hover:text-orange-400 transition-all duration-500 text-3xl" />
                MySQL
              </div>
              <div className="flex gap-1 group cursor-pointer items-center">
                <BiLogoMongodb className="group-hover:text-green-500 transition-all duration-500 text-3xl" />
                MongoDB
              </div>
            </Zoom>
          </div>
        </div>

        {/* Version Control */}
        <div className="text-[var(--neutral)] font-bold mt-10">
          Version control
          <div className="full bg-[var(--primary)] h-[1px]"></div>
          <div className="flex gap-5 flex-wrap mt-5">
            <Zoom cascade triggerOnce={true}>
              <div className="flex gap-1 group cursor-pointer items-center">
                <BiLogoGithub className="group-hover:text-white transition-all duration-500 text-3xl" />
                GitHub
              </div>
              <div className="flex gap-1 group cursor-pointer items-center">
                <BiLogoGitlab className="group-hover:text-orange-400 transition-all duration-500 text-3xl" />
                GitLab
              </div>
              <div className="flex gap-1 group cursor-pointer items-center">
                <BiLogoGit className="group-hover:text-orange-500 transition-all duration-500 text-3xl" />
                Git
              </div>
            </Zoom>
          </div>
        </div>

        {/* Deployment */}
        <div className="text-[var(--neutral)] font-bold mt-10">
          Deployment
          <div className="full bg-[var(--primary)] h-[1px]"></div>
          <div className="flex gap-5 flex-wrap mt-5">
            <Zoom cascade triggerOnce={true}>
              <div className="flex gap-1 group cursor-pointer items-center">
                <IoLogoVercel className="group-hover:text-white transition-all duration-500 text-3xl" />
                Vercel
              </div>
              <div className="flex gap-1 group cursor-pointer items-center">
                <SiRender className="group-hover:text-green-400 transition-all duration-500 text-3xl" />
                Render
              </div>
              <div className="flex gap-1 group cursor-pointer items-center">
                <BiLogoAmazon className="group-hover:text-white transition-all duration-500 text-3xl" />
                Amazon
              </div>
              <div className="flex gap-1 group cursor-pointer items-center">
                <BiLogoHeroku className="group-hover:text-purple-500 transition-all duration-500 text-3xl" />
                Heroku
              </div>
              <div className="flex gap-1 group cursor-pointer items-center">
                <BiLogoNetlify className="group-hover:text-white transition-all duration-500 text-3xl" />
                Netlify
              </div>
              <div className="flex gap-1 group cursor-pointer items-center">
                <BiLogoDocker className="group-hover:text-blue-500 transition-all duration-500 text-3xl" />
                Docker
              </div>
            </Zoom>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technologies;

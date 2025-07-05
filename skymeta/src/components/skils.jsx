import { t } from "i18next";
import Link from "next/link";
import React from "react";
import { Slide } from "react-awesome-reveal";
import { BsPlayFill } from "react-icons/bs";

function Skills() {
  return (
    <div className="w-full bg-gradient-to-b from-transparent via-[var(--background-color)] to-[var(--background-color)] mt-20 pb-10 pt-20">
      <div className="flex flex-col w-full  relative  max-w-6xl mx-auto z-0 p-2 tablet:p-0">
      <Slide cascade triggerOnce={true} direction="left" className="content-wrapper">
          <div>
            <h1 className="text-[1.5rem] font-extrabold leading-tight text-[var(--primary)] tablet:text-2xl mb-4">
              {t("Work")}
            </h1>
          </div>
          <div>
            <h1 className="text-[2.5rem] font-extrabold leading-tight text-[var(--neutral-3)] tablet:text-7xl">
              {t("Skills and Tools")}
            </h1>
          </div>
          <div>
            <p className="mt-4 text-2xl text-[var(--neutral)] tablet:mt-6 tablet:text-2xl pc:max-w-[700px] dark:text-slate-400">
              {t("skills headers description")}
            </p>
          </div>
        </Slide>
      </div>
    </div>
  );
}

export default Skills;

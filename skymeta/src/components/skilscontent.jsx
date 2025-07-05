"use client";

import { t } from "i18next";
import Link from "next/link";
import React from "react";
import { Fade } from "react-awesome-reveal";
import { BsPlayFill } from "react-icons/bs";
import ScrollSpy from "react-ui-scrollspy";

function SkillContent() {
  return (
    <div className="w-full bg-[var(--background-color)] tablet:pt-20 pt-10 pb-32 text-[var(--neutral)]">
      <div className="flex gap-10 w-full tablet:border-l tablet:pl-24 border-[var(--neutral-5)]  max-w-6xl mx-auto px-10 z-0">
        <div className=" w-[95%] tablet:w-8/12">
          <div className="border-b pb-12 border-[var(--neutral-5)]">
            {t("skills headers description")}
          </div>
          <Fade triggerOnce={true} cascade>
            <ScrollSpy offsetTop={400}>
              {/* frontend */}
              <div id="frontend" className="pt-10">
                <div className="text-2xl tablet:text-3xl text-white">
                  {t("Front-End development")}
                </div>
                <div className="my-4">{t("frontend description")}</div>
              </div>
              <div id="framework" className="pt-10">
                <div className="text-xl tablet:text-2xl text-white">
                  React, Next.js, Vue.js
                </div>
                <div className="my-4">{t("react desc")}</div>
              </div>
              <div id="mobile" className="pt-10">
                <div className="text-xl tablet:text-2xl text-white">
                  React Native and Flutter
                </div>
                <div className="my-4">{t("reactn desc")}</div>
              </div>
              <div id="javascript" className="pt-10">
                <div className="text-xl tablet:text-2xl text-white">
                  JavaScript and TypeScript
                </div>
                <div className="my-4">{t("javascript decs")}</div>
              </div>
              <div id="html" className="pt-10">
                <div className="text-xl tablet:text-2xl text-white">
                  HTML5 and CSS3
                </div>
                <div className="my-4">{t("html desc")}</div>
              </div>
              <div id="tailwind" className="pt-10">
                <div className="text-xl tablet:text-2xl text-white">
                  Tailwind CSS and Bootstrap:
                </div>
                <div className="my-4">{t("tailwind decs")}</div>
              </div>
              <div id="redux" className="pt-10">
                <div className="text-xl tablet:text-2xl text-white">Redux</div>
                <div className="my-4">{t("redux decs")}</div>
              </div>
              <div id="wordpress" className="pt-10">
                <div className="text-xl tablet:text-2xl text-white">
                  Wordpress
                </div>
                <div className="my-4">{t("wordpress decs")}</div>
              </div>

              {/* backend */}
              <div id="backend" className="mt-16">
                <div className="text-2xl tablet:text-3xl text-white">
                  {t("Back-End development")}
                </div>
                <div className="my-4">{t("Backend description")}</div>
              </div>
              <div id="node" className="pt-10">
                <div className="text-xl tablet:text-2xl text-white">
                  Node.js and Express.js
                </div>
                <div className="my-4">{t("node desc")}</div>
              </div>
              <div id="django" className="pt-10">
                <div className="text-xl tablet:text-2xl text-white">Django</div>
                <div className="my-4">{t("django desc")}</div>
              </div>
              <div id="php" className="pt-10">
                <div className="text-xl tablet:text-2xl text-white">
                  PHP and Laravel
                </div>
                <div className="my-4">{t("php desc")}</div>
              </div>
              <div id="database" className="pt-10">
                <div className="text-xl tablet:text-2xl text-white">
                  MySQL, PostgreSQL, and MongoDB:
                </div>
                <div className="my-4">{t("database desc")}</div>
              </div>

              {/* Version Control: Collaborating Seamlessly */}
              <div id="control" className="mt-16">
                <div className="text-2xl tablet:text-3xl text-white">
                  {t("Version Control: Collaborating Seamlessly")}
                </div>
                <div className="my-4">{t("version desc")}</div>
              </div>
              <div id="git" className="pt-10">
                <div className="text-xl tablet:text-2xl text-white">
                  GitHub, GitLab, and Git
                </div>
                <div className="my-4">{t("git desc")}</div>
              </div>

              {/* Deployment: Taking Your Projects Live */}
              <div id="deployment" className="mt-16">
                <div className="text-2xl tablet:text-3xl text-white">
                  {t("Deployment: Taking Your Projects Live")}
                </div>
                <div className="my-4">{t("deployment desc")}</div>
              </div>
              <div id="vercel" className="pt-10">
                <div className="text-xl tablet:text-2xl text-white">
                  Vercel, Render, Amazon Web Services, Heroku, Netlify
                </div>
                <div className="my-4">{t("vercel desc")}</div>
              </div>

              <div id="docker" className="pt-10">
                <div className="text-xl tablet:text-2xl text-white">Docker</div>
                <div className="my-4">{t("docker desc")}</div>
              </div>

              {/* focus */}
              <div id="focus" className="mt-16">
                <div className="text-xl tablet:text-2xl text-white">
                  {t("Our Focus: Creating Unique Digital Experiences")}
                </div>
                <div className="my-4">{t("focus decs1")}</div>
                <div className="my-4">{t("focus decs2")}</div>
              </div>
            </ScrollSpy>
          </Fade>
        </div>
        <div className="w-4/12 bg-[#1D263A] border-[0.5px] rounded-md border-[var(--neutral-5)] text-sm sticky !top-24 h-fit hidden pc:block">
          <div className="border-b-[0.5px] border-[var(--neutral-5)] p-2 text-center w-full">
            Table of content
          </div>
          <div className="w-full mt-2 max-h-[70vh] overflow-y-scroll">
            <p data-to-scrollspy-id="frontend" className="px-2 py-[2px]">
              <Link href={"#frontend"}>{t("Front-end development")}</Link>
            </p>
            <p data-to-scrollspy-id="framework" className="px-2 py-[2px] pl-5">
              <Link href={"#framework"}>React, Next.js, Vue.js</Link>
            </p>
            <p data-to-scrollspy-id="mobile" className="px-2 py-[2px] pl-5">
              <Link href={"#mobile"}>React Native and Flutter</Link>
            </p>
            <p data-to-scrollspy-id="javascript" className="px-2 py-[2px] pl-5">
              <Link href={"#javascript"}>JavaScript and TypeScript</Link>
            </p>
            <p data-to-scrollspy-id="html" className="px-2 py-[2px] pl-5">
              <Link href={"#html"}>HTML5 and CSS3</Link>
            </p>
            <p data-to-scrollspy-id="tailwind" className="px-2 py-[2px] pl-5">
              <Link href={"#tailwind"}>Tailwind CSS and Bootstrap:</Link>
            </p>
            <p data-to-scrollspy-id="redux" className="px-2 py-[2px] pl-5">
              <Link href={"#redux"}>Redux</Link>
            </p>
            <p data-to-scrollspy-id="wordpress" className="px-2 py-[2px] pl-5">
              <Link href={"#wordpress"}>Wordpress</Link>
            </p>
            <p data-to-scrollspy-id="backend" className="px-2 py-[2px]">
              <Link href={"#backend"}>{t("Back-End development")}</Link>
            </p>
            <p data-to-scrollspy-id="node" className="px-2 py-[2px] pl-5">
              <Link href={"#node"}>Node.js and Express.js</Link>
            </p>
            <p data-to-scrollspy-id="django" className="px-2 py-[2px] pl-5">
              <Link href={"#django"}>Django</Link>
            </p>
            <p data-to-scrollspy-id="php" className="px-2 py-[2px] pl-5">
              <Link href={"#php"}>PHP and Laravel</Link>
            </p>
            <p data-to-scrollspy-id="database" className="px-2 py-[2px] pl-5">
              <Link href={"#database"}>MySQL, PostgreSQL, and MongoDB</Link>
            </p>
            <p data-to-scrollspy-id="control" className="px-2 py-[2px]">
              <Link href={"#control"}>{t("Version Control")}</Link>
            </p>
            <p data-to-scrollspy-id="git" className="px-2 py-[2px] pl-5">
              <Link href={"#git"}>GitHub, GitLab, and Git</Link>
            </p>
            <p data-to-scrollspy-id="deployment" className="px-2 py-[2px]">
              <Link href={"#deployment"}>{t("Deployment")}</Link>
            </p>
            <p data-to-scrollspy-id="vercel" className="px-2 py-[2px] pl-5">
              <Link href={"#vercel"}>
                Vercel, Render, Amazon Web Services, Heroku, Netlify
              </Link>
            </p>
            <p data-to-scrollspy-id="docker" className="px-2 py-[2px] pl-5">
              <Link href={"#docker"}>Docker</Link>
            </p>
            <p data-to-scrollspy-id="focus" className="px-2 py-[2px]">
              <Link href={"#focus"}>Our Focus</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillContent;

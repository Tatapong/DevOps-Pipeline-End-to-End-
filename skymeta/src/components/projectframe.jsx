"use client";

import React, { useState } from "react";
import { Fade, Zoom } from "react-awesome-reveal";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";

function ProjectFrame() {
  const [project, setProject] = useState("lachofit");

  const ChangeProject = (project) => {
    setProject(project);
  };
  return (
    <div className="w-full bg-gradient-to-b from-transparent to-[var(--background-color)] px-2">
      <div className="flex flex-col tablet:flex-row w-full items-center relative  max-w-6xl mx-auto pt-10 pb-32 z-0 gap-4">
        <div className="gap-4 flex flex-col w-full tablet:w-1/2">
          <Fade cascade triggerOnce={true}>
            <div
              className={`p-2 rounded-lg bg-[var(--background-color)] hover:scale-105 transition-all duration-300 cursor-pointer border-2 border-[var(--neutral-5)] w-full mt-2 hover:border-[var(--primary)] ${
                project == "coinpay" && "border-[var(--primary)]"
              }`}
              onClick={() => {
                ChangeProject("coinpay");
              }}
            >
              <div className="flex pl-1 tablet:pl-3 items-center text-[var(--neutral)] font-bold gap-4">
                <div className="text-[40px] mobilelg:text-[60px]">1</div>
                <div className="gap-2 flex flex-col">
                  <div
                    className={`${
                      project == "coinpay"
                        ? "text-[var(--primary)]"
                        : "text-white"
                    }`}
                  >
                    Coinpay
                  </div>
                  <div className="">The Future of Live Stream Monetization</div>
                </div>
              </div>
            </div>
            <div
              className={`p-2 rounded-lg bg-[var(--background-color)] hover:scale-105 transition-all duration-300 cursor-pointer border-2 border-[var(--neutral-5)] w-full hover:border-[var(--primary)]  ${
                project == "lachofit" && "border-[var(--primary)]"
              }`}
              onClick={() => {
                ChangeProject("lachofit");
              }}
            >
              <div className="flex pl-1 tablet:pl-3 items-center text-[var(--neutral)] font-bold gap-4">
                <div className="text-[40px] mobilelg:text-[60px]">2</div>
                <div className="gap-2 flex flex-col">
                  <div
                    className={`${
                      project == "lachofit"
                        ? "text-[var(--primary)]"
                        : "text-white"
                    }`}
                  >
                    Lachofit
                  </div>
                  <div className="">
                    Lachofit, Achieve Weight Loss and Fitness with Lachofit
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`p-2 rounded-lg bg-[var(--background-color)] hover:scale-105 transition-all duration-300 cursor-pointer border-2 border-[var(--neutral-5)] w-full hover:border-[var(--primary)]  ${
                project == "lachofitblog" && "border-[var(--primary)]"
              }`}
              onClick={() => {
                ChangeProject("lachofitblog");
              }}
            >
              <div className="flex pl-1 tablet:pl-3 items-center text-[var(--neutral)] font-bold gap-4">
                <div className="text-[40px] mobilelg:text-[60px]">3</div>
                <div className="gap-2 flex flex-col">
                  <div
                    className={`${
                      project == "lachofitblog"
                        ? "text-[var(--primary)]"
                        : "text-white"
                    }`}
                  >
                    Lachofit Blog
                  </div>
                  <div className="">
                    Instructive articles to keep you healthy
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </div>
        <div className="w-full tablet:w-1/2 flex justify-center relative tablet:-mt-16">
          <Zoom triggerOnce={true}>
            <div className="mockup-browser border bg-base-300 !bg-[var(--background-color)]">
              <div className="mockup-browser-toolbar !bg-[var(--background-color)]">
                <div className="input ">
                  {project == "lachofit"
                    ? "https://lachofit.com"
                    : project == "lachofitblog"
                    ? "https://blog.lachofit.com"
                    : "https://coinpay.com"}
                </div>
              </div>
              {project == "lachofit" ? (
                <iframe
                  src="https://lachofit.com"
                  className="w-full min-h-[400px]"
                ></iframe>
              ) : project == "lachofitblog" ? (
                <iframe
                  src="https://blog.lachofit.com"
                  className="w-full min-h-[400px]"
                ></iframe>
              ) : (
                <iframe
                  src="https://lachofit.com"
                  className="w-full min-h-[400px]"
                ></iframe>
              )}
            </div>
          </Zoom>
        </div>
      </div>
      <div className="px-2 py-4 rounded-md bg-[var(--primary80)] w-fit mx-auto hover:scale-95 transition-all duration-300 cursor-pointer mb-20">
        Explore more Projects
      </div>
    </div>
  );
}

export default ProjectFrame;

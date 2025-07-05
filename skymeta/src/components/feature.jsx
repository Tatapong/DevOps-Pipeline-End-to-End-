import { useInView } from "framer-motion";
import { t } from "i18next";
import React, { useRef } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";
import { useSelector } from "react-redux";

function Features() {
  const language = useSelector((state) => state.languageReducer.language);
  const ref = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const inView2 = useInView(ref2, { once: true, amount: 0.4 });
  const inView3 = useInView(ref3, { once: true, amount: 0.4 });
  const inView4 = useInView(ref4, { once: true, amount: 0.4 });
  const inView5 = useInView(ref5, { once: true, amount: 0.4 });

  return (
    <div className="w-full bg-gradient-to-b from-transparent to-[var(--background-color)]">
      <div className="flex flex-col tablet:flex-row w-full items-center relative  max-w-6xl mx-auto px-10 z-0 gap-4">
        <div className="gap-4 flex flex-col w-full tablet:w-1/2">
          <div
            className="p-2 rounded-lg bg-[var(--background-color)] border border-[var(--neutral-5)] w-full -mt-5"
            style={{
              transform: inView ? "none" : "translateX(150px)",
              opacity: inView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            ref={ref}
          >
            <div className="flex pl-1 tablet:pl-3 items-center text-[var(--neutral-4)] font-bold gap-4">
              <div className="text-[40px] mobilelg:text-[60px]">1</div>
              <div className="gap-2 flex flex-col">
                <div className="text-white ">{t("Security")}</div>
                <div className="">{t("Powerful Security System Built")}</div>
              </div>
            </div>
          </div>
          <div
            className="p-2 rounded-lg bg-[var(--background-color)] border border-[var(--neutral-5)] w-full"
            style={{
              transform: inView2 ? "none" : "translateX(150px)",
              opacity: inView2 ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            ref={ref2}
          >
            <div className="flex pl-1 tablet:pl-3 items-center text-[var(--neutral-4)] font-bold gap-4">
              <div className="text-[40px] mobilelg:text-[60px]">2</div>
              <div className="gap-2 flex flex-col">
                <div className="text-white ">SEO</div>
                <div className="">{t("Easy Search Engine Optimization")}</div>
              </div>
            </div>
          </div>
          <div
            className="p-2 rounded-lg bg-[var(--background-color)] border border-[var(--neutral-5)] w-full"
            style={{
              transform: inView3 ? "none" : "translateX(150px)",
              opacity: inView3 ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            ref={ref3}
          >
            <div className="flex pl-1 tablet:pl-3 items-center text-[var(--neutral-4)] font-bold gap-4">
              <div className="text-[40px] mobilelg:text-[60px]">3</div>
              <div className="gap-2 flex flex-col">
                <div className="text-white ">{t("Creativity")}</div>
                <div className="">{t("Uncommon Layout & Creative")}</div>
              </div>
            </div>
          </div>
          <div
            className="p-2 rounded-lg bg-[var(--background-color)] border border-[var(--neutral-5)] w-full"
            style={{
              transform: inView4 ? "none" : "translateX(150px)",
              opacity: inView4 ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            ref={ref4}
          >
            <div className="flex pl-1 tablet:pl-3 items-center text-[var(--neutral-4)] font-bold gap-4">
              <div className="text-[40px] mobilelg:text-[60px]">4</div>
              <div className="gap-2 flex flex-col">
                <div className="text-white">{t("Time saving")}</div>
                <div className="">{t("Save Time & Big Data")}</div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="w-full mt-10 tablet:mt-0 tablet:w-1/2 flex justify-center items-center relative"
          style={{
            transform: inView5 ? "none" : "translateX(-150px)",
            opacity: inView5 ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          ref={ref5}
        >
          <div className="self-start -mb-4">
            <FaQuoteLeft
              size={55}
              color="#8b5cf680"
              className="absolute -top-6 left-10"
            />
          </div>
          {language == "gb" ? (
            <div className="text-lg tablet:text-3xl pc:text-4xl z-[2] text-[var(--neutral-4)]">
              <div className="">
                {" "}
                <span className="italic">Empowering</span>{" "}
                <span className="font-bold text-[var(--neutral)]">
                  {" "}
                  Innovation,
                </span>
              </div>
              <div className="">
                __One Line of
                <span className="font-bold text-[var(--neutral)]"> Code__</span>
              </div>
              <div className="">
                <span className="font-bold text-[var(--neutral)]">
                  _______at{" "}
                </span>
                a Time.
              </div>
            </div>
          ) : language == "tr" ? (
            <div className="text-lg tablet:text-3xl pc:text-4xl z-[2] text-[var(--neutral-4)]">
              <div className="">
                {" "}
                <span className="italic">İnovasyonu</span>{" "}
                <span className="font-bold text-[var(--neutral)]">
                  {" "}
                  Güçlendirmek,
                </span>
              </div>
              <div className="">
                __Bir Kod
                <span className="font-bold text-[var(--neutral)]">
                  {" "}
                  Satırıyla__
                </span>
              </div>
              <div className="">
                <span className="font-bold text-[var(--neutral)]">
                  _______Bir{" "}
                </span>
                Adım Daha.
              </div>
            </div>
          ) : (
            <div className="text-lg tablet:text-3xl pc:text-4xl z-[2] text-[var(--neutral-4)]">
              <div className="">
                {" "}
                <span className="italic">Autonomiser</span>{" "}
                <span className="font-bold text-[var(--neutral)]">
                  {" "}
                  l&rsquo;Innovation,
                </span>
              </div>
              <div className="">
                __Une Ligne de
                <span className="font-bold text-[var(--neutral)]"> Code__</span>
              </div>
              <div className="">
                <span className="font-bold text-[var(--neutral)]">
                  _______à{" "}
                </span>
                la Fois
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Features;

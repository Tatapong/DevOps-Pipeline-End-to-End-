import { useInView } from "framer-motion";
import Link from "next/link";
import React, { useRef } from "react";
import { Slide } from "react-awesome-reveal";
import { BsPlayFill } from "react-icons/bs";

function Project() {
  const ref = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const inView2 = useInView(ref2, { once: true, amount: 0.4 });
  const inView3 = useInView(ref3, { once: true, amount: 0.4 });
  return (
    <div className="w-full bg-gradient-to-b from-transparent to-[var(--background-color)] border-b border-[var(--neutral-5)] mt-20 pb-32 pt-20">
      <div className="flex flex-col w-full  relative  max-w-6xl mx-auto px-10 z-0">
        <Slide
          cascade
          triggerOnce={true}
          direction="left"
          className="content-wrapper"
        >
          <div>
            <h1 className="text-[3.5rem] font-extrabold leading-tight text-[var(--neutral-3)] md:text-7xl md:leading-snug">
              Projects
            </h1>
          </div>
          <div>
            <p className="mt-4 text-2xl text-[var(--neutral)] md:mt-6 md:text-2xl lg:max-w-[500px] xl:max-w-[700px]">
              Showcase of Some of our work
            </p>
          </div>
        </Slide>
        <div
          className="mt-20"
          style={{
            transform: inView ? "none" : "translateX(150px)",
            opacity: inView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          ref={ref}
        >
          <h2 className="text-[var(--primary)] mb-2 block font-black lg:mb-4">
            Coinpay
          </h2>
          <p className="mb-4 text-3xl max-w-3xl font-black text-[var(--neutral-3)] lg:text-4xl">
            The Future of Live Stream Monetization
          </p>
          <p className="max-w-3xl text-[var(--neutral)]">
            Earn money while you connect with your audience! Coinpay is an app
            designed for live streamers to receive donations and tips
          </p>
          <div className="mt-4 md:mt-6">
            <Link
              href={"https://coinpay.com"}
              target="_blank"
              className="bg-[var(--secondary20)] w-fit h-fit py-1 px-3 rounded-full text-sm flex gap-1 items-center group text-[var(--secondary)]"
            >
              learn more
              <BsPlayFill className="pc:group-hover:translate-x-1 transition-all duration-500 rotate-[-30deg] pc:rotate-0" />
            </Link>
          </div>
        </div>
        <div
          className="mt-20"
          style={{
            transform: inView2 ? "none" : "translateX(-150px)",
            opacity: inView2 ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          ref={ref2}
        >
          <h2 className="text-[var(--primary)] mb-2 block font-black lg:mb-4">
            Lachofit
          </h2>
          <p className="mb-4 text-3xl max-w-3xl font-black text-[var(--neutral-3)] lg:text-4xl">
            Lachofit, Achieve Weight Loss and Fitness with Lachofit
          </p>
          <p className="max-w-3xl text-[var(--neutral)]">
            Lachofit is your day-to-day partner for weight loss, fitness, and
            mental health. Our approach combines exercise, diet, and mental
            well-being to help you achieve your health goals.
          </p>
          <div className="mt-4 md:mt-6">
            <Link
              href={"https://coinpay.com"}
              target="_blank"
              className="bg-[var(--secondary20)] w-fit h-fit py-1 px-3 rounded-full text-sm flex gap-1 items-center group text-[var(--secondary)]"
            >
              learn more
              <BsPlayFill className="pc:group-hover:translate-x-1 transition-all duration-500 rotate-[-30deg] pc:rotate-0" />
            </Link>
          </div>
        </div>
        <div
          className="mt-20"
          style={{
            transform: inView3 ? "none" : "translateX(150px)",
            opacity: inView3 ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          ref={ref3}
        >
          <h2 className="text-[var(--primary)] mb-2 block font-black lg:mb-4">
            Lachofit blog
          </h2>
          <p className="mb-4 text-3xl max-w-3xl font-black text-[var(--neutral-3)] lg:text-4xl">
            Lachofit Blog, Achieve Weight Loss and Fitness with Lachofit
          </p>
          <p className="max-w-3xl text-[var(--neutral)]">
            Lachofit is your day-to-day partner for weight loss, fitness, and
            mental health. Our approach combines exercise, diet, and mental
            well-being to help you achieve your health goals.
          </p>
          <div className="mt-4 md:mt-6">
            <Link
              href={"https://coinpay.com"}
              target="_blank"
              className="bg-[var(--secondary20)] w-fit h-fit py-1 px-3 rounded-full text-sm flex gap-1 items-center group text-[var(--secondary)]"
            >
              learn more
              <BsPlayFill className="pc:group-hover:translate-x-1 transition-all duration-500 rotate-[-30deg] pc:rotate-0" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;

"use client";

import React, { useEffect, useRef, useState } from "react";
import { MdPushPin } from "react-icons/md";
import { IoStatsChart } from "react-icons/io5";
import CountUp from "react-countup";
import { BsPlayFill } from "react-icons/bs";
import Link from "next/link";
import { getAllBlogs } from "@/functions/blog";
import { useInView } from "framer-motion";

function Blogs({ blogs }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <div className="w-full bg-[var(--background-color)] pb-32">
      <div className="flex flex-col w-full  relative  max-w-6xl mx-auto px-10 z-0">
        <div className="w-full tablet:w-[80%] pc:w-[70%]  self-end">
          <Link
            href={"/blog/slug"}
            className="flex flex-col w-full border border-[var(--neutral-5)] p-4 rounded-lg gap-2 mb-4 cursor-pointer"
            style={{
              transform: inView ? "none" : "translateX(150px)",
              opacity: inView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            ref={ref}
          >
            <div className="flex gap-2 items-center text-[var(--primary)] text-lg font-bold">
              <MdPushPin />
              Pinned Post
            </div>
            <div className="text-[var(--neutral)] text-xs">
              February 26, 2024
            </div>
            <div className="text-[var(--neutral-3)] text-2xl tablet:text-3xl">
              Tailwind CSS Best Practices
            </div>
            <div className="text-[var(--neutral)] text-sm">
              Tailwind CSS best practices, tips, and coding style that I always
              use.
            </div>
            <div className="flex gap-2 items-center text-[var(--neutral)] text-sm">
              <div className="flex gap-2 justify-center items-center">
                <IoStatsChart />
                <CountUp end={220} start={0} duration={3} /> Views
              </div>
              <div className="w-1 h-1 rounded-full bg-white"></div>
              <div className="flex justify-center items-center">
                <CountUp end={220} start={0} duration={3} /> Views
              </div>
            </div>
          </Link>
          {blogs.map((item, index) => (
            <Link
              href={`/blog/${item.slug}`}
              className="flex justify-between items-stretch gap-5 group mt-10 cursor-pointer"
              key={index}
            >
              <div className="hidden tablet:block w-32 h-[2px] bg-[var(--neutral-5)] mt-14"></div>
              <div className="flex flex-col w-full p-4 rounded-lg gap-2">
                <div className="text-[var(--neutral)] text-xs">{new Date(item.date).toDateString()}</div>
                <div className="text-[var(--neutral-3)] text-2xl tablet:text-3xl">
                  {item.title}
                </div>
                <div className="text-[var(--neutral)] text-sm ">
                  {item.description}
                </div>
                <div className="flex gap-2 items-center text-[var(--neutral)] text-sm">
                  <div className="flex gap-2 justify-center items-center">
                    <IoStatsChart />
                    <CountUp end={item.views} start={0} duration={3} /> Views
                  </div>
                  <div className="w-1 h-1 rounded-full bg-white"></div>
                  <div className="flex gap-2 justify-center items-center">
                    <CountUp end={item.shares} start={0} duration={3} /> Shares
                  </div>
                </div>
                <div className="flex gap-2 items-center text-[var(--primary)] text-sm font-bold">
                  Read more
                  <BsPlayFill className="group-hover:translate-x-1 transition-all duration-500 rotate-0" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blogs;

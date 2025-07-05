import { t } from "i18next";
import Link from "next/link";
import React from "react";
import { BiCalendarEvent } from "react-icons/bi";

function BlogBodyHeader({ blog }) {
  return (
    <div className="w-full bg-gradient-to-b from-transparent via-[var(--background-color)] to-[var(--background-color)] mt-20 pb-10 pt-20">
      <div className="flex flex-col w-full  relative  max-w-6xl mx-auto z-0 p-2 tablet:p-5">
        <div className="content-wrapper">
          <div>
            <div className="text-[1.5rem] font-extrabold leading-tight text-[var(--primary)] tablet:text-2xl mb-4">
              {blog.category}
            </div>
          </div>
          <div>
            <section className="text-[2.5rem] font-extrabold leading-tight text-[var(--neutral-3)] tablet:text-5xl">
              {blog.title}
            </section>
          </div>
          <div>
            <p className="mt-4 text-2xl text-[var(--neutral)] tablet:mt-6 tablet:text-2xl pc:max-w-[700px]">
              {/* Tailwind CSS best practices, tips, and coding style that I always
              use. */}
            </p>
          </div>
          <div>
            <p className="mt-6 text-sm flex items-center gap-2 text-[var(--neutral)] tablet:mt-6  pc:max-w-[700px]">
              <BiCalendarEvent /> {new Date(blog.date).toDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogBodyHeader;

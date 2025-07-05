"use client";

import React, { useEffect, useLayoutEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { t } from "i18next";
import { BiLike } from "react-icons/bi";
import CountUp from "react-countup";
import { IoShareOutline, IoStatsChart } from "react-icons/io5";
import Comments from "./comments";
import { backendUrl } from "@/data/url";

function BlogBody({ blog }) {
  // const [token, setToken] = useState("");
  const [likes, setLikes] = useState([]);
  const [headings, setHeadings] = useState([]);

  const getHeader = () => {
    const elements = Array.from(
      document.querySelectorAll("h1, h2, h3, h4")
    ).map((elem) => ({
      text: elem.innerText,
    }));
    setHeadings(elements);
  };

  useLayoutEffect(() => {
    setTimeout(() => {
      getHeader();
    }, 1000);
  }, []);

  useEffect(() => {
    const Getlikes = async () => {
      await fetch(`${backendUrl}/api/v1/likes`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setLikes(data.filter((item) => item.article === blog.id).length);
        });
    };
    Getlikes();
  }, []);

  const Likeblog = (id) => {
    fetch(`${backendUrl}/api/v1/likes/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        article: id,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        toast.success(<p className="text-green-400 text-xs">Liked!!</p>);
        setLikes((prev) => prev + 1);
      })
      .catch((error) => {
        toast.error(
          <p className="text-red-400 text-xs">
            {"Sorry Couldn't like try again later"}
          </p>
        );
      });
  };

  return (
    <div className="w-full bg-[var(--background-color)] pt-2 pb-32 text-[var(--neutral-3)]">
      <ToastContainer autoClose={1500} className="absolute top-20" />
      <div className="w-[80%] m-auto bg-[#1D263A] border-[0.5px] rounded-md border-[var(--neutral-5)] text-sm  block pc:hidden mb-10 mt-5">
        <div className="border-b-[0.5px] border-[var(--neutral-5)] p-2 text-center h-fit w-full text-[var(--neutral-3)]">
          Table of content
        </div>
        <div className="w-full mt-2 max-h-[70vh] pb-2 text-left">
          {headings.map((item, index) => (
            <p
              key={index}
              className="p-2 py-1 cursor-pointer hover:text-[var(--neutral-3)]"
            >
              {item.text}
            </p>
          ))}
        </div>
      </div>
      <div className="flex gap-10 w-full  relative tablet:border-l tablet:pl-24 border-[var(--neutral-5)]  max-w-6xl mx-auto px-10 z-0">
        <div className=" w-[99%] tablet:w-10/12 pc:w-8/12 text-[var(--neutral-3)]">
          <div className="border-b pb-12 border-[var(--neutral-5)] prose tablet:prose-lg pc:prose-xl !text-[var(--neutral-3)]">
            <article dangerouslySetInnerHTML={{ __html: blog.intro }}></article>
          </div>
          <div className="border-b pb-12 border-[var(--neutral-5)] prose tablet:prose-lg pc:prose-xl mb-20 !text-[var(--neutral-3)]">
            <article dangerouslySetInnerHTML={{ __html: blog.body }}></article>
          </div>
          <div className="mb-10">
            <Comments id={blog.id} />
          </div>
          <div className="w-full flex items-center sticky bottom-10 z-10 left-0">
            <div className="max-w-xs min-w-[200px] m-auto px-4 py-2 bg-black bg-opacity-20 backdrop-blur-lg flex justify-between rounded-lg">
              <div className="flex flex-col justify-center items-center gap-2">
                <BiLike
                  size={35}
                  className="cursor-pointer text-yellow-400 hover:scale-[1.08] transition-all duration-200"
                  title="like"
                  onClick={() => {
                    Likeblog(blog.id);
                  }}
                />{" "}
                <span>
                  <CountUp end={likes} start={0} duration={3} />
                </span>
              </div>
              <div className="flex flex-col justify-center items-center gap-2">
                <IoStatsChart
                  size={35}
                  className="cursor-pointer text-white hover:scale-[1.08] transition-all duration-200"
                  title="vue"
                />{" "}
                <span>
                  <CountUp end={230} start={0} duration={3} />
                </span>
              </div>
              <div className="flex flex-col justify-center items-center gap-2">
                <IoShareOutline
                  size={35}
                  className="cursor-pointer text-blue-400 hover:scale-[1.08] transition-all duration-200"
                  title="shared"
                />{" "}
                <span>
                  <CountUp end={12} start={0} duration={3} />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-4/12 bg-[#1D263A] border-[0.5px] rounded-md border-[var(--neutral-5)] text-sm sticky top-24 h-fit hidden pc:block">
          <div className="border-b-[0.5px] border-[var(--neutral-5)] p-2 text-center h-fit w-full text-[var(--neutral-3)]">
            Table of content
          </div>
          <div className="w-full mt-2 max-h-[70vh] pb-2 text-left">
            {headings.map((item, index) => (
              <p
                key={index}
                className="p-2 py-1 cursor-pointer hover:text-[var(--neutral-3)]"
              >
                {item.text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogBody;

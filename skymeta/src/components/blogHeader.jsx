import React from "react";

function BlogHeader() {
  return (
    <div className="w-full bg-gradient-to-b from-transparent to-[var(--background-color)] mt-20 pb-32 pt-20">
      <div className="flex flex-col w-full  relative  max-w-6xl mx-auto px-10 z-0">
        <div className="content-wrapper">
          <div>
            <h1 className="text-[3.5rem] font-extrabold leading-tight text-[var(--neutral-3)] md:text-7xl md:leading-snug dark:text-slate-300">
              Personal Blog
            </h1>
          </div>
          <div>
            <p className="mt-4 text-2xl text-[var(--neutral)] md:mt-6 md:text-2xl lg:max-w-[500px] xl:max-w-[700px] dark:text-slate-400">
              Web development thoughts and stories.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogHeader;

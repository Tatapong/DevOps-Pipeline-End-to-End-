import { Doc, Main2 } from "@/assets";
import Image from "next/image";
import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { useSelector } from "react-redux";

function TestimonyItem({ text, name, position }) {
  const language = useSelector((state) => state.languageReducer.language);

  return (
    <div className="bg-[var(--background-color)] bg-opacity-50 p-10 rounded-2xl w-full flex flex-col pc:flex-row">
      <div className="w-full pc:w-1/2 relative mt-[300px] pc:mt-0">
        <div className="absolute bottom-0 w-[300px] h-[300px] rounded-2xl bg-gradient-to-tr from-[var(--primary40)] to-[var(--primary20)]"></div>
        <div className="absolute bottom-[40px] left-[40px] w-[300px] h-[300px] rounded-2xl bg-gradient-to-tr from-[#FFFFFF] to-[#FFFFFF50] bg-opacity-50 flex justify-center items-center">
          <Image
            src={Doc}
            alt=""
            className="w-[230px] h-[230px] bg-black rounded-2xl border-4 border-[var(--primary)] object-cover"
          />
        </div>
      </div>
      <div className="relative w-full pc:w-1/2 flex flex-col mt-[30px] pc:mt-0">
        <div className="absolute top-0 left-0 self-start -mb-4">
          <FaQuoteLeft size={40} color="#8b5cf6" />
        </div>
        <span className="from-[var(--primary)] via-[var(--link)] to-[var(--secondary)] bg-gradient-to-r bg-clip-text text-transparent text-4xl mt-16 text-left font-bold">
          Outstanding
        </span>
        <div className="text-sm text-left mt-10 text-[var(neutral)]">
          {text}
        </div>
        <div className="mt-10 font-semibold text-left">
          {name} <span className="text-[var(--neutral)]"> {position}</span>
        </div>
      </div>
    </div>
  );
}

export default TestimonyItem;

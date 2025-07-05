import React from "react";
import Image from "next/image";
import {
  aerin,
  golden,
  google,
  hayden,
  microsoft,
  netflix,
  parker,
} from "@/assets";

function Partners() {
  return (
    <div className="w-full bg-[var(--background-color)]" id="partners">
      <div className="relative w-full h-[300px] items-center overflow-hidden flex">
        <div className="absolute top-0 left-0 w-[200px] tablet:w-[400px] h-[300px]  bg-gradient-to-r from-[var(--background-color)] to-transparent z-[2]"></div>
        <div className="absolute top-0 right-0 w-[200px] tablet:w-[400px] h-[300px] bg-gradient-to-r from-transparent to-[var(--background-color)] z-[2]"></div>
        <div className="slider flex">
          <div className="w-[250px] h-[200] p-10 flex justify-center items-center">
            <Image
              src={google}
              alt="google"
              className="grayscale cursor-pointer"
            />
          </div>
          <div className="w-[250px] h-[200] p-10 flex justify-center items-center">
            <Image
              src={netflix}
              alt="netflix"
              className="grayscale cursor-pointer"
            />
          </div>
          <div className="w-[250px] h-[200] p-10 flex justify-center items-center">
            <Image
              src={microsoft}
              alt="microsoft"
              className="grayscale cursor-pointer"
            />
          </div>
          <div className="w-[250px] h-[200] p-10 flex justify-center items-center">
            <Image
              src={aerin}
              alt="aerin"
              className="grayscale cursor-pointer"
            />
          </div>
          <div className="w-[250px] h-[200] p-10 flex justify-center items-center">
            <Image
              src={golden}
              alt="golden"
              className="grayscale cursor-pointer"
            />
          </div>
          <div className="w-[250px] h-[200] p-10 flex justify-center items-center">
            <Image
              src={hayden}
              alt="hayden"
              className="grayscale cursor-pointer"
            />
          </div>
          <div className="w-[250px] h-[200] p-10 flex justify-center items-center">
            <Image
              src={parker}
              alt="parker"
              className="grayscale cursor-pointer"
            />
          </div>
        </div>
        <div className="slider flex">
          <div className="w-[250px] h-[200] p-10 flex justify-center items-center">
            <Image
              src={google}
              alt="google"
              className="grayscale cursor-pointer"
            />
          </div>
          <div className="w-[250px] h-[200] p-10 flex justify-center items-center">
            <Image
              src={netflix}
              alt="netflix"
              className="grayscale cursor-pointer"
            />
          </div>
          <div className="w-[250px] h-[200] p-10 flex justify-center items-center">
            <Image
              src={microsoft}
              alt="microsoft"
              className="grayscale cursor-pointer"
            />
          </div>
          <div className="w-[250px] h-[200] p-10 flex justify-center items-center">
            <Image
              src={aerin}
              alt="aerin"
              className="grayscale cursor-pointer"
            />
          </div>
          <div className="w-[250px] h-[200] p-10 flex justify-center items-center">
            <Image
              src={golden}
              alt="golden"
              className="grayscale cursor-pointer"
            />
          </div>
          <div className="w-[250px] h-[200] p-10 flex justify-center items-center">
            <Image
              src={hayden}
              alt="hayden"
              className="grayscale cursor-pointer"
            />
          </div>
          <div className="w-[250px] h-[200] p-10 flex justify-center items-center">
            <Image
              src={parker}
              alt="parker"
              className="grayscale cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partners;

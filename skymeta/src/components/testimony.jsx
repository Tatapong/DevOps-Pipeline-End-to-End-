"use client";

import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoChevronBack } from "react-icons/io5";
import { SwiperSlide, Swiper } from "swiper/react";
import TestimonyItem from "./testimany_item";
import { useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import { useSelector } from "react-redux";
import { t } from "i18next";

function Testimony() {
  const language = useSelector((state) => state.languageReducer.language);

  return (
    <div className="w-full bg-[var(--background-color)] pb-36 pt-10 tablet:pt-20">
      <div className="w-full items-center relative px-10 z-0 max-w-6xl mx-auto">
        <div className="font-bold text-[30px] mobilelg:text-[40px] text-[var(--neutral-3)] mt-4 relative group cursor-pointer">
          {t("What Our")}{" "}
          <span className="from-[var(--primary)] via-[var(--link)] to-[var(--secondary)] bg-gradient-to-r bg-clip-text text-transparent">
            {" "}
            {t("Clients")}{" "}
          </span>
          {t("Says")}
          <div className="absolute bottom-2 w-10 h-1 bg-[var(--secondary)] transition-all duration-500 group-hover:w-56 group-hover:h-2"></div>
        </div>
        <div className="font-bold text-[var(--neutral-4)] max-w-2xl mt-4 mb-10">
          {t(
            "testimonial content"
          )}
        </div>
        <div className="slider-space">
          <Swiper
            slidesPerView={"auto"}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            centeredSlides={true}
            spaceBetween={40}
            modules={[Autoplay, Pagination]}
            className="w-full flex pb-10 items-stretch"
          >
            <SwiperSlide className="flex text-center justify-center w-full">
              <TestimonyItem
                text={
                  "I've been using Skymeta for my business for the past year and it has completely transformed the way we operate. The features are intuitive and easy to use, and the customer support team is always available to help with any questions or issues. I highly recommend Skymeta to any business looking to streamline their processes and improve efficiency. "
                }
                name={"Anne Sophie"}
                position={"Head of Idea"}
              />
            </SwiperSlide>
            <SwiperSlide className="flex text-center justify-center w-full">
              <TestimonyItem
                text={
                  "Skymeta has been a game changer for our organization. Not only has it helped us to streamline our processes and increase efficiency, but the customer support team has been incredibly helpful and responsive. We've been using Skymeta for several years now and have no plans to switch to a different platform."
                }
                name={"Jean Yves"}
                position={"IT personnel"}
              />
            </SwiperSlide>
            {/* <SwiperSlide className="flex text-center justify-center w-full">
              <TestimonyItem
                text={
                  "Je suis impressionné par l'entreprise Halo. Leur charte graphique de qualité supérieure a attiré de nouveaux clients et fidélisé les existants. L'équipe était professionnelle, compétente et patiente tout au long du processus. Je recommande vivement Halo pour améliorer son image de marque et augmenter sa clientèle"
                }
                name={"François Dupont"}
              />
            </SwiperSlide> */}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Testimony;

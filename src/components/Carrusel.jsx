import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import illustrationIcon from "../assets/section-icons/illustration-icon.svg";
import infographicsIcon from "../assets/section-icons/infographics.svg";
import logoIcon from "../assets/section-icons/logo-icon.svg";
import mediaIcon from "../assets/section-icons/media-icon.svg";
import productIcon from "../assets/section-icons/product-icon.svg";
import webIcon from "../assets/section-icons/web-icon.svg";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

const Carrusel = ({ onButtonClick }) => {
  return (
    <div className=" w-ful h-auto py-18">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        spaceBetween={20}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: false,
        }}
        breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: 1, // En pantallas pequeñas solo se muestra 1 slide
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 2, // En pantallas medianas se muestran 2 slides
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 5, // En pantallas grandes se muestran 3 slides
          },
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className=" md:w-[650px] w-[320px] lg:w-[1000px] md:h-[500px] h-[400px] p-14  "
      >
        <SwiperSlide>
          <button
            onClick={() => onButtonClick("infographics")}
            className=" flex flex-col w-[192px] h-[250px]  sm:w-[264px] sm:h-[356px] rounded-3xl bg-black shadow-card"
          >
            <img
              src={infographicsIcon}
              alt=""
              className=" w-[136] h-auto]
               object-contain"
            />
          </button>
        </SwiperSlide>

        <SwiperSlide>
          <button
            onClick={() => onButtonClick("media-section")}
            className=" flex flex-col w-[192px] h-[250px]  sm:w-[264px] sm:h-[356px] rounded-3xl bg-black shadow-card"
          >
            <img
              src={mediaIcon}
              alt=""
              className=" w-[136] h-auto]
        object-contain"
            />
          </button>
        </SwiperSlide>

        <SwiperSlide>
          <button
            onClick={() => onButtonClick("logos")}
            className=" flex flex-col  w-[192px] h-[250px]  sm:w-[264px] sm:h-[356px] rounded-3xl bg-black shadow-card
       "
          >
            <img
              src={logoIcon}
              alt=""
              className=" w-[136] h-auto 
        object-contain"
            />
          </button>
        </SwiperSlide>

        <SwiperSlide onClick={() => onButtonClick("products")}>
          <button
            className=" flex flex-col  w-[192px] h-[250px]  sm:w-[264px] sm:h-[356px] rounded-3xl bg-black shadow-card
       "
          >
            <img
              src={productIcon}
              alt=""
              className=" w-[136] h-auto 
        object-contain"
            />
          </button>
        </SwiperSlide>

        <SwiperSlide>
          <button
            onClick={() => onButtonClick("illustration")}
            className=" flex flex-col  w-[192px] h-[250px]  sm:w-[264px] sm:h-[356px] rounded-3xl bg-black shadow-card
       "
          >
            <img
              src={illustrationIcon}
              alt=""
              className=" w-[136] h-auto 
        object-contain"
            />
          </button>
        </SwiperSlide>

        <SwiperSlide>
          <button
            className=" flex flex-col  w-[192px] h-[250px]  sm:w-[264px] sm:h-[356px] rounded-3xl bg-black shadow-card
       "
            onClick={() => onButtonClick("web")}
          >
            <img
              src={webIcon}
              alt=""
              className=" w-[136] h-auto 
                object-contain"
            />
          </button>
        </SwiperSlide>

        <div>
          <div className="swiper-button-prev slider-arrow bg-button rounded-full  p-6   md:p-9 sm:top-56 top-44 text-gray-700 shadow-button active:scale-110"></div>
          <div className="swiper-button-next slider-arrow  bg-button rounded-full  p-6 md:p-9 sm:top-56  top-44 text-gray-700 shadow-button active:scale-110"></div>
        </div>
      </Swiper>
    </div>
  );
};

export default Carrusel;

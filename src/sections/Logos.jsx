import { Swiper, SwiperSlide } from "swiper/react";

import { amez } from "../assets/logos";
import { amezt } from "../assets/logos";
import { argin } from "../assets/logos";
import { education } from "../assets/logos";
import { green } from "../assets/logos";
import { suit } from "../assets/logos";
import { teach } from "../assets/logos";

import { arrowPrev } from "../assets/icons";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

import React from "react";

const Logos = () => {
  return (
    <section
      id="logos"
      href="/logos"
      className="w-full  flex flex-row max-lg:flex-col gap-12 lg:gap-16 my-6 md:my-16 px-9  "
    >
      <div>{/*NAV */}</div>

      <div className=" flex flex-1 flex-col max-w-[890px] h-auto justify-around items-center  ">
        <a className="absolute z-10 bottom-28">
          <img src={arrowPrev} alt="back" width={20} height={20} />
        </a>
        <h3 className="text-[32px] font-kumb text-center mb-2 md:mb-8 ">
          LOGOS
        </h3>

        <div className="">
          <Swiper
            pagination={{
              type: "fraction",
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            spaceBetween={100}
            className="mySwiper w-[300px] md:w-[500px] h-auto md:p-8  "
          >
            <SwiperSlide className=" flex justify-center items-center h-[285px] md:h-[450px] ">
              <img
                src={amez}
                alt=""
                className="p-6 object-contain h-full max-h-full "
              />
            </SwiperSlide>
            <SwiperSlide className="flex justify-center items-center mb-7 md:mb-0 h-[285px] md:h-[450px] ">
              <img
                src={amezt}
                alt=""
                className="p-6 object-contain h-full max-h-full "
              />
            </SwiperSlide>

            <SwiperSlide className="flex justify-center items-center h-[285px] md:h-[450px] ">
              <img
                src={argin}
                alt=""
                className=" p-6 object-contain h-full max-h-full "
              />
            </SwiperSlide>

            <SwiperSlide className="flex justify-center items-center h-[285px] md:h-[450px] ">
              <img
                src={education}
                alt=""
                className="p-6 object-contain h-full max-h-full"
              />
            </SwiperSlide>

            <SwiperSlide className="flex justify-center items-center h-[285px] md:h-[450px] ">
              <img
                src={green}
                alt=""
                className="p-6 object-contain h-full max-h-full"
              />
            </SwiperSlide>

            <SwiperSlide className="flex justify-center items-center h-[285px] md:h-[450px] ">
              <img
                src={suit}
                alt=""
                className="p-6 object-contain h-full max-h-full"
              />
            </SwiperSlide>

            <SwiperSlide className="flex justify-center items-center h-[285px] md:h-[450px] ">
              <img
                src={teach}
                alt=""
                className="p-6 object-contain h-full max-h-full"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="flex flex-col w-full flex-1 ">
        <h4 className="text-[28px] md:text-[32px] font-kumb font-semibold text-center">
          Visual Identity
        </h4>
        <div className="flex flex-col justify-center items-center mt-16 gap-16">
          <p className="text-[28px] font-kumb font-semibold ">Skills</p>
          <div className=" flex flex-col gap-16 justify-center items-center">
            <div className=" flex flex-wrap gap-5 items-center justify-center">
              <div className="w-[90px] h-[50px] md:w-[110px] md:h-[60px]   rounded-full bg-illustrator flex items-center justify-center">
                <p className="text-white text-2xl md:text-2xl font-semibold font-kumb p-3">
                  Ai
                </p>
              </div>
            </div>

            <p className="text-justify font-kumb ">
              I have designed logos for a range of companies in various sectors,
              including importation, activity centers, biodegradable disposable
              products, luxury apartments for Airbnb, and a cleaning company in
              Montreal, AMEZ, for which I also developed the complete corporate
              identity, including business cards. Each design reflects a
              minimalist style, ensuring that every logo communicates the
              brand's image clearly and elegantly. My approach is focused on
              crafting creative visual identities that provide a market
              differentiation, allowing each brand to stand out in a unique and
              memorable way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Logos;

import { banamex } from "../assets/web";
import { banamexDesign } from "../assets/web";
import { banamex2 } from "../assets/web";
import { cardBanamex } from "../assets/web";

import { Swiper, SwiperSlide } from "swiper/react";

import { arrowPrev } from "../assets/icons";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

const Web = () => {
  return (
    <section
      href="/web"
      id="web"
      className="w-full  flex flex-row max-lg:flex-col gap-12 lg:gap-16 my-6 md:my-16 px-9  "
    >
      <div>{/*NAV */}</div>

      <div className=" flex flex-1 flex-col max-w-[890px] h-auto justify-around items-center  ">
        <h3 className="text-[32px] font-kumb text-center mb-2 md:mb-8 ">
          WEB DESIGN
        </h3>

        <div>
          <Swiper
            pagination={{
              type: "fraction",
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            spaceBetween={100}
            className="mySwiper w-[300px] md:w-[500px] h-auto md:p-8  "
          >
            <SwiperSlide className="flex justify-center items-center h-[285px] md:h-[450px]">
              <a href="https://unrivaled-souffle-e70de5.netlify.app/#about-us">
                click here / AMEZ
              </a>
            </SwiperSlide>

            <SwiperSlide className="flex justify-center items-center mb-7 md:mb-0 h-[285px] md:h-[450px] ">
              <img
                src={banamex}
                alt=""
                className="p-6 object-contain h-full max-h-full "
              />
            </SwiperSlide>

            <SwiperSlide className="flex justify-center items-center h-[285px] md:h-[450px] ">
              <img
                src={banamexDesign}
                alt=""
                className=" p-6 object-contain h-full max-h-full "
              />
            </SwiperSlide>

            <SwiperSlide className="flex justify-center items-center h-[285px] md:h-[450px] ">
              <img
                src={banamex2}
                alt=""
                className="p-6 object-contain h-full max-h-full"
              />
            </SwiperSlide>

            <SwiperSlide className="flex justify-center items-center h-[285px] md:h-[450px] ">
              <img
                src={cardBanamex}
                alt=""
                className="p-6 object-contain h-full max-h-full"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="flex flex-col w-full flex-1 ">
        <h4 className="text-[28px] md:text-[32px] font-kumb font-semibold text-center">
          Front-end
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

              <div className="w-[90px] h-[50px] md:w-[110px] md:h-[60px]   rounded-full bg-html flex items-center justify-center">
                <p className="text-white text-2xl md:text-2xl font-semibold font-kumb p-3">
                  Html
                </p>
              </div>

              <div className="w-[90px] h-[50px] md:w-[110px] md:h-[60px]   rounded-full bg-css flex items-center justify-center">
                <p className="text-white text-2xl md:text-2xl font-semibold font-kumb p-3">
                  Css
                </p>
              </div>

              <div className="w-[90px] h-[50px] md:w-[110px] md:h-[60px]   rounded-full bg-js flex items-center justify-center">
                <p className="text-white text-2xl md:text-2xl font-semibold font-kumb p-3">
                  Js
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-justify font-kumb ">
                This section showcases a design proposal for the homepage of a
                banking app and website for AMEZ company. This project was
                conceived entirely from scratch, starting with the brand’s logo
                design and extending to the website’s development using HTML,
                CSS, and JavaScript
              </p>
              <ul>
                <li className="font-kumb">
                  <br />
                  <span className="font-kumb font-bold">
                    - Minimalistic and brand-focused design:
                  </span>
                  maintaining the essence of the brand through clean and
                  visually cohesive layouts.
                </li>

                <li className="font-kumb">
                  <br />
                  <span className="font-kumb font-bold">
                    - User Experience (UX):
                  </span>
                  Crafting intuitive navigation and interactive elements to
                  enhance usability.
                </li>

                <li className="font-kumb">
                  <br />
                  <span className="font-kumb font-bold">
                    - Responsive Design:
                  </span>
                  Ensuring seamless performance and aesthetics across devices
                  and screen sizes.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Web;

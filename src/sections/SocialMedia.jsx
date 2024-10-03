import { useEffect } from "react";

import { bat } from "../assets/social-media";
import { bear } from "../assets/social-media";
import { foodInfo } from "../assets/social-media";
import { glass } from "../assets/social-media";
import { greenMkt } from "../assets/social-media";
import { luciano } from "../assets/social-media";
import { lucianoLikes } from "../assets/social-media";
import { ocean } from "../assets/social-media";
import { seminarioLikes } from "../assets/social-media";
import { sneakers } from "../assets/social-media";
import { sneakersLikes } from "../assets/social-media";
import { treeInfo } from "../assets/social-media";
import { waste } from "../assets/social-media";
import { youtuber } from "../assets/social-media";

import { Swiper, SwiperSlide } from "swiper/react";

import { arrowPrev } from "../assets/icons";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

const SocialMedia = () => {
  useEffect(() => {
    const section = document.getElementById("media-section");
    if (window.location.hash === "#media-section" && section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <section
      href="/media-section"
      className="w-full  flex flex-row max-lg:flex-col gap-12 lg:gap-16 my-6 md:my-16 px-9  "
    >
      <div>{/*NAV */}</div>

      <div className=" flex flex-1 flex-col max-w-[890px] h-auto justify-around items-center  ">
        <a className="absolute z-10 bottom-28">
          <img src={arrowPrev} alt="back" width={20} height={20} />
        </a>
        <h3 className="text-[32px] font-kumb text-center mb-2 md:mb-8 ">
          MEDIA CONTENT
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
            <SwiperSlide className="flex justify-center items-center h-[510px] md:h-[555px] ">
              <img
                src={sneakers}
                alt=""
                className="p-6 object-contain h-full max-h-full "
              />
            </SwiperSlide>
            <SwiperSlide className="flex justify-center items-center h-[510px] md:h-[555px] ">
              <img
                src={sneakersLikes}
                alt=""
                className="p-6 object-contain h-full max-h-full "
              />
            </SwiperSlide>

            <SwiperSlide className="flex justify-center items-center h-[510px] md:h-[555px] ">
              <img
                src={seminarioLikes}
                alt=""
                className=" p-6 object-contain h-full max-h-full "
              />
            </SwiperSlide>

            <SwiperSlide className="flex justify-center items-center h-[510px] md:h-[555px] ">
              <img
                src={luciano}
                alt=""
                className="p-6 object-contain h-full max-h-full"
              />
            </SwiperSlide>

            <SwiperSlide className="flex justify-center items-center h-[510px] md:h-[555px] ">
              <img
                src={lucianoLikes}
                alt=""
                className="p-6 object-contain h-full max-h-full"
              />
            </SwiperSlide>

            <SwiperSlide className="flex justify-center items-center h-[510px] md:h-[555px] ">
              <img
                src={bat}
                alt=""
                className="p-6 object-contain h-full max-h-full"
              />
            </SwiperSlide>

            <SwiperSlide className="flex justify-center items-center h-[510px] md:h-[555px] ">
              <img
                src={glass}
                alt=""
                className="p-6 object-contain h-full max-h-full"
              />
            </SwiperSlide>

            <SwiperSlide className="flex justify-center items-center h-[510px] md:h-[555px] ">
              {" "}
              <img
                src={bear}
                alt=""
                className="p-6 object-contain h-full max-h-full"
              />
            </SwiperSlide>

            <SwiperSlide className="flex justify-center items-center h-[510px] md:h-[555px] ">
              {" "}
              <img
                src={youtuber}
                alt=""
                className="p-6 object-contain h-full max-h-full"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="flex flex-col w-full flex-1 ">
        <h4 className="text-[28px] md:text-[32px] font-kumb font-semibold text-center">
          Content Design and Published Contributions
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

              <div className="w-[120px] h-[50px] md:w-[140px] md:h-[60px]  text-center p-8 rounded-full bg-blue-500 flex items-center justify-center">
                <p className="text-white text-md md:text-lg font-semibold font-kumb ">
                  Facebook Adds
                </p>
              </div>
            </div>

            <p className="text-justify font-kumb ">
              I conducted a Product Sales Share Analysis for a company
              specializing in the import and sale of vehicle parts for
              transportation. The analysis covered a 3-year sales period
              (2016-2018) and identified products with the highest and lowest
              turnover across different product lines, aiming to optimize stock
              flow and the company's financial resources. To provide a clear and
              objective understanding of the analyzed data and results to the
              company's owner, I created an infographic that effectively
              visualized the findings.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;

import { info } from "../assets/info";
import { bat } from "../assets/social-media";
import { Swiper, SwiperSlide } from "swiper/react";

import { arrowPrev } from "../assets/icons";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

const Infographics = () => {
  return (
    <section
      id="infographics"
      href="/info-section"
      className="w-full  flex flex-row max-lg:flex-col gap-16 my-16 px-9  "
    >
      <div>{/*NAV */}</div>

      <div className=" flex flex-1 flex-col max-w-[890px] h-auto justify-around items-center  ">
        <a className="absolute z-10 bottom-28">
          <img src={arrowPrev} alt="back" width={20} height={20} />
        </a>
        <h3 className="text-[32px] font-kumb text-center mb-16 ">
          INFOGRAPHICS
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
            <SwiperSlide>
              {" "}
              <img
                src={info}
                alt=""
                className="w-full h-auto p-6 object-contain m-4 lg:m-0 "
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img
                src={bat}
                alt=""
                className="w-full h-auto p-6 object-contain "
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="flex flex-col w-full flex-1 ">
        <h4 className="text-[28px] md:text-[32px] font-kumb font-semibold text-center">
          Analysis of sales participation by products
        </h4>
        <div className="flex flex-col justify-center items-center mt-16 gap-16">
          <p className="text-[28px] font-kumb font-semibold ">Skills</p>
          <div className=" flex flex-col gap-16 justify-center items-center">
            <div className=" flex flex-wrap gap-5">
              <div className="w-[90px] h-[50px] md:w-[110px] md:h-[60px]   rounded-full bg-illustrator flex items-center justify-center">
                <p className="text-white text-2xl md:text-2xl font-semibold font-kumb p-3">
                  Ai
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

export default Infographics;

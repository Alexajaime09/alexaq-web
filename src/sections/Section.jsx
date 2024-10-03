import {} from "../assets/social-media";

import { Swiper, SwiperSlide } from "swiper/react";

import { arrowPrev } from "../assets/icons";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

const Section = () => {
  return (
    <section
      href="/info-section"
      className="w-full  flex flex-row max-lg:flex-col gap-16 my-16 px-9  "
    >
      <div>{/*NAV */}</div>

      <div className=" flex flex-1 flex-col max-w-[890px] h-auto justify-around items-center  ">
        <a className="absolute z-10 bottom-28">
          <img src={arrowPrev} alt="back" width={20} height={20} />
        </a>
        <h3 className="text-[32px] font-kumb text-center mb-16 "></h3>

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
                src={info}
                alt=""
                className="w-full h-auto p-6 object-contain "
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="flex flex-col w-full flex-1 ">
        <h4 className="text-[28px] md:text-[32px] font-kumb font-semibold text-center"></h4>
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
              These designs are focused on event promotion and the creation of
              attractive and strategic content. My process involved choose the
              goal, select the subject, searching information, set the most
              important points, conceptualizing the idea to its post in social
              media. I ensured that the message was communicated clearly and
              effectively, capturing the attention of the target audience. Each
              graphic element was designed to maximize engagement on digital
              platforms, improving both event visibility and the organic reach
              of the content.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;

import { caseFoot } from "../assets/illustration";
import { faro } from "../assets/illustration";
import { bgsic } from "../assets/illustration";

import { Swiper, SwiperSlide } from "swiper/react";

import { arrowPrev } from "../assets/icons";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

const Illustration = () => {
  return (
    <section
      id="illustration"
      href="/illustration"
      className="w-full  flex flex-row max-lg:flex-col gap-12 lg:gap-16 my-6 md:my-16 px-9  "
    >
      <div>{/*NAV */}</div>

      <div className=" flex flex-1 flex-col max-w-[890px] h-auto justify-around items-center  ">
        <h3 className="text-[32px] font-kumb text-center mb-2 md:mb-8 ">
          ILLUSTRATION
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
            <SwiperSlide className="flex justify-center items-center mb-7 md:mb-0 h-[285px] md:h-[450px] ">
              <img
                src={caseFoot}
                alt=""
                className="p-6 object-contain h-full max-h-full "
              />
            </SwiperSlide>

            <SwiperSlide className="flex justify-center items-center h-[285px] md:h-[450px] ">
              <img
                src={faro}
                alt=""
                className=" p-6 object-contain h-full max-h-full "
              />
            </SwiperSlide>

            <SwiperSlide className="flex justify-center items-center h-[285px] md:h-[450px] ">
              <img
                src={bgsic}
                alt=""
                className="p-6 object-contain h-full max-h-full"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="flex flex-col w-full flex-1 ">
        <h4 className="text-[28px] md:text-[32px] font-kumb font-semibold text-center">
          Personal Projects
        </h4>
        <div className="flex flex-col justify-center items-center mt-16 gap-16">
          <p className="text-[28px] font-kumb font-semibold ">Skills</p>
          <div className=" flex flex-col gap-16 justify-center items-center">
            <div className=" flex flex-wrap gap-5 items-center justify-center">
              <div className="w-[90px] h-[50px] md:w-[110px] md:h-[60px]   rounded-full bg-ps flex items-center justify-center">
                <p className="text-white text-2xl md:text-2xl font-semibold font-kumb p-3">
                  Ps
                </p>
              </div>
              <div className="w-[90px] h-[50px] md:w-[110px] md:h-[60px]   rounded-full bg-illustrator flex items-center justify-center">
                <p className="text-white text-2xl md:text-2xl font-semibold font-kumb p-3">
                  Ai
                </p>
              </div>
            </div>

            <p className="text-justify font-kumb ">
              I performed photo editing for a vodka brand’s product catalog,
              focusing on enhancing the visual appeal. This included color
              correction, retouching, and adjusting lighting to meet the brand’s
              standards. Addionally, I took and edited photos of luxury
              apartment and its facilities to create compelling promotional
              material that effectively communicated the property’s services and
              amenities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Illustration;

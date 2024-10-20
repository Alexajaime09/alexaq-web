import { content } from "../assets/services-icons";
import { designer } from "../assets/services-icons";
import { web } from "../assets/services-icons";

const Services = () => {
  return (
    <section
      id="services"
      className="relative flex flex-col justify-between items-center gap-12 md:gap-16 w-full h-auto px-9  bg-proyect py-7 "
    >
      <h2 className="  my-[70px] md:my-[90px]   font-kumb  text-[30px]  md:text-[38px]  lg:text-4xl tracking-title">
        SERVICES
      </h2>

      <div className="flex flex-wrap lg:flex-row justify-around sm:items-center w-full lg:h-[750px] md:h-[1000px] h-[1400px]   ">
        <div
          className=" flex flex-col items-center  w-[250px] h-[420px] lg:w-[320px] lg:h-[490px] rounded-3xl bg-black shadow-services
        px-5 py-9 gap-8"
        >
          <h3 className="text-white text-base lg:text-lg">GRAPHIC DESIGNER</h3>
          <div className=" w-[100px] h-[110px] lg:w-[130px] lg:h-[120px] bg-card rounded-2xl lg:rounded-3xl flex justify-center items-center pt-3 ">
            <img
              src={designer}
              alt=""
              className="  w-[60px] lg:w-[80px] h-auto
               object-contain"
            />
          </div>
          <p className="text-white text-justify  text-sm lg:text-base ">
            • Logo creation and brand identity design. <br /> • Design of
            promotional mterials (flyers, posters, banners). <br /> •
            Development of infographics and visual presentations. <br /> •
            Creation of visual elements for events (badges, banners,etc). <br />{" "}
            • Custom illustrations and visual graphics.
          </p>
        </div>

        <div
          className=" flex flex-col items-center  w-[250px] h-[420px] lg:w-[320px] lg:h-[490px] rounded-3xl bg-black shadow-services
        px-5 py-9 gap-8"
        >
          <h3 className="text-white text-base lg:text-lg"> MEDIA CONTENT </h3>
          <div className=" w-[100px] h-[110px] lg:w-[130px] lg:h-[120px] bg-card rounded-2xl lg:rounded-3xl flex justify-center items-center pt-3 ">
            <img
              src={content}
              alt=""
              className=" w-[60px] lg:w-[80px] h-auto
               object-contain"
            />
          </div>
          <p className="text-white text-justify  text-sm lg:text-base ">
            • Design graphics and banners for social media platforms. <br /> •
            Creation of content calendars and strategic planning. <br /> • Photo
            and video editing for digital content.
          </p>
        </div>

        <div
          className=" flex flex-col items-center  w-[250px] h-[420px] lg:w-[320px] lg:h-[490px]  rounded-3xl bg-black shadow-services
        px-5 py-9 gap-8"
        >
          <h3 className="text-white text-base lg:text-lg"> WEB DESIGN</h3>
          <div className=" w-[100px] h-[110px] lg:w-[130px] lg:h-[120px] bg-card rounded-2xl lg:rounded-3xl flex justify-center items-center pt-3 ">
            <img
              src={web}
              alt=""
              className=" w-[60px] lg:w-[80px] h-auto
               object-contain"
            />
          </div>
          <p className="text-white text-justify text-sm lg:text-base ">
            • Development of creative user interfaces using Html, CSS,
            JavaScript, React. <br />• Responsive design implementation with
            Tailwind CSS. <br /> • Creation of reusables components in React.{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;

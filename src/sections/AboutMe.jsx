import profilePhoto from "../assets/profile-photo.png";

const AboutMe = () => {
  return (
    <section
      id="about-me"
      className="flex relative lg:flex-row flex-col justify-center mb-[3.75rem] items-center h-auto gap-10 w-full "
    >
      <div
        className=" relative top-16 max-sm:top-12 flex flex-1 justify-center items-center w-full
        bg-gradient-to-tr from-[#212121] via-[#212121] to-[#000000] "
      >
        <img
          src={profilePhoto}
          alt="photo"
          className="w-full  max-w-xs sm:max-w-md md:max-w-[480px] mt-0 lg:mt-5 h-auto p-7"
        />
      </div>
      <div
        className="relative top-0 flex flex-col flex-1 justify-center items-center w-full min-lg:pr-5 px-9 max-lg:pt-16 
      "
      >
        <h2 className="my-10 font-kumb tracking-proyect  max-lg:text-2xl  text-4xl tracking-title">
          ABOUT ME
        </h2>
        <p className="text-justify flex font-kumb text-xl text-slate-600 leading-9">
          Marketing Professional with experience in Graphic Design, Frontend
          Development, and UI knowledge. I specialize in designing the visual
          identity of a brand, which includes creating logos, business cards,
          creative advertising materials, social media content and website
          design aligned with the brand's image, ensuring consistent, friendly
          experience user and impactful visual communication.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;

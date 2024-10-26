import React from "react";
import Carrusel from "../components/Carrusel";
import { useState } from "react";
import Infographics from "./Infographics";
import Products from "./Products";
import SocialMedia from "./SocialMedia";
import Illustration from "./Illustration";
import Web from "./Web";
import Logos from "./Logos";

const Works = () => {
  const [activeContent, setActiveContent] = useState(null);

  const handleButton = (content) => {
    setActiveContent(content);
  };

  return (
    <section
      id="works"
      className="relative w-full flex justify-center items-center  gap-12 md:gap-16  flex-col h-[auto] bg-proyect py-7 "
    >
      <div className="flex w-full justify-center ">
        <h2 className="  mt-[30px] lg:mt-14 lg:mb-0  font-kumb text-[30px]  md:text-[38px] lg:text-4xl tracking-title">
          WORKS
        </h2>
      </div>

      <div className=" flex w-full justify-center items-start ">
        <Carrusel onButtonClick={handleButton} />
      </div>

      {activeContent === "infographics" && <Infographics />}
      {activeContent === "logos" && <Logos />}
      {activeContent === "products" && <Products />}
      {activeContent === "illustration" && <Illustration />}
      {activeContent === "web" && <Web />}
      {activeContent === "media-section" && <SocialMedia />}
    </section>
  );
};

export default Works;

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
      className="relative w-full flex justify-center items-center  gap-12 md:gap-16  flex-col h-[auto] bg-proyect py-18 "
    >
      <div className="flex w-full justify-center ">
        <h2 className="  my-[70px] md:my-[90px]  font-kumb text-[30px]  md:text-[38px] lg:text-4xl tracking-title">
          WORKS
        </h2>
      </div>

      <div className=" flex w-full justify-center ">
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

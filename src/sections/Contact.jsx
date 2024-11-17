import React from "react";

import { contact, envelop } from "../assets/conctact-icons";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative w-full h-auto flex justify-center items-center  gap-12 md:gap-16  flex-col bg-black p-9 mb-10  py-18 "
    >
      <div className="flex w-full h-[350px] flex-col justify-center items-center ">
        <h2 className=" text-white  my-[70px] font-kumb text-[30px]  md:text-[38px] lg:text-4xl tracking-title">
          CONTACT
        </h2>

        <div className="w-full flex  h-[400px] ">
          <div className="flex flex-col md:flex-row w-full justify-around items-center ">
            <div className="flex items-center">
              <div>
                <img
                  src={contact}
                  alt="number"
                  className="w-8 h-auto
                     m-4"
                />
              </div>
              <div className="flex flex-col">
                <p className="text-white"> </p>{" "}
                {/*Phone numer: +1 438 989 5653*/}
                <p className="text-white"> </p>
                {/*Whatsapp: +52 56 37120792*/}
              </div>
            </div>

            <div className="flex items-center">
              <div>
                <img
                  src={envelop}
                  alt="email"
                  className="w-12 h-auto
                     m-4"
                />
              </div>
              <div className="flex flex-col ">
                <p className="text-white"> alexaquezada23@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

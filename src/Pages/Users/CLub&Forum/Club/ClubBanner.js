import React from 'react';
import { ImSearch } from "react-icons/im";
import bg from "../../../../Assets/background/forumBG.png";
const ClubBanner = () => {
    return (
      <div>
        <div>
          <div className="bg-[#DAF6FC] md:pt-60 pt-40 h-screen relative">
            <div className=" hidden md:block">
              <img
                className="  absolute opacity-50 -mb-11 w-full bottom-0"
                src={bg}
                alt=""
              />
            </div>
            <div className="relative overflow-hidden mx-auto">
              <h1 className="md:text-4xl text-3xl  font-bold capitalize text-[#1D2746] text-center">
                WELCOME TO COMPUTER CLUB 
              </h1>
              <h2 className="text-xl text-center mx-auto capitalize text-black md:w-5/12 my-7 w-9/12">
                The most popular forum on the internet!
              </h2>
            </div>
            <div className="relative overflow-hidden md:w-5/12 w-11/12 p-0 mx-auto">
              <input
                type="text"
                className="  placeholder-[#6B707F] px-10 md:text-lg text-sm font-mono input py-10 w-full text-black bg-white"
                placeholder="Find the Topic"
              />
              <h1 className="absolute bottom-6  right-12 text-[#64CEE6] text-3xl ">
                <ImSearch />
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ClubBanner;
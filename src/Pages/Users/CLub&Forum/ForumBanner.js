import React, { useState } from "react";
import { ImSearch } from "react-icons/im";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { HiPencilAlt } from "react-icons/hi";
import BannerForm from "../../DynamicPages/DynamicForum/BannerForm";
const ForumBanner = ({ serviceId }) => {
  const [, setCancle] = useState(false);
  const crossHandle = () => {
    setCancle(false);
  };
  const [user] = useAuthState(auth);

  return (
    <div>
      <div>
        <div className="bg-[#DAF6FC] md:pt-60 pt-40 h-screen relative">
          <div className=" hidden md:block">
            <img
              className="absolute opacity-50 -mb-11 w-full bottom-0"
              src={serviceId?.bannerBg}
              alt=""
            />
          </div>
          <div className="relative overflow-hidden mx-auto">
            <h1 className="md:text-4xl text-3xl  font-bold capitalize text-[#1D2746] text-center">
              {serviceId?.title}
            </h1>
            <h2 className="text-xl text-center mx-auto capitalize text-black md:w-5/12 my-7 w-9/12">
              {serviceId?.shortTitle}
            </h2>
          </div>
          {/* <div className="relative overflow-hidden md:w-5/12 w-11/12 p-0 mx-auto">
            <input
              type="text"
              className="  placeholder-[#6B707F] px-10 md:text-lg text-sm font-mono input py-10 w-full text-black bg-white"
              placeholder="Find the Topic"
            />
            <h1 className="absolute bottom-6  right-12 text-[#64CEE6] text-3xl ">
              <ImSearch />
            </h1>

          </div> */}
        </div>
      </div>
      {user?.email === serviceId?.email ? (
        <div className="absolute bottom-10 right-10">
          <label htmlFor="my-modal-99" className=" uppercase cursor-pointer">
            <h1 className="flex items-center full text-black py-2 px-3 border-black border-2">
              <HiPencilAlt className="mr-3 text-xl" />
              Edit
            </h1>
          </label>
          <input type="checkbox" id="my-modal-99" className="modal-toggle" />
          <div className="modal md:pt-10 pt-40 w-full overflow-scroll">
            <div className="relative w-full rounded-lg md:w-9/12 lg:w-7/12 bg-black h-auto">
              <label
                htmlFor="my-modal-99"
                onClick={crossHandle}
                className=" btn-sm text-white btn-circle absolute right-0 top-3 text-2xl font-bold"
              >
                ✕
              </label>
              <BannerForm />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ForumBanner;

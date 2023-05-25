import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../firebase.init";
import { HiPencilAlt } from "react-icons/hi";
import PostAnnouncment from "../../../DynamicPages/DynamicForum/PostAnnouncment";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper";
import { useEffect } from "react";
const ForumAnnouncment = ({ serviceId }) => {
  const [user] = useAuthState(auth);
  const [, setCancle] = useState(false);
  const crossHandle = () => {
    setCancle(false);
  };

  const [announcment, setAnnouncment] = useState([]);

  useEffect(() => {
    const email = serviceId?.email;
    const url = `https://forum-server-zoem.onrender.com/myAnnouncment?email=${email}`;
    fetch(url, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setAnnouncment(data));
  }, [serviceId]);

  return (
    <div className=" relative mt-20">
      <h1 className="md:text-[110px] text-4xl absolute -z-10 md:left-1/4 top-8 text-[#f2eded89] text-center font-mono font-bold">
        {" "}
        Announcment
      </h1>
      <h1 className="text-xl text-center font-mono text-secondary font-semibold">
        {" "}
        Our Announcment
      </h1>
      <h1 className="text-4xl my-2 text-center mb-8 font-mono text-secondary font-semibold">
        Latest Awesome Announcment
      </h1>
      <div className="flex mt-5 mb-5">
        <Swiper
          slidesPerView={1}
          centeredSlides={true}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <div className="relative ">
            {announcment?.map((item) => (
              <SwiperSlide key={item?._id}>
                <div className="flex mt-5 mb-5">
                  <div className="relative flex justify-center max-w-xl py-4 m-auto bg-white shadow-2xl">
                    <span className="absolute top-0 right-0 block w-10 h-5 -mt-2 -mr-4 text-xs text-center text-gray-600 transform rotate-45 bg-rose-600 text-white rounded shadow-md cursor-pointer">
                      New
                    </span>
                    <div
                      className="w-1/2 h-64 ml-4 bg-cover"
                      style={{
                        backgroundImage: `url(${item?.images})`,
                      }}
                    ></div>
                    <div className="flex flex-col justify-between w-1/2 px-4 space-y-16">
                      <div>
                        <h1 className="mb-2 text-xl font-bold leading-tight">
                          {item?.name}
                        </h1>
                        <p className="text-sm text-gray-700">
                          {item.discript?.length > 60
                            ? item.discript.slice(0, 120) + "..."
                            : item.discript}
                        </p>
                      </div>
                      <div>
                        <ul className="flex justify-center  space-x-3 text-xs text-gray-700">
                          <li className="flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              className="w-5 h-5 mr-1 text-green-500 fill-current"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <p>No spam</p>
                          </li>
                          <li className="flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              className="w-5 h-5 mr-1 text-green-500 fill-current"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <p>No hassle</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
      <div>
        {user?.email === serviceId?.email ? (
          <div className="absolute mt-4 bottom-0 right-2">
            <label htmlFor="my-modal-1" className=" uppercase cursor-pointer">
              <h1 className="flex items-center full text-primary py-2 px-3 border-primary border-2">
                <HiPencilAlt className="mr-3 text-xl" />
                Announcment Post
              </h1>
            </label>
            <input type="checkbox" id="my-modal-1" className="modal-toggle" />
            <div className="modal md:pt-10 pt-40 w-full overflow-scroll">
              <div className="relative w-full rounded-lg md:w-9/12 lg:w-7/12 bg-gray-600 h-auto">
                <label
                  htmlFor="my-modal-1"
                  onClick={crossHandle}
                  className=" btn-sm text-white btn-circle absolute right-0 top-3 text-2xl font-bold"
                >
                  ✕
                </label>
                <PostAnnouncment />
              </div>
            </div>
          </div>
        ) : (
          " "
        )}
      </div>
    </div>
  );
};
export default ForumAnnouncment;

import React, { useState } from "react";
import { FcCalendar } from "react-icons/fc";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading/Loading";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
const EventsBlogs = () => {
  const [user] = useAuthState(auth);
  const userEamil = user?.email;
  const [like, setLike] = useState(0);
  const [isLike, setIsLike] = useState();
  const url = `https://uiu-club-forums.onrender.com/eventblogs`;
  const {
    data: eventBlogs,
    isLoading,
    refetch,
  } = useQuery(["eventBlogs"], () =>
    fetch(url, {
      method: "GET",
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  const handleReact = (id) => {
    // if(userEamil === )
    // setLike(like + 1);
    // setIsLike("liked");
  };

  return (
    <div>
      <div className="text-center ">
        <h1 className="font-bold text-4xl mt-2 mb-5">Our Latest Blogs</h1>
        <p className="mb-10">
          Sed Condimentum Tempus Auctor Etiam Euismod Dapibus Odio Eu Congue.
        </p>
      </div>
      <Swiper
        slidesPerView={3}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {eventBlogs?.map((eventBlogs) => (
          <>
            <SwiperSlide>
              <div className="flex flex-col mx-2  pb-16 ">
                <div className="group relative block overflow-hidden shadow-lg">
                  <button
                    onClick={() => handleReact(eventBlogs._id)}
                    className="absolute right-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
                  >
                    <span className="sr-only">Wishlist</span>

                    <AiFillHeart className="text-rose-600" />
                  </button>

                  <img
                    src={eventBlogs.img}
                    alt=""
                    className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
                  />

                  <div className="relative border-gray-100 bg-white p-2 ">
                    <span className=" flex text-md gap-2 items-center font-medium">
                      <FcCalendar size={20} /> <p>{eventBlogs.date}</p>
                    </span>

                    <h3 className="mt-4 text-lg font-medium text-gray-900">
                      {eventBlogs.title}
                    </h3>

                    <p className="mt-1.5 text-sm text-gray-700">
                      {eventBlogs.description?.length > 150
                        ? eventBlogs.description.slice(0, 120) + "..."
                        : eventBlogs.description}
                    </p>
                    <div className="justify-between buttom-0 flex items-center">
                      <div className="flex gap-1 text-sm items-center mt-3">
                        <h2 className="text-rose-600">
                          <MdOutlineAdminPanelSettings size={22} />
                        </h2>
                        <h4>Admin</h4>
                      </div>
                      {/* <div className="flex gap-2 text-sm items-center">
                        <AiFillHeart size={20} className="text-rose-600" />{" "}
                        <h2> 4</h2>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </>
        ))}
      </Swiper>
    </div>
  );
};

export default EventsBlogs;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper";
import { BiBookmarkAlt } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import { AiTwotoneCalendar } from "react-icons/ai";
import { BiTime } from "react-icons/bi";
import "./style.css";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading/Loading";
import { Link } from "react-router-dom";
const UpcomingEvents = () => {
  const url = `https://forum-server-zoem.onrender.com/upcomingEvents`;
  const {
    data: upcomingEvents,
    isLoading,
    refetch,
  } = useQuery(["upcomingEvents"], () =>
    fetch(url, {
      method: "GET",
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
  const events = [
    {
      id: 1,
      img: "https://salessupportafrica.com/wp-content/uploads/2020/01/events-4.jpg",
      name: "21 February Events",
      event: "Events",
      date: "21 Feb-02-2023",
      address: "Dhaka, Bangladesh",
    },
    {
      id: 2,
      img: "https://salessupportafrica.com/wp-content/uploads/2020/01/events-4.jpg",
      name: "21 February Events",
      event: "Events",
      date: "21 Feb-02-2023",
      address: "Dhaka, Bangladesh",
    },
    {
      id: 3,
      img: "https://salessupportafrica.com/wp-content/uploads/2020/01/events-4.jpg",
      name: "21 February Events",
      event: "Events",
      date: "21 Feb-02-2023",
      address: "Dhaka, Bangladesh",
    },
  ];
  return (
    <>
      <div className="relative mt-28">
        <h1 className="md:text-[110px] text-4xl absolute -z-10 md:left-1/4 top-8 text-[#f2eded89] text-center font-mono font-bold">
          Upcoming Events
        </h1>
        <h1 className="text-xl text-center font-mono text-secondary font-semibold">
          Upcoming Events
        </h1>
        <h1 className="text-4xl my-2 text-center mb-8 font-mono text-secondary font-semibold">
          Latest Awesome Events
        </h1>
      </div>
      <div>
        <Swiper
          slidesPerView={1}
          centeredSlides={true}
          autoplay={{
            delay: 12000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          {upcomingEvents.map((item) => (
            <SwiperSlide key={item._id}>
              <div>
                <div className="w-6/12 mx-auto mb-28">
                  <div className="mx-auto w-10/12 mt-10">
                    <img
                      className="w-80 md:w-[600px] rounded-md md:max-h-screen h-80 relative mx-auto"
                      src={item.img}
                      alt=""
                    />
                    <h1 className="md:absolute  md:top-0 left-1/3 bg-[#64CEE6] w-24  py-4 text-3xl px-4 font-bold text-white font-mono text-center rounded-lg">
                      <BiBookmarkAlt className=" text-white ml-4" />{" "}
                      {item.date.slice(0, 6)}
                    </h1>
                    <div className="font-mono absolute shadow-xl rounded-xl bg-[#4039395f] md:top-2/4 top-1/4 md:left-1/3 left-1/2 px-4 py-4 md:w-96 w-auto">
                      <h1 className="text-xl text-white font-semibold">
                        {item.title}
                      </h1>

                      <h1 className="text-xl my-1 text-white flex items-center gap-2 font-semibold">
                        <AiTwotoneCalendar /> {item.date}
                      </h1>
                      <h1 className="text-xl my-1 text-white flex items-center gap-2 font-semibold">
                        <GoLocation /> {item.venue}
                      </h1>
                      <button className="btn text-white btn-primary text-md mt-3">
                        <Link to="/upcoming-events">Details</Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default UpcomingEvents;

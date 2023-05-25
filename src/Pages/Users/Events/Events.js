import React from "react";
import EventConfarence from "./EventConfarence";
import EventsBanner from "./EventsBanner";
import EventsBlogs from "./EventsBlogs";
import EventSchedule from "./EventSchedule";
import { useQuery } from "react-query";
import EventSpeakers from "./EventSpeakers";
// import EventSpeakers from './EventSpeakers';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper";
import Loading from "../../Shared/Loading/Loading";
const Events = () => {
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
  return (
    <div>
      <Swiper
        slidesPerView={1}
        autoplay={{
          delay: 20000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        allowTouchMove={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <div className="">
          {upcomingEvents.map((item) => (
            <SwiperSlide>
              <EventsBanner data={item} key={item.id} />
              <EventConfarence data={item} key={item.id} />
              <EventSpeakers data={item} key={item.id} />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>

      {/* <EventSchedule /> */}
      <EventsBlogs />
    </div>
  );
};

export default Events;

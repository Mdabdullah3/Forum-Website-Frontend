import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper";
import "./Style.css";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading/Loading";
const RecentEvent = () => {
  const [items, setItems] = useState();

  const url = `https://forum-server-zoem.onrender.com/recentEvents`;
  const {
    data: recentEvents,
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

  return (
    <div className="w-10/12 mx-auto mt-28 relative">
      <h1 className="md:text-[110px] text-4xl absolute -z-10 md:left-1/4 top-8 text-[#f2eded89] text-center font-mono font-bold">
        Recent Events
      </h1>
      <h1 className="text-xl text-center font-mono text-secondary font-semibold">
        Recent Events
      </h1>
      <h1 className="text-4xl my-2 text-center mb-20 font-mono text-secondary font-semibold">
        Our Awesome Events
      </h1>
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
        <div className="">
          {recentEvents?.map((item) => (
            <>
              <SwiperSlide>
                <div className="flex flex-col mx-auto  pb-16 ">
                  <div className="">
                    <img
                      className="w-10/12 object-fill h-48 mx-auto"
                      src={item.img}
                      alt=""
                    />
                    <h1 className="text-l font-bold mt-4 ml-10">
                      {item.title?.length > 25
                        ? item.title.slice(0, 25) + "..."
                        : item.title}
                    </h1>

                    <p className="text-sm mt-1 ml-10">
                      {item.details?.length > 60
                        ? item.details.slice(0, 60) + "..."
                        : item.details}{" "}
                    </p>
                    <h1 className="text-md mt-1 ml-10">{item.date}</h1>
                    <div className="flex items-center mt-3 flex-wrap justify-between">
                      <div className="borders ml-10"> </div>
                      <div>
                        <label
                          onClick={() => setItems(item)}
                          htmlFor={item._id}
                          className="text-sm cursor-pointer text-primary font-bold mr-10"
                        >
                          Read More ...
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </>
          ))}
        </div>
      </Swiper>

      <>
        <input type="checkbox" id={items?._id} className="modal-toggle" />
        <div className="modal  ">
          <div className="modal-box w-11/12 max-w-5xl">
            <label
              htmlFor={items?._id}
              className="btn btn-sm  hover:bg-rose-600 hover:text-white btn-circle absolute  right-2 top-2"
            >
              ✕
            </label>

            <section>
              <div class="relative mx-auto px-4 py-8">
                <div class="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
                  <div class="grid grid-cols-2 gap-4 md:grid-cols-1">
                    <img
                      alt=""
                      src={items?.img}
                      class="aspect-square w-full rounded-xl object-cover"
                    />
                  </div>

                  <div class="sticky top-0">
                    <strong class="rounded-full border border-blue-600 bg-gray-100 px-3 py-1 text-xs font-medium tracking-wide text-blue-600">
                      Recent Events
                    </strong>

                    <div class="mt-8 flex justify-between">
                      <div class="max-w-[35ch] space-y-2">
                        <h1 class="text-xl font-bold sm:text-2xl">
                          {items?.title}
                        </h1>

                        <p class="text-sm mt-2 w-full">{items?.details}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </>

      {/* <div className="md:w-56 w-5/12 mx-auto mt-10">
        <button className="w-full mx-auto bg-primary py-4 text-white px-3 font-mono text-xl rounded-lg">
          {" "}
          See More Events
        </button>
      </div> */}
    </div>
  );
};

export default RecentEvent;

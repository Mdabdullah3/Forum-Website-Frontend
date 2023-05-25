import React from "react";
import ActivityPost from "../../../DynamicPages/DynamicForum/ActivityPost";
import { useState } from "react";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import { HiPencilAlt } from "react-icons/hi";
import auth from "../../../../firebase.init";
const ForumActivitys = ({ serviceId }) => {
  const [user] = useAuthState(auth);
  const [, setCancle] = useState(false);
  const crossHandle = () => {
    setCancle(false);
  };

  const [activies, setActivies] = useState([]);
  useEffect(() => {
    const email = serviceId?.email;
    const url = `https://forum-server-zoem.onrender.com/myActivites?email=${email}`;
    fetch(url, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setActivies(data));
  }, [serviceId]);

  return (
    <>
      <div className="relative mt-40">
        <h1 className="md:text-[110px] text-4xl absolute -z-10 md:left-1/3 top-8 text-[#f2eded89] text-center font-mono font-bold">
          {" "}
          Activitys
        </h1>
        <h1 className="text-xl text-center font-mono text-secondary font-semibold">
          {" "}
          Our Activitys
        </h1>
        <h1 className="text-4xl my-2 text-center mb-8 font-mono text-secondary font-semibold">
          Latest Awesome Activitys
        </h1>
        <section className="w-9/12 mx-auto p-6 font-mono mt-5 ">
          <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
            <div className="w-full overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                    <th className="px-4 py-3">SL.</th>
                    <th className="px-4 py-3">Date</th>
                    <th className="px-4 py-3">Activity Title</th>
                    <th className="px-4 py-3">Short Details</th>
                    <th className="px-4 py-3">Student Present</th>
                  </tr>
                </thead>
                <tbody className="">
                  {activies.map((item, index) => (
                    <tr className="text-gray-700">
                      <td className="px-4 py-3 border">{index + 1}</td>
                      <td className="px-4 py-3 border">{item?.date}</td>
                      <td className="px-4 py-3 text-ms font-semibold border">
                        {item?.title}
                      </td>
                      <td className="px-4 py-3 text-xs border">
                        {item?.description}
                      </td>
                      <td className="px-4 py-3 text-sm border">
                        {item?.student}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
        <div className="">
          {user?.email === serviceId?.email ? (
            <div className="absolute bottom-10 right-10 ">
              <label htmlFor="my-modal-8" className=" uppercase cursor-pointer">
                <h1 className="flex items-center full text-primary py-2 px-3 border-primary border-2">
                  <HiPencilAlt className="mr-3 text-xl" />
                  Post Activity
                </h1>
              </label>
              <input type="checkbox" id="my-modal-8" className="modal-toggle" />
              <div className="modal md:pt-10 pt-40 w-full overflow-scroll">
                <div className="relative w-full rounded-lg md:w-9/12 lg:w-7/12 bg-gray-700 h-auto">
                  <label
                    htmlFor="my-modal-8"
                    onClick={crossHandle}
                    className=" btn-sm text-white btn-circle absolute right-0 top-3 text-2xl font-bold"
                  >
                    ✕
                  </label>
                  <ActivityPost />
                </div>
              </div>
            </div>
          ) : (
            " "
          )}
        </div>
      </div>
    </>
  );
};

export default ForumActivitys;

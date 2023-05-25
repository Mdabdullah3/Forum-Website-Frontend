import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { HiPencilAlt } from "react-icons/hi";
import PostFaq from "../../DynamicPages/DynamicForum/PostFaq";

const ForumFAQ = ({ serviceId }) => {
  const [user] = useAuthState(auth);
  const [, setCancle] = useState(false);
  const crossHandle = () => {
    setCancle(false);
  };

  const [faq, setFaq] = useState([]);

  useEffect(() => {
    const email = serviceId?.email;
    const url = `https://forum-server-zoem.onrender.com/myfaq?email=${email}`;
    fetch(url, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setFaq(data));
  }, [serviceId]);

  return (
    <div>
      <div className="relative">
        <section className="text-gray-700">
          <div className="container px-5 py-24 mx-auto">
            <div className="text-center mb-20">
              <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
                Frequently Asked Question
              </h1>
              <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                The most common questions about how our business works and what
                can do for you.
              </p>
            </div>
            <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
              <div className="w-full lg:w-8/12 px-4 mx-auto py-2 grid grid-cols-2 justify-between">
                {faq.map((item) => (
                  <details key={item._id} className="mb-4">
                    <summary className="font-semibold   rounded-md  cursor-pointer py-2 px-4">
                      {item.ques}
                    </summary>

                    <span>{item.ans}</span>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>
        <div>
          {user?.email === serviceId?.email ? (
            <div className="absolute bottom-10 right-10">
              <label
                htmlFor="my-modal-18"
                className=" uppercase cursor-pointer"
              >
                <h1 className="flex items-center full text-primary py-2 px-3 border-primary border-2">
                  <HiPencilAlt className="mr-3 text-xl" />
                  Post Faq
                </h1>
              </label>
              <input
                type="checkbox"
                id="my-modal-18"
                className="modal-toggle"
              />
              <div className="modal md:pt-10 pt-40 w-full overflow-scroll">
                <div className="relative w-full rounded-lg md:w-9/12 lg:w-7/12 bg-black h-auto">
                  <label
                    htmlFor="my-modal-18"
                    onClick={crossHandle}
                    className=" btn-sm text-white btn-circle absolute right-0 top-3 text-2xl font-bold"
                  >
                    ✕
                  </label>
                  <PostFaq />
                </div>
              </div>
            </div>
          ) : (
            " "
          )}
        </div>
      </div>
    </div>
  );
};

export default ForumFAQ;

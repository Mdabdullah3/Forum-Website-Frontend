import React from "react";
import Card from "../Card/Card";
import "./ForumBlogs.css";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../firebase.init";
import { useState } from "react";
import { HiPencilAlt } from "react-icons/hi";
import BlogPost from "../../../DynamicPages/DynamicForum/BlogPost";
const ForumBlogs = ({ serviceId }) => {
  const [user] = useAuthState(auth);
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    const email = serviceId?.email;
    const url = `https://uiu-club-forums.onrender.com/myBlog?email=${email}`;
    fetch(url, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, [serviceId]);
  const [, setCancle] = useState(false);
  const crossHandle = () => {
    setCancle(false);
  };

  return (
    <section className="">
      <div className=" relative mt-36">
        <h1 className="md:text-[110px] text-4xl absolute -z-10 md:left-1/3 top-8 text-[#f2eded89] text-center font-mono font-bold">
          Our Blogs
        </h1>
        <h1 className="text-xl text-center font-mono text-secondary font-semibold">
          {" "}
          Our Blogs
        </h1>
        <h1 className="text-4xl my-2 text-center mb-8 font-mono text-secondary font-semibold">
          Latest Awesome Blogs
        </h1>
        <div className="Appes ">
          <div className="propertiest grid grid-cols-1 lg:grid-cols-3 ">
            {blog?.map((item) => (
              <Card data={item} key={item.date} />
            ))}
          </div>
        </div>
        <div>
          {user?.email === serviceId?.email ? (
            <div className="absolute mt-4 bottom-0 right-2">
              <label htmlFor="my-modal-6" className=" uppercase cursor-pointer">
                <h1 className="flex items-center full text-primary py-2 px-3 border-primary border-2">
                  <HiPencilAlt className="mr-3 text-xl" />
                  Blog Post
                </h1>
              </label>
              <input type="checkbox" id="my-modal-6" className="modal-toggle" />
              <div className="modal md:pt-10 pt-40 w-full overflow-scroll">
                <div className="relative w-full rounded-lg md:w-9/12 lg:w-7/12 bg-gray-600 h-auto">
                  <label
                    htmlFor="my-modal-6"
                    onClick={crossHandle}
                    className=" btn-sm text-white btn-circle absolute right-0 top-3 text-2xl font-bold"
                  >
                    ✕
                  </label>
                  <BlogPost />
                </div>
              </div>
            </div>
          ) : (
            " "
          )}
        </div>
      </div>
    </section>
  );
};

export default ForumBlogs;

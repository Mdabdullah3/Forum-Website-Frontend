import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const BlogPost = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const imgStorageKey = "4a61042a9b5e9768554933fea17bbd17";
  const onSubmit = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const updateData = {
            email: user.email,
            decImg: img,
            title: data.title,
            date: data.date,
            text: data.text,
          };
          fetch(`https://forum-server-zoem.onrender.com/blog`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(updateData),
          }).then((res) => res.json());
          navigate("/");
          toast("Successful ! Your Blogs Posted");
        }
      });
  };

  return (
    <div className="flex justify-center items-center flex-wrap mt-8">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full text-secondary">
          <div className="flex flex-wrap items-center">
            <div className="md:mr-14 mr-0">
              <label className="label">
                <span className="label-text text-base text-white font-medium">
                  Blog title
                </span>
              </label>
              <input
                type="title"
                placeholder="Enter Blog title"
                className="input text-white input-bordered input-white border-2 border-white bg-transparent w-full"
                {...register("title", {
                  required: true,
                })}
              />
            </div>
            <div className="md:mr-14">
              <label className="text-white dark:text-gray-200">Date</label>
              <input
                type="date"
                className="block px-4 py-2 mt-3 bg-transparent  w-full input font-mono text-lg border-2 border-white  text-white "
                {...register("date")}
                required
              />
            </div>
            {/* <div className="md:mr-14 mr-0">
              <label className="label">
                <span className="label-text text-base text-white font-medium">
                  Blog title Code
                </span>
              </label>
              <input
                type="title"
                placeholder="Enter blog types"
                className="input text-white input-bordered input-white border-2 border-white bg-transparent w-full"
                {...register("titleCode", {
                  required: true,
                })}
              />
            </div> */}
            <div className="w-full">
              <label className="label">
                <span className="label-text text-base text-white font-medium">
                  Description
                </span>
              </label>
              <textarea
                type="name"
                placeholder="Enter Short Title"
                className=" text-white textarea textarea-accent h-24 border-2 border-white bg-transparent w-full"
                {...register("text", {
                  required: true,
                })}
              />
            </div>
          </div>
          <div>
            <label className="block font-mono text-white my-2">
              Upload a Img
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-4 border-2 border-white border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <svg
                  className="mx-auto h-8 w-12 text-white"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <div className="flex">
                  <label className="relative cursor-pointer border-2 border-dotted border-white rounded-md  px-3 py-2">
                    <span className="font-mono text-white">Upload a img</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                      {...register("image", {
                        required: {
                          value: true,
                          message: "Image is Required",
                        },
                      })}
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <input
          className="mt-4 mb-4 text-white border-[#521647] text-lg w-full py-3 rounded-lg font-bold border-2 bg-[#521647] cursor-pointer hover:bg-transparent hover:border-white"
          type="submit"
          value="Post Blogs"
        />
      </form>
    </div>
  );
};

export default BlogPost;

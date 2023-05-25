import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";

const BannerForm = () => {
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
            bannerBg: img,
            title: data.title,
            shortTitle: data.shTitle,
          };
          fetch(
            `https://uiu-club-forums.onrender.com/user/service/${user?.email}`,
            {
              method: "PUT",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(updateData),
            }
          ).then((res) => res.json());
          navigate("/");
          toast("Updated");
        }
      });
  };

  return (
    <div className="flex justify-center items-center flex-wrap mt-8">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full text-secondary">
          <div className="flex flex-wrap">
            <div className="md:mr-14 mr-0">
              <label className="label">
                <span className="label-text text-base text-white font-medium">
                  title
                </span>
              </label>
              <input
                type="title"
                placeholder="Enter Your Title"
                className="input text-white input-bordered input-white border-2 border-white bg-transparent w-full"
                {...register("title", {
                  required: true,
                })}
              />
            </div>
            <div className="">
              <label className="label">
                <span className="label-text text-base text-white font-medium">
                  Short Title
                </span>
              </label>
              <input
                type="name"
                placeholder="Enter Short Titel"
                className="input text-white input-bordered input-white border-2 border-white bg-transparent w-full"
                {...register("shTitle", {
                  required: true,
                })}
              />
            </div>
          </div>

          <div>
            <label className="block font-mono text-white my-2">
              Upload Your Background Image
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
          value="Update Banner"
        />
      </form>
    </div>
  );
};

export default BannerForm;

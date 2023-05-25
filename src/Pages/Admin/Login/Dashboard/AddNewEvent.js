import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
const AddNewEvent = () => {
  const [img, setImg] = useState();
  const { register, reset, handleSubmit } = useForm();
  const imgStorageKey = "4a61042a9b5e9768554933fea17bbd17";
  const onSubmit = (data) => {
    const image = data.img[0];
    const image2 = data.speakerImg[0];

    const formData = new FormData();
    formData.append("image", image);
    const formDatas = new FormData();
    formDatas.append("image", image2);
    const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        setImg(result.data.url);
      });
    const url1 = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
    fetch(url1, {
      method: "POST",
      body: formDatas,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const events = {
            title: data.title,
            date: data.date,
            speaker: data.speaker,
            venue: data.venue,
            speakerImg: img,
            img: img,
            details: data.details,
          };

          //    send to your database
          fetch("https://forum-server-zoem.onrender.com/upcomingEvents", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(events),
          })
            .then((res) => res.json())
            .then((data) => {
              toast.success("Blogs are succesfully add");
            });
        }
      });

    reset();
  };
  return (
    <div>
      <section className=" p-6   mx-auto shadow-md">
        <h1 className="text-2xl my-6 text-center font-mono  font-bold text-black  capitalize dark:text-black ">
          Add Upcoming Event
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 items-center gap-6 mt-4 md:grid-cols-2">
            <div>
              <label className="font-mono text-black ">Event Title</label>
              <input
                type="text"
                placeholder="Event name..."
                className="block px-4 py-2 mt-5 bg-transparent w-full input font-mono text-lg border-2 border-black  text-black  "
                {...register("title")}
                required
              />
            </div>

            <div>
              <label className="text-black  dark:text-gray-200">
                Event Date
              </label>
              <input
                type="date"
                className="block px-4 py-2 mt-3 bg-transparent w-full input font-mono text-lg border-2 border-black  text-black  "
                {...register("date")}
                required
              />
            </div>
            <div>
              <label className="text-black  font-mono">Event Details</label>
              <textarea
                {...register("details")}
                required
                id="textarea"
                placeholder="Event Details..."
                className=" textarea textarea-accent block w-full font-mono  h-36 p-4 mb-4 text-black  rounded-lg resize-none border-2 border-black px-4 py-2 mt-2 bg-transparent text-area"
              />
            </div>
            <div>
              <label className="block font-mono text-black ">
                Upload Your Event images
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-black "
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
                    <label className="relative cursor-pointer bg-gray-300  rounded-md  px-3 py-2">
                      <span className="font-mono text-black">
                        Upload a file
                      </span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                        {...register("img", {
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
            <div className="-mt-5">
              <label className="font-mono text-black ">Vanue</label>
              <input
                type="text"
                placeholder="Location name"
                className="block px-6 py-2 mt-1 bg-transparent w-full input font-mono text-lg border-2 border-black  text-black  "
                {...register("vanue")}
                required
              />
            </div>
          </div>

          <h1 className="text-center mt-5 mb-3 font-bold">Speaker Details</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 mb-5 items-center gap-5">
            <div>
              <label className="font-mono text-black ">Event Title</label>
              <input
                type="text"
                placeholder="Speaker Name"
                className="block px-4 py-2 mt-5 bg-transparent w-full input font-mono text-lg border-2 border-black  text-black  "
                {...register("speaker")}
                required
              />
            </div>
            <div>
              <label className="block font-mono text-black ">
                Upload Speaker Image
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-black "
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
                    <label className="relative cursor-pointer bg-gray-300  rounded-md  px-3 py-2">
                      <span className="font-mono text-black">
                        Upload a picture
                      </span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                        {...register("speakerImg", {
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
            type="submit"
            value="Submit"
            className="px-8 py-3 leading-5 text-black  transition-colors duration-200 transform mb-4 w-32 rounded-lg  bg-transparent border-2 font-mono border-black  hover:bg-primary hover:border-none "
          />
        </form>
      </section>
      <ToastContainer
        className="mt-96"
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default AddNewEvent;

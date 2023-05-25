import React from "react";
import { useState } from "react";
import { calculateTimeLeft } from "./TimeCount/utils";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";

const EventsBanner = ({ data }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  useEffect(() => {
    setTimeout(() => setTimeLeft(calculateTimeLeft()), 1000);
  }, [timeLeft]);
  const { title, date, _id, venue } = data;

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const onSubmit = async (event) => {
    const eventName = title;
    const name = event.name;
    const studentID = event.studentID;
    const phoneNumber = event.phoneNumber;
    const post = { eventName, name, studentID, phoneNumber };

    const url = `https://uiu-club-forums.onrender.com/eventRegistration`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(post),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("🎉 Congrats , your Registration is Complete!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        reset();
      });
  };

  return (
    <div>
      <div className="relative ">
        <div className="blur-sm">
          <img
            className="w-full max-h-screen"
            src="https://pbs.twimg.com/media/FGbfXWJVcAUejpR.jpg"
            alt=""
          />
        </div>
        <div className="absolute top-40 inset-0 ">
          <section className=" py-8  bg-transparent md:py-16 ">
            <div className="box-content max-w-5xl px-5 mx-auto">
              <div className="">
                <div className="text-white w-full px-5 md:w-auto text-center mb-10">
                  <h4 className="text-xl">
                    {date} | {venue}
                  </h4>
                  <h1 className="font-extrabold text-5xl">{title}</h1>
                </div>
                <div className="w-full px-5 md:w-auto">
                  <div className="flex justify-center text-center text-white">
                    <div className="w-20 py-3 mx-2 border rounded-lg md:w-28 border-light-300 bg-light-100 md:py-4">
                      <div className="text-2xl font-semibold md:text-5xl text-yellow-400">
                        {String(timeLeft?.days).padStart(2, "0")}
                      </div>
                      <div className="mt-3 text-xs uppercase opacity-75">
                        Day
                      </div>
                    </div>
                    <div className="w-20 py-3 mx-2 border rounded-lg md:w-28 border-light-300 bg-light-100 md:py-4">
                      <div className="text-2xl font-semibold md:text-5xl text-blue-400">
                        {String(timeLeft?.hours).padStart(2, "0")}
                      </div>
                      <div className="mt-3 text-xs uppercase opacity-75 ">
                        Hour
                      </div>
                    </div>
                    <div className="w-20 py-3 mx-2 border rounded-lg md:w-28 border-light-300 bg-light-100 md:py-4">
                      <div className="text-2xl font-semibold md:text-5xl text-red-500">
                        {String(timeLeft?.minutes).padStart(2, "0")}
                      </div>
                      <div className="mt-3 text-xs uppercase opacity-75 ">
                        Min
                      </div>
                    </div>
                    <div className="w-20 py-3 mx-2 border rounded-lg md:w-28 border-light-300 bg-light-100 md:py-4">
                      <div className="text-2xl  font-semibold md:text-5xl text-yellow-400">
                        {String(timeLeft?.seconds).padStart(2, "0")}
                      </div>
                      <div className="mt-3 text-xs uppercase opacity-75 ">
                        Second
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-8">
                  <label
                    type="register"
                    htmlFor={_id}
                    className="border border-yellow-400 p-3 px-5 rounded hover:bg-yellow-400 hover:text-black font-bold text-yellow-400"
                  >
                    Register Now
                  </label>

                  <input type="checkbox" id={_id} className="modal-toggle" />
                  <div className="modal bg-transparent -mt-96 top-0 ">
                    <div className="modal-box relative  -mt-96">
                      <label
                        htmlFor={_id}
                        className="btn btn-sm btn-circle absolute right-2 top-2"
                      >
                        ✕
                      </label>
                      <h3 className="text-lg font-bold">{title}</h3>
                      <h4> For Participant Or Volunteer</h4>
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="w-full mb-8">
                          <div className="form-control w-full max-w-xs mx-auto ">
                            <label className="label">
                              <span className="label-text">
                                What is your name?
                              </span>
                            </label>
                            <input
                              type="text"
                              placeholder="Type here"
                              className="input input-bordered w-full max-w-xs mx-auto "
                              {...register("name", {
                                required: {
                                  value: true,
                                  message: "Name is Required",
                                },
                              })}
                            />
                            <label className="label">
                              {errors.name?.type === "required" && (
                                <span className="label-text-alt text-red-500">
                                  {errors.name.message}
                                </span>
                              )}
                            </label>
                          </div>
                          <div className="form-control w-full max-w-xs mx-auto ">
                            <label className="label">
                              <span className="label-text">
                                What is your student ID?
                              </span>
                            </label>
                            <input
                              type="number"
                              placeholder="Type here"
                              className="input input-bordered w-full max-w-xs"
                              {...register("studentID", {
                                required: {
                                  value: true,
                                  minLength: 2,
                                  maxLength: 5,
                                  message: "Student ID is Required",
                                },
                              })}
                            />
                            <label className="label">
                              {errors.studentID?.type === "required" && (
                                <span className="label-text-alt text-red-500">
                                  {errors.studentID.message}
                                </span>
                              )}
                            </label>
                          </div>
                          <div className="form-control w-full max-w-xs mx-auto ">
                            <label className="label">
                              <span className="label-text">
                                What is your Number?
                              </span>
                            </label>
                            <input
                              type="number"
                              placeholder="Type here"
                              className="input input-bordered w-full max-w-xs"
                              {...register("phoneNumber", {
                                required: {
                                  value: true,
                                  minLength: 2,
                                  maxLength: 5,

                                  message: "phone Number is Required",
                                },
                              })}
                            />
                            <label className="label">
                              {errors.phoneNumber?.type === "required" && (
                                <span className="label-text-alt text-red-500">
                                  {errors.phoneNumber.message}
                                </span>
                              )}
                            </label>
                          </div>
                        </div>
                        <button
                          type="submit"
                          className="border border-yellow-400 p-3 px-10 rounded hover:bg-yellow-400 hover:text-black font-bold text-yellow-400"
                        >
                          Register
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
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
          </section>
        </div>
      </div>
    </div>
  );
};

export default EventsBanner;

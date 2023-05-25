import React from "react";
import { useForm } from "react-hook-form";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const NewClubForum = () => {
  const { register, handleSubmit } = useForm();
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const req = {
      email: user?.email,
      education: data.education,
      service: data.title,
      serviceName: data.serviceName,
      bio: data.describe,
      phone: data.phone,
    };
    fetch(`https://uiu-club-forums.onrender.com/allrequest`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(req),
    }).then((res) => res.json());
    navigate("/");
    toast("Successful ! Your Request Send");
  };

  return (
    <div>
      <section>
        <div className="bg-gray-200">
          <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-gray-900">
              Hey are you create new club or forum ?
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-900">
              Please follow the instruction and submit the avidance !
            </p>
            <div className="flex flex-wrap justify-center">
              <button
                type="button"
                className="px-8 py-3 m-2 text-lg font-semibold rounded bg-primary text-gray-50"
              >
                Get started
              </button>
              <button
                type="button"
                className="px-8 py-3 m-2 text-lg border rounded border-gray-700 text-gray-900"
              >
                Learn more
              </button>
            </div>
          </div>
        </div>
        <img
          src="https://source.unsplash.com/random/480x320"
          alt=""
          className="w-5/6 mx-auto mb-12 h-56 -mt-20 rounded-lg shadow-md lg:-mt-40 bg-gray-500"
        />
      </section>

      <section>
        <section className="p-8  text-black mb-10">
          <form
            onSubmit={handleSubmit(onSubmit)}
            novalidate=""
            action=""
            className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
          >
            <fieldset className="grid grid-cols-4 gap-6 p-8 rounded-md shadow-sm bg-gray-200">
              <div className="space-y-2 col-span-full lg:col-span-1">
                <p className="font-medium">New Forum or Club Request</p>
                <p className="text-xs">Adipisci fuga autem eum!</p>
              </div>
              <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                <div className="col-span-full sm:col-span-3">
                  <label for="username" className="text-sm">
                    Club or Forum Name
                  </label>
                  <input
                    {...register("serviceName", { required: true })}
                    type="text"
                    placeholder="Enter Club & Forum Name"
                    className="input input-bordered input-primary w-full max-w-xs"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label for="username" className="text-sm">
                    Select Club Or Forum
                  </label>
                  <select
                    className="input input-bordered input-primary w-full max-w-xs"
                    {...register("title", {
                      required: {
                        value: true,
                        message: "Club Or Forum Select is required*",
                      },
                    })}
                  >
                    <option className="font-mono text-lg text-black">
                      Forum
                    </option>
                    <option className="font-mono text-lg text-black">
                      Club
                    </option>
                  </select>
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label for="username" className="text-sm">
                    Your Education
                  </label>
                  <input
                    type="text"
                    {...register("education", { required: true })}
                    placeholder="Your Qualification ..."
                    className="input input-bordered input-primary w-full max-w-xs"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label for="website" className="text-sm">
                    Your phone number
                  </label>
                  <input
                    type="number"
                    {...register("phone", { required: true })}
                    placeholder="Enter your number"
                    className="input input-bordered input-primary w-full max-w-xs"
                  />
                </div>
                <div className="col-span-full">
                  <label for="bio" className="text-sm">
                    Why You Want To Open Club & Forum
                  </label>
                  <textarea
                    type="text"
                    {...register("describe", { required: true })}
                    className="textarea w-full h-36 textarea-primary"
                    placeholder="Write Here ..."
                  ></textarea>
                </div>
                <div className="col-span-full mx-auto">
                  <div className="flex mx-auto space-x-2">
                    <button
                      type="submit"
                      className="px-12 hover:bg-primary hover:text-white py-2 border rounded-md border-primary"
                    >
                      Request
                    </button>
                  </div>
                </div>
              </div>
            </fieldset>
          </form>
        </section>
      </section>
    </div>
  );
};
export default NewClubForum;

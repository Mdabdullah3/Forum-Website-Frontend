import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
const ActivityPost = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const updateData = {
      email: user.email,
      title: data.title,
      description: data.description,
      student: data.student,
      date: data.date,
    };
    fetch(`https://forum-server-zoem.onrender.com/activites`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateData),
    }).then((res) => res.json());
    navigate("/");
    toast("Successful ! Your Faq Activites");
  };
  return (
    <div>
      <div className="flex justify-center items-center flex-wrap mt-8">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full text-secondary">
            <div className="grid grid-cols-2  items-center gap-5">
              <div className="">
                <label className="label">
                  <span className="label-text text-base text-white font-medium">
                    Activity Title
                  </span>
                </label>
                <input
                  type="name"
                  placeholder="Enter the title"
                  className="input text-white input-bordered input-white border-2 border-white bg-transparent w-full"
                  {...register("title", {
                    required: true,
                  })}
                />
              </div>
              <div className="">
                <label className="label">
                  <span className="label-text text-base text-white font-medium">
                    Short Description
                  </span>
                </label>
                <input
                  type="name"
                  placeholder="Enter Short Des..."
                  className="input text-white input-bordered input-white border-2 border-white bg-transparent w-full"
                  {...register("description", {
                    required: true,
                  })}
                />
              </div>
              <div>
                <label className="text-white dark:text-gray-200">Date</label>
                <input
                  type="date"
                  className="block px-4 py-2 mt-3 bg-transparent  w-full input font-mono text-lg border-2 border-white  text-white "
                  {...register("date")}
                  required
                />
              </div>
              <div className="">
                <label className="label">
                  <span className="label-text text-base text-white font-medium">
                    Attend the student
                  </span>
                </label>
                <input
                  type="number"
                  placeholder="Enter student number"
                  className="input text-white input-bordered input-white border-2 border-white bg-transparent w-full"
                  {...register("student", {
                    required: true,
                  })}
                />
              </div>
            </div>
          </div>
          <input
            className="mt-4 mb-4 text-white border-[#521647] text-lg w-full py-3 rounded-lg font-bold border-2 bg-[#521647] cursor-pointer hover:bg-transparent hover:border-white"
            type="submit"
            value="Post Activites"
          />
        </form>
      </div>
    </div>
  );
};

export default ActivityPost;

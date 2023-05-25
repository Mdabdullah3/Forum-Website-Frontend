import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";

const PostFaq = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const updateData = {
      email: user.email,
      ques: data.ques,
      ans: data.ans,
    };
    fetch(`https://uiu-club-forums.onrender.com/faq`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateData),
    }).then((res) => res.json());
    navigate("/");
    toast("Successful ! Your Faq Post");
  };
  return (
    <div className="flex justify-center items-center flex-wrap mt-8">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full text-secondary">
          <div className="flex flex-wrap">
            <div className="md:mr-14 mr-0">
              <label className="label">
                <span className="label-text text-base text-white font-medium">
                  Question
                </span>
              </label>
              <input
                type="title"
                placeholder="Enter Announcment title"
                className="input text-white input-bordered input-white border-2 border-white bg-transparent w-full"
                {...register("ques", {
                  required: true,
                })}
              />
            </div>
            <div className="">
              <label className="label">
                <span className="label-text text-base text-white font-medium">
                  Answer
                </span>
              </label>
              <input
                type="name"
                placeholder="Enter Short Titel"
                className="input text-white input-bordered input-white border-2 border-white bg-transparent w-full"
                {...register("ans", {
                  required: true,
                })}
              />
            </div>
          </div>
        </div>
        <input
          className="mt-4 mb-4 text-white border-[#521647] text-lg w-full py-3 rounded-lg font-bold border-2 bg-[#521647] cursor-pointer hover:bg-transparent hover:border-white"
          type="submit"
          value="Post FaQ"
        />
      </form>
    </div>
  );
};

export default PostFaq;

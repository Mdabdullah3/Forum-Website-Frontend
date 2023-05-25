import React from 'react';

const EventConfarence = ({ data }) => {
    const { img, title, date, details } = data;
    return (
      <div className="">
        <h1 className="text-4xl font-bold text-center py-16">
          About This Conference
        </h1>

        <div className="shadow-lg grid lg:grid-cols-2 grid-cols-1 gap-10 items-center mx-10 ">
          <div className="">
            <img className="max-h-screen max-w-screen" src={img} alt="" />
          </div>
          <div>
            <h1 className="font-bold text-purple-800 text-2xl ">{title}</h1>
            <h4 className="text-xl mt-5 mb-3">{date}</h4>
            <p >
              {details}
            </p>
            <button
              type="register"
              className="border mt-5 bg-yellow-400 p-3 px-5 rounded text-black font-bold "
            >
              READ MORE
            </button>
          </div>
        </div>
      </div>
    );
};

export default EventConfarence;
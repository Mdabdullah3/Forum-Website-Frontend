import React from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import UseService from '../../../Hooks/UseService';
const ClubForum = () => {
  const [service] = UseService();
    return (
      <div className=" w-10/12 mx-auto relative">
        <h1 className="md:text-[110px] text-4xl absolute -z-10 md:left-1/4 top-8 text-[#F7F7F7] text-center font-mono font-bold">
          Club & Forum
        </h1>
        <div className="w-10/12 mx-auto font-mono mt-28">
          <h1 className="text-xl text-secondary font-semibold text-center mb-2">
            Featured CLub & Forum{" "}
          </h1>
          <h1 className="text-3xl font-bold mb-20 text-secondary text-center">
            Our Best Club & Forum Name
          </h1>
        </div>
        <marquee>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full justify-center">
            {service.map((names) => (
              <div className="px-8 py-4 shadow-lg mr-6 w-full border-t-4 border-[#64CEE6] rounded-md ml-10">
                <h1 className='text-xl font-bold w-full text-center'>{ names.serviceName}</h1>
              </div>
            ))}
          </div>
        </marquee>
      </div>
    );
};

export default ClubForum;


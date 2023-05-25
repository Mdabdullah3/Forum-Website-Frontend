import React, { useState } from 'react';
import { ImSearch } from 'react-icons/im';
import bg from '../../../Assets/background/building.png'
import bord from '../../../Assets/background/bord.png'
import flowr from '../../../Assets/background/flower.png'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import UseService from '../../../Hooks/UseService';
import { useNavigate } from 'react-router-dom';
const Banner = () => {
   const navigate = useNavigate();
  const [service] = UseService();
  const [searchItem, setSearchItem] = useState();
  const handleSearch = (event) => {
    event.preventDefault();
    let inputValue = event.target.value;
    if (inputValue === "") {
      setSearchItem('');
     }
     else {
       let eventTitles = service.map((event) => {
         return event.serviceName;
       });
       let search = eventTitles.filter((eventName) => {
         return eventName
           .toString()
           .toLowerCase()
           .includes(inputValue.toString().toLowerCase());
       });
        setSearchItem(search);
      }
   
   

    
  }
  const navigateDetails = (item) => {
      const allData = service;
      const mainData = allData.filter((data) => {
        return data.serviceName === item;
      });
    let id = mainData[0]._id;
  
      navigate(`/service/${id}`);
    };

  
  const [user] = useAuthState(auth)
  return (
    <div className="bg-[#DAF6FC] md:pt-60 pt-40 h-screen relative">
      <div>
        <h1 className="md:text-4xl text-3xl font-bold capitalize text-[#1D2746] text-center">
          Hello, what can we help you find?
        </h1>
        <h2 className="text-xl text-center mx-auto capitalize text-[#6B707F] md:w-5/12 my-7 w-9/12">
          Show your extra curriculum activities here{" "}
        </h2>
      </div>
      <div className="relative overflow-hidden md:w-5/12 w-11/12 p-0 mx-auto">
        <input
          onChange={handleSearch}
          type="text"
          className=" placeholder-[#6B707F] px-10 md:text-lg text-sm font-mono input py-10 w-full text-black bg-white"
          placeholder="Search Your Club Or Forum Name"
        />
        <h1 className="absolute bottom-6 right-12 text-[#64CEE6] text-3xl ">
          <ImSearch />
        </h1>
      </div>
      {searchItem ? (
        <>
          <div className="absolute w-full z-10">
            <ul className=" backdrop-blur-sm w-80  mt-1 rounded-md justify-center items-center mx-auto text-start ">
              {searchItem?.map((item) => (
                <li>
                  <button
                    onClick={() => navigateDetails(item)}
                    type=""
                    className="  text-start mb-2 p-2 w-full px-4 hover:bg-gradient-to-r from-[#64CEE6] to-[#45ddd0]  text-md hover:text-white duration-300 text-secondary font-bold"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        ""
      )}
      <div className=" hidden md:block">
        <img className=" absolute right-1/4 bottom-0" src={bg} alt="" />
        <img className=" absolute bottom-0 right-2/4" src={bord} alt="" />
        <img className=" absolute bottom-0 left-2/3" src={flowr} alt="" />
      </div>
    </div>
  );
};

export default Banner;
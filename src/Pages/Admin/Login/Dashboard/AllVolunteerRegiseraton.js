import React from "react";
import { useQuery } from "react-query";
import Loading from "../../../Shared/Loading/Loading";
import { Outlet } from "react-router-dom";
import CustomLink from "../../../../Component/CustomLink";

const AllVolunteerRegiseraton = () => {
  const url = `https://forum-server-zoem.onrender.com/upcomingEvents`;
  const {
    data: upcomingEvents,
    isLoading,
    refetch,
  } = useQuery(["upcomingEvents"], () =>
    fetch(url, {
      method: "GET",
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <div>
        <div>
          <h1 className="text-xl font-bold text-center mt-5 mb-5">
            All Volunteer Request here
          </h1>

          <nav className="flex items-center  px-5 rounded-full lg:text-lg  font-bold justify-between max-w-2xl p-4 mx-auto">
            <ul className="grid grid-cols-2 mx-auto  space-x-5   text-xs lg:text-lg font-bold ">
              {upcomingEvents.map((events) => (
                <li className="px-1 lg:px-2 py-2 shadow-xl  border-b-[1px] border-[#64CEE6] hover:bg-primary hover:text-white  rounded-lg text-secondary">
                  <CustomLink
                    to={`/Dashboard/volunteerRequest/${events.title}`}
                  >
                    {events.title}
                  </CustomLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default AllVolunteerRegiseraton;

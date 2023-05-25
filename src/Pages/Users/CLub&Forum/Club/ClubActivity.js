import React from 'react';
import { Outlet } from 'react-router-dom';
import CustomActivityLink from '../../../../Component/CustomForumLink';

const ClubActivity = () => {
    return (
      <div>
        <div>
          <div>
            <nav className="flex items-center  px-5 rounded-full lg:text-lg  font-bold justify-between max-w-2xl p-4 mx-auto">
              <ul className="flex mx-auto  space-x-5  text-xs lg:text-lg font-bold ">
                <li className="px-1 lg:px-2 py-2 rounded-lg text-secondary">
                  <CustomActivityLink to="/Club">
                    {" "}
                    Announcment{" "}
                  </CustomActivityLink>
                </li>
                <li className="px-1 lg:px-2 py-2 rounded-lg text-secondary">
                  <CustomActivityLink to="/Club/Activitys">
                    {" "}
                    Activity{" "}
                  </CustomActivityLink>
                </li>
                <li className="px-1 lg:px-2 py-2 rounded-lg text-secondary">
                  <CustomActivityLink to="/Club/Blogs">
                    {" "}
                    Blogs{" "}
                  </CustomActivityLink>
                </li>
                <li className="px-1 lg:px-2 py-2 rounded-lg text-secondary">
                  <CustomActivityLink to="/Club/meeting"> Meeting </CustomActivityLink>
                </li>
              </ul>
            </nav>
          </div>
          <Outlet></Outlet>
        </div>
      </div>
    );
};

export default ClubActivity;
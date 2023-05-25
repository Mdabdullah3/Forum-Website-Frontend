import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../../../firebase.init';
import useAdmin from '../../../../Hooks/useAdmin';
import Loading from '../../../Shared/Loading/Loading';

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  // if (admin === false)
  // {
  //   return <Loading/>
  //   }

    return (
      <div className="drawer drawer-end drawer-mobile mt-20">
        <input
          id="dashboard-sidebar"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4  overflow-y-auto gap-2 w-50 bg-gradient-to-r from-[#64CEE6] to-[#45ddd0] rounded text-white ">
            {/* <!-- Sidebar content here --> */}

            {
              admin && (
              <>
                <li className="font-bold">
                  <Link to="/Dashboard">Dashboard</Link>
                </li>
                <li className="font-bold">
                  <Link to="/Dashboard/all-requested-club-forum">
                    All Requested <br /> Club&Forum
                  </Link>
                </li>
                {/* <li className="font-bold">
                <Link to="/Dashboard/request-for-room-booking">
                  Request for Room <br /> Booking
                </Link>
              </li> */}
                <>
                  <li className="font-bold">
                    <Link to="/Dashboard/volunteerRequest">
                      Manage All <br /> Volunteer Request
                    </Link>
                  </li>
                </>
                <li className="font-bold">
                  <Link to="/Dashboard/addNewEvents">Add new Event</Link>
                </li>
                {/* <li className="font-bold">
                  <Link to="/Dashboard/addReviews">Add News</Link>
                </li> */}
                <li className="font-bold">
                  <Link to="/Dashboard/add-new-blogs">Add New Blogs</Link>
                </li>
              </>
            )}

            {/* admin role only */}

            {/* {admin && ( */}

            {/* )} */}
          </ul>
        </div>
      </div>
    );
};

export default Dashboard;
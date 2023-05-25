import "react-toastify/dist/ReactToastify.css";

import {
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import Dashboard from "./Pages/Admin/Login/Dashboard/Dashboard";
import Login from "./Pages/Shared/Account/Login";
import Registation from "./Pages/Shared/Account/Registation";
import Footer from "./Pages/Shared/Footer/Footer";
import NavBar from "./Pages/Shared/NavBar/NavBar";
import Forum from "./Pages/Users/CLub&Forum/Forum";
import ForumActivitys from "./Pages/Users/CLub&Forum/ForumActivity/ForumActivitys";
import ForumAnnouncment from "./Pages/Users/CLub&Forum/ForumActivity/ForumAnnouncment";
import ForumBlogs from "./Pages/Users/CLub&Forum/ForumActivity/ForumBlogs";
import Events from "./Pages/Users/Events/Events";
import Home from "./Pages/Users/Home/Home";
import NewClubForum from "./Pages/Users/NewClubForum/NewClubForum";
import News from "./Pages/Users/News/News";
import Club from "./Pages/Users/CLub&Forum/Club";
import ClubAnnouncement from "./Pages/Users/CLub&Forum/Club/ClubAnnouncement";
import ClubBlogs from "./Pages/Users/CLub&Forum/Club/ClubBlogs";
import ClubActivitys from "./Pages/Users/CLub&Forum/Club/ClubActivitys";
import AllShortcut from "./Pages/Admin/Login/Dashboard/AllShortcut";
import RequestListClubForum from "./Pages/Admin/Login/Dashboard/RequestListClubForum";
import RequestForRoomBook from "./Pages/Admin/Login/Dashboard/RequestForRoomBook";
import VolunteerRequest from "./Pages/Admin/Login/Dashboard/VolunteerRequest";
import Main from "./Utilities/Main";
import { ToastContainer } from "react-toastify";
import Services from "./Pages/Users/Services/Services";

import AllVolunteerRequest from "./Pages/Admin/Login/Dashboard/AllVolunteerRegiseraton";
import { useQuery } from "react-query";
import Loading from "./Pages/Shared/Loading/Loading";
import AddNewBlogs from "./Pages/Admin/Login/Dashboard/AddNewBlogs";
import AddNewEvent from "./Pages/Admin/Login/Dashboard/AddNewEvent";
import NotFound from "./Pages/Shared/NotFound/NotFound";

function App() {
  const url = `https://forum-server-zoem.onrender.com/eventRegistration`;
  const {
    data: datas,
    isLoading,
    refetch,
  } = useQuery(["data"], () =>
    fetch(url, {
      method: "GET",
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  const divideData = (param = "") => {
    const data = datas;
    const mainData = data.filter((item) => {
      return item.eventName === param;
    });
    return mainData;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
        {
          path: "/service/:id",
          element: <Services />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/singUp",
          element: <Registation />,
        },
        {
          path: "/upcoming-events",
          element: <Events />,
        },
        {
          path: "/news",
          element: <News />,
        },
        {
          path: "/Forum",
          element: <Forum />,
          children: [
            {
              path: "/Forum",
              element: <ForumAnnouncment />,
            },
            {
              path: "/Forum/Activitys",
              element: <ForumActivitys />,
            },
            {
              path: "/Forum/Blogs",
              element: <ForumBlogs />,
            },
          ],
        },

        {
          path: "/Club",
          element: <Club />,
          children: [
            {
              path: "/Club",
              element: <ClubAnnouncement />,
            },
            {
              path: "/Club/Activitys",
              element: <ClubActivitys />,
            },
            {
              path: "/Club/Blogs",
              element: <ClubBlogs />,
            },
          ],
        },
        {
          path: "/request-for-create-new-club-or-forum",
          element: <NewClubForum />,
        },
        {
          path: "/Dashboard",
          element: <Dashboard />,
          children: [
            {
              path: "/Dashboard",
              element: <AllShortcut />,
            },
            {
              path: "/Dashboard/all-requested-club-forum",
              element: <RequestListClubForum />,
            },
            {
              path: "/Dashboard/request-for-room-booking",
              element: <RequestForRoomBook />,
            },
            {
              path: "/Dashboard/add-new-blogs",
              element: <AddNewBlogs />,
            },

            {
              path: "/Dashboard/addNewEvents",
              element: <AddNewEvent />,
            },
            {
              path: "/Dashboard/volunteerRequest",
              element: <AllVolunteerRequest />,
              children: [
                {
                  path: "/Dashboard/volunteerRequest/:ID",
                  loader: async ({ params }) => {
                    return divideData(params.ID);
                  },
                  element: <VolunteerRequest />,
                },
                {
                  path: "/Dashboard/volunteerRequest",
                  loader: async () => {
                    return datas;
                  },
                  element: <VolunteerRequest />,
                },
              ],
            },
          ],
        },
        // {
        //   path: "/Dashboard",
        //   element: <Dashboard />,
        // },
      ],
    },
  ]);
  return (
    <div className="font-mono">
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
}

export default App;

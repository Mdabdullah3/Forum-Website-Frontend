import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const RequestListClubForum = () => {
  const [request, setRequest] = useState([]);

  useEffect(() => {
    const url = `https://uiu-club-forums.onrender.com/allrequest`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setRequest(data));
  }, []);

  const handleApprove = (id, email, service, serviceName, bio, education) => {
    const req = {
      email: email,
      education: education,
      service: service,
      serviceName: serviceName,
      bio: bio,
    };
    fetch(`https://uiu-club-forums.onrender.com/service`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(req),
    }).then((res) => res.json());
    toast("Successful ! Request Approve");

    const url = `https://uiu-club-forums.onrender.com/allrequest/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        const reamingData = request?.filter((item) => item?._id !== id);
        setRequest(reamingData);
      });
  };

  const handleDelete = (id) => {
    const url = `https://uiu-club-forums.onrender.com/allrequest/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        const reamingData = request?.filter((item) => item?._id !== id);
        setRequest(reamingData);
      });
  };

  return (
    <div>
      <h1 className="mx-auto text-center text-2xl mt-5 font-bold">
        Requested all Club&Forum
      </h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head*/}
          <thead>
            <tr>
              <th>email</th>
              <th>Forum Or Club</th>
              <th>Forum Or Club Name</th>
              <th>Approve</th>
              <th>Cancel</th>
            </tr>
          </thead>
          <tbody>
            {request.map((item) => (
              <tr>
                <td>{item.email}</td>
                <td>{item.service}</td>
                <td>{item.serviceName}</td>
                <th>
                  <button
                    onClick={() =>
                      handleApprove(
                        item?._id,
                        item?.email,
                        item?.service,
                        item?.serviceName,
                        item?.bio,
                        item?.education
                      )
                    }
                    className="btn bg-green-500 text-white hover:bg-black"
                  >
                    Approve
                  </button>
                </th>
                <th>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn bg-red-500 text-white hover:bg-orange-400"
                  >
                    Cancel
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RequestListClubForum;

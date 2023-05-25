import React from "react";

const EventSchedule = () => {
  return (
    <div>
      <div>
        <h1 className="text-4xl font-bold text-center mt-14">
          Conference Schedule
        </h1>
        <p className="text-center mt-2">
          Dorem Ipsum Dolor Sit. Incidunt Laborum Beatae Earum Nihil Odio
          Consequatur
        </p>
      </div>
      <div>
        <section className="container mx-auto p-6 font-mono mt-10">
          <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
            <div className="w-full overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                    <th className="px-4 py-3">#</th>
                    <th className="px-4 py-3">Topic</th>
                    <th className="px-4 py-3">Speaker</th>
                    <th className="px-4 py-3">Time</th>
                    <th className="px-4 py-3">Room</th>
                  </tr>
                </thead>
                <tbody className="">
                  <tr className="text-gray-700">
                    <td className="px-4 py-3 border">1</td>
                    <td className="px-4 py-3 border">Marketing Workshop</td>
                    <td className="px-4 py-3 text-ms font-semibold border">
                      Lara Quize
                    </td>
                    <td className="px-4 py-3 text-xs border">
                      {" "}
                      09:30 - 10:30{" "}
                    </td>
                    <td className="px-4 py-3 text-sm border">Times Complex</td>
                  </tr>
                  <tr className="text-gray-700">
                    <td className="px-4 py-3 border">2</td>
                    <td className="px-4 py-3 border">Marketing Workshop</td>
                    <td className="px-4 py-3 text-ms font-semibold border">
                      Lara Quize
                    </td>
                    <td className="px-4 py-3 text-xs border">
                      {" "}
                      09:30 - 10:30{" "}
                    </td>
                    <td className="px-4 py-3 text-sm border">Times Complex</td>
                  </tr>
                  <tr className="text-gray-700">
                    <td className="px-4 py-3 border">3</td>
                    <td className="px-4 py-3 border">Marketing Workshop</td>
                    <td className="px-4 py-3 text-ms font-semibold border">
                      Lara Quize
                    </td>
                    <td className="px-4 py-3 text-xs border">
                      {" "}
                      09:30 - 10:30{" "}
                    </td>
                    <td className="px-4 py-3 text-sm border">Times Complex</td>
                  </tr>
                  <tr className="text-gray-700">
                    <td className="px-4 py-3 border">4</td>
                    <td className="px-4 py-3 border">Marketing Workshop</td>
                    <td className="px-4 py-3 text-ms font-semibold border">
                      Lara Quize
                    </td>
                    <td className="px-4 py-3 text-xs border">
                      {" "}
                      09:30 - 10:30{" "}
                    </td>
                    <td className="px-4 py-3 text-sm border">Times Complex</td>
                  </tr>
                  <tr className="text-gray-700">
                    <td className="px-4 py-3 border">5</td>
                    <td className="px-4 py-3 border">Marketing Workshop</td>
                    <td className="px-4 py-3 text-ms font-semibold border">
                      Lara Quize
                    </td>
                    <td className="px-4 py-3 text-xs border">
                      {" "}
                      09:30 - 10:30{" "}
                    </td>
                    <td className="px-4 py-3 text-sm border">Times Complex</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EventSchedule;

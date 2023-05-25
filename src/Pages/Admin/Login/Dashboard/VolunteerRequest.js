import React, { useRef } from 'react';
import { useLoaderData } from 'react-router-dom';

import { useReactToPrint } from 'react-to-print';
const VolunteerRequest = () => {
  const componentPDF = useRef();
  const generatePDF = useReactToPrint({
    content: () => componentPDF.current,
    documentTitle: "EventRegisterData",
    onAfterPrint:()=> alert("Register Data is Saved")
  });
  let data = useLoaderData();

    return (
      <div>
        <section className="container mx-auto p-6 font-mono mt-5">
          <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
            <div className="w-full overflow-x-auto">
              <div ref={componentPDF} >
                <table className="w-full">
                  <thead>
                    <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                      <th className="px-4 py-3">#</th>
                      <th className="px-4 py-3">Event Name</th>
                      <th className="px-4 py-3">Student Name</th>
                      <th className="px-4 py-3">Student Id</th>
                      <th className="px-4 py-3">Student Number</th>
                    </tr>
                  </thead>
                  <tbody className="">
                    {data.map((item, index) => (
                      <tr className="text-gray-700">
                        <td className="px-4 py-3 border">{index + 1}</td>
                        <td className="px-4 py-3 border">{item.eventName}</td>
                        <td className="px-4 py-3 text-ms font-semibold border">
                          {item.name}
                        </td>
                        <td className="px-4 py-3 text-xs border">
                          {item.studentID}
                        </td>
                        <td className="px-4 py-3 text-sm border">
                          {item.phoneNumber}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <button
            onClick={generatePDF}
            className="bg-rose-600 rounded p-2 px-8  text-white"
            type=""
          >
            PDF
          </button>
        </section>
      </div>
    );
};

export default VolunteerRequest;
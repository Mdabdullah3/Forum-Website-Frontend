import React from 'react';

const ClubAnnouncement = () => {
    return (
      <div>
        <div>
          <div className="flex mt-5 mb-5">
            <div className="relative flex justify-center max-w-xl py-4 m-auto bg-white shadow-2xl">
              <span className="absolute top-0 right-0 block w-10 h-5 -mt-2 -mr-4 text-xs text-center text-gray-600 transform rotate-45 bg-rose-600 text-white rounded shadow-md cursor-pointer">
                New
              </span>
              <div
                className="w-1/2 ml-4 bg-cover"
                style={{
                  backgroundImage: `url("https://images.unsplash.com/photo-1601805215126-9df64231459b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=mojtaba-mosayebzadeh-mR_fsL-KbEg-unsplash.jpg&w=640")`,
                }}
              ></div>
              <div className="flex flex-col justify-between w-1/2 px-4 space-y-16">
                <div>
                  <h1 className="mb-2 text-2xl font-bold leading-tight">
                    Ideas and UI components in your inbox
                  </h1>
                  <p className="text-sm text-gray-700">
                    Sign up to receive ideas, free components and free resources
                    plus 15% on all of our pro UI kits.
                  </p>
                </div>
                <div>
                  <ul className="flex justify-center mt-4 space-x-3 text-xs text-gray-700">
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        className="w-5 h-5 mr-1 text-green-500 fill-current"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <p>No spam</p>
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        className="w-5 h-5 mr-1 text-green-500 fill-current"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <p>No hassle</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ClubAnnouncement;
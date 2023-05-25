import React from 'react';

const FroumCta = () => {
    return (
        <div className="py-12 flex justify-center items-center w-full flex-col mt-20">
            <div className="flex justify-between bg-gray-50 items-stretch flex-row">
                <div className="flex items-center bg-primary justify-center">
                    <p className="transform flex flex-shrink-0 -rotate-90 text-4xl font-semibold tracking-wide leading-normal text-white">UIU FORUM</p>
                </div>
                <div className="flex justify-center items-start flex-col xl:w-2/5 md:w-5/12 xl:px-7 px-6 md:px-0 md:py-0 py-5">
                    <div>
                        <p className="text-3xl xl:text-4xl font-semibold leading-9 text-gray-800">Develop Your Soft Skills</p>
                    </div>
                    <div className="xl:mt-4 mt-2">
                        <p className="text-base xl:text-xl leading-7 text-gray-600 pr-4">Participating in a club not only teaches the extra knowledge but also you will learn the best way to communicate with large groups.</p>
                        <div>
                            <button className='mt-6 shrink-0 w-full md:w-auto  lg:mt-8 py-2 md:py-3 px-10 flex justify-center duration-700  items-center text-base border-2 border-primary transition hover:-translate-y-1 hover:bg-primary hover:text-white font-medium text-primary'>Join Forum</button>
                        </div>
                    </div>
                </div>
                <div className="hidden md:block h-44 md:h-60 xl:h-72">
                    <img className="hidden h-full xl:block" src="https://tf.quomodosoft.com/appie/wp-content/uploads/2022/02/img-1.png" alt="pexels-dmitry-zvolskiy-2082090-1" />
                    <img className="xl:hidden h-full" src="https://tf.quomodosoft.com/appie/wp-content/uploads/2022/02/img-1.png" alt="pexels-dmitry-zvolskiy-2082090-1-1" />
                </div>
            </div>
            <div className="md:hidden mt-6 w-full">
                <img src="https://i.ibb.co/xGZ4hRm/pexels-dmitry-zvolskiy-2082090-1.png" alt="pexels-dmitry-zvolskiy-2082090-1" className="w-full" />
            </div>
        </div>
    );
};

export default FroumCta;
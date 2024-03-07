// import React from 'react';

import { FaStar } from "react-icons/fa";
import { RiDoubleQuotesR } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";





const Testimonials = () => {
    return (
        <div className="">
            <h2 className="font-semibold md:text-[32px] text-[20px] md:text-start text-center md:mb-[50px] mb-[20px] lg:ml-[110px] md:ml-8 md:-mt-0 -mt-10 lg:w-[1120px]  mx-[auto]">Testimonials</h2>
            <div className="pb-[68px] ">
                <div className=" md:h-[447px] h-[250px]  mb-0 bg-[rgba(0,108,228,1)] flex justify-center items-center ">
                    <div className="lg:w-[1113px]  md:h-[283px] h-24 lg:gap-x-0 md:gap-x-5  flex justify-between">
                        <div className="md:mt-0 -mt-12 lg:w-[154px] md:w-[130px] w-[35px] md:h-[283px]  h-[200px] bg_overlay-1 rounded-xl flex items-center justify-center">
                         
                            <IoIosArrowBack className="text-xl text-white " />
                            <hr className="border border-white w-[36px] -ml-3" />

                        </div>
                        <div className="lg:w-[766px] md:w-[420px] w-[300px] md:h-[283px] h-[200px] md:mt-0 -mt-12 flex  rounded-xl bg-white">
                            <img className=" w-[205px] md:h-full  rounded-xl" src="./Testimonials_IMG-2.jfif" alt="" />
                            <div className="w-[399px] h-[137px] lg:my-[73px] md:my-[45px] lg:mx-[82px] ml-2 ">
                                <h1 className="font-medium md:text-[14px] text-[12px] md:p-0 p-1">"Unforgettable journeys with John and Sarah! Their travel expertise turned our dreams into reality. Can't wait to explore with them again!"</h1>
                                <h2 className="md:mt-[23px] font-semibold text-lg">Emily</h2>
                                <h3 className=" font-medium text-xs">Adventure Enthusiast</h3>
                                <div className="">
                                    <div className="flex gap-1">
                                        <FaStar className="w-[15px] h-[15px] text-[#ffb700]" />
                                        <FaStar className="w-[15px] h-[15px] text-[#ffb700]" />
                                        <FaStar className="w-[15px] h-[15px] text-[#ffb700]" />
                                        <FaStar className="w-[15px] h-[15px] text-[#ffb700]" />
                                    </div>

                                    <div className=" w-full relative">
                                        <RiDoubleQuotesR className="absolute md:text-7xl text-3xl  text-[#006cea] lg:-right-6 md:right-6 -right-0 md:-top-10 -top-5" />

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:mt-0 -mt-12  lg:w-[154px] md:w-[130px] w-[35px] md:h-[283px]  h-[200px] bg_overlay-2  rounded-xl flex items-center justify-center">
                            
                            <hr className=" w-[36px] -mr-3 border border-white" />
                            <IoIosArrowForward className="text-xl text-white" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
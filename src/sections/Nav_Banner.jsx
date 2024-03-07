import { IoIosArrowDown } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

const Nav_Banner = () => {

    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };


    return (
        <div>
            {/* navbar */}
            <nav className='md:flex hidden  h-[80px] fixed w-full z-50   items-center justify-around bg-[rgba(255,255,255,0.9)]
         '>
                {/* left */}
                <div className='text-3xl font-normal flex items-center gap-2 '>
                    {/* <div className=' '> */}
                    <img className='' src="./LOGO.png" alt="" />
                    {/* </div> */}
                    {/* <h2 ><span className='font-bold text-[#ffb700]'>Air</span><span className='text-[#006cea]'>Book</span></h2> */}
                </div>
                {/* middle */}
                <div className='font-medium text-xl flex gap-[30px]'>
                    <h1>Blog</h1>
                    <h1>Offer</h1>
                    <h1>Airlines</h1>
                    <h1>About</h1>
                </div>
                {/* right */}
                <div>
                    <button className='bg-[#006cea] w-[134px] h-[44px] rounded-lg text-white font-medium text-xl'>Sign in</button>
                </div>
            </nav>



            <div className="md:hidden block sticky top-0 z-30  ">
                <nav className="bg-white w-full z-20 top-0 start-0 border-b border-gray-200 md:px-2">
                    <div className=" max-w-screen-xl flex flex-wrap items-center justify-between mx-auto md:py-1">

                        <div className='text-3xl font-normal flex items-center gap-2 md:pl-0 pl-3 md:pt-0 pt-2'>
                            {/* <div className=' '> */}
                            <img className='' src="./LOGO.png" alt="" />
                            {/* </div> */}
                            {/* <h2 ><span className='font-bold text-[#ffb700]'>Air</span><span className='text-[#006cea]'>Book</span></h2> */}
                        </div>

                        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse items-center ">


                            <button
                                type="button"
                                onClick={toggleMobileMenu}
                                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                aria-expanded={isMobileMenuOpen ? "true" : "false"}
                            >
                                <span className="sr-only">Open main menu</span>
                                <svg
                                    className="w-5 h-5"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 17 14"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M1 1h15M1 7h15M1 13h15"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div
                            className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isMobileMenuOpen ? "block" : "hidden"
                                }`}
                            id="navbar-sticky"
                        >
                            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
                                <li>
                                    Blog
                                </li>
                                <li>
                                    Offer
                                </li>
                                <li>
                                    Airlines
                                </li>
                                <li>
                                    About
                                </li>
                            </ul>
                            <div className="flex justify-center w-full">
                                <button className='bg-[#006cea] w-[134px] h-[44px] rounded-lg text-white font-medium text-xl'>Sign in</button>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>





            {/* banner */}
            <div className='nil md:h-[521px] h-[580px] bgImage '>
                <h2 className='md:text-[40px] text-[30px] md:ml-[170px] ml-8 lg:mt-[143px] md:mt-[100px] mt-8'><span className='font-medium text-white'>Welcome to</span> <span className='font-bold text-[#006cea]'>AirBook</span></h2>
                <div className=' lg:w-[1119px] md:w-[715px]   md:px-3  lg:h-[193px] md:h-[220px] mt-[27px]  md:mx-auto mx-3 md:py-0 py-2 rounded-lg flex  items-center bg-white'>
                    <div className='w-[1014px]    mx-auto lg:h-[99px]   '>
                        <div className='flex gap-x-[14px] '>
                            <div className=' flex md:justify-between justify-around w-full ' >
                                <div className=' gap-x-[14px]  md:flex'>
                                    <div className='w-[92px] h-[30px] bg-[rgba(235,240,245,1)] rounded flex justify-center items-center gap-2'>
                                        <div className='h-4 w-4 rounded-full border border-gray-500'></div>
                                        <h1 className='font-semibold text-[11px]'>One Way</h1>
                                    </div>
                                    <div className='w-[100px] h-[30px] bg-[#006cea] rounded flex justify-center items-center gap-2 text-white md:mt-0 mt-3'>
                                        <div className='h-4 w-4 rounded-full border border-gray-500 bg-white flex justify-center items-center'>
                                            <div className='h-[12px] w-[12px] border-2 border-[#006cea] rounded-full'></div>
                                        </div>
                                        <h1 className='font-medium text-xs'>Round Trip</h1>
                                    </div>
                                </div>
                                <div className=' md:flex gap-x-[14px]'>
                                    <div className='w-[92px] h-[30px] bg-[rgba(235,240,245,1)] rounded flex justify-center items-center gap-2'>
                                        <h1 className='font-medium text-xs text-[#006cea]'>1 Traveller</h1>
                                        <IoIosArrowDown className='text-[#006cea]' />

                                    </div>
                                    <div className='w-[100px] h-[30px] bg-[rgba(235,240,245,1)] rounded flex justify-center items-center gap-2 text-white md:mt-0 mt-3'>
                                        <h1 className='font-medium text-xs text-[#006cea]'>Economy</h1>
                                        <IoIosArrowDown className='text-[#006cea]' />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className=' mt-[14px]  flex flex-wrap justify-center lg:gap-x-[13px] md:gap-x-[10px] lg:gap-y-0 gap-y-3'>
                            <div className='border border-gray-300 w-[221px] h-[55px] rounded-lg flex justify-center items-center'>
                                <div className='w-[184px] h-[33.5px]  flex'>
                                    <div className='w-[22%]  text-sm font-bold border-gray-300 border-r-2 flex items-center'> DAC</div>
                                    <div className='ml-2'>
                                        <h1 className='text-sm font-medium'>Dhaka</h1>
                                        <h2 className='text-[10px] font-medium -mt-1'>Hazrat Shahjalal Internatio</h2>
                                    </div>
                                </div>
                            </div>
                            <div className='border border-gray-300 w-[221px] h-[55px] rounded-lg flex justify-center items-center'>
                                <div className='w-[184px] h-[33.5px]  flex'>
                                    <div className='w-[22%]  text-sm font-bold border-gray-300 border-r-2 flex items-center'> Cxb</div>
                                    <div className='ml-2'>
                                        <h1 className='text-sm font-medium'>Cox’s Bazar</h1>
                                        <h2 className='text-[10px] font-medium -mt-1'>Cox’s Bazar international</h2>
                                    </div>
                                </div>
                            </div>
                            <div className='border border-gray-300 w-[221px] h-[55px] rounded-lg flex justify-center items-center'>
                                <div className='w-[184px] h-[33.5px]  flex'>
                                    <div className='w-[22%]  text-sm font-bold border-gray-300 border-r-2 flex items-center'> 03</div>
                                    <div className='ml-2'>
                                        <h1 className='text-sm font-medium'>Octobee</h1>
                                        <h2 className='text-[10px] font-medium -mt-1'>octobee</h2>
                                    </div>
                                </div>
                            </div>
                            <div className='border border-gray-300 w-[221px] h-[55px] rounded-lg flex justify-center items-center'>
                                <div className='w-[184px] h-[33.5px]  flex'>
                                    <div className='w-[22%]  text-sm font-bold border-gray-300 border-r-2 flex items-center'> 05</div>
                                    <div className='ml-2'>
                                        <h1 className='text-sm font-medium'>October</h1>
                                        <h2 className='text-[10px] font-medium -mt-1'>tuesday, 2023</h2>
                                    </div>
                                </div>
                            </div>
                            <div className='md:flex hidden w-[74px] h-[55px] rounded-lg bg-[#ffb700]  justify-center items-center'>
                                <FaSearch className='text-2xl text-white' />
                            </div>
                        </div>
                        <div className="md:hidden flex justify-center">
                            <div className=' w-[74px] mt-2 h-[55px] rounded-lg bg-[#ffb700] flex justify-center items-center '>
                                <FaSearch className='text-2xl text-white' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav_Banner;
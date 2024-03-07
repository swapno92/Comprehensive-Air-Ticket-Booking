import { useState } from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";


const Travel_Blog = () => {
    const [currentSlider, setCurrentSlider] = useState(0);
    const sliders = [
        {
            banner: "./travle-1.jfif",
            paragraph: "Work and Travel",
            time: "16 septembar 23",
            title: "Embracing the Digital Nomad Lifestyle the Digital Nomad thr...",
            userImage: "./travle-Image-1.jfif",
            userName: "Ys Stafen"
        },
        {
            banner: "./travle-2.jfif",
            paragraph: "Historical",
            time: "14 septembar 23",
            title: "Historical Journeys: Stepping Back in Time Through Travel",
            userImage: "./travle-Image-2.jfif",
            userName: "Aria Montague"
        },
        {
            banner: "./travle-3.jfif",
            paragraph: "Sustainable Tourism",
            time: "10 septembar 23",
            title: "Sustainable Tourism: Preserving the Planet While Seeing It All",
            userImage: "./travle-Image-3.jfif",
            userName: "Elara Thorne"
        },
        {
            banner: "./travle-4.jfif",
            paragraph: "Work and Travel",
            time: "12 october 23",
            title: "Wanderlust Chronicles",
            userImage: "./travle-Image-4.jfif",
            userName: "David"
        },
        {
            banner: "./travle-5.jfif",
            paragraph: "Historical",
            time: "2 august 23",
            title: "Roaming Routes",
            userImage: "./travle-Image-5.jfif",
            userName: "Emma"
        },
        {
            banner: "./travle-6.jfif",
            paragraph: "Sustainable Tourism",
            time: "03 December 22",
            title: "Voyage Vignettes",
            userImage: "./travle-Image-6.jfif",
            userName: "Frank"
        }
    ]


    const prevSlider = () => setCurrentSlider((currentSlider) => currentSlider === 0 ? sliders.length - 1 : currentSlider - 1);
    const nextSlider = () => setCurrentSlider((currentSlider) => currentSlider === sliders.length - 1 ? 0 : currentSlider + 1);
    const isSmallScreen = window.innerWidth < 768;
    return (
        <div className=" lg:w-[1120px]  mx-[auto]">
            <h2 className="font-semibold md:text-[32px] text-[20px] md:text-start text-center md:mb-[50px] mb-[20px] lg:ml-0 md:ml-8 md:-mt-0 -mt-10 ">Travel Blog</h2>
            <div className=" flex flex-wrap  lg:w-[1113px] relative overflow-x-hidden lg:mx-0 mx-4 ">
                <div className="absolute  flex justify-between  w-full gap-3 z-50 px-5 top-32">
                    {/* arrow left */}
                    <button onClick={prevSlider} className="flex  bg-[#ffb700] justify-center items-center  rounded-full w-6 h-6 md:w-8 md:h-8">
                        <IoIosArrowBack />
                    </button>
                    {/* arrow right */}
                    <button onClick={nextSlider} className="flex  bg-[#ffb700] justify-center items-center  rounded-full w-6 h-6 md:w-8 md:h-8">
                        < IoIosArrowForward />

                    </button>
                </div>
                <div className="ease-linear pb-[100px]   duration-300 flex md:gap-4 items-center"
                    style={{ transform: `translateX(-${currentSlider * (isSmallScreen ? 360 : 376)}px)` }}>
                    {/* sliders */}
                    {sliders.map((slide, inx) => (
                        <div key={inx} className={` w-[360px] h-[437px] pb-7 rounded-lg  shadow-xl shadow-[rgba(30,30,30,0.15)] ${currentSlider - 1 === inx ? 'scale-0' : 'scale-100 delay-500'
                            }`}>
                            <img src={slide.banner}
                                className={`w-[360px] h-[222px]   duration-300 rounded-lg `}
                                alt={slide.title} />
                            <div className='w-[316px] mx-auto'>
                                <div className='flex items-center mt-[20px] mb-[25px]'>
                                    <h2 className=' font-medium text-sm text-[#ffb700]'>{slide.paragraph}</h2>
                                    <h2 className='ml-[18px] font-normal text-sm'>{slide.time}</h2>
                                </div>
                                <h2 className='font-bold text-lg '>{slide.title}</h2>
                                <hr className=' border border-gray-300 mt-[18px] mb-2' />
                            </div>
                            <div className='w-[301px] mx-auto flex justify-between items-center'>
                                <div className='flex items-center'>
                                    <img className='w-10 h-10 rounded-full' src={slide.userImage} alt="" />
                                    <h2 className='font-normal text-sm ml-2'>{slide.userName}</h2>
                                </div>
                                <div className='flex items-center'>
                                    <h2 className='font-medium text-sm  text-[#ffb700]'>Read more</h2>
                                    <IoIosArrowForward className='text-[#ffb700] font-medium text-xs' />
                                    <IoIosArrowForward className='text-[#ffb700] font-medium text-xs' />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Travel_Blog;
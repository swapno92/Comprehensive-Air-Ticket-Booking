const Featured = () => {
    return (
        <div className=" lg:mt-[100px] mt-[30px] pb-[68px] lg:w-[1120px]  mx-[auto] ">
            <h2 className="font-semibold md:text-[32px] text-[20px] md:text-start text-center md:mb-[50px] mb-[20px] lg:ml-0 md:ml-8 ">Featured Destinations</h2>
            <div className=" flex flex-wrap justify-center gap-[20px]">
                <div className="w-[360px] h-[403px] pb-6 flex justify-center items-center rounded-lg shadow-xl shadow-[rgba(30,30,30,0.15)]">
                    <div className="w-[340px] h-[372px]  rounded-lg flex flex-col gap-y-[27px]">
                        <img src="./featured_IMG-1.jfif" className="w-[340px] h-[230px] rounded-lg" alt="" />
                        <h1 className="text-lg font-bold">Stopover Opportunity in Istanbul With Turkish Airlines</h1>
                        <div className="flex justify-center ">
                            <button className="w-[200px] h-[40px] rounded-lg  bg-[#ffb700] text-[15px] font-normal-">View More</button>
                        </div>
                    </div>
                </div>
                <div className="w-[360px] h-[403px] pb-6 flex justify-center items-center rounded-lg shadow-xl shadow-[rgba(30,30,30,0.15)]">
                    <div className="w-[340px] h-[372px]  rounded-lg flex flex-col gap-y-[27px]">
                        <img src="./featured_IMG-2.jfif" className="w-[340px] h-[230px] rounded-lg" alt="" />
                        <h1 className="text-lg font-bold">Stopover Opportunity in Istanbul With Turkish Airlines</h1>
                        <div className="flex justify-center ">
                            <button className="w-[200px] h-[40px] rounded-lg  bg-[#ffb700] text-[15px] font-normal-">View More</button>
                        </div>
                    </div>
                </div>
                <div className="w-[360px] h-[403px] pb-6 flex justify-center items-center rounded-lg shadow-xl shadow-[rgba(30,30,30,0.15)]">
                    <div className="w-[340px] h-[372px]  rounded-lg flex flex-col gap-y-[27px]">
                        <img src="./featured_IMG-3.jfif" className="w-[340px] h-[230px] rounded-lg" alt="" />
                        <h1 className="text-lg font-bold">Stopover Opportunity in Istanbul With Turkish Airlines</h1>
                        <div className="flex justify-center ">
                            <button className="w-[200px] h-[40px] rounded-lg  bg-[#ffb700] text-[15px] font-normal-">View More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;
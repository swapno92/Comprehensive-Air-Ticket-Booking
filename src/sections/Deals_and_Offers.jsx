
const Deals_and_Offers = () => {
    return (
        <div className=" g:mt-[100px] mt-[30px] pb-[68px] lg:w-[1120px]  mx-[auto] ">
            <h2 className="font-semibold md:text-[32px] text-[20px] md:text-start text-center md:mb-[50px] mb-[20px] lg:ml-0 md:ml-8 md:-mt-0 -mt-10 ">Deals and Offers</h2>
            <div className=" flex flex-wrap justify-center gap-[20px]">
                <div className="w-[358px] h-[175px] rounded-lg flex shadow-xl shadow-[rgba(30,30,30,0.15)] gap-[12px]">
                    <img className="w-[138px] rounded-xl" src="./offers_IMG-1.png" alt="" />
                    <div className=" pr-[23px] flex flex-col justify-center">
                        <h1 className="font-medium text-[12px]">With bkash payment only</h1>
                        <h2 className="font-semibold text-[16px] text-[#006cea]">Up to 14% Discount On The Base Fare Of Domestic Flights</h2>
                    </div>
                </div>
                <div className="w-[358px] h-[175px] rounded-lg flex shadow-xl shadow-[rgba(30,30,30,0.15)] gap-[12px]">
                    <img className="w-[138px] rounded-xl" src="./offers_IMG-2.png" alt="" />
                    <div className=" pr-[23px] flex flex-col justify-center">
                        <h1 className="font-medium text-[12px]">With bkash payment only</h1>
                        <h2 className="font-semibold text-[16px] text-[#006cea]">Up to 14% Discount On The Base Fare Of Domestic Flights</h2>
                    </div>
                </div>
                <div className="w-[358px] h-[175px] rounded-lg flex shadow-xl shadow-[rgba(30,30,30,0.15)] gap-[12px]">
                    <img className="w-[138px] rounded-xl" src="./offers_IMG-3.png" alt="" />
                    <div className=" pr-[23px] flex flex-col justify-center">
                        <h1 className="font-medium text-[12px]">With bkash payment only</h1>
                        <h2 className="font-semibold text-[16px] text-[#006cea]">Up to 14% Discount On The Base Fare Of Domestic Flights</h2>
                    </div>
                </div>
            </div>
            <div className=" mt-[25px] flex justify-center gap-x-[6px]">
                <div className="w-[10px] h-[10px] rounded-full bg-gray-300"></div>
                <div className="w-[10px] h-[10px] rounded-full bg-[#ffb700]"></div>
                <div className="w-[10px] h-[10px] rounded-full bg-gray-300"></div>
            </div>
        </div >
    );
};

export default Deals_and_Offers;
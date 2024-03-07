import { CiLocationOn } from "react-icons/ci";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div className=" md:h-[446px] lg:pb-0  line  bg-[#006cea] text-white">
            <div className="lg:w-[1120px] lg:px-0 md:px-8 px-5  md:mt-[50px] mt-5 mx-auto  flex flex-wrap justify-between border-b border-b-gray-300  md:pb-[53px]    ">
                <div className="">
                    <h2 className="font-medium text-lg mb-2">Address</h2>
                    <h2 className="font-normal text-base mb-[7px]">House- 75 Ka, Main <br /> Rd, Dhaka 1216</h2>
                    <div className="flex items-center">
                        <CiLocationOn />
                        <h2 className="font-normal text-base">View on Maps</h2>
                    </div>
                </div>
                <div className=" flex flex-col md:gap-[15px]">
                    <h2 className="font-medium text-lg">About us</h2>
                    <h2 className="font-medium text-lg">Stories</h2>
                    <h2 className="font-medium text-lg">Blog</h2>
                    <h2 className="font-medium text-lg">Airlines</h2>
                    <h2 className="font-medium text-lg">Testimonials</h2>
                </div>
                <div className="md:mt-0 mt-8">
                    <h2 className="font-medium text-lg">Join us</h2>
                    <h2 className="font-medium text-lg">Terms of Service</h2>
                    <h2 className="font-medium text-lg">Privacy Policy</h2>
                    <h2 className="font-medium text-lg">Support</h2>
                </div>
                <div className="md:mt-0 mt-8">
                    <h2 className="font-medium text-lg mb-2">Contact</h2>
                    
                    <h2 className="font-medium text-sm">+880 1234562890</h2>
                    <h2 className="font-medium text-sm">+880 1345628980</h2>
                    <h2 className="font-medium text-sm">+880 1234562890</h2>
                    <h2 className="font-medium text-sm mb-8">info@gozayaan.com</h2>

                </div>

            </div>
            <div className="md:mt-[14px] mt-3  lg:w-[1120px] lg:p-0 md:p-8 mx-auto flex flex-wrap  md:justify-between justify-center items-center md:gap-x-0 gap-x-3 md:gap-y-0 gap-y-3">
                <div className='text-xl order-1 font-normal flex items-center gap-2 '>
                    <img className='' src="./LOGO_white.png" alt="" />
                </div>
                <h2 className="md:order-2 order-3 font-semibold text-xs">© Copyright  AIRBOOK</h2>
                <div className=" md:ord3 order-2 flex md:gap-8 gap-3 ">
                    <FaYoutube className="text-[32px]" />
                    < FaFacebookF className="text-[32px]" /> 
                    <FaLinkedinIn className="text-[32px]" />


                </div>
            </div>

        </div>
    );
};

export default Footer;
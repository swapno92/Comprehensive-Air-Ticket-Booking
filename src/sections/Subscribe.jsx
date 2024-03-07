
const Subscribe = () => {
    return (
        <div className=" lg:pb-[150px] pb-12 lg:w-[1103px] mx-[auto] md:flex lg:justify-between md:justify-center">

            <div className="lg:w-[385px] md:w-[300px] w-[250px]  text-center md:mx-0 mx-auto md:h-[394px]  md:flex justify-center items-center">
                <img className=" " src="./email.png" alt="" />
            </div>
            <div className="  md:w-1/2 lg:p-0 p-3 md:mt-0 mt-4">
                <h1 className="font-bold lg:text-[40px] md:text-[30px] text-[30px]">Subscribe to our Newsletter!</h1>
                <h2 className="font-medium text-[20px] lg:mt-[20px] md:mt-[12px] text-[#006cea]">Subscribe to our newsletter and stay <br className="md:block hidden" />updated.</h2>
                <input className="mt-[20px] lg:h-[60px] md:h-[45px] h-[50px] pl-4 w-full rounded-lg border border-[#006cea]" placeholder="Your Email"></input>
                <button className="mt-[20px] font-medium text-xl w-full lg:h-[60px] md:h-[45px] h-[50px] bg-[#ffb700] rounded-lg">Subscribe</button>
            </div>
                
        </div>
    );
};

export default Subscribe;
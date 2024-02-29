const StartFree = () => {
  return (
    <div className="m-auto max-sm:my-12 md:my-20 ">
      <div className="text-center space-y-5 font-overpass text-white max-sm:space-y-8">
        <div
          className="font-[600] m-auto tracking-[-1.92px] 
          max-sm:text-[36px] max-sm:w-[320px] max-sm:h-[91.15px] max-sm:tracking-[-1.08px] 
          md:text-[40px] md:w-[500px] md:h-[45px] 
          lg:h-[81.02px] lg:w-[920px] lg:text-[64px] ">
          A modern publishing platform
        </div>
        <div
          className=" font-[300]  m-auto
        max-sm:text-[18px] max-sm:w-[327px]
          md:text-[14px] md:w-[350px]
          lg:text-[20px] lg:w-[423px] lg:h-[26px] ">
          Grow your audience and build your online brand
        </div>
      </div>
      {/* buttons */}

      <div
        className="flex gap-6 text-[16px] font-[700] m-auto justify-center font-ubuntu
      max-sm:mt-10  md:mt-16 lg:mt-20 
       ">
        <div
          className="w-[137px] h-[48px] rounded-[28px] flex justify-center items-center bg-white
          cursor-pointer text-[#ff505c] hover:text-white hover:bg-[#ff7b86]
          ">
          Start for Free
        </div>
        <div
          className="w-[137px] h-[48px] rounded-[28px] flex justify-center items-center border-[1px] 
        cursor-pointer border-white text-white hover:text-[#ff7b86] hover:bg-[#FFF] ">
          Learn More
        </div>
      </div>
      {/* <div className="flex">
        <div
          className="w-[137px] h-[48px] rounded-[28px] shadow-md flex items-center 
                            justify-center cursor-pointer bg-[#fff]
             mx-auto text-[#ff505c] hover:text-[#fff]  hover:bg-[#ff7b86] ">
          Sign Up
        </div>
        <div
          className="w-[137px] h-[48px] rounded-[28px] shadow-md flex items-center 
                            justify-center cursor-pointer 
             mx-auto text-[#fff] hover:text-[#fff]  hover:bg-[#FFF] ">
          Sign Up
        </div>
      </div> */}
    </div>
  );
};

export default StartFree;

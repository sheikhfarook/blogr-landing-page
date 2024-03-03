import blogr from "../../assets/illustration-phones.svg";
const StateOfArt = () => {
  return (
    <div
      className="w-full mt-[10rem] rounded-tr-[6rem] rounded-bl-[6rem]
     bg-gradient-to-l from-[#3f4164] to-[#2d2e40] 
     max-sm:h-[625px] 
     md:h-[500px]
     lg:h-[350px]
     xl:[400px]
    ">
      <div className="pattern">
        {/* <div> */}
        <div
          className="grid items-center max-sm:grid-cols-1 
        md:grid-cols-1 lg:grid-cols-2">
          <div className="">
            <img
              className="
             max-sm:w-[326.44px] max-sm:h-[345.25px] max-sm:m-auto max-sm:mt-[-10rem]
             md:h-[400px] md:m-auto md:mt-[-8rem]
             lg:mt-[-4.5rem] lg:ml-10
             xl:ml-[8rem] xl:h-[500px] xl:mt-[-3.7rem]"
              src={blogr}
              alt=""
            />
          </div>
          <div
            className="text-[#FFF] font-overpass 
          max-sm:text-center 
          md:m-auto md:mb-[12%] md:text-center  
          lg:text-left lg:ml-[-50px]
          xl:mb-[15%]">
            <div className="max-sm:space-y-10 ">
              <div
                className="w-[511px] h-[51px] font-overpass 
              text-[40px] font-[600] tracking-[-1.2px]
              max-sm:w-[327px] max-sm:h-[101.28px] max-sm:m-auto ">
                State of the Art Infrastructure
              </div>
              <div
                className="w-[540px] h-[112px] mt-5  text-[#FFF] font-overpass text-[16px]
              font-[300] leading-[28px] tracking-[0.5px]
              max-sm:w-[327px] max-sm:h-[178px] max-sm:m-auto ">
                With reliability and speed in mind, worldwide data centers
                provide the backbone for ultra-fast connectivity. This ensures
                your site will load instantly, no matter where your readers are,
                keeping your site competitive.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div
    //   className="w-full h-[400px] mt-[10rem] rounded-tr-[6rem]
    // rounded-bl-[6rem] bg-gradient-to-l from-[#3f4164] to-[#2d2e40]
    // max-sm:h-[625px] ">
    //   <div className="pattern">
    //     {/* <div className=""> */}
    //     <div>
    //       <img
    //         className="ml-[8rem]
    //         absolute mt-[-4.5rem]"
    //         src={blogr}
    //         alt=""
    //       />
    //     </div>
    //     <div className="space-y-5 md:absolute md:right-[10.5rem]  mt-[7rem]">
    //       <div
    //         className="w-[511px] h-[51px] text-[#FFF] font-overpass
    //          text-[40px] font-[600] tracking-[-1.2px]
    //          max-sm:w-[327px] max-sm:h-[101.28px] ">
    //         State of the Art Infrastructure
    //       </div>
    //       <div
    //         className="w-[540px] h-[112px] text-[#FFF] font-overpass text-[16px]
    //         font-[300] leading-[28px] tracking-[0.5px]">
    //         With reliability and speed in mind, worldwide data centers provide
    //         the backbone for ultra-fast connectivity. This ensures your site
    //         will load instantly, no matter where your readers are, keeping your
    //         site competitive.
    //       </div>
    //     </div>
    //   </div>
    // </div>
    // // </div>
  );
};

export default StateOfArt;

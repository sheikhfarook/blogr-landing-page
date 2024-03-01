import blogr from "../../assets/illustration-phones.svg";
const StateOfArt = () => {
  return (
    <div
      className="w-full h-[400px] mt-[10rem] rounded-tr-[6rem] 
    rounded-bl-[6rem] bg-gradient-to-l from-[#3f4164] to-[#2d2e40]
    max-sm:h-[625px] ">
      <div className="pattern">
        {/* <div className=""> */}
        <div>
          <img
            className="ml-[8rem]
            absolute mt-[-4.5rem]"
            src={blogr}
            alt=""
          />
        </div>
        <div className="space-y-5 md:absolute md:right-[10.5rem] md:bottom-[7rem]">
          <div
            className="w-[511px] h-[51px] text-[#FFF] font-overpass
             text-[40px] font-[600] tracking-[-1.2px]
             max-sm:w-[327px] max-sm:h-[101.28px] ">
            State of the Art Infrastructure
          </div>
          <div
            className="w-[540px] h-[112px] text-[#FFF] font-overpass text-[16px] 
            font-[300] leading-[28px] tracking-[0.5px]">
            With reliability and speed in mind, worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly, no matter where your readers are, keeping your
            site competitive.
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default StateOfArt;

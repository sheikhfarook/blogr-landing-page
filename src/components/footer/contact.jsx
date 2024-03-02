import logo from "../../assets/logo.svg";
import { BlogrData } from "./contactData";

const Contact = () => {
  return (
    <div
      className="bg-[#24242c] text-[#FFF]  text-[15px] font-ubuntu 
     leading-[33px] rounded-tr-[5rem] mt-[15rem] 
     max-sm:h-[900px] max-sm:mt-[10rem]
     md:h-[500px] 
     lg:h-[359px]
     xl:justify-center">
      <div
        className="flex pt-[5rem] 
        max-sm:flex-col  max-sm:text-center max-sm:gap-[4rem] 
       md:flex-col md:items-center md:gap-[5rem]
       lg:flex-row lg:items-start xl:gap-[10rem] lg:px-[11rem]
       xl:px-0 xl:justify-center">
        <div>
          <img className="max-sm:m-auto md:m-auto lg:m-0 " src={logo} alt="" />
        </div>
        <div
          className="flex max-sm:flex-col max-sm:gap-[2rem]
        md:gap-[8rem] xl:gap-[13rem]">
          {BlogrData?.map((data) => (
            <div key={data?.id}>
              <div className="space-y-5 max-sm:space-y-3">
                <div className="font-[500] hover:underline cursor-pointer">
                  {data?.header}
                </div>
                <div className="space-y-1 font-[400] opacity-[0.5] max-sm:space-y-[0px]">
                  {data?.options.map((option, index) => (
                    <div className="hover:underline cursor-pointer" key={index}>
                      {option}
                    </div>
                  ))}
                </div>
              </div>{" "}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;

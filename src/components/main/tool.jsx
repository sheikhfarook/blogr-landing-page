import mobile_laptop from "../../assets/illustration-laptop-mobile.svg";
import laptop from "../../assets/illustration-laptop-desktop.svg";

const Tool = () => {
  const future = [
    {
      id: 1,
      headline: "Free, open, simple",
      para: "Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.",
    },
    {
      id: 2,
      headline: "Powerful tooling",
      para: "Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites.",
    },
  ];
  return (
    <div className="mt-[10rem] max-sm:mt-[5rem] max-sm:mb-[-10rem]">
      <div
        className="lg:relative flex justify-evenly items-center max-sm:flex-col md:flex-col
      lg:flex-row 2xl:m-auto 2xl:justify-around ">
        <div className="lg:relative lg:right-[12rem] xl:right-[23.5rem] 2xl:right-0">
          <img
            className="lg:w-[950px]  
             max-sm:hidden
             md:w-[600px] md:m-auto md:justify-center
             lg:ml-20 
             xl:ml-0
             "
            src={laptop}
            alt=""
          />
          <img className="mb-[-5rem] md:hidden" src={mobile_laptop} alt="" />
        </div>
        <div>
          {future?.map((topics, index) => (
            <div
              key={topics?.id}
              className={`lg:mr-10 xl:ml-[-24rem] 2xl:ml-0 ${
                index === 0 ? "mt-[7rem] " : index === 1 ? "mt-14 " : 0
              }`}>
              <div
                className="h-[41px] text-[#1f3e5a] font-overpass 
               font-[600] leading-[28px]
               max-sm:w-[318px] max-sm:h-[66px] max-sm:text-center max-sm:m-auto 
                md:text-center lg:text-left lg:w-[400px] lg:text-[20px]
                 xl:text-[28px] xl:w-[540px]">
                {topics?.headline}
              </div>
              <div
                className=" h-[154px] text-[#4c5862] font-overpass
              text-[16px] font-[300] leading-[28px] tracking-[0.5px]
               max-sm:w-[318px] max-sm:h-[252px] max-sm:text-center md:text-center md:w-[600px]
               lg:text-left lg:w-[400px] xl:w-[540px]">
                {topics?.para}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tool;

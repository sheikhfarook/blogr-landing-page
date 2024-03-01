import laptop from "../../assets/illustration-laptop-mobile.svg";

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
    <div className="mt-[10rem]">
      <div className="flex justify-evenly items-center max-sm:flex-col-reverse">
        <div className="">
          <img
            className="w-[580px] max-sm:w-[326px] max-sm:justify-center max-sm:m-auto"
            src={laptop}
            alt=""
          />
        </div>
        <div>
          {future?.map((topics, index) => (
            <div
              key={topics?.id}
              className={` ${
                index === 0 ? "mt-[7rem] " : index === 1 ? "mt-14 " : 0
              }`}>
              <div
                className="h-[41px] w-[540px] text-[#1f3e5a] font-overpass 
              text-[28px] font-[600] leading-[28px] max-sm:w-[318px] max-sm:h-[66px] max-sm:text-center max-sm:m-auto  ">
                {topics?.headline}
              </div>
              <div
                className="w-[540px] h-[154px] text-[#4c5862] font-overpass
              text-[16px] font-[300] leading-[28px] tracking-[0.5px]
               max-sm:w-[318px] max-sm:h-[252px] max-sm:text-center">
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

import editor from "../../assets/illustration-editor-desktop.svg";
import mobile_editor from "../../assets/illustration-editor-mobile.svg";
import StateOfArt from "./stateofart";
import Tool from "./tool";

const FutureDesigned = () => {
  const future = [
    {
      id: 1,
      headline: "Introducing an extensible editor",
      para: "Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.",
    },
    {
      id: 2,
      headline: "Robust content management",
      para: "Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.",
    },
  ];
  return (
    <div>
      <div
        className="w-[399px] h-[51px] text-[#1f3e5a] font-overpass 
    text-[40px] font-[600] text-center tracking-[-1.2px] m-auto mt-[9rem] 
    max-sm:w-[327px] max-sn:h-[35.45pxpx] max-sm:text-[28px] max-sm:tracking-[-0.84px]
    xl:mb-[-12rem] 2xl:mb-0">
        Designed for the future
      </div>
      <div
        className="flex items-center  
      max-sm:flex-col-reverse 
      md:flex-col-reverse
      lg:flex-row lg:mt-[-8rem]
     2xl:m-auto  2xl:justify-around ">
        <div>
          <div className="xl:ml-[13rem] lg:ml-[5rem] ">
            {future?.map((topic, index) => (
              <div
                key={topic?.id}
                className={` ${
                  index === 0 ? "mt-[7rem] " : index === 1 ? "mt-14 " : 0
                }`}>
                <div
                  className="h-[41px] text-[#1f3e5a] font-overpass
                  font-[600] leading-[28px] max-sm:w-[318px]
                  max-sm:h-[66px] max-sm:text-center max-sm:m-auto
                  md:text-center lg:text-left lg:w-[400px] lg:text-[20px]
                  xl:text-[28px] xl:w-[540px]">
                  {topic?.headline}
                </div>
                <div
                  className="h-[154px] text-[#4c5862] font-overpass 
                text-[16px] font-[300] leading-[28px] tracking-[0.5px] max-sm:w-[318px] 
                max-sm:h-[252px] max-sm:text-center md:w-[600px]
                md:text-center lg:text-left lg:w-[400px] xl:w-[540px]">
                  {topic?.para}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative  overflow-hidden ">
          <div className="relative md:mt-[10rem] lg:left-[8rem] xl:left-[12.5rem] 2xl:left-0">
            <img
              src={editor}
              alt=""
              className="lg:w-full max-sm:hidden
            md:w-[500px] 2xl:w-[780px]"
            />
          </div>
        </div>
        <img className="md:hidden mt-10 -mb-10" src={mobile_editor} alt="" />
      </div>

      <StateOfArt />
      <Tool />
    </div>
  );
};

export default FutureDesigned;

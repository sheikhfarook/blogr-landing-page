import editor from "../../assets/illustration-editor-desktop.svg";
import StateOfArt from "./stateofart";

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
      text-[40px] font-[600] text-center tracking-[-1.2px] m-auto mt-[8rem]
      max-sm:w-[327px] max-sn:h-[35.45pxpx] max-sm:text-[28px] max-sm:tracking-[-0.84px]">
        Designed for the future
      </div>
      <div className="flex justify-evenly items-center max-sm:flex-col-reverse">
        <div>
          {future?.map((topic, index) => (
            <div
              key={topic?.id}
              className={` ${
                index === 0 ? "mt-[7rem] " : index === 1 ? "mt-14 " : 0
              }`}>
              <div
                className="h-[41px] w-[540px] text-[#1f3e5a] font-overpass 
              text-[28px] font-[600] leading-[28px] max-sm:w-[318px] max-sm:h-[66px] max-sm:text-center max-sm:m-auto  ">
                {topic?.headline}
              </div>
              <div
                className="w-[540px] h-[154px] text-[#4c5862] font-overpass
              text-[16px] font-[300] leading-[28px] tracking-[0.5px]
               max-sm:w-[318px] max-sm:h-[252px] max-sm:text-center">
                {topic?.para}
              </div>
            </div>
          ))}
        </div>
        <div className="">
          <img
            className="w-[580px] max-sm:w-[326px] max-sm:justify-center max-sm:m-auto"
            src={editor}
            alt=""
          />
        </div>
      </div>
      <StateOfArt />
    </div>
  );
};

export default FutureDesigned;

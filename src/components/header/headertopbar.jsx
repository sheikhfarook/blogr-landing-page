import blog from "../../assets/logo.svg";
import Company from "./menu.jsx/company";
import Connect from "./menu.jsx/connect";
import Product from "./menu.jsx/product";
import StartFree from "./startfree";

const HeaderTopBar = () => {
  return (
    // main bg color
    <div className="bg-gradient-to-r from-[#ff8f71] to-[#ff3e55] hover:rounded-bl-[6rem] max-sm:rounded-bl-[6rem]   ">
      {/* bg img css name */}
      <div className="blog ">
        <div className="flex items-center justify-between p-10 xl:px-36 text-white text-[16px] font-ubuntu font-[700]">
          {/* logo */}
          <div className="flex gap-[5rem] items-center">
            <div>
              <img
                className="max-sm:w-[81.66px] max-sm:h-[32px]"
                src={blog}
                alt=""
              />
            </div>
            {/* menu bar */}
            {/* mobile device responsive */}
            <div className="flex gap-10  md:hidden">
              <div>
                <Product />
              </div>
              <div>
                <Company />
              </div>
              <div>
                <Connect />
              </div>
              {/* right side  */}
            </div>
            {/* all device responsive */}
            <div className="flex gap-10  max-sm:hidden">
              <div>
                <Product />
              </div>
              <div>
                <Company />
              </div>
              <div>
                <Connect />
              </div>
              {/* right side  */}
            </div>
          </div>
          <div className="flex gap-6 items-center cursor-pointer max-sm:hidden">
            <div> Login </div>
            <div
              className="w-[137px] h-[48px] rounded-[28px] shadow-md flex items-center 
              justify-center  bg-[#fff] mx-auto text-[#ff505c] hover:text-[#fff] 
               hover:bg-[#ff7b86] ">
              Sign Up
            </div>
          </div>
        </div>
        <StartFree />
      </div>
    </div>
  );
};

export default HeaderTopBar;

import blog from "../../assets/logo.svg";
import Company from "./menu.jsx/company";
import Connect from "./menu.jsx/connect";
import Product from "./menu.jsx/product";
import StartFree from "./startfree";

const HeaderTopBar = () => {
  return (
    // main bg color
    <div className="bg-gradient-to-r from-[#ff8f71] to-[#ff3e55]">
      {/* bg img css name */}
      <div className="blog ">
        <div className="flex items-center justify-between p-10 text-white text-[16px] font-ubuntu font-[700]">
          {/* logo */}
          <div
            className="flex gap-[5rem] items-center   
         ">
            <div>
              <img className="" src={blog} alt="" />
            </div>
            {/* menu bar */}
            <div className="flex gap-10 ">
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
          <div className="flex gap-10 items-center">
            <div> Login </div>
            <div
              className="w-[137px] h-[48px] rounded-[28px] shadow-md flex items-center 
                            justify-center cursor-pointer bg-[#fff]
             mx-auto text-[#ff505c] hover:text-[#fff]  hover:bg-[#ff7b86] ">
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

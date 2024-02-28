import blog from "../../assets/logo.svg";
import Company from "./menu.jsx/company";
import Connect from "./menu.jsx/connect";
import Product from "./menu.jsx/product";

const HeaderTopBar = () => {
  return (
    <div className="bg-gradient-to-r from-[#ff8f71] to-[#ff3e55]">
      <div className="blog ">
        <div
          className="flex gap-[5rem] items-center p-10 text-white text-[16px] font-[700]
        font-ubuntu">
          <div>
            <img className="" src={blog} alt="" />
          </div>
          <div className="flex gap-10">
            <div>
              <Product />
            </div>
            <div>
              <Company />
            </div>
            <div>
              <Connect />
            </div>
          </div>
        </div>
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTopBar;

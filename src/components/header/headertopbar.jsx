import blog from "../../assets/logo.svg";
import Company from "./menu.jsx/company";
import Connect from "./menu.jsx/connect";
import Product from "./menu.jsx/product";

const HeaderTopBar = () => {
  return (
    <div className="bg-gradient-to-r from-[#ff8f71] to-[#ff3e55]">
      <div className="blog ">
        <div className="">
          <div>
            <img src={blog} alt="" />
          </div>
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
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTopBar;

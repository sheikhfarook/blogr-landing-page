import blog from "../../assets/logo.svg";

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

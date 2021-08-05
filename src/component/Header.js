import React from "react";

const Header = () => {
  return (
    <header style={{ background: "cadetBlue", color: "wheat" }}>
      <div className="w-10/12 md:w-8/12 lg:w-6/12 mx-auto  py-5">
        <div className="font-Poppins text-2xl font-bold">JobPlug</div>

        {/* <div>
          <button className="bg-blue-300 px-6 py-3 rounded font-Poppins text-white">
            Login
          </button>
        </div> */}
      </div>
    </header>
  );
};

export default Header;

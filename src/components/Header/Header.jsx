import React from "react";
import Navbar from "./Navbar";
import "./Header.css";
import Main from "./main/Main";

function Header() {
  return (
    <>
      <Navbar />
      <div className="img-head">
        <div className="leftimg">
          <img
            src="https://www.centurypackersmovers.in/images/logo.png"
            alt=""
          />
        </div>
        <div className="rightimg">
          <img
            src="https://www.centurypackersmovers.in/images/icon/callbng1.png"
            alt=""
          />
        </div>
      </div>
      <Main />
      
    </>
  );
}

export default Header;

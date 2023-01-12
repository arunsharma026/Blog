import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
const Header = () => {
  return (
    <header className="main-header">
      <div className="top-bar fl-wrap">
        <div className="container">
          <div className="topbar-left">
            <ul>
              <li>
                <a href="!#">
                  <i className="fa fa-envelope"></i> info@bologx.com
                </a>
              </li>
              <li>
                <a aria-current="page" className="active" href="/">
                  <i className="fa fa-phone-square"></i> +1 (281) 724-8730
                </a>
              </li>
            </ul>
          </div>

          <ul className="topbar-social">
          <li><a href="https://www.facebook.com/" target="_blank"><i className="fa fa-facebook-f"></i></a></li>
                                 <li><a href="https://twitter.com/home" target="_blank"><i className="fa fa-twitter"></i></a></li>
                                 <li><a href="https://www.instagram.com/" target="_blank"><i className="fa fa-instagram"></i></a></li> 
                                 <li><a href="https://in.pinterest.com/" target="_blank"><i className="fa fa-pinterest-p"></i></a></li>
          </ul>
        </div>
      </div>
      <div className="header-inner fl-wrap">
        <div className="container">
          <Link to="/" className="logo-holder">
            <img src="assets/images/flogo.png" alt="" />
          </Link>

          <div className="nav-button-wrap">
            <div className="nav-button">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <Nav />
        </div>
      </div>
    </header>
  );
};

export default Header;

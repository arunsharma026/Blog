import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div className="nav-holder main-menu">
        <nav>
          <ul>
            <li>
              <NavLink to="/" className="act-link">
                Home{" "}
              </NavLink>{" "}
            </li>
            <li>
              <li>
                <NavLink to="!#">
                  Categories<i className="fa fa-caret-down"></i>
                </NavLink>
                <ul>
                  <li>
                    <NavLink to="/Category">Lifestyle</NavLink>
                  </li>
                  <li>
                    <NavLink to="/blog">Work</NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink to="!#">
                  Blog<i className="fa fa-caret-down"></i>
                </NavLink>
                <ul>
                  <li>
                    <NavLink to="/blog">Standard</NavLink>
                  </li>
                  <li>
                    <NavLink to="/Category">Listing</NavLink>
                  </li>
                </ul>
              </li>
              <NavLink to="about">About Us</NavLink>{" "}
            </li>
            <li>
              <NavLink to="/contact">Contacts</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Nav;

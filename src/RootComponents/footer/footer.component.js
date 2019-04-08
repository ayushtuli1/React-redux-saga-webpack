import React from "react";
import { NavLink } from "react-router-dom";

import "./footer.style.less";
import logo from "../../assets/images/dosist_logo.png";

const footer = props => {
  return (
    <footer className="footerContainer">
      <nav>
        <ul>
          <li>
            <a href="#image">
              <img src={logo} alt="Dosist" className="logo" />
            </a>
          </li>
          <li className="footerRight">
            <NavLink
              to={{ pathname: "/login" }}
              className="anchor"
              exact
              activeClassName="active"
            >
              LEGAL
            </NavLink>
          </li>
          <li className="footerRight">
            <NavLink
              className="anchor"
              to={{ pathname: "/login" }}
              exact
              activeClassName="active"
            >
              SUPPORT
            </NavLink>
          </li>
          <li className="footerRight">
            <NavLink
              className="anchor"
              to={{ pathname: "/login" }}
              exact
              activeClassName="active"
            >
              PRESS
            </NavLink>
          </li>
          <li className="footerRight">
            <NavLink
              className="anchor"
              to={{ pathname: "/login" }}
              exact
              activeClassName="active"
            >
              CONTACT
            </NavLink>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default footer;

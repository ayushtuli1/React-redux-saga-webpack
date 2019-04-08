import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "./header.style.less";
import logo from "../../assets/images/dosist_logo.png";
class header extends Component {
  render() {
    return (
      <header className="headerContainer">
        <nav>
          <ul>
            <li>
              <NavLink
                to={{ pathname: "/home" }}
                exact
                activeClassName="active"
              >
                <img src={logo} alt="Dosist" className="logo" />
              </NavLink>
            </li>
            <li className="headerLeft">
              <NavLink
                to={{ pathname: "/product" }}
                exact
                activeClassName="active"
              >
                PRODUCTS
              </NavLink>
            </li>
            <li className="headerLeft">
              <NavLink to={{ pathname: "/" }} exact activeClassName="active">
                LEARN
              </NavLink>
            </li>
            <li className="headerLeft">
              <NavLink to={{ pathname: "/" }} exact activeClassName="active">
                STORIES
              </NavLink>
            </li>
            <li className="headerLeft">
              <NavLink to={{ pathname: "/" }} exact activeClassName="active">
                VISIT US{" "}
              </NavLink>
            </li>
            <li className="headerRight">
              <NavLink to={{ pathname: "/" }} exact activeClassName="active">
                LOGIN
              </NavLink>
            </li>
            <li className="headerRight">
              <NavLink to={{ pathname: "/" }} exact activeClassName="active">
                O
              </NavLink>
            </li>
            <li className="headerRight">
              <NavLink to={{ pathname: "/" }} exact activeClassName="active">
                LOCATION
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default header;

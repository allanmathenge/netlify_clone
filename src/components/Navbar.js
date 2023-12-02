import React from "react";
import logo from "../assets/netlify-logo.svg";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-links">
        <div>
          <a className="netlify-logo" href="/">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className="link-list">
          <li>
            <a href="/">
              Home <RiArrowDropDownLine />
            </a>
          </li>
          <li>
            <a href="/">
              Platform <RiArrowDropDownLine />
            </a>
          </li>
          <li>
            <a href="/">Solutions</a>
          </li>
          <li>
            <a href="/">
              Integrations <RiArrowDropDownLine />
            </a>
          </li>
          <li>
            <a href="/">Start Building</a>
          </li>
          <li>
            <a href="/">Docs</a>
          </li>
          <li>
            <a href="/">Pricing</a>
          </li>
        </div>

        <div className="auth">
          <div className="search">
            <FaSearch />
          </div>
          <div className="contact">Contact</div>
          <div className="login">Log in</div>
          <div className="signUpbutton">
            <button>Sign Up</button>
          </div>
        </div>

        <div className="menu">
          <div className="search">
            <FaSearch />
          </div>
          <div className="login">Log in</div>
          <IoIosMenu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

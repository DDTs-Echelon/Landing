import React from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

import "./navigation-links.css";

const NavigationLinks = (props) => {
  return (
    <nav className={`navigation-links-nav ${props.rootClassName} `}>
      <a href="#home" className="navigation-links-navlink navbar-link">
        {props.text}
      </a>
      <a href="#features" className="navigation-links-link navbar-link">
        {props.text1}
      </a>
    </nav>
  );
};

NavigationLinks.defaultProps = {
  rootClassName: "",
  text: "Home",
  text1: "Features",
};

NavigationLinks.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
};

export default NavigationLinks;

import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";

export const Header = () => {
  return (
    <header>
      <img src={Logo} alt="Logo" width="100" />
      <Link to="/aboutme">About Me</Link> ⎮{" "}
      <Link to="/education">Education</Link> ⎮ <Link to="/skills">Skills</Link>{" "}
      ⎮ <Link to="/projects">Projects</Link> ⎮{" "}
      <Link to="/contact">Contact</Link>
    </header>
  );
};

export default Header;

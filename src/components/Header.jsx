import { color } from "framer-motion";
import React from "react";

const Header = () => {
  return (
    <nav>
      <NavContent />
    </nav>
  );
};
const hello = () => {
  window.open("https://github.com/ManishaBuragohain", "_blank");
};
const NavContent = () => {
  return (
    <>
      <h2>Manisha.</h2>
      <div>
        <a href="#home">Home</a>
        <a href="#work">Work</a>
        <a href="#timeline">Experience</a>
        {/* <a href="#testimonial">Testimonial</a>
        <a href="#services">Services</a> */}

        <a href="#contact">Contact</a>
      </div>
      {/* <a href="#resume">Resume</a> */}
      <a href="mailto:buragohainmanisha115@gmail.com">
        <button>Email</button>
      </a>
    </>
  );
};

export default Header;

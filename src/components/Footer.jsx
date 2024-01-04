import React from "react";
import { AiFillGithub, AiFillLinkedin, AiOutlineArrowUp } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={"https://avatars.githubusercontent.com/u/89069791?s=96&v=4"}
          alt="Founder"
        />

        <h2>Manisha Buragohain</h2>
      </div>

      <aside>
        <h2>Links</h2>

        <article>
          <a href="https://github.com/ManishaBuragohain" target={"blank"}>
            <AiFillGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/manisha-buragohain/"
            target={"blank"}
          >
            <AiFillLinkedin />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;

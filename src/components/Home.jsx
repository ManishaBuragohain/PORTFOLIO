import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import me from "../assets/new.png";
const Home = () => {
  const animations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },

    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };
  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animations.h1}>
            Hi, I Am <br />
            Manisha Buragohain
          </motion.h1>
          <Typewriter
            options={{
              strings: ["A Developer", "A Learner", "A Explorer "],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />
          <div>
            <a href="mailto:buragohainmanisha115@gmail.com">Hire Me</a>
            <a href="#work">
              Projects <BsArrowUpRight />
            </a>
          </div>

          <article>
            <p>
              + <span>100</span>
            </p>
            <span>clients world-wide </span>
          </article>

          <aside>
            <article>
              <p>
                + <span>500</span>
              </p>
              <span>Projects made</span>
            </article>

            <article data-special>
              <p>Contact</p>
              <span>buragohainmanisha115@gmail.com</span>
            </article>
          </aside>
        </div>
      </section>
      <section>
        <img src={me} alt="myslef" />
      </section>
      <BsChevronDown />
    </div>
  );
};

export default Home;

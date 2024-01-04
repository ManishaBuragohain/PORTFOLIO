import React, { useRef } from "react";
import { animate, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import me from "../assets/manishabg.png";
const Home = () => {
  const clientCount = useRef(null);
  const projectCount = useRef(null);

  const animationClientCounts = () => {
    animate(0, 100, {
      duration: 1,
      onUpdate: (v) => (clientCount.current.textContent = v.toFixed()),
    });
  };

  const animationProjectCount = () => {
    animate(0, 500, {
      duration: 1,
      onUpdate: (v) => (projectCount.current.textContent = v.toFixed()),
    });
  };
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
            FRONTEND <br /> DEVELOPER
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
          {/* 
          <article>
            <p>
              +
              <motion.span
                whileInView={animationClientCounts}
                ref={clientCount}
              ></motion.span>
            </p>
            <span>clients world-wide </span>
          </article>

          <aside>
            <article>
              <p>
                +
                <motion.span
                  whileInView={animationProjectCount}
                  ref={projectCount}
                ></motion.span>
              </p>
              <span>Projects Done</span>
            </article>

            <article data-special>
              <p>Contact</p>
              <span>buragohainmanisha115@gmail.com</span>
            </article>
          </aside> */}
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

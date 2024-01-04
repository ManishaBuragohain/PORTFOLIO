import React, { useState } from "react";

import vg from "../assets/contact-icon.png";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [disableBtn, setDisableBtn] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    // console.log(name, email, message);
    setDisableBtn(true);
    try {
      await addDoc(collection(db, "contacts"), {
        name,
        email,
        message,
      });
      setName("");
      setEmail("");
      setMessage("");
      toast.success("Message sent");
      setDisableBtn(false);
    } catch (error) {
      toast.error("Error");
      console.log(error);
      setDisableBtn(false);
    }
  };

  const animations = {
    form: {
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
      transition: {
        delay: 0.5,
      },
    },
  };

  return (
    <div id="contact">
      <section>
        <motion.form onSubmit={submitHandler} {...animations.form}>
          <h2 style={{ color: "black" }}>Contact Me</h2>
          <input
            type="text"
            value={name}
            placeholder="your name "
            required
            onChange={(e) => setName(e.target.value)}
          />

          <input
            value={email}
            type="email"
            placeholder="your email "
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            value={message}
            type="message"
            placeholder="your message "
            required
            onChange={(e) => setMessage(e.target.value)}
          />
          <motion.button
            {...animations.button}
            type="submit"
            disabled={disableBtn}
            className={disableBtn ? "disableBtn" : ""}
          >
            send
          </motion.button>
        </motion.form>
      </section>
      <aside>
        <img src={vg} />
      </aside>
    </div>
  );
};

export default Contact;

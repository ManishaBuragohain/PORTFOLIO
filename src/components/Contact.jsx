import React from "react";

import vg from "../assets/vg.png";

const Contact = () => {
  return (
    <div id="contact">
      <section>
        <h2 style={{ color: "#FFF" }}>CONTACT</h2>

        <form>
          <input type="text" placeholder="your name " required />

          <input type="email" placeholder="your email " required />

          <input type="message" placeholder="your message " required />
          <button type="submit">send</button>
        </form>
      </section>
      <aside>
        <img src={vg} />
      </aside>
    </div>
  );
};

export default Contact;

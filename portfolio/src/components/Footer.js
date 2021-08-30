import React from "react";

const Footer = () => {
  return (
    <div id="contact-section" className="footer">
      <hr />
      <h1>Let's Connect</h1>
      <div className="underline3"></div>
      <p>
        You can connect with me on linkedin, instagram, github or send me an
        e-mail
      </p>
      <div className="contact-icon">
        <a href="https://github.com/Pulkit007">
          <img src="https://img.icons8.com/nolan/128/github.png" alt="github" />
        </a>
        <a
          style={{ marginLeft: "20px" }}
          href="https://www.linkedin.com/in/pulkit-bhargava-9491231b6"
        >
          <img
            src="https://img.icons8.com/nolan/128/linkedin-circled.png"
            alt="linkedin"
          />
        </a>
        <a
          style={{ marginLeft: "20px" }}
          href="https://www.instagram.com/invites/contact/?i=11z4mjxpb5hwm&utm_content=2jcrh4n"
        >
          <img
            src="https://img.icons8.com/nolan/128/instagram-new.png"
            alt="instagram"
          />
        </a>
      </div>
      <form
        action="mailto:pulkitbhargava222@gmail.com"
        method="post"
        encType="text/plain"
      >
        <input
          autoComplete="off"
          type="text"
          name="mail"
          placeholder="Write a mail..."
        />
        <button type="submit" className="send-email">
          Send a mail
        </button>
      </form>
      <hr />
      <p className="owner">
        Made with ❤ by <a href="https://github.com/Pulkit007">@Pulkit</a>
      </p>
    </div>
  );
};

export default Footer;

import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState } from "react";
export default function Home() {
  const [message, setMessage] = useState(false);
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "188f07e8-8355-4289-a8d3-87d72a3285d5");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });
    const result = await response.json();
    setMessage(true);
  }

  return (
    <>
      <Layout maincls="main-aboutpage">
        <section className="contact-area">
          <div className="container">
            <div className="gx-row d-flex justify-content-between gap-24">
              <div className="contact-infos">
                <h3 data-aos="fade-up">Contact Info</h3>
                <ul className="contact-details">
                  <li className="d-flex align-items-center" data-aos="zoom-in">
                    <div className="icon-box shadow-box">
                      <i className="iconoir-mail" />
                    </div>
                    <div className="right">
                      <span>Mail us</span>
                      <h4>savithaanbu00@gmail.com</h4>
                    </div>
                  </li>
                  <li className="d-flex align-items-center" data-aos="zoom-in">
                    <div className="icon-box shadow-box">
                      <i className="iconoir-phone" />
                    </div>
                    <div className="right">
                      <span>Contact Us</span>
                      <h4>+91 6374563903</h4>
                      
                    </div>
                  </li>
                  <li className="d-flex align-items-center" data-aos="zoom-in">
                    <div className="icon-box shadow-box">
                      <i className="iconoir-pin-alt" />
                    </div>
                    <div className="right">
                      <span>Location</span>
                      <h4>Chennai, IN</h4>
                    </div>
                  </li>
                </ul>
                <h3 data-aos="fade-up">Social Info</h3>
                <ul
                  className="social-links d-flex align-center"
                  data-aos="zoom-in"
                >
                  <li>
                    <Link
                      className="shadow-box"
                    
                      href="https://www.linkedin.com/in/savitha-a-34559a1ab//"
                    >
                      <i className="iconoir-linkedin" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="shadow-box"
                     
                      href=""
                    >
                      <i className="iconoir-twitter" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="shadow-box"
                      target="_blank"
                      href="https://www.instagram.com/__savitha._.anbu__/"
                    >
                      <i className="iconoir-instagram" />
                    </Link>
                  </li>
                </ul>
              </div>
              <div data-aos="zoom-in" className="contact-form">
                <div className="shadow-box">
                  <img src="/assets/images/icon3.png" alt="Icon" />
                  <h1>
                    Let's work <span>together.</span>
                  </h1>
                  <form onSubmit={handleSubmit}>
                    <div
                      className="alert alert-success messenger-box-contact__msg"
                      style={{ display: message ? "block" : "none" }}
                      role="alert"
                    >
                      Your message was sent successfully.
                    </div>
                    <div className="input-group">
                      <input
                        type="text"
                        name="full-name"
                        id="full-name"
                        placeholder="Name *"
                      />
                    </div>
                    <div className="input-group">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email *"
                      />
                    </div>
                    <div className="input-group">
                      <input
                        type="text"
                        name="subject"
                        id="subject"
                        placeholder="Your Subject *"
                      />
                    </div>
                    <div className="input-group">
                      <textarea
                        name="message"
                        id="message"
                        placeholder="Your Message *"
                      />
                    </div>
                    <div className="input-group">
                      <button
                        className="theme-btn submit-btn"
                        name="submit"
                        type="submit"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

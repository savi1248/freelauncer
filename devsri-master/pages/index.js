import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Layout headTitle={"Web Consultation and Development - Devsri"} maincls="main-homepage">
        <section className="about-area">
          <div className="container">
            <div className="row">
              <div className="col-md-6" data-aos="zoom-in">
                <div className="about-me-box shadow-box">
                  <div className="img-box">
                    <img
                      src="/assets/images/savitha.jpeg"
                      alt="Srikanth Sridharan"
                    />
                  </div>
                  <div className="infos">
                   
                    <h1>Savitha A</h1>
                    <h4>FULL STACK DEVELOPER</h4>
                    <p>
                       I have Experience in MERN stack Development for 3 years here to provide best services to my clients.
                      
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="about-credentials-wrap">
                  <div data-aos="zoom-in">
                    <div className="banner shadow-box">
                      <div className="marquee">
                        <div>
                          <span>
                            AVAILABLE FOR <b>FREELANCE WORK</b>{" "}
                            <img src="/assets/images/star1.svg" alt="Star" />{" "}
                            AVAILABLE FOR <b>FREELANCE WORK</b>{" "}
                            <img src="/assets/images/star1.svg" alt="Star" />{" "}
                            AVAILABLE FOR <b>FREELANCE WORK</b>{" "}
                            <img src="/assets/images/star1.svg" alt="Star" />{" "}
                            AVAILABLE FOR <b>FREELANCE WORK</b>{" "}
                            <img src="/assets/images/star1.svg" alt="Star" />{" "}
                            AVAILABLE FOR <b>FREELANCE WORK</b>{" "}
                            <img src="/assets/images/star1.svg" alt="Star" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="gx-row d-flex gap-24">
                    <div data-aos="zoom-in">
                      <div className="about-crenditials-box info-box shadow-box h-full">
                        <Link className="overlay-link" href="/about" />

                        <img src="/assets/images/about.svg" alt="About" />
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="infos">
                            <h4>Know more</h4>
                            <h1>About me</h1>
                          </div>
                          <Link href="/credentials" className="about-btn">
                            <img src="/assets/images/icon.png" alt="Button" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div data-aos="zoom-in">
                      <div className="about-project-box info-box shadow-box h-full">
                        <Link className="overlay-link" href="/works" />

                        <img
                          src="/assets/images/portfolio.svg"
                          alt="Portfolio"
                        />
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="infos">
                            <h4>Showcase of</h4>
                            <h1>Projects</h1>
                          </div>
                          <Link href="#" className="about-btn">
                            <img src="/assets/images/icon.png" alt="Button" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-24">
              <div className="col-md-12">
                <div className="blog-service-profile-wrap d-flex gap-24">
                  <div data-aos="zoom-in">
                    <div className="about-blog-box info-box shadow-box h-full">
                      <Link
                        target="_blank"
                        href="https://blog.devsri.com"
                        className="overlay-link"
                      />

                      <img
                        src="/assets/images/hashnode.png"
                        alt="Hashnode Blog"
                      />
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="infos">
                          <h4>Check out our blog</h4>
                          <h1>@Hashnode</h1>
                        </div>
                        <Link
                          target="_blank"
                          href="https://blog.devsri.com"
                          className="about-btn"
                        >
                          <img src="/assets/images/icon.png" alt="Button" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div data-aos="zoom-in" className="flex-1">
                    <div className="about-services-box info-box shadow-box h-full">
                      <Link href="/services" className="overlay-link" />

                      <div className="icon-boxes">
                        <i className="iconoir-headset-help" />
                        <i className="iconoir-design-pencil" />
                        <i className="iconoir-code" />
                        <i className="iconoir-dev-mode-phone" />
                      </div>
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="infos">
                          <h4>Skills</h4>
                          <h1>Services Offered</h1>
                        </div>
                        <Link href="/services" className="about-btn">
                          <img src="/assets/images/icon.png" alt="Button" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div data-aos="zoom-in">
                    <div className="about-profile-box info-box shadow-box h-full">
                      <div className="inner-profile-icons shadow-box">
                        <Link
                         
                          href="#"
                        >
                          <i className="iconoir-twitter" />
                        </Link>
                        <Link
                          target="_blank"
                          href="https://www.linkedin.com/in/savitha-a-34559a1ab/"
                        >
                          <i className="iconoir-linkedin" />
                        </Link>
                        <Link
                          target="_blank"
                          href="https://www.instagram.com/__savitha._.anbu__/"
                        >
                          <i className="iconoir-instagram" />
                        </Link>
                      </div>
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="infos">
                          <h4>Stay with me</h4>
                          <h1>Social Media</h1>
                        </div>
                        <Link
                          target="_blank"
                          href="/contact"
                          className="about-btn"
                        >
                          <img src="/assets/images/icon.png" alt="Button" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-24">
              <div className="col-md-6" data-aos="zoom-in">
                <div className="about-client-box info-box shadow-box">
                  <div className="clients d-flex align-items-start gap-24 justify-content-center">
                    <div className="client-item">
                      <h1>3</h1>
                      <p>
                        Years of <br />
                        Experience
                      </p>
                    </div>
                    <div className="client-item">
                      <h1>+25</h1>
                      <p>
                        CLIENTS <br />
                        WORLDWIDE
                      </p>
                    </div>
                    <div className="client-item">
                      <h1>+30</h1>
                      <p>
                        Total <br />
                        Projects
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6" data-aos="zoom-in">
                <div className="about-contact-box info-box shadow-box">
                  <Link className="overlay-link" href="/contact" />
                  <img
                    src="/assets/images/icon2.png"
                    alt="Icon"
                    className="star-icon"
                  />
                  <h1>
                    Let's <br />
                    work <span>together.</span>
                  </h1>
                  <Link href="#" className="about-btn">
                    <img src="/assets/images/icon.png" alt="Button" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

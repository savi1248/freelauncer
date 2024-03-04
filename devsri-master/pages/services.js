import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
      <>
        <Layout maincls="main-homepage">
          <section className="service-area">
            <div className="container">
              <h1 className="section-heading" data-aos="fade-up">
                <img src="/assets/images/star-2.png" alt="Star" /> My Offerings{" "}
                <img src="/assets/images/star-2.png" alt="Star" />
              </h1>
              <div className="row">
                {/* Sidebar */}
                <div className="col-md-4">
                  <div className="service-sidebar" data-aos="fade-right">
                    <div className="service-sidebar-inner shadow-box">
                      <ul>
                        <li>
                          <i className="iconoir-headset-help icon" />
                          Web Consultation
                        </li>
                        <li>
                          <i className="iconoir-design-pencil icon" />
                          Web Designing
                        </li>
                        <li>
                          <i className="iconoir-code icon" />
                          Web Development
                        </li>
                        <li>
                          <i className="iconoir-dev-mode-phone icon" />
                          App Development
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Content */}
                <div className="col-md-8">
                  <h1 className="section-heading" data-aos="fade-up">
                    <img src="/assets/images/star-2.png" alt="Star" />Services<img src="/assets/images/star-2.png" alt="Star" />
                  </h1>
                  <div className="service-content-wrap" data-aos="zoom-in">
                    <div className="service-content-inner shadow-box">
                      <div className="service-items">
                        <div className="service-item">
                          <h3>Web Consultation</h3>
                          <p>
                          If you are new to online business, we can help you create a strategy for designing and building a website that meets your business goals and appeals to your target audience. We can also provide services related to Search Engine optimisation so that you can get more traffic and leads.
                          </p>
                        </div>
                        <div className="service-item">
                          <h3>Web Designing</h3>
                          <p>
                          We will create, plan and design visually appealing websites. With knowledge of web development technologies, we will be able to create websites that are optimized for search engines and user experience. Your successful online presence for your business starts with us.
                          </p>
                        </div>
                        <div className="service-item">
                          <h3>Web Development</h3>
                          <p>
                          I will create a dynamic and interactive website in HTML, CSS, Javascript, REACT, PHP and suitable frameworks which can be customized according to your needs. From designing, coding, testing and maintenance we provide all-in-one support for your business. Web development plays a huge role in the increase in demand for an online presence.
                          </p>
                        </div>
                        <div className="service-item">
                          <h3>App Development</h3>
                          <p>
                          Whether it comes to Android or iOS we can help you create cross-platform apps using React native or Flutter based on the tools and resources available to help streamline the process. We will create user-friendly and engaging applications that meet the needs and desires of its users.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-24">
                <div className="col-md-12">
                  <div className="d-flex profile-contact-credentials-wrap gap-24">
                    <div data-aos="zoom-in">
                    <div className="about-profile-box info-box shadow-box h-full">
                      <div className="inner-profile-icons shadow-box">
                        <Link
                          target="_blank"
                          href="https://youtube.com/@devsrikanthsridharan"
                        >
                          <i className="iconoir-youtube" />
                        </Link>
                        <Link
                          target="_blank"
                          href="https://twitter.com/srikanthsridhar"
                        >
                          <i className="iconoir-twitter" />
                        </Link>
                        <Link
                          target="_blank"
                          href="https://www.instagram.com/devsrikanthsridharan/"
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
                    <div data-aos="zoom-in" className="flex-1">
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
                    <div data-aos="zoom-in" className="h-full">
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
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Layout>
      </>
    );
}
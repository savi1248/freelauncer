import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
             <Layout  maincls="main-aboutpage">
                <section className="credential-area">
                    <div className="container">
                        <div className="gx-row d-flex">
                            <div className="credential-sidebar-wrap" data-aos="zoom-in">
                                <div className="credential-sidebar text-center">
                                    <div className="shadow-box">
                                        <div className="img-box">
                                            <img src="/assets/images/savitha.jpeg" alt="savitha" />
                                        </div>
                                        <h2>Savitha</h2>
                                        <p>savithaanbu00@gmail.com</p>
                                        <ul className="social-links d-flex justify-content-center">
                                            <li><Link href="#"><i className="iconoir-youtube" /></Link></li>
                                            <li><Link href="#"><i className="iconoir-twitter" /></Link></li>
                                            <li><Link href="https://www.instagram.com/__savitha._.anbu__/"><i className="iconoir-instagram" /></Link></li>
                                            <li><Link href="https://www.linkedin.com/in/savitha-a-34559a1ab//"><i className="iconoir-linkedin" /></Link></li>
                                        </ul>
                                        <Link href="/contact" className="theme-btn">Contact Me</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="credential-content flex-1">
                                <div className="credential-about" data-aos="zoom-in">
                                    <h2>About Me</h2>
                                    <p>I'm Savitha, a 23-year-old full-stack developer fueled by a passion for creating dynamic and user-centric web experiences.  The MERN stack is my playground, where I bring together the power of MongoDB, Express, React, and Node.js to build seamless applications.</p>
                                    <p>My journey into development began with a simple curiosity about how websites worked. That curiosity quickly transformed into a love for transforming ideas into fully functional web solutions. I thrive on the challenges that come with learning new technologies and pushing the boundaries of what's possible. Whether crafting elegant frontend interfaces or building robust backend systems, I find joy in the entire development process.</p>
                                    <p>Beyond coding, I'm fascinated by the intersection of design and technology. I believe in creating products that are not only functional but visually appealing and intuitive for users. Outside of work, you'll probably find me experimenting with new recipes, exploring local coffee shops, or getting lost in a good book.</p>
                                </div>
                                <div className="credential-edc-exp credential-experience">
                                    <h2 data-aos="fade-up">Experience</h2>
                                    <div className="credential-edc-exp-item" data-aos="zoom-in">
                                        <h4>2021 - Present</h4>
                                        <h3>MERN Stack Developer</h3>
                                        <h5>Freelancer</h5>
                                    </div>
                                
                                </div>
                                <div className="credential-edc-exp credential-education">
                                    <h2 data-aos="fade-up">Education</h2>
                                    <div className="credential-edc-exp-item" data-aos="zoom-in">
                                        <h4>2018 - 2022</h4>
                                        <h3>Bachelor of Information Technology</h3>
                                        <h5>SRM Easwari Engineering College</h5>
                                        <p>First Class</p>
                                    </div>
                                    <div className="credential-edc-exp-item" data-aos="zoom-in">
                                        <h4>2015 - 2018</h4>
                                        <h3>10th to 12th</h3>
                                        <h5>st.micheals.matric.hr.sec.school</h5>
                                        <p>90%</p>
                                    </div>
                                </div>
                                <div className="skills-wrap">
                                    <h2 data-aos="fade-up">Skills</h2>
                                    <div className="d-grid skill-items gap-24 flex-wrap">
                                        <div className="skill-item" data-aos="zoom-in">
                                            <span className="percent">95%</span>
                                            <h3 className="name">HTML 5</h3>
                                        </div>
                                        <div className="skill-item" data-aos="zoom-in">
                                            <span className="percent">90%</span>
                                            <h3 className="name">CSS</h3>
                                        </div>
                                        <div className="skill-item" data-aos="zoom-in">
                                            <span className="percent">92%</span>
                                            <h3 className="name">Javascript</h3>
                                        </div>
                                        <div className="skill-item" data-aos="zoom-in">
                                            <span className="percent">90%</span>
                                            <h3 className="name">React JS</h3>
                                        </div>
                                        <div className="skill-item" data-aos="zoom-in">
                                            <span className="percent">85%</span>
                                            <h3 className="name">Node Js</h3>
                                        </div>
                                        <div className="skill-item" data-aos="zoom-in">
                                            <span className="percent">87%</span>
                                            <h3 className="name">Express Js</h3>
                                        </div>
                                        <div className="skill-item" data-aos="zoom-in">
                                            <span className="percent">83%</span>
                                            <h3 className="name">MongoDB</h3>
                                        </div>
                                        <div className="skill-item" data-aos="zoom-in">
                                            <span className="percent">81%</span>
                                            <h3 className="name">PHP</h3>
                                        </div>
                                        <div className="skill-item" data-aos="zoom-in">
                                            <span className="percent">80%</span>
                                            <h3 className="name">WordPress</h3>
                                        </div>
                                        <div className="skill-item" data-aos="zoom-in">
                                            <span className="percent">87%</span>
                                            <h3 className="name">Adobe Creative Suite</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </Layout>
        </>
    )
}
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import data from "../util/project.json";
export default function Home() {
  return (
    <>
      <Layout maincls="main-workspage">
        <section className="projects-area">
          <div className="container">
            <div className="row">
            <div className="col-md-12">
              <div class="blog-sidebar">
                <div class="blog-sidebar-inner">
                  <div class="blog-sidebar-widget search-widget">
                    <div
                      class="blog-sidebar-widget-inner aos-init aos-animate"
                      data-aos="zoom-in"
                    ></div>
                  </div>
                  <div
                    class="blog-sidebar-widget recent-post-widget aos-init aos-animate"
                    data-aos="zoom-in"
                  >
                    <div class="blog-sidebar-widget-inner shadow-box">
                      <h3>My Portfolio</h3>
                      <ul>
                        <li>
                          <a href="https://zdapt.com">
                          https://zdapt.com
                          </a>
                          
                        </li>
                        
                        <li>
                          <a href="https://vakhula.com">
                          https://vakhula.com
                          </a>
                        </li>
                        <li>
                          <a href="https://theproductionunit.com.au/">
                          https://theproductionunit.com.au/
                          </a>
                        </li>
                        <li>
                          <a href="https://arohara.github.io/new_pvr/about-us.html">
                            https://newpvrdental.com
                          </a>
                          
                        </li>
                        <li>
                          <a href="https://jakdnb.com/">
                          https://jakdnb.com/
                          </a>
                          </li>
                      </ul>
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

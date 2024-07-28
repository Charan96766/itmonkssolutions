import React from "react";
import "./graphicdesigning.css";
import "./Services.css";
import { TabView, TabPanel } from "primereact/tabview";
import { IoStar } from "react-icons/io5";
import { FaAngleLeft } from "react-icons/fa6";
import photo112 from "../Photos/2149930941.jpg";
import photo2 from "../Photos/web-flow.jpg";
import { FaArrowRightLong } from "react-icons/fa6";
import asterisk from "../Photos/asterisk.svg";
import { FaCheck } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { useState } from "react";
import { useEffect } from "react";
import picture11 from "../Photos/picture11.png";
import Footer from "../Footer/Footer/Blackfooter";
function Graphicdesigning() {
  const cards = [
    {
      client_Img: `${picture11}`,
      client_profile: "MATHIAS HERESEN",
      client_role: "Founder of Gamer Pay",
      client_description: `"The other hand we denounce with righteou indg ation and dislike men who are so beguiled and demorali ed by the of pleasure of the moment.Dislike men who are so beguiled and demoraliz worlds ed by the charms of pleasure"`,
    },
    {
      client_Img: `${picture11}`,
      client_profile: "MATHIAS HERESEN",
      client_role: "Founder of Gamer Pay",
      client_description: `"The other hand we denounce with righteou indg ation and dislike men who are so beguiled and demorali ed by the of pleasure of the moment.Dislike men who are so beguiled and demoraliz worlds ed by the charms of pleasure"`,
    },
    {
      client_Img: `${picture11}`,
      client_profile: "MATHIAS HERESEN",
      client_role: "Founder of Gamer Pay",
      client_description: `"The other hand we denounce with righteou indg ation and dislike men who are so beguiled and demorali ed by the of pleasure of the moment.Dislike men who are so beguiled and demoraliz worlds ed by the charms of pleasure."`,
    },
  ];
  const envelopeIcons = Array.from({ length: 5 }, (_, index) => (
    <IoStar key={index} className="envelope-icon" />
  ));

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrevClick = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [cards.length]);

  return (
    <>
      <div className="test2-services-svs">
        <h1 className="top-services-heading-svs">Graphic Designing</h1>
      </div>

      <div className="marr-svs">
        <div className="marque-section-svs section-padding section-bg-2 pt-5">
          <div className="container-fluid">
            <div className="marquee-wrapper text-slider style-height">
              <div className="marquee-inner-svs to-left">
                <ul className="marqee-list d-flex">
                  <li className="marquee-item-svs style-2">
                    <span className="text-slider">
                      <img
                        src={asterisk}
                        alt="img"
                        className="slider-marq-img-svs"
                      />
                    </span>
                    <span className="text-slider text-style">
                      Web Design and Development
                    </span>
                    <span className="text-slider">
                      <img
                        src={asterisk}
                        alt="img"
                        className="slider-marq-img-svs"
                      />
                    </span>
                    <span className="text-slider text-style">
                      Mobile Application Development
                    </span>
                    <span className="text-slider">
                      <img
                        src={asterisk}
                        alt="img"
                        className="slider-marq-img-svs"
                      />
                    </span>
                    <span className="text-slider text-style">
                      Testing Services
                    </span>
                    <span className="text-slider">
                      <img
                        src={asterisk}
                        alt="img"
                        className="slider-marq-img-svs"
                      />
                    </span>
                    <span className="text-slider text-style">
                      Health Care Services
                    </span>
                    <span className="text-slider">
                      <img
                        src={asterisk}
                        alt="img"
                        className="slider-marq-img-svs"
                      />
                    </span>
                    <span className="text-slider text-style">
                      Content Writing and Moderation​
                    </span>
                    <span className="text-slider">
                      <img
                        src={asterisk}
                        alt="img"
                        className="slider-marq-img-svs"
                      />
                    </span>
                    <span className="text-slider text-style">
                      Graphic Designing
                    </span>
                    <span className="text-slider">
                      <img
                        src={asterisk}
                        alt="img"
                        className="slider-marq-img-svs"
                      />
                    </span>
                    <span className="text-slider text-style">
                      E-Commerce Projects​&lt;
                    </span>
                    <span className="text-slider">
                      <img
                        src={asterisk}
                        alt="img"
                        className="slider-marq-img-svs"
                      />
                    </span>
                    <span className="text-slider text-style">
                      Digital Marketing​
                    </span>
                    <span className="text-slider">
                      <img
                        src={asterisk}
                        alt="img"
                        className="slider-marq-img-svs"
                      />
                    </span>
                    <span className="text-slider text-style">
                      Non-IT Services​
                    </span>
                    <span className="text-slider">
                      <img
                        src={asterisk}
                        alt="img"
                        className="slider-marq-img-svs"
                      />
                    </span>
                    <span className="text-slider text-style">HR Services​</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="services-details-svs fix-svs section-padding-svs">
        <div className="container-svs">
          <div className="service-details-wrapper">
            <div className="row-svs">
              <div className="complete-div-services">
                <div className="col-12-svs col-lg-8-svs services-top-one">
                  <div className="service-details-items-svs">
                    <div className="details-image">
                      <img src={photo112} alt="img" />
                    </div>
                    <div className="details-content">
                      <h2>
                        "Transform Your Brand's Visual Identity With Expert
                        Graphic Design Services By IMS."
                      </h2>
                      <h3>
                        <b>Elevate Your Brand's Image For Maximum Impact</b>
                      </h3>
                      <p>
                        In today's visually-driven world, graphic design plays a
                        crucial role in shaping brand identity and
                        communication. At IMS, we understand the power of
                        compelling visuals in capturing audience attention and
                        conveying your brand's message effectively.
                      </p>
                      <br />
                      <p>
                        Our graphic design services go beyond just creating
                        eye-catching visuals; we strive to encapsulate the
                        essence of your brand's personality and values in every
                        design element. From logo design and branding materials
                        to marketing collateral and digital assets, we tailor
                        our designs to align with your brand identity and
                        resonate with your target audience.
                      </p>

                      <div className="service-details-video">
                        <div className="row-svs g-4 align-items-center">
                          <div className="col-lg-12-svs">
                            <div className="details-video-content"></div>
                          </div>

                          <div className="col-lg-12-svs">
                            <div className="video-image">
                              <img src={photo2} alt="img" />
                              <div className="video-box">
                                <a
                                  href="https://youtu.be/DFmhX5h6Lig?si=Za9niKJyToT_KS3r"
                                  className="video-btn ripple video-popup"
                                >
                                  <i className="fas fa-play"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" services-bottom-one">
                  <div className="main-sidebar bg-container-svs">
                    <div className="single-sidebar-widget">
                      <div className="wid-title">
                        <h3>All Services</h3>
                      </div>
                      <div className="service-category">
                        <a href="Web Design and Development">
                          <div className="arrow-icons-services">
                            <div>Web Design and Development</div>
                            <div>
                              <FaArrowRightLong />
                            </div>
                          </div>
                        </a>
                        <a href="Mobile Application Development">
                          <div className="arrow-icons-services">
                            <div>Mobile Application Development</div>
                            <div>
                              <FaArrowRightLong />
                            </div>
                          </div>
                        </a>
                        <a href="Testing Services">
                          <div className="arrow-icons-services">
                            <div>Testing Services</div>
                            <div>
                              <FaArrowRightLong />
                            </div>
                          </div>
                        </a>
                        <a href="Health Care Services">
                          <div className="arrow-icons-services">
                            <div>Health Care Services</div>
                            <div>
                              <FaArrowRightLong />
                            </div>
                          </div>
                        </a>
                        <a href="Content Writing and Moderation">
                          <div className="arrow-icons-services">
                            <div>Content Writing and Moderation</div>
                            <div>
                              <FaArrowRightLong />
                            </div>
                          </div>
                        </a>
                        <a href="Graphic Designing" className="active">
                          <div className="arrow-icons-services">
                            <div>Graphic Designing</div>
                            <div>
                              <FaArrowRightLong />
                            </div>
                          </div>
                        </a>

                        <a href="E-Commerce">
                          <div className="arrow-icons-services">
                            <div>E-commerce Projects</div>
                            <div>
                              <FaArrowRightLong />
                            </div>
                          </div>
                        </a>
                        <a href="Digital Marketing">
                          <div className="arrow-icons-services">
                            <div>Digital Marketing</div>
                            <div>
                              <FaArrowRightLong />
                            </div>
                          </div>
                        </a>
                        <a href="Non-IT Services">
                          <div className="arrow-icons-services">
                            <div>Non-IT Services</div>
                            <div>
                              <FaArrowRightLong />
                            </div>
                          </div>
                        </a>
                        <a href="HR Services">
                          <div className="arrow-icons-services">
                            <div>HR Services</div>
                            <div>
                              <FaArrowRightLong />
                            </div>
                          </div>
                        </a>
                        <div></div>

                        <div className="bottom-content-matter-svs">
                          <div class="accordion-item-svs">
                            <div
                              class="accordion"
                              id="accordionExample"
                              style={{ padding: "0%", margin: "0px" }}
                            >
                              <div
                                class="accordion-item-svs svs-h22"
                                style={{ padding: "0%" }}
                              >
                                <h2
                                  class="accordion-header-svs svs-h2"
                                  id="headingOne"
                                >
                                  <button
                                    class="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne"
                                    aria-expanded="false"
                                    id="Element"
                                    style={{
                                      boxShadow:
                                        "-1px -1px -1px rgba(0, 0, 0, 0.2)",
                                    }}
                                  >
                                    Tools And Technologies Used?
                                  </button>
                                </h2>
                                <div
                                  id="collapseOne"
                                  class="accordion-collapse collapse"
                                  aria-labelledby="headingOne"
                                  data-bs-parent="#accordionExample"
                                >
                                  <div class="accordion-body-svs">
                                    Text Editors
                                    <br />
                                    Graphic Design Tools
                                    <br />
                                    Wireframing and Prototyping Tools
                                    <br />
                                    <span className="front-end-line-svs">
                                      Frontend Development:
                                    </span>
                                    <br />
                                    HTML
                                    <br />
                                    CSS
                                    <br />
                                    JAVA SCRIPT
                                    <br />
                                    REACT JS
                                    <br />
                                    Backend Development
                                    <br />
                                    DBMS
                                    <br />
                                    Web Hosting & Optimization Tools
                                    <br />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="bottom-part-last-services"
            style={{ padding: "3%", margin: "0px" }}
          >
            <div className="left-part-bottom-services-togg">
              <div>
                <div className="our-projects-div">
                  <div className="our-projects-heading-div">
                    <h1 className="our-projects-heading">OUR PROJECTS</h1>
                  </div>
                  <div className="happy-clients-heading-div">
                    <h1 className="happy-clients-heading">
                      Our Happy Clients Projects
                    </h1>
                  </div>
                </div>
                <div
                  className="ourprojects-card-div"
                  style={{ marginLeft: "10px" }}
                >
                  <TabView>
                    <TabPanel
                      header="Our Approach"
                      className=""
                      style={{ textDecoration: "none" }}
                    >
                      <div>
                        <hr
                          className="our-approch-horizantal-line"
                          style={{ textAlign: "center" }}
                        />
                      </div>
                      <div className="our-approch-content">
                        <div className="our-approch-para">
                          <p className="m-0">
                            Before diving into design, we take the time to
                            understand the purpose of your graphic design
                            project. Whether it's creating a new logo, designing
                            marketing materials, or developing branding assets,
                            we clarify the primary goals and objectives to
                            ensure that our designs align with your business
                            needs and objectives.
                          </p>
                        </div>
                        <div className="our-approch-list">
                          <ul className="our-approch-right-side">
                            <p>
                              <span className="our-approch-icon">
                                <FaCheck />
                              </span>
                              &nbsp;<b>Understand the Purpose</b>
                            </p>
                            <p>
                              <span className="our-approch-icon">
                                <FaCheck />
                              </span>
                              &nbsp;<b>Research and Analysis</b>
                            </p>
                            <p>
                              <span className="our-approch-icon">
                                <FaCheck />
                              </span>
                              &nbsp;<b>Planning and Wireframing</b>
                            </p>
                          </ul>
                          <ul className="our-approch-left-side">
                            <p>
                              <span className="our-approch-icon">
                                <FaCheck />{" "}
                              </span>
                              &nbsp;<b>Design & Development</b>
                            </p>
                            <p>
                              <span className="our-approch-icon">
                                <FaCheck />
                              </span>{" "}
                              &nbsp;<b>Testing and Quality Assurance</b>
                            </p>
                            <p>
                              <span className="our-approch-icon">
                                <FaCheck />
                              </span>{" "}
                              &nbsp;<b>Post-launch Optimization</b>
                            </p>
                          </ul>
                        </div>
                        <div className="our-approch-button-div">
                          <a href="/Contact Us" className="our-approch-button">
                            <span>Contact Us</span>
                            <span>
                              <FaAngleRight />
                            </span>
                          </a>
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel header="Project Goals">
                      <div>
                        <hr className="project-goals-horizantal-line" />
                      </div>
                      <div className="our-approch-content">
                        <div className="our-approch-para">
                          <p className="m-0">
                            Your Brand's Visual Identity Is Your Online
                            Representation; Make It Memorable with Expert
                            Graphic Design by IMS.Build a Strong Visual Identity
                            for Lasting Impressions. In today's competitive
                            marketplace, your brand's visual identity is crucial
                            for capturing attention and leaving a lasting
                            impression on your audience.
                          </p>
                        </div>
                        <div className="our-approch-list">
                          <ul className="our-approch-right-side">
                            <p>
                              <span className="our-approch-icon">
                                <FaCheck />
                              </span>
                              &nbsp;<b>Memorable Visual Identity</b>
                            </p>
                            <p>
                              <span className="our-approch-icon">
                                <FaCheck />
                              </span>
                              &nbsp;<b>Consistent Branding Across Platforms</b>
                            </p>
                          </ul>
                          <ul className="our-approch-left-side">
                            <p>
                              <span className="our-approch-icon">
                                <FaCheck />
                              </span>
                              &nbsp;<b>Engaging User Experience</b>
                            </p>
                            <p>
                              <span className="our-approch-icon">
                                <FaCheck />
                              </span>{" "}
                              &nbsp;<b>SEO-friendly Design</b>
                            </p>
                          </ul>
                        </div>
                        <div className="our-approch-button-div">
                          <a href="" className="our-approch-button">
                            <span>Contact Us</span>
                            <span>
                              <FaAngleRight />
                            </span>
                          </a>
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel header="Clients">
                      <div>
                        <hr className="our-approch-horizantal-line" />
                      </div>
                      <p className="m-3">
                        <div clients-cards>
                          <div>{/* <img src={} alt='new'/> */}</div>
                          <div className="clients-cards-content">
                            <div className="card-slider-container">
                              <div
                                className="card-slider"
                                style={{
                                  transform: `translateX(-${
                                    currentIndex * 100
                                  }%)`,
                                }}
                              >
                                {cards.map((card, index) => (
                                  <div key={index} className="card">
                                    <div className="client_picture">
                                      <img src={card.client_Img} />
                                    </div>
                                    <div className="client_profile">
                                      {card.client_profile}
                                    </div>
                                    <div className="client_role">
                                      {" "}
                                      {card.client_role}
                                    </div>
                                    <div className="client_description">
                                      {card.client_description}
                                    </div>
                                    <div className="approch-stars">
                                      <span style={{ color: "goldenrod" }}>
                                        {envelopeIcons}
                                      </span>
                                    </div>
                                  </div>
                                ))}
                              </div>
                              <div className="approch-navigationButtons">
                                <button
                                  className="approch-arrow"
                                  onClick={handlePrevClick}
                                >
                                  <FaAngleLeft />
                                </button>
                                <button
                                  className="approch-arrow"
                                  onClick={handleNextClick}
                                >
                                  <FaAngleRight />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </p>
                      <div className="our-approch-button-div">
                        <a href="" className="clients-button">
                          <span>Contact Us</span>
                          <span>
                            <FaAngleRight />
                          </span>
                        </a>
                      </div>
                    </TabPanel>
                  </TabView>
                </div>
              </div>
            </div>
            <div className="jumping-bg-container">
              <div className="services-group-img55">
                <div class="services-post-date">
                  <h4 className="services-h4-svs">
                    25th <br />
                    <span>DEC</span>
                  </h4>
                </div>
              </div>
              <div>
                              <p className="services-product-design">Product Design</p>
                          </div>
                          
            
              <div className="single-news-items">
                <div className="bottom-services-anchor">
                  <p>
                    {" "}
                    <a href="#0" className="services-bottom-underline-text-svs">
                      IT Service Case Studies
                      <br />
                      Accelerating Business Fly <br /> Success Tech
                    </a>{" "}
                  </p>
                </div>
                <div className="bottom-services-anchor1-div">
                  <a
                    href="http://jyotiradityascindia.in"
                    style={{ textDecoration: "none" }}
                  >
                    <p className="bottom-services-anchor1 anchor-svs">
                      Visit Site Here
                    </p>
                  </a>
                  <div className="services-anchor-button-svs">
                    <FaAngleRight className="services-icons-svs" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-services-anchor">
        {/* {" "}
        <a href="#0" className="services-bottom-underline-text-svs">
          IT Service Case Studies
          <br />
          Accelerating Business Fly <br /> Success Tech
        </a>{" "} */}
      </div>
      <div id="dummmy">
        <p></p>
      </div>
      <Footer />
    </>
  );
}
export default Graphicdesigning;

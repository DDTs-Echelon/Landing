import React from "react";

import Navbar from "../components/navbar";
import Slide from "../components/slide";
import Footer from "../components/footer";
import Copyright from "../components/copyright";
import GetStarted from "../components/forms/get-started";
import "./home.css";
import { Box } from "@mui/material";
import { testimonials } from "../components/primitives/testimonials";

const Home = (props) => {
  return (
    <div className="home-container">
      <Navbar rootClassName="navbar-root-class-name"></Navbar>
      <main className="home-main">
        <div id="home" className="section-container home-hero">
          <div className="home-max-width max-content-container">
            <div className="home-content-container">
              <h1 className="home-text01">
                <span className="home-text04">
                  Unlock your Learning Potential with
                </span>
                <span className="home-text03">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: " ",
                    }}
                  />
                </span>
                <span className="home-text02">LearnerPort</span>
                <span className="home-text04">.</span>
                <br></br>
              </h1>
              <h2 className="home-heading">
                The one-stop education portal where we don’t just educate, we
                elevate!
              </h2>
              <div style={{ width: "100%" }}>
                <GetStarted />
              </div>
              <div className="home-features-container">
                <div className="home-feature">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon02"
                  >
                    <path d="M733.714 419.429c0-9.714-3.429-19.429-10.286-26.286l-52-51.429c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-233.143 232.571-129.143-129.143c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-52 51.429c-6.857 6.857-10.286 16.571-10.286 26.286s3.429 18.857 10.286 25.714l206.857 206.857c6.857 6.857 16.571 10.857 25.714 10.857 9.714 0 19.429-4 26.286-10.857l310.286-310.286c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text07">
                    Streamline Your Learning Across Institutions
                  </span>
                </div>
                <div className="home-feature1">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon04"
                  >
                    <path d="M733.714 419.429c0-9.714-3.429-19.429-10.286-26.286l-52-51.429c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-233.143 232.571-129.143-129.143c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-52 51.429c-6.857 6.857-10.286 16.571-10.286 26.286s3.429 18.857 10.286 25.714l206.857 206.857c6.857 6.857 16.571 10.857 25.714 10.857 9.714 0 19.429-4 26.286-10.857l310.286-310.286c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text08">
                    Access Top Educational Resources Instantly
                  </span>
                </div>
                <div className="home-feature2">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon06"
                  >
                    <path d="M733.714 419.429c0-9.714-3.429-19.429-10.286-26.286l-52-51.429c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-233.143 232.571-129.143-129.143c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-52 51.429c-6.857 6.857-10.286 16.571-10.286 26.286s3.429 18.857 10.286 25.714l206.857 206.857c6.857 6.857 16.571 10.857 25.714 10.857 9.714 0 19.429-4 26.286-10.857l310.286-310.286c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text09">
                    Upgrade Your All-rounded Education
                  </span>
                </div>
                <div className="home-feature3">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon08"
                  >
                    <path d="M733.714 419.429c0-9.714-3.429-19.429-10.286-26.286l-52-51.429c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-233.143 232.571-129.143-129.143c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-52 51.429c-6.857 6.857-10.286 16.571-10.286 26.286s3.429 18.857 10.286 25.714l206.857 206.857c6.857 6.857 16.571 10.857 25.714 10.857 9.714 0 19.429-4 26.286-10.857l310.286-310.286c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text10">
                    Personalise Your Learning Journey
                  </span>
                </div>
              </div>
            </div>
            <img
              alt="image"
              src="/playground_assets/illustration-1-700h.png"
              className="home-image1"
            />
          </div>
        </div>
        <div className="home-problem-section section-container">
          <div className="home-max-width1 max-content-container">
            <h2 className="home-text11">
              <span>Are you stuck in the confusing education maze?</span>
              <br></br>
            </h2>
            <img
              alt="image"
              src="/playground_assets/maze-1200w.png"
              className="home-image2"
            />
            <span className="home-text14">
              <span>
                Navigating the contemporary education system can be confusing
                and stressful. Whether you&apos;re a student trying to choose
                the right course, a parent looking for the best school for your
                child, or a teacher struggling to connect with your tutees, it
                can be hard to know where to turn. LearnerPort is the remedy to
                all your problems.
                <span
                  dangerouslySetInnerHTML={{
                    __html: " ",
                  }}
                />
              </span>
              <br></br>
            </span>
          </div>
        </div>
        <div id="features" className="home-solution-section section-container">
          <h2 className="home-text17">
            <span>Streamline your Learning with LeanerPort</span>
            <br></br>
          </h2>
          <div className="home-max-width2 max-content-container">
            <div className="home-image-container">
              <img
                alt="image"
                src="/playground_assets/illustration-2-600w.png"
                className="home-image3"
              />
            </div>
            <div className="home-content-container1">
              <h3 className="home-text20">
                <span className="home-text21">Simplify your Education</span>
                <br></br>
              </h3>
              <span className="home-text23">
                <span>
                  With LearnerPort, you can easily navigate through your
                  learning progress across multiple institutions and tutors.
                </span>
                <br></br>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: " ",
                    }}
                  />
                </span>
                <br></br>
                <span>
                  No more juggling different logins, schedules, and assignments
                  – LearnerPort puts everything in one place for you. Efficient
                  solution for effective education.
                </span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-max-width3 max-content-container">
            <div className="home-content-container2">
              <h3 className="home-text30">
                <span className="home-text31">Expand your Horizons</span>
                <br></br>
              </h3>
              <span className="home-text33">
                <span>
                  Whether you&apos;re a student, professional, or lifelong
                  learner, LearnerPort gives you access to the best educational
                  resources out there.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: " ",
                    }}
                  />
                </span>
                <br></br>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: " ",
                    }}
                  />
                </span>
                <br></br>
                <span>
                  Find everything you need under one roof. Textbooks, revision
                  notes, summary videos, interactive tools, and more that make
                  learning easy.
                </span>
                <br></br>
              </span>
            </div>
            <div className="home-image-container1">
              <img
                alt="image"
                src="/playground_assets/illustration-3-500h.png"
                className="home-image4"
              />
            </div>
          </div>
          <div className="home-max-width4 max-content-container">
            <div className="home-image-container2">
              <img
                alt="image"
                src="/playground_assets/illustration-4-600w.png"
                className="home-image5"
              />
            </div>
            <div className="home-content-container3">
              <h3 className="home-text40">
                <span className="home-text41">Customise your Experience</span>
                <br></br>
              </h3>
              <span className="home-text43">
                <span>
                  Set your own pace, choose your own topics, and get a front row
                  seat to your growth. With LearnerPort, you can curate a
                  learning journey best suited to your goals and interests.
                </span>
                <br></br>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: " ",
                    }}
                  />
                </span>
                <br></br>
                <span>
                  Whether you&apos;re looking to boost your grades, advance your
                  career, or simply learn something new, LearnerPort has you
                  covered.
                </span>
                <br></br>
              </span>
            </div>
          </div>
        </div>
        <div className="home-testimonials section-container">
          <div className="home-max-width5 max-content-container">
            <h2 className="home-text50">
              <span className="home-text51">People love LeanerPort.</span>
              <br className="home-text52"></br>
              <span className="home-text53">So Would You</span>
              <br></br>
            </h2>
          </div>
          <div data-type="slider" className="home-slider">
            {testimonials.map((testimonial) => (
              <Slide
                key={testimonial.id}
                Role={testimonial.Role}
                Author={testimonial.Author}
                image_src={testimonial.image_src}
                Testimonial={testimonial.Testimonial}
                rootClassName="slide-root-class-name"
              ></Slide>
            ))}
          </div>
        </div>
        <hr style={{ width: "90%", border: "solid 1px grey" }} />
        <div className="home-cta section-container">
          <div className="home-max-width6 max-content-container">
            <div className="home-content-container4">
              <h1 className="home-text55">
                <span className="home-text58">
                  Get started today.
                  <br />
                  Try 2 free demo classes!
                </span>
              </h1>
              <span className="home-text59">
                <span className="home-text60">
                  Sign up &amp; get ported to the smarter dimension.
                </span>
                <br className="home-text61"></br>
              </span>
              <Box sx={{ width: { sm: "85%", xs: "100%" } }}>
                <GetStarted />
              </Box>
              <div className="home-features-container1">
                <div className="home-feature4">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon12"
                  >
                    <path d="M733.714 419.429c0-9.714-3.429-19.429-10.286-26.286l-52-51.429c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-233.143 232.571-129.143-129.143c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-52 51.429c-6.857 6.857-10.286 16.571-10.286 26.286s3.429 18.857 10.286 25.714l206.857 206.857c6.857 6.857 16.571 10.857 25.714 10.857 9.714 0 19.429-4 26.286-10.857l310.286-310.286c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text62">
                    Streamline Your Learning Across Institutions
                  </span>
                </div>
                <div className="home-feature5">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon14"
                  >
                    <path d="M733.714 419.429c0-9.714-3.429-19.429-10.286-26.286l-52-51.429c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-233.143 232.571-129.143-129.143c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-52 51.429c-6.857 6.857-10.286 16.571-10.286 26.286s3.429 18.857 10.286 25.714l206.857 206.857c6.857 6.857 16.571 10.857 25.714 10.857 9.714 0 19.429-4 26.286-10.857l310.286-310.286c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text63">
                    Access Top Education Resources Instantly
                  </span>
                </div>
                <div className="home-feature6">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon16"
                  >
                    <path d="M733.714 419.429c0-9.714-3.429-19.429-10.286-26.286l-52-51.429c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-233.143 232.571-129.143-129.143c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-52 51.429c-6.857 6.857-10.286 16.571-10.286 26.286s3.429 18.857 10.286 25.714l206.857 206.857c6.857 6.857 16.571 10.857 25.714 10.857 9.714 0 19.429-4 26.286-10.857l310.286-310.286c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text64">
                    <span>Upgrade Your All-rounded Education</span>
                    <br></br>
                  </span>
                </div>
                <div className="home-feature7">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon18"
                  >
                    <path d="M733.714 419.429c0-9.714-3.429-19.429-10.286-26.286l-52-51.429c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-233.143 232.571-129.143-129.143c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-52 51.429c-6.857 6.857-10.286 16.571-10.286 26.286s3.429 18.857 10.286 25.714l206.857 206.857c6.857 6.857 16.571 10.857 25.714 10.857 9.714 0 19.429-4 26.286-10.857l310.286-310.286c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text67">
                    <span>Personalise Your Learning Journey Today</span>
                    <br></br>
                  </span>
                </div>
              </div>
            </div>
            <div className="home-image-container3">
              <img
                alt="image"
                src="/playground_assets/mockup-900w.png"
                className="home-image6"
              />
            </div>
          </div>
        </div>
        <hr
          style={{ width: "90%", border: "solid 1px grey" }}
          className="hr-last-main"
        />
      </main>
      <Footer rootClassName="footer-root-class-name"></Footer>
      <Copyright></Copyright>
    </div>
  );
};

export default Home;

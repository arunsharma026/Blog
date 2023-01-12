import React from "react";
import { Helmet } from "react-helmet";
import Team from "./components/Team";

const About = () => {
  return (
    <div className="content">
      <Helmet>
        <title>Blog-X : About</title>
        <style type="text/css">
          {`
              .header-inner {
                Background:#000; 
              }
              #wrapper{
                  padding-top: 110px;
              }
            `}
        </style>
      </Helmet>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title sect_dec">
                <h2>Our Story</h2>
                <h4>Who we are</h4>
              </div>
              <div className="about-wrap">
                <div className="about-img fl-wrap">
                  <img
                    src="assets/images/about.jpg"
                    className="respimg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="about-box">
            <div className="row">
              <div className="col-md-12">
                <p className="first-para">
                  Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat
                  nostrud cupidatat dolor sunt sint sit nisi est eu exercitation
                  incididunt adipisicing veniam velit id fugiat enim mollit amet
                  anim veniam dolor dolor irure velit commodo cillum sit nulla
                  ullamco magna amet magna cupidatat qui labore cillum cillum
                  cupidatat fugiat nostrud.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <p class="has-drop-cap">
                  Aliquam luctus tempor orci sit amet finibus. Duis porttitor,
                  ex ac molestie consectetur, metus tellus venenatis velit, et
                  interdum enim lorem a purus. Fusce scelerisque, massa vitae
                  rhoncus elementum, enim acinia pharetra?{" "}
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  ornare sem sed quam tempus aliquet vitae eget dolor. Proin eu
                  ultrices libero. Curabitur vulputate vestibulum elementum.
                  Suspendisse id neque a nibh mollis blandit. Quisque varius
                  eros ac purus dignissim. Proin eu ultrices libero.{" "}
                </p>
              </div>
              <div className="col-md-6">
                <p>
                  Aliquam luctus tempor orci sit amet finibus. Duis porttitor,
                  ex ac molestie consectetur, metus tellus venenatis velit, et
                  interdum enim lorem a purus. Fusce scelerisque, massa vitae
                  rhoncus elementum, enim acinia pharetra?{" "}
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  ornare sem sed quam tempus aliquet vitae eget dolor. Proin eu
                  ultrices libero. Curabitur vulputate vestibulum elementum.
                  Suspendisse id neque a nibh mollis blandit. Quisque varius
                  eros ac purus dignissim. Proin eu ultrices libero.{" "}
                </p>
              </div>
            </div>
          </div>

          <Team />
        </div>
      </section>
    </div>
  );
};

export default About;

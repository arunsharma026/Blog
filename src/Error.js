import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Error = () => {
  return (
    <>
      <Helmet>
        <title>Blog-X : 404 </title>
        <style type="text/css">
          {`
                .header-inner {
                  Background:#000; 
                }
                #wrapper{
                    padding-top: 110px;
                }
                .bg{
                  position: absolute;
                }
                .bg-wrap {
                  position: absolute;
                }
         `}
        </style>
      </Helmet>

      <section className="hero-section error-section">
        <div className="bg-wrap hero-section_bg">
          <div className="bg">
            <img src="assets/images/404.jpg" />
          </div>
        </div>
        <div className="container">
          <div className="error-wrap">
            <h2>404</h2>
            <p>
              We're sorry, but the Page you were looking for, couldn't be found.
            </p>
            <div className="clearfix"></div>

            <p>Or</p>
            <Link to="/" className="btn color-btn flat-btn">
              {" "}
              <span>Back to Home Page</span>{" "}
              <i className="fa fa-caret-right"></i>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Error;

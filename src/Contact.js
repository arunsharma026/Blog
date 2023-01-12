import React, { useState } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";

const Contact = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState(false);
  const [fail, setfail] = useState(false);

  function onTextfildChange(e) {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  }
  // function for submit action and post data using API
  function onFormsubmit(e) {
    e.preventDefault();

    if (
      !contact.name ||
      !contact.email ||
      !contact.subject ||
      !contact.message
    ) {
      setfail(true);
      setStatus(false);
    } else {
      try {
        axios.post(`https://suntechapps.com/react_blog/api/contact`, contact);
        setStatus(true);
        setfail(false);
        //console.log(contact)
        setContact({ name: "", email: "", subject: "", message: "" });
      } catch (error) {
        console.logo(`Error: Solve Error first- ${error}`);
      }
      setStatus(true);
    }
  }

  return (
    <div className="content">
      <Helmet>
        <title>Blog-X : Contact</title>
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
            <div className="col-md-4">
              <div className="pr-subtitle prs_big">Details</div>

              <ul className="contacts-list fl-wrap">
                <li>
                  <span>
                    <i className="fa fa-map-marker"></i> Adress :
                  </span>{" "}
                  <a href="#">USA 28TH Brook NY</a>
                </li>
                <li>
                  <span>
                    <i className="fa fa-phone"></i> Phone :
                  </span>{" "}
                  <a href="#">+6(123)987654</a>
                </li>
                <li>
                  <span>
                    <i className="fa fa-envelope"></i> Mail :
                  </span>{" "}
                  <a href="#">blogx@domain.com</a>
                </li>
              </ul>

              <div className="contact-social fl-wrap">
                <span className="cs-title">Find us on: </span>
                <ul>
                  <li>
                    <a href="#" target="_blank">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i className="fa fa-vk"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i className="fa fa-pinterest"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-8">
              <div className="pad-con fl-wrap">
                <div className="pr-subtitle prs_big">Drop us a line</div>
                <p>
                  Ut euismod ultricies sollicitudin. Curabitur sed dapibus
                  nulla. Nulla eget iaculis lectus. Mauris ac maximus neque. Nam
                  in mauris quis libero sodales eleifend. Morbi varius, nulla
                  sit amet rutrum elementum, est elit finibus tellus, ut
                  tristique elit risus at metus. In ut odio libero, at vulputate
                  urna. Nulla tristique mi a massa convallis cursus. Nulla eu mi
                  magna. Etiam suscipit commodo gravida.
                </p>
                <div id="contact-form" style={{ marginTop: "20px" }}>
                  <form className="custom-form">
                    {status ? (
                      <h1 className="success">
                        Thank you, We will Contact you soon..
                        <br />
                      </h1>
                    ) : (
                      " "
                    )}
                    {fail ? (
                      <h2 className="fail">Please fill all field</h2>
                    ) : null}

                    <fieldset>
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name *"
                        value={contact.name}
                        onChange={(e) => onTextfildChange(e)}
                      />
                      <input
                        type="text"
                        name="email"
                        placeholder="Email Address*"
                        value={contact.email}
                        onChange={(e) => onTextfildChange(e)}
                      />
                      <input
                        type="text"
                        name="subject"
                        placeholder="Subject*"
                        value={contact.subject}
                        onChange={(e) => onTextfildChange(e)}
                      />
                      <textarea
                        name="message"
                        cols="40"
                        rows="3"
                        placeholder="Your Message:"
                        value={contact.message}
                        onChange={(e) => onTextfildChange(e)}
                      />
                    </fieldset>
                    <button
                      className="btn   color-bg float-btn"
                      id="submit"
                      onClick={(e) => onFormsubmit(e)}
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

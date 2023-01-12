import React, { useEffect, useState } from "react";
import axios from "axios";
import { data } from "jquery";
const Subscribe = () => { 

  const [email, setEmail] = useState({ email: "" });
  const [status, setStatus] = useState(false);
  const [fail, setfail] = useState(false);

  function getEmail(e) {
    e.preventDefault();

    if (!email.email) {
      setfail(true);
      setStatus(false);
    } else {
      try {
        axios.post(`https://suntechapps.com/react_blog/api/subscribe`, email);
        setStatus(true);
        setfail(false);
        setEmail({ email: "" });
        const messagse = email.message;
      } catch (error) {
        console.logo(`Error: Solve Error first- ${error}`);
      }
      setStatus(true);
    }
  }

  function emailChangehandel(e) {
    setEmail({
      ...email,
      [e.target.name]: e.target.value,
    });
  }
 
  return (
    <>
      <form id="subscribe" className="fl-wrap">
        <input
          className="enteremail"
          name="email"
          placeholder="Your Email"
          type="email"
          value={email.email}
          onChange={(e) => emailChangehandel(e)}
        />
        <button
          type="submit"
          id="subscribe-button"
          className="subscribe-button color-bg"
          onClick={(e) => getEmail(e)}
        >
          Send{" "}
        </button>
        <label for="subscribe-email" className="subscribe-message">
          {status ? (
            <h1 className="success">
              Thank you for Subscribe.
              <br />
            </h1>
          ) : (
            " "
          )}
          {fail ? <h2 className="fail">Please Enter Your Email</h2> : null}
        </label>
      </form>
    </>
  );
};

export default Subscribe;

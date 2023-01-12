import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const CommentForm = () => {
  const { id } = useParams();

  const [user, setUser] = useState({
    name: "",
    email: "",
    message: "",
    blog_id: id,
  });

  const [status, setStatus] = useState(false);
  const [fail, setfail] = useState(false);

  const [issubmitted, setisSubmitted] = useState(false);
  const [error, setError] = useState({});

  function onTextfildChange(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

  // function for post comment using api 
  function onFormsubmit(e) {
    e.preventDefault();
    setError(validate(user));
    if (!user.name || !user.email || !user.message) {
      alert();
      setfail(true);
      setStatus(false);
    } else {
      try {
        axios.post(`https://suntechapps.com/react_blog/api/comment`, user, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        setStatus(true);
        setfail(false);
        setUser({ name: "", email: "", message: "", blog_id: id });
        console.log(user);
      } catch (error) {
        console.logo(`Error: Solve Error first- ${error}`);
        if (error && error.response) setError(error.response.data.message);
      }
      setStatus(true);
    }
  }

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.name) {
      errors.name = "Please Fill Name";
    }
    if (!values.email) {
      errors.email = "Please Fill Email";
    }
    if (values.email) {
      if (!regex.test(values.email)) {
        errors.email = "Please Fill Valid Email";
      }
    }

    return errors;
  };

  useEffect(() => {
    if (Object.keys(error).length === 0 && issubmitted) {
    }
  }, [error]);

  return (
    <form className="add-comment custom-form">
      {status ? (
        <h1 className="success">
          Thank you, We will Update soon..
          <br />
        </h1>
      ) : (
        " "
      )} 
      <fieldset>
        <div className="row">
          <div className="col-md-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name *"
              value={user.name}
              onChange={(e) => onTextfildChange(e)}
            />
            <p className="error">{error.name}</p>
          </div>
          <div className="col-md-6">
            <input
              type="text"
              name="email"
              placeholder="Email Address*"
              value={user.email}
              onChange={(e) => onTextfildChange(e)}
            />
            <p className="error">{error.email}</p>
          </div>
        </div>
        <textarea
          placeholder="Your Comment:"
          value={user.message}
          name="message"
          onChange={(e) => onTextfildChange(e)}
        />
        <input type="hidden" name="blog_id" value={id} />
      </fieldset>
      <button
        className="btn float-btn color-btn"
        onClick={(e) => onFormsubmit(e)}
      >
        {" "}
        Submit Comment{" "}
      </button>
    </form>
  );
};

export default CommentForm;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const HomeSlider = () => {
  const [sliderList, setSliderList] = useState([]);
  const [isActive, setIsactive] = useState(false);

  //function for geting data using APIs
  async function getAllblog() {
    try {
      const sliderList = await axios.get(
        "https://suntechapps.com/react_blog/api/blog"
      );
      const allBlogs = await sliderList.data.blogs;

      setSliderList(allBlogs);
      setIsactive(true);
    } catch (error) {
      console.log("Somthing is wrong");
    }
  }

  useEffect(() => {
    getAllblog();
  }, []);

  return (
    <>
      <div id="carousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner" role="listbox">
          {sliderList.map((curElm, index) => {
            return (
              <div
                className={`carousel-item ${index == 0 ? "active" : ""}`}
                style={{ backgroundImage: `url(${curElm.image})` }}
                key={index}
              >
                <div className="caption">
                  <Link to={`post-single/${curElm.id}`} className="tags">
                    {curElm.category}
                  </Link>
                  <h1>
                    <Link to={`post-single/${curElm.id}`}> {curElm.title}</Link>
                  </h1>
                  <h2>
                    <Link to={`post-single/${curElm.id}`}>
                      {curElm.description.slice(0, 150)}{" "}
                    </Link>
                  </h2>
                </div>
              </div>
            );
          })}
        </div>

        <a
          className="carousel-control-prev"
          href="#carousel"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carousel"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </>
  );
};

export default HomeSlider;

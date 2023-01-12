import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const BlogCategory = ({ catag, setCatag, handleClick }) => {
  const { id } = useParams();

  //function for category listing from API
  async function catLoadFunction() {
    try {
      const catag = await axios.get(
        "https://suntechapps.com/react_blog/api/cat"
      );
      const allCatg = await catag.data;
      // console.log(allCatg[0])
      setCatag(allCatg);
    } catch (error) {
      console.log(`"Somthing is wrong : " ${error} `);
    }
  }

  useEffect(() => {
    catLoadFunction();
  }, []);

  return (
    <>
      <div className="box-widget fl-wrap">
        <div className="widget-title">Categories</div>
        <div className="box-widget-content">
          <ul className="cat-wid-list">
            {catag
              ? catag.map((Curelm, i) => {
                  return (
                    <li key={i}>
                      <Link
                        to="/blog"
                        onClick={(event) => handleClick(event, i)}
                      >
                        {Curelm.category}
                      </Link>
                      <span>{Curelm.counts}</span>
                    </li>
                  );
                })
              : ""}
          </ul>
        </div>
      </div>

      <div className="box-widget fl-wrap">
        <div className="widget-title">Popular Tags</div>
        <div className="box-widget-content">
          <div className="tags-widget">
            {catag
              ? catag.map((Curelm, i) => {
                  return (
                    <Link
                      to="/blog"
                      key={i}
                      onClick={(event) => handleClick(event, i)}
                    >
                      {Curelm.category}
                    </Link>
                  );
                })
              : ""}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCategory;

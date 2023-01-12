import React from "react";
import { Link } from "react-router-dom";

const BlogThumbnail = (curElm) => {
  const { id, category, image, title, date, description } = curElm;

  const dis =
    curElm.description.length > 200
      ? curElm.description.slice(0, 150) + "...."
      : curElm.description;

  return (
    <>
      <div>
        <div className="list-post fl-wrap">
          <Link className="post-category-marker" to={`post-single/${id}`}>
            {category}
          </Link>
          <div className="list-post-media">
            <Link to={`post-single/${id}`}>
              <div className="bg-wrap">
                <div className="bg">
                  <img src={image} />
                </div>
              </div>
            </Link>
          </div>
          <div className="list-post-content">
            <span className="post-date">
              <i className="fa fa-clock"></i> {date}
            </span>
            <h3>
              <Link to={`post-single/${id}`}>{title}</Link>
            </h3>
            <p>{dis}</p>

            <Link to={`post-single/${id}`}>READ MORE</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogThumbnail;

import React, { useState } from "react";
import BlogListView from "./components/BlogListView";
import BlogCategory from "./components/BlogCategory";

const BlogList = () => {
  const [catag, setCatag] = useState();
  const [update, setUpdate] = useState("All");

  // function for geting filter category value after click on category button
  function handleClick(event, key) {
    const category = catag[key].category;
    setUpdate(category);
  }

  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="main-container fl-wrap fix-container-init">
                <div className="section-title" id="ltblog">
                  <h2>Most Recent World News</h2>
                  <h4>Don't miss daily news</h4>
                </div>
                <div className="list-post-wrap">
                  <BlogListView setUpdate={setUpdate} update={update} />
                </div>
                <div className="clearfix"></div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="sidebar-content fl-wrap ">
                <BlogCategory
                  catag={catag}
                  setCatag={setCatag}
                  handleClick={handleClick}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogList;

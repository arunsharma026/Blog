import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import BlogPostDetail from "./components/BlogPostDetail";
import BlogCategory from "./components/BlogCategory";

const PostDetail = () => {
  const { id } = useParams();

  const [catag, setCatag] = useState();
  const [update, setUpdate] = useState("All");

  const [dataBlog, setDataBlog] = useState([]);

  useEffect(() => {
    async function getdataBlog() {
      //for get data category listing detail page design
      try {
        const dataBlog = await axios.get(
          `https://suntechapps.com/react_blog/api/category/Travel/${id}`
        );
        setDataBlog(dataBlog.data); 
      } catch (error) {
        console.log(`Error: Solve Error first- ${error}`);
      }
    }

    getdataBlog();
  }, []);

  // function for geting filer click value
  function handleClick(event, key) {
    const category = catag[key].category;
    setUpdate(category);
  }

  return (
    <>
      <Helmet>
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
            <div className="col-md-8">
              <div className="main-container fl-wrap fix-container-init">
                <div className="list-post-wrap">
                  <BlogPostDetail />
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
          <div className="limit-box fl-wrap"></div>
        </div>
      </section>
    </>
  );
};

export default PostDetail;

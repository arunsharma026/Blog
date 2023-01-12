import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import PagingBar from "./PagingBar";
import axios from "axios";
import { Link } from "react-router-dom";

const BlogListView = ({ update, setUpdate }) => { 
//for pagination
  const [showparpage, setshowPerpage] = useState(4);
  const [pagination, setPagination] = useState({
    start: 0,
    end: showparpage,
  });

  const [load, setLoad] = useState(false);

  const onPaginationChange = (start, end) => {
    setPagination({ start: start, end: end });
  };

  const [blogList, setBlogList] = useState([]);
 
  useEffect(() => {
    // function for geting data after filter value
    async function getAllblog() {
      if (update) {
        try {
          setLoad(true);
          const blogList = await axios.get(
            `https://suntechapps.com/react_blog/api/cat/${update}`
          );
          const allBlogs = await blogList.data.blogs; 
          setBlogList(allBlogs);
          setLoad(false);
        } catch (error) {
          console.log("Somthing is wrong");
        }
      } else {
        setLoad(true);
        const blogList = await axios.get(
          `https://suntechapps.com/react_blog/api/cat/${update}`
        );
        const allBlogs = await blogList.data.blogs;
       // console.log(allBlogs);
        setBlogList(allBlogs);
        setLoad(false);
      }
    }

    getAllblog();
  }, [update]);

  if (load) {
    return (
      <div class="containerload">
        <div class="load-container">
          <div class="linespinner"></div>
        </div>
      </div>
    );
  } 

  return (
    <>
      <Helmet>
        <title>Blog-X : Blog</title>
        <style type="text/css">
          {`
.header-inner {
   Background:#000; 
}
#wrapper{
    padding-top: 110px;
}
.pagination{
  float:left;
  }
`}
        </style>
      </Helmet>

      {blogList ? (
        blogList
          .slice(pagination.start, pagination.end)
          .map((curElm, index) => {
            const dis =
              curElm.description.length > 200
                ? curElm.description.slice(0, 150) + "...."
                : curElm.description;
            return (
              <div className="list-post fl-wrap" key={index}>
                <div className="list-post-media">
                  <Link to={`/blog/${curElm.id}`}>
                    <div className="bg-wrap">
                      <div className="bg">
                        <img src={curElm.image} />
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="list-post-content">
                  <Link
                    className="post-category-marker"
                    to={`/blog/${curElm.id}`}
                  >
                    {curElm.category}
                  </Link>
                  <h3>
                    <Link to={`/blog/${curElm.id}`}>{curElm.title}</Link>
                  </h3>
                  <span className="post-date">
                    <i className="fa fa-clock"></i> {curElm.date}
                  </span>
                  <p>{dis}</p>
                </div>
              </div>
            );
          })
      ) : (
        <h2>No Records Founds.</h2>
      )}

      <PagingBar
        showparpage={showparpage}
        onPaginationChange={onPaginationChange}
        totalPage={blogList.length}
      />
    </>
  );
};

export default BlogListView;

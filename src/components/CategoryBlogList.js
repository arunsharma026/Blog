import React, { useEffect, useState } from "react"; 
import axios from "axios";
import Masonry from "react-masonry-css";
import PagingBar from "./PagingBar";
import CategoryThumbnail from "./CategoryThumbnail";

const CategoryBlogList = () => {
  const [showparpage, setshowPerpage] = useState(8);
  const [pagination, setPagination] = useState({
    start: 0,
    end: showparpage,
  });

  const [load, setLoad] = useState(false);

  const onPaginationChange = (start, end) => {
    setPagination({ start: start, end: end }); 
  };

  const [blogList, setBlogList] = useState([]);

  // Masonry listing responsive breakpoint
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  useEffect(() => {

    //function for blog data listing from API
    async function getAllblog() {
      try {
        setLoad(true);
        const blogList = await axios.get(
          "https://suntechapps.com/react_blog/api/blog"
        );
        const allBlogs = await blogList.data.blogs; 
        setBlogList(allBlogs);
        setLoad(false);
      } catch (error) {
        console.log("Somthing is wrong");
      }
    }

    getAllblog();
  }, []);

  if (load) {
    return (
      <div class="containerload">
        <div class="load-container">
          <div class="linespinner"></div>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <div className="main-container fl-wrap fix-container-init white_bg_sec">
          <div className="clearfix"></div>
          <div className="section-title sect_dec" id="ltblog">
            <h2>Latest Blog</h2>
            <h4>Don't miss daily blogs</h4>
          </div>
          <div className="grid-post-wrap">
            <div className="more-post-wrap  fl-wrap">
              <div className="list-post-wrap list-post-wrap_column fl-wrap">
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
                >
                  {blogList ? (
                    blogList
                      .slice(pagination.start, pagination.end)
                      .map((curElm) => {
                        return (
                          <CategoryThumbnail key={curElm.id} {...curElm} />
                        );
                      })
                  ) : (
                    <h2>No Records Founds.</h2>
                  )}{" "}
                </Masonry>
              </div>
            </div>
          </div>

          <PagingBar
            showparpage={showparpage}
            onPaginationChange={onPaginationChange}
            totalPage={blogList.length}
          />
        </div>
      </>
    );
  }
};

export default CategoryBlogList;

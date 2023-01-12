import React, { Suspense, useEffect } from "react";
import { Helmet } from "react-helmet";
import CategoryBlogList from "./components/CategoryBlogList";
import Loader from "./components/Loader"; 

const CategoryList = () => {
  return (
    <>
      <Helmet>
        <title>Blog-X : Latest Blog</title>
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

      <div className="content">
        <section>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <Suspense fallback={<Loader />}>
                  <CategoryBlogList />
                </Suspense>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CategoryList;

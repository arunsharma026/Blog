import React, { Suspense, useEffect } from "react";
import { Helmet } from "react-helmet";
import HomeSlider from "./components/HomeSlider";
import Loader from "./components/Loader";
const BlogList = React.lazy(() => import("./components/BlogList"));
const Home = () => {
  return (
    <>
      <Helmet>
        <title>Blog-X : Home</title>
      </Helmet>
      <div className="content">
        <HomeSlider />
        <section>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <Suspense fallback={<Loader />}>
                  <BlogList />
                </Suspense>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default Home;

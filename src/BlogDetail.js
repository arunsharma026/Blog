import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Comments from "./components/Comments";

const BlogDetail = ({ handleClick }) => {
  const { id } = useParams();

  const [dataBlog, setDataBlog] = useState([]);

  const [catag, setCatag] = useState();

  if (dataBlog.title)
    document.title = `Blog X :  ${dataBlog.title} ? ${dataBlog.title} : " "`;
  else document.title = "Blog X : Blog Detail";
  useEffect(() => {
    //for data geting
    async function getdataBlog() {
      try {
        const dataBlog = await axios.get(
          `https://suntechapps.com/react_blog/api/blog/${id}`
        );
        setDataBlog(dataBlog.data);
      } catch (error) {
        console.log(`Error: Solve Error first- ${error}`);
      }
    }

    getdataBlog();
  }, []);

  //for filter category list
  async function catLoadFunction() {
    try {
      const catag = await axios.get(
        "https://suntechapps.com/react_blog/api/cat"
      );
      const allCatg = await catag.data;
      
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
      <Helmet>
        <style type="text/css">
          {` 
.bg{
    position: absolute;
    width: 100%;
    height: 100%;
    background-position-y: center;
    background-size: cover;
}
.bg-wrap {
  position: absolute;
}
`}
        </style>
      </Helmet>

      <div class="content">
        <section class="hero-section">
          <div class="bg-wrap hero-section_bg">
            <div
              class="bg"
              style={{ backgroundImage: `url(${dataBlog.image})` }}
            > 
            </div>
          </div>
          <div class="container">
            <div class="hero-section_title hs_single-post">
              <Link class="post-category-marker color-bg">
                {dataBlog.category}
              </Link>

              <div class="clearfix"></div>
              <h2>{dataBlog.title}</h2>
            </div>
          </div>
        </section>

        <section>
          <div class="container">
            <div class="row">
              <div class="col-md-8">
                <div class="main-container fl-wrap fix-container-init">
                  <div class="single-post-content  fl-wrap">
                    <div class="clearfix"></div>
                    <div class="single-post-content_text" id="font_chage">
                      <p class="has-drop-cap">{dataBlog.description}</p>

                      <div class="single-post-content_text_media fl-wrap">
                        <div class="row">
                          <div class="col-md-12">
                            <img
                              src="assets/images/blog3.jpg"
                              alt=""
                              class="respimg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="share-holder hor-share">
                      <div class="share-title">Share:</div>
                      <div class="share-container  isShare">
                        <a
                          href="http://pinterest.com"
                          class="pop share-icon share-icon-pinterest"
                        ></a>

                        <a
                          href="https://twitter.com"
                          class="pop share-icon share-icon-twitter"
                        ></a>

                        <a
                          href="http://www.linkedin.com"
                          class="pop share-icon share-icon-linkedin"
                        ></a>

                        <a
                          href="http://www.tumblr.com"
                          class="pop share-icon share-icon-tumblr"
                        ></a>
                      </div>
                    </div>
                  </div>

                  <Comments />
                </div>
              </div>
              <div class="col-md-4">
                <div class="sidebar-content fl-wrap fixed-bar fixbar-action">
                  <div class="box-widget fl-wrap">
                    <div class="widget-title">Popular Tags</div>
                    <div class="box-widget-content">
                      <div class="tags-widget">
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
                </div>
              </div>
            </div>
            <div class="limit-box fl-wrap"></div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogDetail;

import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet";
import Comments from "./Comments";

const BlogPostDetail = () => {
  const { id } = useParams();

  const [dataBlog, setDataBlog] = useState([]);

  useEffect(() => {
    //funtction for blog detail data using id
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

  return (
    <>
      <Helmet>
        <title>Blog-X : {`${dataBlog.title} ? ${dataBlog.title} : " " `}</title>
      </Helmet>

      <div className="single-post-header fl-wrap">
        <a className="post-category-marker" href="category.html">
          {dataBlog.category}
        </a>
        <div className="clearfix"></div>
        <h1>{dataBlog.title}</h1>
        <h4>Perspiciatis unde omnis iste natus error sit voluptatem.</h4>
        <div className="clearfix"></div>

        <span className="post-date">
          <i className="fa fa-clock"></i>
          {dataBlog.date}
        </span>
      </div>

      <div className="single-post-media fl-wrap">
        <div className="single-slider-wrap fl-wrap">
          <div className="single-slider fl-wrap">
            <div className="swiper-container">
              <div className="swiper-wrapper lightgallery">
                <div className="swiper-slide hov_zoom">
                  <img src={dataBlog.image} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="single-post-content_text" id="font_chage">
        <p className="has-drop-cap"> {dataBlog.description}</p>
      </div>

      <div class="profile-card-footer fl-wrap">
        <div class="profile-card-footer_soc">
          <div class="profile-card-footer_title">Follow: </div>
          <div class="profile-card-social">
            <ul>
              <li>
                <a href="#" target="_blank">
                  <i class="fa fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <i class="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <i class="fa fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <i class="fa fa-vk"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Comments />
    </>
  );
};

export default BlogPostDetail;

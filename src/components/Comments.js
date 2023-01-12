import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CommentForm from "./CommentForm";

const Comments = () => {
  const { id } = useParams();
  const [comment, setComment] = useState([]);

//function for comment listing 
  async function getdataComment() {
    try {
      const comment = await axios.post(
        `https://suntechapps.com/react_blog/api/comment_list/${id}`
      );
      setComment(comment.data.comments);
    } catch (error) {
      console.log(`Error: Solve Error first- ${error}`);
    }
  }

  useEffect(() => {
    getdataComment();
  }, []);

  return (
    <>
      <div id="comments" className="single-post-comm fl-wrap">
        <div className="pr-subtitle prs_big">
          Commnets <span>{comment.length}</span>
        </div>
        <ul className="commentlist clearafix">
          {comment.length !== 0 ? (
            comment.map((curElm, index) => {
              return (
                <li className="comment" key={index}>
                  <div className="comment-body smpar">
                    <h4>
                      <a href="#">{curElm.name}</a>
                    </h4>
                    <div className="clearfix"></div>
                    <p> {curElm.message}</p>
                  
                    <div className="comment-meta">
                      <i className="fa fa-clock"></i> {curElm.date}
                    </div>
                  </div>
                </li>
              );
            })
          ) : (
            <h1 className="no-comment">No Comments Founds.</h1>
          )}
        </ul>
        <div className="clearfix"></div>
        <div className="clearafix">
          <div className="pr-subtitle">
            {" "}
            Leave A Comment <i className="fa fa-caret-down"></i>
          </div>
          <div className="comment-reply-form fl-wrap">
            <CommentForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default Comments;

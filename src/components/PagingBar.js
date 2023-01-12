import React, { useEffect, useState } from "react";
import $ from "jquery";

const PagingBar = ({ showparpage, onPaginationChange, totalPage }) => {
  const [pageCount, setpageCount] = useState(1);
  const [lastPage, setlastPage] = useState(Math.ceil(totalPage / showparpage));
//for pagination ang find page no.
  useEffect(() => {
    const pagevalue = showparpage * pageCount;
    onPaginationChange(pagevalue - showparpage, pagevalue);
  }, [pageCount]);

  const onClickpagechange = (type) => {
    if (type === "prv") {
      if (pageCount === 1) {
        setpageCount(1);
      } else {
        setpageCount(pageCount - 1);
      }
    } else if (type === "next") {
      if (Math.ceil(totalPage / showparpage) === pageCount) {
        setpageCount(pageCount);
      } else {
        setpageCount(pageCount + 1);
      }
    }
    $("html, body").animate(
      {
        scrollTop: $("#ltblog").offset().top,
      },
      1000
    );
  };
 

  return (
    <>
      <div>
        <div className="blog-pagination">
          <ul className="pagination">
            <li className={pageCount === 1 ? "null" : ""}>
              <button onClick={() => onClickpagechange("prv")}>Prev</button>
            </li>
            {new Array(Math.ceil(totalPage / showparpage))
              .fill("")
              .map((el, index) => (
                <li className={`${index + 1 === pageCount ? "active" : null}`}>
                  <button onClick={() => setpageCount(index + 1)}>
                    {index + 1}
                  </button>
                </li>
              ))}
            <li className={pageCount === lastPage ? "nulllast" : ""}>
              <button onClick={() => onClickpagechange("next")}>Next</button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default PagingBar;

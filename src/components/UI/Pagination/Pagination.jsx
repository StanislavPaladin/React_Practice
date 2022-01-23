import React from "react";

const Pagination = ({getPagesArray ,totalPages, changePage, page }) => {
    let pagesArray = getPagesArray(totalPages);
  return (
    <div className="pages__wrapper">
      {pagesArray.map((p) => (
        <span
          onClick={() => {
            changePage(p);
          }}
          key={p}
          className={page === p ? "page page__current" : "page"}
        >
          {p}
        </span>
      ))}
    </div>
  );
};

export default Pagination;

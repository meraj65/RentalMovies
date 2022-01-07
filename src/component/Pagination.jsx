import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

const Pagination = (props) => {
  const { totalMvs, mvsPrPage } = props;
  const totalPages = totalMvs / mvsPrPage;

  const arrPgNmbrs = _.range(1, totalPages + 1);

  return (
    <nav>
      <ul className="pagination">
        {arrPgNmbrs.map((pageNo) => (
          <li
            key={pageNo}
            className={
              props.currentPage === pageNo ? "page-item active" : "page-item"
            }
          >
            <a
              className="page-link"
              onClick={() => props.pageChangeFunc(pageNo)}
            >
              {" "}
              {pageNo}{" "}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
Pagination.propTypes = {
  currentPage: PropTypes.number,
};
export default Pagination;

import React from "react";
import { Pagination } from "react-bootstrap";
import "./Pagin.scss";

const Pagin = ({ currentPage, totalPages, nextPage }) => {
  let active = currentPage;
  let items = [];

  if (currentPage <= 10) {
    for (let i = 1; i <= 10 + 1; i++) {
      items.push(
        <Pagination.Item key={i} active={i === active} onClick={() => nextPage(i)}>
          {i}
        </Pagination.Item>
      );
    }
  } else {
    if (currentPage > totalPages - 4) {
      for (let i = currentPage - 4; i <= totalPages; i++) {
        items.push(
          <Pagination.Item key={i} active={i === active} onClick={() => nextPage(i)}>
            {i}
          </Pagination.Item>
        );
      }
    } else {
      for (let i = currentPage - 4; i <= currentPage + 4; i++) {
        items.push(
          <Pagination.Item key={i} active={i === active} onClick={() => nextPage(i)}>
            {i}
          </Pagination.Item>
        );
      }
    }
  }

  return (
    <Pagination>
      {currentPage !== 1 ? (
        <>
          <Pagination.First onClick={() => nextPage(1)}>
            <span aria-hidden="true">‹‹</span>&nbsp;First
          </Pagination.First>
          <Pagination.Prev onClick={() => nextPage(currentPage - 1)}>
            <span aria-hidden="true">‹‹</span>&nbsp;Previous
          </Pagination.Prev>
        </>
      ) : null}

      {items}
      {currentPage === totalPages - 5 ? <Pagination.Ellipsis /> : null}

      {currentPage !== totalPages ? (
        <>
          <Pagination.Next onClick={() => nextPage(currentPage + 1)}>
            Next&nbsp;
            <span aria-hidden="true">››</span>
          </Pagination.Next>
          <Pagination.Last onClick={() => nextPage(totalPages)}>
            Last&nbsp;<span aria-hidden="true">››</span>
          </Pagination.Last>
        </>
      ) : null}
    </Pagination>
  );
};

export default Pagin;

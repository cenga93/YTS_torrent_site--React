import React from "react";
// , { useLayoutEffect, useState }
import { Pagination } from "react-bootstrap";
import "./Pagin.scss";

const Pagin = ({ currentPage, totalPages, nextPage }) => {
  let active = currentPage;
  let range = 11;
  let items = [];

  // function useWindowSize() {
  //   const [size, setSize] = useState(0);
  //   useLayoutEffect(() => {
  //     function updateSize() {
  //       setSize(window.innerWidth);
  //     }
  //     window.addEventListener("resize", updateSize);
  //     updateSize();
  //     return () => window.removeEventListener("resize", updateSize);
  //   }, []);

  //   // if (size < 820) {
  //   //   range = 1;
  //   // }
  //   return range;
  // }
  // useWindowSize();

  if (totalPages < range) {
    for (let i = 1; i <= totalPages; i++) {
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
      if (currentPage < range) {
        for (let i = 1; i <= range; i++) {
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
          {currentPage >= range ? <Pagination.Ellipsis /> : null}
        </>
      ) : null}
      {items}
      {currentPage <= totalPages - 5 ? <Pagination.Ellipsis /> : null}
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

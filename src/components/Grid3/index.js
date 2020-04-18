import React from "react";
import { Row } from "react-bootstrap";
import { Movie } from "..";

const Grid3 = ({ movie }) => {
  const card = (movie) => {
    return movie.map((item, index) => {
      return (
        <div className="col-lg-3 col-md-3 col-sm-6 p-4 hoverCard" key={index}>
          <Movie movie={item} />
        </div>
      );
    });
  };
  return <Row>{card(movie)}</Row>;
};

export default Grid3;

import React from "react";
import { Row, Col } from "react-bootstrap";
import { Movie } from "..";

const Grid3 = ({ movie }) => {
  const card = (movie) => {
    return movie.map((item, index) => {
      return (
        <Col lg={3} md={3} sm={6} className="hoverCard p-4" key={index}>
          <Movie movie={item} />
        </Col>
      );
    });
  };
  return <Row>{card(movie)}</Row>;
};

export default Grid3;

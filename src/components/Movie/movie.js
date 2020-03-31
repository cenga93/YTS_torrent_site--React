import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./movie.scss";

const Movie = ({ movies }) => {
  return (
    <div className="col-lg-3 col-md-3 col-sm-6 p-4 hoverCard">
      <Link to={`movie/${movies.slug}`}>
        <Card className="m-0">
          {/* <h1>{movies.id}</h1> */}
          <Card.Img variant="top" src={movies.medium_cover_image} />
          <p>{movies.title_long}</p>
        </Card>
      </Link>
    </div>
  );
};

export default Movie;

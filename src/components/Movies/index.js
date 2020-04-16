import React from "react";
import { CardDeck } from "react-bootstrap";
import { Movie } from "..";

const Movies = ({ movie }) => {
  const card = (movie) => {
    return movie.map((item, index) => {
      return <Movie movie={item} key={index} />;
    });
  };
  return <CardDeck>{card(movie)}</CardDeck>;
};

export default Movies;

import React from "react";
import { CardDeck } from "react-bootstrap";
import { Movie } from "../../components";

const movies = ({ movie }) => {
  const card = (movie) => {
    return movie.map((item, index) => {
      return <Movie movie={item} key={index} />;
    });
  };
  return <CardDeck>{card(movie)}</CardDeck>;
};

export default movies;

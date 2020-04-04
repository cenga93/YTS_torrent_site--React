import React from "react";
import { Container, CardDeck } from "react-bootstrap";
import Movies from "../Movie/movie";

const movies = ({ movie }) => {
  const card = (movie) => {
    return movie.map((item, index) => {
      return <Movies movie={item} key={index} />;
    });
  };
  return (
    <Container>
      <CardDeck>{card(movie)}</CardDeck>
    </Container>
  );
};

export default movies;

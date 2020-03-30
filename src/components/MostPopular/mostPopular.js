import React from "react";
import { Container, CardDeck } from "react-bootstrap";
import Movie from "../Movie/movie";

const mostPopular = ({ popular }) => {
  let array, movie;

  popular.sort((b, a) => a.popularity - b.popularity);
  array = popular.splice(0, 4);

  movie = array.map((item, index) => {
    return <Movie key={index} />;
  });

  return (
    <Container>
      <CardDeck>{movie}</CardDeck>
    </Container>
  );
};

export default mostPopular;

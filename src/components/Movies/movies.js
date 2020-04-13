import React from "react";
import { Container, CardDeck } from "react-bootstrap";
import { Movie } from "../../components";

const movies = ({ movie }) => {
  const card = (movie) => {
    return movie.map((item, index) => {
      return <Movie movie={item} key={index} />;
    });
  };
  return (
    <Container>
      <CardDeck>{card(movie)}</CardDeck>
    </Container>
  );
};

export default movies;

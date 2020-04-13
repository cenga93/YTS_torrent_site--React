import React from "react";
import { Movie } from "../../components";
import { Container, CardDeck } from "react-bootstrap";

const MovieList = ({ data }) => {
  const receiving = (data) => {
    return data.map(({ item: { title } }, index) => {
      return <Movie key={index} movie={title} />;
    });
  };

  return (
    <Container className="moviesList">
      <CardDeck>{receiving(data)}</CardDeck>
    </Container>
  );
};

export default MovieList;

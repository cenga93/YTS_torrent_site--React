import React from "react";
import Movie from "../Movie/movie";
import { Container, CardDeck } from "react-bootstrap";

const MovieList = ({ data }) => {
  const receiving = data => {
    return data.map((item, index) => {
      return <Movie key={index} movie={item.title} />;
    });
  };

  return (
    <Container className="moviesList">
      <CardDeck>{receiving(data)}</CardDeck>
    </Container>
  );
};

export default MovieList;

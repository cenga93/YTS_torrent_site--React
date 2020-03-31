import React from "react";
import { Container, CardDeck } from "react-bootstrap";
import Movies from "../Movie/movie";
const mostPopular = ({ popular }) => {
  const card = popular => {
    return popular.map((item, index) => {
      return <Movies key={index} movies={item} />;
    });
  };
  return (
    <Container>
      <CardDeck>{card(popular)}</CardDeck>
    </Container>
  );
};

export default mostPopular;

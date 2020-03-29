import React from "react";
import { Card, CardDeck } from "react-bootstrap";

const Movie = ({ movie }) => {
  return (
    <div className="col-lg-3 col-md-3 col-sm-6">
      <Card className="m-0">
        <Card.Img variant="top" src="holder.js/100px160" /> 
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Movie;

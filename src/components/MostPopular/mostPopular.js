// const mostPopular = ({ popular }) => {
//   let niz = [];
//   popular.map(item => {
//     niz.push(item.popularity);
//   });
//   console.log(niz);

//   //   handleChange = () => {
//   //     return <h1>test</h1>;
//   //   };

//
// };

// export default mostPopular;

import React from "react";
import { Container } from "react-bootstrap";

const mostPopular = ({ popular }) => {
  popular.map(item => {
    if (item.popularity >= 5) {
      console.log(item);
    }
  });

  return <Container>test</Container>;
};

export default mostPopular;

import React from "react";
import { Container } from "react-bootstrap";
import "./Wrapper.scss";
const Wrapper = ({ className, children }) => {
  return (
    <section className={`${className}`}>
      <Container>{children}</Container>
    </section>
  );
};
export default Wrapper;

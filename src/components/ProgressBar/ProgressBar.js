import React from "react";
import { ProgressBar, Row } from "react-bootstrap";
import "./ProgressBar.scss";

const Progress = () => {
  return (
    <Row className="progress_row">
      <ProgressBar now={60} className="progres_bar" />
    </Row>
  );
};

export default Progress;

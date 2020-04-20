import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import { Wrapper, Grid3 } from "..";
import { fetchData } from "../../api";
import "./Upcoming.scss";

const api = { sort: `year`, limit: 4 };
const { sort, limit } = api;
const Upcoming = ({ className }) => {
  const [upcoming, setUpcoming] = useState([]);
  useEffect(() => {
    const fetchUpcoming = async () => {
      const { data } = await fetchData(sort, limit);
      setUpcoming([...data.movies]);
    };
    fetchUpcoming();
  }, []);

  return (
    <Wrapper className={className}>
      <Col className="p-0 align_col">
        <h5>Upcoming YIFY Movies</h5>
        <Link to="/login" className="browse_link">
          Request a Movie
        </Link>
      </Col>
      <Grid3 movie={upcoming} />
    </Wrapper>
  );
};
export default Upcoming;

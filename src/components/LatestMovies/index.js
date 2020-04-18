import React, { useState, useEffect } from "react";
import { fetchData } from "../../api";
import { Wrapper, Grid3 } from "..";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./LatestMovies.scss";

/*
  API ENDPOINT PARAMETER: [sort_by]
  *-----------------------
    * -> sort_by = title
    * -> sort_by = year
    * -> sort_by = rating
    * -> sort_by = peers
    * -> sort_by = seeds
    * -> sort_by = download_count
    * -> sort_by = like_count
    * -> sort_by = date_added
  *-------------------------
*/
const api = { sort: `like_count`, limit: 8 };
const { sort, limit } = api;

const LatMovies = ({ className }) => {
  const [latestMovies, setLatestMovies] = useState([]);

  useEffect(() => {
    const fetchlatestMovies = async () => {
      const { data } = await fetchData(sort, limit);
      setLatestMovies([...data.movies]);
    };
    fetchlatestMovies();
  }, []);

  return (
    <Wrapper className={className}>
      <Row className="p-0">
        <Col className="p-0 align_col">
          <h5>Latest YIFY Movies Torrents</h5>
          <Link to="/browse-movies" className="browse_link">
            Browse All
          </Link>
        </Col>
      </Row>
      <Grid3 movie={latestMovies} />
    </Wrapper>
  );
};

export default LatMovies;

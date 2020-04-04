import React, { Component } from "react";
import "./LatestMovies.scss";
import Movies from "../Movies/movies";
import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

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
const api = {
  link: `https://yts.mx/api/v2/list_movies.json`,
  sort: `date_added`,
  limit: 8,
};

class LatestMovies extends Component {
  constructor() {
    super();
    this.state = {
      latestMovies: [],
    };
  }

  componentDidMount() {
    fetch(`${api.link}?sort_by=${api.sort}&limit=${api.limit}`)
      .then((data) => data.json())
      .then(({ data }) => {
        this.setState({
          latestMovies: [...data.movies],
        });
      });
  }

  render() {
    return (
      <section id="latest_movies" className="pt-5 pb-5 shadow">
        <Container className="p-0">
          <Row className="p-0">
            <Col className="p-0 align_col">
              <h5>Latest YIFY Movies Torrents</h5>
              <Link to="/browse-movies" className="browse_link">
                Browse All
              </Link>
            </Col>
          </Row>
        </Container>
        <Movies movie={this.state.latestMovies} />
      </section>
    );
  }
}
export default LatestMovies;

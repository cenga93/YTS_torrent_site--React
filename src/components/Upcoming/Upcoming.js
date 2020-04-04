import React, { Component } from "react";
import "./Upcoming.scss";
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
  sort: `year`,
  limit: 4,
};

class Upcoming extends Component {
  constructor() {
    super();

    this.state = {
      upcoming: [],
    };
  }

  componentDidMount() {
    fetch(`${api.link}?sort_by=${api.sort}&limit=${api.limit}`)
      .then((data) => data.json())
      .then(({ data }) => {
        this.setState({
          upcoming: [...data.movies],
        });
      });
  }

  render() {
    return (
      <section id="upcoming" className="pt-5 pb-5">
        <Container className="p-0">
          <Row className="p-0">
            <Col className="p-0 align_col">
              <h5>Upcoming YIFY Movies</h5>
              <Link to="/login" className="browse_link">
                Request a Movie
              </Link>
            </Col>
          </Row>
        </Container>
        <Movies movie={this.state.upcoming} />
      </section>
    );
  }
}
export default Upcoming;

import React, { Component } from "react";
import "./Upcoming.scss";
import { fetchData } from "../../api";
import { Movies } from "../../components";
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
  async componentDidMount() {
    const { sort, limit } = api;
    const {
      data: { movies },
    } = await fetchData(sort, limit);
    this.setState({ upcoming: [...movies] });
  }

  render() {
    const { upcoming } = this.state;
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
        <Movies movie={upcoming} />
      </section>
    );
  }
}
export default Upcoming;

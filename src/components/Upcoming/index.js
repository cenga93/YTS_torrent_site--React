import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import { Movies, Wrapper } from "..";
import { fetchData } from "../../api";
import "./Upcoming.scss";

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
const api = {sort: `year`,limit: 4};

class Upcoming extends Component {
  constructor(props) {
    super(props);

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
      <Wrapper className={this.props.className}>
        <Col className="p-0 align_col">
          <h5>Upcoming YIFY Movies</h5>
          <Link to="/login" className="browse_link">
            Request a Movie
          </Link>
        </Col>
        <Movies movie={upcoming} />
      </Wrapper>
    );
  }
}
export default Upcoming;

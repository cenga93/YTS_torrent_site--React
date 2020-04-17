import React, { Component } from "react";
import { MainSearch, Wrapper } from "../../components";
import { Col, Row } from "react-bootstrap";
import { Movies } from "../../components";
import Pagin from "../Pagin/";
import "./BrowseMovie.scss";
import { fetchAllData } from "../../api";

class BrowseMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      totalPages: 0,
      allMovies: [],
    };
  }

  async componentDidMount() {
    const { data } = await fetchAllData(this.state.currentPage);
    this.setState({
      allMovies: [...data.movies],
      totalPages: Math.ceil(data.movie_count / 20),
    });
  }

  nextPage = async (pageNumber) => {
    const { data } = await fetchAllData(pageNumber);
    this.setState({
      allMovies: [...data.movies],
      currentPage: pageNumber,
    });
  };

  render() {
    return (
      <>
        <MainSearch className={`main_search`} />
        <Wrapper className="all_Movies pt-4 shadow">
          <Row>
            <Col className="col_title">
              <h5>
                <span>16,402</span> YIFY Movies found
              </h5>
            </Col>
          </Row>
          <Row className="pagination_row p-4">
            {/* Pagination */}
            <Pagin nextPage={this.nextPage} currentPage={this.state.currentPage} totalPages={this.state.totalPages} />
          </Row>
          <Row>
            <Movies movie={this.state.allMovies} />
          </Row>
          <Row className="pagination_row p-4">
            {/* Pagination */}
            <Pagin nextPage={this.nextPage} currentPage={this.state.currentPage} totalPages={this.state.totalPages} />
          </Row>
        </Wrapper>
      </>
    );
  }
}
export default BrowseMovie;

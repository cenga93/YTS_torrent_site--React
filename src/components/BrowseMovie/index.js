import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import { Pagin, MainSearch, Wrapper, Grid3 } from "..";
import { fetchAllData } from "../../api";
import "./BrowseMovie.scss";

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
            <Col>
              {/* Pagination */}
              <Pagin nextPage={this.nextPage} currentPage={this.state.currentPage} totalPages={this.state.totalPages} />
            </Col>
          </Row>

          <Grid3 movie={this.state.allMovies} />

          <Row className="pagination_row pt-3 pb-1">
            <Col>
              {/* Pagination */}
              <Pagin nextPage={this.nextPage} currentPage={this.state.currentPage} totalPages={this.state.totalPages} />
            </Col>
          </Row>
        </Wrapper>
      </>
    );
  }
}
export default BrowseMovie;

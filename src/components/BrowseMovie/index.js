import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import { Pagin, MainSearch, Wrapper, Grid3 } from "..";
import { fetchAllData } from "../../api";
import "./BrowseMovie.scss";
import { searchFetch } from "../../api";
class BrowseMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      totalPages: 0,
      allMovies: [],
      movieCount: 0,
      search_field: "",
      quality: "",
      genre: "",
      rating: "",
      order_by: "",
    };
  }

  async componentDidMount() {
    const { data } = await fetchAllData(this.state.currentPage);
    this.setState({
      allMovies: [...data.movies],
      totalPages: Math.ceil(data.movie_count / 20),
      movieCount: data.movie_count,
    });
  }

  searching = async (event) => {
    event.preventDefault();
    const { search_field, quality, genre, rating, order_by, currentPage } = this.state;
    const { data } = await searchFetch(search_field, quality, genre, rating, order_by, currentPage);
    this.setState({
      allMovies: data.movie_count > 0 ? [...data.movies] : null,
      movieCount: data.movie_count,
      totalPages: Math.ceil(data.movie_count / 20),
      currentPage: 1,
    });
  };

  handleInput = (e) => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };

  nextPage = async (pageNumber) => {
    const { search_field, quality, genre, rating, order_by } = this.state;
    const { data } = await searchFetch(search_field, quality, genre, rating, order_by, pageNumber);
    this.setState({
      allMovies: [...data.movies],
      currentPage: pageNumber,
    });
  };

  render() {
    return (
      <>
        <MainSearch className={`main_search`} search={(event) => this.searching(event)} handleInput={this.handleInput} search_field={this.state.search_field} />
        <Wrapper className="all_Movies pt-4 shadow">
          {!this.state.allMovies ? (
            <h1>Nema filmovi</h1>
          ) : (
            <>
              <Row>
                <Col className="col_title">
                  <h5>
                    <span>{this.state.movieCount}</span> YIFY Movies found
                  </h5>
                </Col>
              </Row>
              <Row className="pagination_row p-4">
                <Col>
                  <Pagin nextPage={this.nextPage} currentPage={this.state.currentPage} totalPages={this.state.totalPages} />
                </Col>
              </Row>
              <Grid3 movie={this.state.allMovies} />
              <Row className="pagination_row pt-3 pb-1">
                <Col>
                  <Pagin nextPage={this.nextPage} currentPage={this.state.currentPage} totalPages={this.state.totalPages} />
                </Col>
              </Row>
            </>
          )}
        </Wrapper>
      </>
    );
  }
}
export default BrowseMovie;

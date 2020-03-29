import React, { Component } from "react";
import MoviesList from "../moviesList/moviesList";

const api_key = `d05acecc4cd9e0136681ec222f35815e`;

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: []
    };
    this.apiKey = process.env.REACT_APP_API;
  }

  componentDidMount() {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=2019`,
      { method: "GET" }
    )
      .then(data => data.json())
      .then(data => {
        // data
        // console.log(data.results);
        this.setState({
          movies: [...data.results]
        });
      });
  }

  render() {
    return <MoviesList data={this.state.movies} />;
  }
}

export default Home;

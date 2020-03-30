import React, { Component } from "react";
// import MoviesList from "../moviesList/moviesList";
import MostPopular from "../MostPopular/mostPopular";
import YtsTitle from "../YtsTitle/ytsTitle";
import "./home.scss";
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
    fetch(`https://yts.mx/api/v2/list_movies.json?sort_by=like_count`, {
      method: "GET"
    })
      .then(data => data.json())
      .then(data => {
        // data
        // data.results.map(item => {
        // //   console.log(item);
        // });
        console.log(data);
        // this.setState({
        //   movies: [...data.results]
        // });
      });
  }

  render() {
    // return <MoviesList data={this.state.movies} />;
    return (
      <>
        <div className="backgroundDiv"></div>
        <React.Fragment>
          <YtsTitle />
          <MostPopular popular={this.state.movies} />
        </React.Fragment>
      </>
    );
  }
}

export default Home;

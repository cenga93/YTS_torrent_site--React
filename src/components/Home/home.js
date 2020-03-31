import React, { Component } from "react";
import YtsTitle from "../YtsTitle/ytsTitle";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      mostPopular: []
    };
  }
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

  componentDidMount() {
    fetch(`https://yts.mx/api/v2/list_movies.json?sort_by=download_count`, {
      method: "GET"
    })
      .then(data => data.json())
      .then(({ data }) => {
        let array = [];
        for (let i = 0; i < 4; i++) {
          array.push(data.movies[i]);
        }

        this.setState({
          movies: [...data.movies],
          mostPopular: [...array]
        });
      });
  }

  render() {
    return <YtsTitle popular={this.state.mostPopular} />;
  }
}

export default Home;

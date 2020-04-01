import React, { Component } from "react";
import "./Upcoming.scss";
import MostPopular from "../MostPopular/mostPopular";
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
  limit: 4
};

class Upcoming extends Component {
  constructor() {
    super();

    this.state = {
      upcoming: []
    };
  }

  componentDidMount() {
    fetch(`${api.link}?sort_by=${api.sort}&limit=${api.limit}`)
      .then(data => data.json())
      .then(({ data }) => {
        this.setState({
          upcoming: [...data.movies]
        });
        console.log(this.state.upcoming);
      });
  }

  render() {
    return (
      <section id="upcoming">
        <MostPopular movie={this.state.upcoming} />
      </section>
    );
  }
}
export default Upcoming;

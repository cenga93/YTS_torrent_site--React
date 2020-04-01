import React, { Component } from "react";
import Mostpular from "../MostPopular/mostPopular";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import rcc from "../../assets/img/rss-icon.webp";
import bg from "../../assets/img/background.jpg";
import "./ytsTitle.scss";
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
  sort: `download_count`,
  limit: 4
};

class ytsTitle extends Component {
  constructor() {
    super();

    this.state = {
      mostPopular: []
    };
  }

  componentDidMount() {
    fetch(`${api.link}?sort_by=${api.sort}&limit=${api.limit}`)
      .then(data => data.json())
      .then(({ data }) => {
        this.setState({
          mostPopular: [...data.movies]
        });
      });
  }

  render() {
    return (
      <div>
        <section
          id="ytsTitle"
          style={{
            background: `linear-gradient(180deg, rgba(29, 29, 29, 0.6) 0%, rgb(29, 29, 29) 100%, rgba(29, 29, 29, 0.61) 100%),url(${bg})no-repeat center/cover`
          }}
        >
          <Container className="container_title">
            <h1>Download YTS YIFY movies: HD smallest size</h1>
            <p>
              Welcome to the official YTS.MX (.LT) website. Here you can browse and download YIFY movies in <br /> excellent 720p, 1080p, 2160p 4K and 3D quality, all at the smallest file size. YTS
              Movies Torrents.
            </p>
            <Link to="/blog" className="blogLink">
              IMPORTANT - YTS.MX is the only new official domain for YIFY Movies
            </Link>
            <h5>
              <FontAwesomeIcon icon={faStar} size="sm" className="starIcon" />
              Popular Downloads
              <Link to="/rss-guide" className="float-right">
                <img src={rcc} alt="rcc" />
              </Link>
            </h5>
          </Container>

          {/* MOST POPULAR MOVIES */}
          <Mostpular movie={this.state.mostPopular} />
        </section>
      </div>
    );
  }
}

export default ytsTitle;

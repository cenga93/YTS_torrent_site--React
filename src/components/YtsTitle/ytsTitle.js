import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Movies, SocialIcons, Wrapper } from "../../components";
import { fetchData } from "../../api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import rcc from "../../assets/img/rss-icon.webp";
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
  sort: `download_count`,
  limit: 4,
};

class ytsTitle extends Component {
  constructor() {
    super();

    this.state = {
      mostPopular: [],
    };
  }

  async componentDidMount() {
    const { sort, limit } = api;
    const {
      data: { movies },
    } = await fetchData(sort, limit);
    this.setState({ mostPopular: [...movies] });
  }

  render() {
    const { mostPopular } = this.state;
    return (
      <Wrapper className={this.props.className}>
        <SocialIcons />
        <h1>Download YTS YIFY movies: HD smallest size</h1>
        <p>
          Welcome to the official YTS.MX (.LT) website. Here you can browse and download YIFY movies in <br /> excellent 720p, 1080p, 2160p 4K and 3D quality, all at the smallest file size. YTS Movies
          Torrents.
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

        {/* MOST POPULAR MOVIES */}
        <Movies movie={mostPopular} />
      </Wrapper>
    );
  }
}

export default ytsTitle;

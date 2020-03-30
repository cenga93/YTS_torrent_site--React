import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ytsTitle.scss";
import rcc from "../../assets/img/rss-icon.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
const YtsTitle = () => {
  return (
    <section id="ytsTitle" className="d-none d-md-block d-sm-none">
      <Container>
        <h1>Download YTS YIFY movies: HD smallest size</h1>
        <p>
          Welcome to the official YTS.MX (.LT) website. Here you can browse and
          download YIFY movies in <br /> excellent 720p, 1080p, 2160p 4K and 3D
          quality, all at the smallest file size. YTS Movies Torrents.
        </p>
        <Link to="/blog" className="blogLink">
          IMPORTANT - YTS.MX is the only new official domain for YIFY Movies
        </Link>
        <h5>
          <FontAwesomeIcon icon={faStar} size="sm" className="starIcon" />
          Popular Downloads
          <Link to="/rss-guide" className="float-right">
            <img src={rcc} />
          </Link>
        </h5>
      </Container>
    </section>
  );
};

export default YtsTitle;

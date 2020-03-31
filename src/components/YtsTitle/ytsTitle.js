import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Mostpular from "../MostPopular/mostPopular";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import rcc from "../../assets/img/rss-icon.webp";
import "./ytsTitle.scss";
import bg from "../../assets/img/background.jpg";

const ytsTitle = ({ popular }) => {
  return (
    // TITLE
    <section
      id="ytsTitle"
      style={{
        background: `linear-gradient(180deg, rgba(23,23,23,0.804359243697479) 0%, rgba(15,15,15,0.8099614845938375) 100%),url(${bg})no-repeat center/cover`
      }}
      className="d-none d-md-block d-sm-none"
    >
      <Container className="container_title">
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
            <img src={rcc} alt="rcc" />
          </Link>
        </h5>
      </Container>

      {/* MOST POPULAR MOVIES */}
      <Mostpular popular={popular} />
    </section>
  );
};

export default ytsTitle;

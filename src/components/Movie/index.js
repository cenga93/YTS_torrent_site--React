import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./movie.scss";

const cover = {
  fullHD: `https://yts.mx/assets/images/website/banner1080p.png`,
  hd: `https://yts.mx/assets/images/website/banner720p.png`,
};

const Movie = ({ movie }) => {
  const qualityImages = (movie) => {
    return movie.torrents.map((item, i) => {
      if (item.quality === "1080p") {
        return <img src={cover.fullHD} alt="quality_image" key={i} />;
      } else {
        return <img src={cover.hd} alt="quality_image" key={i} />;
      }
    });
  };

  return (
    <>
      <Link className="movie_link" to={`movie/${movie.id}`}>
        <Card className="m-0 cardOld">
          <Card.Img variant="top" src={movie.medium_cover_image} />
          <div className="overlay">
            {qualityImages(movie)}
            <div className="central">
              <FontAwesomeIcon icon={faStar} size="lg" className="starIcon" />
              <p className="mt-1">{movie.rating} / 10</p>
              <div className="mb-5">
                <p>{movie.genres[0]}</p>
                <p>{movie.genres[1]}</p>
              </div>
            </div>
            <div className="text-center">
              <button className="btn btn_movie">View Details</button>
            </div>
          </div>
        </Card>
      </Link>
      <Link className="movie_title" to={`movie/${movie.slug}`}>
        {movie.title_english}
      </Link>
      <p className="movie_year">{movie.year}</p>
    </>
  );
};

export default Movie;

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
  const nesto = (movie) => {
    let array = [];
    for (let i = 0; i < movie.torrents.length; i++) {
      array.push(movie.torrents[i].quality);
    }
    if (array.includes("1080p")) {
      return <img src={cover.fullHD} alt="1080p" />;
    } else if (array.includes("720p")) {
      return <img src={cover.hd} alt="1080p" />;
    }
  };

  return (
    <div className="col-lg-3 col-md-3 col-sm-6 p-4 hoverCard">
      <Link className="movie_link" to={`movie/${movie.slug}`}>
        <Card className="m-0 cardOld">
          <Card.Img variant="top" src={movie.medium_cover_image} />
          <div className="overlay">
            {nesto(movie)}
            <div className="central">
              <FontAwesomeIcon icon={faStar} size="lg" className="starIcon" />
              <p className="mt-1">{movie.rating} / 10</p>
              <div className="mb-5">
                <p>{movie.genres[0]}</p>
                <p>{movie.genres[1]}</p>
              </div>
            </div>
            <div className="text-center">
              <button className="btn  btn_movie">View Details</button>
            </div>
          </div>
        </Card>
      </Link>
      <Link className="movie_title" to={`movie/${movie.slug}`}>
        {movie.title_english}
      </Link>
      <p className="movie_year">{movie.year}</p>
    </div>
  );
};

export default Movie;
